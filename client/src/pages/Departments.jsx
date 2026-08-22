import React, { useState, useEffect } from 'react';
import { analyticsAPI } from '../services/api';
import { Building2, AlertTriangle, CheckCircle2, Clock, Users, Shield, RefreshCw } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const fallbackDepartments = [
  {
    id: 'dept_1',
    name: 'Roads & Municipal Infrastructure',
    code: 'RMI-101',
    description: 'Pothole repairs, asphalt resurfacing, sidewalk maintenance, and street corridor engineering.',
    workloadPercent: 78,
    active: 42,
    resolved: 184,
    slaCompliance: 92,
    slaBreaches: 3,
    isOverloaded: false
  },
  {
    id: 'dept_2',
    name: 'Water Supply & Sanitation',
    code: 'WSS-102',
    description: 'Water pipeline maintenance, pressure distribution, main burst repairs, and clean water supply.',
    workloadPercent: 91,
    active: 56,
    resolved: 210,
    slaCompliance: 84,
    slaBreaches: 8,
    isOverloaded: true
  },
  {
    id: 'dept_3',
    name: 'Electrical Services & Lighting',
    code: 'ESL-103',
    description: 'Streetlight luminaire maintenance, substation transformer repairs, and public safety illumination.',
    workloadPercent: 64,
    active: 28,
    resolved: 145,
    slaCompliance: 96,
    slaBreaches: 1,
    isOverloaded: false
  },
  {
    id: 'dept_4',
    name: 'Solid Waste Management',
    code: 'SWM-104',
    description: 'Garbage collection, waste dumping site management, commercial refuse clearance, and recycling.',
    workloadPercent: 72,
    active: 34,
    resolved: 168,
    slaCompliance: 89,
    slaBreaches: 4,
    isOverloaded: false
  },
  {
    id: 'dept_5',
    name: 'Stormwater & Drainage Control',
    code: 'SDC-105',
    description: 'Drain desilting, stormwater drainage clearance, flood prevention, and culvert maintenance.',
    workloadPercent: 86,
    active: 49,
    resolved: 132,
    slaCompliance: 81,
    slaBreaches: 6,
    isOverloaded: true
  },
  {
    id: 'dept_6',
    name: 'Public Safety & Health Oversight',
    code: 'PSH-106',
    description: 'Emergency hazard mitigation, public health inspection, tree trimming, and safety enforcement.',
    workloadPercent: 55,
    active: 19,
    resolved: 98,
    slaCompliance: 98,
    slaBreaches: 0,
    isOverloaded: false
  }
];

export default function Departments() {
  const { t } = useLanguage();
  const [departments, setDepartments] = useState(fallbackDepartments);
  const [loading, setLoading] = useState(false);

  const fetchDepartments = () => {
    setLoading(true);
    analyticsAPI.getDepartments()
      .then((res) => {
        if (res.data?.success && res.data.data.length > 0) {
          setDepartments(res.data.data);
        } else {
          setDepartments(fallbackDepartments);
        }
      })
      .catch((err) => {
        console.warn('[Departments] Using fallback dataset:', err.message);
        setDepartments(fallbackDepartments);
      })
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    fetchDepartments();
  }, []);

  return (
    <div style={{ padding: '1.5rem', maxWidth: '1400px', margin: '0 auto' }}>
      
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', marginBottom: '2rem' }}>
        <div>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: '#34d399', fontWeight: 800, fontSize: '0.8rem', textTransform: 'uppercase', marginBottom: '0.4rem' }}>
            <Building2 size={16} /> {t('deptEyebrow')}
          </div>
          <h1 style={{ fontSize: '2rem', fontWeight: 800, color: '#ffffff' }}>{t('deptTitle')}</h1>
          <p style={{ color: '#94a3b8', fontSize: '0.9rem' }}>{t('deptSub')}</p>
        </div>

        <button onClick={fetchDepartments} className="btn-glass" style={{ padding: '0.5rem 1rem' }}>
          <RefreshCw size={14} /> Refresh
        </button>
      </div>

      {/* Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', gap: '1.5rem' }}>
        {departments.map((dept) => (
          <div key={dept.id || dept.code} className="natural-glass-card" style={{ padding: '1.5rem', background: '#121722', borderRadius: '0.875rem', position: 'relative' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
              <div>
                <span style={{ fontSize: '0.7rem', fontWeight: 700, color: '#34d399', background: 'rgba(16, 185, 129, 0.1)', padding: '0.2rem 0.5rem', borderRadius: '4px' }}>
                  {dept.code}
                </span>
                <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#ffffff', marginTop: '0.4rem' }}>{dept.name}</h3>
              </div>
              {dept.isOverloaded && (
                <span style={{ fontSize: '0.7rem', fontWeight: 700, color: '#ef4444', background: 'rgba(239, 68, 68, 0.15)', padding: '0.2rem 0.5rem', borderRadius: '4px', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                  <AlertTriangle size={12} /> OVERLOADED
                </span>
              )}
            </div>

            <p style={{ fontSize: '0.82rem', color: '#94a3b8', marginBottom: '1.25rem', height: '2.6em', overflow: 'hidden' }}>{dept.description}</p>

            <div style={{ marginBottom: '1.25rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', fontWeight: 700, marginBottom: '0.35rem' }}>
                <span style={{ color: '#cbd5e1' }}>Capacity Workload</span>
                <span style={{ color: dept.workloadPercent > 85 ? '#ef4444' : '#34d399' }}>{dept.workloadPercent}%</span>
              </div>
              <div style={{ width: '100%', height: '6px', background: 'rgba(255, 255, 255, 0.08)', borderRadius: '99px', overflow: 'hidden' }}>
                <div style={{ width: `${dept.workloadPercent}%`, height: '100%', background: dept.workloadPercent > 85 ? 'linear-gradient(90deg, #f59e0b, #ef4444)' : 'linear-gradient(90deg, #059669, #34d399)' }} />
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.75rem', borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '1rem', textAlign: 'center' }}>
              <div>
                <div style={{ fontSize: '1.1rem', fontWeight: 800, color: '#ffffff' }}>{dept.active}</div>
                <div style={{ fontSize: '0.7rem', color: '#94a3b8' }}>Active</div>
              </div>
              <div>
                <div style={{ fontSize: '1.1rem', fontWeight: 800, color: '#34d399' }}>{dept.resolved}</div>
                <div style={{ fontSize: '0.7rem', color: '#94a3b8' }}>Resolved</div>
              </div>
              <div>
                <div style={{ fontSize: '1.1rem', fontWeight: 800, color: dept.slaBreaches > 5 ? '#ef4444' : '#f59e0b' }}>{dept.slaCompliance}%</div>
                <div style={{ fontSize: '0.7rem', color: '#94a3b8' }}>SLA Rate</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
