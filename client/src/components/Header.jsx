import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, Bell, Plus, User, Command, FileSpreadsheet, Menu } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export default function Header({ title, onOpenCommand, onOpenNotifications, onOpenExport, onToggleMobileSidebar }) {
  const { user } = useAuth();
  const navigate = useNavigate();

  return (
    <header style={{
      background: '#0c101a',
      borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
      padding: '1rem 1.5rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      gap: '1rem',
      position: 'sticky',
      top: 0,
      zIndex: 'var(--z-header)', // --z-header: 700
    }}>
      {/* Left Title & Mobile Menu Button */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
        {onToggleMobileSidebar && (
          <button
            onClick={onToggleMobileSidebar}
            style={{
              background: 'rgba(255,255,255,0.06)',
              border: '1px solid rgba(255,255,255,0.1)',
              color: '#ffffff',
              padding: '0.4rem',
              borderRadius: '0.4rem',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            title="Toggle Menu"
          >
            <Menu size={20} />
          </button>
        )}

        <div>
          <h2 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#ffffff' }}>
            {title || 'City Operations Overview'}
          </h2>
          <div style={{ fontSize: '0.75rem', color: '#94a3b8' }}>
            Good evening, {user?.name || 'Administrator'} • Here's what is happening across your city today.
          </div>
        </div>
      </div>

      {/* Quick Search & Actions */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', flexWrap: 'wrap' }}>
        
        {/* Global Search Bar (Triggers Ctrl+K Command Palette) */}
        <button
          onClick={onOpenCommand}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.6rem',
            background: '#0f141f',
            border: '1px solid rgba(255, 255, 255, 0.12)',
            padding: '0.45rem 0.85rem',
            borderRadius: '0.5rem',
            color: '#94a3b8',
            fontSize: '0.85rem',
            cursor: 'pointer',
            minWidth: '200px',
          }}
        >
          <Search size={15} />
          <span style={{ flex: 1, textAlign: 'left' }}>Search complaints, wards...</span>
          <kbd style={{ background: '#121722', border: '1px solid rgba(255, 255, 255, 0.15)', color: '#cbd5e1', borderRadius: '4px', padding: '0.1rem 0.35rem', fontSize: '0.7rem', fontWeight: 700 }}>
            Ctrl K
          </kbd>
        </button>

        {/* Export Municipal Report */}
        <button
          onClick={onOpenExport}
          className="btn-glass"
          style={{ padding: '0.45rem 0.85rem', fontSize: '0.85rem' }}
          title="Export Municipal Report"
        >
          <FileSpreadsheet size={16} /> Export Report
        </button>

        {/* Notifications Trigger */}
        <button
          onClick={onOpenNotifications}
          style={{
            position: 'relative',
            background: '#0f141f',
            border: '1px solid rgba(255, 255, 255, 0.12)',
            width: '38px',
            height: '38px',
            borderRadius: '0.5rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#cbd5e1',
            cursor: 'pointer',
          }}
          title="Notifications"
        >
          <Bell size={18} />
          <span style={{ position: 'absolute', top: '6px', right: '6px', width: '8px', height: '8px', background: '#ef4444', borderRadius: '50%' }}></span>
        </button>

        {/* Quick Report Issue Button */}
        <Link to="/report" className="btn-sage" style={{ padding: '0.45rem 0.9rem', fontSize: '0.85rem' }}>
          <Plus size={16} /> Report Problem
        </Link>

        {/* User Badge */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', paddingLeft: '0.5rem', borderLeft: '1px solid rgba(255, 255, 255, 0.1)' }}>
          <div style={{ width: '34px', height: '34px', borderRadius: '50%', background: '#059669', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: '0.85rem' }}>
            {user?.name ? user.name.charAt(0) : 'A'}
          </div>
        </div>

      </div>
    </header>
  );
}
