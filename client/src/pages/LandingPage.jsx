import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  ShieldCheck, Sparkles, MapPin, Activity, Zap, CheckCircle2,
  Clock, FileText, BarChart2, ArrowRight, Radio, Search, Filter,
  Users, Layers, Globe, ChevronRight
} from 'lucide-react';
import { dashboardAPI } from '../services/api';
import { useLanguage } from '../context/LanguageContext';
import ComplaintQuickViewDrawer from '../components/ComplaintQuickViewDrawer';

const LIVE_STREAM_MOCK = [
  { time: '09:42', text: 'AI classified road complaint as HIGH priority — safety risk flagged.', cat: 'AI Classification', color: '#f97316' },
  { time: '09:39', text: '3 nearby pothole complaints merged into Incident Cluster #INC-1042.', cat: 'Clustering', color: '#8b5cf6' },
  { time: '09:35', text: 'Water pipeline cluster detected in Ward 14 — 37 citizen reports ingested.', cat: 'Hotspot Alert', color: '#ef4444' },
  { time: '09:31', text: 'Complaint #CIV-2847 auto-routed to Public Works & Sanitation Department.', cat: 'Department Routing', color: '#10b981' },
  { time: '09:27', text: '4 complaints predicted to breach SLA within 2 hours — escalating now.', cat: 'SLA Alert', color: '#f59e0b' },
];

export default function LandingPage() {
  const { t } = useLanguage();
  const [stats, setStats] = useState({ totalComplaints: 1420, activeIncidents: 38, slaBreached: 4, resolvedToday: 114, resolutionRate: '96.2%' });
  const [mapComplaints, setMapComplaints] = useState([]);
  const [drawerOpen, setDrawerOpen] = useState(false);

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
      })
      .catch(() => {});
  }, []);

  return (
    <div style={{ background: '#080b12', minHeight: '100vh', color: '#f1f5f9', fontFamily: 'Inter, sans-serif', paddingTop: '70px' }}>
      
      {/* ── 1. HERO SECTION ── */}
      <section style={{ padding: '4rem 1.5rem 3rem', maxWidth: '1350px', margin: '0 auto', textAlign: 'center', position: 'relative' }}>
        
        {/* Futuristic Energy OS Banner Link */}
        <div style={{ display: 'inline-flex', marginBottom: '1.25rem' }}>
          <Link to="/energy" style={{
            textDecoration: 'none',
            background: 'linear-gradient(135deg, rgba(34, 211, 238, 0.18), rgba(6, 182, 212, 0.08))',
            border: '1px solid rgba(34, 211, 238, 0.45)',
            borderRadius: '999px',
            padding: '0.45rem 1.1rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            color: '#22d3ee',
            fontSize: '0.82rem',
            fontWeight: 800,
            fontFamily: 'JetBrains Mono, monospace',
            boxShadow: '0 0 20px rgba(34, 211, 238, 0.25)',
          }}>
            <Zap size={15} color="#22d3ee" />
            <span>NEW: CIVICOS FUTURISTIC ENERGY OS 4.0</span>
            <ChevronRight size={14} />
          </Link>
        </div>

        <h1 style={{ fontSize: 'clamp(2.2rem, 5vw, 3.8rem)', fontWeight: 900, lineHeight: 1.15, marginBottom: '1.25rem', color: '#ffffff' }}>
          {t('heroTitle') || 'AI-Powered Municipal Intelligence'} & <br />
          <span style={{ background: 'linear-gradient(135deg, #10b981, #14b8a6, #22d3ee)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            {t('heroSubtitleMain') || 'Interoperable Civic Infrastructure Operating System'}
          </span>
        </h1>

        <p style={{ fontSize: '1.1rem', color: '#94a3b8', maxWidth: '840px', margin: '0 auto 2.25rem', lineHeight: 1.6 }}>
          {t('heroSubtitle') || 'Transforming unstructured citizen reports into real-time municipal intelligence, automated SLA triage, 3D spatial digital twin monitoring, and verified civic action.'}
        </p>

        {/* Hero CTAs */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap', marginBottom: '3rem' }}>
          <Link to="/report" className="btn-sage" style={{ padding: '0.85rem 1.75rem', fontSize: '1rem', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', fontWeight: 800 }}>
            <Sparkles size={18} /> {t('reportIssueBtn') || 'Report Municipal Issue'}
          </Link>
          <Link to="/energy" className="btn-glass" style={{ padding: '0.85rem 1.75rem', fontSize: '1rem', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', fontWeight: 800, borderColor: 'rgba(34, 211, 238, 0.5)', color: '#22d3ee' }}>
            <Zap size={18} /> {t('launchEnergyOs') || 'Launch Futuristic Energy OS 4.0'}
          </Link>
          <Link to="/interoperability" className="btn-glass" style={{ padding: '0.85rem 1.5rem', fontSize: '1rem', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', fontWeight: 700, color: '#60a5fa' }}>
            <Globe size={18} /> {t('interoperabilityGateway') || 'National Interoperability Gateway'}
          </Link>
        </div>

        {/* Real-Time Platform KPI Metrics Bar */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', maxWidth: '1200px', margin: '0 auto' }}>
          {[
            { label: t('totalIngestedReports') || 'TOTAL INGESTED REPORTS', val: stats.totalComplaints, color: '#10b981' },
            { label: t('activeIncidentsCount') || 'ACTIVE INCIDENTS', val: stats.activeIncidents, color: '#60a5fa' },
            { label: t('resolvedTodayText') || 'RESOLVED TODAY', val: stats.resolvedToday, color: '#34d399' },
            { label: t('resolutionAccuracy') || 'RESOLUTION ACCURACY', val: stats.resolutionRate, color: '#22d3ee' },
          ].map((item, idx) => (
            <div key={idx} className="natural-glass-card" style={{ padding: '1.25rem', background: '#121722', textAlign: 'center' }}>
              <div style={{ fontSize: '0.7rem', fontWeight: 700, color: '#94a3b8', textTransform: 'uppercase', marginBottom: '0.35rem' }}>{item.label}</div>
              <div style={{ fontSize: '1.8rem', fontWeight: 900, color: item.color, fontFamily: 'JetBrains Mono, monospace' }}>{item.val}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── 2. FUTURISTIC ENERGY OS 4.0 SHOWCASE CARD ── */}
      <section style={{ padding: '3rem 1.5rem', maxWidth: '1350px', margin: '0 auto' }}>
        <div className="natural-glass-card" style={{ padding: '2rem', background: 'linear-gradient(135deg, rgba(8, 14, 22, 0.9), rgba(18, 23, 34, 0.8))', border: '1px solid rgba(34, 211, 238, 0.35)', borderRadius: '20px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem', alignItems: 'center' }}>
            <div>
              <span className="badge badge-teal" style={{ marginBottom: '0.75rem', background: 'rgba(34, 211, 238, 0.15)', color: '#22d3ee', border: '1px solid rgba(34, 211, 238, 0.4)' }}>
                <Zap size={13} /> {t('energySub') || 'FUTURISTIC SPATIAL COMMAND CENTER'}
              </span>
              <h2 style={{ fontSize: '1.8rem', fontWeight: 900, color: '#ffffff', marginBottom: '0.75rem' }}>
                {t('energyOsShowcaseTitle') || 'CivicOS Energy Intelligence Platform 4.0'}
              </h2>
              <p style={{ color: '#cbd5e1', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                {t('energyOsShowcaseSub') || 'Full-scale futuristic city energy operating system featuring Three.js 3D Spatial Digital Twin, Spacecraft Top Command Bar, real-time node transmission pipeline, SCADA AI Intelligence Assistant, and the signature WHAT IF? Scenario Simulator.'}
              </p>
              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                <Link to="/energy" className="btn-sage" style={{ padding: '0.65rem 1.25rem', fontSize: '0.9rem', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.4rem', fontWeight: 800, background: '#06b6d4', borderColor: '#22d3ee' }}>
                  <Zap size={16} /> {t('enterEnergyOs') || 'Enter Energy Operating System'}
                </Link>
                <Link to="/citizen/track" className="btn-glass" style={{ padding: '0.65rem 1.25rem', fontSize: '0.9rem', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.4rem', fontWeight: 700 }}>
                  <Search size={16} color="#34d399" /> {t('trackReportedIssue') || 'Track Reported Issue'}
                </Link>
              </div>
            </div>

            <div style={{ background: '#05080b', border: '1px solid rgba(34, 211, 238, 0.3)', borderRadius: '16px', padding: '1.25rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.85rem', fontFamily: 'JetBrains Mono, monospace' }}>
              <div style={{ background: 'rgba(255,255,255,0.03)', padding: '0.75rem', borderRadius: '10px' }}>
                <div style={{ fontSize: '0.65rem', color: '#94a3b8' }}>{t('totalGridLoad') || 'TOTAL GRID LOAD'}</div>
                <div style={{ fontSize: '1.2rem', fontWeight: 900, color: '#22d3ee' }}>24.8 MW</div>
              </div>
              <div style={{ background: 'rgba(255,255,255,0.03)', padding: '0.75rem', borderRadius: '10px' }}>
                <div style={{ fontSize: '0.65rem', color: '#94a3b8' }}>{t('renewableMix') || 'RENEWABLE MIX'}</div>
                <div style={{ fontSize: '1.2rem', fontWeight: 900, color: '#34d399' }}>72.6%</div>
              </div>
              <div style={{ background: 'rgba(255,255,255,0.03)', padding: '0.75rem', borderRadius: '10px' }}>
                <div style={{ fontSize: '0.65rem', color: '#94a3b8' }}>{t('batteryReserve') || 'BATTERY RESERVE'}</div>
                <div style={{ fontSize: '1.2rem', fontWeight: 900, color: '#fbbf24' }}>64.0%</div>
              </div>
              <div style={{ background: 'rgba(255,255,255,0.03)', padding: '0.75rem', borderRadius: '10px' }}>
                <div style={{ fontSize: '0.65rem', color: '#94a3b8' }}>{t('gridHealth') || 'GRID HEALTH'}</div>
                <div style={{ fontSize: '1.2rem', fontWeight: 900, color: '#60a5fa' }}>98.7%</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. LIVE INGESTION STREAM & INTEROPERABILITY FEATURES ── */}
      <section style={{ padding: '3rem 1.5rem', maxWidth: '1350px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: 800, color: '#ffffff', marginBottom: '0.5rem' }}>
            {t('workflowTitle') || 'From Report to Resolution'}
          </h2>
          <p style={{ color: '#94a3b8', fontSize: '1rem' }}>
            {t('workflowSubtitle') || 'Complete 8-step municipal intelligence pipeline — fully automated'}
          </p>
        </div>

        {/* 8 Step Workflow Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.25rem' }}>
          {[
            { num: '01', title: t('step1Title'), desc: t('step1Desc'), icon: FileText, color: '#10b981' },
            { num: '02', title: t('step2Title'), desc: t('step2Desc'), icon: Sparkles, color: '#3b82f6' },
            { num: '03', title: t('step3Title'), desc: t('step3Desc'), icon: Layers, color: '#8b5cf6' },
            { num: '04', title: t('step4Title'), desc: t('step4Desc'), icon: Activity, color: '#f59e0b' },
            { num: '05', title: t('step5Title'), desc: t('step5Desc'), icon: Users, color: '#ec4899' },
            { num: '06', title: t('step6Title'), desc: t('step6Desc'), icon: Clock, color: '#ef4444' },
            { num: '07', title: t('step7Title'), desc: t('step7Desc'), icon: MapPin, color: '#06b6d4' },
            { num: '08', title: t('step8Title'), desc: t('step8Desc'), icon: CheckCircle2, color: '#34d399' },
          ].map((st, idx) => {
            const Icon = st.icon;
            return (
              <div key={idx} className="natural-glass-card" style={{ padding: '1.25rem', background: '#121722', borderLeft: `3px solid ${st.color}` }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                  <span style={{ fontSize: '0.75rem', fontWeight: 900, color: st.color, fontFamily: 'JetBrains Mono, monospace' }}>STEP {st.num}</span>
                  <Icon size={18} color={st.color} />
                </div>
                <h3 style={{ fontSize: '1rem', fontWeight: 800, color: '#ffffff', marginBottom: '0.35rem' }}>{st.title}</h3>
                <p style={{ fontSize: '0.82rem', color: '#94a3b8', lineHeight: 1.4 }}>{st.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Complaint Drawer */}
      <ComplaintQuickViewDrawer
        complaintId={null}
        isOpen={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      />
    </div>
  );
}
