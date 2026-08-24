import {
  getConnectedServicesStatus,
  getGatewayLogs,
  dispatchToDepartmentApi,
  normalizeToCommonDataStandard,
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
      return res.status(404).json({ success: false, message: 'Complaint not found' });
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
      message: 'Complaint successfully transformed into CIV-ODF v1.0 data standard and dispatched to Government Department Gateway API.',
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
      return res.status(404).json({ success: false, message: 'Complaint not found' });
    }

    const oldStatus = complaint.status;
    complaint.status = status;
    complaint.interoperabilityStatus = status === 'RESOLVED' ? 'RESOLVED_EXT' : 'IN_PROGRESS_EXT';
    if (status === 'RESOLVED') {
      complaint.resolvedAt = new Date();
    }
    await complaint.save();

    const historyNote = note || `External Government Department API Callback (${complaint.externalDepartmentId || 'DEPT-API'}): Status updated from ${oldStatus} to ${status}.`;

    await ComplaintHistory.create({
      complaint: complaint._id,
      actorName: complaint.departmentName || 'Government Department API Gateway',
      fromStatus: oldStatus,
      toStatus: status,
      note: historyNote,
    });

    return res.json({
      success: true,
      message: `External Government API callback processed: Complaint status updated to ${status}.`,
      data: complaint,
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};
