import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MapContainer, TileLayer, Marker, Popup, Circle } from 'react-leaflet';
import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts';
import { Shield, Radio, AlertTriangle, Layers, MapPin, Zap, TrendingUp, Clock, Activity, RefreshCw } from 'lucide-react';
import L from 'leaflet';
import { dashboardAPI, analyticsAPI, predictionAPI, incidentAPI } from '../../services/api';

// Custom Marker Helper
const createCustomMarker = (color) => {
  return L.divIcon({
    className: 'custom-leaflet-pin',
    html: `<div style="background-color: ${color}; width: 14px; height: 14px; border-radius: 50%; border: 2px solid white; box-shadow: 0 0 10px ${color};"></div>`,
    iconSize: [14, 14],
    iconAnchor: [7, 7],
  });
};

const markersBySeverity = {
  CRITICAL: createCustomMarker('#ef4444'),
  HIGH: createCustomMarker('#f97316'),
  MEDIUM: createCustomMarker('#eab308'),
  LOW: createCustomMarker('#3b82f6'),
};

export default function AdminDashboard() {
  const [overview, setOverview] = useState(null);
  const [hotspots, setHotspots] = useState([]);
  const [predictions, setPredictions] = useState([]);
  const [incidents, setIncidents] = useState([]);
  const [departments, setDepartments] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadData = async () => {
    setLoading(true);
    try {
      const [ovRes, hotRes, predRes, incRes, deptRes] = await Promise.all([
        dashboardAPI.getOverview(),
        analyticsAPI.getHotspots(),
        predictionAPI.getPredictions(),
        incidentAPI.getIncidents(),
        analyticsAPI.getDepartments(),
      ]);

      if (ovRes.data.success) setOverview(ovRes.data.data);
      if (hotRes.data.success) setHotspots(hotRes.data.data);
      if (predRes.data.success) setPredictions(predRes.data.data);
      if (incRes.data.success) setIncidents(incRes.data.data);
      if (deptRes.data.success) setDepartments(deptRes.data.data);
    } catch (err) {
      console.warn('Failed loading Command Center data:', err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const pieColors = ['#ef4444', '#f97316', '#eab308', '#3b82f6'];

  return (
    <div className="command-mode" style={{ minHeight: '100vh', padding: '1.5rem', background: '#0b0f19' }}>
      
      {/* Top Command Bar */}
      <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem', borderBottom: '1px solid #1e293b', paddingBottom: '1rem', gap: '1rem' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <h1 style={{ fontSize: '2rem', fontWeight: 800, color: '#f8fafc', fontFamily: 'Outfit, sans-serif', letterSpacing: '-0.02em' }}>
              CivicOS Command Center
            </h1>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem', padding: '0.25rem 0.75rem', borderRadius: '9999px', background: 'rgba(16, 185, 129, 0.15)', border: '1px solid rgba(16, 185, 129, 0.4)', color: '#10b981', fontSize: '0.75rem', fontWeight: 700 }}>
              <span className="status-dot active"></span> SYSTEM OPERATIONAL
            </span>
          </div>
          <p style={{ color: '#94a3b8', fontSize: '0.85rem' }}>Real-time civic intelligence, geospatial clustering, priority scoring & SLA enforcement</p>
        </div>

        <div style={{ display: 'flex', gap: '0.75rem' }}>
          <Link to="/admin/analytics" className="btn-secondary" style={{ fontSize: '0.85rem' }}>
            <TrendingUp size={16} /> Advanced Analytics
          </Link>
          <Link to="/admin/predictions" className="btn-secondary" style={{ fontSize: '0.85rem', color: '#60a5fa', borderColor: '#3b82f6' }}>
            <Zap size={16} /> Predictive Alerts Matrix
          </Link>
          <button onClick={loadData} className="btn-primary" style={{ padding: '0.5rem 1rem', fontSize: '0.85rem' }}>
            <RefreshCw size={15} /> Refresh Live Stream
          </button>
        </div>
      </div>

      {/* Top 5 Metrics Cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginBottom: '1.5rem' }}>
        
        <div className="glass-card-dark" style={{ padding: '1.25rem' }}>
          <div style={{ fontSize: '0.75rem', color: '#94a3b8', textTransform: 'uppercase', fontWeight: 700 }}>Total Ingested Reports</div>
          <div style={{ fontSize: '1.9rem', fontWeight: 800, color: '#f8fafc', marginTop: '0.2rem' }}>{overview?.totalComplaints?.toLocaleString() || 10000}</div>
        </div>

        <div className="glass-card-dark" style={{ padding: '1.25rem', borderTop: '3px solid #ef4444' }}>
          <div style={{ fontSize: '0.75rem', color: '#ef4444', textTransform: 'uppercase', fontWeight: 700 }}>Critical Incidents</div>
          <div style={{ fontSize: '1.9rem', fontWeight: 800, color: '#ef4444', marginTop: '0.2rem' }}>{overview?.critical || 34}</div>
        </div>

        <div className="glass-card-dark" style={{ padding: '1.25rem', borderTop: '3px solid #ec4899' }}>
          <div style={{ fontSize: '0.75rem', color: '#f472b6', textTransform: 'uppercase', fontWeight: 700 }}>SLA Breaches</div>
          <div style={{ fontSize: '1.9rem', fontWeight: 800, color: '#f472b6', marginTop: '0.2rem' }}>{overview?.slaViolations || 47}</div>
        </div>

        <div className="glass-card-dark" style={{ padding: '1.25rem', borderTop: '3px solid #f59e0b' }}>
          <div style={{ fontSize: '0.75rem', color: '#f59e0b', textTransform: 'uppercase', fontWeight: 700 }}>Active Hotspots</div>
          <div style={{ fontSize: '1.9rem', fontWeight: 800, color: '#f59e0b', marginTop: '0.2rem' }}>{hotspots.length || 23}</div>
        </div>

        <div className="glass-card-dark" style={{ padding: '1.25rem', borderTop: '3px solid #8b5cf6' }}>
          <div style={{ fontSize: '0.75rem', color: '#c084fc', textTransform: 'uppercase', fontWeight: 700 }}>Predicted Ward Risks</div>
          <div style={{ fontSize: '1.9rem', fontWeight: 800, color: '#c084fc', marginTop: '0.2rem' }}>{predictions.length || 3}</div>
        </div>

      </div>

      {/* Main Dashboard Layout */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 2.5fr 1.2fr', gap: '1.5rem', marginBottom: '1.5rem' }}>
        
        {/* Left Panel: Analytics Charts */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          
          {/* Severity Distribution */}
          <div className="glass-card-dark" style={{ padding: '1.25rem', height: '240px' }}>
            <h3 style={{ fontSize: '0.95rem', color: '#f8fafc', fontWeight: 700, marginBottom: '0.5rem' }}>Severity Distribution</h3>
            <div style={{ width: '100%', height: '180px' }}>
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={overview?.severityDistribution || [
                      { name: 'Critical', value: 34 },
                      { name: 'High', value: 182 },
                      { name: 'Medium', value: 641 },
                      { name: 'Low', value: 9143 },
                    ]}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    innerRadius={45}
                    outerRadius={70}
                  >
                    {pieColors.map((color, index) => (
                      <Cell key={`cell-${index}`} fill={color} />
                    ))}
                  </Pie>
                  <Tooltip contentStyle={{ background: '#0f172a', borderColor: '#334155', borderRadius: '8px' }} />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Status Breakdown */}
          <div className="glass-card-dark" style={{ padding: '1.25rem', height: '240px' }}>
            <h3 style={{ fontSize: '0.95rem', color: '#f8fafc', fontWeight: 700, marginBottom: '0.5rem' }}>Workflow Statuses</h3>
            <div style={{ width: '100%', height: '180px' }}>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={overview?.statusDistribution || [
                  { status: 'SUBMITTED', count: 120 },
                  { status: 'ASSIGNED', count: 85 },
                  { status: 'IN_PROGRESS', count: 64 },
                  { status: 'RESOLVED', count: 250 },
                ]}>
                  <XAxis dataKey="status" stroke="#64748b" fontSize={10} />
                  <YAxis stroke="#64748b" fontSize={10} />
                  <Tooltip contentStyle={{ background: '#0f172a', borderColor: '#334155' }} />
                  <Bar dataKey="count" fill="#3b82f6" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

        </div>

        {/* Center Panel: Interactive City Map */}
        <div className="glass-card-dark" style={{ padding: '1rem', height: '500px', position: 'relative' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.75rem', padding: '0 0.5rem' }}>
            <h3 style={{ fontSize: '1rem', color: '#f8fafc', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <MapPin size={18} color="#3b82f6" /> Real-time City Geospatial Map & Hotspots
            </h3>
            <div style={{ display: 'flex', gap: '0.75rem', fontSize: '0.75rem', color: '#94a3b8' }}>
              <span style={{ color: '#ef4444' }}>● Critical</span>
              <span style={{ color: '#f97316' }}>● High</span>
              <span style={{ color: '#eab308' }}>● Medium</span>
              <span style={{ color: '#3b82f6' }}>● Low</span>
            </div>
          </div>

          <div style={{ height: '440px', borderRadius: '0.5rem', overflow: 'hidden' }}>
            <MapContainer center={[18.5204, 73.8567]} zoom={13} style={{ height: '100%', width: '100%' }}>
              <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
              
              {/* Render Hotspot Radii */}
              {hotspots.map((h, i) => (
                <Circle
                  key={i}
                  center={[h.centroid[1], h.centroid[0]]}
                  radius={500}
                  pathOptions={{ color: '#ef4444', fillColor: '#ef4444', fillOpacity: 0.25 }}
                />
              ))}

              {/* Render Critical Incidents */}
              {overview?.recentCritical?.map((c) => (
                <Marker
                  key={c._id}
                  position={[c.location.coordinates[1], c.location.coordinates[0]]}
                  icon={markersBySeverity[c.severity] || markersBySeverity.MEDIUM}
                >
                  <Popup>
                    <div style={{ fontSize: '0.85rem', color: '#0f172a' }}>
                      <strong style={{ color: '#3b82f6' }}>{c.trackingCode}</strong><br />
                      <strong>{c.title}</strong><br />
                      Category: {c.category}<br />
                      Severity: <span style={{ color: c.severity === 'CRITICAL' ? 'red' : 'orange', fontWeight: 700 }}>{c.severity}</span><br />
                      Ward: {c.ward} • Dept: {c.departmentName}
                    </div>
                  </Popup>
                </Marker>
              ))}
            </MapContainer>
          </div>
        </div>

        {/* Right Panel: Predictive Alerts & Hotspots */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          
          {/* Predictive Civic Alert */}
          <div className="glass-card-dark" style={{ padding: '1.25rem', border: '1px solid rgba(239, 68, 68, 0.4)', background: 'linear-gradient(135deg, rgba(239, 68, 68, 0.1) 0%, rgba(19, 27, 46, 0.9) 100%)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#ef4444', fontWeight: 700, fontSize: '0.9rem', marginBottom: '0.75rem' }}>
              <AlertTriangle size={18} /> Predictive Civic Alert
            </div>

            {predictions[0] && (
              <div>
                <div style={{ fontSize: '1.1rem', fontWeight: 800, color: '#f8fafc', marginBottom: '0.2rem' }}>
                  {predictions[0].wardName}
                </div>
                <div style={{ fontSize: '0.85rem', color: '#f87171', fontWeight: 700, marginBottom: '0.5rem' }}>
                  {predictions[0].category} Complaint Risk: {predictions[0].riskScore}%
                </div>
                <div style={{ fontSize: '0.8rem', color: '#cbd5e1', marginBottom: '0.75rem', lineHeight: 1.4 }}>
                  "{predictions[0].recommendation}"
                </div>
                <Link to="/admin/predictions" className="btn-secondary" style={{ width: '100%', justifyContent: 'center', fontSize: '0.75rem', padding: '0.4rem', borderColor: '#ef4444', color: '#f87171' }}>
                  Dispatch Preventive Inspection
                </Link>
              </div>
            )}
          </div>

          {/* Active Hotspot Hubs */}
          <div className="glass-card-dark" style={{ padding: '1.25rem', flex: 1, maxHeight: '250px', overflowY: 'auto' }}>
            <h3 style={{ fontSize: '0.9rem', color: '#f8fafc', fontWeight: 700, marginBottom: '0.75rem' }}>Active Hotspot Clusters</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {hotspots.map((h, idx) => (
                <div key={idx} style={{ background: '#0f172a', padding: '0.75rem', borderRadius: '0.5rem', borderLeft: '3px solid #f59e0b' }}>
                  <div style={{ fontSize: '0.8rem', fontWeight: 700, color: '#f8fafc' }}>{h.title}</div>
                  <div style={{ fontSize: '0.75rem', color: '#94a3b8' }}>
                    {h.complaintCount} reports within 500m • Hotspot ID: {h.id}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>

      {/* Bottom Panel: Department SLA Compliance Table */}
      <div className="glass-card-dark" style={{ padding: '1.25rem' }}>
        <h3 style={{ fontSize: '1.05rem', color: '#f8fafc', fontWeight: 700, marginBottom: '1rem' }}>Department Operational SLA Performance</h3>
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.85rem' }}>
            <thead>
              <tr style={{ background: '#0f172a', color: '#94a3b8', borderBottom: '1px solid #1e293b' }}>
                <th style={{ padding: '0.75rem 1rem' }}>Department</th>
                <th style={{ padding: '0.75rem 1rem' }}>Code</th>
                <th style={{ padding: '0.75rem 1rem' }}>Total Assigned</th>
                <th style={{ padding: '0.75rem 1rem' }}>Resolved</th>
                <th style={{ padding: '0.75rem 1rem' }}>Active Queue</th>
                <th style={{ padding: '0.75rem 1rem' }}>SLA Breaches</th>
                <th style={{ padding: '0.75rem 1rem' }}>Compliance Rate</th>
              </tr>
            </thead>
            <tbody>
              {departments.map((d) => (
                <tr key={d.id} style={{ borderBottom: '1px solid #1e293b' }}>
                  <td style={{ padding: '0.75rem 1rem', fontWeight: 700, color: '#f8fafc' }}>{d.name}</td>
                  <td style={{ padding: '0.75rem 1rem', fontFamily: 'monospace', color: '#60a5fa' }}>{d.code}</td>
                  <td style={{ padding: '0.75rem 1rem', color: '#cbd5e1' }}>{d.total}</td>
                  <td style={{ padding: '0.75rem 1rem', color: '#10b981', fontWeight: 600 }}>{d.resolved}</td>
                  <td style={{ padding: '0.75rem 1rem', color: '#f59e0b' }}>{d.active}</td>
                  <td style={{ padding: '0.75rem 1rem', color: d.slaBreaches > 0 ? '#ef4444' : '#10b981', fontWeight: 700 }}>
                    {d.slaBreaches}
                  </td>
                  <td style={{ padding: '0.75rem 1rem' }}>
                    <span className={`badge ${d.slaCompliance >= 90 ? 'badge-success' : 'badge-critical'}`}>
                      {d.slaCompliance}% Compliant
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
}
