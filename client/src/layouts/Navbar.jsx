import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Shield, Radio, ArrowRight, User, LogOut, FileText, Menu, X, PlusCircle, Search, Users } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export default function Navbar() {
  const { user, logout } = useAuth();
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setMobileMenuOpen(false);
    if (location.pathname !== '/') {
      window.location.href = `/#${id}`;
      return;
    }
    const elem = document.getElementById(id);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header style={{
      position: 'sticky',
      top: 0,
      zIndex: 'var(--z-header)',
      background: scrolled ? 'rgba(10, 13, 20, 0.97)' : 'var(--bg-app)',
      backdropFilter: 'blur(16px)',
      WebkitBackdropFilter: 'blur(16px)',
      borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
      transition: 'all 0.3s ease',
    }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0.75rem 1rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.75rem' }}>
        
        {/* Left: Brand Logo */}
        <Link to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
          <div style={{
            background: 'linear-gradient(135deg, #059669 0%, #0d9488 100%)',
            width: '36px',
            height: '36px',
            borderRadius: '10px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            boxShadow: '0 0 12px rgba(16, 185, 129, 0.3)',
          }}>
            <Shield size={20} />
          </div>
          <div>
            <div style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 800, fontSize: '1.15rem', letterSpacing: '-0.02em', color: '#ffffff', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              CivicOS <span style={{ fontSize: '0.65rem', padding: '0.15rem 0.4rem', background: '#059669', color: 'white', borderRadius: '4px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>v2.5</span>
            </div>
            <div style={{ fontSize: '0.65rem', color: '#94a3b8' }}>Municipal Operating System</div>
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <nav className="desktop-only" style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
          <button onClick={() => scrollToSection('platform')} style={{ background: 'none', border: 'none', color: '#cbd5e1', fontWeight: 600, fontSize: '0.85rem', cursor: 'pointer' }}>
            Platform
          </button>
          <button onClick={() => scrollToSection('workflow')} style={{ background: 'none', border: 'none', color: '#cbd5e1', fontWeight: 600, fontSize: '0.85rem', cursor: 'pointer' }}>
            How It Works
          </button>
          <button onClick={() => scrollToSection('intelligence')} style={{ background: 'none', border: 'none', color: '#cbd5e1', fontWeight: 600, fontSize: '0.85rem', cursor: 'pointer' }}>
            Intelligence
          </button>
        </nav>

        {/* Right Action Buttons */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <Link to="/citizen/track" className="btn-glass" style={{ padding: '0.4rem 0.75rem', fontSize: '0.8rem', textDecoration: 'none' }}>
            <Search size={14} color="#34d399" /> Track Issue
          </Link>

          <Link to="/report" className="btn-sage" style={{ padding: '0.4rem 0.75rem', fontSize: '0.8rem', textDecoration: 'none' }}>
            <PlusCircle size={14} /> Report Issue
          </Link>

          <Link to="/officer" className="btn-glass desktop-only" style={{ padding: '0.4rem 0.75rem', fontSize: '0.8rem', textDecoration: 'none', borderColor: 'rgba(96,165,250,0.3)', color: '#60a5fa' }}>
            <Users size={14} /> Officer Desk
          </Link>

          {user ? (
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', paddingLeft: '0.4rem' }}>
              <button onClick={logout} title="Logout" className="btn-glass" style={{ padding: '0.4rem', color: '#f87171', borderColor: 'rgba(239,68,68,0.3)' }}>
                <LogOut size={14} />
              </button>
            </div>
          ) : (
            <Link to="/login" style={{ textDecoration: 'none', color: '#94a3b8', fontSize: '0.8rem', fontWeight: 600, padding: '0.4rem' }}>
              Login
            </Link>
          )}

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="mobile-only"
            style={{ background: 'none', border: 'none', color: '#ffffff', cursor: 'pointer', padding: '0.4rem' }}
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div style={{ background: '#121722', borderTop: '1px solid rgba(255,255,255,0.08)', padding: '1rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          <Link to="/report" onClick={() => setMobileMenuOpen(false)} style={{ textDecoration: 'none', color: '#ffffff', fontSize: '0.9rem', padding: '0.5rem', borderRadius: '0.375rem', background: '#059669', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <PlusCircle size={16} /> Report Civic Issue
          </Link>
          <Link to="/citizen/track" onClick={() => setMobileMenuOpen(false)} style={{ textDecoration: 'none', color: '#ffffff', fontSize: '0.9rem', padding: '0.5rem', borderRadius: '0.375rem', background: 'rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Search size={16} color="#34d399" /> Track Complaint Status
          </Link>
          <Link to="/officer" onClick={() => setMobileMenuOpen(false)} style={{ textDecoration: 'none', color: '#60a5fa', fontSize: '0.9rem', padding: '0.5rem', borderRadius: '0.375rem', background: 'rgba(59,130,246,0.1)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Users size={16} /> Field Officer Operations Desk
          </Link>
          <Link to="/admin" onClick={() => setMobileMenuOpen(false)} style={{ textDecoration: 'none', color: '#ffffff', fontSize: '0.9rem', padding: '0.5rem', borderRadius: '0.375rem', background: 'rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Radio size={16} color="#34d399" /> Municipal Command Center
          </Link>
        </div>
      )}
    </header>
  );
}
