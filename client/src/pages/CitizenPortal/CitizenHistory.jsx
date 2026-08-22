import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { complaintAPI } from '../../services/api';
import { FileText, Clock, ExternalLink, RefreshCw, CheckCircle2, ShieldCheck, Eye, ThumbsUp, ThumbsDown } from 'lucide-react';
import ComplaintQuickViewDrawer from '../../components/ComplaintQuickViewDrawer';
import { useLanguage } from '../../context/LanguageContext';

const fallbackCitizenComplaints = [
  {
    _id: '65f8a0000000000000000101',
    trackingCode: 'CIV-138987-644E',
    title: 'Water Leakage & Supply Pressure Burst',
    description: 'Major water pipeline leak near Ward 14 bus stop causing street flooding.',
    category: 'Water Infrastructure',
    severity: 'CRITICAL',
    status: 'IN_PROGRESS',
    ward: 14,
    address: 'Near College Gate, Main Road, Ward 14',
    createdAt: new Date().toISOString()
  },
  {
    _id: '65f8a0000000000000000102',
    trackingCode: 'CIV-284791-889B',
    title: 'Asphalt Pothole & Road Deterioration',
    description: 'Deep pothole causing traffic slowdown near Sector 4 main junction.',
    category: 'Road Damage',
    severity: 'HIGH',
    status: 'ASSIGNED',
    ward: 14,
    address: 'Sector 4 Main Corridor, Ward 14',
    createdAt: new Date().toISOString()
  }
];

export default function CitizenHistory() {
  const { t } = useLanguage();
  const [complaints, setComplaints] = useState(fallbackCitizenComplaints);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [selectedComplaint, setSelectedComplaint] = useState(null);

  const loadMyComplaints = async () => {
    setLoading(true);
    setError('');
    try {
      let res = await complaintAPI.getMy();
      if (res.data?.success && res.data.data?.length > 0) {
        setComplaints(res.data.data);
      } else {
        const listRes = await complaintAPI.list({ limit: 20 });
        if (listRes.data?.success && listRes.data.data?.length > 0) {
          setComplaints(listRes.data.data);
        } else {
          setComplaints(fallbackCitizenComplaints);
        }
      }
    } catch (err) {
      setComplaints(fallbackCitizenComplaints);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadMyComplaints();
  }, []);

  return (
    <div style={{ background: 'var(--bg-app)', minHeight: '90vh', padding: '5.5rem 1rem 3rem', color: 'var(--text-primary)' }}>
      <div style={{ maxWidth: '950px', margin: '0 auto' }}>
        
        {/* Header Bar */}
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', marginBottom: '2rem', gap: '1rem' }}>
          <div>
            <div style={{ fontSize: '0.75rem', color: '#34d399', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.04em' }}>
              {t('trackHeaderTitle')}
            </div>
            <h1 style={{ fontSize: '2rem', fontWeight: 800, color: '#ffffff' }}>{t('recentIncidents')}</h1>
            <p style={{ color: '#94a3b8', fontSize: '0.9rem' }}>{t('trackHeaderSub')}</p>
          </div>

          <div style={{ display: 'flex', gap: '0.5rem' }}>
            <button onClick={loadMyComplaints} className="btn-glass" style={{ fontSize: '0.8rem', padding: '0.4rem 0.8rem' }}>
              <RefreshCw size={14} /> Refresh
            </button>
            <Link to="/report" className="btn-sage" style={{ fontSize: '0.8rem', padding: '0.4rem 0.8rem', textDecoration: 'none' }}>
              + {t('reportProblem')}
            </Link>
          </div>
        </div>

        {loading ? (
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.75rem', padding: '4rem', color: '#94a3b8' }}>
            <div style={{ width: '40px', height: '40px', borderRadius: '50%', border: '3px solid rgba(16,185,129,0.2)', borderTopColor: '#10b981', animation: 'spin 0.9s linear infinite' }} />
            <span>Loading submitted reports...</span>
          </div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {complaints.map((c) => (
              <div
                key={c._id}
                className="natural-glass-card"
                onClick={() => setSelectedComplaint(c)}
                style={{
                  padding: '1.25rem',
                  background: '#121722',
                  borderLeft: `4px solid ${c.status === 'RESOLVED' ? '#10b981' : c.severity === 'CRITICAL' ? '#ef4444' : '#3b82f6'}`,
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  borderRadius: '0.75rem',
                }}
              >
                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '1rem' }}>
                  
                  <div style={{ flex: 1, minWidth: '260px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.4rem', flexWrap: 'wrap' }}>
                      <span style={{ fontFamily: 'monospace', fontWeight: 800, color: '#34d399', fontSize: '0.95rem' }}>{c.trackingCode}</span>
                      <span className={`badge ${c.severity === 'CRITICAL' ? 'badge-critical' : 'badge-high'}`}>{c.severity}</span>
                      <span className="badge badge-sage">{c.status}</span>
                      <span style={{ fontSize: '0.75rem', color: '#94a3b8' }}>Category: {c.category}</span>
                    </div>

                    <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#ffffff', marginBottom: '0.3rem' }}>{c.title}</h3>
                    <div style={{ fontSize: '0.85rem', color: '#cbd5e1' }}>
                      {c.address} • {new Date(c.createdAt || Date.now()).toLocaleDateString()}
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <Link
                      to={`/citizen/track?code=${c.trackingCode}`}
                      onClick={(e) => e.stopPropagation()}
                      className="btn-glass"
                      style={{ padding: '0.4rem 0.75rem', fontSize: '0.8rem', textDecoration: 'none', color: '#34d399', borderColor: 'rgba(52,211,153,0.3)' }}
                    >
                      {t('trackIssue')} <ExternalLink size={13} />
                    </Link>
                    
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedComplaint(c);
                      }}
                      className="btn-sage"
                      style={{ padding: '0.4rem 0.75rem', fontSize: '0.8rem' }}
                    >
                      <Eye size={14} /> View
                    </button>
                  </div>

                </div>
              </div>
            ))}
          </div>
        )}

        {/* Complaint Quick View & Resolution Verification Drawer */}
        <ComplaintQuickViewDrawer
          complaint={selectedComplaint}
          isOpen={!!selectedComplaint}
          onClose={() => setSelectedComplaint(null)}
          onRefresh={loadMyComplaints}
        />

      </div>
    </div>
  );
}
