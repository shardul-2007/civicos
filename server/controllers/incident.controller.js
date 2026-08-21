import Incident from '../models/Incident.js';
import Complaint from '../models/Complaint.js';

export const getIncidents = async (req, res, next) => {
  try {
    const incidents = await Incident.find().populate('complaints').sort({ createdAt: -1 });

    res.json({
      success: true,
      count: incidents.length,
      data: incidents,
    });
  } catch (error) {
    next(error);
  }
};

export const mergeIncidents = async (req, res, next) => {
  try {
    const { title, complaintIds, ward } = req.body;

    if (!complaintIds || complaintIds.length < 2) {
      return res.status(400).json({
        success: false,
        message: 'At least two complaint IDs are required to form an Incident cluster',
      });
    }

    const complaints = await Complaint.find({ _id: { $in: complaintIds } });
    if (complaints.length === 0) {
      return res.status(404).json({ success: false, message: 'Complaints not found' });
    }

    const first = complaints[0];
    const incidentCount = await Incident.countDocuments();
    const incidentId = `INC-2026-${String(incidentCount + 101).padStart(4, '0')}`;

    const incident = await Incident.create({
      incidentId,
      title: title || `${complaints.length} merged ${first.category} complaints in Ward ${first.ward}`,
      category: first.category,
      severity: complaints.some((c) => c.severity === 'CRITICAL') ? 'CRITICAL' : 'HIGH',
      complaints: complaintIds,
      location: first.location,
      address: first.address,
      ward: ward || first.ward,
      confidence: 94,
      status: 'ACTIVE',
    });

    // Update complaints with incident ref
    await Complaint.updateMany({ _id: { $in: complaintIds } }, { incidentId: incident._id });

    res.status(201).json({
      success: true,
      message: `Incident ${incidentId} created by merging ${complaints.length} complaints`,
      data: incident,
    });
  } catch (error) {
    next(error);
  }
};
