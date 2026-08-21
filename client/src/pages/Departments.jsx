import React, { useState, useEffect } from 'react';
import { analyticsAPI } from '../services/api';
import { Building2, AlertTriangle, CheckCircle2, Clock, Users, Shield, RefreshCw } from 'lucide-react';

export default function Departments() {
  const [departments, setDepartments] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchDepartments = () => {
    setLoading(true);
    analyticsAPI.getDepartments()
      .then((res) => {
        if (res.data.success) {
          setDepartments(res.data.data);
        }
      })
      .catch((err) => console.error('Error fetching departments:', err))
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
            <Building2 size={16} /> Municipal Department Oversight
          </div>
          <h1 style={{ fontSize: '2rem', fontWeight: 800, color: '#ffffff' }}>Department Workload & Operational Health</h1>
          <p style={{ color: '#94a3b8', fontSize: '0.9rem' }}>Monitor operational capacity, active queue loads, and SLA compliance across municipal departments</p>
        </div>

        <button onClick={fetchDepartments} className="btn-glass" style={{ padding: '0.5rem 1rem' }}>
          <RefreshCw size={14} /> Refresh Departments
        </button>
      </div>

      {loading ? (
        <div style={{ padding: '4rem', textAlign: 'center', color: '#94a3b8' }}>
          <Building2 size={32} className="pulse-dot" style={{ marginBottom: '1rem' }} />
          <p>Loading department performance metrics...</p>
        </div>
      ) : (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '1.5rem' }}>
          {departments.map((d) => (
            <div
              key={d.id}
              className="natural-glass-card"
              style={{
                borderTop: `4px solid ${d.isOverloaded ? '#ef4444' : '#10b981'}`,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
                  <div>
                    <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#ffffff' }}>{d.name}</h3>
                    <div style={{ fontSize: '0.75rem', color: '#34d399', fontFamily: 'monospace', fontWeight: 700 }}>CODE: {d.code}</div>
                  </div>
                  <span className={`badge ${d.isOverloaded ? 'badge-critical' : 'badge-low'}`}>
                    {d.isOverloaded ? 'Overloaded' : 'Healthy'}
                  </span>
                </div>

                <p style={{ fontSize: '0.85rem', color: '#cbd5e1', marginBottom: '1.25rem', lineHeight: 1.5 }}>
                  {d.description}
                </p>

                {/* Workload Progress Bar */}
                <div style={{ marginBottom: '1.25rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', fontWeight: 600, color: '#cbd5e1', marginBottom: '0.35rem' }}>
                    <span>Workload Capacity</span>
                    <span style={{ color: d.isOverloaded ? '#f87171' : '#34d399', fontWeight: 700 }}>{d.workloadPercent}%</span>
                  </div>
                  <div style={{ height: '8px', background: '#0a0d14', borderRadius: '4px', overflow: 'hidden', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
                    <div
                      style={{
                        height: '100%',
                        width: `${Math.min(100, d.workloadPercent)}%`,
                        background: d.isOverloaded ? '#ef4444' : 'linear-gradient(90deg, #059669, #10b981)',
                        transition: 'width 0.3s ease',
                      }}
                    />
                  </div>
                  {d.isOverloaded && (
                    <div style={{ fontSize: '0.75rem', color: '#f87171', marginTop: '0.4rem', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                      <AlertTriangle size={14} /> Workload exceeds recommended 85% threshold.
                    </div>
                  )}
                </div>
              </div>

              {/* Stats Grid */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.75rem', fontSize: '0.85rem', background: '#0a0d14', padding: '1rem', borderRadius: '0.5rem', border: '1px solid rgba(255, 255, 255, 0.06)' }}>
                <div>
                  <div style={{ color: '#94a3b8', fontSize: '0.75rem' }}>Active Queue</div>
                  <div style={{ fontWeight: 800, color: '#ffffff', fontSize: '1.2rem' }}>{d.active}</div>
                </div>
                <div>
                  <div style={{ color: '#94a3b8', fontSize: '0.75rem' }}>Resolved</div>
                  <div style={{ fontWeight: 800, color: '#34d399', fontSize: '1.2rem' }}>{d.resolved}</div>
                </div>
                <div>
                  <div style={{ color: '#94a3b8', fontSize: '0.75rem' }}>SLA Compliance</div>
                  <div style={{ fontWeight: 800, color: d.slaCompliance >= 90 ? '#34d399' : '#f87171', fontSize: '1.2rem' }}>{d.slaCompliance}%</div>
                </div>
                <div>
                  <div style={{ color: '#94a3b8', fontSize: '0.75rem' }}>SLA Breaches</div>
                  <div style={{ fontWeight: 800, color: d.slaBreaches > 0 ? '#f87171' : '#34d399', fontSize: '1.2rem' }}>{d.slaBreaches}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

    </div>
  );
}

