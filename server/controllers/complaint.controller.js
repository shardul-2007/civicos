import Complaint from '../models/Complaint.js';
import ComplaintHistory from '../models/ComplaintHistory.js';
import Department from '../models/Department.js';
import User from '../models/User.js';
import { generateTrackingCode } from '../utils/tracking.js';
import { analyzeComplaint } from '../services/ai.service.js';
import { calculatePriorityScore } from '../services/priority.service.js';
import { calculateDueDate, getSLAStatus } from '../services/sla.service.js';
import { checkComplaintDuplicate } from '../services/duplicate.service.js';

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
      citizenName,
      citizenEmail,
      citizenPhone,
    } = req.body;

    if (!title || !description || !address || !latitude || !longitude) {
      return res.status(400).json({
        success: false,
        message: 'Missing required fields: title, description, address, latitude, longitude',
      });
    }

    const aiAnalysis = await analyzeComplaint(description, title);
    const category = userCategory || aiAnalysis.category || 'Other';
    const subCategory = aiAnalysis.subCategory || 'General';
    const safetyRisk = aiAnalysis.safetyRisk || false;

    let departmentDoc = await Department.findOne({
      $or: [{ name: aiAnalysis.department }, { name: category }],
    });
    if (!departmentDoc) {
      departmentDoc = await Department.findOne({ code: 'GEN' });
    }

    const nearbyComplaints = await Complaint.find({
      category,
      ward: ward || 14,
      status: { $ne: 'RESOLVED' },
    }).limit(30);

    let duplicateCount = 0;
    const tempNew = {
      category,
      title,
      description,
      location: { type: 'Point', coordinates: [parseFloat(longitude), parseFloat(latitude)] },
    };

    nearbyComplaints.forEach((cand) => {
      const dupCheck = checkComplaintDuplicate(tempNew, cand);
      if (dupCheck.isDuplicate) {
        duplicateCount++;
      }
    });

    const priorityRes = calculatePriorityScore({
      severity: aiAnalysis.severity,
      safetyRisk,
      duplicateCount,
      locationDensity: nearbyComplaints.length,
      category,
    });

    const { dueAt } = calculateDueDate(category, priorityRes.suggestedSeverity, safetyRisk);
    const trackingCode = generateTrackingCode();

    const complaint = await Complaint.create({
      trackingCode,
      citizen: req.user ? req.user._id : null,
      citizenName: citizenName || req.user?.name || 'Anonymous Citizen',
      citizenEmail: citizenEmail || req.user?.email || 'citizen@civicos.gov',
      citizenPhone: citizenPhone || req.user?.phone || '',
      title,
      description,
      image: image || 'https://images.unsplash.com/photo-1515162816999-a0c47dc192f7?auto=format&fit=crop&w=800&q=80',
      category,
      subCategory,
      severity: priorityRes.suggestedSeverity,
      priorityScore: priorityRes.priorityScore,
      safetyRisk,
      department: departmentDoc ? departmentDoc._id : null,
      departmentName: departmentDoc ? departmentDoc.name : 'General Services',
      ward: ward ? parseInt(ward) : 14,
      location: {
        type: 'Point',
        coordinates: [parseFloat(longitude), parseFloat(latitude)],
      },
      address,
      status: 'SUBMITTED',
      duplicateCount,
      dueAt,
    });

    await ComplaintHistory.create({
      complaint: complaint._id,
      actor: req.user ? req.user._id : null,
      actorName: citizenName || req.user?.name || 'Citizen',
      fromStatus: null,
      toStatus: 'SUBMITTED',
      note: `Complaint filed via Citizen Portal. AI detected ${category} (${priorityRes.suggestedSeverity} severity, Priority score: ${priorityRes.priorityScore}).`,
    });

    res.status(201).json({
      success: true,
      message: 'Complaint submitted successfully',
      data: {
        ...complaint.toObject(),
        aiAnalysis,
        sla: getSLAStatus(complaint),
      },
    });
  } catch (error) {
    next(error);
  }
};

export const getComplaints = async (req, res, next) => {
  try {
    const { category, severity, status, department, ward, search, sort, page = 1, limit = 50 } = req.query;

    const query = {};

    if (category) query.category = category;
    if (severity) query.severity = severity;
    if (status) query.status = status;
    if (department) query.department = department;
    if (ward) query.ward = parseInt(ward);

    if (search) {
      query.$or = [
        { title: { $regex: search, $options: 'i' } },
        { description: { $regex: search, $options: 'i' } },
        { trackingCode: { $regex: search, $options: 'i' } },
        { address: { $regex: search, $options: 'i' } },
      ];
    }

    let sortOptions = { createdAt: -1 };
    if (sort === 'priority') sortOptions = { priorityScore: -1, createdAt: -1 };
    if (sort === 'oldest') sortOptions = { createdAt: 1 };
    if (sort === 'dueAt') sortOptions = { dueAt: 1 };

    const skip = (parseInt(page) - 1) * parseInt(limit);
    const count = await Complaint.countDocuments(query);
    const complaints = await Complaint.find(query)
      .populate('department')
      .populate('assignedOfficer', 'name email phone')
      .sort(sortOptions)
      .skip(skip)
      .limit(parseInt(limit));

    const enhanced = complaints.map((c) => {
      const obj = c.toObject();
      obj.sla = getSLAStatus(c);
      return obj;
    });

    res.json({
      success: true,
      count,
      totalPages: Math.ceil(count / parseInt(limit)),
      currentPage: parseInt(page),
      data: enhanced,
    });
  } catch (error) {
    next(error);
  }
};

export const getComplaintById = async (req, res, next) => {
  try {
    const complaint = await Complaint.findById(req.params.id)
      .populate('department')
      .populate('assignedOfficer', 'name email phone ward');

    if (!complaint) {
      return res.status(404).json({ success: false, message: 'Complaint not found' });
    }

    const history = await ComplaintHistory.find({ complaint: complaint._id }).sort({ createdAt: 1 });

    const obj = complaint.toObject();
    obj.sla = getSLAStatus(complaint);
    obj.history = history;

    res.json({
      success: true,
      data: obj,
    });
  } catch (error) {
    next(error);
  }
};

export const trackComplaint = async (req, res, next) => {
  try {
    const { trackingCode } = req.params;

    const complaint = await Complaint.findOne({ trackingCode: trackingCode.toUpperCase() })
      .populate('department')
      .populate('assignedOfficer', 'name email phone');

    if (!complaint) {
      return res.status(404).json({ success: false, message: 'Invalid tracking code. Please verify and try again.' });
    }

    const history = await ComplaintHistory.find({ complaint: complaint._id }).sort({ createdAt: 1 });

    const obj = complaint.toObject();
    obj.sla = getSLAStatus(complaint);
    obj.history = history;

    res.json({
      success: true,
      data: obj,
    });
  } catch (error) {
    next(error);
  }
};

export const getOfficerComplaints = async (req, res, next) => {
  try {
    const { status, sort, department } = req.query;

    const query = {};

    if (status) {
      const statusArr = status.split(',').map((s) => s.trim());
      query.status = { $in: statusArr };
    }

    if (department) {
      query.department = department;
    } else if (req.user?.department) {
      query.department = req.user.department;
    }

    let sortOptions = { priorityScore: -1, createdAt: -1 };
    if (sort === 'oldest') sortOptions = { createdAt: 1 };
    if (sort === 'dueAt') sortOptions = { dueAt: 1 };

    const complaints = await Complaint.find(query)
      .populate('department')
      .populate('assignedOfficer', 'name email phone ward')
      .sort(sortOptions);

    const enhanced = complaints.map((c) => {
      const obj = c.toObject();
      obj.sla = getSLAStatus(c);
      return obj;
    });

    res.json({
      success: true,
      count: enhanced.length,
      data: enhanced,
    });
  } catch (error) {
    next(error);
  }
};

export const getMyComplaints = async (req, res, next) => {
  try {
    const complaints = await Complaint.find({ citizen: req.user._id })
      .populate('department')
      .sort({ createdAt: -1 });

    const enhanced = complaints.map((c) => {
      const obj = c.toObject();
      obj.sla = getSLAStatus(c);
      return obj;
    });

    res.json({
      success: true,
      count: enhanced.length,
      data: enhanced,
    });
  } catch (error) {
    next(error);
  }
};

export const updateComplaintStatus = async (req, res, next) => {
  try {
    const { status, note } = req.body;

    const complaint = await Complaint.findById(req.params.id);
    if (!complaint) {
      return res.status(404).json({ success: false, message: 'Complaint not found' });
    }

    const fromStatus = complaint.status;
    complaint.status = status;

    if (status === 'RESOLVED') {
      complaint.resolvedAt = new Date();
    }

    await complaint.save();

    await ComplaintHistory.create({
      complaint: complaint._id,
      actor: req.user ? req.user._id : null,
      actorName: req.user?.name || 'Officer',
      fromStatus,
      toStatus: status,
      note: note || `Status updated from ${fromStatus} to ${status}`,
    });

    res.json({
      success: true,
      message: `Status updated to ${status}`,
      data: {
        ...complaint.toObject(),
        sla: getSLAStatus(complaint),
      },
    });
  } catch (error) {
    next(error);
  }
};

export const verifyResolution = async (req, res, next) => {
  try {
    const { verified, note } = req.body;

    const complaint = await Complaint.findById(req.params.id);
    if (!complaint) {
      return res.status(404).json({ success: false, message: 'Complaint not found' });
    }

    const fromStatus = complaint.status;

    if (verified) {
      complaint.status = 'RESOLVED';
      if (!complaint.resolvedAt) {
        complaint.resolvedAt = new Date();
      }
      await complaint.save();

      await ComplaintHistory.create({
        complaint: complaint._id,
        actor: req.user ? req.user._id : null,
        actorName: req.user?.name || 'Citizen',
        fromStatus,
        toStatus: 'RESOLVED',
        note: note || 'Citizen confirmed resolution. Work verified successfully.',
      });

      res.json({ success: true, message: 'Resolution verified by citizen. Issue marked RESOLVED.', data: complaint });
    } else {
      // Reopen complaint if unresolved
      complaint.status = 'IN_PROGRESS';
      complaint.resolvedAt = null;
      await complaint.save();

      await ComplaintHistory.create({
        complaint: complaint._id,
        actor: req.user ? req.user._id : null,
        actorName: req.user?.name || 'Citizen',
        fromStatus,
        toStatus: 'IN_PROGRESS',
        note: note || 'Citizen marked issue as still unresolved. Complaint reopened for field review.',
      });

      res.json({ success: true, message: 'Complaint reopened for field inspection', data: complaint });
    }
  } catch (error) {
    next(error);
  }
};

export const assignComplaint = async (req, res, next) => {
  try {
    const { departmentId, officerId, note } = req.body;

    const complaint = await Complaint.findById(req.params.id);
    if (!complaint) {
      return res.status(404).json({ success: false, message: 'Complaint not found' });
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
      }
    }

    if (complaint.status === 'SUBMITTED') {
      complaint.status = 'ASSIGNED';
    }

    await complaint.save();

    await ComplaintHistory.create({
      complaint: complaint._id,
      actor: req.user ? req.user._id : null,
      actorName: req.user?.name || 'Admin/Officer',
      fromStatus: complaint.status,
      toStatus: complaint.status,
      note: note || 'Assigned department/officer updated.',
    });

    res.json({
      success: true,
      message: 'Complaint reassigned successfully',
      data: complaint,
    });
  } catch (error) {
    next(error);
  }
};
