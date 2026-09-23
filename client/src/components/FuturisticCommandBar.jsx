import React, { useState } from 'react';
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

  const NAV_ITEMS = [
    { id: 'COMMAND', label: 'OVERVIEW', icon: Cpu },
    { id: 'GRID', label: 'GRID', icon: Zap },
    { id: 'DEMAND', label: 'DEMAND', icon: Activity },
    { id: 'SOURCES', label: 'SOURCES', icon: Radio },
    { id: 'STORAGE', label: 'STORAGE', icon: Layers },
    { id: 'ANALYTICS', label: 'ANALYTICS', icon: BarChart2 },
    { id: 'TWIN', label: 'DIGITAL TWIN', icon: Globe },
  ];

  return (
    <>
      <header style={{
        position: 'fixed',
        top: '10px',
        left: '50%',
        transform: 'translateX(-50%)',
        width: 'calc(100% - 24px)',
        maxWidth: '1480px',
        zIndex: 900,
        background: 'rgba(5, 8, 11, 0.88)',
        backdropFilter: 'blur(28px)',
        WebkitBackdropFilter: 'blur(28px)',
        border: '1px solid rgba(34, 211, 238, 0.25)',
        borderRadius: '16px',
        padding: '0.5rem 0.85rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '0.75rem',
        boxShadow: '0 16px 40px -10px rgba(0,0,0,0.85), 0 0 20px rgba(34, 211, 238, 0.1)',
      }}>
        {/* ── Left Branding ── */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', flexShrink: 0 }}>
          <div style={{
            width: '34px',
            height: '34px',
            borderRadius: '10px',
            background: 'linear-gradient(135deg, rgba(34, 211, 238, 0.25), rgba(6, 182, 212, 0.08))',
            border: '1px solid rgba(34, 211, 238, 0.5)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#22d3ee',
            boxShadow: '0 0 14px rgba(34, 211, 238, 0.3)',
          }}>
            <Zap size={18} />
          </div>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
              <span style={{
                width: '7px',
                height: '7px',
                borderRadius: '50%',
                background: '#22d3ee',
                boxShadow: '0 0 8px #22d3ee',
                animation: 'pulse 2s infinite',
              }} />
              <span style={{ fontSize: '1.05rem', fontWeight: 900, color: '#ffffff', letterSpacing: '-0.02em' }}>
                Civic<span style={{ color: '#22d3ee' }}>OS</span>
              </span>
              <span style={{
                fontSize: '0.6rem',
                fontWeight: 800,
                padding: '0.1rem 0.4rem',
                borderRadius: '999px',
                background: 'rgba(34, 211, 238, 0.12)',
                border: '1px solid rgba(34, 211, 238, 0.3)',
                color: '#22d3ee',
                letterSpacing: '0.05em',
              }}>
                ENERGY OS 4.0
              </span>
            </div>
            <div style={{
              fontSize: '0.6rem',
              fontFamily: 'var(--font-mono)',
              color: '#94a3b8',
              letterSpacing: '0.06em',
            }}>
              ENERGY INTELLIGENCE
            </div>
          </div>
        </div>

        {/* ── Center Navigation (Horizontally Scrollable & Responsive) ── */}
        <nav style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.35rem',
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
                onClick={() => setActiveView(item.id)}
                style={{
                  background: active ? 'rgba(34, 211, 238, 0.18)' : 'rgba(255,255,255,0.03)',
                  border: active ? '1px solid rgba(34, 211, 238, 0.5)' : '1px solid rgba(255,255,255,0.08)',
                  borderRadius: '8px',
                  padding: '0.35rem 0.65rem',
                  color: active ? '#22d3ee' : '#cbd5e1',
                  fontSize: '0.7rem',
                  fontWeight: active ? 900 : 700,
                  fontFamily: 'var(--font-mono)',
                  letterSpacing: '0.05em',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.35rem',
                  whiteSpace: 'nowrap',
                  flexShrink: 0,
                  transition: 'all 0.2s ease',
                  boxShadow: active ? '0 0 12px rgba(34, 211, 238, 0.25)' : 'none',
                }}
              >
                <Icon size={12} color={active ? '#22d3ee' : '#94a3b8'} />
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* ── Right Controls ── */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', flexShrink: 0 }}>
          {/* System Online Badge */}
          <div className="desktop-only" style={{
            background: 'rgba(16, 185, 129, 0.1)',
            border: '1px solid rgba(16, 185, 129, 0.3)',
            borderRadius: '999px',
            padding: '0.3rem 0.65rem',
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

          {/* AI Intelligence Trigger */}
          <button
            onClick={onOpenAi}
            style={{
              background: 'linear-gradient(135deg, rgba(34, 211, 238, 0.2), rgba(6, 182, 212, 0.1))',
              border: '1px solid rgba(34, 211, 238, 0.5)',
              borderRadius: '8px',
              padding: '0.35rem 0.65rem',
              color: '#22d3ee',
              fontSize: '0.72rem',
              fontWeight: 800,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '0.35rem',
              whiteSpace: 'nowrap',
              boxShadow: '0 0 12px rgba(34, 211, 238, 0.25)',
            }}
          >
            <Sparkles size={13} /> AI INTELLIGENCE
          </button>

          {/* WHAT IF? Scenario Simulator Trigger */}
          <button
            onClick={onOpenScenario}
            style={{
              background: 'rgba(245, 158, 11, 0.12)',
              border: '1px solid rgba(245, 158, 11, 0.4)',
              borderRadius: '8px',
              padding: '0.35rem 0.65rem',
              color: '#fbbf24',
              fontSize: '0.72rem',
              fontWeight: 800,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '0.35rem',
              whiteSpace: 'nowrap',
            }}
          >
            <Sliders size={13} /> WHAT IF? SIMULATOR
          </button>

          {/* Mobile Drawer Trigger */}
          <button
            onClick={() => setMobileDrawerOpen(!mobileDrawerOpen)}
            className="mobile-only"
            style={{
              background: 'rgba(255,255,255,0.05)',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: '8px',
              padding: '0.4rem',
              color: '#ffffff',
              cursor: 'pointer',
            }}
          >
            {mobileDrawerOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Container */}
      {mobileDrawerOpen && (
        <div style={{
          position: 'fixed',
          top: '65px',
          left: '12px',
          right: '12px',
          zIndex: 899,
          background: 'rgba(8, 14, 22, 0.96)',
          backdropFilter: 'blur(32px)',
          border: '1px solid rgba(34, 211, 238, 0.35)',
          borderRadius: '16px',
          padding: '1rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '0.5rem',
          boxShadow: '0 20px 50px rgba(0,0,0,0.9)',
        }}>
          <div style={{ fontSize: '0.65rem', fontWeight: 800, color: '#22d3ee', textTransform: 'uppercase', fontFamily: 'var(--font-mono)' }}>
            ENERGY OS NAVIGATION MODES
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.4rem' }}>
            {NAV_ITEMS.map((item) => {
              const active = activeView === item.id;
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveView(item.id);
                    setMobileDrawerOpen(false);
                  }}
                  style={{
                    background: active ? 'rgba(34, 211, 238, 0.2)' : 'rgba(255,255,255,0.04)',
                    border: active ? '1px solid #22d3ee' : '1px solid rgba(255,255,255,0.08)',
                    borderRadius: '8px',
                    padding: '0.55rem',
                    color: active ? '#22d3ee' : '#ffffff',
                    fontSize: '0.75rem',
                    fontWeight: 800,
                    fontFamily: 'var(--font-mono)',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                  }}
                >
                  <Icon size={14} color={active ? '#22d3ee' : '#94a3b8'} />
                  {item.label}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
}
