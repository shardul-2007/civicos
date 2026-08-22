import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MapContainer, TileLayer, Marker, Popup, Circle } from 'react-leaflet';
import {
  Shield, Brain, Layers, MapPin, Clock, AlertTriangle,
  ArrowRight, Sparkles, Radio, CheckCircle2, Activity,
  Search, Zap, ChevronRight, TrendingUp, Users, FileText,
  BarChart2, Navigation, Lock, Cpu, Check,
} from 'lucide-react';
import L from 'leaflet';
import LeafletErrorBoundary from '../components/LeafletErrorBoundary';
import { dashboardAPI, analyticsAPI, predictionAPI } from '../services/api';
import AiAssistantDrawer from '../components/AiAssistantDrawer';
import { useLanguage } from '../context/LanguageContext';

const createCustomMarker = (color) => L.divIcon({
  className: '',
  html: `<div style="background:${color};width:14px;height:14px;border-radius:50%;border:2px solid rgba(255,255,255,0.8);box-shadow:0 0 10px ${color}"></div>`,
  iconSize: [14, 14], iconAnchor: [7, 7],
});
const markersBySeverity = {
  CRITICAL: createCustomMarker('#ef4444'),
  HIGH:     createCustomMarker('#f97316'),
  MEDIUM:   createCustomMarker('#f59e0b'),
  LOW:      createCustomMarker('#10b981'),
};

const LIVE_STREAM = [
  { time:'09:42', text:'AI classified road complaint as HIGH priority — safety risk flagged.',       cat:'AI Classification', color:'#f97316' },
  { time:'09:39', text:'3 nearby pothole complaints merged into Incident Cluster #INC-1042.',        cat:'Clustering',        color:'#8b5cf6' },
  { time:'09:35', text:'Water pipeline cluster detected in Ward 14 — 37 citizen reports ingested.',  cat:'Hotspot Alert',     color:'#ef4444' },
  { time:'09:31', text:'Complaint #CIV-2847 auto-routed to Public Works & Sanitation Department.',   cat:'Department Routing',color:'#10b981' },
  { time:'09:27', text:'4 complaints predicted to breach SLA within 2 hours — escalating now.',      cat:'SLA Alert',         color:'#f59e0b' },
];

export default function LandingPage() {
  const { t } = useLanguage();
  const [stats, setStats] = useState({ totalComplaints: 1420, activeIncidents: 38, slaBreached: 4, resolvedToday: 114, resolutionRate: '96.2%' });
  const [mapComplaints, setMapComplaints] = useState([]);
  const [tick, setTick] = useState(0);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });

  const handleMouseMove = (e) => {
    setMousePos({ x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    dashboardAPI.getOverview()
      .then((res) => {
        if (res.data?.success && res.data.data) {
          const d = res.data.data;
          setStats({
            totalComplaints: d.totalComplaints || 1420,
            activeIncidents: d.pendingComplaints || 38,
            slaBreached: d.slaBreachedCount || 4,
            resolvedToday: d.resolvedCount || 114,
            resolutionRate: d.resolutionRate || '96.2%',
          });
          setMapComplaints(d.recentComplaints || []);
        }
      }).catch(() => {});
    const iv = setInterval(() => setTick(t => t + 1), 4000);
    return () => clearInterval(iv);
  }, []);

  const WORKFLOW_STEPS = [
    { num:'01', icon: FileText,    title: t('step1Title'), desc: t('step1Desc'), color: '#10b981' },
    { num:'02', icon: Brain,       title: t('step2Title'), desc: t('step2Desc'), color: '#3b82f6' },
    { num:'03', icon: Layers,      title: t('step3Title'), desc: t('step3Desc'), color: '#8b5cf6' },
    { num:'04', icon: AlertTriangle,title: t('step4Title'), desc: t('step4Desc'), color: '#f59e0b' },
    { num:'05', icon: Navigation,  title: t('step5Title'), desc: t('step5Desc'), color: '#14b8a6' },
    { num:'06', icon: Clock,       title: t('step6Title'), desc: t('step6Desc'), color: '#ef4444' },
    { num:'07', icon: MapPin,      title: t('step7Title'), desc: t('step7Desc'), color: '#f97316' },
    { num:'08', icon: CheckCircle2,title: t('step8Title'), desc: t('step8Desc'), color: '#10b981' },
  ];

  return (
    <div onMouseMove={handleMouseMove} style={{ background: 'var(--bg-app)', color: 'var(--text-primary)', minHeight: '100vh', overflowX: 'hidden', position: 'relative' }}>

      {/* Interactive Cursor Spotlight Glow Effect */}
      <div style={{
        position: 'fixed',
        pointerEvents: 'none',
        top: 0,
        left: 0,
        transform: `translate3d(${mousePos.x - 300}px, ${mousePos.y - 300}px, 0)`,
        width: 600,
        height: 600,
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(16,185,129,0.45) 0%, rgba(59,130,246,0.3) 35%, rgba(139,92,246,0.15) 60%, transparent 80%)',
        boxShadow: '0 0 80px rgba(16,185,129,0.35)',
        zIndex: 0,
        willChange: 'transform',
        filter: 'blur(12px)',
      }} />

      {/* ═══════════════════════════════════════
          HERO SECTION
      ═══════════════════════════════════════ */}
      <section style={{ position: 'relative', padding: '6rem 1.5rem 4rem', overflow: 'hidden' }}>
        <div className="hero-glow" style={{ width:600, height:600, top:'-200px', left:'10%', background:'rgba(16,185,129,0.07)' }} />
        <div className="hero-glow" style={{ width:400, height:400, top:'-100px', right:'5%',  background:'rgba(59,130,246,0.05)' }} />

        <div style={{ maxWidth:'1300px', margin:'0 auto', display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(320px,1fr))', gap:'3rem', alignItems:'center', position:'relative', zIndex:1 }}>

          {/* Left: Hero Copy */}
          <div>
            <div className="section-eyebrow" style={{ marginBottom:'1.5rem' }}>
              <span className="pulse-dot" />
              {t('heroBadge')}
            </div>

            <h1 style={{ fontSize:'clamp(2.2rem,4.5vw,3.5rem)', fontWeight:900, lineHeight:1.1, marginBottom:'1.25rem', fontFamily:'var(--font-heading)' }}>
              {t('heroTitle')}
            </h1>

            <p style={{ fontSize:'1.05rem', color:'var(--text-secondary)', maxWidth:'540px', marginBottom:'2.25rem', lineHeight:1.7 }}>
              {t('heroSubtitle')}
            </p>

            <div style={{ display:'flex', flexWrap:'wrap', gap:'0.85rem', marginBottom:'2.5rem' }}>
              <Link to="/report" className="btn-sage" style={{ padding:'0.85rem 2rem', fontSize:'0.95rem' }}>
                {t('reportIssueBtn')} <ArrowRight size={17} />
              </Link>
              <Link to="/admin" className="btn-glass" style={{ padding:'0.85rem 1.75rem', fontSize:'0.95rem' }}>
                <Radio size={16} color="#34d399" /> {t('commandCenterBtn')}
              </Link>
              <Link to="/citizen/track" className="btn-glass" style={{ padding:'0.85rem 1.75rem', fontSize:'0.95rem' }}>
                <Search size={16} /> {t('trackIssueBtn')}
              </Link>
            </div>

            {/* Professional Enterprise Feature Badges */}
            <div style={{ display:'flex', flexWrap:'wrap', gap:'1.25rem' }}>
              {[
                { icon: Lock,     label:'ISO 27001 Security Standard' },
                { icon: Cpu,      label:'Gemini 2.5 AI Intelligence Engine' },
                { icon: Activity, label:'Real-time SLA Target Enforcement' },
              ].map(({ icon: Icon, label }) => (
                <div key={label} style={{ display:'flex', alignItems:'center', gap:'0.4rem', fontSize:'0.8rem', color:'#cbd5e1', fontWeight:600 }}>
                  <Icon size={14} color="#34d399" /> {label}
                </div>
              ))}
            </div>
          </div>

          {/* Right: Live Map Card */}
          <div style={{ position:'relative' }}>
            <div style={{
              background: 'linear-gradient(135deg, rgba(14,20,32,0.9), rgba(17,24,39,0.95))',
              backdropFilter: 'blur(16px)',
              border: '1px solid rgba(255,255,255,0.12)',
              borderRadius: 'var(--radius-xl)',
              padding: '1.25rem',
              boxShadow: '0 32px 80px -16px rgba(0,0,0,0.8)',
              position: 'relative',
              overflow: 'hidden',
            }}>
              {/* Top accent */}
              <div style={{ position:'absolute', top:0, left:0, right:0, height:'1px', background:'linear-gradient(90deg, transparent, var(--sage), transparent)' }} />

              <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', marginBottom:'1rem' }}>
                <div style={{ display:'flex', alignItems:'center', gap:'0.5rem', fontSize:'0.82rem', fontWeight:700, color:'var(--text-primary)' }}>
                  <MapPin size={15} color="#34d399" /> Live Geospatial Command Layer
                </div>
                <div style={{ display:'flex', alignItems:'center', gap:'0.4rem', fontSize:'0.7rem', fontWeight:700, color:'#34d399' }}>
                  <span className="pulse-dot" style={{ width:'6px', height:'6px' }} /> LIVE
                </div>
              </div>

              <div style={{ height:'280px', borderRadius:'var(--radius-md)', overflow:'hidden', border:'1px solid rgba(255,255,255,0.07)' }}>
                <LeafletErrorBoundary>
                  <MapContainer key="landing-map" center={[18.5204,73.8567]} zoom={13} style={{ height:'100%', width:'100%' }} zoomControl={false}>
                    <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                    <Circle center={[18.5304,73.8667]} radius={500} pathOptions={{ color:'#ef4444', fillColor:'#ef4444', fillOpacity:0.15, weight:2 }} />
                    <Marker position={[18.5304,73.8667]} icon={markersBySeverity.CRITICAL}><Popup><strong>Ward 14:</strong> Water Main Burst – 37 reports</Popup></Marker>
                    <Marker position={[18.5204,73.8567]} icon={markersBySeverity.HIGH}><Popup><strong>Ward 4:</strong> Pothole Hazard – 18 reports</Popup></Marker>
                    <Marker position={[18.5104,73.8467]} icon={markersBySeverity.MEDIUM}><Popup><strong>Ward 8:</strong> Waste Overflow</Popup></Marker>
                  </MapContainer>
                </LeafletErrorBoundary>
              </div>

              {/* Live Complaint Feed below map */}
              <div style={{ marginTop:'0.85rem', display:'flex', flexDirection:'column', gap:'0.4rem' }}>
                {[
                  { code:'CIV-2847', cat:'Road Pothole', sev:'HIGH', sev_color:'#fb923c' },
                  { code:'CIV-2852', cat:'Water Pipeline', sev:'CRITICAL', sev_color:'#f87171' },
                  { code:'CIV-2861', cat:'Waste Overflow', sev:'MEDIUM', sev_color:'#fbbf24' },
                ].map(r => (
                  <div key={r.code} style={{ display:'flex', alignItems:'center', justifyContent:'space-between', background:'rgba(255,255,255,0.03)', border:'1px solid rgba(255,255,255,0.05)', borderRadius:'var(--radius-sm)', padding:'0.4rem 0.75rem' }}>
                    <span style={{ fontFamily:'var(--font-mono)', fontSize:'0.75rem', color:'#34d399' }}>{r.code}</span>
                    <span style={{ fontSize:'0.75rem', color:'var(--text-secondary)' }}>{r.cat}</span>
                    <span style={{ fontSize:'0.65rem', fontWeight:700, color:r.sev_color, background:`${r.sev_color}18`, border:`1px solid ${r.sev_color}33`, padding:'0.1rem 0.5rem', borderRadius:'999px', textTransform:'uppercase' }}>{r.sev}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          CITY PULSE: KPI STATS
      ═══════════════════════════════════════ */}
      <section style={{ padding:'4rem 1.5rem', borderTop:'1px solid rgba(255,255,255,0.06)' }}>
        <div style={{ maxWidth:'1300px', margin:'0 auto' }}>
          <div style={{ textAlign:'center', marginBottom:'2.75rem' }}>
            <div className="section-eyebrow" style={{ margin:'0 auto 0.85rem' }}>City Pulse</div>
            <h2 style={{ fontSize:'clamp(1.8rem,3vw,2.5rem)', fontWeight:800 }}>Live Municipal Intelligence</h2>
            <p style={{ color:'var(--text-secondary)', marginTop:'0.5rem', fontSize:'0.95rem' }}>Real-time civic operational telemetry & priority response index</p>
          </div>

          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(220px,1fr))', gap:'1.25rem', marginBottom:'2.5rem' }}>
            {[
              { label:'Total Reports', value: stats?.totalComplaints || '529', sub:'All time ingested', color:'var(--grad-sage)',   glow:'var(--sage-glow)' },
              { label:'Critical Hazards', value: stats?.criticalOpen || 18,      sub:'Require immediate action', color:'var(--grad-fire)',   glow:'rgba(239,68,68,0.25)' },
              { label:'Resolved Today', value: stats?.resolvedToday  || 34,       sub:'Verified by citizens', color:'linear-gradient(135deg,#0d9488,#3b82f6)', glow:'rgba(13,148,136,0.25)' },
              { label:'SLA Compliance', value:'94.2%',                           sub:'Above 90% target ✓', color:'var(--grad-blue)',   glow:'rgba(59,130,246,0.25)' },
            ].map(k => (
              <div key={k.label} className="kpi-card" style={{ '--kpi-accent': k.color, '--kpi-glow': k.glow }}>
                <div style={{ fontSize:'0.7rem', fontWeight:700, color:'var(--text-muted)', textTransform:'uppercase', letterSpacing:'0.06em', marginBottom:'0.6rem' }}>{k.label}</div>
                <div style={{ fontSize:'2.4rem', fontWeight:900, fontFamily:'var(--font-heading)', color:'var(--text-primary)', lineHeight:1, marginBottom:'0.35rem' }}>{k.value}</div>
                <div style={{ fontSize:'0.75rem', color:'var(--text-muted)' }}>{k.sub}</div>
              </div>
            ))}
          </div>

          {/* Civic Health Score */}
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(380px,1fr))', gap:'1.5rem' }}>
            <div className="natural-glass-card" style={{ display:'flex', alignItems:'center', gap:'2rem', padding:'1.75rem' }}>
              <div style={{ position:'relative', flexShrink:0 }}>
                <svg width="100" height="100" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="42" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="8"/>
                  <circle cx="50" cy="50" r="42" fill="none" stroke="url(#scoreGrad)" strokeWidth="8"
                    strokeDasharray={`${2*Math.PI*42*0.82} ${2*Math.PI*42*(1-0.82)}`}
                    strokeLinecap="round" transform="rotate(-90 50 50)" />
                  <defs>
                    <linearGradient id="scoreGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#10b981"/>
                      <stop offset="100%" stopColor="#14b8a6"/>
                    </linearGradient>
                  </defs>
                  <text x="50" y="50" textAnchor="middle" dy="6" fontSize="22" fontWeight="800" fill="#f1f5f9" fontFamily="Outfit,sans-serif">82</text>
                </svg>
              </div>
              <div>
                <div style={{ fontSize:'0.7rem', fontWeight:700, color:'#34d399', textTransform:'uppercase', letterSpacing:'0.05em', marginBottom:'0.3rem' }}>Civic Health Index</div>
                <h3 style={{ fontSize:'1.3rem', fontWeight:800, marginBottom:'0.4rem' }}>City Status: Healthy</h3>
                <p style={{ fontSize:'0.83rem', color:'var(--text-secondary)', lineHeight:1.55, marginBottom:'0.5rem' }}>Improved 6% this month. Faster road & sanitation resolution driving scores up.</p>
                <div style={{ display:'flex', gap:'0.65rem', flexWrap:'wrap' }}>
                  {[['Roads','84'],['Water','88'],['Sanitation','80']].map(([l,v]) => (
                    <div key={l} style={{ background:'rgba(16,185,129,0.08)', border:'1px solid rgba(16,185,129,0.2)', padding:'0.2rem 0.6rem', borderRadius:'999px', fontSize:'0.72rem', fontWeight:700, color:'#34d399' }}>
                      {l}: {v}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Live Intelligence Stream */}
            <div className="natural-glass-card" style={{ padding:'1.5rem' }}>
              <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', marginBottom:'1rem' }}>
                <div style={{ fontSize:'0.8rem', fontWeight:700, color:'var(--text-secondary)', textTransform:'uppercase', letterSpacing:'0.05em' }}>Live AI Event Stream</div>
                <div style={{ display:'flex', alignItems:'center', gap:'0.35rem', fontSize:'0.7rem', color:'#34d399', fontWeight:700 }}>
                  <span className="pulse-dot" style={{ width:'5px', height:'5px' }} /> LIVE
                </div>
              </div>
              <div style={{ display:'flex', flexDirection:'column', gap:'0.55rem' }}>
                {LIVE_STREAM.map((e, i) => (
                  <div key={i} style={{
                    display:'flex', alignItems:'flex-start', gap:'0.75rem',
                    background:'rgba(255,255,255,0.025)', padding:'0.55rem 0.75rem',
                    borderRadius:'var(--radius-sm)', borderLeft:`2px solid ${e.color}`,
                    opacity: i === tick % 5 ? 1 : 0.6,
                    transition:'opacity 0.8s ease',
                  }}>
                    <span style={{ fontFamily:'var(--font-mono)', fontSize:'0.7rem', color:e.color, fontWeight:600, flexShrink:0, marginTop:'1px' }}>{e.time}</span>
                    <span style={{ fontSize:'0.78rem', color:'var(--text-secondary)', lineHeight:1.4 }}>{e.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          8-STEP WORKFLOW
      ═══════════════════════════════════════ */}
      <section id="workflow" style={{ padding:'5rem 1.5rem', borderTop:'1px solid rgba(255,255,255,0.06)' }}>
        <div style={{ maxWidth:'1300px', margin:'0 auto' }}>
          <div style={{ textAlign:'center', marginBottom:'3.5rem' }}>
            <div className="section-eyebrow" style={{ margin:'0 auto 0.85rem' }}>Product Story</div>
            <h2 style={{ fontSize:'clamp(1.8rem,3vw,2.5rem)', fontWeight:800, marginBottom:'0.6rem' }}>From Report to Resolution</h2>
            <p style={{ color:'var(--text-secondary)', fontSize:'0.95rem' }}>Complete 8-step municipal intelligence pipeline — fully automated</p>
          </div>

          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(250px,1fr))', gap:'1px', background:'rgba(255,255,255,0.05)', border:'1px solid rgba(255,255,255,0.07)', borderRadius:'var(--radius-xl)', overflow:'hidden' }}>
            {WORKFLOW_STEPS.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div key={idx} style={{
                  background:'var(--bg-card)',
                  padding:'1.75rem 1.5rem',
                  position:'relative',
                  transition:'background 0.2s',
                }}
                  onMouseEnter={e => e.currentTarget.style.background='var(--bg-hover)'}
                  onMouseLeave={e => e.currentTarget.style.background='var(--bg-card)'}
                >
                  <div style={{ display:'flex', alignItems:'center', gap:'0.75rem', marginBottom:'0.75rem' }}>
                    <div style={{ width:'40px', height:'40px', borderRadius:'var(--radius-md)', background:`${step.color}18`, border:`1px solid ${step.color}33`, display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0 }}>
                      <Icon size={18} color={step.color} />
                    </div>
                    <span style={{ fontFamily:'var(--font-mono)', fontSize:'0.85rem', fontWeight:700, color:step.color }}>Step {step.num}</span>
                  </div>
                  <h3 style={{ fontSize:'1rem', fontWeight:800, marginBottom:'0.35rem' }}>{step.title}</h3>
                  <p style={{ fontSize:'0.82rem', color:'var(--text-secondary)', lineHeight:1.5 }}>{step.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          AI INTELLIGENCE DEMO
      ═══════════════════════════════════════ */}
      <section id="platform" style={{ padding:'5rem 1.5rem', borderTop:'1px solid rgba(255,255,255,0.06)' }}>
        <div style={{ maxWidth:'1300px', margin:'0 auto' }}>
          <div style={{ textAlign:'center', marginBottom:'3rem' }}>
            <div className="section-eyebrow" style={{ margin:'0 auto 0.85rem' }}>AI Engine</div>
            <h2 style={{ fontSize:'clamp(1.8rem,3vw,2.5rem)', fontWeight:800 }}>Intelligence Under the Hood</h2>
          </div>

          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(420px,1fr))', gap:'1.5rem' }}>
            {/* AI Classification Demo */}
            <div className="natural-glass-card" style={{ padding:'1.75rem' }}>
              <div style={{ display:'flex', alignItems:'center', gap:'0.5rem', marginBottom:'1.25rem' }}>
                <div style={{ width:'36px', height:'36px', borderRadius:'var(--radius-md)', background:'rgba(59,130,246,0.1)', border:'1px solid rgba(59,130,246,0.25)', display:'flex', alignItems:'center', justifyContent:'center' }}>
                  <Brain size={18} color="#60a5fa" />
                </div>
                <div>
                  <div style={{ fontSize:'0.75rem', color:'#60a5fa', fontWeight:700, textTransform:'uppercase', letterSpacing:'0.05em' }}>AI Classification Engine</div>
                  <div style={{ fontSize:'0.7rem', color:'var(--text-muted)' }}>Deterministic NLP + Gemini API</div>
                </div>
              </div>

              <div style={{ background:'var(--bg-input)', padding:'1rem', borderRadius:'var(--radius-md)', marginBottom:'1rem', border:'1px solid rgba(255,255,255,0.06)' }}>
                <div style={{ fontSize:'0.68rem', color:'var(--text-muted)', fontWeight:700, textTransform:'uppercase', marginBottom:'0.35rem' }}>Citizen Input</div>
                <div style={{ fontSize:'0.88rem', color:'var(--text-primary)', fontStyle:'italic', lineHeight:1.5 }}>
                  "There is a huge pothole near the bus stop and bikes are falling."
                </div>
              </div>

              <div style={{ display:'flex', alignItems:'center', justifyContent:'center', color:'#34d399', fontSize:'0.8rem', fontWeight:700, marginBottom:'1rem', gap:'0.4rem' }}>
                <Sparkles size={14} /> AI Processing in 600ms
              </div>

              <div style={{ background:'rgba(16,185,129,0.07)', border:'1px solid rgba(16,185,129,0.2)', padding:'1rem', borderRadius:'var(--radius-md)', display:'grid', gridTemplateColumns:'1fr 1fr', gap:'0.6rem', fontSize:'0.82rem' }}>
                {[
                  ['Category', 'Road Infrastructure'],
                  ['Severity', 'HIGH'],
                  ['Safety Risk', 'true ⚠'],
                  ['AI Confidence', '96%'],
                  ['Department', 'Public Works'],
                  ['SLA Target', '12 hours'],
                ].map(([l,v]) => (
                  <div key={l}>
                    <div style={{ color:'var(--text-muted)', fontSize:'0.68rem', textTransform:'uppercase', marginBottom:'0.15rem' }}>{l}</div>
                    <div style={{ fontWeight:700, color: v === 'HIGH' ? '#fb923c' : v === 'true ⚠' ? '#f87171' : 'var(--text-primary)' }}>{v}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Duplicate Clustering Demo */}
            <div className="natural-glass-card" style={{ padding:'1.75rem' }}>
              <div style={{ display:'flex', alignItems:'center', gap:'0.5rem', marginBottom:'1.25rem' }}>
                <div style={{ width:'36px', height:'36px', borderRadius:'var(--radius-md)', background:'rgba(139,92,246,0.1)', border:'1px solid rgba(139,92,246,0.25)', display:'flex', alignItems:'center', justifyContent:'center' }}>
                  <Layers size={18} color="#a78bfa" />
                </div>
                <div>
                  <div style={{ fontSize:'0.75rem', color:'#a78bfa', fontWeight:700, textTransform:'uppercase', letterSpacing:'0.05em' }}>Spatial Duplicate Clustering</div>
                  <div style={{ fontSize:'0.7rem', color:'var(--text-muted)' }}>Haversine distance ≤ 500m</div>
                </div>
              </div>

              <div style={{ display:'flex', flexDirection:'column', gap:'0.5rem', marginBottom:'1rem' }}>
                {['CIV-2841 — "Large pothole near Ward 14"','CIV-2847 — "Road damage outside MIT entrance"','CIV-2852 — "Big hole near college gate"'].map((c, i) => (
                  <div key={i} style={{ background:'var(--bg-input)', border:'1px solid rgba(255,255,255,0.06)', padding:'0.55rem 0.85rem', borderRadius:'var(--radius-sm)', fontSize:'0.8rem', color:'var(--text-secondary)', display:'flex', alignItems:'center', gap:'0.5rem' }}>
                    <div style={{ width:'6px', height:'6px', borderRadius:'50%', background:'#a78bfa', flexShrink:0 }} />
                    {c}
                  </div>
                ))}
              </div>

              <div style={{ textAlign:'center', fontSize:'0.78rem', color:'#a78bfa', fontWeight:700, marginBottom:'1rem', display:'flex', alignItems:'center', justifyContent:'center', gap:'0.4rem' }}>
                <span>↓</span> Spatial merge + category match
              </div>

              <div style={{ background:'rgba(139,92,246,0.07)', border:'1px solid rgba(139,92,246,0.25)', padding:'1rem', borderRadius:'var(--radius-md)', borderLeft:'3px solid #8b5cf6' }}>
                <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', marginBottom:'0.4rem' }}>
                  <span style={{ fontFamily:'var(--font-mono)', fontWeight:800, color:'#a78bfa', fontSize:'0.82rem' }}>INCIDENT #INC-1042</span>
                  <span className="badge badge-critical">Critical Cluster</span>
                </div>
                <div style={{ fontWeight:800, color:'var(--text-primary)', marginBottom:'0.25rem' }}>College Gate Road Damage Hazard</div>
                <div style={{ fontSize:'0.78rem', color:'var(--text-secondary)' }}>3 reports merged → 1 municipal field action</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          FINAL CTA
      ═══════════════════════════════════════ */}
      <section style={{ padding:'6rem 1.5rem', borderTop:'1px solid rgba(255,255,255,0.06)', position:'relative', overflow:'hidden' }}>
        <div className="hero-glow" style={{ width:700, height:400, top:'50%', left:'50%', transform:'translate(-50%,-50%)', background:'rgba(16,185,129,0.08)' }} />
        <div style={{ maxWidth:'720px', margin:'0 auto', textAlign:'center', position:'relative', zIndex:1 }}>
          <div className="section-eyebrow" style={{ margin:'0 auto 1.5rem' }}>Get Started</div>
          <h2 style={{ fontSize:'clamp(2rem,4vw,3rem)', fontWeight:900, marginBottom:'1rem', lineHeight:1.1 }}>
            A smarter city starts with<br />
            <span className="gradient-text">one citizen report.</span>
          </h2>
          <p style={{ fontSize:'1rem', color:'var(--text-secondary)', marginBottom:'2.5rem', lineHeight:1.7 }}>
            CivicOS turns every complaint into data, every data point into insight, and every insight into municipal action.
          </p>
          <div style={{ display:'flex', flexWrap:'wrap', justifyContent:'center', gap:'1rem' }}>
            <Link to="/report" className="btn-sage" style={{ padding:'0.9rem 2.25rem', fontSize:'1rem' }}>
              Report a Problem <ArrowRight size={17} />
            </Link>
            <Link to="/admin" className="btn-glass" style={{ padding:'0.9rem 2rem', fontSize:'1rem' }}>
              <BarChart2 size={16} /> Explore Dashboard
            </Link>
          </div>
        </div>
      </section>

      <AiAssistantDrawer />
    </div>
  );
}
