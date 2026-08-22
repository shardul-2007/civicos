import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, Bell, Plus, User, Command, FileSpreadsheet, Menu, LogOut, Shield, CheckCircle2, ChevronDown, Sparkles, X } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useLanguage } from '../context/LanguageContext';
import LanguageSelector from './LanguageSelector';

export default function Header({ title, onOpenCommand, onOpenNotifications, onOpenExport, onToggleMobileSidebar }) {
  const { user, logout } = useAuth();
  const { t } = useLanguage();
  const navigate = useNavigate();
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);

  const initial = user?.name ? user.name.charAt(0).toUpperCase() : 'M';
  const role = user?.role || 'OFFICER';

  return (
    <header style={{
      background: '#0c101a',
      borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
      padding: '0.75rem 1rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      gap: '0.65rem',
      position: 'sticky',
      top: 0,
      width: '100%',
      maxWidth: '100vw',
      boxSizing: 'border-box',
      zIndex: 900,
    }}>
      {/* Left Title & Mobile/Desktop Menu Toggle Button */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', maxWidth: '100%' }}>
        <button
          onClick={onToggleMobileSidebar}
          style={{
            background: 'rgba(255,255,255,0.08)',
            border: '1px solid rgba(255,255,255,0.15)',
            color: '#ffffff',
            padding: '0.45rem',
            borderRadius: '0.5rem',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
          }}
          title="Toggle Navigation Menu"
        >
          <Menu size={20} />
        </button>

        <div style={{ overflow: 'hidden' }}>
          <h2 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#ffffff', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
            {title || t('welcomeTitle')}
          </h2>
          <div className="desktop-only" style={{ fontSize: '0.72rem', color: '#94a3b8' }}>
            {user?.name ? `${user.name} • ` : ''}{t('welcomeSubtitle')}
          </div>
        </div>
      </div>

      {/* Quick Search & Actions Bar */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap', position: 'relative', maxWidth: '100%', overflow: 'visible', zIndex: 950 }}>
        
        {/* Language Selector Dropdown (English / Hindi / Marathi) */}
        <LanguageSelector compact alignLeft />

        {/* Global Search Bar (Triggers Ctrl+K Command Palette) */}
        <button
          onClick={onOpenCommand}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.4rem',
            background: '#0f141f',
            border: '1px solid rgba(255, 255, 255, 0.12)',
            padding: '0.4rem 0.65rem',
            borderRadius: '0.5rem',
            color: '#94a3b8',
            fontSize: '0.8rem',
            cursor: 'pointer',
            maxWidth: '180px',
          }}
        >
          <Search size={14} />
          <span style={{ flex: 1, textAlign: 'left', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{t('searchPlaceholder')}</span>
          <kbd className="desktop-only" style={{ background: '#121722', border: '1px solid rgba(255, 255, 255, 0.15)', color: '#cbd5e1', borderRadius: '4px', padding: '0.1rem 0.3rem', fontSize: '0.65rem', fontWeight: 700 }}>
            Ctrl K
          </kbd>
        </button>

        {/* Export Municipal Report */}
        <button
          onClick={onOpenExport}
          className="btn-glass"
          style={{ padding: '0.4rem 0.65rem', fontSize: '0.8rem' }}
          title={t('exportReport')}
        >
          <FileSpreadsheet size={15} />
          <span className="desktop-only">{t('exportReport').split(' ')[0]}</span>
        </button>

        {/* Notifications Trigger */}
        <button
          onClick={onOpenNotifications}
          style={{
            position: 'relative',
            background: '#0f141f',
            border: '1px solid rgba(255, 255, 255, 0.12)',
            width: '36px',
            height: '36px',
            borderRadius: '0.5rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#cbd5e1',
            cursor: 'pointer',
            flexShrink: 0,
          }}
          title={t('notifications')}
        >
          <Bell size={16} />
          <span style={{ position: 'absolute', top: '5px', right: '5px', width: '7px', height: '7px', background: '#ef4444', borderRadius: '50%' }}></span>
        </button>

        {/* Quick Report Issue Button */}
        <Link to="/report" className="btn-sage" style={{ padding: '0.4rem 0.75rem', fontSize: '0.8rem', textDecoration: 'none', whiteSpace: 'nowrap' }}>
          <Plus size={15} /> <span className="desktop-only">{t('reportProblem')}</span>
        </Link>

        {/* User Badge Avatar Button (Interactive Modal Trigger) */}
        <div style={{ position: 'relative' }}>
          <button
            onClick={() => setUserDropdownOpen(!userDropdownOpen)}
            style={{
              width: '36px',
              height: '36px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #059669 0%, #0d9488 100%)',
              color: 'white',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 800,
              fontSize: '0.9rem',
              border: '2px solid rgba(16, 185, 129, 0.5)',
              boxShadow: '0 0 10px rgba(16, 185, 129, 0.3)',
              cursor: 'pointer',
              flexShrink: 0,
            }}
            title="User Profile & Quick Actions"
          >
            {initial}
          </button>

          {/* User Profile Dropdown Menu or Mobile Centered Sheet */}
          {userDropdownOpen && (
            window.innerWidth <= 767 ? (
              /* Mobile Fixed Backdrop Modal */
              <div
                style={{
                  position: 'fixed',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  width: '100vw',
                  height: '100vh',
                  background: 'rgba(5, 8, 15, 0.88)',
                  backdropFilter: 'blur(12px)',
                  WebkitBackdropFilter: 'blur(12px)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '1.25rem',
                  zIndex: 9999999,
                }}
                onClick={() => setUserDropdownOpen(false)}
              >
                <div
                  onClick={(e) => e.stopPropagation()}
                  style={{
                    background: '#121722',
                    border: '1.5px solid rgba(16, 185, 129, 0.5)',
                    borderRadius: '1.25rem',
                    width: '100%',
                    maxWidth: '350px',
                    padding: '1.5rem',
                    boxShadow: '0 25px 60px rgba(0,0,0,0.95)',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1rem',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '0.75rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                      <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'linear-gradient(135deg, #059669 0%, #0d9488 100%)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: '1.1rem' }}>
                        {initial}
                      </div>
                      <div>
                        <div style={{ fontWeight: 800, color: '#ffffff', fontSize: '0.95rem' }}>
                          {user?.name || 'Chief Officer Rajesh Kumar'}
                        </div>
                        <div style={{ fontSize: '0.72rem', color: '#34d399', fontWeight: 700, textTransform: 'uppercase' }}>
                          {role} • Ward 14
                        </div>
                      </div>
                    </div>
                    <button
                      onClick={() => setUserDropdownOpen(false)}
                      style={{ background: 'rgba(255,255,255,0.08)', border: 'none', color: '#94a3b8', width: '32px', height: '32px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}
                    >
                      <X size={16} />
                    </button>
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    <Link to="/officer" onClick={() => setUserDropdownOpen(false)} style={{ textDecoration: 'none', color: '#ffffff', fontSize: '0.9rem', padding: '0.6rem 0.75rem', borderRadius: '0.5rem', background: 'rgba(255,255,255,0.04)', display: 'flex', alignItems: 'center', gap: '0.6rem', fontWeight: 600 }}>
                      <Shield size={16} color="#60a5fa" /> {t('fieldDesk')}
                    </Link>
                    <Link to="/admin" onClick={() => setUserDropdownOpen(false)} style={{ textDecoration: 'none', color: '#ffffff', fontSize: '0.9rem', padding: '0.6rem 0.75rem', borderRadius: '0.5rem', background: 'rgba(255,255,255,0.04)', display: 'flex', alignItems: 'center', gap: '0.6rem', fontWeight: 600 }}>
                      <Sparkles size={16} color="#34d399" /> {t('commandCenter')}
                    </Link>
                    <Link to="/report" onClick={() => setUserDropdownOpen(false)} style={{ textDecoration: 'none', color: '#ffffff', fontSize: '0.9rem', padding: '0.6rem 0.75rem', borderRadius: '0.5rem', background: 'rgba(255,255,255,0.04)', display: 'flex', alignItems: 'center', gap: '0.6rem', fontWeight: 600 }}>
                      <Plus size={16} color="#f59e0b" /> {t('reportProblem')}
                    </Link>
                  </div>

                  <button
                    onClick={() => {
                      setUserDropdownOpen(false);
                      logout();
                      navigate('/login');
                    }}
                    className="btn-glass"
                    style={{ width: '100%', justifyContent: 'center', color: '#f87171', borderColor: 'rgba(239, 68, 68, 0.4)', fontSize: '0.9rem', padding: '0.65rem', fontWeight: 700, marginTop: '0.25rem' }}
                  >
                    <LogOut size={16} /> {t('logout')}
                  </button>
                </div>
              </div>
            ) : (
              /* Desktop Popover */
              <div style={{
                position: 'absolute',
                top: '46px',
                right: 0,
                width: '240px',
                background: '#121722',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                borderRadius: '0.75rem',
                boxShadow: '0 20px 40px rgba(0, 0, 0, 0.8)',
                padding: '0.85rem',
                zIndex: 1100,
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '0.75rem', paddingBottom: '0.65rem', borderBottom: '1px solid rgba(255, 255, 255, 0.08)' }}>
                  <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: '#059669', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: '1rem' }}>
                    {initial}
                  </div>
                  <div>
                    <div style={{ fontWeight: 800, color: '#ffffff', fontSize: '0.85rem' }}>
                      {user?.name || 'Chief Officer Rajesh Kumar'}
                    </div>
                    <div style={{ fontSize: '0.7rem', color: '#34d399', fontWeight: 700, textTransform: 'uppercase' }}>
                      {role} • Ward 14
                    </div>
                  </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem', marginBottom: '0.75rem' }}>
                  <Link to="/officer" onClick={() => setUserDropdownOpen(false)} style={{ textDecoration: 'none', color: '#cbd5e1', fontSize: '0.8rem', padding: '0.35rem 0.5rem', borderRadius: '0.35rem', background: 'rgba(255,255,255,0.03)', display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
                    <Shield size={14} color="#60a5fa" /> {t('fieldDesk')}
                  </Link>
                  <Link to="/admin" onClick={() => setUserDropdownOpen(false)} style={{ textDecoration: 'none', color: '#cbd5e1', fontSize: '0.8rem', padding: '0.35rem 0.5rem', borderRadius: '0.35rem', background: 'rgba(255,255,255,0.03)', display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
                    <Sparkles size={14} color="#34d399" /> {t('commandCenter')}
                  </Link>
                  <Link to="/report" onClick={() => setUserDropdownOpen(false)} style={{ textDecoration: 'none', color: '#cbd5e1', fontSize: '0.8rem', padding: '0.35rem 0.5rem', borderRadius: '0.35rem', background: 'rgba(255,255,255,0.03)', display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
                    <Plus size={14} color="#f59e0b" /> {t('reportProblem')}
                  </Link>
                </div>

                <button
                  onClick={() => {
                    setUserDropdownOpen(false);
                    logout();
                    navigate('/login');
                  }}
                  className="btn-glass"
                  style={{ width: '100%', justifyContent: 'center', color: '#f87171', borderColor: 'rgba(239, 68, 68, 0.3)', fontSize: '0.78rem', padding: '0.35rem' }}
                >
                  <LogOut size={14} /> {t('logout')}
                </button>
              </div>
            )
          )}
        </div>

      </div>
    </header>
  );
}
