import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, MapPin, FileText, Clock, AlertTriangle, TrendingUp, X, ArrowRight, Zap, PlusCircle, Users } from 'lucide-react';

export default function CommandPalette({ isOpen, onClose, onOpenExport }) {
  if (!isOpen) return null;

  const navigate = useNavigate();
  const [query, setQuery] = useState('');

  // Handle esc key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

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
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
        zIndex: 800, // --z-command
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center',
        paddingTop: '10vh',
        paddingLeft: '1rem',
        paddingRight: '1rem',
        animation: 'fadeIn 0.2s ease',
      }}
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          background: '#121722',
          border: '1px solid rgba(255, 255, 255, 0.15)',
          borderRadius: '0.75rem',
          width: '100%',
          maxWidth: '600px',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.8)',
          overflow: 'hidden',
        }}
      >
        {/* Search Input Bar */}
        <form
          onSubmit={handleSearchSubmit}
          style={{
            display: 'flex',
            alignItems: 'center',
            padding: '1rem 1.25rem',
            borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
            gap: '0.75rem',
            background: '#0a0d14',
          }}
        >
          <Search size={20} color="#34d399" />
          <input
            type="text"
            style={{
              flex: 1,
              background: 'transparent',
              border: 'none',
              outline: 'none',
              fontSize: '1rem',
              color: '#ffffff',
              fontFamily: 'inherit',
            }}
            placeholder="Search complaint code (CIV-XXXXXX), ward, category..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoFocus
          />
          <button
            type="button"
            onClick={onClose}
            style={{
              background: 'rgba(255, 255, 255, 0.06)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '0.4rem',
              color: '#94a3b8',
              cursor: 'pointer',
              width: '28px',
              height: '28px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <X size={16} />
          </button>
        </form>

        {/* Quick Commands List */}
        <div style={{ padding: '0.75rem', maxHeight: '380px', overflowY: 'auto' }}>
          <div style={{ fontSize: '0.7rem', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 700, padding: '0.4rem 0.75rem' }}>
            Quick Action Commands
          </div>

          {actions.map((act, i) => {
            const Icon = act.icon;
            return (
              <div
                key={i}
                onClick={() => handleSelectAction(act.path)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '0.75rem 0.85rem',
                  borderRadius: '0.5rem',
                  cursor: 'pointer',
                  fontSize: '0.9rem',
                  color: '#f8fafc',
                  transition: 'background 0.15s, color 0.15s',
                  minHeight: '44px',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.06)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'transparent';
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <div style={{ background: 'rgba(16, 185, 129, 0.12)', border: '1px solid rgba(16, 185, 129, 0.25)', width: '32px', height: '32px', borderRadius: '0.4rem', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#34d399' }}>
                    <Icon size={16} />
                  </div>
                  <div>
                    <div style={{ fontWeight: 600 }}>{act.title}</div>
                    <div style={{ fontSize: '0.7rem', color: '#64748b' }}>{act.category}</div>
                  </div>
                </div>
                <ArrowRight size={14} color="#94a3b8" />
              </div>
            );
          })}

          <div
            onClick={() => {
              onClose();
              if (onOpenExport) onOpenExport();
            }}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '0.75rem 0.85rem',
              borderRadius: '0.5rem',
              cursor: 'pointer',
              fontSize: '0.9rem',
              color: '#34d399',
              fontWeight: 600,
              background: 'rgba(16, 185, 129, 0.1)',
              border: '1px solid rgba(16, 185, 129, 0.25)',
              marginTop: '0.5rem',
              minHeight: '44px',
            }}
          >
            <span>📊 Generate Municipal Intelligence Report (PDF/CSV)</span>
            <ArrowRight size={14} color="#34d399" />
          </div>
        </div>
      </div>
    </div>
  );
}

