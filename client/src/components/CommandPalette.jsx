import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, MapPin, FileText, Clock, AlertTriangle, TrendingUp, X, ArrowRight, Zap, PlusCircle, Users } from 'lucide-react';

export default function CommandPalette({ isOpen, onClose, onOpenExport }) {
  const navigate = useNavigate();
  const [query, setQuery] = useState('');

  // Handle esc key
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const actions = [
    { title: 'Report a Problem', path: '/report', icon: PlusCircle, category: 'Actions' },
    { title: 'Track Complaint by Code', path: '/citizen/track', icon: Search, category: 'Citizen' },
    { title: 'Field Officer Operations Desk', path: '/officer', icon: Users, category: 'Dispatch' },
    { title: 'City Geospatial Map View', path: '/map', icon: MapPin, category: 'Command' },
    { title: 'Complaints Action Queue', path: '/complaints', icon: FileText, category: 'Command' },
    { title: 'SLA Performance & Breach Monitor', path: '/sla', icon: Clock, category: 'Command' },
    { title: 'Department Workload Intelligence', path: '/departments', icon: TrendingUp, category: 'Command' },
    { title: 'Predictive City Intelligence', path: '/admin/predictions', icon: Zap, category: 'Intelligence' },
  ];

  const handleSelectAction = (path) => {
    navigate(path);
    onClose();
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (query.toUpperCase().startsWith('CIV-')) {
      navigate(`/citizen/track?code=${query.toUpperCase()}`);
    } else {
      navigate(`/complaints?search=${encodeURIComponent(query)}`);
    }
    onClose();
  };

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        background: 'rgba(5, 8, 15, 0.75)',
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
        zIndex: 2500,
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center',
        paddingTop: '10vh',
        animation: 'fadeIn 0.15s ease',
      }}
      onClick={onClose}
    >
      <div
        className="natural-glass-card"
        style={{
          width: '90%',
          maxWidth: '640px',
          background: '#0e1420',
          border: '1px solid rgba(255, 255, 255, 0.15)',
          borderRadius: '0.875rem',
          boxShadow: '0 25px 60px rgba(0, 0, 0, 0.9)',
          overflow: 'hidden',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Command Search Input Bar */}
        <form onSubmit={handleSearchSubmit} style={{ display: 'flex', alignItems: 'center', padding: '1rem 1.25rem', borderBottom: '1px solid rgba(255, 255, 255, 0.08)' }}>
          <Search size={20} color="#34d399" style={{ marginRight: '0.75rem' }} />
          <input
            type="text"
            placeholder="Type a command or search (e.g. CIV-138987-644E, potholes, Ward 14)..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoFocus
            style={{
              flex: 1,
              background: 'transparent',
              border: 'none',
              outline: 'none',
              color: '#ffffff',
              fontSize: '1rem',
              fontWeight: 500,
            }}
          />
          <button
            type="button"
            onClick={onClose}
            style={{ background: 'none', border: 'none', color: '#94a3b8', cursor: 'pointer', padding: '0.25rem' }}
          >
            <X size={18} />
          </button>
        </form>

        {/* Quick Actions List */}
        <div style={{ maxHeight: '380px', overflowY: 'auto', padding: '0.75rem' }}>
          <div style={{ fontSize: '0.72rem', fontWeight: 700, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.05em', padding: '0.4rem 0.6rem 0.6rem' }}>
            Quick Navigation & Actions
          </div>
          {actions.map((action, idx) => {
            const Icon = action.icon;
            return (
              <div
                key={idx}
                onClick={() => handleSelectAction(action.path)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '0.75rem 0.85rem',
                  borderRadius: '0.5rem',
                  cursor: 'pointer',
                  color: '#cbd5e1',
                  transition: 'all 0.15s ease',
                  marginBottom: '0.2rem',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.06)';
                  e.currentTarget.style.color = '#ffffff';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'transparent';
                  e.currentTarget.style.color = '#cbd5e1';
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <div style={{ width: '32px', height: '32px', borderRadius: '0.375rem', background: 'rgba(16, 185, 129, 0.1)', color: '#34d399', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Icon size={16} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.9rem', fontWeight: 600 }}>{action.title}</div>
                    <div style={{ fontSize: '0.72rem', color: '#64748b' }}>{action.category}</div>
                  </div>
                </div>
                <ArrowRight size={16} color="#64748b" />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
