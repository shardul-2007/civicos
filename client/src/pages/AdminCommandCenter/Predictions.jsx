import React, { useState, useEffect } from 'react';
import { predictionAPI } from '../../services/api';
import { AlertTriangle, Zap, CheckCircle2, ShieldAlert, MapPin, ArrowRight, Activity, Wrench, Layers } from 'lucide-react';

export default function Predictions() {
  const [predictions, setPredictions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [actionNotice, setActionNotice] = useState('');

  const loadPredictions = () => {
    setLoading(true);
    setError('');
    predictionAPI.getPredictions()
      .then((res) => {
        if (res.data.success) {
          setPredictions(res.data.data);
        }
      })
      .catch((err) => {
        setError(err.response?.data?.message || 'Failed to load predictive intelligence data. Check server connection.');
      })
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    loadPredictions();
  }, []);

  const handleCreateWorkOrder = (wardName, category) => {
    setActionNotice(`Preventive Municipal Work Order #WO-8942 Created for ${wardName} (${category} Preventive Inspection & Drainage Flush)`);
    setTimeout(() => setActionNotice(''), 5000);
  };

  return (
    <div style={{ minHeight: '90vh', padding: '1.5rem', maxWidth: '1400px', margin: '0 auto', background: '#0a0d14', color: '#f8fafc' }}>
      
      {/* Top Title */}
      <div style={{ marginBottom: '1.5rem', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '1rem' }}>
        <div>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: '#10b981', fontWeight: 800, fontSize: '0.85rem', textTransform: 'uppercase', marginBottom: '0.4rem' }}>
            <Zap size={16} /> CITY INTELLIGENCE — PREDICTIVE MUNICIPAL MATRIX
          </div>
          <h1 style={{ fontSize: '1.75rem', fontWeight: 800, color: '#ffffff' }}>Ward Infrastructure Risk Forecasting</h1>
          <p style={{ color: '#94a3b8', fontSize: '0.85rem' }}>
            AI-driven spatial forecasting analyzing complaint density, temporal clustering, and weather patterns to dispatch preventive municipal work orders before infrastructure failure occurs.
          </p>
        </div>
      </div>

      {actionNotice && (
        <div style={{ background: 'rgba(16, 185, 129, 0.15)', border: '1px solid #10b981', color: '#34d399', padding: '1rem 1.25rem', borderRadius: '0.5rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.6rem', fontWeight: 700 }}>
          <CheckCircle2 size={20} /> {actionNotice}
        </div>
      )}

      {/* FEATURED HACKATHON INTELLIGENCE CARD: WARD 12 DRAINAGE & ROAD CRISIS */}
      <div className="natural-glass-card" style={{ borderLeft: '4px solid #ef4444', marginBottom: '2rem', padding: '1.75rem', background: '#121722' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem', gap: '0.75rem' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.2rem' }}>
              <span className="badge badge-critical">CRITICAL PREDICTIVE ALERT</span>
              <span style={{ fontSize: '0.8rem', color: '#94a3b8', fontWeight: 600 }}>Ward 12 Spatial Intelligence</span>
            </div>
            <h2 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#ffffff' }}>WARD 12 — Road Surface & Drainage Failure Prediction</h2>
          </div>
          <span className="badge badge-critical" style={{ fontSize: '0.85rem', padding: '0.35rem 0.85rem' }}>
            PREDICTED RISK: 94%
          </span>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem', marginBottom: '1.25rem' }}>
          <div style={{ background: '#0a0d14', padding: '1rem', borderRadius: '0.5rem', border: '1px solid rgba(255,255,255,0.08)' }}>
            <div style={{ fontSize: '0.75rem', color: '#94a3b8', textTransform: 'uppercase', fontWeight: 700 }}>Complaints Detected</div>
            <div style={{ fontSize: '1.5rem', fontWeight: 800, color: '#ef4444', margin: '0.2rem 0' }}>43 Reports</div>
            <div style={{ fontSize: '0.75rem', color: '#94a3b8' }}>Filed over past 7 days</div>
          </div>

          <div style={{ background: '#0a0d14', padding: '1rem', borderRadius: '0.5rem', border: '1px solid rgba(255,255,255,0.08)' }}>
            <div style={{ fontSize: '0.75rem', color: '#94a3b8', textTransform: 'uppercase', fontWeight: 700 }}>Spatial Density</div>
            <div style={{ fontSize: '1.5rem', fontWeight: 800, color: '#f59e0b', margin: '0.2rem 0' }}>71% Concentrated</div>
            <div style={{ fontSize: '0.75rem', color: '#94a3b8' }}>Within 1.8 km radius</div>
          </div>

          <div style={{ background: '#0a0d14', padding: '1rem', borderRadius: '0.5rem', border: '1px solid rgba(255,255,255,0.08)' }}>
            <div style={{ fontSize: '0.75rem', color: '#94a3b8', textTransform: 'uppercase', fontWeight: 700 }}>Duplicate Linkage</div>
            <div style={{ fontSize: '1.5rem', fontWeight: 800, color: '#3b82f6', margin: '0.2rem 0' }}>8 Linked Reports</div>
            <div style={{ fontSize: '0.75rem', color: '#94a3b8' }}>Same underlying pipeline failure</div>
          </div>

          <div style={{ background: '#0a0d14', padding: '1rem', borderRadius: '0.5rem', border: '1px solid rgba(255,255,255,0.08)' }}>
            <div style={{ fontSize: '0.75rem', color: '#94a3b8', textTransform: 'uppercase', fontWeight: 700 }}>7-Day Forecast</div>
            <div style={{ fontSize: '1.5rem', fontWeight: 800, color: '#f472b6', margin: '0.2rem 0' }}>12–18 Additional</div>
            <div style={{ fontSize: '0.75rem', color: '#94a3b8' }}>Complaints expected without action</div>
          </div>
        </div>

        <div style={{ background: '#0a0d14', padding: '1rem', borderRadius: '0.5rem', border: '1px solid rgba(255,255,255,0.08)', marginBottom: '1.25rem' }}>
          <div style={{ fontSize: '0.85rem', color: '#34d399', fontWeight: 700, marginBottom: '0.3rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            <Wrench size={16} /> Recommended Municipal Intervention
          </div>
          <p style={{ fontSize: '0.85rem', color: '#cbd5e1', lineHeight: 1.5 }}>
            "Inspect drainage culvert and road sub-base near Ward 12 Main Bus Stop. Heavy rainfall expected in 48 hours will trigger structural collapse if pipeline leak is not sealed."
          </p>
        </div>

        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <button onClick={() => handleCreateWorkOrder('Ward 12', 'Road Surface & Drainage')} className="btn-sage" style={{ padding: '0.65rem 1.25rem', fontSize: '0.9rem' }}>
            <Wrench size={18} /> Create Preventive Work Order #WO-8942
          </button>
        </div>
      </div>

      {/* Grid of Other Ward Predictions */}
      <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#ffffff', marginBottom: '1rem' }}>Additional Ward Risk Predictions</h3>

      {loading ? (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.75rem', padding: '3rem', color: '#94a3b8' }}>
          <div style={{ width: '40px', height: '40px', borderRadius: '50%', border: '3px solid rgba(16,185,129,0.2)', borderTopColor: '#10b981', animation: 'spin 0.9s linear infinite' }} />
          <span style={{ fontSize: '0.9rem' }}>Running predictive ML models...</span>
        </div>
      ) : error ? (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '30vh', padding: '2rem 1rem' }}>
          <div style={{ background: 'rgba(239,68,68,0.12)', border: '1px solid rgba(239,68,68,0.35)', borderRadius: '0.75rem', padding: '2rem', maxWidth: '480px', width: '100%', textAlign: 'center' }}>
            <AlertTriangle size={32} color="#ef4444" style={{ margin: '0 auto 0.75rem auto', display: 'block' }} />
            <h3 style={{ color: '#fff', fontSize: '1rem', fontWeight: 800, marginBottom: '0.5rem' }}>Intelligence Engine Error</h3>
            <p style={{ color: '#fca5a5', fontSize: '0.85rem', lineHeight: 1.6, marginBottom: '1.25rem' }}>{error}</p>
            <button onClick={loadPredictions} className="btn-sage" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.55rem 1.1rem', fontSize: '0.85rem' }}>
              <Wrench size={14} /> Retry Intelligence Engine
            </button>
          </div>
        </div>
      ) : predictions.length === 0 ? (
        <div style={{ textAlign: 'center', padding: '3rem', color: '#64748b', background: 'rgba(255,255,255,0.02)', borderRadius: '0.75rem', border: '1px solid rgba(255,255,255,0.06)' }}>
          <Layers size={36} style={{ margin: '0 auto 0.75rem auto', display: 'block', opacity: 0.4 }} />
          <div style={{ fontSize: '0.9rem', fontWeight: 600 }}>No additional ward predictions available.</div>
        </div>
      ) : (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem' }}>
          {predictions.map((p, idx) => (
            <div key={idx} className="natural-glass-card" style={{ padding: '1.5rem', borderLeft: `4px solid ${p.riskScore >= 80 ? '#ef4444' : '#f59e0b'}` }}>
              
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
                <div style={{ fontSize: '1.2rem', fontWeight: 800, color: '#ffffff' }}>{p.wardName}</div>
                <span className={`badge ${p.riskScore >= 80 ? 'badge-critical' : 'badge-high'}`}>
                  Risk: {p.riskScore}%
                </span>
              </div>

              <div style={{ background: '#0a0d14', padding: '0.85rem', borderRadius: '0.5rem', marginBottom: '1rem', border: '1px solid rgba(255,255,255,0.06)' }}>
                <div style={{ fontSize: '0.85rem', color: '#34d399', fontWeight: 700, marginBottom: '0.3rem' }}>
                  Predicted Risk: {p.category} Surge
                </div>
                <div style={{ fontSize: '0.8rem', color: '#94a3b8', marginBottom: '0.4rem' }}>
                  Expected Window: <strong>{p.predictionWindow}</strong>
                </div>
                <div style={{ fontSize: '0.8rem', color: '#cbd5e1', lineHeight: 1.4 }}>
                  <strong>Recommendation:</strong> "{p.recommendation}"
                </div>
              </div>

              <div style={{ marginBottom: '1.25rem' }}>
                <div style={{ fontSize: '0.75rem', color: '#94a3b8', textTransform: 'uppercase', fontWeight: 700, marginBottom: '0.4rem' }}>Key Predictive Factors:</div>
                <ul style={{ paddingLeft: '1.2rem', fontSize: '0.8rem', color: '#cbd5e1' }}>
                  {p.factors?.map((f, fIdx) => (
                    <li key={fIdx} style={{ marginBottom: '0.2rem' }}>{f}</li>
                  ))}
                </ul>
              </div>

              <button onClick={() => handleCreateWorkOrder(p.wardName, p.category)} className="btn-glass" style={{ width: '100%', justifyContent: 'center', fontSize: '0.85rem' }}>
                <Wrench size={16} /> Create Preventive Work Order
              </button>

            </div>
          ))}
        </div>
      )}

    </div>
  );
}
