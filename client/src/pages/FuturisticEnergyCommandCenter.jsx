import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import FuturisticCommandBar from '../components/FuturisticCommandBar';
import CityEnergy3DModel from '../components/CityEnergy3DModel';
import LiveEnergyFlowPanel from '../components/LiveEnergyFlowPanel';
import EnergyForecastChart from '../components/EnergyForecastChart';
import SystemEventStream from '../components/SystemEventStream';
import ScenarioSimulatorModal from '../components/ScenarioSimulatorModal';
import AiEnergyAssistantDrawer from '../components/AiEnergyAssistantDrawer';

export default function FuturisticEnergyCommandCenter() {
  const location = useLocation();
  const initialView = location.state?.targetView || 'COMMAND';
  const [activeView, setActiveView] = useState(initialView);
  const [scenarioOpen, setScenarioOpen] = useState(false);
  const [aiOpen, setAiOpen] = useState(false);
  const [selectedBuilding, setSelectedBuilding] = useState(null);

  useEffect(() => {
    if (location.state?.targetView) {
      setActiveView(location.state.targetView);
    }
  }, [location.state]);

  // Scroll to section based on view
  const handleViewChange = (viewId) => {
    setActiveView(viewId);
    let targetEl = null;
    if (viewId === 'TWIN') {
      targetEl = document.getElementById('digital-twin-section');
    } else if (viewId === 'ANALYTICS') {
      targetEl = document.getElementById('analytics-section');
    } else if (['GRID', 'DEMAND', 'SOURCES', 'STORAGE', 'COMMAND'].includes(viewId)) {
      targetEl = document.getElementById('live-flow-section');
    }
    if (targetEl) {
      targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div style={{
      background: '#05080B',
      minHeight: '100vh',
      color: '#ffffff',
      fontFamily: 'var(--font-sans)',
      position: 'relative',
      paddingTop: '16px',
      paddingBottom: '40px',
      overflowX: 'hidden',
    }}>
      {/* Spacecraft Top Command Bar */}
      <FuturisticCommandBar
        activeView={activeView}
        setActiveView={handleViewChange}
        onOpenScenario={() => setScenarioOpen(true)}
        onOpenAi={() => setAiOpen(true)}
        onOpenAlerts={() => setAiOpen(true)}
      />

      {/* Main Command Center Layout */}
      <main style={{
        maxWidth: '1480px',
        margin: '0 auto',
        padding: '0 1rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '1.5rem',
      }}>
        {/* ── Title Banner ── */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem',
          padding: '0.5rem 0',
        }}>
          <div>
            <div style={{ fontSize: '0.72rem', fontWeight: 800, color: '#22d3ee', letterSpacing: '0.12em', fontFamily: 'var(--font-mono)' }}>
              CIVICOS MUNICIPAL OPERATING SYSTEM • SPATIAL COMMAND CENTER
            </div>
            <h1 style={{ fontSize: '2rem', fontWeight: 900, color: '#ffffff', letterSpacing: '-0.03em' }}>
              CITY ENERGY COMMAND CENTER
            </h1>
          </div>

          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
            {[
              { id: 'COMMAND', label: 'OVERVIEW' },
              { id: 'GRID', label: 'GRID & FLOW' },
              { id: 'TWIN', label: 'DIGITAL TWIN' },
              { id: 'ANALYTICS', label: 'ANALYTICS' }
            ].map((mode) => {
              const active = activeView === mode.id || (mode.id === 'COMMAND' && activeView === 'OVERVIEW');
              return (
                <button
                  key={mode.id}
                  onClick={() => handleViewChange(mode.id)}
                  style={{
                    background: active ? 'linear-gradient(135deg, rgba(34, 211, 238, 0.25), rgba(6, 182, 212, 0.1))' : 'rgba(255,255,255,0.03)',
                    border: active ? '1px solid #22d3ee' : '1px solid rgba(255,255,255,0.08)',
                    borderRadius: '8px',
                    padding: '0.45rem 0.85rem',
                    color: active ? '#22d3ee' : '#cbd5e1',
                    fontSize: '0.72rem',
                    fontWeight: 800,
                    fontFamily: 'var(--font-mono)',
                    cursor: 'pointer',
                    boxShadow: active ? '0 0 16px rgba(34, 211, 238, 0.25)' : 'none',
                  }}
                >
                  {mode.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* ── Floating Energy Status Metrics & Live Energy Flow ── */}
        <div id="live-flow-section" style={{
          scrollMarginTop: '100px',
          border: ['GRID', 'DEMAND', 'SOURCES', 'STORAGE', 'COMMAND'].includes(activeView) ? '1px solid rgba(34, 211, 238, 0.4)' : 'none',
          borderRadius: '16px',
          padding: '0.25rem',
          transition: 'all 0.3s ease',
        }}>
          <LiveEnergyFlowPanel activeFilter={activeView} />
        </div>

        {/* ── Hero: 3D Spatial Digital Twin City Environment ── */}
        <div id="digital-twin-section" style={{
          scrollMarginTop: '100px',
          background: 'rgba(8, 14, 22, 0.75)',
          backdropFilter: 'blur(28px)',
          WebkitBackdropFilter: 'blur(28px)',
          border: activeView === 'TWIN' ? '2px solid #22d3ee' : '1px solid rgba(34, 211, 238, 0.25)',
          borderRadius: '20px',
          padding: '1rem',
          height: '560px',
          boxShadow: activeView === 'TWIN' ? '0 0 35px rgba(34, 211, 238, 0.3)' : '0 20px 60px rgba(0,0,0,0.8), 0 0 30px rgba(34, 211, 238, 0.1)',
          position: 'relative',
          transition: 'all 0.3s ease',
        }}>
          <CityEnergy3DModel
            selectedBuilding={selectedBuilding}
            onSelectBuilding={(bld) => setSelectedBuilding(bld)}
          />
        </div>

        {/* ── Predictive Analytics & System Event Stream ── */}
        <div id="analytics-section" style={{
          scrollMarginTop: '100px',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
          gap: '1.5rem',
          border: activeView === 'ANALYTICS' ? '1px solid rgba(34, 211, 238, 0.4)' : 'none',
          borderRadius: '16px',
          padding: '0.25rem',
          transition: 'all 0.3s ease',
        }}>
          <EnergyForecastChart />
          <SystemEventStream />
        </div>
      </main>

      {/* Signature "WHAT IF?" Scenario Simulator Modal */}
      <ScenarioSimulatorModal
        isOpen={scenarioOpen}
        onClose={() => setScenarioOpen(false)}
      />

      {/* AI Energy Intelligence Drawer */}
      <AiEnergyAssistantDrawer
        isOpen={aiOpen}
        onClose={() => setAiOpen(false)}
      />
    </div>
  );
}
