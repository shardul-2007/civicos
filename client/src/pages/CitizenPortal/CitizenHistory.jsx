import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { complaintAPI } from '../../services/api';
import { FileText, Clock, ExternalLink, RefreshCw, CheckCircle2, ShieldCheck, Eye, ThumbsUp, ThumbsDown } from 'lucide-react';
import ComplaintQuickViewDrawer from '../../components/ComplaintQuickViewDrawer';

export default function CitizenHistory() {
  const [complaints, setComplaints] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [selectedComplaint, setSelectedComplaint] = useState(null);

  const loadMyComplaints = async () => {
    setLoading(true);
    setError('');
    try {
      let res = await complaintAPI.getMy();
      if (res.data.success && res.data.data.length > 0) {
        setComplaints(res.data.data);
      } else {
        // Fallback to general list if citizen-specific is empty (not authenticated)
        const listRes = await complaintAPI.list({ limit: 20 });
        if (listRes.data.success) {
          setComplaints(listRes.data.data);
        }
      }
    } catch (err) {
      // Try fallback
      try {
        const listRes = await complaintAPI.list({ limit: 20 });
        if (listRes.data.success) {
          setComplaints(listRes.data.data);
        }
      } catch (e) {
        setError(e.response?.data?.message || 'Failed to load reports. Check your connection and try again.');
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadMyComplaints();
  }, []);

  return (
    <div style={{ background: '#0a0d14', minHeight: '90vh', padding: '2rem 1rem', color: '#f8fafc' }}>
      <div style={{ maxWidth: '950px', margin: '0 auto' }}>
        
        {/* Header Bar */}
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', marginBottom: '2rem', gap: '1rem' }}>
          <div>
            <div style={{ fontSize: '0.75rem', color: '#34d399', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.04em' }}>
              Citizen Tracking & Reports Registry
            </div>
            <h1 style={{ fontSize: '2rem', fontWeight: 800, color: '#ffffff' }}>My Submitted Reports</h1>
            <p style={{ color: '#94a3b8', fontSize: '0.9rem' }}>Click any complaint to inspect resolution progress, field officer audit trail, or confirm work completion.</p>
          </div>

          <div style={{ display: 'flex', gap: '0.5rem' }}>
            <button onClick={loadMyComplaints} className="btn-glass" style={{ fontSize: '0.8rem', padding: '0.4rem 0.8rem' }}>
              <RefreshCw size={14} /> Refresh Reports
            </button>
            <Link to="/report" className="btn-sage" style={{ fontSize: '0.8rem', padding: '0.4rem 0.8rem', textDecoration: 'none' }}>
              + Report New Problem
            </Link>
          </div>
        </div>

        {loading ? (
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.75rem', padding: '4rem', color: '#94a3b8' }}>
            <div style={{ width: '40px', height: '40px', borderRadius: '50%', border: '3px solid rgba(16,185,129,0.2)', borderTopColor: '#10b981', animation: 'spin 0.9s linear infinite' }} />
            <span>Loading submitted reports from database...</span>
          </div>
        ) : error ? (
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '30vh' }}>
            <div style={{ background: 'rgba(239,68,68,0.12)', border: '1px solid rgba(239,68,68,0.35)', borderRadius: '0.75rem', padding: '2rem', maxWidth: '480px', width: '100%', textAlign: 'center' }}>
              <h3 style={{ color: '#fff', fontSize: '1.1rem', fontWeight: 800, marginBottom: '0.5rem' }}>Failed to Load Reports</h3>
              <p style={{ color: '#fca5a5', fontSize: '0.85rem', lineHeight: 1.6, marginBottom: '1.25rem' }}>{error}</p>
              <button onClick={loadMyComplaints} className="btn-sage" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.55rem 1.1rem' }}>
                <RefreshCw size={14} /> Retry Connection
              </button>
            </div>
          </div>
        ) : complaints.length === 0 ? (
          <div className="natural-glass-card" style={{ padding: '3rem', textAlign: 'center', background: '#121722' }}>
            <FileText size={48} color="#34d399" style={{ marginBottom: '1rem' }} />
            <h3 style={{ fontSize: '1.25rem', color: '#ffffff', marginBottom: '0.5rem', fontWeight: 800 }}>No complaints recorded yet</h3>
            <p style={{ color: '#94a3b8', marginBottom: '1.5rem', fontSize: '0.9rem' }}>Have an issue in your neighborhood? Lodge a report in under 60 seconds.</p>
            <Link to="/report" className="btn-sage" style={{ textDecoration: 'none', padding: '0.6rem 1.25rem' }}>
              Report a Civic Problem Now
            </Link>
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
                      {c.address} • Submitted {new Date(c.createdAt).toLocaleDateString()}
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <Link
                      to={`/citizen/track?code=${c.trackingCode}`}
                      onClick={(e) => e.stopPropagation()}
                      className="btn-glass"
                      style={{ padding: '0.4rem 0.75rem', fontSize: '0.8rem', textDecoration: 'none', color: '#34d399', borderColor: 'rgba(52,211,153,0.3)' }}
                    >
                      Track <ExternalLink size={13} />
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
                      <Eye size={14} /> Quick View & Verify
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
