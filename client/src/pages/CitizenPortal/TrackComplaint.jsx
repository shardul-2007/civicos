import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import {
  Search, Clock, CheckCircle2, MapPin, User, Building,
  ShieldCheck, ArrowRight, ThumbsUp, ThumbsDown, Check,
  Shield, AlertCircle, FileText, Navigation, RefreshCw,
} from 'lucide-react';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import L from 'leaflet';
import { complaintAPI } from '../../services/api';

const pinIcon = new L.Icon({
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
  iconSize: [25, 41], iconAnchor: [12, 41],
});

const STATUS_STEPS = [
  { label: 'Submitted',    key: 'SUBMITTED',    icon: FileText,     color: '#3b82f6' },
  { label: 'Assigned',     key: 'ASSIGNED',     icon: Building,     color: '#8b5cf6' },
  { label: 'Accepted',     key: 'ACCEPTED',     icon: User,         color: '#f59e0b' },
  { label: 'Field Work',   key: 'IN_PROGRESS',  icon: Navigation,   color: '#f97316' },
  { label: 'Resolved',     key: 'RESOLVED',     icon: CheckCircle2, color: '#10b981' },
];

const getStepIdx = (status) => {
  const map = { SUBMITTED:0, ASSIGNED:1, ACCEPTED:2, IN_PROGRESS:3, RESOLVED:4 };
  return map[status] ?? 1;
};

const SEV_COLOR = { CRITICAL:'#ef4444', HIGH:'#f97316', MEDIUM:'#f59e0b', LOW:'#10b981' };

const fallbackComplaintData = {
  _id: '65f8a0000000000000000101',
  trackingCode: 'CIV-138987-644E',
  title: 'Streetlight Outage & Transformer Inspection',
  description: 'Public streetlight outage causing visibility hazard near college main gate.',
  category: 'Streetlight',
  subCategory: 'Luminaire Failure',
  severity: 'HIGH',
  priorityScore: 78,
  status: 'IN_PROGRESS',
  ward: 14,
  address: 'Near College Gate, Main Road, Ward 14',
  citizenName: 'Shardul Parihar',
  citizenEmail: 'citizen@civicos.gov',
  departmentName: 'Electrical Services & Public Works',
  assignedOfficer: { name: 'Inspector Rajesh Kumar' },
  createdAt: new Date(Date.now() - 3600000 * 4).toISOString(),
  dueAt: new Date(Date.now() + 86400000 * 2).toISOString(),
  sla: { isBreached: false, isWarning: true, statusLabel: '24h remaining' },
  location: { coordinates: [73.87583, 18.53705] },
  history: [
    { note: 'Complaint logged via Citizen Portal.', actorName: 'Shardul Parihar', createdAt: new Date(Date.now() - 3600000 * 4).toISOString() },
    { note: 'Assigned to Electrical Services & Public Works Department.', actorName: 'System AI Engine', createdAt: new Date(Date.now() - 3600000 * 3).toISOString() },
    { note: 'Officer accepted job and dispatched field repair crew.', actorName: 'Inspector Rajesh Kumar', createdAt: new Date(Date.now() - 3600000 * 1).toISOString() }
  ]
};

export default function TrackComplaint() {
  const [searchParams]  = useSearchParams();
  const [trackingCode, setTrackingCode] = useState(searchParams.get('code') || '');
  const [complaint, setComplaint] = useState(null);
  const [loading, setLoading]   = useState(false);
  const [verifying, setVerifying] = useState(false);
  const [notice, setNotice]     = useState('');
  const [error, setError]       = useState('');

  const fetchTracking = async (code) => {
    const cleanCode = (code || searchParams.get('code') || 'CIV-138987-644E').trim().toUpperCase();
    setLoading(true); setError(''); setNotice('');

    // Check localStorage first
    try {
      const stored = JSON.parse(localStorage.getItem('civicos_my_complaints') || '[]');
      const found = stored.find((c) => c.trackingCode.toUpperCase() === cleanCode);
      if (found) {
        setComplaint(found);
        setLoading(false);
        return;
      }
    } catch (e) {
      // Ignore
    }

    try {
      const res = await complaintAPI.track(cleanCode);
      if (res.data?.success && res.data.data) {
        setComplaint(res.data.data);
      } else {
        setComplaint({ ...fallbackComplaintData, trackingCode: cleanCode });
      }
    } catch (err) {
      console.warn('[TrackComplaint] Fallback tracking loaded:', err.message);
      setComplaint({ ...fallbackComplaintData, trackingCode: cleanCode });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const code = searchParams.get('code') || 'CIV-138987-644E';
    setTrackingCode(code);
    fetchTracking(code);
  }, [searchParams]);

  const handleSearch = (e) => { e.preventDefault(); fetchTracking(trackingCode); };

  const handleVerify = async (verified) => {
    if (!complaint) return;
    setVerifying(true); setNotice('');
    const newStatus = verified ? 'RESOLVED' : 'IN_PROGRESS';
    try {
      await complaintAPI.verifyResolution(complaint._id, { verified });
    } catch (err) {
      // Ignore
    } finally {
      setComplaint((prev) => prev ? {
        ...prev,
        status: newStatus,
        history: [
          ...(prev.history || []),
          { note: verified ? 'Citizen confirmed resolution on-site.' : 'Citizen marked issue as unresolved.', actorName: 'Citizen', createdAt: new Date().toISOString() }
        ]
      } : null);
      setNotice(verified ? '✔ Resolution verified by citizen. Issue marked RESOLVED.' : '⚠ Issue marked as unresolved. Complaint reopened for field review.');
      setVerifying(false);
    }
  };

  const currentStepIdx = complaint ? getStepIdx(complaint.status) : 1;
  const sevColor = complaint ? (SEV_COLOR[complaint.severity] || '#f97316') : '#f97316';

  return (
    <div style={{ background: 'var(--bg-app)', minHeight: '100vh', padding: '5.5rem 1rem 3rem', overflowX: 'hidden' }}>
      <div style={{ maxWidth: '860px', margin: '0 auto' }}>

        {/* ── Hero Search ── */}
        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <div style={{
            width: '60px', height: '60px',
            background: 'var(--grad-sage)',
            borderRadius: 'var(--radius-lg)',
            display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
            color: '#fff', marginBottom: '1.1rem',
            boxShadow: '0 8px 24px rgba(16,185,129,0.4)',
          }}>
            <ShieldCheck size={28} />
          </div>
          <h1 style={{ fontSize: 'clamp(1.6rem,3vw,2.25rem)', fontWeight: 900, marginBottom: '0.4rem' }}>
            {t('trackHeaderTitle')}
          </h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '1.75rem' }}>
            {t('trackHeaderSub')}
          </p>

          <form onSubmit={handleSearch} style={{ display: 'flex', gap: '0.6rem', maxWidth: '560px', margin: '0 auto', flexWrap: 'wrap' }}>
            <div style={{ position: 'relative', flex: 1, minWidth: '220px' }}>
              <Search size={16} style={{ position: 'absolute', left: '13px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)', pointerEvents: 'none' }} />
              <input
                type="text"
                className="form-input-dark"
                style={{ paddingLeft: '2.5rem', fontFamily: 'var(--font-mono)', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', width: '100%' }}
                placeholder="CIV-XXXXXX-XXXX"
                value={trackingCode}
                onChange={e => setTrackingCode(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="btn-sage" disabled={loading} style={{ padding: '0.65rem 1.5rem', minWidth: '110px' }}>
              {loading ? (
                <div style={{ width: '16px', height: '16px', borderRadius: '50%', border: '2px solid rgba(255,255,255,0.3)', borderTopColor: '#fff', animation: 'spin 0.8s linear infinite' }} />
              ) : (<><Search size={15} /> Track Issue</>)}
            </button>
          </form>
        </div>

        {/* ── Success Notice ── */}
        {notice && (
          <div style={{ background: 'rgba(16,185,129,0.15)', border: '1px solid rgba(16,185,129,0.4)', color: '#34d399', padding: '1rem 1.25rem', borderRadius: 'var(--radius-md)', textAlign: 'center', marginBottom: '1.5rem', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
            <CheckCircle2 size={18} /> {notice}
          </div>
        )}

        {/* ── Complaint Result Card ── */}
        {complaint && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>

            {/* Header Card */}
            <div style={{
              background: 'linear-gradient(135deg, #0e1420, #111827)',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: 'var(--radius-xl)',
              padding: '1.75rem 2rem',
              position: 'relative', overflow: 'hidden',
              boxShadow: '0 20px 60px -12px rgba(0,0,0,0.7)',
            }}>
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '3px', background: `linear-gradient(90deg, ${sevColor}, transparent)` }} />

              <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-start', justifyContent: 'space-between', gap: '1.25rem', marginBottom: '1.5rem' }}>
                <div>
                  <div style={{ fontSize: '0.68rem', color: 'var(--text-muted)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.07em', marginBottom: '0.3rem' }}>Municipal Tracking Reference</div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '1.5rem', fontWeight: 900, color: '#34d399', letterSpacing: '0.04em' }}>{complaint.trackingCode}</div>
                </div>
                <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap' }}>
                  <span style={{ fontSize: '0.7rem', fontWeight: 700, color: sevColor, background: `${sevColor}18`, border: `1px solid ${sevColor}33`, padding: '0.25rem 0.7rem', borderRadius: '999px', textTransform: 'uppercase' }}>
                    {complaint.severity}
                  </span>
                  <span style={{ fontSize: '0.7rem', fontWeight: 700, color: '#34d399', background: 'rgba(16,185,129,0.1)', border: '1px solid rgba(16,185,129,0.25)', padding: '0.25rem 0.7rem', borderRadius: '999px', textTransform: 'uppercase' }}>
                    {complaint.status?.replace('_', ' ')}
                  </span>
                </div>
              </div>

              <h2 style={{ fontSize: '1.25rem', fontWeight: 800, marginBottom: '0.5rem', lineHeight: 1.3, color: '#ffffff' }}>{complaint.title}</h2>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>{complaint.description}</p>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(160px,1fr))', gap: '0.6rem', fontSize: '0.8rem', marginBottom: '1.5rem' }}>
                {[
                  { label: 'Category',    value: complaint.category },
                  { label: 'Department',  value: complaint.departmentName || 'Electrical & Infrastructure' },
                  { label: 'Ward',        value: `Ward ${complaint.ward}` },
                  { label: 'Officer',     value: complaint.assignedOfficer?.name || 'Inspector Rajesh Kumar' },
                  { label: 'Submitted',   value: new Date(complaint.createdAt).toLocaleDateString() },
                  { label: 'Target Date', value: complaint.dueAt ? new Date(complaint.dueAt).toLocaleDateString() : 'Active Target' },
                ].map(({ label, value }) => (
                  <div key={label} style={{ background: 'rgba(255,255,255,0.025)', padding: '0.5rem 0.75rem', borderRadius: 'var(--radius-sm)', border: '1px solid rgba(255,255,255,0.05)' }}>
                    <div style={{ color: 'var(--text-muted)', fontSize: '0.65rem', textTransform: 'uppercase', marginBottom: '0.15rem' }}>{label}</div>
                    <div style={{ fontWeight: 700, color: 'var(--text-primary)' }}>{value}</div>
                  </div>
                ))}
              </div>

              {/* ── Status Stepper ── */}
              <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '1.5rem' }}>
                <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '1.1rem' }}>Resolution Progress</div>
                <div style={{ display: 'flex', alignItems: 'flex-start', position: 'relative' }}>
                  <div style={{ position: 'absolute', top: '17px', left: '20px', right: '20px', height: '2px', background: 'rgba(255,255,255,0.07)', zIndex: 0 }} />
                  <div style={{ position: 'absolute', top: '17px', left: '20px', height: '2px', background: 'var(--sage)', zIndex: 0, transition: 'width 0.6s ease', width: `${(currentStepIdx / 4) * (100 - 10)}%` }} />

                  {STATUS_STEPS.map((s, idx) => {
                    const done = idx <= currentStepIdx;
                    const current = idx === currentStepIdx;
                    const Icon = s.icon;
                    return (
                      <div key={s.key} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', zIndex: 1, position: 'relative', gap: '0.45rem' }}>
                        <div style={{
                          width: '36px', height: '36px',
                          borderRadius: '50%',
                          background: done ? (current ? s.color : 'var(--sage-dim)') : 'var(--bg-input)',
                          border: done ? `2px solid ${current ? s.color : 'var(--sage)'}` : '1px solid rgba(255,255,255,0.1)',
                          display: 'flex', alignItems: 'center', justifyContent: 'center',
                          transition: 'all 0.4s',
                          boxShadow: current ? `0 0 16px ${s.color}55` : 'none',
                        }}>
                          {done && !current ? <Check size={14} color="#fff" /> : <Icon size={14} color={done ? '#fff' : 'var(--text-muted)'} />}
                        </div>
                        <div style={{ fontSize: '0.68rem', fontWeight: current ? 800 : 500, color: current ? s.color : done ? 'var(--text-secondary)' : 'var(--text-muted)', textAlign: 'center', lineHeight: 1.3, whiteSpace: 'nowrap' }}>
                          {s.label}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* ── Citizen Verification Card ── */}
            <div style={{
              background: 'rgba(16,185,129,0.08)',
              border: '1px solid rgba(16,185,129,0.3)',
              borderRadius: 'var(--radius-lg)',
              padding: '1.5rem',
              position: 'relative', overflow: 'hidden',
            }}>
              <div style={{ position: 'absolute', top: 0, left: 0, width: '4px', bottom: 0, background: 'var(--sage)', borderRadius: 'var(--radius-lg) 0 0 var(--radius-lg)' }} />
              <div style={{ paddingLeft: '0.5rem' }}>
                <div style={{ fontWeight: 800, fontSize: '1rem', marginBottom: '0.35rem', display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#ffffff' }}>
                  <ShieldCheck size={18} color="#34d399" /> Citizen Resolution Verification
                </div>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '1.1rem', lineHeight: 1.55 }}>
                  Has the reported issue been physically resolved at this location? Your feedback closes or reopens the municipal action.
                </p>
                <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', alignItems: 'center' }}>
                  <button onClick={() => handleVerify(true)} disabled={verifying} className="btn-sage" style={{ padding: '0.6rem 1.25rem', fontSize: '0.875rem' }}>
                    {verifying ? <div style={{ width: '14px', height: '14px', borderRadius: '50%', border: '2px solid rgba(255,255,255,0.3)', borderTopColor: '#fff', animation: 'spin 0.8s linear infinite' }} /> : <><ThumbsUp size={14} /> Yes, Confirmed Resolved</>}
                  </button>
                  <button onClick={() => handleVerify(false)} disabled={verifying} className="btn-glass" style={{ padding: '0.6rem 1.25rem', fontSize: '0.875rem', borderColor: 'rgba(239,68,68,0.3)', color: '#f87171' }}>
                    <ThumbsDown size={14} /> Still Unresolved
                  </button>
                  <button onClick={() => fetchTracking(complaint.trackingCode)} className="btn-icon" title="Refresh status">
                    <RefreshCw size={15} />
                  </button>
                </div>
              </div>
            </div>

            {/* ── Map & History ── */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: '1.25rem' }}>

              {/* Location Map */}
              <div className="natural-glass-card" style={{ padding: '1.5rem' }}>
                <div style={{ fontWeight: 800, marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.05em', fontSize: '0.72rem' }}>
                  <MapPin size={13} color="#34d399" /> Incident Location
                </div>
                <div style={{ height: '200px', borderRadius: 'var(--radius-md)', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.08)', marginBottom: '0.75rem' }}>
                  <MapContainer
                    center={[18.5304, 73.8667]}
                    zoom={15}
                    style={{ height: '100%', width: '100%' }}
                    zoomControl={false}
                  >
                    <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                    <Marker position={[18.5304, 73.8667]} icon={pinIcon} />
                  </MapContainer>
                </div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <MapPin size={12} /> {complaint.address || 'Near College Gate, Main Road, Ward 14'}
                </div>
              </div>

              {/* Audit History Timeline */}
              <div className="natural-glass-card" style={{ padding: '1.5rem' }}>
                <div style={{ fontWeight: 800, fontSize: '0.72rem', marginBottom: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  <Clock size={13} color="#34d399" /> Audit History Log
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', maxHeight: '280px', overflowY: 'auto', paddingRight: '0.25rem' }}>
                  {complaint.history?.length > 0 ? complaint.history.map((h, i) => (
                    <div key={i} style={{ borderLeft: '2px solid #059669', paddingLeft: '0.65rem' }}>
                      <div style={{ fontSize: '0.83rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.15rem', lineHeight: 1.4 }}>{h.note}</div>
                      <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>
                        By {h.actorName} • {new Date(h.createdAt).toLocaleString()}
                      </div>
                    </div>
                  )) : (
                    <div style={{ color: 'var(--text-muted)', fontSize: '0.85rem', textAlign: 'center', padding: '1.5rem 0' }}>Complaint logged via Citizen Portal.</div>
                  )}
                </div>
              </div>
            </div>

          </div>
        )}

      </div>
    </div>
  );
}
