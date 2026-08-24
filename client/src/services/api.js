import axios from 'axios';

const API = axios.create({
  baseURL: '/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Interceptor to attach JWT token
API.interceptors.request.use((config) => {
  const token = localStorage.getItem('civicos_token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const authAPI = {
  login: (data) => API.post('/auth/login', data),
  register: (data) => API.post('/auth/register', data),
  getMe: () => API.get('/auth/me'),
};

export const complaintAPI = {
  create: (data) => API.post('/complaints', data),
  list: (params) => API.get('/complaints', { params }),
  getOfficerQueue: (params) => API.get('/complaints/officer', { params }),
  getById: (id) => API.get(`/complaints/${id}`),
  track: (code) => API.get(`/complaints/track/${code}`),
  getMy: () => API.get('/complaints/my'),
  updateStatus: (id, data) => API.patch(`/complaints/${id}/status`, data),
  verifyResolution: (id, data) => API.patch(`/complaints/${id}/verify`, data),
  assign: (id, data) => API.patch(`/complaints/${id}/assign`, data),
};

export const dashboardAPI = {
  getOverview: () => API.get('/dashboard/overview'),
};

export const analyticsAPI = {
  getHotspots: () => API.get('/analytics/hotspots'),
  getDepartments: () => API.get('/analytics/departments'),
  getSLA: () => API.get('/analytics/sla'),
};

export const predictionAPI = {
  getPredictions: () => API.get('/predictions'),
  getWardPrediction: (ward) => API.get(`/predictions/${ward}`),
};

export const incidentAPI = {
  getIncidents: () => API.get('/incidents'),
  mergeIncidents: (data) => API.post('/incidents/merge', data),
};

export const departmentAPI = {
  getDepartments: () => API.get('/departments'),
};

export const wardAPI = {
  getWards: () => API.get('/wards'),
};

export const aiAPI = {
  analyzeText: (data) => API.post('/ai/analyze', data),
};

export const interoperabilityAPI = {
  getServices: () => API.get('/interoperability/services'),
  getLogs: () => API.get('/interoperability/logs'),
  dispatch: (code) => API.post(`/interoperability/dispatch/${code}`),
  simulateDeptStatus: (data) => API.post('/interoperability/simulate-dept-status', data),
};

export default API;
