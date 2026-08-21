import React, { useState, useEffect } from 'react';
import { dashboardAPI, complaintAPI } from '../../services/api';
import { AlertOctagon, CheckCircle2, Clock, Filter, Search, Layers, RefreshCw, Eye } from 'lucide-react';
import ComplaintDetailsModal from './ComplaintDetailsModal';

export default function OfficerOverview() {
  const [overview, setOverview] = useState({
    totalComplaints: 0,
    critical: 0,
    high: 0,
    medium: 0,
    low: 0,
    pending: 0,
    resolved: 0,
    slaViolations: 0,
  });

  const [complaints, setComplaints] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedComplaint, setSelectedComplaint] = useState(null);

  // Filters
  const [search, setSearch] = useState('');
  const [severityFilter, setSeverityFilter] = useState('');
  const [statusFilter, setStatusFilter] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('');

  const loadData = async () => {
    setLoading(true);
    try {
      const [ovRes, compRes] = await Promise.all([
        dashboardAPI.getOverview(),
        complaintAPI.list({
          search,
          severity: severityFilter,
          status: statusFilter,
          category: categoryFilter,
          sort: 'priority',
          limit: 30,
        }),
      ]);

      if (ovRes.data.success) setOverview(ovRes.data.data);
      if (compRes.data.success) setComplaints(compRes.data.data);
    } catch (err) {
      console.warn('Failed loading officer overview:', err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, [search, severityFilter, statusFilter, categoryFilter]);

  return (
    <div className="command-mode" style={{ padding: '2rem 1.5rem', minHeight: '92vh' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        
        {/* Header */}
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', marginBottom: '2rem', gap: '1rem' }}>
          <div>
            <div style={{ fontSize: '0.85rem', color: '#60a5fa', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Municipal Governance Operations
            </div>
            <h1 style={{ fontSize: '2rem', fontWeight: 800, color: '#f8fafc', fontFamily: 'Outfit, sans-serif' }}>
              Municipal Officer Desk
            </h1>
          </div>

          <button onClick={loadData} className="btn-secondary" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <RefreshCw size={16} /> Refresh Metrics
          </button>
        </div>

        {/* 8 Main Overview Cards (Populated from Real Database Data) */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '1rem', marginBottom: '2rem' }}>
          
          <div className="glass-card-dark" style={{ padding: '1.25rem', borderLeft: '4px solid #3b82f6' }}>
            <div style={{ fontSize: '0.75rem', color: '#94a3b8', textTransform: 'uppercase', fontWeight: 700 }}>Total Complaints</div>
            <div style={{ fontSize: '1.8rem', fontWeight: 800, color: '#f8fafc', marginTop: '0.2rem' }}>{overview.totalComplaints?.toLocaleString()}</div>
          </div>

          <div className="glass-card-dark" style={{ padding: '1.25rem', borderLeft: '4px solid #ef4444' }}>
            <div style={{ fontSize: '0.75rem', color: '#ef4444', textTransform: 'uppercase', fontWeight: 700 }}>Critical</div>
            <div style={{ fontSize: '1.8rem', fontWeight: 800, color: '#ef4444', marginTop: '0.2rem' }}>{overview.critical}</div>
          </div>

          <div className="glass-card-dark" style={{ padding: '1.25rem', borderLeft: '4px solid #f97316' }}>
            <div style={{ fontSize: '0.75rem', color: '#f97316', textTransform: 'uppercase', fontWeight: 700 }}>High</div>
            <div style={{ fontSize: '1.8rem', fontWeight: 800, color: '#f97316', marginTop: '0.2rem' }}>{overview.high}</div>
          </div>

          <div className="glass-card-dark" style={{ padding: '1.25rem', borderLeft: '4px solid #eab308' }}>
            <div style={{ fontSize: '0.75rem', color: '#eab308', textTransform: 'uppercase', fontWeight: 700 }}>Medium</div>
            <div style={{ fontSize: '1.8rem', fontWeight: 800, color: '#eab308', marginTop: '0.2rem' }}>{overview.medium}</div>
          </div>

          <div className="glass-card-dark" style={{ padding: '1.25rem', borderLeft: '4px solid #3b82f6' }}>
            <div style={{ fontSize: '0.75rem', color: '#60a5fa', textTransform: 'uppercase', fontWeight: 700 }}>Low</div>
            <div style={{ fontSize: '1.8rem', fontWeight: 800, color: '#60a5fa', marginTop: '0.2rem' }}>{overview.low}</div>
          </div>

          <div className="glass-card-dark" style={{ padding: '1.25rem', borderLeft: '4px solid #a855f7' }}>
            <div style={{ fontSize: '0.75rem', color: '#c084fc', textTransform: 'uppercase', fontWeight: 700 }}>Pending</div>
            <div style={{ fontSize: '1.8rem', fontWeight: 800, color: '#c084fc', marginTop: '0.2rem' }}>{overview.pending}</div>
          </div>

          <div className="glass-card-dark" style={{ padding: '1.25rem', borderLeft: '4px solid #10b981' }}>
            <div style={{ fontSize: '0.75rem', color: '#10b981', textTransform: 'uppercase', fontWeight: 700 }}>Resolved</div>
            <div style={{ fontSize: '1.8rem', fontWeight: 800, color: '#10b981', marginTop: '0.2rem' }}>{overview.resolved}</div>
          </div>

          <div className="glass-card-dark" style={{ padding: '1.25rem', borderLeft: '4px solid #ec4899' }}>
            <div style={{ fontSize: '0.75rem', color: '#f472b6', textTransform: 'uppercase', fontWeight: 700 }}>SLA Violations</div>
            <div style={{ fontSize: '1.8rem', fontWeight: 800, color: '#f472b6', marginTop: '0.2rem' }}>{overview.slaViolations}</div>
          </div>

        </div>

        {/* Filter Controls Bar */}
        <div className="glass-card-dark" style={{ padding: '1.25rem', marginBottom: '1.5rem', display: 'flex', flexWrap: 'wrap', gap: '1rem', alignItems: 'center' }}>
          
          <div style={{ flex: 1, minWidth: '220px', position: 'relative' }}>
            <Search size={16} style={{ position: 'absolute', left: '12px', top: '12px', color: '#64748b' }} />
            <input
              type="text"
              className="form-input-dark"
              style={{ paddingLeft: '2.4rem' }}
              placeholder="Search by title, code, or address..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          <div style={{ minWidth: '150px' }}>
            <select className="form-input-dark" value={severityFilter} onChange={(e) => setSeverityFilter(e.target.value)}>
              <option value="">All Severities</option>
              <option value="CRITICAL">CRITICAL</option>
              <option value="HIGH">HIGH</option>
              <option value="MEDIUM">MEDIUM</option>
              <option value="LOW">LOW</option>
            </select>
          </div>

          <div style={{ minWidth: '150px' }}>
            <select className="form-input-dark" value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)}>
              <option value="">All Statuses</option>
              <option value="SUBMITTED">SUBMITTED</option>
              <option value="ASSIGNED">ASSIGNED</option>
              <option value="ACCEPTED">ACCEPTED</option>
              <option value="IN_PROGRESS">IN_PROGRESS</option>
              <option value="RESOLVED">RESOLVED</option>
              <option value="REJECTED">REJECTED</option>
            </select>
          </div>

          <div style={{ minWidth: '150px' }}>
            <select className="form-input-dark" value={categoryFilter} onChange={(e) => setCategoryFilter(e.target.value)}>
              <option value="">All Categories</option>
              <option value="Road Damage">Road Damage</option>
              <option value="Water Leakage">Water Leakage</option>
              <option value="Drainage">Drainage</option>
              <option value="Garbage">Garbage</option>
              <option value="Streetlight">Streetlight</option>
              <option value="Public Safety">Public Safety</option>
            </select>
          </div>

        </div>

        {/* Operational Complaints Table */}
        <div className="glass-card-dark" style={{ overflow: 'hidden' }}>
          <div style={{ padding: '1rem 1.5rem', borderBottom: '1px solid #1e293b', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <h3 style={{ fontSize: '1.1rem', color: '#f8fafc', fontWeight: 700 }}>Priority Action Queue</h3>
            <span style={{ fontSize: '0.85rem', color: '#94a3b8' }}>Showing {complaints.length} complaints sorted by AI priority</span>
          </div>

          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.85rem' }}>
              <thead>
                <tr style={{ background: '#0f172a', color: '#94a3b8', borderBottom: '1px solid #1e293b' }}>
                  <th style={{ padding: '0.85rem 1rem' }}>Tracking Code</th>
                  <th style={{ padding: '0.85rem 1rem' }}>Title & Address</th>
                  <th style={{ padding: '0.85rem 1rem' }}>Category</th>
                  <th style={{ padding: '0.85rem 1rem' }}>Priority</th>
                  <th style={{ padding: '0.85rem 1rem' }}>Status</th>
                  <th style={{ padding: '0.85rem 1rem' }}>SLA State</th>
                  <th style={{ padding: '0.85rem 1rem', textAlign: 'right' }}>Action</th>
                </tr>
              </thead>
              <tbody>
                {loading ? (
                  <tr>
                    <td colSpan={7} style={{ padding: '2rem', textAlign: 'center', color: '#94a3b8' }}>Loading queue...</td>
                  </tr>
                ) : complaints.length === 0 ? (
                  <tr>
                    <td colSpan={7} style={{ padding: '2rem', textAlign: 'center', color: '#94a3b8' }}>No complaints matched criteria.</td>
                  </tr>
                ) : (
                  complaints.map((c) => (
                    <tr key={c._id} style={{ borderBottom: '1px solid #1e293b', transition: 'background 0.2s' }}>
                      <td style={{ padding: '0.85rem 1rem', fontFamily: 'monospace', fontWeight: 700, color: '#60a5fa' }}>
                        {c.trackingCode}
                      </td>
                      <td style={{ padding: '0.85rem 1rem', maxWidth: '300px' }}>
                        <div style={{ fontWeight: 700, color: '#f8fafc', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{c.title}</div>
                        <div style={{ fontSize: '0.75rem', color: '#64748b' }}>{c.address} (Ward {c.ward})</div>
                      </td>
                      <td style={{ padding: '0.85rem 1rem', color: '#cbd5e1' }}>{c.category}</td>
                      <td style={{ padding: '0.85rem 1rem' }}>
                        <span className={`badge ${c.severity === 'CRITICAL' ? 'badge-critical' : c.severity === 'HIGH' ? 'badge-high' : 'badge-medium'}`}>
                          {c.priorityScore} / 100 ({c.severity})
                        </span>
                      </td>
                      <td style={{ padding: '0.85rem 1rem', fontWeight: 600, color: c.status === 'RESOLVED' ? '#10b981' : '#f8fafc' }}>
                        {c.status}
                      </td>
                      <td style={{ padding: '0.85rem 1rem' }}>
                        <span className={`badge ${c.sla?.isBreached ? 'badge-critical' : c.sla?.isWarning ? 'badge-medium' : 'badge-success'}`}>
                          {c.sla?.statusLabel}
                        </span>
                      </td>
                      <td style={{ padding: '0.85rem 1rem', textAlign: 'right' }}>
                        <button onClick={() => setSelectedComplaint(c)} className="btn-secondary" style={{ padding: '0.35rem 0.65rem', fontSize: '0.75rem', display: 'inline-flex', alignItems: 'center', gap: '0.3rem' }}>
                          <Eye size={14} /> Open
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Modal for updating complaint status */}
        {selectedComplaint && (
          <ComplaintDetailsModal
            complaint={selectedComplaint}
            onClose={() => setSelectedComplaint(null)}
            onRefresh={loadData}
          />
        )}

      </div>
    </div>
  );
}
