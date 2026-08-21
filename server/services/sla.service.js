const SLA_HOURS_BY_CATEGORY = {
  'Road Damage': 4,
  'Water Leakage': 12,
  'Drainage': 24,
  'Garbage': 24,
  'Streetlight': 72,
  'Public Safety': 4,
  'Other': 48,
};

export const calculateDueDate = (category, severity, safetyRisk, createdAt = new Date()) => {
  let hours = SLA_HOURS_BY_CATEGORY[category] || 24;

  // Accelerate SLA if high safety risk or critical severity
  if (safetyRisk || severity === 'CRITICAL') {
    hours = Math.min(hours, 4);
  } else if (severity === 'HIGH') {
    hours = Math.min(hours, 8);
  }

  const dueAt = new Date(createdAt.getTime() + hours * 60 * 60 * 1000);
  return { hours, dueAt };
};

export const getSLAStatus = (complaint) => {
  const createdAt = new Date(complaint.createdAt);
  const dueAt = new Date(complaint.dueAt);
  const resolvedAt = complaint.resolvedAt ? new Date(complaint.resolvedAt) : null;
  const now = new Date();

  const totalDurationMs = dueAt.getTime() - createdAt.getTime();
  const targetTime = resolvedAt || now;
  const elapsedMs = targetTime.getTime() - createdAt.getTime();

  const percentConsumed = Math.min(100, Math.max(0, (elapsedMs / totalDurationMs) * 100));
  const isResolved = complaint.status === 'RESOLVED';
  
  const isBreached = !isResolved && now > dueAt;
  const isWarning = !isResolved && !isBreached && percentConsumed >= 80;

  const msRemaining = dueAt.getTime() - now.getTime();
  const hoursRemaining = Math.max(0, (msRemaining / (1000 * 60 * 60))).toFixed(1);

  return {
    isBreached,
    isWarning,
    percentConsumed: Math.round(percentConsumed),
    hoursRemaining: parseFloat(hoursRemaining),
    totalSLAHours: Math.round(totalDurationMs / (1000 * 60 * 60)),
    statusLabel: isResolved
      ? 'Resolved in SLA'
      : isBreached
      ? '🔴 SLA BREACHED'
      : isWarning
      ? '🟡 SLA WARNING (80%+ Consumed)'
      : '🟢 Within SLA',
  };
};
