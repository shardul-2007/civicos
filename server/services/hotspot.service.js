import { calculateDistanceMeters } from './duplicate.service.js';

export const detectHotspots = (complaints = []) => {
  const activeComplaints = complaints.filter((c) => c.status !== 'RESOLVED' && c.status !== 'REJECTED');

  const clusters = [];
  const visited = new Set();

  for (let i = 0; i < activeComplaints.length; i++) {
    if (visited.has(activeComplaints[i]._id.toString())) continue;

    const base = activeComplaints[i];
    const [bLon, bLat] = base.location?.coordinates || [0, 0];
    const currentCluster = [base];

    visited.add(base._id.toString());

    for (let j = i + 1; j < activeComplaints.length; j++) {
      if (visited.has(activeComplaints[j]._id.toString())) continue;

      const comp = activeComplaints[j];
      const [cLon, cLat] = comp.location?.coordinates || [0, 0];

      const dist = calculateDistanceMeters(bLat, bLon, cLat, cLon);

      // Within 500m radius and same category or ward
      if (dist <= 500 && (comp.ward === base.ward || comp.category === base.category)) {
        currentCluster.push(comp);
        visited.add(comp._id.toString());
      }
    }

    if (currentCluster.length >= 3) {
      // Calculate centroid
      const avgLat = currentCluster.reduce((sum, c) => sum + c.location.coordinates[1], 0) / currentCluster.length;
      const avgLon = currentCluster.reduce((sum, c) => sum + c.location.coordinates[0], 0) / currentCluster.length;

      const hasCritical = currentCluster.some((c) => c.severity === 'CRITICAL');
      const hasHigh = currentCluster.some((c) => c.severity === 'HIGH');

      clusters.push({
        id: `HOTSPOT-${base.ward}-${clusters.length + 1}`,
        ward: base.ward,
        category: base.category,
        title: `${currentCluster.length} ${base.category} reports in Ward ${base.ward}`,
        complaintCount: currentCluster.length,
        severity: hasCritical ? 'CRITICAL' : hasHigh ? 'HIGH' : 'MEDIUM',
        centroid: [avgLon, avgLat],
        address: base.address || `Ward ${base.ward} Cluster`,
        complaintIds: currentCluster.map((c) => c._id),
        trackingCodes: currentCluster.map((c) => c.trackingCode),
      });
    }
  }

  return clusters;
};
