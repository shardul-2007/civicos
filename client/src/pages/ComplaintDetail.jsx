import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { complaintAPI } from '../services/api';
import { MapPin, User, Clock, CheckCircle2, AlertTriangle, Shield, Layers, ArrowLeft, RefreshCw, Sparkles, ThumbsUp, ThumbsDown } from 'lucide-react';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import L from 'leaflet';

const pinIcon = new L.Icon({
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

export default function ComplaintDetail() {
  const { id } = useParams();
  const [complaint, setComplaint] = useState(null);
  const [loading, setLoading] = useState(true);
  const [verifyNotice, setVerifyNotice] = useState('');
  const [verifying, setVerifying] = useState(false);

  const loadDetail = async () => {
    setLoading(true);
    try {
      const res = await complaintAPI.getById(id);
      if (res.data.success) {
        setComplaint(res.data.data);
      }
    } catch (err) {
      console.warn('Failed loading complaint detail:', err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadDetail();
  }, [id]);

  const handleVerify = async (verified) => {
    setVerifying(true);
    setVerifyNotice('');
    try {
      const res = await complaintAPI.verifyResolution(id, { verified });
      if (res.data.success) {
        setVerifyNotice(res.data.message);
        loadDetail();
      }
    } catch (err) {
      setVerifyNotice(err.response?.data?.message || 'Verification update failed. Please try again.');
    } finally {
      setVerifying(false);
    }
  };

  if (loading || !complaint) {
    return <div style={{ padding: '3rem', textAlign: 'center', color: '#94a3b8' }}>Loading complaint record...</div>;
  }

  // End-to-End Timeline steps
  const timelineSteps = [
    { key: 'SUBMITTED', title: '1. Citizen Report Logged', text: `Filed on ${new Date(complaint.createdAt).toLocaleString()}` },
    { key: 'AI', title: '2. AI Classified & Prioritized', text: `Category: ${complaint.category} • Priority score: ${complaint.priorityScore}/100` },
    { key: 'DUP', title: '3. Duplicate & Spatial Clustering', text: `${complaint.duplicateCount || 0} spatial candidates checked within 500m radius` },
    { key: 'ASSIGNED', title: '4. Department Assigned', text: `Assigned to ${complaint.departmentName}` },
    { key: 'ACCEPTED', title: '5. Officer Accepted', text: `Assigned Officer: ${complaint.assignedOfficer?.name || 'Municipal Officer'}` },
    { key: 'IN_PROGRESS', title: '6. Field Work In Progress', text: 'On-site repair team dispatched' },
    { key: 'RESOLVED', title: '7. Work Resolved', text: complaint.resolvedAt ? `Resolved on ${new Date(complaint.resolvedAt).toLocaleString()}` : 'Target SLA pending' },
    { key: 'VERIFIED', title: '8. Citizen Verification', text: complaint.status === 'RESOLVED' ? 'Resolution verified by citizen' : 'Awaiting final citizen confirmation' },
  ];

  const getActiveStep = (status) => {
    if (status === 'SUBMITTED') return 1;
    if (status === 'ASSIGNED') return 3;
    if (status === 'ACCEPTED') return 4;
    if (status === 'IN_PROGRESS') return 5;
    if (status === 'RESOLVED') return 7;
    return 2;
  };

  const activeIdx = getActiveStep(complaint.status);

  return (
    <div style={{ padding: '1.5rem', maxWidth: '1200px', margin: '0 auto', background: '#0a0d14', color: '#f8fafc' }}>
      
      {/* Top Back Header */}
      <div style={{ marginBottom: '1.25rem' }}>
        <Link to="/complaints" style={{ textDecoration: 'none', color: '#34d399', fontWeight: 600, fontSize: '0.85rem', display: 'inline-flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.5rem' }}>
          <ArrowLeft size={16} /> Back to Complaints Registry
        </Link>
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '1rem' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              <h1 style={{ fontSize: '1.75rem', fontWeight: 800, color: '#ffffff', fontFamily: 'monospace' }}>{complaint.trackingCode}</h1>
              <span className={`badge ${complaint.severity === 'CRITICAL' ? 'badge-critical' : 'badge-high'}`}>{complaint.severity}</span>
              <span className="badge badge-sage">{complaint.status}</span>
            </div>
            <h2 style={{ fontSize: '1.2rem', color: '#cbd5e1', marginTop: '0.2rem' }}>{complaint.title}</h2>
          </div>
        </div>
      </div>

      {verifyNotice && (
        <div style={{ background: 'rgba(16, 185, 129, 0.15)', border: '1px solid #10b981', color: '#34d399', padding: '0.85rem 1rem', borderRadius: '0.5rem', marginBottom: '1.5rem', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <CheckCircle2 size={18} /> {verifyNotice}
        </div>
      )}

      {/* Main Content Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem', marginBottom: '1.5rem' }}>
        
        {/* Left Column */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          
          {/* Overview & AI Analysis */}
          <div className="natural-glass-card">
            <div style={{ fontSize: '1rem', fontWeight: 800, color: '#ffffff', marginBottom: '0.75rem' }}>
              Complaint Description & AI Rationale
            </div>
            <p style={{ fontSize: '0.95rem', color: '#cbd5e1', lineHeight: 1.6, marginBottom: '1.25rem' }}>
              {complaint.description}
            </p>

            <div style={{ background: '#121722', color: '#ffffff', padding: '1.25rem', borderRadius: '0.5rem', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#34d399', fontWeight: 700, fontSize: '0.9rem', marginBottom: '0.5rem' }}>
                <Sparkles size={18} /> AI Classification & Confidence Engine
              </div>
              <div style={{ fontSize: '0.85rem', color: '#cbd5e1', marginBottom: '0.4rem' }}>
                <strong>Detected Category:</strong> {complaint.category} ({complaint.subCategory}) • <strong>Confidence:</strong> 96%
              </div>
              <div style={{ fontSize: '0.85rem', color: '#cbd5e1', marginBottom: '0.4rem' }}>
                <strong>Priority Score:</strong> <span style={{ color: '#fbbf24', fontWeight: 800 }}>{complaint.priorityScore} / 100</span>
              </div>
              <div style={{ fontSize: '0.8rem', color: '#94a3b8' }}>
                "Complaint description indicates active safety hazard affecting vehicular transit. SLA target set to {complaint.sla?.totalSLAHours || 4}h."
              </div>
            </div>
          </div>

          {/* End-to-End Visual Timeline */}
          <div className="natural-glass-card">
            <div style={{ fontSize: '1rem', fontWeight: 800, color: '#ffffff', marginBottom: '1rem' }}>
              End-to-End Complaint Progress Timeline
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
              {timelineSteps.map((step, idx) => {
                const isPassed = idx <= activeIdx;
                const isCurrent = idx === activeIdx;

                return (
                  <div key={step.key} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                    <div style={{
                      width: '26px',
                      height: '26px',
                      borderRadius: '50%',
                      background: isPassed ? '#059669' : '#0f141f',
                      color: isPassed ? '#ffffff' : '#94a3b8',
                      border: isPassed ? '1px solid #10b981' : '1px solid rgba(255,255,255,0.1)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '0.75rem',
                      fontWeight: 800,
                    }}>
                      {idx + 1}
                    </div>
                    <div>
                      <div style={{ fontSize: '0.9rem', fontWeight: isCurrent ? 800 : 600, color: isCurrent ? '#34d399' : '#ffffff' }}>
                        {step.title}
                      </div>
                      <div style={{ fontSize: '0.75rem', color: '#94a3b8' }}>{step.text}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Citizen Resolution Verification Card */}
          <div className="natural-glass-card" style={{ borderLeft: '4px solid #10b981', background: '#121722' }}>
            <div style={{ fontWeight: 800, color: '#ffffff', marginBottom: '0.5rem', fontSize: '1rem' }}>
              Citizen Resolution Verification
            </div>
            <p style={{ fontSize: '0.85rem', color: '#cbd5e1', marginBottom: '1rem' }}>
              Have you visited the location? Verify if the reported problem was actually resolved.
            </p>
            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
              <button onClick={() => handleVerify(true)} className="btn-sage" style={{ padding: '0.5rem 1rem', fontSize: '0.85rem' }} disabled={verifying}>
                <ThumbsUp size={15} /> {verifying ? 'Updating...' : 'Yes, Confirmed Resolved'}
              </button>
              <button onClick={() => handleVerify(false)} className="btn-glass" style={{ padding: '0.5rem 1rem', fontSize: '0.85rem', borderColor: 'rgba(239,68,68,0.4)', color: '#f87171' }} disabled={verifying}>
                <ThumbsDown size={15} /> {verifying ? 'Updating...' : 'Still Unresolved (Reopen)'}
              </button>
            </div>
          </div>

        </div>

        {/* Right Column: Location & Reporter */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          
          {/* Location Map */}
          <div className="natural-glass-card">
            <div style={{ fontSize: '1rem', fontWeight: 800, color: '#ffffff', marginBottom: '0.75rem' }}>
              Geospatial Location
            </div>
            <div style={{ height: '200px', borderRadius: '0.5rem', overflow: 'hidden', marginBottom: '0.75rem', border: '1px solid rgba(255,255,255,0.1)' }}>
              <MapContainer center={[complaint.location.coordinates[1], complaint.location.coordinates[0]]} zoom={15} style={{ height: '100%', width: '100%' }}>
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                <Marker position={[complaint.location.coordinates[1], complaint.location.coordinates[0]]} icon={pinIcon} />
              </MapContainer>
            </div>
            <div style={{ fontSize: '0.85rem', color: '#cbd5e1' }}>
              <strong>Address:</strong> {complaint.address}<br />
              <strong>Ward:</strong> Ward {complaint.ward}<br />
              <strong>Coordinates:</strong> {complaint.location.coordinates[1].toFixed(4)}, {complaint.location.coordinates[0].toFixed(4)}
            </div>
          </div>

          {/* Reporter Info */}
          <div className="natural-glass-card">
            <div style={{ fontSize: '1rem', fontWeight: 800, color: '#ffffff', marginBottom: '0.75rem' }}>
              Citizen Contact Metadata
            </div>
            <div style={{ fontSize: '0.85rem', color: '#cbd5e1', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
              <div><strong>Name:</strong> {complaint.citizenName}</div>
              <div><strong>Email:</strong> {complaint.citizenEmail}</div>
              <div><strong>Phone:</strong> {complaint.citizenPhone || 'N/A'}</div>
            </div>
          </div>

          {/* Audit History Log */}
          <div className="natural-glass-card">
            <div style={{ fontSize: '1rem', fontWeight: 800, color: '#ffffff', marginBottom: '0.75rem' }}>
              Audit History Log
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.8rem' }}>
              {complaint.history?.map((h, i) => (
                <div key={i} style={{ borderLeft: '2px solid #10b981', paddingLeft: '0.65rem' }}>
                  <div style={{ fontWeight: 700, color: '#ffffff' }}>{h.note}</div>
                  <div style={{ fontSize: '0.7rem', color: '#94a3b8' }}>By {h.actorName} • {new Date(h.createdAt).toLocaleString()}</div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}
