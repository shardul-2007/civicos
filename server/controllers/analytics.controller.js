import Complaint from '../models/Complaint.js';
import Department from '../models/Department.js';
import { detectHotspots } from '../services/hotspot.service.js';
import { getSLAStatus } from '../services/sla.service.js';

export const getHotspots = async (req, res, next) => {
  try {
    const complaints = await Complaint.find();
    const hotspots = detectHotspots(complaints);

    res.json({
      success: true,
      count: hotspots.length,
      data: hotspots,
    });
  } catch (error) {
    next(error);
  }
};

export const getDepartmentPerformance = async (req, res, next) => {
  try {
    const departments = await Department.find();
    const stats = await Promise.all(
      departments.map(async (dept) => {
        const total = await Complaint.countDocuments({ department: dept._id });
        const resolved = await Complaint.countDocuments({ department: dept._id, status: 'RESOLVED' });
        const active = total - resolved;

        const deptComplaints = await Complaint.find({ department: dept._id });
        let slaBreaches = 0;
        deptComplaints.forEach((c) => {
          const sla = getSLAStatus(c);
          if (sla.isBreached) slaBreaches++;
        });

        const slaCompliance = total > 0 ? Math.round(((total - slaBreaches) / total) * 100) : 100;

        // Workload Capacity % (baseline capacity = 100 active complaints per department)
        const capacity = 120;
        const workloadPercent = Math.min(100, Math.round((active / capacity) * 100));
        const isOverloaded = workloadPercent >= 80;

        return {
          id: dept._id,
          name: dept.name,
          code: dept.code,
          description: dept.description,
          total,
          resolved,
          active,
          capacity,
          workloadPercent,
          isOverloaded,
          slaBreaches,
          slaCompliance,
        };
      })
    );

    res.json({
      success: true,
      data: stats,
    });
  } catch (error) {
    next(error);
  }
};

export const getSLAMetrics = async (req, res, next) => {
  try {
    const activeComplaints = await Complaint.find({ status: { $ne: 'RESOLVED' } })
      .populate('department')
      .populate('assignedOfficer', 'name email phone');

    const breachedList = [];
    const warningList = [];

    activeComplaints.forEach((c) => {
      const sla = getSLAStatus(c);
      const obj = { ...c.toObject(), sla };
      if (sla.isBreached) {
        breachedList.push(obj);
      } else if (sla.isWarning) {
        warningList.push(obj);
      }
    });

    res.json({
      success: true,
      summary: {
        totalBreached: breachedList.length,
        totalWarning: warningList.length,
      },
      breached: breachedList,
      warnings: warningList,
    });
  } catch (error) {
    next(error);
  }
};
