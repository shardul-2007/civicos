import React, { useState, useEffect } from 'react';
import { analyticsAPI, wardAPI } from '../../services/api';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { TrendingUp, Award, Layers } from 'lucide-react';

export default function Analytics() {
  const [departments, setDepartments] = useState([]);
  const [wards, setWards] = useState([]);
  const [slaData, setSlaData] = useState(null);

  useEffect(() => {
    Promise.all([analyticsAPI.getDepartments(), wardAPI.getWards(), analyticsAPI.getSLA()])
      .then(([dRes, wRes, slaRes]) => {
        if (dRes.data.success) setDepartments(dRes.data.data);
        if (wRes.data.success) setWards(wRes.data.data);
        if (slaRes.data.success) setSlaData(slaRes.data);
      })
      .catch(() => {});
  }, []);

  return (
    <div className="command-mode" style={{ minHeight: '90vh', padding: '2rem 1.5rem' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        
        <div style={{ marginBottom: '2rem' }}>
          <h1 style={{ fontSize: '2rem', fontWeight: 800, color: '#f8fafc' }}>Municipal Analytics & SLA Auditing</h1>
          <p style={{ color: '#94a3b8' }}>Deep-dive analysis into resolution speed, ward density, and SLA breach risks</p>
        </div>

        {/* Charts & Ward Performance Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '1.5rem', marginBottom: '2rem' }}>
          
          <div className="glass-card-dark" style={{ padding: '1.5rem', height: '350px' }}>
            <h3 style={{ fontSize: '1.1rem', color: '#f8fafc', fontWeight: 700, marginBottom: '1rem' }}>Department Active vs Resolved Complaints</h3>
            <ResponsiveContainer width="100%" height="80%">
              <BarChart data={departments}>
                <XAxis dataKey="code" stroke="#64748b" />
                <YAxis stroke="#64748b" />
                <Tooltip contentStyle={{ background: '#0f172a', borderColor: '#334155' }} />
                <Bar dataKey="resolved" fill="#10b981" name="Resolved" stackId="a" />
                <Bar dataKey="active" fill="#f59e0b" name="Active Queue" stackId="a" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="glass-card-dark" style={{ padding: '1.5rem', height: '350px', overflowY: 'auto' }}>
            <h3 style={{ fontSize: '1.1rem', color: '#f8fafc', fontWeight: 700, marginBottom: '1rem' }}>Ward Complaint Density Matrix</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {wards.slice(0, 10).map((w) => (
                <div key={w.number} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: '#0f172a', padding: '0.75rem', borderRadius: '0.5rem' }}>
                  <div>
                    <strong style={{ color: '#f8fafc' }}>{w.name}</strong>
                    <div style={{ fontSize: '0.75rem', color: '#64748b' }}>Population: {w.population.toLocaleString()}</div>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <span style={{ fontSize: '1.1rem', fontWeight: 800, color: '#3b82f6' }}>{w.totalComplaints}</span>
                    <div style={{ fontSize: '0.7rem', color: '#ef4444' }}>{w.criticalComplaints} Critical</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
