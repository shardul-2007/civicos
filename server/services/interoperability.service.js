/**
 * CivicOS Interoperability Engine (SIH 2026 Problem Alignment)
 * Common Integration Layer & Department API Adapters
 */

// Simulated Connected Government Department Services Registry
const CONNECTED_GOVERNMENT_SERVICES = [
  {
    id: 'road-infrastructure-gateway',
    code: 'ROAD-PW-API',
    name: 'Roads & Municipal Infrastructure Portal',
    department: 'Roads & Municipal Infrastructure',
    categories: ['Road Damage', 'Pothole'],
    status: 'ONLINE',
    health: '99.8%',
    latencyMs: 14,
    requestsToday: 1420,
    successRate: '99.6%',
    pendingSyncs: 3,
    lastSyncAt: new Date().toISOString(),
    isPrototype: true,
    label: 'Prototype Government API (Demo Integration)',
  },
  {
    id: 'waste-management-gateway',
    code: 'WASTE-SWM-API',
    name: 'Solid Waste Management & Sanitation System',
    department: 'Sanitation & Solid Waste Dept',
    categories: ['Garbage'],
    status: 'ONLINE',
    health: '99.9%',
    latencyMs: 18,
    requestsToday: 2180,
    successRate: '99.8%',
    pendingSyncs: 5,
    lastSyncAt: new Date().toISOString(),
    isPrototype: true,
    label: 'Prototype Government API (Demo Integration)',
  },
  {
    id: 'water-sewerage-gateway',
    code: 'WATER-WSS-API',
    name: 'Water Supply & Sewerage Board Gateway',
    department: 'Water Supply & Sanitation Dept',
    categories: ['Water Leakage', 'Drainage', 'Sewage'],
    status: 'ONLINE',
    health: '99.4%',
    latencyMs: 24,
    requestsToday: 1840,
    successRate: '99.1%',
    pendingSyncs: 8,
    lastSyncAt: new Date().toISOString(),
    isPrototype: true,
    label: 'Prototype Government API (Demo Integration)',
  },
  {
    id: 'street-lighting-gateway',
    code: 'LIGHT-ELEC-API',
    name: 'Street Lighting & Power Grid Control System',
    department: 'Electrical Services Dept',
    categories: ['Streetlight'],
    status: 'ONLINE',
    health: '100.0%',
    latencyMs: 11,
    requestsToday: 960,
    successRate: '100.0%',
    pendingSyncs: 1,
    lastSyncAt: new Date().toISOString(),
    isPrototype: true,
    label: 'Prototype Government API (Demo Integration)',
  },
  {
    id: 'public-health-safety-gateway',
    code: 'HEALTH-PHE-API',
    name: 'Public Health & Emergency Hazard Response',
    department: 'Public Safety & Emergency Response',
    categories: ['Public Safety', 'Tree/Parks'],
    status: 'ONLINE',
    health: '99.7%',
    latencyMs: 15,
    requestsToday: 740,
    successRate: '99.5%',
    pendingSyncs: 2,
    lastSyncAt: new Date().toISOString(),
    isPrototype: true,
    label: 'Prototype Government API (Demo Integration)',
  },
  {
    id: 'municipal-grievance-gateway',
    code: 'MUNI-CP-API',
    name: 'Unified Central Municipal Grievance Portal',
    department: 'General Municipal Services',
    categories: ['Other'],
    status: 'ONLINE',
    health: '99.9%',
    latencyMs: 16,
    requestsToday: 3100,
    successRate: '99.7%',
    pendingSyncs: 4,
    lastSyncAt: new Date().toISOString(),
    isPrototype: true,
    label: 'Prototype Government API (Demo Integration)',
  },
];

// Transaction audit logs for the API Gateway
const GATEWAY_TRANSACTION_LOGS = [
  {
    id: 'log_101',
    timestamp: new Date(Date.now() - 3600000 * 0.5).toISOString(),
    requestId: 'CIV-138987-644E',
    externalId: 'WATER-WSS-8891',
    gatewayCode: 'WATER-WSS-API',
    action: 'DISPATCH_ACCEPTED',
    latencyMs: 22,
    status: 'SUCCESS',
    details: 'Normalized payload accepted by Water Board Gateway API.',
  },
  {
    id: 'log_102',
    timestamp: new Date(Date.now() - 3600000 * 1.2).toISOString(),
    requestId: 'CIV-284791-889B',
    externalId: 'ROAD-PW-4012',
    gatewayCode: 'ROAD-PW-API',
    action: 'STATUS_SYNC_RECEIVED',
    latencyMs: 14,
    status: 'SUCCESS',
    details: 'Road Dept API callback: Status updated to IN_PROGRESS.',
  },
  {
    id: 'log_103',
    timestamp: new Date(Date.now() - 3600000 * 2.5).toISOString(),
    requestId: 'CIV-993812-441A',
    externalId: 'LIGHT-ELEC-7714',
    gatewayCode: 'LIGHT-ELEC-API',
    action: 'RESOLVED_CALLBACK',
    latencyMs: 11,
    status: 'SUCCESS',
    details: 'Luminaire replacement verified by Electrical Services API.',
  },
];

/**
 * Normalizes a CivicOS complaint into the Open Civic Data Format (CIV-ODF v1.0)
 */
export const normalizeToCommonDataStandard = (complaint) => {
  const primaryDept = complaint.departmentName || 'General Municipal Services';
  const category = complaint.category || 'Other';

  // Generate department-specific prefix
  let deptPrefix = 'MUNI-CP';
  if (category === 'Road Damage' || category === 'Pothole') deptPrefix = 'ROAD-PW';
  else if (category === 'Water Leakage' || category === 'Drainage' || category === 'Sewage') deptPrefix = 'WATER-WSS';
  else if (category === 'Garbage') deptPrefix = 'WASTE-SWM';
  else if (category === 'Streetlight') deptPrefix = 'LIGHT-ELEC';
  else if (category === 'Public Safety' || category === 'Tree/Parks') deptPrefix = 'HEALTH-PHE';

  const randomNum = Math.floor(1000 + Math.random() * 9000);
  const externalDepartmentId = `${deptPrefix}-${randomNum}`;

  // Check for multi-department cross-linked requests (e.g. Road Damage + Water Leak)
  let secondaryDepartmentName = null;
  let secondaryExternalId = null;

  const descLower = (complaint.description || '').toLowerCase();
  const titleLower = (complaint.title || '').toLowerCase();
  const fullText = `${titleLower} ${descLower}`;

  if (category === 'Road Damage' && (fullText.includes('water') || fullText.includes('leak') || fullText.includes('pipe'))) {
    secondaryDepartmentName = 'Water Supply & Sanitation Dept';
    secondaryExternalId = `WATER-WSS-${Math.floor(1000 + Math.random() * 9000)}`;
  } else if (category === 'Water Leakage' && (fullText.includes('road') || fullText.includes('pothole') || fullText.includes('asphalt'))) {
    secondaryDepartmentName = 'Roads & Municipal Infrastructure';
    secondaryExternalId = `ROAD-PW-${Math.floor(1000 + Math.random() * 9000)}`;
  }

  return {
    schemaVersion: 'CIV-ODF v1.0',
    requestId: complaint.trackingCode || `CIV-2026-${Math.floor(100000 + Math.random() * 900000)}`,
    externalDepartmentId,
    secondaryDepartmentName,
    secondaryExternalId,
    sourcePlatform: 'CivicOS Interoperability Engine v2.5',
    category: complaint.category,
    subCategory: complaint.subCategory || 'General',
    severity: complaint.severity || 'MEDIUM',
    priorityScore: complaint.priorityScore || 65,
    primaryDepartment: primaryDept,
    location: {
      latitude: complaint.latitude || 18.5204,
      longitude: complaint.longitude || 73.8567,
      address: complaint.address || 'Municipal Location',
      city: complaint.city || 'Pune',
      district: complaint.district || 'Pune',
      state: complaint.state || 'Maharashtra',
      pincode: complaint.pincode || '411001',
      country: complaint.country || 'India',
      accuracy: complaint.accuracy || null,
    },
    citizenInfo: {
      name: complaint.citizenName || 'Citizen User',
      email: complaint.citizenEmail || 'citizen@civicos.gov',
      phone: complaint.citizenPhone || '',
    },
    evidence: {
      imageUrl: complaint.image || '',
    },
    interoperabilityStatus: 'ACCEPTED_BY_DEPT_API',
    dispatchTimestamp: new Date().toISOString(),
  };
};

/**
 * Simulates dispatching a normalized complaint through the Interoperability Gateway
 */
export const dispatchToDepartmentApi = async (complaint) => {
  const odfPayload = normalizeToCommonDataStandard(complaint);

  // Find target gateway
  const targetService = CONNECTED_GOVERNMENT_SERVICES.find(s => s.categories.includes(complaint.category)) || CONNECTED_GOVERNMENT_SERVICES[5];

  // Log transaction
  const newLog = {
    id: `log_${Date.now()}`,
    timestamp: new Date().toISOString(),
    requestId: odfPayload.requestId,
    externalId: odfPayload.externalDepartmentId,
    gatewayCode: targetService.code,
    action: 'DISPATCH_ACCEPTED',
    latencyMs: targetService.latencyMs + Math.floor(Math.random() * 5),
    status: 'SUCCESS',
    details: `Normalized CIV-ODF v1.0 payload accepted by ${targetService.name}. Linked Ext ID: ${odfPayload.externalDepartmentId}${odfPayload.secondaryExternalId ? ' (+ Secondary Dept: ' + odfPayload.secondaryExternalId + ')' : ''}`,
  };

  GATEWAY_TRANSACTION_LOGS.unshift(newLog);
  if (GATEWAY_TRANSACTION_LOGS.length > 30) GATEWAY_TRANSACTION_LOGS.pop();

  return {
    success: true,
    odfPayload,
    serviceGateway: targetService,
    externalDepartmentId: odfPayload.externalDepartmentId,
    secondaryDepartmentName: odfPayload.secondaryDepartmentName,
    secondaryExternalId: odfPayload.secondaryExternalId,
    latencyMs: newLog.latencyMs,
    log: newLog,
  };
};

/**
 * Returns list of connected government APIs, uptime, and latency metrics
 */
export const getConnectedServicesStatus = () => {
  return CONNECTED_GOVERNMENT_SERVICES;
};

/**
 * Returns gateway transaction audit logs
 */
export const getGatewayLogs = () => {
  return GATEWAY_TRANSACTION_LOGS;
};
