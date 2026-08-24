import {
  getConnectedServicesStatus,
  getGatewayLogs,
  dispatchToDepartmentApi,
  normalizeToCommonDataStandard,
  recordCallbackLog,
} from '../services/interoperability.service.js';
import Complaint from '../models/Complaint.js';
import ComplaintHistory from '../models/ComplaintHistory.js';

export const getServices = async (req, res) => {
  try {
    const services = getConnectedServicesStatus();
    return res.json({
      success: true,
      count: services.length,
      data: services,
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

export const getLogs = async (req, res) => {
  try {
    const logs = getGatewayLogs();
    return res.json({
      success: true,
      count: logs.length,
      data: logs,
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

export const dispatchComplaint = async (req, res) => {
  try {
    const { code } = req.params;
    let complaint = await Complaint.findOne({ trackingCode: code.toUpperCase() });

    if (!complaint) {
      return res.status(404).json({ success: false, message: 'Complaint not found in database' });
    }

    const dispatchResult = await dispatchToDepartmentApi(complaint.toObject());

    // Update complaint with external department tracking details if not set
    if (!complaint.externalDepartmentId) {
      complaint.externalDepartmentId = dispatchResult.externalDepartmentId;
      complaint.secondaryDepartmentName = dispatchResult.secondaryDepartmentName;
      complaint.secondaryExternalId = dispatchResult.secondaryExternalId;
      complaint.interoperabilityStatus = 'ACCEPTED_BY_DEPT_API';
      await complaint.save();
    }

    return res.json({
      success: true,
      message: 'Complaint transformed into CIV-ODF v1.0 data standard and dispatched to Government Department Gateway API.',
      data: {
        complaint,
        interoperability: dispatchResult,
      },
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

export const simulateDepartmentStatusUpdate = async (req, res) => {
  try {
    const { trackingCode, status, note } = req.body;
    if (!trackingCode || !status) {
      return res.status(400).json({ success: false, message: 'Missing trackingCode or status' });
    }

    let complaint = await Complaint.findOne({ trackingCode: trackingCode.toUpperCase() });

    if (!complaint) {
      return res.status(404).json({ success: false, message: `⚠️ Issue not found: Complaint code "${trackingCode}" does not exist in database.` });
    }

    const oldStatus = complaint.status;
    complaint.status = status;
    complaint.interoperabilityStatus = status === 'RESOLVED' ? 'RESOLVED_EXT' : 'IN_PROGRESS_EXT';
    if (status === 'RESOLVED') {
      complaint.resolvedAt = new Date();
    }
    await complaint.save();

    // Map category to exact department gateway code & name
    let gatewayCode = 'MUNI-CP-API';
    let gatewayName = 'Unified Municipal Gateway';
    const cat = complaint.category || 'Other';

    if (cat === 'Road Damage' || cat === 'Pothole') {
      gatewayCode = 'ROAD-PW-API';
      gatewayName = 'Roads & Municipal Infrastructure Portal';
    } else if (cat === 'Water Leakage' || cat === 'Drainage' || cat === 'Sewage') {
      gatewayCode = 'WATER-WSS-API';
      gatewayName = 'Water Supply & Sewerage Board Gateway';
    } else if (cat === 'Garbage') {
      gatewayCode = 'WASTE-SWM-API';
      gatewayName = 'Solid Waste Management & Sanitation System';
    } else if (cat === 'Streetlight') {
      gatewayCode = 'LIGHT-ELEC-API';
      gatewayName = 'Street Lighting Control System';
    } else if (cat === 'Public Safety' || cat === 'Tree/Parks') {
      gatewayCode = 'HEALTH-PHE-API';
      gatewayName = 'Public Health & Emergency Response';
    }

    // Record callback in gateway transaction logs
    const callbackLog = recordCallbackLog(complaint, status, gatewayCode, gatewayName);

    const historyNote = note || `External Department API Callback (${complaint.externalDepartmentId || gatewayCode}): Status updated from ${oldStatus} to ${status}.`;

    await ComplaintHistory.create({
      complaint: complaint._id,
      actorName: gatewayName,
      fromStatus: oldStatus,
      toStatus: status,
      note: historyNote,
    });

    const odfPayload = normalizeToCommonDataStandard(complaint.toObject());

    return res.json({
      success: true,
      message: `Department callback processed: ${complaint.trackingCode} status updated to ${status} in MongoDB.`,
      data: {
        complaint: complaint.toObject(),
        odfPayload,
        callbackLog,
      },
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};
