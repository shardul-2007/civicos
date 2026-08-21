export const calculatePriorityScore = ({
  severity = 'MEDIUM',
  safetyRisk = false,
  duplicateCount = 0,
  locationDensity = 0,
  category = 'Other',
  createdAt = new Date(),
}) => {
  let score = 0;

  // 1. Severity weight (max 35)
  const severityScores = {
    CRITICAL: 35,
    HIGH: 25,
    MEDIUM: 15,
    LOW: 5,
  };
  score += severityScores[severity] || 15;

  // 2. Safety Risk weight (max 25)
  if (safetyRisk) {
    score += 25;
  }

  // 3. Duplicate reports weight (max 15)
  score += Math.min(15, duplicateCount * 5);

  // 4. Location density weight (max 15)
  score += Math.min(15, locationDensity * 3);

  // 5. Category urgency weight (max 10)
  const categoryUrgency = {
    'Public Safety': 10,
    'Road Damage': 10,
    'Water Leakage': 5,
    'Drainage': 5,
    'Garbage': 3,
    'Streetlight': 2,
    'Other': 0,
  };
  score += categoryUrgency[category] || 0;

  // 6. Age factor (max 10)
  const ageInHours = (new Date().getTime() - new Date(createdAt).getTime()) / (1000 * 60 * 60);
  score += Math.min(10, Math.floor(ageInHours * 0.2));

  // Cap at 100
  const finalScore = Math.min(100, Math.max(1, Math.round(score)));

  // Derived severity check if non-consistent
  let derivedSeverity = severity;
  if (finalScore >= 75) derivedSeverity = 'CRITICAL';
  else if (finalScore >= 55) derivedSeverity = 'HIGH';
  else if (finalScore >= 30) derivedSeverity = 'MEDIUM';
  else derivedSeverity = 'LOW';

  return {
    priorityScore: finalScore,
    suggestedSeverity: derivedSeverity,
  };
};
