import React, { useState, useEffect } from 'react';
import {
  X, MapPin, Clock, CheckCircle2, Sparkles, Camera,
  ThumbsUp, ThumbsDown, Navigation, Check, Play, UserCheck,
  Image as ImageIcon, RefreshCw, AlertTriangle,
} from 'lucide-react';
import { complaintAPI } from '../services/api';
import { useAuth } from '../context/AuthContext';

const STATUS_BADGE = {
  SUBMITTED: 'badge-teal',
  ASSIGNED: 'badge-teal',
  ACCEPTED: 'badge-medium',
  IN_PROGRESS: 'badge-medium',
  RESOLVED: 'badge-sage',
  CLOSED: 'badge-sage',
};

export default function ComplaintQuickViewDrawer({ complaint, isOpen, onClose, onRefresh }) {
  // ✅ ALL HOOKS MUST BE CALLED BEFORE ANY CONDITIONAL RETURNS (Rules of Hooks)
  const { user } = useAuth();
  const [localStatus, setLocalStatus] = useState(complaint?.status || '');
  const [localHistory, setLocalHistory] = useState(complaint?.history || []);
  const [notice, setNotice] = useState('');
  const [noticeType, setNoticeType] = useState('success'); // 'success' | 'error'
  const [loading, setLoading] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [detailLoading, setDetailLoading] = useState(false);
  const [fullComplaint, setFullComplaint] = useState(null);

  // Sync state when complaint prop changes
  useEffect(() => {
    if (!complaint) return;
    setLocalStatus(complaint.status || '');
    setLocalHistory(complaint.history || []);
    setNotice('');
    setNoticeType('success');
    setImageError(false);
    setFullComplaint(null);

    // If the complaint from the list doesn't have full history, fetch it
    if (complaint._id && (!complaint.history || complaint.history.length === 0)) {
      setDetailLoading(true);
      complaintAPI.getById(complaint._id)
        .then((res) => {
          if (res.data.success) {
            const full = res.data.data;
            setLocalHistory(full.history || []);
            setFullComplaint(full);
          }
        })
        .catch(() => {})
        .finally(() => setDetailLoading(false));
    }
  }, [complaint]);

  // ✅ CONDITIONAL RENDER after all hooks
  if (!isOpen || !complaint) return null;

  const displayComplaint = fullComplaint || complaint;

  const showNotice = (msg, type = 'success') => {
    setNotice(msg);
    setNoticeType(type);
    setTimeout(() => setNotice(''), 6000);
  };

  const handleVerify = async (verified) => {
    const targetStatus = verified ? 'RESOLVED' : 'IN_PROGRESS';
    const previousStatus = localStatus;

    // Optimistic UI update
    setLocalStatus(targetStatus);
    showNotice(
      verified
        ? '✔ Verification Confirmed! Complaint marked RESOLVED in Municipal Ledger.'
        : '⚠ Issue marked as unresolved. Reopened for field officer review.',
      verified ? 'success' : 'warning'
    );

    const optimisticEntry = {
      note: verified
        ? 'Citizen confirmed resolution. Work verified successfully.'
        : 'Citizen marked issue as still unresolved. Reopened for field inspection.',
      actorName: user?.name || 'Citizen',
      createdAt: new Date().toISOString(),
    };
    setLocalHistory((prev) => [...prev, optimisticEntry]);
    setLoading(true);

    try {
      const res = await complaintAPI.verifyResolution(complaint._id, { verified });
      if (res.data.success && onRefresh) {
        onRefresh();
      }
    } catch (err) {
      // Rollback
      setLocalStatus(previousStatus);
      setLocalHistory((prev) => prev.filter((h) => h !== optimisticEntry));
      showNotice(err.response?.data?.message || 'Verification update failed. Please retry.', 'error');
    } finally {
      setLoading(false);
    }
  };

  const handleStatusChange = async (newStatus, noteText) => {
    const previousStatus = localStatus;

    // Optimistic UI update
    setLocalStatus(newStatus);
    showNotice(`✔ Work Status Updated to ${newStatus}! Saved in Municipal Database.`, 'success');

    const optimisticEntry = {
      note: noteText || `Officer updated status to ${newStatus}`,
      actorName: user?.name || 'Field Officer',
      createdAt: new Date().toISOString(),
    };
    setLocalHistory((prev) => [...prev, optimisticEntry]);
    setLoading(true);

    try {
      const res = await complaintAPI.updateStatus(complaint._id, {
        status: newStatus,
        note: noteText || `Officer updated status to ${newStatus}`,
      });
      if (res.data.success && onRefresh) {
        onRefresh();
      }
    } catch (err) {
      // Rollback
      setLocalStatus(previousStatus);
      setLocalHistory((prev) => prev.filter((h) => h !== optimisticEntry));
      showNotice(err.response?.data?.message || 'Status update failed. Please retry.', 'error');
    } finally {
      setLoading(false);
    }
  };

  const hasLocation =
    displayComplaint?.location?.coordinates?.[0] &&
    displayComplaint?.location?.coordinates?.[1];

  const gpsUrl = hasLocation
    ? `https://maps.google.com/?q=${displayComplaint.location.coordinates[1]},${displayComplaint.location.coordinates[0]}`
    : null;

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        background: 'rgba(5, 8, 15, 0.75)',
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
        zIndex: 'var(--z-drawer, 400)',
        display: 'flex',
        justifyContent: 'flex-end',
        animation: 'fadeIn 0.2s ease',
      }}
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
      aria-modal="true"
      role="dialog"
      aria-label="Complaint Quick View"
    >
      <div
        className="glass-drawer-content"
        style={{
          background: '#121722',
          borderLeft: '1px solid rgba(255, 255, 255, 0.12)',
          width: '100%',
          maxWidth: '520px',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          boxShadow: '-15px 0 40px rgba(0,0,0,0.8)',
          overflowY: 'auto',
          animation: 'slideLeft 0.25s cubic-bezier(0.4, 0, 0.2, 1)',
        }}
      >
        {/* ── Drawer Header ── */}
        <div
          style={{
            padding: '1.25rem 1.5rem',
            borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            background: '#0a0d14',
            position: 'sticky',
            top: 0,
            zIndex: 10,
            flexShrink: 0,
          }}
        >
          <div>
            <div style={{ fontSize: '0.7rem', color: '#34d399', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.06em' }}>
              Municipal Operating System
            </div>
            <div style={{ fontFamily: 'monospace', fontWeight: 800, color: '#3b82f6', fontSize: '1.2rem', letterSpacing: '0.03em' }}>
              {complaint.trackingCode}
            </div>
          </div>

          <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
            {/* GPS Navigate Button */}
            {gpsUrl && (
              <a
                href={gpsUrl}
                target="_blank"
                rel="noreferrer"
                className="btn-glass"
                style={{ padding: '0.4rem 0.7rem', fontSize: '0.75rem', color: '#34d399', borderColor: 'rgba(16,185,129,0.3)', textDecoration: 'none' }}
                title="Open GPS Navigation"
              >
                <Navigation size={14} /> Navigate
              </a>
            )}
            <button
              onClick={onClose}
              style={{
                background: 'rgba(255, 255, 255, 0.06)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                color: '#cbd5e1',
                width: '36px',
                height: '36px',
                borderRadius: '0.5rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
              }}
              aria-label="Close Drawer"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* ── Drawer Body ── */}
        <div style={{ padding: '1.25rem 1.5rem', display: 'flex', flexDirection: 'column', gap: '1.1rem', flex: 1 }}>

          {/* Confirmation / Error Banner */}
          {notice && (
            <div
              style={{
                background: noticeType === 'success'
                  ? 'rgba(16, 185, 129, 0.15)'
                  : noticeType === 'warning'
                    ? 'rgba(245, 158, 11, 0.15)'
                    : 'rgba(239, 68, 68, 0.15)',
                border: `1px solid ${noticeType === 'success' ? '#10b981' : noticeType === 'warning' ? '#f59e0b' : '#ef4444'}`,
                color: noticeType === 'success' ? '#34d399' : noticeType === 'warning' ? '#fbbf24' : '#f87171',
                padding: '0.85rem 1rem',
                borderRadius: '0.5rem',
                display: 'flex',
                alignItems: 'flex-start',
                gap: '0.5rem',
                fontWeight: 600,
                fontSize: '0.85rem',
                lineHeight: 1.4,
                animation: 'fadeIn 0.25s ease',
              }}
            >
              <CheckCircle2 size={16} style={{ marginTop: '1px', flexShrink: 0 }} />
              {notice}
            </div>
          )}

          {/* Title & Status Badges */}
          <div>
            <div style={{ display: 'flex', gap: '0.4rem', marginBottom: '0.6rem', flexWrap: 'wrap' }}>
              <span className={`badge ${displayComplaint.severity === 'CRITICAL' ? 'badge-critical' : displayComplaint.severity === 'HIGH' ? 'badge-high' : displayComplaint.severity === 'LOW' ? 'badge-low' : 'badge-medium'}`}>
                {displayComplaint.severity}
              </span>
              <span className={`badge ${STATUS_BADGE[localStatus] || 'badge-teal'}`}>
                ● {localStatus}
              </span>
              {displayComplaint.priorityScore > 0 && (
                <span className="badge badge-teal">Priority {displayComplaint.priorityScore}/100</span>
              )}
              {displayComplaint.safetyRisk && (
                <span className="badge badge-critical">⚠ Safety Risk</span>
              )}
            </div>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#ffffff', lineHeight: 1.3 }}>
              {displayComplaint.title}
            </h2>
          </div>

          {/* Description */}
          <div style={{ fontSize: '0.88rem', color: '#cbd5e1', lineHeight: 1.65, background: '#0a0d14', padding: '0.9rem', borderRadius: '0.5rem', border: '1px solid rgba(255,255,255,0.06)' }}>
            {displayComplaint.description}
          </div>

          {/* Evidence Photo Gallery */}
          {displayComplaint.image && !imageError && (
            <div style={{ background: '#0a0d14', borderRadius: '0.6rem', padding: '0.85rem', border: '1px solid rgba(255,255,255,0.08)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.72rem', color: '#34d399', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '0.6rem' }}>
                <ImageIcon size={13} /> Attached Photo Evidence
              </div>
              <img
                src={displayComplaint.image}
                alt="Complaint Evidence"
                onError={() => setImageError(true)}
                style={{
                  width: '100%',
                  maxHeight: '210px',
                  objectFit: 'cover',
                  borderRadius: '0.5rem',
                  border: '1px solid rgba(255,255,255,0.1)',
                  display: 'block',
                }}
              />
            </div>
          )}

          {/* AI Intelligence Rationale */}
          <div style={{ background: 'rgba(59, 130, 246, 0.08)', border: '1px solid rgba(59, 130, 246, 0.25)', padding: '0.9rem', borderRadius: '0.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#60a5fa', fontWeight: 700, fontSize: '0.82rem', marginBottom: '0.5rem' }}>
              <Sparkles size={15} /> AI Intelligence Rationale
            </div>
            <div style={{ fontSize: '0.8rem', color: '#cbd5e1', lineHeight: 1.5 }}>
              <strong>Category:</strong> {displayComplaint.category} ({displayComplaint.subCategory || 'Infrastructure'}){' '}
              •{' '}
              <strong>SLA:</strong>{' '}
              <span style={{ color: displayComplaint.sla?.isBreached ? '#ef4444' : displayComplaint.sla?.isWarning ? '#fbbf24' : '#34d399', fontWeight: 700 }}>
                {displayComplaint.sla?.statusLabel || 'Within Target'}
              </span>
            </div>
          </div>

          {/* Metadata Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.6rem', fontSize: '0.8rem', background: '#0a0d14', padding: '0.9rem', borderRadius: '0.5rem', border: '1px solid rgba(255,255,255,0.06)' }}>
            <div><span style={{ color: '#94a3b8' }}>Ward:</span> <strong style={{ color: '#fff' }}>Ward {displayComplaint.ward}</strong></div>
            <div><span style={{ color: '#94a3b8' }}>Department:</span> <strong style={{ color: '#fff' }}>{displayComplaint.departmentName || 'General'}</strong></div>
            <div><span style={{ color: '#94a3b8' }}>Citizen:</span> <strong style={{ color: '#fff' }}>{displayComplaint.citizenName || 'Anonymous'}</strong></div>
            <div><span style={{ color: '#94a3b8' }}>Officer:</span> <strong style={{ color: '#fff' }}>{displayComplaint.assignedOfficer?.name || 'Unassigned'}</strong></div>
            <div style={{ gridColumn: 'span 2' }}><span style={{ color: '#94a3b8' }}>Location:</span> {displayComplaint.address}</div>
          </div>

          {/* ── Field Officer Work Actions ── */}
          <div style={{ background: '#121722', border: '1px solid rgba(59, 130, 246, 0.3)', padding: '1.1rem', borderRadius: '0.6rem' }}>
            <div style={{ fontSize: '0.82rem', fontWeight: 800, color: '#60a5fa', marginBottom: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
              Field Officer Work Actions
            </div>
            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
              {localStatus === 'SUBMITTED' && (
                <button
                  onClick={() => handleStatusChange('ACCEPTED', 'Officer accepted citizen report dispatch.')}
                  disabled={loading}
                  className="btn-glass"
                  style={{ padding: '0.5rem 0.85rem', fontSize: '0.8rem', borderColor: '#3b82f6', color: '#60a5fa', flex: '1 1 auto' }}
                >
                  <UserCheck size={14} /> Accept Job
                </button>
              )}
              {localStatus !== 'IN_PROGRESS' && localStatus !== 'RESOLVED' && localStatus !== 'CLOSED' && (
                <button
                  onClick={() => handleStatusChange('IN_PROGRESS', 'Officer initiated on-site field repairs.')}
                  disabled={loading}
                  className="btn-glass"
                  style={{ padding: '0.5rem 0.85rem', fontSize: '0.8rem', borderColor: '#f59e0b', color: '#fbbf24', flex: '1 1 auto' }}
                >
                  <Play size={14} /> Start Field Work
                </button>
              )}
              {localStatus !== 'RESOLVED' && localStatus !== 'CLOSED' && (
                <button
                  onClick={() => handleStatusChange('RESOLVED', 'Field Officer completed on-site repair work.')}
                  disabled={loading}
                  className="btn-sage"
                  style={{ padding: '0.5rem 0.85rem', fontSize: '0.8rem', flex: '1 1 auto' }}
                >
                  {loading ? <RefreshCw size={14} style={{ animation: 'spin 1s linear infinite' }} /> : <Check size={14} />}
                  {loading ? 'Saving...' : 'Mark Work Resolved'}
                </button>
              )}
              {(localStatus === 'RESOLVED' || localStatus === 'CLOSED') && (
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#34d399', fontWeight: 700, fontSize: '0.85rem' }}>
                  <Check size={16} /> Work completed
                </div>
              )}
            </div>
          </div>

          {/* ── Citizen Resolution Verification ── */}
          <div style={{ background: 'rgba(16, 185, 129, 0.1)', border: '1px solid rgba(16, 185, 129, 0.4)', padding: '1.1rem', borderRadius: '0.6rem' }}>
            <div style={{ fontSize: '0.9rem', fontWeight: 800, color: '#34d399', marginBottom: '0.3rem' }}>
              Citizen Resolution Verification
            </div>
            <p style={{ fontSize: '0.8rem', color: '#cbd5e1', marginBottom: '0.75rem', lineHeight: 1.5 }}>
              Confirm if the reported problem has been resolved satisfactorily on-site.
            </p>
            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
              <button
                onClick={() => handleVerify(true)}
                disabled={loading}
                className="btn-sage"
                style={{ padding: '0.55rem 0.9rem', fontSize: '0.85rem', flex: '1 1 auto', justifyContent: 'center', minWidth: '120px' }}
              >
                <ThumbsUp size={14} /> YES — Resolved
              </button>
              <button
                onClick={() => handleVerify(false)}
                disabled={loading}
                className="btn-glass"
                style={{ padding: '0.55rem 0.9rem', fontSize: '0.85rem', borderColor: 'rgba(239,68,68,0.45)', color: '#f87171', flex: '1 1 auto', justifyContent: 'center', minWidth: '120px' }}
              >
                <ThumbsDown size={14} /> STILL AN ISSUE
              </button>
            </div>
          </div>

          {/* ── Audit History Log ── */}
          <div>
            <div style={{ fontSize: '0.75rem', fontWeight: 800, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '0.65rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <Clock size={13} /> Audit History Log
              <span style={{ background: 'rgba(255,255,255,0.06)', padding: '0.1rem 0.45rem', borderRadius: '999px', fontSize: '0.7rem' }}>
                {localHistory.length} entries
              </span>
            </div>
            {detailLoading ? (
              <div style={{ color: '#64748b', fontSize: '0.82rem', padding: '0.75rem 0' }}>Loading history...</div>
            ) : localHistory.length === 0 ? (
              <div style={{ color: '#64748b', fontSize: '0.82rem', padding: '0.5rem 0' }}>No audit entries yet.</div>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.8rem', maxHeight: '240px', overflowY: 'auto', paddingRight: '0.25rem' }}>
                {localHistory.map((h, i) => (
                  <div key={i} style={{ borderLeft: '2px solid #10b981', paddingLeft: '0.75rem' }}>
                    <div style={{ fontWeight: 700, color: '#f8fafc', lineHeight: 1.4 }}>{h.note}</div>
                    <div style={{ color: '#94a3b8', fontSize: '0.73rem', marginTop: '0.15rem' }}>
                      By {h.actorName} • {new Date(h.createdAt).toLocaleString()}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}
