import React, { useState } from 'react';
import { Zap, Sun, Battery, ArrowDown, Activity, CheckCircle2, ShieldCheck } from 'lucide-react';

export default function LiveEnergyFlowPanel() {
  const [selectedNode, setSelectedNode] = useState('SOLAR');

  const NODE_DETAILS = {
    SOLAR: {
      name: 'SOLAR FARM 04',
      type: 'Renewable Generation',
      output: '4.8 MW',
      efficiency: '94.2%',
      status: 'OPERATIONAL',
      voltage: '132 kV',
    },
    GRID: {
      name: 'CENTRAL SUBSTATION ALPHA',
      type: 'High-Voltage Grid',
      output: '18.4 MW',
      efficiency: '98.7%',
      status: 'BALANCED',
      voltage: '220 kV',
    },
    STORAGE: {
      name: 'TESLA MEGAPACK BATTERY HUB',
      type: 'Chemical Storage',
      output: '6.2 MW',
      efficiency: '96.5%',
      status: 'CHARGING',
      voltage: '33 kV',
    },
    CITY: {
      name: 'METROPOLITAN DEMAND ZONE',
      type: 'Civic Consumption',
      output: '18.4 MW',
      efficiency: '91.4%',
      status: 'OPTIMAL',
      voltage: '11 kV',
    },
  };

  const currentNode = NODE_DETAILS[selectedNode];

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem',
      width: '100%',
    }}>
      {/* ── Top Floating Metric Pills ── */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
        gap: '0.85rem',
      }}>
        {[
          { label: 'TOTAL ENERGY', value: '24.8 MW', sub: 'Capacity Baseline', color: '#22d3ee', icon: Zap },
          { label: 'CURRENT DEMAND', value: '18.4 MW', sub: 'Peak Load Normal', color: '#60a5fa', icon: Activity },
          { label: 'RENEWABLE', value: '72.6%', sub: 'Clean Energy Mix', color: '#34d399', icon: Sun },
          { label: 'STORAGE', value: '64%', sub: 'Reserve Reserves', color: '#a78bfa', icon: Battery },
          { label: 'GRID HEALTH', value: '98.7%', sub: 'Zero Fault Sync', color: '#38bdf8', icon: ShieldCheck },
        ].map((m) => {
          const Icon = m.icon;
          return (
            <div
              key={m.label}
              style={{
                background: 'rgba(8, 14, 22, 0.75)',
                backdropFilter: 'blur(24px)',
                WebkitBackdropFilter: 'blur(24px)',
                border: '1px solid rgba(34, 211, 238, 0.18)',
                borderRadius: '14px',
                padding: '0.9rem 1.1rem',
                boxShadow: '0 8px 24px rgba(0,0,0,0.5)',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.25rem' }}>
                <span style={{ fontSize: '0.65rem', fontWeight: 800, color: '#94a3b8', letterSpacing: '0.08em', fontFamily: 'var(--font-mono)' }}>
                  {m.label}
                </span>
                <Icon size={15} color={m.color} />
              </div>
              <div style={{ fontSize: '1.45rem', fontWeight: 900, color: '#ffffff', fontFamily: 'var(--font-mono)', letterSpacing: '-0.02em' }}>
                {m.value}
              </div>
              <div style={{ fontSize: '0.68rem', color: m.color, marginTop: '0.15rem' }}>
                {m.sub}
              </div>
            </div>
          );
        })}
      </div>

      {/* ── Live Energy Flow Interactive Pipeline ── */}
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
              REAL-TIME INFRASTRUCTURE NETWORK
            </div>
            <h3 style={{ fontSize: '1.05rem', fontWeight: 900, color: '#ffffff' }}>
              Live City Energy Flow Pipeline
            </h3>
          </div>
          <span style={{
            fontSize: '0.72rem',
            fontWeight: 800,
            color: '#34d399',
            background: 'rgba(16,185,129,0.12)',
            padding: '0.25rem 0.65rem',
            borderRadius: '999px',
            border: '1px solid rgba(16,185,129,0.3)',
            fontFamily: 'var(--font-mono)',
          }}>
            ● ACTIVE TRANSMISSION
          </span>
        </div>

        {/* Energy Flow Nodes */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
          gap: '0.75rem',
          marginBottom: '1.1rem',
          alignItems: 'center',
        }}>
          {[
            { id: 'SOLAR', label: 'SOLAR', sub: 'Generation', color: '#06b6d4' },
            { id: 'GRID', label: 'GRID', sub: 'Transmission', color: '#3b82f6' },
            { id: 'STORAGE', label: 'STORAGE', sub: 'Megapack Reserve', color: '#10b981' },
            { id: 'CITY', label: 'CITY', sub: 'Demand Load', color: '#a855f7' },
          ].map((node, idx) => {
            const active = selectedNode === node.id;
            return (
              <React.Fragment key={node.id}>
                <div
                  onClick={() => setSelectedNode(node.id)}
                  style={{
                    background: active ? 'rgba(34, 211, 238, 0.16)' : 'rgba(255,255,255,0.03)',
                    border: active ? '1px solid #22d3ee' : '1px solid rgba(255,255,255,0.08)',
                    borderRadius: '12px',
                    padding: '0.85rem 0.75rem',
                    textAlign: 'center',
                    cursor: 'pointer',
                    transition: 'all 0.25 ease',
                    boxShadow: active ? '0 0 16px rgba(34, 211, 238, 0.3)' : 'none',
                  }}
                >
                  <div style={{ fontSize: '0.9rem', fontWeight: 900, color: active ? '#22d3ee' : '#ffffff', fontFamily: 'var(--font-mono)' }}>
                    {node.label}
                  </div>
                  <div style={{ fontSize: '0.68rem', color: '#94a3b8', marginTop: '0.15rem' }}>
                    {node.sub}
                  </div>
                </div>
              </React.Fragment>
            );
          })}
        </div>

        {/* Selected Node Details Box */}
        {currentNode && (
          <div style={{
            background: 'rgba(255,255,255,0.025)',
            border: '1px solid rgba(34, 211, 238, 0.25)',
            borderRadius: '12px',
            padding: '1rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '0.85rem',
          }}>
            <div>
              <div style={{ fontSize: '0.65rem', color: '#22d3ee', fontWeight: 800, fontFamily: 'var(--font-mono)' }}>
                SELECTED SOURCE / NODE INSPECTOR
              </div>
              <div style={{ fontSize: '1rem', fontWeight: 900, color: '#ffffff' }}>
                {currentNode.name}
              </div>
              <div style={{ fontSize: '0.75rem', color: '#94a3b8' }}>
                {currentNode.type} • {currentNode.voltage}
              </div>
            </div>

            <div style={{ display: 'flex', gap: '1.25rem', flexWrap: 'wrap' }}>
              <div>
                <div style={{ fontSize: '0.65rem', color: '#94a3b8', textTransform: 'uppercase' }}>OUTPUT</div>
                <div style={{ fontSize: '1.1rem', fontWeight: 900, color: '#22d3ee', fontFamily: 'var(--font-mono)' }}>
                  {currentNode.output}
                </div>
              </div>
              <div>
                <div style={{ fontSize: '0.65rem', color: '#94a3b8', textTransform: 'uppercase' }}>EFFICIENCY</div>
                <div style={{ fontSize: '1.1rem', fontWeight: 900, color: '#34d399', fontFamily: 'var(--font-mono)' }}>
                  {currentNode.efficiency}
                </div>
              </div>
              <div>
                <div style={{ fontSize: '0.65rem', color: '#94a3b8', textTransform: 'uppercase' }}>STATUS</div>
                <div style={{ fontSize: '0.9rem', fontWeight: 800, color: '#38bdf8', display: 'flex', alignItems: 'center', gap: '0.3rem', marginTop: '0.15rem' }}>
                  <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#38bdf8', boxShadow: '0 0 6px #38bdf8' }} />
                  {currentNode.status}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
