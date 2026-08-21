import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { dashboardAPI } from '../../services/api';
import { Activity, AlertTriangle, CheckCircle2, Clock, MapPin, TrendingUp, Zap, ArrowRight, Shield, ShieldAlert, Sparkles, Filter, Eye } from 'lucide-react';
import ComplaintQuickViewDrawer from '../../components/ComplaintQuickViewDrawer';

export default function Overview() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedComplaint, setSelectedComplaint] = useState(null);

  const [error, setError] = useState('');

  const loadOverview = async () => {
    setLoading(true);
    setError('');
    try {
      const res = await dashboardAPI.getOverview();
      if (res.data.success) {
        setData(res.data.data);
      }
    } catch (err) {
      console.warn('Failed loading overview:', err.message);
      setError(err.response?.data?.message || 'Failed to load Municipal Intelligence Stream. Please verify server connection or login.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadOverview();
  }, []);

  if (loading) {
    return (
      <div style={{ padding: '4rem 1rem', textAlign: 'center', color: '#94a3b8', background: '#0a0d14', minHeight: '80vh' }}>
        <div className="pulse-dot" style={{ display: 'inline-block', width: '12px', height: '12px', background: '#10b981', borderRadius: '50%', marginRight: '8px' }} />
        Loading Municipal Intelligence Stream...
      </div>
    );
  }

  if (error || !data) {
    return (
      <div style={{ padding: '4rem 1rem', textAlign: 'center', color: '#f87171', background: '#0a0d14', minHeight: '80vh' }}>
        <div style={{ background: 'rgba(239, 68, 68, 0.15)', border: '1px solid rgba(239, 68, 68, 0.3)', padding: '1.5rem', borderRadius: '0.75rem', maxWidth: '500px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '1.25rem', color: '#ffffff', marginBottom: '0.5rem' }}>Command Center Connection Error</h2>
          <p style={{ fontSize: '0.85rem', color: '#fca5a5', marginBottom: '1.25rem' }}>{error || 'Unable to connect to Municipal Command API.'}</p>
          <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center' }}>
            <button onClick={loadOverview} className="btn-sage" style={{ fontSize: '0.85rem', padding: '0.5rem 1rem' }}>
              Retry Connection
            </button>
            <Link to="/login" className="btn-glass" style={{ fontSize: '0.85rem', padding: '0.5rem 1rem', textDecoration: 'none' }}>
              Staff Login
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const { totalComplaints, open, critical, resolvedToday, slaAtRisk, avgResolutionTime, cityHealthScore, healthBreakdown, cityPulse, liveActivity, needsAttention, whyThisMatters } = data;

  return (
    <div style={{ padding: '1.5rem', maxWidth: '1400px', margin: '0 auto', background: '#0a0d14', color: '#f8fafc' }}>
      
      {/* Top Welcome Title */}
      <div style={{ marginBottom: '1.5rem', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '1rem' }}>
        <div>
          <h1 style={{ fontSize: '1.75rem', fontWeight: 800, color: '#ffffff' }}>City Operations Overview</h1>
          <p style={{ color: '#94a3b8', fontSize: '0.85rem' }}>Real-time civic health, priority actions, and municipal intelligence stream</p>
        </div>

        <div style={{ display: 'flex', gap: '0.75rem' }}>
          <Link to="/map" className="btn-sage" style={{ padding: '0.5rem 1rem', fontSize: '0.85rem' }}>
            <MapPin size={16} /> Open City Map
          </Link>
        </div>
      </div>

      {/* KILLER DEMO BANNER: Ward 12 Water Crisis */}
      <div style={{ background: 'rgba(239, 68, 68, 0.12)', border: '1px solid rgba(239, 68, 68, 0.3)', borderRadius: '0.75rem', padding: '1.25rem', marginBottom: '1.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#f87171', fontWeight: 800, fontSize: '0.95rem' }}>
            <ShieldAlert size={20} /> DEMO SCENARIO: Ward 12 Water Pipeline Failure
          </div>
          <span className="badge badge-critical">CRITICAL INCIDENT #INC-1042</span>
        </div>
        <p style={{ fontSize: '0.85rem', color: '#fca5a5', lineHeight: 1.5, marginBottom: '0.75rem' }}>
          <strong>37 citizen reports</strong> aggregated within 500m radius in Ward 12. Priority Score <strong>91/100</strong>. SLA countdown active (04:00:00). Auto-assigned to Water Department & Field Inspector Rajesh.
        </p>
        <div style={{ display: 'flex', gap: '0.75rem' }}>
          <button onClick={() => setSelectedComplaint(needsAttention?.[0] || { trackingCode: 'CIV-2847', title: 'Water Main Pipeline Burst', severity: 'CRITICAL', priorityScore: 91, ward: 12, category: 'Water Infrastructure', departmentName: 'Water Department', description: 'Water is leaking continuously near Ward 12 bus stop.', address: 'Ward 12 Main Road', incidentCluster: true })} className="btn-sage" style={{ background: '#ef4444', padding: '0.4rem 0.85rem', fontSize: '0.8rem' }}>
            Inspect Incident Cluster #INC-1042
          </button>
        </div>
      </div>

      {/* 6 Premium KPI Metric Cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(175px, 1fr))', gap: '1rem', marginBottom: '1.5rem' }}>

        {[
          { label:'Total Reports',      value: totalComplaints?.toLocaleString() || '—', sub:'↑ 12.4% this week',        accent:'var(--grad-sage)',   glow:'var(--sage-glow)',            valColor:'var(--text-primary)' },
          { label:'Open Queue',         value: open?.toLocaleString() || '—',             sub:'Active field dispatch',    accent:'var(--grad-blue)',   glow:'var(--blue-glow)',            valColor:'var(--text-primary)' },
          { label:'Critical Hazards',   value: critical || '—',                           sub:'Need immediate action',   accent:'var(--grad-fire)',   glow:'rgba(239,68,68,0.25)',        valColor:'#f87171' },
          { label:'Resolved Today',     value: resolvedToday || 0,                        sub:'Verified resolutions',    accent:'var(--grad-sage)',   glow:'var(--sage-glow)',            valColor:'#34d399' },
          { label:'SLA At Risk',        value: slaAtRisk || '—',                          sub:'Near deadline (80%+)',    accent:'var(--grad-amber)',  glow:'rgba(245,158,11,0.25)',       valColor:'#fbbf24' },
          { label:'Avg Resolution',     value: avgResolutionTime || '—',                  sub:'↓ 2.1h faster this month',accent:'linear-gradient(135deg,#0d9488,#3b82f6)', glow:'var(--teal-glow)', valColor:'var(--text-primary)' },
        ].map(k => (
          <div key={k.label} className="kpi-card" style={{ '--kpi-accent': k.accent, '--kpi-glow': k.glow }}>
            <div style={{ fontSize: '0.67rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.07em', marginBottom: '0.55rem' }}>{k.label}</div>
            <div style={{ fontSize: '2rem', fontWeight: 900, fontFamily: 'var(--font-heading)', color: k.valColor, lineHeight: 1, marginBottom: '0.3rem' }}>{k.value}</div>
            <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', fontWeight: 500 }}>{k.sub}</div>
          </div>
        ))}

      </div>

      {/* Signature Section 1: The City Pulse & City Health Score */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '1.5rem', marginBottom: '1.5rem' }}>
        
        {/* City Health Score Card */}
        <div className="natural-glass-card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
            <span style={{ fontSize: '1rem', fontWeight: 800, color: '#ffffff' }}>Civic Health Score</span>
            <span className="badge badge-sage">Monthly Index</span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '2rem', margin: '1rem 0' }}>
            {/* Circular Gauge Score */}
            <div style={{
              width: '110px',
              height: '110px',
              borderRadius: '50%',
              background: `conic-gradient(#10b981 ${cityHealthScore * 3.6}deg, rgba(255,255,255,0.1) 0deg)`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              <div style={{ width: '84px', height: '84px', borderRadius: '50%', background: '#121722', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ fontSize: '1.8rem', fontWeight: 800, color: '#ffffff', lineHeight: 1 }}>{cityHealthScore}</span>
                <span style={{ fontSize: '0.65rem', color: '#94a3b8', textTransform: 'uppercase' }}>/ 100</span>
              </div>
            </div>

            {/* Sub-Category Breakdown */}
            <div style={{ flex: 1, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem', fontSize: '0.8rem' }}>
              <div><span style={{ color: '#94a3b8' }}>Infrastructure:</span> <strong style={{ color: '#ffffff' }}>{healthBreakdown?.infrastructure}</strong></div>
              <div><span style={{ color: '#94a3b8' }}>Sanitation:</span> <strong style={{ color: '#ffffff' }}>{healthBreakdown?.sanitation}</strong></div>
              <div><span style={{ color: '#94a3b8' }}>Roads:</span> <strong style={{ color: '#ffffff' }}>{healthBreakdown?.roads}</strong></div>
              <div><span style={{ color: '#94a3b8' }}>Water:</span> <strong style={{ color: '#ffffff' }}>{healthBreakdown?.water}</strong></div>
              <div><span style={{ color: '#94a3b8' }}>Public Safety:</span> <strong style={{ color: '#ffffff' }}>{healthBreakdown?.publicSafety}</strong></div>
              <div><span style={{ color: '#94a3b8' }}>Lighting:</span> <strong style={{ color: '#ffffff' }}>{healthBreakdown?.lighting}</strong></div>
            </div>
          </div>

          <div style={{ background: '#0a0d14', padding: '0.75rem', borderRadius: '0.5rem', border: '1px solid rgba(255,255,255,0.06)', fontSize: '0.8rem', color: '#cbd5e1' }}>
            💡 {healthBreakdown?.trendText}
          </div>
        </div>

        {/* The City Pulse Section */}
        <div className="natural-glass-card">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
            <span style={{ fontSize: '1rem', fontWeight: 800, color: '#ffffff', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Activity size={18} color="#34d399" /> THE CITY PULSE
            </span>
            <span className="badge badge-sage">
              <span className="pulse-dot"></span> {cityPulse?.statusLabel}
            </span>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem', margin: '1rem 0' }}>
            <div style={{ background: '#0a0d14', padding: '0.75rem', borderRadius: '0.5rem', border: '1px solid rgba(255,255,255,0.06)' }}>
              <div style={{ fontSize: '0.75rem', color: '#94a3b8' }}>Complaint Velocity</div>
              <div style={{ fontSize: '1.4rem', fontWeight: 800, color: '#34d399' }}>{cityPulse?.complaintVelocity}</div>
            </div>
            <div style={{ background: '#0a0d14', padding: '0.75rem', borderRadius: '0.5rem', border: '1px solid rgba(255,255,255,0.06)' }}>
              <div style={{ fontSize: '0.75rem', color: '#94a3b8' }}>Critical Incidents</div>
              <div style={{ fontSize: '1.4rem', fontWeight: 800, color: '#f87171' }}>{cityPulse?.criticalIncidents}</div>
            </div>
            <div style={{ background: '#0a0d14', padding: '0.75rem', borderRadius: '0.5rem', border: '1px solid rgba(255,255,255,0.06)' }}>
              <div style={{ fontSize: '0.75rem', color: '#94a3b8' }}>Active Hotspots</div>
              <div style={{ fontSize: '1.4rem', fontWeight: 800, color: '#fbbf24' }}>{cityPulse?.hotspotsCount}</div>
            </div>
            <div style={{ background: '#0a0d14', padding: '0.75rem', borderRadius: '0.5rem', border: '1px solid rgba(255,255,255,0.06)' }}>
              <div style={{ fontSize: '0.75rem', color: '#94a3b8' }}>SLA Risk Count</div>
              <div style={{ fontSize: '1.4rem', fontWeight: 800, color: '#f472b6' }}>{cityPulse?.slaRiskCount}</div>
            </div>
          </div>

          <div style={{ fontSize: '0.8rem', color: '#cbd5e1', borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '0.75rem' }}>
            <strong>Emerging Trend:</strong> {cityPulse?.emergingIssue}
          </div>
        </div>

      </div>

      {/* Main Grid: Needs Attention + Live Activity */}
      {/* ✅ Uses CSS class so tablet/mobile media query can override the 2fr 1fr */}
      <div className="admin-overview-main-grid" style={{ display: 'grid', gap: '1.5rem', marginBottom: '1.5rem' }}>
        
        {/* Priority Complaints: Needs Attention */}
        <div className="natural-glass-card">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
            <div>
              <span style={{ fontSize: '1.1rem', fontWeight: 800, color: '#ffffff' }}>Needs Attention</span>
              <div style={{ fontSize: '0.75rem', color: '#94a3b8' }}>Urgent priority complaints requiring immediate municipal action</div>
            </div>
            <Link to="/complaints" className="btn-glass" style={{ fontSize: '0.8rem', padding: '0.35rem 0.75rem' }}>
              View All Queue
            </Link>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {needsAttention?.map((c) => (
              <div key={c._id} style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', padding: '0.85rem', borderRadius: '0.5rem', border: '1px solid rgba(255,255,255,0.06)', background: '#0a0d14', gap: '0.75rem' }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.2rem' }}>
                    <span style={{ fontFamily: 'monospace', fontWeight: 800, color: '#34d399' }}>{c.trackingCode}</span>
                    <span className={`badge ${c.severity === 'CRITICAL' ? 'badge-critical' : 'badge-high'}`}>{c.severity}</span>
                    <span style={{ fontSize: '0.8rem', color: '#94a3b8' }}>{c.category}</span>
                  </div>
                  <div style={{ fontSize: '0.9rem', fontWeight: 700, color: '#ffffff' }}>{c.title}</div>
                  <div style={{ fontSize: '0.75rem', color: '#94a3b8' }}>{c.address} (Ward {c.ward}) • Assigned: {c.departmentName}</div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <div style={{ textAlign: 'right', fontSize: '0.75rem' }}>
                    <div style={{ color: '#94a3b8' }}>SLA Target</div>
                    <div style={{ fontWeight: 700, color: c.sla?.isBreached ? '#ef4444' : '#f97316' }}>{c.sla?.statusLabel}</div>
                  </div>
                  <button onClick={() => setSelectedComplaint(c)} className="btn-sage" style={{ padding: '0.35rem 0.65rem', fontSize: '0.75rem' }}>
                    Quick View
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Live Civic Activity Stream */}
        <div className="natural-glass-card">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
            <span style={{ fontSize: '1.1rem', fontWeight: 800, color: '#ffffff' }}>Live Civic Activity</span>
            <span className="pulse-dot"></span>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
            {liveActivity?.map((act) => (
              <div key={act.id} style={{ display: 'flex', gap: '0.75rem', borderLeft: '2px solid #059669', paddingLeft: '0.75rem' }}>
                <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#34d399', minWidth: '40px' }}>{act.time}</span>
                <div style={{ fontSize: '0.8rem', color: '#cbd5e1', lineHeight: 1.4 }}>
                  {act.title}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Signature Section 2: Why This Matters Explainable AI */}
      <div className="natural-glass-card">
        <div style={{ marginBottom: '1rem' }}>
          <span style={{ fontSize: '1.1rem', fontWeight: 800, color: '#ffffff', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Sparkles size={18} color="#34d399" /> Why This Matters — Explainable AI Rationale
          </span>
          <div style={{ fontSize: '0.75rem', color: '#94a3b8' }}>Contextual insights explaining why specific complaints are flagged and recommended interventions</div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '1rem' }}>
          {whyThisMatters?.map((m) => (
            <div key={m.id} style={{ background: '#0a0d14', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '0.5rem', padding: '1rem' }}>
              <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#34d399', marginBottom: '0.3rem' }}>
                💡 Insight: "{m.insight}"
              </div>
              <div style={{ fontSize: '0.8rem', color: '#cbd5e1', marginBottom: '0.5rem', lineHeight: 1.4 }}>
                <strong>Why it matters:</strong> {m.impact}
              </div>
              <div style={{ fontSize: '0.8rem', color: '#34d399', background: 'rgba(16, 185, 129, 0.12)', padding: '0.4rem 0.6rem', borderRadius: '0.35rem', border: '1px solid rgba(16, 185, 129, 0.2)', fontWeight: 600 }}>
                <strong>Recommended Action:</strong> {m.action}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Complaint Quick-View Drawer */}
      <ComplaintQuickViewDrawer
        complaint={selectedComplaint}
        isOpen={!!selectedComplaint}
        onClose={() => setSelectedComplaint(null)}
        onRefresh={loadOverview}
      />

    </div>
  );
}
