import React, { useState } from 'react';
import { Sliders, X, Sparkles, TrendingDown, Leaf, Zap, RefreshCw, CheckCircle2 } from 'lucide-react';

export default function ScenarioSimulatorModal({ isOpen, onClose }) {
  const [solarAdd, setSolarAdd] = useState(20); // +20%
  const [batteryAdd, setBatteryAdd] = useState(15); // +15%
  const [evLoad, setEvLoad] = useState(10); // +10%
  const [buildingLoad, setBuildingLoad] = useState(-5); // -5%

  if (!isOpen) return null;

  // Calculate predicted impact metrics
  const gridDependencyDelta = (-0.42 * solarAdd - 0.28 * batteryAdd + 0.15 * evLoad + 0.35 * buildingLoad).toFixed(1);
  const co2EmissionsDelta = (-0.55 * solarAdd - 0.2 * batteryAdd + 0.08 * evLoad + 0.25 * buildingLoad).toFixed(1);
  const peakLoadDelta = (-0.22 * solarAdd - 0.38 * batteryAdd + 0.3 * evLoad + 0.45 * buildingLoad).toFixed(1);

  const resetSliders = () => {
    setSolarAdd(20);
    setBatteryAdd(15);
    setEvLoad(10);
    setBuildingLoad(-5);
  };

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'rgba(3, 5, 8, 0.85)',
      backdropFilter: 'blur(20px)',
      WebkitBackdropFilter: 'blur(20px)',
      zIndex: 1000,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '1.5rem',
      animation: 'fadeIn 0.25s ease-out',
    }}>
      <div style={{
        background: 'rgba(8, 14, 22, 0.95)',
        backdropFilter: 'blur(32px)',
        WebkitBackdropFilter: 'blur(32px)',
        border: '1px solid rgba(34, 211, 238, 0.35)',
        borderRadius: '24px',
        maxWidth: '720px',
        width: '100%',
        padding: '2rem',
        boxShadow: '0 30px 80px rgba(0,0,0,0.9), 0 0 40px rgba(34, 211, 238, 0.15)',
        color: '#ffffff',
        position: 'relative',
      }}>
        {/* Close Button */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            background: 'rgba(255,255,255,0.05)',
            border: '1px solid rgba(255,255,255,0.1)',
            borderRadius: '50%',
            width: '36px',
            height: '36px',
            color: '#cbd5e1',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
          }}
        >
          <X size={18} />
        </button>

        {/* Header */}
        <div style={{ marginBottom: '1.5rem' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.4rem',
            background: 'rgba(245, 158, 11, 0.12)',
            border: '1px solid rgba(245, 158, 11, 0.4)',
            padding: '0.35rem 0.85rem',
            borderRadius: '999px',
            fontSize: '0.75rem',
            fontWeight: 800,
            color: '#fbbf24',
            marginBottom: '0.65rem',
          }}>
            <Sliders size={14} /> SIGNATURE ENGINE • SCENARIO SIMULATOR
          </div>
          <h2 style={{ fontSize: '1.6rem', fontWeight: 900, marginBottom: '0.35rem', color: '#ffffff' }}>
            WHAT IF? Energy Infrastructure Simulator
          </h2>
          <p style={{ color: '#94a3b8', fontSize: '0.88rem', lineHeight: 1.5 }}>
            Simulate city-wide energy supply and demand modifications to calculate predicted grid impact, CO₂ emission changes, and peak load relief in real-time.
          </p>
        </div>

        {/* Sliders Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '1.25rem',
          marginBottom: '1.75rem',
        }}>
          {/* Slider 1: Solar Capacity */}
          <div style={{ background: 'rgba(255,255,255,0.025)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '14px', padding: '1rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', fontSize: '0.85rem' }}>
              <span style={{ fontWeight: 700, color: '#ffffff' }}>SOLAR CAPACITY</span>
              <span style={{ fontWeight: 900, color: '#22d3ee', fontFamily: 'var(--font-mono)' }}>{solarAdd >= 0 ? `+${solarAdd}%` : `${solarAdd}%`}</span>
            </div>
            <input
              type="range"
              min="-50"
              max="100"
              value={solarAdd}
              onChange={(e) => setSolarAdd(parseInt(e.target.value))}
              style={{ width: '100%', accentColor: '#22d3ee', cursor: 'pointer' }}
            />
          </div>

          {/* Slider 2: Battery Capacity */}
          <div style={{ background: 'rgba(255,255,255,0.025)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '14px', padding: '1rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', fontSize: '0.85rem' }}>
              <span style={{ fontWeight: 700, color: '#ffffff' }}>BATTERY STORAGE</span>
              <span style={{ fontWeight: 900, color: '#34d399', fontFamily: 'var(--font-mono)' }}>{batteryAdd >= 0 ? `+${batteryAdd}%` : `${batteryAdd}%`}</span>
            </div>
            <input
              type="range"
              min="-50"
              max="100"
              value={batteryAdd}
              onChange={(e) => setBatteryAdd(parseInt(e.target.value))}
              style={{ width: '100%', accentColor: '#34d399', cursor: 'pointer' }}
            />
          </div>

          {/* Slider 3: EV Charging Demand */}
          <div style={{ background: 'rgba(255,255,255,0.025)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '14px', padding: '1rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', fontSize: '0.85rem' }}>
              <span style={{ fontWeight: 700, color: '#ffffff' }}>EV CHARGING DEMAND</span>
              <span style={{ fontWeight: 900, color: '#fbbf24', fontFamily: 'var(--font-mono)' }}>{evLoad >= 0 ? `+${evLoad}%` : `${evLoad}%`}</span>
            </div>
            <input
              type="range"
              min="-50"
              max="100"
              value={evLoad}
              onChange={(e) => setEvLoad(parseInt(e.target.value))}
              style={{ width: '100%', accentColor: '#fbbf24', cursor: 'pointer' }}
            />
          </div>

          {/* Slider 4: Building Consumption */}
          <div style={{ background: 'rgba(255,255,255,0.025)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '14px', padding: '1rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', fontSize: '0.85rem' }}>
              <span style={{ fontWeight: 700, color: '#ffffff' }}>BUILDING LOAD</span>
              <span style={{ fontWeight: 900, color: '#a78bfa', fontFamily: 'var(--font-mono)' }}>{buildingLoad >= 0 ? `+${buildingLoad}%` : `${buildingLoad}%`}</span>
            </div>
            <input
              type="range"
              min="-30"
              max="50"
              value={buildingLoad}
              onChange={(e) => setBuildingLoad(parseInt(e.target.value))}
              style={{ width: '100%', accentColor: '#a78bfa', cursor: 'pointer' }}
            />
          </div>
        </div>

        {/* Real-Time Predicted Impact Outcome Card */}
        <div style={{
          background: 'rgba(34, 211, 238, 0.08)',
          border: '1px solid rgba(34, 211, 238, 0.35)',
          borderRadius: '16px',
          padding: '1.25rem',
          marginBottom: '1.5rem',
        }}>
          <div style={{ fontSize: '0.72rem', fontWeight: 800, color: '#22d3ee', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.85rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            <Sparkles size={14} /> CALCULATED IMPACT RESULT
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1rem' }}>
            <div>
              <div style={{ fontSize: '0.72rem', color: '#94a3b8', textTransform: 'uppercase' }}>Grid Dependency</div>
              <div style={{ fontSize: '1.5rem', fontWeight: 900, color: gridDependencyDelta <= 0 ? '#34d399' : '#f87171', fontFamily: 'var(--font-mono)' }}>
                {gridDependencyDelta}%
              </div>
            </div>
            <div>
              <div style={{ fontSize: '0.72rem', color: '#94a3b8', textTransform: 'uppercase' }}>CO₂ Emissions</div>
              <div style={{ fontSize: '1.5rem', fontWeight: 900, color: co2EmissionsDelta <= 0 ? '#34d399' : '#f87171', fontFamily: 'var(--font-mono)' }}>
                {co2EmissionsDelta}%
              </div>
            </div>
            <div>
              <div style={{ fontSize: '0.72rem', color: '#94a3b8', textTransform: 'uppercase' }}>Peak Load Relief</div>
              <div style={{ fontSize: '1.5rem', fontWeight: 900, color: peakLoadDelta <= 0 ? '#34d399' : '#f87171', fontFamily: 'var(--font-mono)' }}>
                {peakLoadDelta}%
              </div>
            </div>
          </div>
        </div>

        {/* Modal Actions */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <button
            onClick={resetSliders}
            style={{
              background: 'transparent',
              border: '1px solid rgba(255,255,255,0.15)',
              borderRadius: '10px',
              padding: '0.6rem 1rem',
              color: '#cbd5e1',
              fontSize: '0.82rem',
              fontWeight: 700,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem',
            }}
          >
            <RefreshCw size={14} /> RESET SIMULATOR
          </button>

          <button
            onClick={onClose}
            style={{
              background: 'linear-gradient(135deg, #06b6d4, #0891b2)',
              border: 'none',
              borderRadius: '10px',
              padding: '0.65rem 1.4rem',
              color: '#ffffff',
              fontSize: '0.88rem',
              fontWeight: 800,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem',
              boxShadow: '0 0 20px rgba(34, 211, 238, 0.35)',
            }}
          >
            <CheckCircle2 size={16} /> APPLY SIMULATION TO GRID
          </button>
        </div>
      </div>
    </div>
  );
}
