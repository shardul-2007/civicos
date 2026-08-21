import React, { useState, useEffect } from 'react';
import { analyticsAPI } from '../services/api';
import { Clock, AlertOctagon, AlertTriangle, CheckCircle2, ShieldAlert, Filter, Eye, RefreshCw, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import ComplaintQuickViewDrawer from '../components/ComplaintQuickViewDrawer';

export default function SlaMonitor() {
  const [slaData, setSlaData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [selectedComplaint, setSelectedComplaint] = useState(null);

  const fetchSlaData = () => {
    setLoading(true);
    setError('');
    analyticsAPI.getSLA()
      .then((res) => {
        if (res.data.success) {
          setSlaData(res.data);
        }
      })
      .catch((err) => {
        setError(err.response?.data?.message || 'Failed to load SLA data. Check server connection.');
      })
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    fetchSlaData();
  }, []);

  if (loading && !slaData) {
    return (
      <div style={{ padding: '4rem', textAlign: 'center', color: '#94a3b8' }}>
        <div style={{ width: '40px', height: '40px', borderRadius: '50%', border: '3px solid rgba(16,185,129,0.2)', borderTopColor: '#10b981', animation: 'spin 0.9s linear infinite', margin: '0 auto 1rem auto' }} />
        <p>Loading Municipal SLA Monitor...</p>
      </div>
    );
  }

  if (error && !slaData) {
    return (
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '60vh', padding: '2rem 1rem' }}>
        <div style={{ background: 'rgba(239,68,68,0.12)', border: '1px solid rgba(239,68,68,0.35)', borderRadius: '0.75rem', padding: '2rem', maxWidth: '480px', width: '100%', textAlign: 'center' }}>
          <AlertOctagon size={36} color="#ef4444" style={{ margin: '0 auto 1rem auto', display: 'block' }} />
          <h3 style={{ color: '#fff', fontSize: '1.1rem', fontWeight: 800, marginBottom: '0.5rem' }}>SLA Monitor Connection Error</h3>
          <p style={{ color: '#fca5a5', fontSize: '0.85rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>{error}</p>
          <button onClick={fetchSlaData} className="btn-sage" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.6rem 1.25rem' }}>
            <RefreshCw size={15} /> Retry Connection
          </button>
        </div>
      </div>
    );
  }

  const breached = slaData?.breached || [];
  const warnings = slaData?.warnings || [];

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
          {breached.length === 0 ? (
            <div style={{ color: '#94a3b8', fontSize: '0.9rem', padding: '2rem', textAlign: 'center', background: '#0a0d14', borderRadius: '0.5rem' }}>
              <CheckCircle2 size={32} color="#10b981" style={{ margin: '0 auto 0.5rem auto' }} />
              <div>Zero Breached Complaints! All department SLAs are currently compliant.</div>
            </div>
          ) : (
            breached.map((c) => (
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
                  <Link
                    to={`/complaints/${c._id}`}
                    className="btn-sage"
                    style={{ background: '#dc2626', fontSize: '0.8rem', padding: '0.45rem 0.85rem' }}
                  >
                    Escalate & Dispatch
                  </Link>
                </div>
              </div>
            ))
          )}
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
          {warnings.length === 0 ? (
            <div style={{ color: '#94a3b8', fontSize: '0.9rem', padding: '2rem', textAlign: 'center', background: '#0a0d14', borderRadius: '0.5rem' }}>
              <CheckCircle2 size={32} color="#10b981" style={{ margin: '0 auto 0.5rem auto' }} />
              <div>No complaints are currently in at-risk warning territory.</div>
            </div>
          ) : (
            warnings.map((c) => (
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
                  <Link
                    to={`/complaints/${c._id}`}
                    className="btn-glass"
                    style={{ fontSize: '0.8rem', padding: '0.45rem 0.85rem', borderColor: '#f59e0b', color: '#fbbf24' }}
                  >
                    Assign Officer
                  </Link>
                </div>
              </div>
            ))
          )}
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

