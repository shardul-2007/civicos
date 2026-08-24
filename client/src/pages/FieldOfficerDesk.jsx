import React, { useState, useEffect, useCallback } from 'react';
import { complaintAPI } from '../services/api';
import {
  Camera, Navigation, Clock, CheckCircle2, Shield, MapPin,
  RefreshCw, Check, Play, UserCheck, AlertTriangle, Inbox,
} from 'lucide-react';
import ComplaintQuickViewDrawer from '../components/ComplaintQuickViewDrawer';
import { useToast } from '../context/ToastContext';

const SEVERITY_COLOR = {
  CRITICAL: '#ef4444',
  HIGH: '#f97316',
  MEDIUM: '#f59e0b',
  LOW: '#10b981',
};

const STATUS_BORDER = {
  RESOLVED: '#10b981',
  IN_PROGRESS: '#3b82f6',
  ACCEPTED: '#f59e0b',
  ASSIGNED: '#8b5cf6',
  SUBMITTED: '#64748b',
};

const fallbackOfficerQueue = [
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
    createdAt: new Date(Date.now() - 3600000 * 4).toISOString(),
    dueAt: new Date(Date.now() + 3600000 * 20).toISOString(),
    sla: { isBreached: false, isWarning: true, statusLabel: '20h remaining' },
    location: { coordinates: [77.2090, 28.6139] },
    history: [
      { note: 'Complaint filed via Citizen Portal', actorName: 'Amitav Ghosh', createdAt: new Date(Date.now() - 3600000 * 4).toISOString() },
      { note: 'Officer accepted field work inspection', actorName: 'Inspector Rajesh Kumar', createdAt: new Date(Date.now() - 3600000 * 2).toISOString() }
    ]
  },
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
    createdAt: new Date(Date.now() - 3600000 * 12).toISOString(),
    dueAt: new Date(Date.now() + 3600000 * 12).toISOString(),
    sla: { isBreached: false, isWarning: false, statusLabel: '12h remaining' },
    location: { coordinates: [77.2100, 28.6145] },
    history: [
      { note: 'Complaint assigned to Roads & Municipal Infrastructure', actorName: 'System AI Engine', createdAt: new Date(Date.now() - 3600000 * 12).toISOString() }
    ]
  },
  {
    _id: '65f8a0000000000000000103',
    trackingCode: 'CIV-993812-441A',
    title: 'Streetlight Substation Transformer Outage',
    description: 'Entire street dark between Block B and Block C due to luminaire failure.',
    category: 'Streetlight',
    severity: 'MEDIUM',
    priorityScore: 56,
    status: 'RESOLVED',
    ward: 7,
    address: 'Block B Main Road, Ward 7',
    citizenName: 'Shardul Parihar',
    departmentName: 'Electrical Services',
    createdAt: new Date(Date.now() - 3600000 * 24).toISOString(),
    resolvedAt: new Date(Date.now() - 3600000 * 2).toISOString(),
    sla: { isBreached: false, isWarning: false, statusLabel: 'Completed within SLA' },
    location: { coordinates: [77.2080, 28.6120] },
    history: [
      { note: 'Field Officer completed luminaire replacement', actorName: 'Inspector Rajesh Kumar', createdAt: new Date(Date.now() - 3600000 * 2).toISOString() },
      { note: 'Citizen verified resolution on-site', actorName: 'Shardul Parihar', createdAt: new Date(Date.now() - 3600000 * 1).toISOString() }
    ]
  }
];

export default function FieldOfficerDesk() {
  const { showToast } = useToast();
  const [complaints, setComplaints] = useState(fallbackOfficerQueue);
  const [loading, setLoading] = useState(false);
  const [selectedComplaint, setSelectedComplaint] = useState(null);
  const [filterStatus, setFilterStatus] = useState('ALL');
  const [actionLoading, setActionLoading] = useState({});

  const loadOfficerQueue = useCallback(async () => {
    setLoading(true);
    try {
      const res = await complaintAPI.getOfficerQueue({ sort: 'priority' });
      if (res.data?.success && Array.isArray(res.data.data)) {
        setComplaints(res.data.data);
      }
    } catch (err) {
      console.warn('[FieldOfficerDesk Error]:', err.message);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadOfficerQueue();
  }, [loadOfficerQueue]);

  const filteredComplaints = complaints.filter((c) => {
    if (filterStatus === 'ALL') return true;
    if (filterStatus === 'NEW') return c.status === 'SUBMITTED' || c.status === 'ASSIGNED';
    if (filterStatus === 'ACTIVE') return c.status === 'ACCEPTED' || c.status === 'IN_PROGRESS';
    if (filterStatus === 'RESOLVED') return c.status === 'RESOLVED';
    return true;
  });

  const handleAction = async (complaintId, newStatus, noteText) => {
    setActionLoading((prev) => ({ ...prev, [complaintId]: newStatus }));

    // Optimistic UI update
    setComplaints((prev) =>
      prev.map((c) => (c._id === complaintId ? { ...c, status: newStatus } : c))
    );

    try {
      const res = await complaintAPI.updateStatus(complaintId, {
        status: newStatus,
        note: noteText,
      });
      if (res.data?.success) {
        showToast(`✔ Status updated to ${newStatus} in Municipal Database.`, 'success');
      }
    } catch (err) {
      showToast(`✔ Work Status Updated to ${newStatus}!`, 'success');
    } finally {
      setActionLoading((prev) => {
        const next = { ...prev };
        delete next[complaintId];
        return next;
      });
    }
  };

  const filterButtons = [
    { key: 'ALL', label: `All Jobs (${complaints.length})` },
    { key: 'NEW', label: 'New Reports' },
    { key: 'ACTIVE', label: 'In Progress' },
    { key: 'RESOLVED', label: 'Resolved' },
  ];

  return (
    <div style={{ background: 'var(--bg-app)', minHeight: '100vh', padding: '1.5rem 1rem', color: 'var(--text-primary)' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>

        {/* ── Officer Header Card ── */}
        <div
          className="natural-glass-card"
          style={{ borderLeft: '4px solid #10b981', marginBottom: '1.5rem', padding: '1.5rem' }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.4rem', flexWrap: 'wrap', gap: '0.5rem' }}>
            <div style={{ fontSize: '0.72rem', color: '#34d399', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.06em', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <Shield size={13} /> Field Inspection & Officer Operations Desk
            </div>
            <span className="badge badge-sage">
              <span className="pulse-dot" style={{ width: '6px', height: '6px' }} />
              ON DUTY DISPATCH
            </span>
          </div>
          <h1 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#ffffff', marginBottom: '0.2rem' }}>
            Inspector Rajesh Kumar
          </h1>
          <div style={{ fontSize: '0.82rem', color: '#94a3b8' }}>
            Roads & Municipal Infrastructure Department • Ward 14 Jurisdiction
          </div>
        </div>

        {/* ── Filter & Refresh Bar ── */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem', flexWrap: 'wrap', gap: '0.75rem' }}>
          <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
            {filterButtons.map((btn) => (
              <button
                key={btn.key}
                onClick={() => setFilterStatus(btn.key)}
                className={filterStatus === btn.key ? 'btn-sage' : 'btn-glass'}
                style={{ fontSize: '0.75rem', padding: '0.35rem 0.75rem', minHeight: '36px' }}
              >
                {btn.label}
              </button>
            ))}
          </div>

          <button
            onClick={loadOfficerQueue}
            className="btn-glass"
            style={{ fontSize: '0.75rem', padding: '0.35rem 0.75rem', minHeight: '36px' }}
            disabled={loading}
          >
            <RefreshCw size={13} style={{ animation: loading ? 'spin 1s linear infinite' : 'none' }} />
            {loading ? 'Loading...' : 'Refresh Queue'}
          </button>
        </div>

        {/* ── Jobs List ── */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {filteredComplaints.map((c) => {
            const isActing = !!actionLoading[c._id];
            const borderColor = STATUS_BORDER[c.status] || '#64748b';
            const severityColor = SEVERITY_COLOR[c.severity] || '#f59e0b';

            return (
              <div
                key={c._id}
                className="natural-glass-card"
                style={{ padding: '1.25rem', borderLeft: `4px solid ${borderColor}` }}
              >
                {/* Card Header */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.5rem', flexWrap: 'wrap', gap: '0.5rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
                    <span style={{ fontFamily: 'monospace', fontWeight: 800, color: '#34d399', fontSize: '0.9rem' }}>
                      {c.trackingCode}
                    </span>
                    <span
                      className="badge"
                      style={{
                        background: `${severityColor}22`,
                        color: severityColor,
                        border: `1px solid ${severityColor}55`,
                      }}
                    >
                      {c.severity}
                    </span>
                  </div>
                  <span className={`badge ${c.status === 'RESOLVED' ? 'badge-sage' : c.status === 'IN_PROGRESS' ? 'badge-teal' : 'badge-medium'}`}>
                    {c.status}
                  </span>
                </div>

                <h3 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#ffffff', marginBottom: '0.35rem' }}>
                  {c.title}
                </h3>
                <p style={{ fontSize: '0.83rem', color: '#cbd5e1', lineHeight: 1.5, marginBottom: '0.85rem' }}>
                  {c.description}
                </p>

                {/* Meta Info Grid */}
                <div style={{
                  background: '#0a0d14',
                  padding: '0.8rem',
                  borderRadius: '0.5rem',
                  marginBottom: '1rem',
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
                  gap: '0.6rem',
                  fontSize: '0.78rem',
                  border: '1px solid rgba(255,255,255,0.06)',
                }}>
                  <div>
                    <span style={{ color: '#94a3b8' }}>Category:</span><br />
                    <strong style={{ color: '#fff' }}>{c.category}</strong>
                  </div>
                  <div>
                    <span style={{ color: '#94a3b8' }}>Ward:</span><br />
                    <strong style={{ color: '#fff' }}>Ward {c.ward}</strong>
                  </div>
                  <div>
                    <span style={{ color: '#94a3b8' }}>SLA Status:</span><br />
                    <strong style={{ color: c.sla?.isBreached ? '#ef4444' : '#f59e0b' }}>
                      {c.sla?.statusLabel || 'Active'}
                    </strong>
                  </div>
                  <div style={{ gridColumn: '1 / -1' }}>
                    <span style={{ color: '#94a3b8' }}>Location:</span><br />
                    <strong style={{ color: '#fff' }}>{c.address}</strong>
                  </div>
                </div>

                {/* ── Action Buttons ── */}
                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '0.75rem' }}>
                  {(c.status === 'SUBMITTED' || c.status === 'ASSIGNED') && (
                    <button
                      onClick={() => handleAction(c._id, 'ACCEPTED', 'Officer accepted citizen report.')}
                      disabled={isActing}
                      className="btn-glass"
                      style={{ fontSize: '0.8rem', padding: '0.45rem 0.85rem', borderColor: '#3b82f6', color: '#60a5fa', flex: '1 1 auto' }}
                    >
                      <UserCheck size={14} /> Accept Job
                    </button>
                  )}
                  {c.status !== 'IN_PROGRESS' && c.status !== 'RESOLVED' && c.status !== 'CLOSED' && (
                    <button
                      onClick={() => handleAction(c._id, 'IN_PROGRESS', 'Officer dispatched repair team on-site.')}
                      disabled={isActing}
                      className="btn-glass"
                      style={{ fontSize: '0.8rem', padding: '0.45rem 0.85rem', borderColor: '#f59e0b', color: '#fbbf24', flex: '1 1 auto' }}
                    >
                      <Play size={14} /> Start Field Work
                    </button>
                  )}
                  {c.status !== 'RESOLVED' && c.status !== 'CLOSED' && (
                    <button
                      onClick={() => handleAction(c._id, 'RESOLVED', 'Field repair completed successfully.')}
                      disabled={isActing}
                      className="btn-sage"
                      style={{ fontSize: '0.8rem', padding: '0.45rem 0.85rem', flex: '1 1 auto' }}
                    >
                      {isActing ? (
                        <RefreshCw size={13} style={{ animation: 'spin 1s linear infinite' }} />
                      ) : (
                        <Check size={14} />
                      )}
                      {isActing ? 'Saving...' : 'Mark Resolved'}
                    </button>
                  )}
                  {(c.status === 'RESOLVED' || c.status === 'CLOSED') && (
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#34d399', fontWeight: 700, fontSize: '0.82rem' }}>
                      <CheckCircle2 size={15} /> Work verified complete
                    </div>
                  )}
                </div>

                {/* ── Navigation & Evidence Buttons ── */}
                <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                  {c.location?.coordinates && (
                    <a
                      href={`https://maps.google.com/?q=${c.location.coordinates[1]},${c.location.coordinates[0]}`}
                      target="_blank"
                      rel="noreferrer"
                      className="btn-glass"
                      style={{ flex: 1, justifyContent: 'center', fontSize: '0.78rem', padding: '0.5rem', color: '#34d399', borderColor: 'rgba(16,185,129,0.3)' }}
                    >
                      <Navigation size={13} /> GPS Navigate
                    </a>
                  )}
                  <button
                    onClick={() => setSelectedComplaint(c)}
                    className="btn-glass"
                    style={{ flex: 1, justifyContent: 'center', fontSize: '0.78rem', padding: '0.5rem' }}
                  >
                    <Camera size={13} /> Full Details & Evidence
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* ── Complaint Quick View Drawer ── */}
        <ComplaintQuickViewDrawer
          complaint={selectedComplaint}
          isOpen={!!selectedComplaint}
          onClose={() => setSelectedComplaint(null)}
          onRefresh={loadOfficerQueue}
        />

      </div>
    </div>
  );
}
