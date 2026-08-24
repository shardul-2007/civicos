import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import {
  Shield, Radio, ArrowRight, User, LogOut, FileText, Menu, X, PlusCircle, Search, Sparkles, Home, Clock, Layers, Globe
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useLanguage } from '../context/LanguageContext';
import LanguageSelector from '../components/LanguageSelector';

export default function Navbar() {
  const { user, logout } = useAuth();
  const { lang, changeLanguage, t } = useLanguage();
  const location = useLocation();
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogout = () => {
    setMobileMenuOpen(false);
    logout();
    navigate('/login');
  };

  const role = user?.role || 'CITIZEN';

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        width: '100%',
        zIndex: 900,
        background: scrolled ? 'rgba(10, 13, 20, 0.98)' : 'rgba(10, 13, 20, 0.94)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
        boxShadow: scrolled ? '0 10px 30px -10px rgba(0,0,0,0.8)' : 'none',
        transition: 'all 0.3s ease',
        overflow: 'visible',
      }}
    >
      <div
        style={{
          maxWidth: '1400px',
          margin: '0 auto',
          padding: '0.65rem 0.85rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'nowrap',
          gap: '0.5rem',
        }}
      >
        {/* Left: Brand Logo */}
        <Link to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem', flexShrink: 0 }}>
          <div
            style={{
              background: 'linear-gradient(135deg, #059669 0%, #0d9488 100%)',
              width: '34px',
              height: '34px',
              borderRadius: '99px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              boxShadow: '0 0 12px rgba(16, 185, 129, 0.4)',
            }}
          >
            <Shield size={18} />
          </div>
          <div>
            <div style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 800, fontSize: '1.05rem', letterSpacing: '-0.02em', color: '#ffffff', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
              CivicOS <span style={{ fontSize: '0.6rem', padding: '0.1rem 0.35rem', background: '#059669', color: 'white', borderRadius: '4px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>v2.5</span>
            </div>
            <div style={{ fontSize: '0.6rem', color: '#94a3b8' }}>Municipal Operating System</div>
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <nav className="desktop-only" style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
          <Link to="/" style={{ textDecoration: 'none', color: location.pathname === '/' ? '#34d399' : '#cbd5e1', fontWeight: 600, fontSize: '0.85rem' }}>
            {t('howItWorks')}
          </Link>
          <Link to="/interoperability" style={{ textDecoration: 'none', color: location.pathname === '/interoperability' ? '#34d399' : '#60a5fa', fontWeight: 700, fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
            <Globe size={14} color="#60a5fa" /> Interoperability
          </Link>
          <Link to="/ai" style={{ textDecoration: 'none', color: location.pathname === '/ai' ? '#34d399' : '#cbd5e1', fontWeight: 600, fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
            <Sparkles size={14} color="#60a5fa" /> {t('intelligence')}
          </Link>
          <Link to="/admin" style={{ textDecoration: 'none', color: location.pathname === '/admin' ? '#34d399' : '#cbd5e1', fontWeight: 600, fontSize: '0.85rem' }}>
            {t('platform')}
          </Link>
        </nav>

        {/* Right Action Controls Bar */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', flexShrink: 0 }}>
          {/* Language Selector Button (English / Hindi / Marathi) - Always Visible */}
          <LanguageSelector compact />

          <Link to="/citizen/track" className="btn-glass desktop-only" style={{ padding: '0.4rem 0.75rem', fontSize: '0.8rem', textDecoration: 'none' }}>
            <Search size={14} color="#34d399" /> {t('trackIssue')}
          </Link>

          <Link to="/report" className="btn-sage desktop-only" style={{ padding: '0.4rem 0.75rem', fontSize: '0.8rem', textDecoration: 'none' }}>
            <PlusCircle size={14} /> {t('reportIssue')}
          </Link>

          {user ? (
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', paddingLeft: '0.2rem' }}>
              <span style={{ fontSize: '0.8rem', color: '#34d399', fontWeight: 700 }} className="desktop-only">
                {user.name ? user.name.split(' ')[0] : 'User'}
              </span>
              <button onClick={handleLogout} title="Logout" className="btn-glass" style={{ padding: '0.4rem', color: '#f87171', borderColor: 'rgba(239,68,68,0.3)' }}>
                <LogOut size={14} />
              </button>
            </div>
          ) : (
            <Link to="/login" className="btn-glass desktop-only" style={{ textDecoration: 'none', color: '#ffffff', fontSize: '0.8rem', fontWeight: 600, padding: '0.4rem 0.75rem' }}>
              {t('login')}
            </Link>
          )}

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="mobile-only"
            style={{ background: 'none', border: 'none', color: '#ffffff', cursor: 'pointer', padding: '0.4rem', borderRadius: '0.375rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            title="Toggle Menu"
          >
            {mobileMenuOpen ? <X size={22} color="#34d399" /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu (Contains ALL Laptop-equivalent functions fully operational) */}
      {mobileMenuOpen && (
        <div style={{ background: '#121722', borderTop: '1px solid rgba(255,255,255,0.08)', padding: '0.85rem 1rem', display: 'flex', flexDirection: 'column', gap: '0.6rem', boxShadow: '0 20px 40px rgba(0,0,0,0.9)', maxHeight: '85vh', overflowY: 'auto' }}>
          
          {/* User Profile Banner if Logged In */}
          {user && (
            <div style={{ padding: '0.6rem 0.75rem', background: 'rgba(16, 185, 129, 0.1)', border: '1px solid rgba(16, 185, 129, 0.3)', borderRadius: '0.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div>
                <div style={{ fontWeight: 800, color: '#ffffff', fontSize: '0.85rem' }}>{user.name || 'User Account'}</div>
                <div style={{ fontSize: '0.7rem', color: '#34d399', fontWeight: 700 }}>{role} • Ward 14</div>
              </div>
              <button onClick={handleLogout} className="btn-glass" style={{ padding: '0.3rem 0.6rem', fontSize: '0.75rem', color: '#f87171', borderColor: 'rgba(239,68,68,0.3)' }}>
                <LogOut size={12} /> {t('logout')}
              </button>
            </div>
          )}

          {/* Language Selector Row */}
          <div style={{ paddingBottom: '0.6rem', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
            <div style={{ fontSize: '0.7rem', fontWeight: 700, color: '#94a3b8', textTransform: 'uppercase', marginBottom: '0.35rem', letterSpacing: '0.05em' }}>
              Language / भाषा / भाषा निवडा:
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.4rem' }}>
              {[
                { code: 'en', label: 'English 🇬🇧' },
                { code: 'hi', label: 'हिंदी 🇮🇳' },
                { code: 'mr', label: 'मराठी 🇮🇳' },
              ].map(item => (
                <button
                  key={item.code}
                  type="button"
                  onClick={() => {
                    changeLanguage(item.code);
                  }}
                  className="btn-glass"
                  style={{
                    padding: '0.45rem 0.2rem',
                    fontSize: '0.78rem',
                    fontWeight: 700,
                    justifyContent: 'center',
                    background: lang === item.code ? 'rgba(16,185,129,0.25)' : 'rgba(255,255,255,0.03)',
                    color: lang === item.code ? '#34d399' : '#ffffff',
                    borderColor: lang === item.code ? 'rgba(16,185,129,0.5)' : 'rgba(255,255,255,0.1)',
                  }}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Complete Navigation Links */}
          <Link to="/" onClick={() => setMobileMenuOpen(false)} style={{ textDecoration: 'none', color: '#ffffff', fontSize: '0.88rem', padding: '0.55rem 0.75rem', borderRadius: '0.5rem', background: 'rgba(255,255,255,0.03)', display: 'flex', alignItems: 'center', gap: '0.6rem', fontWeight: 600 }}>
            <Home size={16} color="#34d399" /> {t('howItWorks')}
          </Link>

          <Link to="/interoperability" onClick={() => setMobileMenuOpen(false)} style={{ textDecoration: 'none', color: '#60a5fa', fontSize: '0.88rem', padding: '0.55rem 0.75rem', borderRadius: '0.5rem', background: 'rgba(59,130,246,0.12)', display: 'flex', alignItems: 'center', gap: '0.6rem', fontWeight: 700 }}>
            <Globe size={16} color="#60a5fa" /> Interoperability Center (SIH 2026)
          </Link>

          <Link to="/report" onClick={() => setMobileMenuOpen(false)} style={{ textDecoration: 'none', color: '#ffffff', fontSize: '0.88rem', padding: '0.55rem 0.75rem', borderRadius: '0.5rem', background: '#059669', display: 'flex', alignItems: 'center', gap: '0.6rem', fontWeight: 700 }}>
            <PlusCircle size={16} /> {t('reportIssue')}
          </Link>

          <Link to="/citizen/track" onClick={() => setMobileMenuOpen(false)} style={{ textDecoration: 'none', color: '#ffffff', fontSize: '0.88rem', padding: '0.55rem 0.75rem', borderRadius: '0.5rem', background: 'rgba(255,255,255,0.03)', display: 'flex', alignItems: 'center', gap: '0.6rem', fontWeight: 600 }}>
            <Search size={16} color="#34d399" /> {t('trackIssue')}
          </Link>

          <Link to="/citizen/history" onClick={() => setMobileMenuOpen(false)} style={{ textDecoration: 'none', color: '#ffffff', fontSize: '0.88rem', padding: '0.55rem 0.75rem', borderRadius: '0.5rem', background: 'rgba(255,255,255,0.03)', display: 'flex', alignItems: 'center', gap: '0.6rem', fontWeight: 600 }}>
            <Clock size={16} color="#34d399" /> Citizen Portal & History
          </Link>

          <Link to="/officer" onClick={() => setMobileMenuOpen(false)} style={{ textDecoration: 'none', color: '#ffffff', fontSize: '0.88rem', padding: '0.55rem 0.75rem', borderRadius: '0.5rem', background: 'rgba(255,255,255,0.03)', display: 'flex', alignItems: 'center', gap: '0.6rem', fontWeight: 600 }}>
            <Shield size={16} color="#60a5fa" /> Field Officer Desk
          </Link>

          <Link to="/admin" onClick={() => setMobileMenuOpen(false)} style={{ textDecoration: 'none', color: '#ffffff', fontSize: '0.88rem', padding: '0.55rem 0.75rem', borderRadius: '0.5rem', background: 'rgba(255,255,255,0.03)', display: 'flex', alignItems: 'center', gap: '0.6rem', fontWeight: 600 }}>
            <Radio size={16} color="#34d399" /> {t('platform')} / {t('commandCenter')}
          </Link>

          <Link to="/ai" onClick={() => setMobileMenuOpen(false)} style={{ textDecoration: 'none', color: '#ffffff', fontSize: '0.88rem', padding: '0.55rem 0.75rem', borderRadius: '0.5rem', background: 'rgba(255,255,255,0.03)', display: 'flex', alignItems: 'center', gap: '0.6rem', fontWeight: 600 }}>
            <Sparkles size={16} color="#60a5fa" /> {t('intelligence')} Command
          </Link>

          {!user ? (
            <Link to="/login" onClick={() => setMobileMenuOpen(false)} style={{ textDecoration: 'none', color: '#ffffff', fontSize: '0.88rem', padding: '0.55rem 0.75rem', borderRadius: '0.5rem', background: 'rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', gap: '0.6rem', fontWeight: 600, border: '1px solid rgba(255,255,255,0.1)' }}>
              <User size={16} color="#34d399" /> {t('login')}
            </Link>
          ) : (
            <button
              onClick={handleLogout}
              className="btn-glass"
              style={{
                width: '100%',
                justifyContent: 'center',
                color: '#f87171',
                borderColor: 'rgba(239, 68, 68, 0.4)',
                fontSize: '0.88rem',
                padding: '0.6rem',
                fontWeight: 700,
                marginTop: '0.25rem',
              }}
            >
              <LogOut size={16} /> {t('logout')}
            </button>
          )}
        </div>
      )}
    </header>
  );
}
