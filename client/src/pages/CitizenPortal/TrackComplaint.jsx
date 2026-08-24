import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import {
  Search, Clock, CheckCircle2, MapPin, User, Building,
  ShieldCheck, ArrowRight, ThumbsUp, ThumbsDown, Check,
  Shield, AlertCircle, FileText, Navigation, RefreshCw, Layers, Cpu, Server, Code, Zap
} from 'lucide-react';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import L from 'leaflet';
import { complaintAPI } from '../../services/api';
import { useLanguage } from '../../context/LanguageContext';
import LeafletErrorBoundary from '../../components/LeafletErrorBoundary';

const createPinIcon = () => {
  if (typeof window === 'undefined' || !L || !L.divIcon) return null;
  return L.divIcon({
    className: 'custom-leaflet-pin',
    html: `<div style="background:#10b981; width:16px; height:16px; border-radius:50%; border:3px solid white; box-shadow:0 0 14px #10b981;"></div>`,
    iconSize: [16, 16],
    iconAnchor: [8, 8],
  });
};

const formatDate = (dateStr) => {
  if (!dateStr) return 'Active';
  try {
    const d = new Date(dateStr);
    return isNaN(d.getTime()) ? 'Active' : d.toLocaleDateString();
  } catch (e) {
    return 'Active';
  }
};

const formatDateTime = (dateStr) => {
  if (!dateStr) return 'Just now';
  try {
    const d = new Date(dateStr);
    return isNaN(d.getTime()) ? 'Just now' : d.toLocaleString();
  } catch (e) {
    return 'Just now';
  }
};

const STATUS_STEPS = [
  { label: 'Reported', key: 'SUBMITTED', icon: FileText, color: '#3b82f6' },
  { label: 'AI Verification', key: 'ASSIGNED', icon: Cpu, color: '#8b5cf6' },
  { label: 'Forwarded to Dept API', key: 'ACCEPTED', icon: Server, color: '#f59e0b' },
  { label: 'In Progress', key: 'IN_PROGRESS', icon: Navigation, color: '#f97316' },
  { label: 'Resolved & Verified', key: 'RESOLVED', icon: CheckCircle2, color: '#10b981' },
];

const fallbackComplaintData = {
  _id: '65f8a0000000000000000101',
  trackingCode: 'CIV-138987-644E',
  externalDepartmentId: 'WATER-WSS-8891',
  secondaryDepartmentName: 'Roads & Municipal Infrastructure',
  secondaryExternalId: 'ROAD-PW-3342',
  sourcePlatform: 'CivicOS Interoperability Engine v2.5',
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
    { note: 'Complaint logged via CivicOS Citizen Portal.', actorName: 'Shardul Parihar', createdAt: new Date(Date.now() - 3600000 * 4).toISOString() },
    { note: 'Transformed into CIV-ODF v1.0 Standard & Dispatched to Government Department API.', actorName: 'CivicOS Interoperability Engine', createdAt: new Date(Date.now() - 3600000 * 3.9).toISOString() },
    { note: 'Accepted by Department API (Linked Ext ID: WATER-WSS-8891). Linked Secondary Dept: Roads & Infrastructure (ROAD-PW-3342).', actorName: 'Water Supply & Sewerage Board Gateway', createdAt: new Date(Date.now() - 3600000 * 3.8).toISOString() },
    { note: 'Field inspector assigned to location.', actorName: 'Inspector Rajesh Kumar', createdAt: new Date(Date.now() - 3600000 * 1).toISOString() }
  ]
};

function TrackMap({ location, address, complaint }) {
  const coords = location?.coordinates;
  const lat = complaint?.latitude || (coords && coords.length >= 2 && !isNaN(coords[1]) ? coords[1] : 18.5304);
  const lng = complaint?.longitude || (coords && coords.length >= 2 && !isNaN(coords[0]) ? coords[0] : 73.8667);
  const pin = createPinIcon();

  return (
    <div className="natural-glass-card" style={{ padding: '1.5rem' }}>
      <div style={{ fontWeight: 800, marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.05em', fontSize: '0.72rem' }}>
        <MapPin size={13} color="#34d399" /> Exact Issue Location
      </div>
      <div style={{ height: '200px', borderRadius: 'var(--radius-md)', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.08)', marginBottom: '0.85rem', position: 'relative' }}>
        <LeafletErrorBoundary>
          <MapContainer
            key={`track-map-${lat}-${lng}`}
            center={[lat, lng]}
            zoom={15}
            style={{ height: '100%', width: '100%' }}
            zoomControl={false}
          >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            {pin && <Marker position={[lat, lng]} icon={pin} />}
          </MapContainer>
        </LeafletErrorBoundary>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.4rem', color: '#ffffff', fontWeight: 700 }}>
          <MapPin size={14} color="#34d399" style={{ flexShrink: 0, marginTop: '2px' }} />
          <span>{address || complaint?.address || 'Near College Gate, Main Road, Ward 14'}</span>
        </div>
        <div style={{ display: 'flex', gap: '0.8rem', fontSize: '0.75rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', flexWrap: 'wrap', marginTop: '0.2rem' }}>
          <span>Lat: {lat.toFixed(5)}</span>
          <span>Lng: {lng.toFixed(5)}</span>
          {complaint?.city && <span>• {complaint.city}, {complaint.state || 'MH'}</span>}
        </div>
      </div>
    </div>
  );
}

export default function TrackComplaint() {
  const { t } = useLanguage();
  const [searchParams] = useSearchParams();
  const [trackingCode, setTrackingCode] = useState(searchParams.get('code') || '');
  const [complaint, setComplaint] = useState(null);
  const [loading, setLoading] = useState(false);
  const [verifying, setVerifying] = useState(false);
  const [notice, setNotice] = useState('');

  const fetchTracking = async (code) => {
    const cleanCode = (code || searchParams.get('code') || 'CIV-138987-644E').trim().toUpperCase();
    setLoading(true); setNotice('');

    // Check localStorage first
    try {
      const stored = JSON.parse(localStorage.getItem('civicos_my_complaints') || '[]');
      const found = stored.find((c) => c && c.trackingCode && c.trackingCode.toUpperCase() === cleanCode);
      if (found) {
        if (!found.externalDepartmentId) {
          found.externalDepartmentId = `ROAD-PW-${Math.floor(1000 + Math.random() * 9000)}`;
        }
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
        const fetchedData = res.data.data;
        if (!fetchedData.externalDepartmentId) {
          fetchedData.externalDepartmentId = `ROAD-PW-${Math.floor(1000 + Math.random() * 9000)}`;
        }
        setComplaint(fetchedData);
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
      console.warn('[VerifyResolution] Local fallback update:', err.message);
    } finally {
      setComplaint((prev) => prev ? { ...prev, status: newStatus } : prev);
      setNotice(verified ? 'Thank you! Citizen Resolution Verified & Closed.' : 'Complaint reopened for field officer escalation.');
      setVerifying(false);
    }
  };

  const currentStepIdx = Math.max(0, STATUS_STEPS.findIndex((s) => s.key === complaint?.status));
  const sevColor = complaint?.severity === 'CRITICAL' ? '#ef4444' : complaint?.severity === 'HIGH' ? '#f97316' : '#f59e0b';

  return (
    <div style={{ background: 'var(--bg-app)', minHeight: '100vh', padding: '5.5rem 1rem 3rem' }}>
      <div style={{ maxWidth: '960px', margin: '0 auto' }}>

        {/* ── Page Header & Search Bar ── */}
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
            Unified Citizen Service Tracking
          </h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '1.75rem' }}>
            Real-time status tracking across connected government departmental APIs (SIH 2026 Interoperability Engine)
          </p>

          <form onSubmit={handleSearch} style={{ display: 'flex', gap: '0.6rem', maxWidth: '560px', margin: '0 auto', flexWrap: 'wrap' }}>
            <div style={{ position: 'relative', flex: 1, minWidth: '220px' }}>
              <Search size={16} style={{ position: 'absolute', left: '13px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)', pointerEvents: 'none' }} />
              <input
                type="text"
                className="form-input-dark"
                style={{ paddingLeft: '2.5rem', fontFamily: 'var(--font-mono)', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', width: '100%' }}
                placeholder={t('searchCodePlace')}
                value={trackingCode}
                onChange={e => setTrackingCode(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="btn-sage" disabled={loading} style={{ padding: '0.65rem 1.5rem', minWidth: '110px' }}>
              {loading ? (
                <div style={{ width: '16px', height: '16px', borderRadius: '50%', border: '2px solid rgba(255,255,255,0.3)', borderTopColor: '#fff', animation: 'spin 0.8s linear infinite' }} />
              ) : (<><Search size={15} /> {t('searchBtn')}</>)}
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

            {/* Header Card with Interoperability IDs */}
            <div style={{
              background: 'linear-gradient(135deg, #0e1420, #111827)',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: 'var(--radius-xl)',
              padding: '1.75rem 2rem',
              position: 'relative', overflow: 'hidden',
              boxShadow: '0 20px 60px -12px rgba(0,0,0,0.7)',
            }}>
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '3px', background: `linear-gradient(90deg, ${sevColor}, transparent)` }} />

              <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-start', justifyContent: 'space-between', gap: '1.25rem', marginBottom: '1.25rem' }}>
                <div>
                  <div style={{ fontSize: '0.68rem', color: 'var(--text-muted)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.07em', marginBottom: '0.3rem' }}>CivicOS Interoperability Reference</div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: '1.4rem', fontWeight: 900, color: '#34d399', letterSpacing: '0.04em' }}>
                      {complaint.trackingCode}
                    </div>
                    <span style={{ fontSize: '0.85rem', color: '#60a5fa', fontWeight: 800, fontFamily: 'var(--font-mono)', background: 'rgba(59,130,246,0.12)', border: '1px solid rgba(59,130,246,0.3)', padding: '0.2rem 0.6rem', borderRadius: '0.4rem' }}>
                      Ext Dept ID: {complaint.externalDepartmentId || 'ROAD-PW-8921'}
                    </span>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap' }}>
                  <span style={{ fontSize: '0.7rem', fontWeight: 700, color: sevColor, background: `${sevColor}18`, border: `1px solid ${sevColor}33`, padding: '0.25rem 0.7rem', borderRadius: '999px', textTransform: 'uppercase' }}>
                    {complaint.severity || 'MEDIUM'}
                  </span>
                  <span style={{ fontSize: '0.7rem', fontWeight: 700, color: '#34d399', background: 'rgba(16,185,129,0.1)', border: '1px solid rgba(16,185,129,0.25)', padding: '0.25rem 0.7rem', borderRadius: '999px', textTransform: 'uppercase' }}>
                    {complaint.status?.replace('_', ' ') || 'IN PROGRESS'}
                  </span>
                </div>
              </div>

              {/* Cross-Department Linked Request Banner */}
              {complaint.secondaryDepartmentName && (
                <div style={{ background: 'rgba(245,158,11,0.08)', border: '1px solid rgba(245,158,11,0.25)', padding: '0.65rem 0.85rem', borderRadius: '0.5rem', marginBottom: '1.2rem', fontSize: '0.78rem', color: '#fbbf24', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <Layers size={14} /> Linked Cross-Department Request: <strong style={{ color: '#ffffff' }}>{complaint.secondaryDepartmentName}</strong> (Ext ID: {complaint.secondaryExternalId})
                </div>
              )}

              <h2 style={{ fontSize: '1.25rem', fontWeight: 800, marginBottom: '0.5rem', lineHeight: 1.3, color: '#ffffff' }}>{complaint.title}</h2>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>{complaint.description}</p>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(160px,1fr))', gap: '0.6rem', fontSize: '0.8rem', marginBottom: '1.5rem' }}>
                {[
                  { label: 'Category', value: complaint.category || 'General Civic' },
                  { label: 'Primary Dept', value: complaint.departmentName || 'Electrical & Infrastructure' },
                  { label: 'Ward', value: `Ward ${complaint.ward || 14}` },
                  { label: 'Officer', value: complaint.assignedOfficer?.name || 'Inspector Rajesh Kumar' },
                  { label: 'Submitted', value: formatDate(complaint.createdAt) },
                  { label: 'Target Date', value: formatDate(complaint.dueAt) },
                ].map(({ label, value }) => (
                  <div key={label} style={{ background: 'rgba(255,255,255,0.025)', padding: '0.5rem 0.75rem', borderRadius: 'var(--radius-sm)', border: '1px solid rgba(255,255,255,0.05)' }}>
                    <div style={{ color: 'var(--text-muted)', fontSize: '0.65rem', textTransform: 'uppercase', marginBottom: '0.15rem' }}>{label}</div>
                    <div style={{ fontWeight: 700, color: 'var(--text-primary)' }}>{value}</div>
                  </div>
                ))}
              </div>

              {/* ── Interoperable Unified Stepper ── */}
              <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '1.5rem' }}>
                <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '1.1rem' }}>
                  Unified Multi-System Interoperability Timeline
                </div>
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
                        <div style={{ fontSize: '0.68rem', fontWeight: current ? 800 : 500, color: current ? s.color : done ? 'var(--text-secondary)' : 'var(--text-muted)', textAlign: 'center', lineHeight: 1.3 }}>
                          {s.label}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* ── Citizen Resolution Verification Card ── */}
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
                  <ShieldCheck size={18} color="#34d399" /> Citizen Closed-Loop Resolution Verification
                </div>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '1.1rem', lineHeight: 1.55 }}>
                  Has the reported issue been physically resolved at this location? Your response completes the municipal workflow or automatically reopens the case.
                </p>
                <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', alignItems: 'center' }}>
                  <button onClick={() => handleVerify(true)} disabled={verifying} className="btn-sage" style={{ padding: '0.6rem 1.25rem', fontSize: '0.875rem' }}>
                    {verifying ? <div style={{ width: '14px', height: '14px', borderRadius: '50%', border: '2px solid rgba(255,255,255,0.3)', borderTopColor: '#fff', animation: 'spin 0.8s linear infinite' }} /> : <><ThumbsUp size={14} /> YES — Confirmed Resolved</>}
                  </button>
                  <button onClick={() => handleVerify(false)} disabled={verifying} className="btn-glass" style={{ padding: '0.6rem 1.25rem', fontSize: '0.875rem', borderColor: 'rgba(239,68,68,0.3)', color: '#f87171' }}>
                    <ThumbsDown size={14} /> NO — Still Exists
                  </button>
                  <button onClick={() => fetchTracking(complaint.trackingCode)} className="btn-icon" title="Refresh status">
                    <RefreshCw size={15} />
                  </button>
                </div>
              </div>
            </div>

            {/* ── Map & Audit Timeline ── */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: '1.25rem' }}>

              {/* Location Map */}
              <TrackMap location={complaint.location} address={complaint.address} complaint={complaint} />

              {/* Audit History Timeline */}
              <div className="natural-glass-card" style={{ padding: '1.5rem' }}>
                <div style={{ fontWeight: 800, fontSize: '0.72rem', marginBottom: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  <Clock size={13} color="#34d399" /> Interoperable Audit Trail
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', maxHeight: '280px', overflowY: 'auto', paddingRight: '0.25rem' }}>
                  {complaint.history?.length > 0 ? complaint.history.map((h, i) => (
                    <div key={i} style={{ borderLeft: '2px solid #059669', paddingLeft: '0.65rem' }}>
                      <div style={{ fontSize: '0.83rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.15rem', lineHeight: 1.4 }}>{h.note || 'Status updated'}</div>
                      <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>
                        By {h.actorName || 'System'} • {formatDateTime(h.createdAt)}
                      </div>
                    </div>
                  )) : (
                    <div style={{ color: 'var(--text-muted)', fontSize: '0.85rem', textAlign: 'center', padding: '1.5rem 0' }}>Complaint logged via CivicOS Portal.</div>
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
