import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, Bell, Plus, User, Command, FileSpreadsheet, Menu, LogOut, Shield, CheckCircle2, ChevronDown, Sparkles } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export default function Header({ title, onOpenCommand, onOpenNotifications, onOpenExport, onToggleMobileSidebar }) {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);

  const initial = user?.name ? user.name.charAt(0).toUpperCase() : 'M';
  const role = user?.role || 'OFFICER';

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
      zIndex: 900,
    }}>
      {/* Left Title & Mobile/Desktop Menu Toggle Button */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
        <button
          onClick={onToggleMobileSidebar}
          style={{
            background: 'rgba(255,255,255,0.08)',
            border: '1px solid rgba(255,255,255,0.15)',
            color: '#ffffff',
            padding: '0.5rem',
            borderRadius: '0.5rem',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'background 0.2s',
          }}
          title="Toggle Navigation Menu"
        >
          <Menu size={22} />
        </button>

        <div>
          <h2 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#ffffff' }}>
            {title || 'CivicOS Municipal Operating System'}
          </h2>
          <div style={{ fontSize: '0.75rem', color: '#94a3b8' }}>
            Good evening, {user?.name || 'Chief Officer Rajesh Kumar'} • Here's what is happening across your city today.
          </div>
        </div>
      </div>

      {/* Quick Search & Actions */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', flexWrap: 'wrap', position: 'relative' }}>
        
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
        <Link to="/report" className="btn-sage" style={{ padding: '0.45rem 0.9rem', fontSize: '0.85rem', textDecoration: 'none' }}>
          <Plus size={16} /> Report Problem
        </Link>

        {/* User Badge Avatar Button (Interactive Modal Trigger) */}
        <div style={{ position: 'relative' }}>
          <button
            onClick={() => setUserDropdownOpen(!userDropdownOpen)}
            style={{
              width: '38px',
              height: '38px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #059669 0%, #0d9488 100%)',
              color: 'white',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 800,
              fontSize: '1rem',
              border: '2px solid rgba(16, 185, 129, 0.5)',
              boxShadow: '0 0 12px rgba(16, 185, 129, 0.3)',
              cursor: 'pointer',
              transition: 'transform 0.2s ease',
            }}
            title="User Profile & Quick Actions"
          >
            {initial}
          </button>

          {/* User Profile Dropdown Menu */}
          {userDropdownOpen && (
            <div style={{
              position: 'absolute',
              top: '50px',
              right: 0,
              width: '260px',
              background: '#121722',
              border: '1px solid rgba(255, 255, 255, 0.12)',
              borderRadius: '0.75rem',
              boxShadow: '0 20px 40px rgba(0, 0, 0, 0.8)',
              padding: '1rem',
              zIndex: 1100,
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.85rem', paddingBottom: '0.75rem', borderBottom: '1px solid rgba(255, 255, 255, 0.08)' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#059669', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: '1.1rem' }}>
                  {initial}
                </div>
                <div>
                  <div style={{ fontWeight: 800, color: '#ffffff', fontSize: '0.9rem' }}>
                    {user?.name || 'Chief Officer Rajesh Kumar'}
                  </div>
                  <div style={{ fontSize: '0.72rem', color: '#34d399', fontWeight: 700, textTransform: 'uppercase' }}>
                    {role} • Ward 14
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', marginBottom: '0.85rem' }}>
                <Link to="/officer" onClick={() => setUserDropdownOpen(false)} style={{ textDecoration: 'none', color: '#cbd5e1', fontSize: '0.82rem', padding: '0.4rem 0.6rem', borderRadius: '0.35rem', background: 'rgba(255,255,255,0.03)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Shield size={14} color="#60a5fa" /> Field Officer Desk
                </Link>
                <Link to="/admin" onClick={() => setUserDropdownOpen(false)} style={{ textDecoration: 'none', color: '#cbd5e1', fontSize: '0.82rem', padding: '0.4rem 0.6rem', borderRadius: '0.35rem', background: 'rgba(255,255,255,0.03)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Sparkles size={14} color="#34d399" /> Command Overview
                </Link>
                <Link to="/report" onClick={() => setUserDropdownOpen(false)} style={{ textDecoration: 'none', color: '#cbd5e1', fontSize: '0.82rem', padding: '0.4rem 0.6rem', borderRadius: '0.35rem', background: 'rgba(255,255,255,0.03)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Plus size={14} color="#f59e0b" /> Report Civic Problem
                </Link>
              </div>

              <button
                onClick={() => {
                  setUserDropdownOpen(false);
                  logout();
                  navigate('/login');
                }}
                className="btn-glass"
                style={{ width: '100%', justifyContent: 'center', color: '#f87171', borderColor: 'rgba(239, 68, 68, 0.3)', fontSize: '0.8rem', padding: '0.4rem' }}
              >
                <LogOut size={14} /> Log Out
              </button>
            </div>
          )}
        </div>

      </div>
    </header>
  );
}
