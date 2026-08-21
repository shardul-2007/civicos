// Haversine distance formula in meters
export const calculateDistanceMeters = (lat1, lon1, lat2, lon2) => {
  const R = 6371e3; // Earth radius in meters
  const rad = Math.PI / 180;
  const dLat = (lat2 - lat1) * rad;
  const dLon = (lon2 - lon1) * rad;

  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1 * rad) * Math.cos(lat2 * rad) * Math.sin(dLon / 2) * Math.sin(dLon / 2);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
};

// Token-based Jaccard similarity index (0 to 1)
export const calculateTextSimilarity = (str1 = '', str2 = '') => {
  const tokenize = (s) =>
    s
      .toLowerCase()
      .replace(/[^\w\s]/g, '')
      .split(/\s+/)
      .filter((w) => w.length > 2);

  const set1 = new Set(tokenize(str1));
  const set2 = new Set(tokenize(str2));

  if (set1.size === 0 || set2.size === 0) return 0;

  const intersection = new Set([...set1].filter((x) => set2.has(x)));
  const union = new Set([...set1, ...set2]);

  return intersection.size / union.size;
};

export const checkComplaintDuplicate = (newComplaint, candidate) => {
  // Category match requirement
  const sameCategory = newComplaint.category === candidate.category;
  if (!sameCategory) return { isDuplicate: false, confidence: 0 };

  const [lon1, lat1] = newComplaint.location?.coordinates || [0, 0];
  const [lon2, lat2] = candidate.location?.coordinates || [0, 0];

  const distanceMeters = calculateDistanceMeters(lat1, lon1, lat2, lon2);
  const textSim = calculateTextSimilarity(
    `${newComplaint.title} ${newComplaint.description}`,
    `${candidate.title} ${candidate.description}`
  );

  // Proximity score (1.0 at 0m, decaying to 0 at 500m)
  const proximityScore = Math.max(0, (500 - distanceMeters) / 500);

  // Composite duplicate confidence (60% text, 40% spatial)
  const duplicateConfidence = textSim * 0.6 + proximityScore * 0.4;

  const isDuplicate = distanceMeters <= 500 && textSim >= 0.25 && duplicateConfidence >= 0.45;

  return {
    isDuplicate,
    confidence: Math.round(duplicateConfidence * 100),
    distanceMeters: Math.round(distanceMeters),
    textSimilarity: Math.round(textSim * 100),
  };
};
