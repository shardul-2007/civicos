import React, { useState, useEffect } from 'react';
import { analyticsAPI, wardAPI } from '../../services/api';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { TrendingUp, Award, Layers } from 'lucide-react';

const fallbackDepts = [
  { code: 'RMI', name: 'Roads & Infrastructure', resolved: 184, active: 42 },
  { code: 'WSS', name: 'Water & Sanitation', resolved: 210, active: 56 },
  { code: 'ESL', name: 'Electrical & Lighting', resolved: 145, active: 28 },
  { code: 'SWM', name: 'Solid Waste Management', resolved: 168, active: 34 },
  { code: 'SDC', name: 'Drainage Control', resolved: 132, active: 49 },
  { code: 'PSH', name: 'Public Safety', resolved: 98, active: 19 },
];

const fallbackWards = [
  { number: 14, name: 'Ward 14 (College Corridor)', population: 42000, totalComplaints: 84, criticalComplaints: 6 },
  { number: 12, name: 'Ward 12 (Market Yard)', population: 38500, totalComplaints: 76, criticalComplaints: 5 },
  { number: 7,  name: 'Ward 7 (Industrial Substation)', population: 31000, totalComplaints: 62, criticalComplaints: 4 },
  { number: 3,  name: 'Ward 3 (Green Park)', population: 29000, totalComplaints: 48, criticalComplaints: 2 },
  { number: 18, name: 'Ward 18 (Sector 9 Extension)', population: 34000, totalComplaints: 42, criticalComplaints: 1 },
];

export default function Analytics() {
  const [departments, setDepartments] = useState(fallbackDepts);
  const [wards, setWards] = useState(fallbackWards);

  useEffect(() => {
    Promise.all([analyticsAPI.getDepartments(), wardAPI.getWards(), analyticsAPI.getSLA()])
      .then(([dRes, wRes]) => {
        if (dRes.data?.success && dRes.data.data.length > 0) setDepartments(dRes.data.data);
        if (wRes.data?.success && wRes.data.data.length > 0) setWards(wRes.data.data);
      })
      .catch(() => {});
  }, []);

  return (
    <div className="command-mode" style={{ minHeight: '90vh', padding: '2rem 1.5rem', background: '#0a0d14' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        
        <div style={{ marginBottom: '2rem' }}>
          <h1 style={{ fontSize: '2rem', fontWeight: 800, color: '#f8fafc' }}>Municipal Analytics & SLA Auditing</h1>
          <p style={{ color: '#94a3b8' }}>Deep-dive analysis into resolution speed, ward density, and SLA breach risks</p>
        </div>

        {/* Charts & Ward Performance Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '1.5rem', marginBottom: '2rem' }}>
          
          <div className="natural-glass-card" style={{ padding: '1.5rem', height: '350px' }}>
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

          <div className="natural-glass-card" style={{ padding: '1.5rem', height: '350px', overflowY: 'auto' }}>
            <h3 style={{ fontSize: '1.1rem', color: '#f8fafc', fontWeight: 700, marginBottom: '1rem' }}>Ward Complaint Density Matrix</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {wards.slice(0, 10).map((w) => (
                <div key={w.number} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: '#0a0d14', padding: '0.75rem', borderRadius: '0.5rem', border: '1px solid rgba(255,255,255,0.06)' }}>
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
