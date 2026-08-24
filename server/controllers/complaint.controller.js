import Complaint from '../models/Complaint.js';
import ComplaintHistory from '../models/ComplaintHistory.js';
import Department from '../models/Department.js';
import User from '../models/User.js';
import { generateTrackingCode } from '../utils/tracking.js';
import { analyzeComplaint } from '../services/ai.service.js';
import { calculatePriorityScore } from '../services/priority.service.js';
import { calculateDueDate, getSLAStatus } from '../services/sla.service.js';
import { dispatchToDepartmentApi } from '../services/interoperability.service.js';

/**
 * Creates and persists a new citizen complaint in MongoDB
 */
export const createComplaint = async (req, res, next) => {
  try {
    const {
      title,
      description,
      image,
      category: userCategory,
      ward,
      address,
      latitude,
      longitude,
      city,
      district,
      state,
      pincode,
      country,
      accuracy,
      citizenName,
      citizenEmail,
      citizenPhone,
    } = req.body;

    if (!title || !description || !address) {
      return res.status(400).json({
        success: false,
        message: 'Missing required fields: title, description, and address are required.',
      });
    }

    const aiAnalysis = await analyzeComplaint(description, title);
    const category = userCategory || aiAnalysis.category || 'Other';
    const subCategory = aiAnalysis.subCategory || 'General';
    const safetyRisk = aiAnalysis.safetyRisk || false;

    let trackingCode = generateTrackingCode();

    let departmentDoc = await Department.findOne({
      $or: [{ name: aiAnalysis.department }, { name: category }],
    });
    if (!departmentDoc) {
      departmentDoc = await Department.findOne({ code: 'GEN' });
    }

    const priorityRes = calculatePriorityScore({
      severity: aiAnalysis.severity,
      safetyRisk,
      duplicateCount: 0,
      locationDensity: 1,
      category,
    });

    const { dueAt } = calculateDueDate(category, priorityRes.suggestedSeverity, safetyRisk);

    const latNum = parseFloat(latitude) || 18.5204;
    const lngNum = parseFloat(longitude) || 73.8567;

    // Parse ward cleanly into number
    let wardNum = 14;
    if (ward && !isNaN(parseInt(ward))) {
      wardNum = parseInt(ward);
    }

    // Insert persistent document into MongoDB
    const complaint = await Complaint.create({
      trackingCode,
      citizen: req.user ? req.user._id : null,
      citizenName: citizenName || req.user?.name || 'Citizen',
      citizenEmail: citizenEmail || req.user?.email || 'citizen@civicos.gov',
      citizenPhone: citizenPhone || req.user?.phone || '',
      title,
      description,
      image: image || '',
      category,
      subCategory,
      severity: priorityRes.suggestedSeverity,
      priorityScore: priorityRes.priorityScore,
      department: departmentDoc ? departmentDoc._id : null,
      departmentName: departmentDoc ? departmentDoc.name : 'Public Works Department',
      ward: wardNum,
      address,
      latitude: latNum,
      longitude: lngNum,
      city: city || 'Pune',
      district: district || 'Pune',
      state: state || 'Maharashtra',
      pincode: pincode || '411001',
      country: country || 'India',
      accuracy: accuracy ? parseFloat(accuracy) : null,
      location: {
        type: 'Point',
        coordinates: [lngNum, latNum],
      },
      dueAt,
      status: 'SUBMITTED',
    });

    // Auto-dispatch through Interoperability Gateway to attach External Dept ID
    try {
      const interopRes = await dispatchToDepartmentApi(complaint.toObject());
      complaint.externalDepartmentId = interopRes.externalDepartmentId;
      complaint.secondaryDepartmentName = interopRes.secondaryDepartmentName;
      complaint.secondaryExternalId = interopRes.secondaryExternalId;
      complaint.interoperabilityStatus = 'ACCEPTED_BY_DEPT_API';
      await complaint.save();
    } catch (interopErr) {
      console.warn('[Create Complaint] Interop dispatch notice:', interopErr.message);
    }

    // Add initial history audit log in MongoDB
    await ComplaintHistory.create({
      complaint: complaint._id,
      actor: req.user ? req.user._id : null,
      actorName: citizenName || req.user?.name || 'Citizen',
      fromStatus: 'NONE',
      toStatus: 'SUBMITTED',
      note: `Complaint registered in MongoDB (${trackingCode}). AI analysis: ${category} (${priorityRes.suggestedSeverity} severity, Priority: ${priorityRes.priorityScore}/100). Interoperability Dept ID: ${complaint.externalDepartmentId || 'ROAD-PW-8921'}.`,
    });

    const complaintObj = complaint.toObject();
    complaintObj.sla = getSLAStatus(complaint);

    return res.status(201).json({
      success: true,
      message: 'Complaint created and persisted successfully in database.',
      data: complaintObj,
    });
  } catch (error) {
    console.error('[Create Complaint Error]:', error);
    return res.status(500).json({
      success: false,
      message: error.message || 'Report could not be submitted. Please try again.',
    });
  }
};

/**
 * Retrieves all complaints with filters from MongoDB
 */
export const getComplaints = async (req, res, next) => {
  try {
    const { category, severity, status, ward, search, limit = 100 } = req.query;
    const query = {};

    if (category) query.category = category;
    if (severity) query.severity = severity;
    if (status) query.status = status;
    if (ward && !isNaN(parseInt(ward))) query.ward = parseInt(ward);
    if (search) {
      query.$or = [
        { title: { $regex: search, $options: 'i' } },
        { trackingCode: { $regex: search, $options: 'i' } },
        { address: { $regex: search, $options: 'i' } },
      ];
    }

    const list = await Complaint.find(query)
      .populate('department')
      .populate('assignedOfficer', 'name email phone')
      .sort({ createdAt: -1 })
      .limit(parseInt(limit));

    const formatted = list.map((c) => {
      const obj = c.toObject();
      obj.sla = getSLAStatus(c);
      return obj;
    });

    return res.json({
      success: true,
      count: formatted.length,
      data: formatted,
    });
  } catch (error) {
    console.error('[Get Complaints Error]:', error);
    return res.status(500).json({
      success: false,
      message: 'Unable to retrieve issues from database. Please try again.',
    });
  }
};

/**
 * Retrieves a single complaint by MongoDB _id
 */
export const getComplaintById = async (req, res, next) => {
  try {
    const complaint = await Complaint.findById(req.params.id)
      .populate('department')
      .populate('assignedOfficer', 'name email phone');

    if (!complaint) {
      return res.status(404).json({
        success: false,
        message: '⚠️ Issue not found in database.',
      });
    }

    const history = await ComplaintHistory.find({ complaint: complaint._id }).sort({ createdAt: 1 });
    const complaintObj = complaint.toObject();
    complaintObj.sla = getSLAStatus(complaint);
    complaintObj.history = history;

    return res.json({
      success: true,
      data: complaintObj,
    });
  } catch (error) {
    return res.status(404).json({
      success: false,
      message: '⚠️ Issue not found in database.',
    });
  }
};

/**
 * Tracks a complaint by exact human-readable trackingCode in MongoDB
 */
export const trackComplaint = async (req, res, next) => {
  try {
    const { trackingCode } = req.params;
    if (!trackingCode) {
      return res.status(400).json({ success: false, message: 'Tracking code is required' });
    }

    const cleanCode = trackingCode.trim().toUpperCase();

    const complaint = await Complaint.findOne({ trackingCode: cleanCode })
      .populate('department')
      .populate('assignedOfficer', 'name email phone');

    if (!complaint) {
      return res.status(404).json({
        success: false,
        message: `⚠️ Issue not found: No municipal complaint found matching tracking code "${cleanCode}".`,
      });
    }

    const history = await ComplaintHistory.find({ complaint: complaint._id }).sort({ createdAt: 1 });
    const complaintObj = complaint.toObject();
    complaintObj.sla = getSLAStatus(complaint);
    complaintObj.history = history;

    return res.json({
      success: true,
      data: complaintObj,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Unable to retrieve issue. Please try again.',
    });
  }
};

/**
 * Retrieves officer queue from MongoDB
 */
export const getOfficerComplaints = async (req, res, next) => {
  try {
    const { status, department } = req.query;
    const query = {};

    if (status) {
      const statusArr = status.split(',').map((s) => s.trim());
      query.status = { $in: statusArr };
    }

    if (department) {
      query.department = department;
    }

    const list = await Complaint.find(query)
      .populate('department')
      .populate('assignedOfficer', 'name email phone ward')
      .sort({ priorityScore: -1, createdAt: -1 });

    const formatted = list.map((c) => {
      const obj = c.toObject();
      obj.sla = getSLAStatus(c);
      return obj;
    });

    return res.json({
      success: true,
      count: formatted.length,
      data: formatted,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Unable to retrieve officer queue from database.',
    });
  }
};

/**
 * Retrieves logged-in citizen's complaints from MongoDB
 */
export const getMyComplaints = async (req, res, next) => {
  try {
    if (!req.user?._id) {
      return res.status(401).json({ success: false, message: 'Authentication required' });
    }

    const list = await Complaint.find({ citizen: req.user._id })
      .populate('department')
      .sort({ createdAt: -1 });

    const formatted = list.map((c) => {
      const obj = c.toObject();
      obj.sla = getSLAStatus(c);
      return obj;
    });

    return res.json({
      success: true,
      count: formatted.length,
      data: formatted,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Unable to retrieve your complaints.',
    });
  }
};

/**
 * Updates complaint status in MongoDB and appends history log
 */
export const updateComplaintStatus = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { status, note } = req.body;

    if (!status) {
      return res.status(400).json({ success: false, message: 'Status is required' });
    }

    const complaint = await Complaint.findOne({
      $or: [{ _id: id.match(/^[0-9a-fA-F]{24}$/) ? id : null }, { trackingCode: id.toUpperCase() }],
    });

    if (!complaint) {
      return res.status(404).json({ success: false, message: '⚠️ Issue not found' });
    }

    const oldStatus = complaint.status;
    complaint.status = status;
    if (status === 'RESOLVED') {
      complaint.resolvedAt = new Date();
    }
    await complaint.save();

    await ComplaintHistory.create({
      complaint: complaint._id,
      actor: req.user ? req.user._id : null,
      actorName: req.user?.name || 'Field Officer',
      fromStatus: oldStatus,
      toStatus: status,
      note: note || `Status updated from ${oldStatus} to ${status}.`,
    });

    const history = await ComplaintHistory.find({ complaint: complaint._id }).sort({ createdAt: 1 });
    const complaintObj = complaint.toObject();
    complaintObj.sla = getSLAStatus(complaint);
    complaintObj.history = history;

    return res.json({
      success: true,
      message: `Status updated to ${status} in database.`,
      data: complaintObj,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message || 'Failed updating status.',
    });
  }
};

/**
 * Verifies citizen resolution (closed-loop workflow) in MongoDB
 */
export const verifyResolution = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { verified, feedback } = req.body;

    const complaint = await Complaint.findOne({
      $or: [{ _id: id.match(/^[0-9a-fA-F]{24}$/) ? id : null }, { trackingCode: id.toUpperCase() }],
    });

    if (!complaint) {
      return res.status(404).json({ success: false, message: '⚠️ Issue not found' });
    }

    const oldStatus = complaint.status;
    if (verified) {
      complaint.status = 'RESOLVED';
      complaint.citizenVerified = true;
    } else {
      complaint.status = 'IN_PROGRESS';
      complaint.citizenVerified = false;
      complaint.priorityScore = Math.min(100, complaint.priorityScore + 15);
    }

    await complaint.save();

    await ComplaintHistory.create({
      complaint: complaint._id,
      actor: req.user ? req.user._id : null,
      actorName: complaint.citizenName || 'Citizen',
      fromStatus: oldStatus,
      toStatus: complaint.status,
      note: verified
        ? 'Citizen verified resolution on-site. Complaint closed.'
        : `Citizen reported issue still exists. Case reopened to IN_PROGRESS and priority escalated (${complaint.priorityScore}/100).`,
    });

    const complaintObj = complaint.toObject();
    complaintObj.sla = getSLAStatus(complaint);

    return res.json({
      success: true,
      message: verified ? 'Resolution verified by citizen.' : 'Issue reopened and escalated.',
      data: complaintObj,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message || 'Failed processing resolution verification.',
    });
  }
};

/**
 * Assigns officer or department in MongoDB
 */
export const assignComplaint = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { officerId, departmentId } = req.body;

    const complaint = await Complaint.findById(id);
    if (!complaint) {
      return res.status(404).json({ success: false, message: '⚠️ Issue not found' });
    }

    if (departmentId) {
      const dept = await Department.findById(departmentId);
      if (dept) {
        complaint.department = dept._id;
        complaint.departmentName = dept.name;
      }
    }

    if (officerId) {
      const officer = await User.findById(officerId);
      if (officer) {
        complaint.assignedOfficer = officer._id;
        complaint.status = 'ASSIGNED';
      }
    }

    await complaint.save();

    await ComplaintHistory.create({
      complaint: complaint._id,
      actor: req.user ? req.user._id : null,
      actorName: req.user?.name || 'Administrator',
      fromStatus: complaint.status,
      toStatus: complaint.status,
      note: `Reassigned to ${complaint.departmentName}.`,
    });

    return res.json({
      success: true,
      message: 'Complaint reassigned successfully',
      data: complaint,
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};
