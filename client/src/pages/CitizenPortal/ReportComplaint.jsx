import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Camera, MapPin, Sparkles, Send, ShieldAlert, CheckCircle2,
  Navigation, User, Phone, Mail, FileText, Tag, Hash, X,
  ArrowRight, ArrowLeft, Upload, AlertTriangle, Zap, Brain, Image as ImageIcon,
} from 'lucide-react';
import { complaintAPI, aiAPI } from '../../services/api';
import { useLanguage } from '../../context/LanguageContext';
import LeafletMapPicker from '../../components/LeafletMapPicker';

const CATEGORY_MAP = [
  { value: 'Road Damage', key: 'catRoadDamage' },
  { value: 'Water Leakage', key: 'catWaterLeakage' },
  { value: 'Drainage', key: 'catDrainage' },
  { value: 'Garbage', key: 'catGarbage' },
  { value: 'Streetlight', key: 'catStreetlight' },
  { value: 'Public Safety', key: 'catPublicSafety' },
  { value: 'Pothole', key: 'catPothole' },
  { value: 'Sewage', key: 'catSewage' },
  { value: 'Tree/Parks', key: 'catTreeParks' },
  { value: 'Other', key: 'catOther' },
];

// Client-side NLP Analyzer for Instant Resilient Fallback
const analyzeTextClient = (titleText = '', descText = '') => {
  const content = `${titleText} ${descText}`.toLowerCase().trim();

  let category = 'Other';
  let severity = 'MEDIUM';
  let priorityScore = 60;
  let department = 'General Municipal Services';
  let summary = 'Issue analyzed and queued for department routing.';

  if (content.match(/garbage|waste|trash|rubbish|dumping|litter|smell|bin|refuse|kachra|कचरा|गंदगी|कचरापेटी|toilet|public toilet/i) || content === 'waste' || content === 'garbage') {
    category = 'Garbage';
    department = 'Sanitation & Solid Waste Dept';
    priorityScore = 75;
    summary = 'Solid waste & sanitation issue detected near residential area.';
  } else if (content.match(/pothole|hole|road|asphalt|tar|tarmac|street crack|pavement|cave-in|broken road|damaged road|khadda|खड्डा|रस्ता|खराब|खड्डे/i) || content.includes('road')) {
    category = 'Road Damage';
    department = 'Roads & Infrastructure Dept';
    priorityScore = 80;
    summary = 'Road infrastructure defect detected.';
  } else if (content.match(/water leak|pipe leak|pipe burst|main line|pipeline|water gushing|drinking water|water leaking|पाणी|गळती|पाण्याची पाइपलाइन|पानी/i) || content.includes('water')) {
    category = 'Water Leakage';
    department = 'Water Supply & Sanitation Dept';
    priorityScore = 85;
    severity = 'HIGH';
    summary = 'Water pipeline leakage or supply issue detected.';
  } else if (content.match(/drain|drainage|sewer|sewage|overflow|clogged|stagnant|black water|gutters|nala|naali|गटार|नाली|नाला|तुंबला/i)) {
    category = 'Drainage';
    department = 'Drainage & Sewerage Services';
    priorityScore = 82;
    severity = 'HIGH';
    summary = 'Drainage overflow or sewer blockage hazard detected.';
  } else if (content.match(/streetlight|road light|lamp|dark street|street light|दिवा|लाइट|लाइट बंद|स्ट्रीट लाईट|रोड लाइट/i)) {
    category = 'Streetlight';
    department = 'Electrical Services Dept';
    priorityScore = 65;
    summary = 'Street lighting outage or luminaire failure detected.';
  } else if (content.match(/electric pole|wire|power line|electricity|short circuit|वीज|वीज खांब|तार तुटली|बिजली/i)) {
    category = 'Public Safety';
    department = 'Electricity & Power Distribution';
    priorityScore = 90;
    severity = 'CRITICAL';
    summary = 'Electrical power line or live wire hazard detected.';
  } else if (content.match(/safety|fire|tree fallen|live wire|hazard|collapse|danger|dangerous|school|obstruction/i)) {
    category = 'Public Safety';
    department = 'Public Safety & Emergency Response';
    priorityScore = 92;
    severity = 'CRITICAL';
    summary = 'Public safety risk or emergency obstruction detected.';
  }

  return { category, severity, priorityScore, department, summary };
};

export default function ReportComplaint() {
  const { t } = useLanguage();
  const navigate = useNavigate();

  const [step, setStep] = useState(1);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

  // Form State
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [ward, setWard] = useState('auto');
  const [imageUrl, setImageUrl] = useState('');
  const [fileName, setFileName] = useState('');

  // Exact Location State
  const [locationDetails, setLocationDetails] = useState({
    latitude: 18.5204,
    longitude: 73.8567,
    address: 'Near College Gate, Main Road, Ward 14',
    city: 'Pune',
    district: 'Pune',
    state: 'Maharashtra',
    pincode: '411001',
    country: 'India',
    accuracy: null,
  });
  const [locationConfirmed, setLocationConfirmed] = useState(false);

  // Contact Info State
  const [citizenName, setCitizenName] = useState('Shardul Parihar');
  const [citizenPhone, setCitizenPhone] = useState('+91 98230 11223');
  const [citizenEmail, setCitizenEmail] = useState('citizen@civicos.gov');

  // AI State
  const [aiAnalysis, setAiAnalysis] = useState(null);
  const [analyzingAi, setAnalyzingAi] = useState(false);

  const STEPS = [
    { id: 1, label: t('stepProblem'), icon: FileText },
    { id: 2, label: t('stepLocation'), icon: MapPin },
    { id: 3, label: t('stepContact'), icon: User },
    { id: 4, label: t('stepConfirm'), icon: CheckCircle2 },
  ];

  // Natural Language AI Classifier Trigger
  useEffect(() => {
    const combined = `${title} ${description}`.trim();
    if (combined.length >= 3) {
      const result = analyzeTextClient(title, description);
      setAiAnalysis(result);
      if (!category) {
        setCategory(result.category);
      }
    } else {
      setAiAnalysis(null);
    }
  }, [title, description, category]);

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFileName(file.name);
      const reader = new FileReader();
      reader.onloadend = () => setImageUrl(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const handleRemovePhoto = () => {
    setImageUrl('');
    setFileName('');
  };

  const handleLocationSelect = (locObj) => {
    setLocationDetails(locObj);
  };

  const handleLocationConfirm = (locObj) => {
    setLocationDetails(locObj);
    setLocationConfirmed(true);
  };

  const goNext = () => {
    setError('');
    if (step === 1 && (!title.trim() || !description.trim())) {
      setError('Please provide an issue title and detailed description.');
      return;
    }
    if (step === 2 && !locationDetails.address) {
      setError('Please select and confirm issue location.');
      return;
    }
    setStep(prev => Math.min(prev + 1, 4));
  };

  const goBack = () => {
    setError('');
    setStep(prev => Math.max(prev - 1, 1));
  };

  const handleSubmit = async () => {
    setSubmitting(true);
    setError('');

    try {
      const payload = {
        citizenName: citizenName || 'Shardul Parihar',
        citizenEmail: citizenEmail || 'citizen@civicos.gov',
        citizenPhone: citizenPhone || '+91 98230 11223',
        title: title || 'Civic Infrastructure Complaint',
        description: description || 'Citizen reported public issue.',
        category: category || aiAnalysis?.category || 'Garbage',
        ward: (ward === 'auto' || ward === 'na') ? 14 : parseInt(ward) || 14,
        address: locationDetails.address,
        latitude: locationDetails.latitude,
        longitude: locationDetails.longitude,
        city: locationDetails.city,
        district: locationDetails.district,
        state: locationDetails.state,
        pincode: locationDetails.pincode,
        country: locationDetails.country,
        accuracy: locationDetails.accuracy,
        image: imageUrl || '',
      };

      const res = await complaintAPI.create(payload);

      if (res.data?.success && res.data.data) {
        const createdDoc = res.data.data;
        const serverCode = createdDoc.trackingCode;

        // Cache in local storage for instant offline resilience
        try {
          const stored = JSON.parse(localStorage.getItem('civicos_my_complaints') || '[]');
          stored.unshift(createdDoc);
          localStorage.setItem('civicos_my_complaints', JSON.stringify(stored));
        } catch (e) {}

        setSubmitting(false);
        navigate(`/citizen/track?code=${serverCode}`);
        return;
      }
      throw new Error(res.data?.message || 'Report could not be submitted. Please try again.');
    } catch (err) {
      console.error('[Report Submit Error]:', err);
      setError(err.response?.data?.message || err.message || 'Report could not be submitted. Please try again.');
      setSubmitting(false);
    }
  };

  const canProceed = () => {
    if (step === 1) return title.trim().length >= 2 && description.trim().length >= 2;
    if (step === 2) return !!locationDetails.address;
    return true;
  };

  return (
    <div style={{ background: 'var(--bg-app)', minHeight: '100vh', padding: '5.5rem 1rem 3rem' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>

        {/* ── Page Header ── */}
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
            background: 'var(--grad-sage)', padding: '0.4rem 1rem',
            borderRadius: '999px', fontSize: '0.78rem', fontWeight: 800,
            color: '#fff', marginBottom: '0.85rem',
            boxShadow: '0 4px 16px rgba(16,185,129,0.35)',
          }}>
            <Sparkles size={14} /> AI-POWERED MUNICIPAL INTAKE
          </div>
          <h1 style={{ fontSize: 'clamp(1.6rem,3vw,2.25rem)', fontWeight: 900, marginBottom: '0.4rem' }}>
            {t('reportHeaderTitle')}
          </h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', maxWidth: '560px', margin: '0 auto' }}>
            {t('reportHeaderSub')}
          </p>
        </div>

        {/* ── Multi-Step Progress Header ── */}
        <div style={{
          background: 'linear-gradient(135deg, #0e1420, #111827)',
          border: '1px solid rgba(255,255,255,0.08)',
          borderRadius: 'var(--radius-xl)',
          padding: '1.25rem 1.5rem',
          marginBottom: '1.75rem',
          boxShadow: '0 16px 40px -10px rgba(0,0,0,0.6)',
        }}>
          {/* Desktop Wizard View (>= 640px) */}
          <div className="desktop-only" style={{ display: 'flex', alignItems: 'center', position: 'relative' }}>
            <div style={{ position: 'absolute', top: '18px', left: '30px', right: '30px', height: '2px', background: 'rgba(255,255,255,0.07)', zIndex: 0 }} />
            <div style={{ position: 'absolute', top: '18px', left: '30px', height: '2px', background: 'var(--sage)', zIndex: 0, transition: 'width 0.4s ease', width: `${((step - 1) / 3) * (100 - 10)}%` }} />

            {STEPS.map(s => {
              const active = s.id === step;
              const done = s.id < step;
              const Icon = s.icon;
              return (
                <div key={s.id} onClick={() => s.id < step && setStep(s.id)} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', zIndex: 1, position: 'relative', cursor: s.id < step ? 'pointer' : 'default', gap: '0.4rem' }}>
                  <div style={{
                    width: '36px', height: '36px',
                    borderRadius: '50%',
                    background: active ? 'var(--grad-sage)' : done ? 'rgba(16,185,129,0.2)' : 'var(--bg-input)',
                    border: active ? '2px solid #34d399' : done ? '1px solid #10b981' : '1px solid rgba(255,255,255,0.1)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: active || done ? '#fff' : 'var(--text-muted)',
                    fontWeight: 800, fontSize: '0.85rem',
                    transition: 'all 0.3s',
                    boxShadow: active ? '0 0 16px rgba(16,185,129,0.5)' : 'none',
                  }}>
                    {done ? <CheckCircle2 size={16} color="#34d399" /> : <Icon size={16} />}
                  </div>
                  <span style={{ fontSize: '0.72rem', fontWeight: active ? 800 : 500, color: active ? '#34d399' : done ? 'var(--text-secondary)' : 'var(--text-muted)', whiteSpace: 'nowrap' }}>
                    {s.label}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Mobile Stepper View (< 640px) */}
          <div className="mobile-only" style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem', width: '100%' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '0.5rem' }}>
              {[1, 2, 3, 4].map((stepNum) => {
                const isActive = stepNum === step;
                const isDone = stepNum < step;
                return (
                  <React.Fragment key={stepNum}>
                    <div style={{
                      width: '14px', height: '14px', borderRadius: '50%',
                      background: isActive ? '#34d399' : isDone ? '#10b981' : 'rgba(255,255,255,0.15)',
                      border: isActive ? '3px solid #059669' : 'none',
                      boxShadow: isActive ? '0 0 12px rgba(52,211,153,0.8)' : 'none',
                      flexShrink: 0
                    }} />
                    {stepNum < 4 && (
                      <div style={{ flex: 1, height: '3px', background: isDone ? '#10b981' : 'rgba(255,255,255,0.1)', borderRadius: '99px' }} />
                    )}
                  </React.Fragment>
                );
              })}
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '0.2rem' }}>
              <div style={{ fontSize: '0.75rem', fontWeight: 800, color: '#34d399', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                STEP {step} OF 4
              </div>
              <div style={{ fontSize: '0.85rem', fontWeight: 800, color: '#ffffff' }}>
                {STEPS[step - 1]?.label}
              </div>
            </div>
          </div>
        </div>

        {/* ── Form Step Container ── */}
        <div style={{
          background: 'linear-gradient(135deg, #0e1420 0%, #121722 100%)',
          border: '1px solid rgba(255,255,255,0.08)',
          borderRadius: 'var(--radius-xl)',
          padding: '2rem',
          boxShadow: '0 24px 60px -12px rgba(0,0,0,0.7)',
        }}>

          {error && (
            <div style={{ background: 'rgba(239,68,68,0.12)', border: '1px solid rgba(239,68,68,0.3)', color: '#f87171', padding: '0.85rem 1rem', borderRadius: 'var(--radius-md)', marginBottom: '1.5rem', fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <AlertTriangle size={16} /> {error}
            </div>
          )}

          {/* ──────────── STEP 1: Problem Details ──────────── */}
          {step === 1 && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.4rem' }}>
              <div>
                <div style={{ fontSize: '0.7rem', color: 'var(--sage)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.07em', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                  <FileText size={12} /> {t('stepProblem')}
                </div>
                <h2 style={{ fontSize: '1.4rem', fontWeight: 800 }}>{t('reportDescTitle')}</h2>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', marginTop: '0.25rem' }}>{t('reportDescSub')}</p>
              </div>

              {/* Issue Title Input */}
              <div>
                <label className="form-label">{t('issueTitleLabel')} *</label>
                <input
                  type="text"
                  className="form-input-dark"
                  placeholder={t('issueTitlePlace')}
                  value={title}
                  onChange={e => setTitle(e.target.value)}
                  required
                />
              </div>

              {/* Responsive 2-Column Grid: Category & Ward */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.1rem' }}>
                <div>
                  <label className="form-label">{t('catLabel')} *</label>
                  <select className="form-select-dark" value={category} onChange={e => setCategory(e.target.value)}>
                    <option value="">{t('autoDetectCategory')}</option>
                    {CATEGORY_MAP.map(c => <option key={c.value} value={c.value}>{t(c.key)}</option>)}
                  </select>
                </div>
                <div>
                  <label className="form-label">{t('wardLabel')}</label>
                  <select className="form-select-dark" value={ward} onChange={e => setWard(e.target.value)}>
                    <option value="auto">Auto-detect Ward from Location</option>
                    {[...Array(25)].map((_, i) => <option key={i+1} value={i+1}>{t('wardLabelPrefix')} {i+1}</option>)}
                    <option value="na">Ward Info Unavailable / Non-Metro</option>
                  </select>
                </div>
              </div>

              {/* Detailed Description Textarea (Full Width, Min-Height 150px) */}
              <div>
                <label className="form-label">{t('descLabel')} *</label>
                <textarea
                  className="form-textarea-dark"
                  placeholder={t('descPlace')}
                  value={description}
                  onChange={e => setDescription(e.target.value)}
                  required
                />
              </div>

              {/* Compact Sleek AI Analysis Card */}
              {aiAnalysis && (
                <div style={{
                  background: 'rgba(16,185,129,0.06)',
                  border: '1px solid rgba(16,185,129,0.3)',
                  borderRadius: 'var(--radius-lg)',
                  padding: '1rem 1.2rem',
                  display: 'flex',
                  gap: '0.85rem',
                  alignItems: 'flex-start',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.4)',
                }}>
                  <div style={{ background: 'var(--grad-sage)', width: '32px', height: '32px', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', flexShrink: 0, marginTop: '2px' }}>
                    <Brain size={18} />
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.35rem', flexWrap: 'wrap', gap: '0.4rem' }}>
                      <span style={{ fontSize: '0.78rem', fontWeight: 800, color: '#34d399', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                        ✨ AI ANALYSIS: {aiAnalysis.category}
                      </span>
                      <span style={{ fontSize: '0.7rem', fontWeight: 800, color: aiAnalysis.severity === 'CRITICAL' ? '#ef4444' : '#f97316', background: aiAnalysis.severity === 'CRITICAL' ? 'rgba(239,68,68,0.15)' : 'rgba(249,115,22,0.15)', padding: '0.15rem 0.55rem', borderRadius: '999px' }}>
                        {aiAnalysis.severity} (Score {aiAnalysis.priorityScore}/100)
                      </span>
                    </div>
                    <div style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', lineHeight: 1.4, marginBottom: '0.35rem' }}>
                      {aiAnalysis.summary}
                    </div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                      Auto-routing to: <strong style={{ color: '#ffffff' }}>{aiAnalysis.department}</strong>
                    </div>
                  </div>
                </div>
              )}

              {/* Photo Evidence Upload Section */}
              <div>
                <label className="form-label">{t('attachPhoto')}</label>
                <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', flexWrap: 'wrap' }}>
                  <label className="btn-glass" style={{ fontSize: '0.85rem', padding: '0.65rem 1.25rem', cursor: 'pointer', borderColor: 'rgba(16,185,129,0.3)', color: '#34d399', fontWeight: 700 }}>
                    <Camera size={16} /> 📷 Upload Photo Evidence
                    <input type="file" accept="image/*" onChange={handleFileUpload} style={{ display: 'none' }} />
                  </label>

                  {imageUrl && (
                    <button type="button" onClick={handleRemovePhoto} className="btn-glass" style={{ fontSize: '0.78rem', padding: '0.5rem 0.8rem', color: '#f87171', borderColor: 'rgba(239,68,68,0.3)' }}>
                      <X size={14} /> Remove Photo
                    </button>
                  )}
                </div>

                {/* Photo Thumbnail Preview */}
                {imageUrl && (
                  <div style={{ marginTop: '0.85rem', display: 'flex', alignItems: 'center', gap: '0.85rem', background: 'rgba(255,255,255,0.03)', padding: '0.65rem 0.85rem', borderRadius: 'var(--radius-md)', border: '1px solid rgba(16,185,129,0.3)', maxWidth: '360px' }}>
                    <img src={imageUrl} alt="Evidence thumbnail" style={{ width: '48px', height: '48px', objectFit: 'cover', borderRadius: '0.4rem', border: '1px solid rgba(255,255,255,0.1)' }} />
                    <div style={{ flex: 1, overflow: 'hidden' }}>
                      <div style={{ fontSize: '0.8rem', color: '#ffffff', fontWeight: 700, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                        {fileName || 'Photo Evidence Attached'}
                      </div>
                      <div style={{ fontSize: '0.72rem', color: '#34d399', fontWeight: 600 }}>✔ Ready for submission</div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* ──────────── STEP 2: Location (Interactive Leaflet System) ──────────── */}
          {step === 2 && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <div>
                <div style={{ fontSize: '0.7rem', color: 'var(--sage)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.07em', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                  <MapPin size={12} /> {t('stepLocation')} — Leaflet Geospatial System
                </div>
                <h2 style={{ fontSize: '1.4rem', fontWeight: 800 }}>{t('whereIsProblem')}</h2>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', marginTop: '0.25rem' }}>
                  {t('locationSub')}
                </p>
              </div>

              {/* Advanced Interactive Leaflet Map Picker Component */}
              <LeafletMapPicker
                selectedLocation={locationDetails}
                onLocationSelect={handleLocationSelect}
                onConfirm={handleLocationConfirm}
                confirmed={locationConfirmed}
              />
            </div>
          )}

          {/* ──────────── STEP 3: Contact ──────────── */}
          {step === 3 && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <div>
                <div style={{ fontSize: '0.7rem', color: 'var(--sage)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.07em', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                  <User size={12} /> {t('stepContact')}
                </div>
                <h2 style={{ fontSize: '1.4rem', fontWeight: 800 }}>{t('whoAreYou')}</h2>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', marginTop: '0.25rem' }}>{t('contactSub')}</p>
              </div>

              <div style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 'var(--radius-md)', padding: '1.25rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div>
                  <label className="form-label" style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                    <User size={12} /> {t('fullName')}
                  </label>
                  <input type="text" className="form-input-dark" placeholder="e.g. Shardul Parihar" value={citizenName} onChange={e => setCitizenName(e.target.value)} />
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '0.85rem' }}>
                  <div>
                    <label className="form-label" style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                      <Phone size={12} /> {t('phone')}
                    </label>
                    <input type="tel" className="form-input-dark" placeholder="+91 98230 11223" value={citizenPhone} onChange={e => setCitizenPhone(e.target.value)} />
                  </div>
                  <div>
                    <label className="form-label" style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                      <Mail size={12} /> {t('email')}
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
                <h2 style={{ fontSize: '1.4rem', fontWeight: 800 }}>{t('confirmReportTitle')}</h2>
              </div>

              {/* Review Summary */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                {[
                  { label: t('issueTitleLabel'), value: title || 'Civic Infrastructure Issue' },
                  { label: t('catLabel'), value: category || aiAnalysis?.category || 'Garbage' },
                  { label: t('wardLabel'), value: ward === 'auto' ? 'Auto-detected from Location' : `Ward ${ward}` },
                  { label: t('address'), value: locationDetails.address },
                  { label: t('city'), value: `${locationDetails.city}, ${locationDetails.state} (${locationDetails.pincode})` },
                  { label: t('latitude'), value: `${locationDetails.latitude.toFixed(6)}, ${locationDetails.longitude.toFixed(6)}` },
                  { label: t('fullName'), value: citizenName || 'Shardul Parihar' },
                ].map(({ label, value }) => (
                  <div key={label} style={{ display: 'flex', gap: '0.75rem', background: 'rgba(255,255,255,0.025)', padding: '0.6rem 0.9rem', borderRadius: 'var(--radius-sm)', fontSize: '0.85rem' }}>
                    <div style={{ color: 'var(--text-muted)', fontWeight: 600, minWidth: '120px', flexShrink: 0 }}>{label}</div>
                    <div style={{ color: 'var(--text-primary)', fontWeight: 700 }}>{value}</div>
                  </div>
                ))}
              </div>

              <div style={{ background: 'rgba(59,130,246,0.06)', border: '1px solid rgba(59,130,246,0.15)', padding: '0.85rem 1rem', borderRadius: 'var(--radius-md)', fontSize: '0.8rem', color: '#60a5fa', lineHeight: 1.55 }}>
                {t('reviewNotice')}
              </div>
            </div>
          )}

          {/* ── Navigation Buttons ── */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '2rem', gap: '1rem', flexWrap: 'wrap' }}>
            {step > 1 ? (
              <button type="button" onClick={goBack} className="btn-glass" style={{ fontSize: '0.875rem' }}>
                <ArrowLeft size={15} /> {t('backBtn')}
              </button>
            ) : <div />}

            {step < 4 ? (
              <button
                type="button"
                onClick={goNext}
                disabled={!canProceed()}
                className="btn-sage"
                style={{ fontSize: '0.9rem', padding: '0.7rem 1.75rem' }}
              >
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
                    {t('submitting')}
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
