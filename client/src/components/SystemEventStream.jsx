import React from 'react';
import { Bell, ShieldAlert, CheckCircle2, Zap, Leaf, Clock, Award } from 'lucide-react';

export default function SystemEventStream() {
  const EVENTS = [
    { time: '16:04', type: 'OPTIMIZATION', desc: 'Solar output increased +12% in Sector 04', status: 'SUCCESS' },
    { time: '15:48', type: 'BATTERY', desc: 'Megapack Storage Zone 04 reached 80% reserve capacity', status: 'INFO' },
    { time: '15:32', type: 'DEMAND', desc: 'Peak demand surge detected in Commercial District', status: 'WARNING' },
    { time: '14:51', type: 'GRID', desc: 'Substation Alpha closed-loop grid balance completed', status: 'SUCCESS' },
    { time: '14:15', type: 'EV HUB', desc: 'EV Fast Charging Station 07 load shedding active', status: 'INFO' },
  ];

  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
      gap: '1.25rem',
      width: '100%',
    }}>
      {/* ── Live System Events Stream ── */}
      <div style={{
        background: 'rgba(8, 14, 22, 0.75)',
        backdropFilter: 'blur(24px)',
        WebkitBackdropFilter: 'blur(24px)',
        border: '1px solid rgba(34, 211, 238, 0.2)',
        borderRadius: '16px',
        padding: '1.25rem',
        boxShadow: '0 12px 32px rgba(0,0,0,0.6)',
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
          <div>
            <div style={{ fontSize: '0.68rem', fontWeight: 800, color: '#22d3ee', letterSpacing: '0.08em', fontFamily: 'var(--font-mono)' }}>
              REAL-TIME AUDIT LEDGER
            </div>
            <h3 style={{ fontSize: '1.05rem', fontWeight: 900, color: '#ffffff' }}>
              System Event Stream
            </h3>
          </div>
          <Bell size={16} color="#22d3ee" />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
          {EVENTS.map((ev, i) => (
            <div
              key={i}
              style={{
                background: 'rgba(255,255,255,0.025)',
                border: '1px solid rgba(255,255,255,0.06)',
                borderRadius: '10px',
                padding: '0.65rem 0.85rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                fontSize: '0.78rem',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <span style={{ fontSize: '0.72rem', fontWeight: 800, color: '#22d3ee', fontFamily: 'var(--font-mono)' }}>
                  {ev.time}
                </span>
                <span style={{ color: '#ffffff', fontWeight: 600 }}>{ev.desc}</span>
              </div>
              <span style={{
                fontSize: '0.65rem',
                fontWeight: 800,
                padding: '0.15rem 0.45rem',
                borderRadius: '6px',
                background: ev.status === 'WARNING' ? 'rgba(245,158,11,0.15)' : 'rgba(34,211,238,0.12)',
                color: ev.status === 'WARNING' ? '#fbbf24' : '#34d399',
                fontFamily: 'var(--font-mono)',
              }}>
                {ev.type}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* ── City Impact & Sustainability ── */}
      <div style={{
        background: 'rgba(8, 14, 22, 0.75)',
        backdropFilter: 'blur(24px)',
        WebkitBackdropFilter: 'blur(24px)',
        border: '1px solid rgba(34, 211, 238, 0.2)',
        borderRadius: '16px',
        padding: '1.25rem',
        boxShadow: '0 12px 32px rgba(0,0,0,0.6)',
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
          <div>
            <div style={{ fontSize: '0.68rem', fontWeight: 800, color: '#34d399', letterSpacing: '0.08em', fontFamily: 'var(--font-mono)' }}>
              SUSTAINABILITY METRICS
            </div>
            <h3 style={{ fontSize: '1.05rem', fontWeight: 900, color: '#ffffff' }}>
              City Environmental Impact
            </h3>
          </div>
          <Leaf size={18} color="#34d399" />
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '0.75rem' }}>
          <div style={{ background: 'rgba(16,185,129,0.08)', border: '1px solid rgba(16,185,129,0.25)', borderRadius: '12px', padding: '0.85rem 1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <div style={{ fontSize: '0.65rem', color: '#94a3b8', textTransform: 'uppercase' }}>CO₂ REDUCED THIS MONTH</div>
              <div style={{ fontSize: '1.4rem', fontWeight: 900, color: '#34d399', fontFamily: 'var(--font-mono)' }}>
                1,248 tons
              </div>
            </div>
            <Award size={24} color="#34d399" />
          </div>

          <div style={{ background: 'rgba(34,211,238,0.08)', border: '1px solid rgba(34,211,238,0.25)', borderRadius: '12px', padding: '0.85rem 1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <div style={{ fontSize: '0.65rem', color: '#94a3b8', textTransform: 'uppercase' }}>RENEWABLE ENERGY MIX</div>
              <div style={{ fontSize: '1.4rem', fontWeight 900, color: '#22d3ee', fontFamily: 'var(--font-mono)' }}>
                72.6%
              </div>
            </div>
            <Zap size={24} color="#22d3ee" />
          </div>

          <div style={{ background: 'rgba(167,139,250,0.08)', border: '1px solid rgba(167,139,250,0.25)', borderRadius: '12px', padding: '0.85rem 1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <div style={{ fontSize: '0.65rem', color: '#94a3b8', textTransform: 'uppercase' }}>TOTAL ENERGY SAVED</div>
              <div style={{ fontSize: '1.4rem', fontWeight 900, color: '#a78bfa', fontFamily: 'var(--font-mono)' }}>
                18.4 MWh
              </div>
            </div>
            <Clock size={24} color="#a78bfa" />
          </div>
        </div>
      </div>
    </div>
  );
}
