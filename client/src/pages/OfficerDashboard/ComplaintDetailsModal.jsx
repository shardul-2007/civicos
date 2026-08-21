import React, { useState } from 'react';
import { X, CheckCircle2, AlertTriangle, Shield, Clock, MapPin, User, FileText, Send, Building } from 'lucide-react';
import { complaintAPI } from '../../services/api';

export default function ComplaintDetailsModal({ complaint, onClose, onRefresh }) {
  if (!complaint) return null;

  const [status, setStatus] = useState(complaint.status);
  const [note, setNote] = useState('');
  const [updating, setUpdating] = useState(false);
  const [message, setMessage] = useState('');

  const handleUpdateStatus = async (e) => {
    e.preventDefault();
    setUpdating(true);
    setMessage('');

    try {
      const res = await complaintAPI.updateStatus(complaint._id, { status, note });
      if (res.data.success) {
        setMessage('Status updated successfully');
        if (onRefresh) onRefresh();
      }
    } catch (err) {
      setMessage('Failed to update status.');
    } finally {
      setUpdating(false);
    }
  };

  return (
    <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.75)', backdropFilter: 'blur(4px)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000, padding: '1rem' }}>
      <div className="glass-card-dark" style={{ width: '100%', maxWidth: '800px', maxHeight: '90vh', overflowY: 'auto', padding: '2rem', border: '1px solid #334155' }}>
        
        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem', borderBottom: '1px solid #1e293b', paddingBottom: '1rem' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span style={{ fontFamily: 'monospace', fontSize: '1.25rem', fontWeight: 800, color: '#60a5fa' }}>{complaint.trackingCode}</span>
              <span className={`badge ${complaint.severity === 'CRITICAL' || complaint.severity === 'HIGH' ? 'badge-critical' : 'badge-medium'}`}>
                {complaint.severity}
              </span>
            </div>
            <h2 style={{ fontSize: '1.4rem', color: '#f8fafc', fontWeight: 700, marginTop: '0.25rem' }}>{complaint.title}</h2>
          </div>
          <button onClick={onClose} style={{ background: 'none', border: 'none', color: '#94a3b8', cursor: 'pointer', padding: '0.5rem' }}>
            <X size={24} />
          </button>
        </div>

        {message && (
          <div style={{ background: 'rgba(16, 185, 129, 0.15)', border: '1px solid #10b981', color: '#10b981', padding: '0.75rem', borderRadius: '0.5rem', marginBottom: '1rem', fontSize: '0.85rem' }}>
            {message}
          </div>
        )}

        {/* Layout Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem', marginBottom: '1.5rem' }}>
          
          {/* Left Details */}
          <div>
            <div style={{ background: '#0f172a', padding: '1rem', borderRadius: '0.5rem', marginBottom: '1rem', border: '1px solid #1e293b' }}>
              <div style={{ fontSize: '0.8rem', color: '#94a3b8', textTransform: 'uppercase', marginBottom: '0.3rem' }}>Description</div>
              <p style={{ fontSize: '0.9rem', color: '#cbd5e1', lineHeight: 1.5 }}>{complaint.description}</p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', fontSize: '0.85rem', color: '#cbd5e1' }}>
              <div>
                <span style={{ color: '#94a3b8' }}>Category:</span><br />
                <strong>{complaint.category}</strong>
              </div>
              <div>
                <span style={{ color: '#94a3b8' }}>Ward:</span><br />
                <strong>Ward {complaint.ward}</strong>
              </div>
              <div>
                <span style={{ color: '#94a3b8' }}>Department:</span><br />
                <strong>{complaint.departmentName}</strong>
              </div>
              <div>
                <span style={{ color: '#94a3b8' }}>Priority Score:</span><br />
                <strong style={{ color: '#f59e0b' }}>{complaint.priorityScore}/100</strong>
              </div>
            </div>

            <div style={{ marginTop: '1rem', fontSize: '0.85rem', color: '#94a3b8' }}>
              <MapPin size={15} style={{ display: 'inline', marginRight: '4px' }} /> <strong>Location:</strong> {complaint.address}
            </div>

            <div style={{ marginTop: '0.5rem', fontSize: '0.85rem', color: '#94a3b8' }}>
              <Clock size={15} style={{ display: 'inline', marginRight: '4px' }} /> <strong>SLA Status:</strong> {complaint.sla?.statusLabel} ({complaint.sla?.hoursRemaining}h remaining)
            </div>
          </div>

          {/* Right Action Panel */}
          <div style={{ background: '#0f172a', padding: '1.25rem', borderRadius: '0.5rem', border: '1px solid #1e293b' }}>
            <h3 style={{ fontSize: '1.05rem', color: '#f8fafc', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <Shield size={18} color="#3b82f6" /> Municipal Action Panel
            </h3>

            <form onSubmit={handleUpdateStatus}>
              <div style={{ marginBottom: '1rem' }}>
                <label style={{ display: 'block', fontSize: '0.8rem', color: '#cbd5e1', marginBottom: '0.4rem', fontWeight: 600 }}>
                  Update Workflow Status
                </label>
                <select
                  className="form-input-dark"
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                >
                  <option value="SUBMITTED">SUBMITTED</option>
                  <option value="ASSIGNED">ASSIGNED</option>
                  <option value="ACCEPTED">ACCEPTED</option>
                  <option value="IN_PROGRESS">IN_PROGRESS</option>
                  <option value="RESOLVED">RESOLVED</option>
                  <option value="REJECTED">REJECTED</option>
                </select>
              </div>

              <div style={{ marginBottom: '1.25rem' }}>
                <label style={{ display: 'block', fontSize: '0.8rem', color: '#cbd5e1', marginBottom: '0.4rem', fontWeight: 600 }}>
                  Audit History Note *
                </label>
                <textarea
                  className="form-input-dark"
                  rows={3}
                  placeholder="Reason for status change or on-site inspection update..."
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                  required
                />
              </div>

              <button type="submit" className="btn-primary" style={{ width: '100%', justifyContent: 'center' }} disabled={updating}>
                {updating ? 'Updating Record...' : 'Update Status & Log Audit'}
              </button>
            </form>
          </div>

        </div>

        {/* Audit History Log */}
        <div style={{ borderTop: '1px solid #1e293b', paddingTop: '1rem' }}>
          <h4 style={{ fontSize: '0.95rem', color: '#f8fafc', marginBottom: '0.75rem' }}>Complaint Audit Timeline</h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.8rem' }}>
            {complaint.history?.map((h, idx) => (
              <div key={idx} style={{ background: 'rgba(255,255,255,0.03)', padding: '0.6rem 0.8rem', borderRadius: '0.4rem', borderLeft: '2px solid #3b82f6' }}>
                <strong style={{ color: '#60a5fa' }}>{h.toStatus}:</strong> {h.note} <span style={{ color: '#64748b' }}>({h.actorName} • {new Date(h.createdAt).toLocaleString()})</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
