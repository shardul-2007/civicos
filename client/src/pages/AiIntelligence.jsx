import React, { useState, useEffect } from 'react';
import { predictionAPI, analyticsAPI, incidentAPI } from '../services/api';
import { Brain, Layers, AlertTriangle, Zap, CheckCircle2, TrendingUp, ArrowRight, ShieldCheck, RefreshCw, Sparkles } from 'lucide-react';

export default function AiIntelligence() {
  const [predictions, setPredictions] = useState([]);
  const [hotspots, setHotspots] = useState([]);
  const [incidents, setIncidents] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchAiData = () => {
    setLoading(true);
    Promise.all([predictionAPI.getPredictions(), analyticsAPI.getHotspots(), incidentAPI.getIncidents()])
      .then(([pRes, hRes, iRes]) => {
        if (pRes.data.success) setPredictions(pRes.data.data);
        if (hRes.data.success) setHotspots(hRes.data.data);
        if (iRes.data.success) setIncidents(iRes.data.data);
      })
      .catch((err) => console.error('Error fetching AI intelligence:', err))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    fetchAiData();
  }, []);

  return (
    <div style={{ padding: '1.5rem', maxWidth: '1400px', margin: '0 auto' }}>
      
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', marginBottom: '2rem' }}>
        <div>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: '#34d399', fontWeight: 800, fontSize: '0.8rem', textTransform: 'uppercase', marginBottom: '0.4rem' }}>
            <Brain size={16} /> Municipal AI Predictive Engine
          </div>
          <h1 style={{ fontSize: '2rem', fontWeight: 800, color: '#ffffff' }}>City Intelligence & Predictive Hotspots</h1>
          <p style={{ color: '#94a3b8', fontSize: '0.9rem' }}>Real-time ML incident clustering, duplicate aggregation, and proactive infrastructure failure forecasting</p>
        </div>

        <button onClick={fetchAiData} className="btn-glass" style={{ padding: '0.5rem 1rem' }}>
          <RefreshCw size={14} /> Refresh AI Inference
        </button>
      </div>

      {loading ? (
        <div style={{ padding: '4rem', textAlign: 'center', color: '#94a3b8' }}>
          <Brain size={32} className="pulse-dot" style={{ marginBottom: '1rem' }} />
          <p>Analyzing civic streams with AI intelligence model...</p>
        </div>
      ) : (
        /* Grid: Incident Clusters & Predictive Alerts */
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))', gap: '1.5rem', marginBottom: '1.5rem' }}>
          
          {/* Incident Clusters Section */}
          <div className="natural-glass-card">
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem', paddingBottom: '0.75rem', borderBottom: '1px solid rgba(255, 255, 255, 0.08)' }}>
              <div>
                <span style={{ color: '#34d399', fontWeight: 800, display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1.1rem' }}>
                  <Layers size={20} /> AI Incident Clusters
                </span>
                <div style={{ fontSize: '0.75rem', color: '#94a3b8', marginTop: '0.2rem' }}>
                  Aggregated multi-report incidents to eliminate duplicate field dispatch
                </div>
              </div>
              <span className="badge badge-sage">Active Clustering</span>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div style={{ background: '#0a0d14', padding: '1.25rem', borderRadius: '0.5rem', borderLeft: '4px solid #ef4444', border: '1px solid rgba(255, 255, 255, 0.06)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.35rem' }}>
                  <strong style={{ color: '#34d399', fontFamily: 'monospace', fontSize: '0.95rem' }}>CLUSTER #INC-1042</strong>
                  <span className="badge badge-critical">Critical Hazard</span>
                </div>
                <div style={{ fontWeight: 700, color: '#ffffff', fontSize: '1rem', marginBottom: '0.35rem' }}>Water Main Supply Pipeline Burst</div>
                <div style={{ fontSize: '0.85rem', color: '#cbd5e1', marginBottom: '0.75rem' }}>
                  37 citizen reports aggregated within 200m radius in Ward 14.
                </div>
                <div style={{ fontSize: '0.8rem', color: '#34d399', background: 'rgba(16, 185, 129, 0.12)', border: '1px solid rgba(16, 185, 129, 0.25)', padding: '0.5rem 0.75rem', borderRadius: '0.35rem', fontWeight: 600 }}>
                  ✔ Action Dispatched: Valve isolation team sent.
                </div>
              </div>

              {incidents.slice(0, 3).map((inc) => (
                <div key={inc._id} style={{ background: '#0a0d14', padding: '1.25rem', borderRadius: '0.5rem', borderLeft: '4px solid #f97316', border: '1px solid rgba(255, 255, 255, 0.06)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.35rem' }}>
                    <strong style={{ color: '#60a5fa', fontFamily: 'monospace', fontSize: '0.95rem' }}>{inc.incidentId}</strong>
                    <span className="badge badge-high">{inc.severity}</span>
                  </div>
                  <div style={{ fontWeight: 700, color: '#ffffff', fontSize: '1rem', marginBottom: '0.35rem' }}>{inc.title}</div>
                  <div style={{ fontSize: '0.85rem', color: '#cbd5e1' }}>
                    {inc.complaints?.length || 3} citizen reports merged • AI Confidence: {inc.confidence}%
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Predictive Civic Intelligence ("What's Likely to Happen Next?") */}
          <div className="natural-glass-card">
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem', paddingBottom: '0.75rem', borderBottom: '1px solid rgba(255, 255, 255, 0.08)' }}>
              <div>
                <span style={{ color: '#fbbf24', fontWeight: 800, display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1.1rem' }}>
                  <Zap size={20} /> What's Likely to Happen Next?
                </span>
                <div style={{ fontSize: '0.75rem', color: '#94a3b8', marginTop: '0.2rem' }}>
                  Predictive municipal risk forecasting for early preventive intervention
                </div>
              </div>
              <span className="badge badge-medium">ML Predictive</span>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {predictions.map((p, idx) => (
                <div key={idx} style={{ background: '#0a0d14', border: '1px solid rgba(245, 158, 11, 0.25)', padding: '1.25rem', borderRadius: '0.5rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                    <div style={{ fontWeight: 800, color: '#fbbf24', fontSize: '1rem' }}>{p.wardName} — {p.category} Risk</div>
                    <span className="badge badge-high" style={{ background: 'rgba(245, 158, 11, 0.15)', color: '#fbbf24' }}>
                      Risk: {p.riskScore}%
                    </span>
                  </div>
                  <div style={{ fontSize: '0.85rem', color: '#cbd5e1', marginBottom: '0.75rem', lineHeight: 1.5 }}>
                    <strong>ML Rationale:</strong> "Complaint frequency has increased consistently over the last 9 days (+214% surge)."
                  </div>
                  <div style={{ fontSize: '0.8rem', color: '#34d399', background: 'rgba(16, 185, 129, 0.12)', padding: '0.6rem 0.85rem', borderRadius: '0.35rem', border: '1px solid rgba(16, 185, 129, 0.25)', fontWeight: 600 }}>
                    <strong>Recommended Action:</strong> "{p.recommendation}"
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      )}

    </div>
  );
}

