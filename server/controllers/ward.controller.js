import Ward from '../models/Ward.js';
import Complaint from '../models/Complaint.js';

export const getWards = async (req, res, next) => {
  try {
    const wards = await Ward.find().sort({ number: 1 });

    const wardStats = await Promise.all(
      wards.map(async (w) => {
        const total = await Complaint.countDocuments({ ward: w.number });
        const critical = await Complaint.countDocuments({ ward: w.number, severity: 'CRITICAL' });
        const high = await Complaint.countDocuments({ ward: w.number, severity: 'HIGH' });
        const drainage = await Complaint.countDocuments({ ward: w.number, category: 'Drainage' });

        return {
          ...w.toObject(),
          totalComplaints: total,
          criticalComplaints: critical,
          highComplaints: high,
          drainageComplaints: drainage,
        };
      })
    );

    res.json({
      success: true,
      count: wardStats.length,
      data: wardStats,
    });
  } catch (error) {
    next(error);
  }
};
