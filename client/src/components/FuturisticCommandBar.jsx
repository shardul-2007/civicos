import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  Activity, Sliders, Bell, Download, Settings, ShieldCheck,
  Zap, Cpu, Globe, Layers, BarChart2, Radio, Sparkles, Menu, X
} from 'lucide-react';

export default function FuturisticCommandBar({
  activeView = 'COMMAND',
  setActiveView,
  onOpenScenario,
  onOpenAi,
  onOpenAlerts,
}) {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const NAV_ITEMS = [
    { id: 'COMMAND', label: 'OVERVIEW', icon: Cpu },
    { id: 'GRID', label: 'GRID', icon: Zap },
    { id: 'DEMAND', label: 'DEMAND', icon: Activity },
    { id: 'SOURCES', label: 'SOURCES', icon: Radio },
    { id: 'STORAGE', label: 'STORAGE', icon: Layers },
    { id: 'ANALYTICS', label: 'ANALYTICS', icon: BarChart2 },
    { id: 'TWIN', label: 'DIGITAL TWIN', icon: Globe },
  ];

  const handleNavClick = (viewId) => {
    if (location.pathname !== '/energy') {
      navigate('/energy', { state: { targetView: viewId } });
    } else {
      if (typeof setActiveView === 'function') {
        setActiveView(viewId);
      }
    }
    setMobileDrawerOpen(false);
  };

  const handleLogoClick = () => {
    navigate('/');
  };

  return (
    <>
      <header style={{
        position: 'sticky',
        top: '12px',
        width: '100%',
        maxWidth: '1480px',
        margin: '0 auto 1rem auto',
        zIndex: 900,
        background: 'rgba(5, 8, 11, 0.94)',
        backdropFilter: 'blur(28px)',
        WebkitBackdropFilter: 'blur(28px)',
        border: '1px solid rgba(34, 211, 238, 0.35)',
        borderRadius: '16px',
        padding: '0.65rem 1rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '0.75rem',
        boxShadow: '0 16px 40px -10px rgba(0,0,0,0.9), 0 0 20px rgba(34, 211, 238, 0.12)',
      }}>
        {/* ── Left Branding (Clickable & Redirectable to Home) ── */}
        <div
          onClick={handleLogoClick}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.65rem',
            flexShrink: 0,
            cursor: 'pointer',
            userSelect: 'none',
          }}
          title="CivicOS Platform Homepage"
        >
          <div style={{
            width: '36px',
            height: '36px',
            borderRadius: '10px',
            background: 'linear-gradient(135deg, rgba(34, 211, 238, 0.3), rgba(6, 182, 212, 0.1))',
            border: '1px solid rgba(34, 211, 238, 0.6)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#22d3ee',
            boxShadow: '0 0 16px rgba(34, 211, 238, 0.35)',
          }}>
            <Zap size={20} />
          </div>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
              <span style={{
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                background: '#22d3ee',
                boxShadow: '0 0 10px #22d3ee',
                animation: 'pulse 2s infinite',
              }} />
              <span style={{ fontSize: '1.1rem', fontWeight: 900, color: '#ffffff', letterSpacing: '-0.02em' }}>
                Civic<span style={{ color: '#22d3ee' }}>OS</span>
              </span>
              <span style={{
                fontSize: '0.62rem',
                fontWeight: 800,
                padding: '0.1rem 0.45rem',
                borderRadius: '999px',
                background: 'rgba(34, 211, 238, 0.15)',
                border: '1px solid rgba(34, 211, 238, 0.4)',
                color: '#22d3ee',
                letterSpacing: '0.05em',
                whiteSpace: 'nowrap',
              }}>
                ENERGY OS 4.0
              </span>
            </div>
            <div style={{
              fontSize: '0.62rem',
              fontFamily: 'var(--font-mono)',
              color: '#94a3b8',
              letterSpacing: '0.06em',
              fontWeight: 700,
            }}>
              ENERGY INTELLIGENCE
            </div>
          </div>
        </div>

        {/* ── Center Navigation Buttons (Desktop & Tablet Scrollable) ── */}
        <nav style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.4rem',
          overflowX: 'auto',
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
          padding: '0.2rem 0',
          maxWidth: '100%',
        }}>
          {NAV_ITEMS.map((item) => {
            const active = activeView === item.id;
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                style={{
                  background: active ? 'rgba(34, 211, 238, 0.22)' : 'rgba(255,255,255,0.04)',
                  border: active ? '1px solid rgba(34, 211, 238, 0.6)' : '1px solid rgba(255,255,255,0.08)',
                  borderRadius: '9px',
                  padding: '0.4rem 0.75rem',
                  color: active ? '#22d3ee' : '#cbd5e1',
                  fontSize: '0.72rem',
                  fontWeight: active ? 900 : 700,
                  fontFamily: 'var(--font-mono)',
                  letterSpacing: '0.05em',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  whiteSpace: 'nowrap',
                  flexShrink: 0,
                  transition: 'all 0.2s ease',
                  boxShadow: active ? '0 0 14px rgba(34, 211, 238, 0.3)' : 'none',
                }}
              >
                <Icon size={13} color={active ? '#22d3ee' : '#94a3b8'} />
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* ── Right Action Controls ── */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexShrink: 0 }}>
          {/* System Online Indicator */}
          <div className="desktop-only" style={{
            background: 'rgba(16, 185, 129, 0.12)',
            border: '1px solid rgba(16, 185, 129, 0.35)',
            borderRadius: '999px',
            padding: '0.35rem 0.7rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.35rem',
            fontSize: '0.68rem',
            fontWeight: 800,
            color: '#34d399',
            fontFamily: 'var(--font-mono)',
          }}>
            <span style={{
              width: '6px',
              height: '6px',
              borderRadius: '50%',
              background: '#34d399',
              boxShadow: '0 0 8px #34d399',
            }} />
            ONLINE
          </div>

          {/* AI Intelligence Drawer Button */}
          <button
            onClick={() => {
              if (typeof onOpenAi === 'function') onOpenAi();
              else navigate('/energy');
            }}
            style={{
              background: 'linear-gradient(135deg, rgba(34, 211, 238, 0.25), rgba(6, 182, 212, 0.12))',
              border: '1px solid rgba(34, 211, 238, 0.6)',
              borderRadius: '9px',
              padding: '0.4rem 0.75rem',
              color: '#22d3ee',
              fontSize: '0.72rem',
              fontWeight: 800,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem',
              whiteSpace: 'nowrap',
              boxShadow: '0 0 14px rgba(34, 211, 238, 0.3)',
            }}
          >
            <Sparkles size={14} /> AI INTELLIGENCE
          </button>

          {/* WHAT IF? Simulator Trigger Button */}
          <button
            onClick={() => {
              if (typeof onOpenScenario === 'function') onOpenScenario();
              else navigate('/energy');
            }}
            style={{
              background: 'rgba(245, 158, 11, 0.15)',
              border: '1px solid rgba(245, 158, 11, 0.5)',
              borderRadius: '9px',
              padding: '0.4rem 0.75rem',
              color: '#fbbf24',
              fontSize: '0.72rem',
              fontWeight: 800,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem',
              whiteSpace: 'nowrap',
            }}
          >
            <Sliders size={14} /> WHAT IF? SIMULATOR
          </button>

          {/* Mobile Glass Menu Button */}
          <button
            onClick={() => setMobileDrawerOpen(!mobileDrawerOpen)}
            className="mobile-only"
            style={{
              background: 'rgba(255,255,255,0.06)',
              border: '1px solid rgba(255,255,255,0.12)',
              borderRadius: '9px',
              padding: '0.45rem',
              color: '#ffffff',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            aria-label="Toggle Navigation Drawer"
          >
            {mobileDrawerOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      {/* ── Mobile Glass Drawer Navigation ── */}
      {mobileDrawerOpen && (
        <div style={{
          position: 'fixed',
          top: '75px',
          left: '12px',
          right: '12px',
          zIndex: 899,
          background: 'rgba(8, 14, 22, 0.98)',
          backdropFilter: 'blur(36px)',
          WebkitBackdropFilter: 'blur(36px)',
          border: '1px solid rgba(34, 211, 238, 0.4)',
          borderRadius: '18px',
          padding: '1.25rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '0.75rem',
          boxShadow: '0 25px 60px rgba(0,0,0,0.95), 0 0 30px rgba(34, 211, 238, 0.2)',
        }}>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderBottom: '1px solid rgba(255,255,255,0.08)',
            paddingBottom: '0.5rem',
          }}>
            <div style={{ fontSize: '0.7rem', fontWeight: 900, color: '#22d3ee', textTransform: 'uppercase', fontFamily: 'var(--font-mono)', letterSpacing: '0.08em' }}>
              ENERGY OS MODES
            </div>
            <div style={{ fontSize: '0.65rem', color: '#94a3b8', fontFamily: 'var(--font-mono)' }}>
              SYSTEM ACTIVE
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.5rem' }}>
            {NAV_ITEMS.map((item) => {
              const active = activeView === item.id;
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  style={{
                    background: active ? 'rgba(34, 211, 238, 0.25)' : 'rgba(255,255,255,0.05)',
                    border: active ? '1px solid #22d3ee' : '1px solid rgba(255,255,255,0.08)',
                    borderRadius: '10px',
                    padding: '0.65rem 0.5rem',
                    color: active ? '#22d3ee' : '#ffffff',
                    fontSize: '0.75rem',
                    fontWeight: 800,
                    fontFamily: 'var(--font-mono)',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.45rem',
                    boxShadow: active ? '0 0 12px rgba(34, 211, 238, 0.3)' : 'none',
                  }}
                >
                  <Icon size={14} color={active ? '#22d3ee' : '#94a3b8'} />
                  {item.label}
                </button>
              );
            })}
          </div>

          <div style={{ display: 'flex', gap: '0.5rem', marginTop: '0.25rem' }}>
            <button
              onClick={() => {
                if (typeof onOpenAi === 'function') onOpenAi();
                else navigate('/energy');
                setMobileDrawerOpen(false);
              }}
              style={{
                flex: 1,
                background: 'linear-gradient(135deg, rgba(34, 211, 238, 0.3), rgba(6, 182, 212, 0.15))',
                border: '1px solid #22d3ee',
                borderRadius: '10px',
                padding: '0.65rem',
                color: '#22d3ee',
                fontSize: '0.75rem',
                fontWeight: 800,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.4rem',
              }}
            >
              <Sparkles size={14} /> AI INTELLIGENCE
            </button>
            <button
              onClick={() => {
                if (typeof onOpenScenario === 'function') onOpenScenario();
                else navigate('/energy');
                setMobileDrawerOpen(false);
              }}
              style={{
                flex: 1,
                background: 'rgba(245, 158, 11, 0.18)',
                border: '1px solid #fbbf24',
                borderRadius: '10px',
                padding: '0.65rem',
                color: '#fbbf24',
                fontSize: '0.75rem',
                fontWeight: 800,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.4rem',
              }}
            >
              <Sliders size={14} /> WHAT IF? SIMULATOR
            </button>
          </div>
        </div>
      )}
    </>
  );
}
