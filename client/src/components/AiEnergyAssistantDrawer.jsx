import React, { useState } from 'react';
import { Sparkles, X, Send, Bot, Zap, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function AiEnergyAssistantDrawer({ isOpen, onClose }) {
  const [messages, setMessages] = useState([
    {
      sender: 'ai',
      text: 'CivicOS Energy Intelligence online. Select an optimization query or type a question to analyze city-wide infrastructure.',
      analysis: null,
    },
  ]);
  const [inputVal, setInputVal] = useState('');

  if (!isOpen) return null;

  const PRESET_QUERIES = [
    'How can we reduce peak demand?',
    'Which buildings consume the most energy?',
    'Where should solar capacity be added?',
    'Which areas have abnormal consumption?',
  ];

  const handleQuerySelect = (query) => {
    const userMsg = { sender: 'user', text: query };

    let aiResponse = {
      sender: 'ai',
      text: `Analysis complete for: "${query}". Here is the recommended grid strategy based on real-time SCADA telemetry:`,
      analysis: {
        peakDemandTime: '18:00 – 21:00 IST',
        primaryContributors: ['Residential Sector B (Ward 14)', 'Commercial Complex 108'],
        potentialReduction: '8.4% – 12.2%',
        recommendation: 'Shift Megapack battery discharge cycle to 18:30 IST to absorb peak residential surge and prevent secondary substation stress.',
      },
    };

    if (query.includes('buildings')) {
      aiResponse.analysis.primaryContributors = ['Commercial Complex 108 (410 kW)', 'Industrial Park 019 (780 kW)'];
      aiResponse.analysis.recommendation = 'Deploy automated smart building load shedding protocol for HVAC compressors between 14:00 and 16:00.';
    } else if (query.includes('solar')) {
      aiResponse.analysis.recommendation = 'Install 2.4 MW rooftop solar arrays on Ward 14 Municipal Roofs to optimize localized grid self-consumption by 18.5%.';
    }

    setMessages((prev) => [...prev, userMsg, aiResponse]);
  };

  const handleSend = (e) => {
    e.preventDefault();
    if (!inputVal.trim()) return;
    handleQuerySelect(inputVal.trim());
    setInputVal('');
  };

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      right: 0,
      bottom: 0,
      width: '100%',
      maxWidth: '460px',
      background: 'rgba(5, 8, 11, 0.92)',
      backdropFilter: 'blur(32px)',
      WebkitBackdropFilter: 'blur(32px)',
      borderLeft: '1px solid rgba(34, 211, 238, 0.35)',
      zIndex: 1000,
      display: 'flex',
      flexDirection: 'column',
      boxShadow: '-20px 0 60px rgba(0,0,0,0.9), 0 0 30px rgba(34, 211, 238, 0.15)',
      color: '#ffffff',
    }}>
      {/* Header */}
      <div style={{
        padding: '1.25rem 1.5rem',
        borderBottom: '1px solid rgba(255,255,255,0.08)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
          <div style={{
            width: '32px',
            height: '32px',
            borderRadius: '8px',
            background: 'rgba(34, 211, 238, 0.15)',
            border: '1px solid #22d3ee',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#22d3ee',
          }}>
            <Sparkles size={16} />
          </div>
          <div>
            <div style={{ fontSize: '0.95rem', fontWeight: 900, color: '#ffffff' }}>
              CIVICOS INTELLIGENCE
            </div>
            <div style={{ fontSize: '0.65rem', color: '#34d399', fontFamily: 'var(--font-mono)' }}>
              ● AI MODEL RUNNING IN SCADA CONTEXT
            </div>
          </div>
        </div>

        <button
          onClick={onClose}
          style={{ background: 'transparent', border: 'none', color: '#94a3b8', cursor: 'pointer' }}
        >
          <X size={20} />
        </button>
      </div>

      {/* Messages Stream */}
      <div style={{
        flex: 1,
        padding: '1.25rem',
        overflowY: 'auto',
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
      }}>
        {messages.map((m, idx) => (
          <div
            key={idx}
            style={{
              alignSelf: m.sender === 'user' ? 'flex-end' : 'flex-start',
              maxWidth: m.sender === 'user' ? '80%' : '100%',
              background: m.sender === 'user' ? 'rgba(34, 211, 238, 0.15)' : 'rgba(255,255,255,0.03)',
              border: m.sender === 'user' ? '1px solid rgba(34, 211, 238, 0.4)' : '1px solid rgba(255,255,255,0.08)',
              borderRadius: '14px',
              padding: '1rem',
              color: '#ffffff',
            }}
          >
            <div style={{ fontSize: '0.85rem', lineHeight: 1.5, marginBottom: m.analysis ? '0.85rem' : '0' }}>
              {m.text}
            </div>

            {/* Analysis Output Box */}
            {m.analysis && (
              <div style={{
                background: 'rgba(8, 14, 22, 0.9)',
                border: '1px solid rgba(34, 211, 238, 0.3)',
                borderRadius: '12px',
                padding: '0.9rem',
                fontSize: '0.78rem',
              }}>
                <div style={{ fontSize: '0.68rem', fontWeight: 800, color: '#34d399', textTransform: 'uppercase', marginBottom: '0.5rem', fontFamily: 'var(--font-mono)' }}>
                  ✓ ANALYSIS COMPLETE
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', fontFamily: 'var(--font-mono)' }}>
                  <div>
                    <span style={{ color: '#94a3b8' }}>Peak Demand Window: </span>
                    <span style={{ color: '#22d3ee', fontWeight: 800 }}>{m.analysis.peakDemandTime}</span>
                  </div>
                  <div>
                    <span style={{ color: '#94a3b8' }}>Primary Contributors: </span>
                    <span style={{ color: '#ffffff' }}>{m.analysis.primaryContributors.join(', ')}</span>
                  </div>
                  <div>
                    <span style={{ color: '#94a3b8' }}>Potential Reduction: </span>
                    <span style={{ color: '#34d399', fontWeight: 800 }}>{m.analysis.potentialReduction}</span>
                  </div>
                </div>

                <div style={{
                  marginTop: '0.65rem',
                  paddingTop: '0.65rem',
                  borderTop: '1px solid rgba(255,255,255,0.08)',
                  color: '#fbbf24',
                  fontSize: '0.78rem',
                  fontWeight: 700,
                  lineHeight: 1.4,
                }}>
                  💡 RECOMMENDATION: {m.analysis.recommendation}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Preset Query Chips */}
      <div style={{ padding: '0.85rem 1.25rem', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
        <div style={{ fontSize: '0.65rem', color: '#94a3b8', textTransform: 'uppercase', marginBottom: '0.5rem', fontFamily: 'var(--font-mono)' }}>
          SUGGESTED INTELLIGENCE QUERIES
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
          {PRESET_QUERIES.map((q) => (
            <button
              key={q}
              onClick={() => handleQuerySelect(q)}
              style={{
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: '8px',
                padding: '0.45rem 0.75rem',
                color: '#cbd5e1',
                fontSize: '0.75rem',
                textAlign: 'left',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <span>{q}</span>
              <ArrowRight size={12} color="#22d3ee" />
            </button>
          ))}
        </div>
      </div>

      {/* Form Input */}
      <form onSubmit={handleSend} style={{ padding: '1rem 1.25rem', borderTop: '1px solid rgba(255,255,255,0.08)', display: 'flex', gap: '0.5rem' }}>
        <input
          type="text"
          placeholder="Ask CivicOS Intelligence..."
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
          style={{
            flex: 1,
            background: 'rgba(255,255,255,0.04)',
            border: '1px solid rgba(34, 211, 238, 0.3)',
            borderRadius: '10px',
            padding: '0.65rem 0.85rem',
            color: '#ffffff',
            fontSize: '0.85rem',
            outline: 'none',
          }}
        />
        <button
          type="submit"
          style={{
            background: '#22d3ee',
            border: 'none',
            borderRadius: '10px',
            padding: '0.65rem 1rem',
            color: '#05080b',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Send size={16} />
        </button>
      </form>
    </div>
  );
}
