import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { MapContainer, TileLayer, Marker, useMapEvents } from 'react-leaflet';
import {
  Camera, MapPin, Sparkles, Send, ShieldAlert, CheckCircle2,
  Navigation, User, Phone, Mail, FileText, Tag, Hash,
  ArrowRight, ArrowLeft, Upload, AlertTriangle, Zap, Brain,
} from 'lucide-react';
import L from 'leaflet';
import { complaintAPI, aiAPI } from '../../services/api';

const pinIcon = new L.Icon({
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
  iconSize: [25, 41], iconAnchor: [12, 41],
});

function LocationPicker({ position, setPosition, setAddress }) {
  useMapEvents({
    click(e) {
      const { lat, lng } = e.latlng;
      setPosition([lat, lng]);
      setAddress(`Lat: ${lat.toFixed(5)}, Lng: ${lng.toFixed(5)} (Map Pin)`);
    },
  });
  return position ? <Marker position={position} icon={pinIcon} /> : null;
}

const CATEGORIES = ['Road Damage','Water Leakage','Drainage','Garbage','Streetlight','Public Safety','Pothole','Sewage','Tree/Parks','Other'];

const STEPS = [
  { id:1, label:'Problem',  icon: FileText },
  { id:2, label:'Location', icon: MapPin },
  { id:3, label:'Contact',  icon: User },
  { id:4, label:'Confirm',  icon: CheckCircle2 },
];

export default function ReportComplaint() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);

  // Form fields
  const [title, setTitle]             = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory]       = useState('');
  const [ward, setWard]               = useState('14');
  const [imageUrl, setImageUrl]       = useState('');
  const [address, setAddress]         = useState('Near College Gate, Main Road, Ward 14');
  const [position, setPosition]       = useState([18.5304, 73.8667]);
  const [citizenName, setCitizenName] = useState('');
  const [citizenEmail, setCitizenEmail] = useState('');
  const [citizenPhone, setCitizenPhone] = useState('');

  // AI & submission state
  const [aiAnalysis, setAiAnalysis]   = useState(null);
  const [analyzingAi, setAnalyzingAi] = useState(false);
  const [submitting, setSubmitting]   = useState(false);
  const [error, setError]             = useState('');

  // Debounced AI pre-analysis
  useEffect(() => {
    if (description.trim().length < 12) { setAiAnalysis(null); return; }
    const timer = setTimeout(async () => {
      setAnalyzingAi(true);
      try {
        const res = await aiAPI.analyzeText({ description, title });
        if (res.data.success) {
          setAiAnalysis(res.data.data);
          if (!category) setCategory(res.data.data.category);
        }
      } catch { /* silent */ } finally { setAnalyzingAi(false); }
    }, 600);
    return () => clearTimeout(timer);
  }, [description, title]);

  const handleUseCurrentLocation = () => {
    if (!navigator.geolocation) return;
    navigator.geolocation.getCurrentPosition(
      ({ coords }) => {
        setPosition([coords.latitude, coords.longitude]);
        setAddress(`GPS: ${coords.latitude.toFixed(5)}, ${coords.longitude.toFixed(5)}`);
      },
      () => setError('Could not retrieve GPS location. Please pin on map.')
    );
  };

  const handleSubmit = async () => {
    setError('');
    setSubmitting(true);
    try {
      const payload = {
        citizenName: citizenName || 'Anonymous Citizen',
        citizenEmail: citizenEmail || 'citizen@civicos.gov',
        citizenPhone,
        title, description,
        category: category || aiAnalysis?.category || 'Other',
        ward: parseInt(ward) || 14,
        address,
        latitude: position[0],
        longitude: position[1],
        image: imageUrl || 'https://images.unsplash.com/photo-1515162816999-a0c47dc192f7?auto=format&fit=crop&w=800&q=80',
      };
      const res = await complaintAPI.create(payload);
      if (res.data.success) {
        navigate(`/citizen/track?code=${res.data.data.trackingCode}`);
      }
    } catch (err) {
      setError(err.response?.data?.message || 'Submission failed. Please try again.');
    } finally { setSubmitting(false); }
  };

  const canProceed = () => {
    if (step === 1) return title.trim().length >= 5 && description.trim().length >= 10;
    if (step === 2) return address.trim().length > 0;
    if (step === 3) return true;
    return true;
  };

  const goNext = () => { setError(''); if (canProceed()) setStep(s => Math.min(4, s + 1)); else setError('Please complete required fields before continuing.'); };
  const goBack = () => { setError(''); setStep(s => Math.max(1, s - 1)); };

  const sev = aiAnalysis?.severity;
  const sevColor = sev === 'CRITICAL' ? '#ef4444' : sev === 'HIGH' ? '#f97316' : sev === 'MEDIUM' ? '#f59e0b' : '#10b981';

  return (
    <div style={{ background: 'var(--bg-app)', minHeight: '100vh', padding: '2rem 1rem', overflowX: 'hidden' }}>
      <div style={{ maxWidth: '720px', margin: '0 auto' }}>

        {/* ── Page Header ── */}
        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <div style={{
            width: '56px', height: '56px',
            background: 'var(--grad-sage)',
            borderRadius: 'var(--radius-lg)',
            display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
            color: '#fff', marginBottom: '1rem',
            boxShadow: '0 8px 24px rgba(16,185,129,0.4)',
          }}>
            <FileText size={26} />
          </div>
          <h1 style={{ fontSize: 'clamp(1.6rem,3vw,2.25rem)', fontWeight: 900, marginBottom: '0.5rem' }}>
            Report a Civic Problem
          </h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', maxWidth: '500px', margin: '0 auto' }}>
            Under 60 seconds. AI classifies severity, routes to the right department, and generates a live tracking code.
          </p>
        </div>

        {/* ── Step Progress Indicator ── */}
        <div className="wizard-progress" style={{ marginBottom: '2rem' }}>
          {STEPS.map((s, i) => {
            const state = step > s.id ? 'completed' : step === s.id ? 'active' : '';
            const Icon = s.icon;
            return (
              <div key={s.id} className={`wizard-step-indicator ${state}`}>
                <div className={`wizard-step-dot ${state}`}>
                  {step > s.id ? <CheckCircle2 size={16} /> : <Icon size={15} />}
                </div>
                <div className="wizard-step-label">{s.label}</div>
              </div>
            );
          })}
        </div>

        {/* ── Wizard Card ── */}
        <div className="wizard-step-card">

          {error && (
            <div style={{ background: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.3)', color: '#f87171', padding: '0.75rem 1rem', borderRadius: 'var(--radius-md)', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem', fontWeight: 600 }}>
              <AlertTriangle size={15} /> {error}
            </div>
          )}

          {/* ──────────── STEP 1: Problem Details ──────────── */}
          {step === 1 && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <div>
                <div style={{ fontSize: '0.7rem', color: 'var(--sage)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.07em', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                  <FileText size={12} /> Step 1 of 4 — Describe the Problem
                </div>
                <h2 style={{ fontSize: '1.4rem', fontWeight: 800 }}>What's the issue?</h2>
              </div>

              <div>
                <label className="form-label">Complaint Title *</label>
                <input
                  type="text"
                  className="form-input-dark"
                  placeholder="e.g. Huge pothole near college gate causing accidents"
                  value={title}
                  onChange={e => setTitle(e.target.value)}
                />
              </div>

              <div>
                <label className="form-label">Detailed Description *</label>
                <textarea
                  className="form-input-dark"
                  rows={4}
                  placeholder="Describe what you saw — exact location, hazards, when it started, how many people are affected..."
                  value={description}
                  onChange={e => setDescription(e.target.value)}
                  style={{ resize: 'vertical', minHeight: '100px' }}
                />
              </div>

              {/* AI Analysis Live Card */}
              {analyzingAi && (
                <div style={{ background: 'rgba(59,130,246,0.08)', border: '1px solid rgba(59,130,246,0.2)', padding: '0.85rem 1rem', borderRadius: 'var(--radius-md)', display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.85rem', color: '#60a5fa', fontWeight: 600 }}>
                  <div style={{ width: '16px', height: '16px', borderRadius: '50%', border: '2px solid rgba(96,165,250,0.3)', borderTopColor: '#60a5fa', animation: 'spin 0.8s linear infinite', flexShrink: 0 }} />
                  AI is reading your description and classifying severity...
                </div>
              )}

              {aiAnalysis && !analyzingAi && (
                <div style={{ background: 'rgba(16,185,129,0.07)', border: '1px solid rgba(16,185,129,0.25)', padding: '1rem 1.1rem', borderRadius: 'var(--radius-md)', position: 'relative', overflow: 'hidden' }}>
                  <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '2px', background: `linear-gradient(90deg, ${sevColor}, transparent)` }} />
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#34d399', fontWeight: 800, fontSize: '0.8rem', marginBottom: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    <Brain size={14} /> AI Intelligence Analysis Complete
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.65rem', fontSize: '0.82rem' }}>
                    {[
                      ['Category', aiAnalysis.category],
                      ['Severity', aiAnalysis.severity],
                      ['Department', aiAnalysis.department],
                      ['Priority Score', `${aiAnalysis.priorityScore}/100`],
                    ].map(([l, v]) => (
                      <div key={l} style={{ background: 'rgba(255,255,255,0.03)', padding: '0.5rem 0.7rem', borderRadius: 'var(--radius-sm)' }}>
                        <div style={{ fontSize: '0.65rem', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '0.15rem' }}>{l}</div>
                        <div style={{ fontWeight: 700, color: l === 'Severity' ? sevColor : 'var(--text-primary)' }}>{v}</div>
                      </div>
                    ))}
                  </div>
                  {aiAnalysis.safetyRisk && (
                    <div style={{ marginTop: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#f87171', fontSize: '0.8rem', fontWeight: 700, background: 'rgba(239,68,68,0.08)', padding: '0.4rem 0.65rem', borderRadius: 'var(--radius-sm)', border: '1px solid rgba(239,68,68,0.2)' }}>
                      <ShieldAlert size={13} /> Safety risk detected — {aiAnalysis.summary}
                    </div>
                  )}
                </div>
              )}

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div>
                  <label className="form-label">Category</label>
                  <select className="form-input-dark" value={category} onChange={e => setCategory(e.target.value)}>
                    <option value="">Select or AI-detected</option>
                    {CATEGORIES.map(c => <option key={c} value={c}>{c}</option>)}
                  </select>
                </div>
                <div>
                  <label className="form-label">Ward Number</label>
                  <select className="form-input-dark" value={ward} onChange={e => setWard(e.target.value)}>
                    {Array.from({ length: 20 }, (_, i) => (
                      <option key={i+1} value={i+1}>Ward {i+1}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="form-label" style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                  <Camera size={13} /> Evidence Photo URL (optional)
                </label>
                <input
                  type="text"
                  className="form-input-dark"
                  placeholder="https://images.unsplash.com/..."
                  value={imageUrl}
                  onChange={e => setImageUrl(e.target.value)}
                />
                {imageUrl && (
                  <div style={{ marginTop: '0.75rem', borderRadius: 'var(--radius-md)', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)', maxHeight: '160px' }}>
                    <img src={imageUrl} alt="Evidence preview" style={{ width: '100%', height: '160px', objectFit: 'cover', display: 'block' }} onError={e => { e.target.style.display = 'none'; }} />
                  </div>
                )}
              </div>
            </div>
          )}

          {/* ──────────── STEP 2: Location ──────────── */}
          {step === 2 && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <div>
                <div style={{ fontSize: '0.7rem', color: 'var(--sage)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.07em', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                  <MapPin size={12} /> Step 2 of 4 — Pin the Location
                </div>
                <h2 style={{ fontSize: '1.4rem', fontWeight: 800 }}>Where is the problem?</h2>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', marginTop: '0.25rem' }}>Click on the map to pin the exact location, or use your GPS.</p>
              </div>

              <button type="button" onClick={handleUseCurrentLocation} className="btn-glass" style={{ alignSelf: 'flex-start', fontSize: '0.82rem', padding: '0.5rem 1rem' }}>
                <Navigation size={14} color="#34d399" /> Use Current GPS Location
              </button>

              {/* Map */}
              <div style={{ height: '300px', borderRadius: 'var(--radius-md)', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)', boxShadow: '0 8px 24px rgba(0,0,0,0.5)' }}>
                <MapContainer center={position} zoom={14} style={{ height: '100%', width: '100%' }}>
                  <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                  <LocationPicker position={position} setPosition={setPosition} setAddress={setAddress} />
                </MapContainer>
              </div>

              <div style={{ background: 'rgba(16,185,129,0.07)', border: '1px solid rgba(16,185,129,0.15)', padding: '0.65rem 0.9rem', borderRadius: 'var(--radius-sm)', fontSize: '0.8rem', color: '#34d399', fontFamily: 'var(--font-mono)', display: 'flex', gap: '0.5rem' }}>
                <MapPin size={13} style={{ flexShrink: 0, marginTop: '1px' }} />
                Lat: {position[0].toFixed(5)}, Lng: {position[1].toFixed(5)}
              </div>

              <div>
                <label className="form-label">Street Address / Landmark *</label>
                <input
                  type="text"
                  className="form-input-dark"
                  placeholder="e.g. Near Bus Stand, Main Road, Ward 14"
                  value={address}
                  onChange={e => setAddress(e.target.value)}
                  required
                />
              </div>
            </div>
          )}

          {/* ──────────── STEP 3: Contact ──────────── */}
          {step === 3 && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <div>
                <div style={{ fontSize: '0.7rem', color: 'var(--sage)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.07em', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                  <User size={12} /> Step 3 of 4 — Contact Info (Optional)
                </div>
                <h2 style={{ fontSize: '1.4rem', fontWeight: 800 }}>Who are you?</h2>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', marginTop: '0.25rem' }}>Anonymous submissions are accepted. Contact info helps us send you resolution alerts.</p>
              </div>

              <div style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 'var(--radius-md)', padding: '1.25rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div>
                  <label className="form-label" style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                    <User size={12} /> Full Name
                  </label>
                  <input type="text" className="form-input-dark" placeholder="e.g. Rahul Sharma" value={citizenName} onChange={e => setCitizenName(e.target.value)} />
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.85rem' }}>
                  <div>
                    <label className="form-label" style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                      <Phone size={12} /> Phone
                    </label>
                    <input type="tel" className="form-input-dark" placeholder="+91 98230 11223" value={citizenPhone} onChange={e => setCitizenPhone(e.target.value)} />
                  </div>
                  <div>
                    <label className="form-label" style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                      <Mail size={12} /> Email
                    </label>
                    <input type="email" className="form-input-dark" placeholder="you@example.com" value={citizenEmail} onChange={e => setCitizenEmail(e.target.value)} />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ──────────── STEP 4: Review & Submit ──────────── */}
          {step === 4 && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <div>
                <div style={{ fontSize: '0.7rem', color: 'var(--sage)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.07em', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                  <CheckCircle2 size={12} /> Step 4 of 4 — Review & Submit
                </div>
                <h2 style={{ fontSize: '1.4rem', fontWeight: 800 }}>Confirm your report</h2>
              </div>

              {/* Review Summary */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                {[
                  { label:'Title', value: title },
                  { label:'Category', value: category || aiAnalysis?.category || 'Not specified' },
                  { label:'Severity (AI)', value: aiAnalysis?.severity || 'Pending analysis' },
                  { label:'Ward', value: `Ward ${ward}` },
                  { label:'Location', value: address },
                  { label:'Citizen', value: citizenName || 'Anonymous' },
                ].map(({ label, value }) => (
                  <div key={label} style={{ display: 'flex', gap: '0.75rem', background: 'rgba(255,255,255,0.025)', padding: '0.6rem 0.9rem', borderRadius: 'var(--radius-sm)', fontSize: '0.85rem' }}>
                    <div style={{ color: 'var(--text-muted)', fontWeight: 600, minWidth: '100px', flexShrink: 0 }}>{label}</div>
                    <div style={{ color: 'var(--text-primary)', fontWeight: 700 }}>{value}</div>
                  </div>
                ))}
              </div>

              {/* AI analysis summary block */}
              {aiAnalysis && (
                <div style={{ background: 'rgba(16,185,129,0.07)', border: '1px solid rgba(16,185,129,0.2)', padding: '0.85rem 1rem', borderRadius: 'var(--radius-md)', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.82rem', color: '#34d399' }}>
                  <Zap size={14} /> AI has pre-classified this as <strong>{aiAnalysis.severity}</strong> priority. Department: <strong>{aiAnalysis.department}</strong>.
                </div>
              )}

              <div style={{ background: 'rgba(59,130,246,0.06)', border: '1px solid rgba(59,130,246,0.15)', padding: '0.85rem 1rem', borderRadius: 'var(--radius-md)', fontSize: '0.8rem', color: '#60a5fa', lineHeight: 1.55 }}>
                After submission, you'll receive a <strong>Municipal Tracking Code</strong> (e.g. CIV-XXXXXX-XXXX) to monitor real-time resolution progress.
              </div>
            </div>
          )}

          {/* ── Navigation Buttons ── */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '2rem', gap: '1rem', flexWrap: 'wrap' }}>
            {step > 1 ? (
              <button type="button" onClick={goBack} className="btn-glass" style={{ fontSize: '0.875rem' }}>
                <ArrowLeft size={15} /> Back
              </button>
            ) : <div />}

            {step < 4 ? (
              <button type="button" onClick={goNext} className="btn-sage" style={{ fontSize: '0.9rem', padding: '0.7rem 1.75rem' }}>
                Continue <ArrowRight size={16} />
              </button>
            ) : (
              <button
                type="button"
                onClick={handleSubmit}
                className="btn-sage"
                disabled={submitting}
                style={{ fontSize: '0.95rem', padding: '0.8rem 2rem', minWidth: '200px' }}
              >
                {submitting ? (
                  <>
                    <div style={{ width: '16px', height: '16px', borderRadius: '50%', border: '2px solid rgba(255,255,255,0.3)', borderTopColor: '#fff', animation: 'spin 0.8s linear infinite' }} />
                    Submitting to Municipal OS...
                  </>
                ) : (
                  <><Send size={16} /> Submit Complaint</>
                )}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
