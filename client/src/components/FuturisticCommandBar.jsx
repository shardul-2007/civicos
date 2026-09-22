import React from 'react';
import {
  Activity, Sliders, Bell, Download, Settings, ShieldCheck,
  Zap, Cpu, Globe, Layers, BarChart2, Radio, Sparkles
} from 'lucide-react';

export default function FuturisticCommandBar({
  activeView = 'COMMAND',
  setActiveView,
  onOpenScenario,
  onOpenAi,
  onOpenAlerts,
}) {
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
    <header style={{
      position: 'fixed',
      top: '12px',
      left: '50%',
      transform: 'translateX(-50%)',
      width: 'calc(100% - 32px)',
      maxWidth: '1480px',
      zIndex: 900,
      background: 'rgba(5, 8, 11, 0.75)',
      backdropFilter: 'blur(28px)',
      WebkitBackdropFilter: 'blur(28px)',
      border: '1px solid rgba(34, 211, 238, 0.2)',
      borderRadius: '16px',
      padding: '0.65rem 1.25rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: '1rem',
      boxShadow: '0 16px 40px -10px rgba(0,0,0,0.8), 0 0 20px rgba(34, 211, 238, 0.08)',
    }}>
      {/* ── Left Branding ── */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', flexShrink: 0 }}>
        <div style={{
          width: '38px',
          height: '38px',
          borderRadius: '10px',
          background: 'linear-gradient(135deg, rgba(34, 211, 238, 0.2), rgba(6, 182, 212, 0.05))',
          border: '1px solid rgba(34, 211, 238, 0.5)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#22d3ee',
          boxShadow: '0 0 16px rgba(34, 211, 238, 0.3)',
        }}>
          <Zap size={20} />
        </div>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            <span style={{
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              background: '#22d3ee',
              boxShadow: '0 0 10px #22d3ee',
              animation: 'pulse 2s infinite',
            }} />
            <span style={{ fontSize: '1.15rem', fontWeight: 900, color: '#ffffff', letterSpacing: '-0.02em' }}>
              Civic<span style={{ color: '#22d3ee' }}>OS</span>
            </span>
            <span style={{
              fontSize: '0.65rem',
              fontWeight: 800,
              padding: '0.15rem 0.45rem',
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
            fontSize: '0.64rem',
            fontFamily: 'var(--font-mono)',
            color: '#94a3b8',
            letterSpacing: '0.08em',
            marginTop: '0.1rem',
          }}>
            ENERGY INTELLIGENCE PLATFORM
          </div>
        </div>
      </div>

      {/* ── Center Navigation ── */}
      <nav className="desktop-only" style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
        {NAV_ITEMS.map((item) => {
          const active = activeView === item.id;
          const Icon = item.icon;
          return (
            <button
              key={item.id}
              onClick={() => setActiveView(item.id)}
              style={{
                background: active ? 'rgba(34, 211, 238, 0.15)' : 'transparent',
                border: active ? '1px solid rgba(34, 211, 238, 0.4)' : '1px solid transparent',
                borderRadius: '8px',
                padding: '0.45rem 0.85rem',
                color: active ? '#22d3ee' : '#cbd5e1',
                fontSize: '0.74rem',
                fontWeight: active ? 800 : 600,
                fontFamily: 'var(--font-mono)',
                letterSpacing: '0.06em',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem',
                transition: 'all 0.2s ease',
                boxShadow: active ? '0 0 14px rgba(34, 211, 238, 0.2)' : 'none',
              }}
            >
              <Icon size={13} color={active ? '#22d3ee' : '#94a3b8'} />
              {item.label}
            </button>
          );
        })}
      </nav>

      {/* ── Right Controls ── */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', flexShrink: 0 }}>
        {/* System Online Badge */}
        <div className="desktop-only" style={{
          background: 'rgba(16, 185, 129, 0.1)',
          border: '1px solid rgba(16, 185, 129, 0.3)',
          borderRadius: '999px',
          padding: '0.35rem 0.75rem',
          display: 'flex',
          alignItems: 'center',
          gap: '0.4rem',
          fontSize: '0.72rem',
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
          SYSTEM ONLINE
        </div>

        {/* AI Intelligence Trigger */}
        <button
          onClick={onOpenAi}
          style={{
            background: 'linear-gradient(135deg, rgba(34, 211, 238, 0.2), rgba(6, 182, 212, 0.1))',
            border: '1px solid rgba(34, 211, 238, 0.5)',
            borderRadius: '8px',
            padding: '0.45rem 0.85rem',
            color: '#22d3ee',
            fontSize: '0.75rem',
            fontWeight: 800,
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '0.4rem',
            boxShadow: '0 0 14px rgba(34, 211, 238, 0.25)',
          }}
        >
          <Sparkles size={14} /> AI INTELLIGENCE
        </button>

        {/* WHAT IF? Scenario Simulator Trigger */}
        <button
          onClick={onOpenScenario}
          style={{
            background: 'rgba(245, 158, 11, 0.12)',
            border: '1px solid rgba(245, 158, 11, 0.4)',
            borderRadius: '8px',
            padding: '0.45rem 0.85rem',
            color: '#fbbf24',
            fontSize: '0.75rem',
            fontWeight: 800,
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '0.4rem',
            transition: 'all 0.2s ease',
          }}
        >
          <Sliders size={14} /> WHAT IF? SIMULATOR
        </button>

        {/* Alerts Trigger */}
        <button
          onClick={onOpenAlerts}
          style={{
            background: 'rgba(255,255,255,0.04)',
            border: '1px solid rgba(255,255,255,0.1)',
            borderRadius: '8px',
            padding: '0.45rem',
            color: '#cbd5e1',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          title="System Alerts"
        >
          <Bell size={16} />
        </button>
      </div>
    </header>
  );
}
