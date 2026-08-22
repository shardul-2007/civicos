import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { complaintAPI } from '../services/api';
import { Search, Filter, Eye, Clock, CheckCircle2, AlertOctagon } from 'lucide-react';
import ComplaintQuickViewDrawer from '../components/ComplaintQuickViewDrawer';
import ResponsiveTable from '../components/ui/ResponsiveTable';

const fallbackComplaints = [
  {
    _id: '65f8a0000000000000000101',
    trackingCode: 'CIV-138987-644E',
    title: 'Water Leakage & Supply Pressure Burst',
    description: 'Major water pipeline leak near Ward 14 bus stop causing street flooding.',
    category: 'Water Infrastructure',
    severity: 'CRITICAL',
    priorityScore: 88,
    status: 'IN_PROGRESS',
    ward: 14,
    address: 'Near College Gate, Main Road, Ward 14',
    citizenName: 'Amitav Ghosh',
    departmentName: 'Water Supply & Sanitation',
    sla: { isBreached: false, isWarning: true, statusLabel: '20h remaining' }
  },
  {
    _id: '65f8a0000000000000000102',
    trackingCode: 'CIV-284791-889B',
    title: 'Asphalt Pothole & Road Deterioration',
    description: 'Deep pothole causing traffic slowdown near Sector 4 main junction.',
    category: 'Road Damage',
    severity: 'HIGH',
    priorityScore: 74,
    status: 'ASSIGNED',
    ward: 14,
    address: 'Sector 4 Main Corridor, Ward 14',
    citizenName: 'Priya Sharma',
    departmentName: 'Roads & Municipal Infrastructure',
    sla: { isBreached: false, isWarning: false, statusLabel: '12h remaining' }
  },
  {
    _id: '65f8a0000000000000000103',
    trackingCode: 'CIV-993812-441A',
    title: 'Streetlight Substation Transformer Outage',
    description: 'Entire street dark between Block B and Block C due to luminaire failure.',
    category: 'Streetlight',
    severity: 'MEDIUM',
    priorityScore: 56,
    status: 'RESOLVED',
    ward: 7,
    address: 'Block B Main Road, Ward 7',
    citizenName: 'Shardul Parihar',
    departmentName: 'Electrical Services',
    sla: { isBreached: false, isWarning: false, statusLabel: 'Completed within SLA' }
  },
  {
    _id: '65f8a0000000000000000104',
    trackingCode: 'CIV-551920-192C',
    title: 'Open Drain Overflow & Stormwater Hazard',
    description: 'Clogged stormwater drain spilling onto pedestrian footpath during heavy rainfall.',
    category: 'Drainage',
    severity: 'HIGH',
    priorityScore: 79,
    status: 'ACCEPTED',
    ward: 12,
    address: 'Market Yard Crossing, Ward 12',
    citizenName: 'Karan Patel',
    departmentName: 'Public Health & Sanitation',
    sla: { isBreached: false, isWarning: false, statusLabel: '16h remaining' }
  },
  {
    _id: '65f8a0000000000000000105',
    trackingCode: 'CIV-883019-332D',
    title: 'Garbage Accumulation & Waste Dump',
    description: 'Uncollected commercial solid waste piling up near residential colony gate.',
    category: 'Garbage',
    severity: 'MEDIUM',
    priorityScore: 62,
    status: 'SUBMITTED',
    ward: 3,
    address: 'Green Park Extension, Ward 3',
    citizenName: 'Ananya Roy',
    departmentName: 'Solid Waste Management',
    sla: { isBreached: false, isWarning: false, statusLabel: '28h remaining' }
  }
];

export default function ComplaintsList() {
  const navigate = useNavigate();
  const [complaints, setComplaints] = useState(fallbackComplaints);
  const [totalCount, setTotalCount] = useState(5);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [selectedComplaint, setSelectedComplaint] = useState(null);

  // Filters
  const [search, setSearch] = useState('');
  const [severity, setSeverity] = useState('');
  const [status, setStatus] = useState('');
  const [category, setCategory] = useState('');

  const loadComplaints = async () => {
    setLoading(true);
    try {
      const res = await complaintAPI.list({
        search,
        severity,
        status,
        category,
        page,
        limit: 15,
        sort: 'priority',
      });
      if (res.data?.success && res.data.data.length > 0) {
        setComplaints(res.data.data);
        setTotalCount(res.data.count || res.data.data.length);
      } else {
        setComplaints(fallbackComplaints);
        setTotalCount(fallbackComplaints.length);
      }
    } catch (err) {
      console.warn('[ComplaintsList] Using fallback list:', err.message);
      setComplaints(fallbackComplaints);
      setTotalCount(fallbackComplaints.length);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadComplaints();
  }, [search, severity, status, category, page]);

  const filteredData = complaints.filter((c) => {
    if (search && !c.trackingCode.toLowerCase().includes(search.toLowerCase()) && !c.title.toLowerCase().includes(search.toLowerCase()) && !c.address.toLowerCase().includes(search.toLowerCase())) {
      return false;
    }
    if (severity && c.severity !== severity) return false;
    if (status && c.status !== status) return false;
    if (category && c.category !== category) return false;
    return true;
  });

  const columns = [
    {
      header: 'ID',
      accessor: 'trackingCode',
      render: (c) => (
        <span style={{ fontFamily: 'monospace', fontWeight: 800, color: '#34d399' }}>
          {c.trackingCode}
        </span>
      ),
    },
    {
      header: 'Title & Landmark',
      render: (c) => (
        <div style={{ maxWidth: '280px' }}>
          <button
            onClick={() => setSelectedComplaint(c)}
            style={{ background: 'none', border: 'none', textAlign: 'left', fontWeight: 700, color: '#ffffff', cursor: 'pointer', padding: 0 }}
          >
            {c.title}
          </button>
          <div style={{ fontSize: '0.75rem', color: '#94a3b8' }}>{c.address} (Ward {c.ward})</div>
        </div>
      ),
    },
    {
      header: 'Category',
      accessor: 'category',
      render: (c) => <span style={{ color: '#cbd5e1' }}>{c.category}</span>,
    },
    {
      header: 'Priority Score',
      render: (c) => (
        <span className={`badge ${c.severity === 'CRITICAL' ? 'badge-critical' : c.severity === 'HIGH' ? 'badge-high' : 'badge-medium'}`}>
          {c.priorityScore}/100 ({c.severity})
        </span>
      ),
    },
    {
      header: 'Department',
      accessor: 'departmentName',
      render: (c) => <span style={{ color: '#cbd5e1' }}>{c.departmentName}</span>,
    },
    {
      header: 'Status',
      render: (c) => (
        <span style={{ fontWeight: 600, color: c.status === 'RESOLVED' ? '#10b981' : '#60a5fa' }}>
          {c.status}
        </span>
      ),
    },
    {
      header: 'SLA Target',
      render: (c) => (
        <span className={`badge ${c.sla?.isBreached ? 'badge-critical' : c.sla?.isWarning ? 'badge-high' : 'badge-medium'}`}>
          {c.sla?.statusLabel || 'Active'}
        </span>
      ),
    },
    {
      header: 'Actions',
      align: 'right',
      render: (c) => (
        <div style={{ display: 'flex', gap: '0.4rem', justifyContent: 'flex-end' }}>
          <button onClick={() => setSelectedComplaint(c)} className="btn-sage" style={{ padding: '0.3rem 0.6rem', fontSize: '0.75rem' }}>
            Quick View
          </button>
        </div>
      ),
    },
  ];

  return (
    <div style={{ padding: '1.5rem', maxWidth: '1400px', margin: '0 auto', background: '#0a0d14', color: '#f8fafc' }}>
      
      {/* Page Title */}
      <div style={{ marginBottom: '1.5rem', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '1rem' }}>
        <div>
          <h1 style={{ fontSize: '1.75rem', fontWeight: 800, color: '#ffffff' }}>Municipal Complaints Registry</h1>
          <p style={{ color: '#94a3b8', fontSize: '0.85rem' }}>Central repository of citizen reports with AI prioritization, SLA enforcement, and workflow auditability</p>
        </div>
      </div>

      {/* Filter Control Bar */}
      <div className="natural-glass-card" style={{ marginBottom: '1.5rem', display: 'flex', flexWrap: 'wrap', gap: '0.75rem', alignItems: 'center', padding: '1rem' }}>
        
        <div style={{ flex: 1, minWidth: '220px', position: 'relative' }}>
          <Search size={16} style={{ position: 'absolute', left: '12px', top: '10px', color: '#94a3b8' }} />
          <input
            type="text"
            className="form-input-dark"
            style={{ paddingLeft: '2.4rem', width: '100%' }}
            placeholder="Search by ID, title, or address..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <select className="form-input-dark" style={{ width: 'auto' }} value={severity} onChange={(e) => setSeverity(e.target.value)}>
          <option value="">All Severities</option>
          <option value="CRITICAL">CRITICAL</option>
          <option value="HIGH">HIGH</option>
          <option value="MEDIUM">MEDIUM</option>
          <option value="LOW">LOW</option>
        </select>

        <select className="form-input-dark" style={{ width: 'auto' }} value={status} onChange={(e) => setStatus(e.target.value)}>
          <option value="">All Statuses</option>
          <option value="SUBMITTED">SUBMITTED</option>
          <option value="ASSIGNED">ASSIGNED</option>
          <option value="ACCEPTED">ACCEPTED</option>
          <option value="IN_PROGRESS">IN_PROGRESS</option>
          <option value="RESOLVED">RESOLVED</option>
        </select>

        <select className="form-input-dark" style={{ width: 'auto' }} value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="">All Categories</option>
          <option value="Road Damage">Road Damage</option>
          <option value="Water Leakage">Water Leakage</option>
          <option value="Drainage">Drainage</option>
          <option value="Garbage">Garbage</option>
          <option value="Streetlight">Streetlight</option>
        </select>

      </div>

      {/* Main Complaints Table & Responsive Cards */}
      <div className="natural-glass-card" style={{ padding: 0, overflow: 'hidden' }}>
        
        <ResponsiveTable
          columns={columns}
          data={filteredData}
          loading={loading}
          emptyMessage="No complaints matched current filter criteria."
        />

        {/* Pagination Footer */}
        <div style={{ padding: '0.85rem 1.25rem', borderTop: '1px solid rgba(255, 255, 255, 0.08)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: '#0c101a', fontSize: '0.85rem', color: '#cbd5e1' }}>
          <div>Showing {filteredData.length} of {totalCount} complaints</div>
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            <button onClick={() => setPage(Math.max(1, page - 1))} className="btn-glass" style={{ padding: '0.3rem 0.6rem', fontSize: '0.75rem' }} disabled={page === 1}>
              Previous
            </button>
            <button onClick={() => setPage(page + 1)} className="btn-glass" style={{ padding: '0.3rem 0.6rem', fontSize: '0.75rem' }} disabled={filteredData.length < 15}>
              Next
            </button>
          </div>
        </div>
      </div>

      {/* Complaint Quick View Drawer */}
      <ComplaintQuickViewDrawer
        complaint={selectedComplaint}
        isOpen={!!selectedComplaint}
        onClose={() => setSelectedComplaint(null)}
        onRefresh={loadComplaints}
      />

    </div>
  );
}
