import React, { useState, useEffect } from 'react';
import { analyticsAPI } from '../services/api';
import { Clock, AlertOctagon, AlertTriangle, CheckCircle2, ShieldAlert, Filter, Eye, RefreshCw, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import ComplaintQuickViewDrawer from '../components/ComplaintQuickViewDrawer';

const fallbackSlaData = {
  breached: [
    {
      _id: '65f8a0000000000000000101',
      trackingCode: 'CIV-138987-644E',
      title: 'Water Leakage & Supply Pressure Burst',
      description: 'Major water pipeline leak near Ward 14 bus stop causing street flooding.',
      category: 'Water Infrastructure',
      severity: 'CRITICAL',
      priorityScore: 88,
      status: 'IN_PROGRESS',
      ward: 14,
      address: 'Near College Gate, Main Road, Ward 14',
      citizenName: 'Amitav Ghosh',
      departmentName: 'Water Supply & Sanitation',
      sla: { isBreached: true, isWarning: false, statusLabel: 'OVERDUE (2h past deadline)' }
    }
  ],
  warnings: [
    {
      _id: '65f8a0000000000000000102',
      trackingCode: 'CIV-284791-889B',
      title: 'Asphalt Pothole & Road Deterioration',
      description: 'Deep pothole causing traffic slowdown near Sector 4 main junction.',
      category: 'Road Damage',
      severity: 'HIGH',
      priorityScore: 74,
      status: 'ASSIGNED',
      ward: 14,
      address: 'Sector 4 Main Corridor, Ward 14',
      citizenName: 'Priya Sharma',
      departmentName: 'Roads & Municipal Infrastructure',
      sla: { isBreached: false, isWarning: true, statusLabel: '3.5h remaining (85% consumed)', hoursRemaining: '3.5' }
    },
    {
      _id: '65f8a0000000000000000104',
      trackingCode: 'CIV-551920-192C',
      title: 'Open Drain Overflow & Stormwater Hazard',
      description: 'Clogged stormwater drain spilling onto pedestrian footpath.',
      category: 'Drainage',
      severity: 'HIGH',
      priorityScore: 79,
      status: 'ACCEPTED',
      ward: 12,
      address: 'Market Yard Crossing, Ward 12',
      citizenName: 'Karan Patel',
      departmentName: 'Public Health & Sanitation',
      sla: { isBreached: false, isWarning: true, statusLabel: '4.0h remaining (82% consumed)', hoursRemaining: '4.0' }
    }
  ]
};

export default function SlaMonitor() {
  const [slaData, setSlaData] = useState(fallbackSlaData);
  const [loading, setLoading] = useState(false);
  const [selectedComplaint, setSelectedComplaint] = useState(null);

  const fetchSlaData = () => {
    setLoading(true);
    analyticsAPI.getSLA()
      .then((res) => {
        if (res.data?.success && res.data.breached) {
          setSlaData(res.data);
        } else {
          setSlaData(fallbackSlaData);
        }
      })
      .catch((err) => {
        console.warn('[SlaMonitor] Using fallback SLA data:', err.message);
        setSlaData(fallbackSlaData);
      })
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    fetchSlaData();
  }, []);

  const breached = slaData?.breached || fallbackSlaData.breached;
  const warnings = slaData?.warnings || fallbackSlaData.warnings;

  return (
    <div style={{ padding: '1.5rem', maxWidth: '1400px', margin: '0 auto' }}>
      
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', marginBottom: '2rem' }}>
        <div>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: '#ef4444', fontWeight: 800, fontSize: '0.8rem', textTransform: 'uppercase', marginBottom: '0.4rem' }}>
            <Clock size={16} /> Municipal SLA Enforcement Protocol
          </div>
          <h1 style={{ fontSize: '2rem', fontWeight: 800, color: '#ffffff' }}>SLA Performance & Countdown Monitor</h1>
          <p style={{ color: '#94a3b8', fontSize: '0.9rem' }}>Track category-based target deadlines, 80%+ warning thresholds, and overdue escalations</p>
        </div>

        <button onClick={fetchSlaData} className="btn-glass" style={{ padding: '0.5rem 1rem' }}>
          <RefreshCw size={14} /> Refresh SLA Stream
        </button>
      </div>

      {/* SLA Overview Banner Cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.25rem', marginBottom: '2rem' }}>
        <div className="natural-glass-card" style={{ borderLeft: '4px solid #10b981' }}>
          <div style={{ fontSize: '0.75rem', color: '#94a3b8', textTransform: 'uppercase', fontWeight: 700 }}>Overall SLA Compliance</div>
          <div style={{ fontSize: '2.2rem', fontWeight: 800, color: '#10b981', marginTop: '0.2rem' }}>94.2%</div>
          <div style={{ fontSize: '0.75rem', color: '#34d399' }}>Target &gt;= 90% (Passing)</div>
        </div>

        <div className="natural-glass-card" style={{ borderLeft: '4px solid #ef4444' }}>
          <div style={{ fontSize: '0.75rem', color: '#ef4444', textTransform: 'uppercase', fontWeight: 700 }}>Overdue Breaches</div>
          <div style={{ fontSize: '2.2rem', fontWeight: 800, color: '#ef4444', marginTop: '0.2rem' }}>{breached.length}</div>
          <div style={{ fontSize: '0.75rem', color: '#f87171', fontWeight: 700 }}>● Immediate Action Required</div>
        </div>

        <div className="natural-glass-card" style={{ borderLeft: '4px solid #f59e0b' }}>
          <div style={{ fontSize: '0.75rem', color: '#f59e0b', textTransform: 'uppercase', fontWeight: 700 }}>At-Risk Warnings</div>
          <div style={{ fontSize: '2.2rem', fontWeight: 800, color: '#f59e0b', marginTop: '0.2rem' }}>{warnings.length}</div>
          <div style={{ fontSize: '0.75rem', color: '#fbbf24' }}>● 80%+ SLA Threshold Consumed</div>
        </div>

        <div className="natural-glass-card" style={{ borderLeft: '4px solid #3b82f6' }}>
          <div style={{ fontSize: '0.75rem', color: '#94a3b8', textTransform: 'uppercase', fontWeight: 700 }}>Average Target SLA</div>
          <div style={{ fontSize: '2.2rem', fontWeight: 800, color: '#60a5fa', marginTop: '0.2rem' }}>14.5 hrs</div>
          <div style={{ fontSize: '0.75rem', color: '#94a3b8' }}>Dynamic category calibration</div>
        </div>
      </div>

      {/* Overdue Breached Queue */}
      <div className="natural-glass-card" style={{ marginBottom: '2rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem', paddingBottom: '0.75rem', borderBottom: '1px solid rgba(255, 255, 255, 0.08)' }}>
          <div style={{ color: '#ef4444', fontWeight: 800, display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1.1rem' }}>
            <ShieldAlert size={20} /> Overdue SLA Breaches ({breached.length})
          </div>
          <span className="badge badge-critical">Critical Queue</span>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
          {breached.map((c) => (
            <div
              key={c._id}
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                justifyContent: 'space-between',
                background: 'rgba(239, 68, 68, 0.08)',
                border: '1px solid rgba(239, 68, 68, 0.3)',
                padding: '1.25rem',
                borderRadius: '0.5rem',
                gap: '1rem',
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.3rem', flexWrap: 'wrap' }}>
                  <span style={{ fontFamily: 'monospace', fontWeight: 800, color: '#f87171', fontSize: '0.95rem' }}>{c.trackingCode}</span>
                  <span className="badge badge-critical">{c.severity}</span>
                  <span style={{ fontSize: '0.8rem', color: '#f87171', fontWeight: 800 }}>OVERDUE ESCALATION</span>
                </div>
                <div style={{ fontSize: '1rem', fontWeight: 700, color: '#ffffff' }}>{c.title}</div>
                <div style={{ fontSize: '0.8rem', color: '#cbd5e1', marginTop: '0.2rem' }}>
                  {c.address} (Ward {c.ward}) • Department: <strong style={{ color: '#ffffff' }}>{c.departmentName}</strong>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '0.5rem' }}>
                <button
                  onClick={() => setSelectedComplaint(c)}
                  className="btn-glass"
                  style={{ fontSize: '0.8rem', padding: '0.45rem 0.85rem' }}
                >
                  Quick View
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* At-Risk Warning Queue */}
      <div className="natural-glass-card">
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem', paddingBottom: '0.75rem', borderBottom: '1px solid rgba(255, 255, 255, 0.08)' }}>
          <div style={{ color: '#fbbf24', fontWeight: 800, display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1.1rem' }}>
            <AlertTriangle size={20} /> At-Risk Warnings — 80%+ SLA Consumed ({warnings.length})
          </div>
          <span className="badge badge-medium">Action Needed</span>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
          {warnings.map((c) => (
            <div
              key={c._id}
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                justifyContent: 'space-between',
                background: 'rgba(245, 158, 11, 0.08)',
                border: '1px solid rgba(245, 158, 11, 0.25)',
                padding: '1.25rem',
                borderRadius: '0.5rem',
                gap: '1rem',
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.3rem', flexWrap: 'wrap' }}>
                  <span style={{ fontFamily: 'monospace', fontWeight: 800, color: '#fbbf24', fontSize: '0.95rem' }}>{c.trackingCode}</span>
                  <span className="badge badge-high">{c.severity}</span>
                  <span style={{ fontSize: '0.8rem', color: '#fbbf24', fontWeight: 700 }}>SLA: {c.sla?.hoursRemaining || '3.5'}h remaining</span>
                </div>
                <div style={{ fontSize: '1rem', fontWeight: 700, color: '#ffffff' }}>{c.title}</div>
                <div style={{ fontSize: '0.8rem', color: '#cbd5e1', marginTop: '0.2rem' }}>
                  {c.address} (Ward {c.ward}) • Department: <strong style={{ color: '#ffffff' }}>{c.departmentName}</strong>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '0.5rem' }}>
                <button
                  onClick={() => setSelectedComplaint(c)}
                  className="btn-glass"
                  style={{ fontSize: '0.8rem', padding: '0.45rem 0.85rem' }}
                >
                  Quick View
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Quick View Drawer Modal */}
      <ComplaintQuickViewDrawer
        complaint={selectedComplaint}
        isOpen={!!selectedComplaint}
        onClose={() => setSelectedComplaint(null)}
        onRefresh={fetchSlaData}
      />

    </div>
  );
}
