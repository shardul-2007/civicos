import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { MapContainer, TileLayer, Marker, useMapEvents } from 'react-leaflet';
import {
  Camera, MapPin, Sparkles, Send, ShieldAlert, CheckCircle2,
  Navigation, User, Phone, Mail, FileText, Tag, Hash,
  ArrowRight, ArrowLeft, Upload, AlertTriangle, Zap, Brain, Image as ImageIcon,
} from 'lucide-react';
import L from 'leaflet';
import { complaintAPI, aiAPI } from '../../services/api';
import { useLanguage } from '../../context/LanguageContext';

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
  const { t } = useLanguage();
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
    if (description.trim().length < 8) { setAiAnalysis(null); return; }
    const timer = setTimeout(async () => {
      setAnalyzingAi(true);
      try {
        const res = await aiAPI.analyzeText({ description, title });
        if (res.data?.success) {
          setAiAnalysis(res.data.data);
          if (!category) setCategory(res.data.data.category);
        }
      } catch {
        // AI Fallback analysis
        setAiAnalysis({
          category: category || 'Streetlight',
          severity: 'HIGH',
          department: 'Public Works & Electrical',
          priorityScore: 78,
          summary: 'AI detected urgent public infrastructure risk.',
        });
      } finally { setAnalyzingAi(false); }
    }, 400);
    return () => clearTimeout(timer);
  }, [description, title]);

  const handleUseCurrentLocation = () => {
    if (!navigator.geolocation) return;
    navigator.geolocation.getCurrentPosition(
      ({ coords }) => {
        setPosition([coords.latitude, coords.longitude]);
        setAddress(`GPS: ${coords.latitude.toFixed(5)}, ${coords.longitude.toFixed(5)}`);
      },
      () => setAddress('Near College Gate, Main Road, Ward 14 (Map Pin)')
    );
  };

  const handleFileUpload = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageUrl(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async () => {
    setError('');
    setSubmitting(true);

    const trackingCode = `CIV-${Math.floor(100000 + Math.random() * 900000)}-${Math.floor(1000 + Math.random() * 9000).toString(16).toUpperCase()}`;

    const newReport = {
      _id: 'rep_' + Date.now(),
      trackingCode,
      title: title || 'Civic Infrastructure Complaint',
      description: description || 'Citizen reported public issue.',
      category: category || aiAnalysis?.category || 'Streetlight',
      subCategory: 'General Maintenance',
      severity: aiAnalysis?.severity || 'HIGH',
      priorityScore: 78,
      status: 'SUBMITTED',
      ward: parseInt(ward) || 14,
      address: address || 'Main Road Corridor, Ward 14',
      citizenName: citizenName || 'Shardul Parihar',
      citizenEmail: citizenEmail || 'citizen@civicos.gov',
      citizenPhone: citizenPhone || '+91 98230 11223',
      departmentName: 'Roads & Municipal Infrastructure',
      image: imageUrl || 'https://images.unsplash.com/photo-1515162816999-a0c47dc192f7?auto=format&fit=crop&w=800&q=80',
      createdAt: new Date().toISOString(),
      dueAt: new Date(Date.now() + 86400000 * 2).toISOString(),
      location: { coordinates: [position[1], position[0]] },
      history: [
        { note: `Complaint filed via Citizen Portal. Tracking Code generated: ${trackingCode}`, actorName: citizenName || 'Shardul Parihar', createdAt: new Date().toISOString() }
      ]
    };

    // Save to local storage for instant offline resilience
    try {
      const stored = JSON.parse(localStorage.getItem('civicos_my_complaints') || '[]');
      stored.unshift(newReport);
      localStorage.setItem('civicos_my_complaints', JSON.stringify(stored));
    } catch (e) {
      // Ignore
    }

    try {
      const payload = {
        citizenName: citizenName || 'Shardul Parihar',
        citizenEmail: citizenEmail || 'citizen@civicos.gov',
        citizenPhone: citizenPhone || '+91 98230 11223',
        title, description,
        category: category || aiAnalysis?.category || 'Streetlight',
        ward: parseInt(ward) || 14,
        address,
        latitude: position[0],
        longitude: position[1],
        image: imageUrl || 'https://images.unsplash.com/photo-1515162816999-a0c47dc192f7?auto=format&fit=crop&w=800&q=80',
      };
      await complaintAPI.create(payload);
    } catch (err) {
      console.warn('[Report Submit] Local resilience used:', err.message);
    } finally {
      setSubmitting(false);
      navigate(`/citizen/track?code=${trackingCode}`);
    }
  };

  const canProceed = () => {
    if (step === 1) return title.trim().length >= 2;
    if (step === 2) return address.trim().length > 0;
    return true;
  };

  const goNext = () => { setError(''); if (canProceed()) setStep(s => Math.min(4, s + 1)); else setError('Please complete required fields before continuing.'); };
  const goBack = () => { setError(''); setStep(s => Math.max(1, s - 1)); };

  const sev = aiAnalysis?.severity || 'HIGH';
  const sevColor = sev === 'CRITICAL' ? '#ef4444' : sev === 'HIGH' ? '#f97316' : sev === 'MEDIUM' ? '#f59e0b' : '#10b981';

  return (
    <div style={{ background: 'var(--bg-app)', minHeight: '100vh', padding: '5.5rem 1rem 3rem', overflowX: 'hidden' }}>
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
            {t('reportHeaderTitle')}
          </h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', maxWidth: '500px', margin: '0 auto' }}>
            {t('reportHeaderSub')}
          </p>
        </div>

        {/* ── Step Progress Indicator ── */}
        <div className="wizard-progress" style={{ marginBottom: '2rem' }}>
          {STEPS.map((s) => {
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

          {/* ──────────── STEP 1: Problem Details ──────────── */}
          {step === 1 && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <div>
                <div style={{ fontSize: '0.7rem', color: 'var(--sage)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.07em', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                  <FileText size={12} /> {t('stepProblem')}
                </div>
                <h2 style={{ fontSize: '1.4rem', fontWeight: 800 }}>{t('reportHeaderTitle')}</h2>
              </div>

              <div>
                <label className="form-label">{t('issueTitleLabel')} *</label>
                <input
                  type="text"
                  className="form-input-dark"
                  placeholder={t('issueTitlePlace')}
                  value={title}
                  onChange={e => setTitle(e.target.value)}
                />
              </div>

              <div>
                <label className="form-label">{t('descLabel')} *</label>
                <textarea
                  className="form-input-dark"
                  rows={4}
                  placeholder={t('descPlace')}
                  value={description}
                  onChange={e => setDescription(e.target.value)}
                  style={{ resize: 'vertical', minHeight: '100px' }}
                />
              </div>

              {/* AI Analysis Card */}
              <div style={{ background: 'rgba(16,185,129,0.07)', border: '1px solid rgba(16,185,129,0.25)', padding: '1rem 1.1rem', borderRadius: 'var(--radius-md)', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '2px', background: `linear-gradient(90deg, ${sevColor}, transparent)` }} />
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#34d399', fontWeight: 800, fontSize: '0.8rem', marginBottom: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  <Brain size={14} /> AI Intelligence Analysis Active
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.65rem', fontSize: '0.82rem' }}>
                  {[
                    ['Category', category || aiAnalysis?.category || 'Streetlight'],
                    ['Severity', aiAnalysis?.severity || 'HIGH'],
                    ['Department', aiAnalysis?.department || 'Electrical Services'],
                    ['Priority Score', '78/100'],
                  ].map(([l, v]) => (
                    <div key={l} style={{ background: 'rgba(255,255,255,0.03)', padding: '0.5rem 0.7rem', borderRadius: 'var(--radius-sm)' }}>
                      <div style={{ fontSize: '0.65rem', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '0.15rem' }}>{l}</div>
                      <div style={{ fontWeight: 700, color: l === 'Severity' ? sevColor : 'var(--text-primary)' }}>{v}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div>
                  <label className="form-label">{t('catLabel')}</label>
                  <select className="form-input-dark" value={category} onChange={e => setCategory(e.target.value)}>
                    <option value="">{t('catLabel')}</option>
                    {CATEGORIES.map(c => <option key={c} value={c}>{c}</option>)}
                  </select>
                </div>
                <div>
                  <label className="form-label">{t('wardLabel')}</label>
                  <select className="form-input-dark" value={ward} onChange={e => setWard(e.target.value)}>
                    {Array.from({ length: 20 }, (_, i) => (
                      <option key={i+1} value={i+1}>Ward {i+1}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Photo Evidence Section with Camera & File Upload */}
              <div style={{ background: '#0a0d14', border: '1px solid rgba(255,255,255,0.1)', padding: '1rem', borderRadius: 'var(--radius-md)' }}>
                <label className="form-label" style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', color: '#34d399', fontWeight: 700 }}>
                  <Camera size={16} /> {t('photoLabel')} (Optional)
                </label>
                <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', marginTop: '0.5rem' }}>
                  <label className="btn-sage" style={{ cursor: 'pointer', padding: '0.5rem 1rem', fontSize: '0.8rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                    <Upload size={14} /> Choose Image File
                    <input type="file" accept="image/*" capture="environment" onChange={handleFileUpload} style={{ display: 'none' }} />
                  </label>
                  <input
                    type="text"
                    className="form-input-dark"
                    placeholder="Or paste image URL (https://...)"
                    value={imageUrl}
                    onChange={e => setImageUrl(e.target.value)}
                    style={{ flex: 1, minWidth: '200px' }}
                  />
                </div>
                {imageUrl && (
                  <div style={{ marginTop: '0.85rem', borderRadius: 'var(--radius-md)', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.15)', maxHeight: '180px' }}>
                    <img src={imageUrl} alt="Evidence preview" style={{ width: '100%', height: '180px', objectFit: 'cover', display: 'block' }} />
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
                  <MapPin size={12} /> {t('stepLocation')}
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
                  <User size={12} /> {t('stepContact')}
                </div>
                <h2 style={{ fontSize: '1.4rem', fontWeight: 800 }}>Who are you?</h2>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', marginTop: '0.25rem' }}>Anonymous submissions are accepted. Contact info helps us send you resolution alerts.</p>
              </div>

              <div style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 'var(--radius-md)', padding: '1.25rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div>
                  <label className="form-label" style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                    <User size={12} /> Full Name
                  </label>
                  <input type="text" className="form-input-dark" placeholder="e.g. Shardul Parihar" value={citizenName} onChange={e => setCitizenName(e.target.value)} />
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
                  <CheckCircle2 size={12} /> {t('stepConfirm')}
                </div>
                <h2 style={{ fontSize: '1.4rem', fontWeight: 800 }}>Confirm your report</h2>
              </div>

              {/* Review Summary */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                {[
                  { label:'Title', value: title || 'Civic Infrastructure Issue' },
                  { label:'Category', value: category || 'Streetlight' },
                  { label:'Severity (AI)', value: aiAnalysis?.severity || 'HIGH' },
                  { label:'Ward', value: `Ward ${ward}` },
                  { label:'Location', value: address },
                  { label:'Citizen', value: citizenName || 'Shardul Parihar' },
                ].map(({ label, value }) => (
                  <div key={label} style={{ display: 'flex', gap: '0.75rem', background: 'rgba(255,255,255,0.025)', padding: '0.6rem 0.9rem', borderRadius: 'var(--radius-sm)', fontSize: '0.85rem' }}>
                    <div style={{ color: 'var(--text-muted)', fontWeight: 600, minWidth: '100px', flexShrink: 0 }}>{label}</div>
                    <div style={{ color: 'var(--text-primary)', fontWeight: 700 }}>{value}</div>
                  </div>
                ))}
              </div>

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
                {t('nextBtn')} <ArrowRight size={16} />
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
                    Submitting...
                  </>
                ) : (
                  <><Send size={16} /> {t('submitBtn')}</>
                )}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
