import React, { useState } from 'react';
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip } from 'recharts';
import { TrendingUp, BarChart2, Zap } from 'lucide-react';

export default function EnergyForecastChart() {
  const [timeframe, setTimeframe] = useState('24H');

  const DATA_24H = [
    { time: '00:00', demand: 12.2, gen: 14.5, storage: 68, renewable: 65 },
    { time: '04:00', demand: 10.8, gen: 13.0, storage: 72, renewable: 60 },
    { time: '08:00', demand: 16.4, gen: 20.2, storage: 85, renewable: 78 },
    { time: '12:00', demand: 19.8, gen: 26.5, storage: 90, renewable: 88 },
    { time: '16:00', demand: 21.2, gen: 24.8, storage: 82, renewable: 80 },
    { time: '20:00', demand: 18.4, gen: 19.0, storage: 64, renewable: 72 },
    { time: '23:59', demand: 14.1, gen: 16.2, storage: 60, renewable: 68 },
  ];

  const DATA_7D = [
    { time: 'Mon', demand: 110, gen: 140, storage: 75, renewable: 70 },
    { time: 'Tue', demand: 118, gen: 152, storage: 80, renewable: 74 },
    { time: 'Wed', demand: 125, gen: 160, storage: 82, renewable: 76 },
    { time: 'Thu', demand: 115, gen: 148, storage: 78, renewable: 72 },
    { time: 'Fri', demand: 130, gen: 168, storage: 85, renewable: 80 },
    { time: 'Sat', demand: 98, gen: 135, storage: 90, renewable: 84 },
    { time: 'Sun', demand: 90, gen: 128, storage: 92, renewable: 86 },
  ];

  const DATA_30D = [
    { time: 'W1', demand: 780, gen: 950, storage: 80, renewable: 72 },
    { time: 'W2', demand: 820, gen: 1020, storage: 84, renewable: 75 },
    { time: 'W3', demand: 790, gen: 980, storage: 82, renewable: 74 },
    { time: 'W4', demand: 850, gen: 1080, storage: 88, renewable: 79 },
  ];

  const chartData = timeframe === '24H' ? DATA_24H : timeframe === '7D' ? DATA_7D : DATA_30D;

  return (
    <div style={{
      background: 'rgba(8, 14, 22, 0.75)',
      backdropFilter: 'blur(24px)',
      WebkitBackdropFilter: 'blur(24px)',
      border: '1px solid rgba(34, 211, 238, 0.2)',
      borderRadius: '16px',
      padding: '1.25rem',
      boxShadow: '0 12px 32px rgba(0,0,0,0.6)',
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem', flexWrap: 'wrap', gap: '0.5rem' }}>
        <div>
          <div style={{ fontSize: '0.68rem', fontWeight: 800, color: '#22d3ee', letterSpacing: '0.08em', fontFamily: 'var(--font-mono)' }}>
            PREDICTIVE ANALYTICS ENGINE
          </div>
          <h3 style={{ fontSize: '1.1rem', fontWeight: 900, color: '#ffffff' }}>
            City Energy Forecast
          </h3>
        </div>

        {/* Timeframe Buttons */}
        <div style={{ display: 'flex', gap: '0.3rem', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '8px', padding: '0.2rem' }}>
          {['24H', '7D', '30D'].map((t) => (
            <button
              key={t}
              onClick={() => setTimeframe(t)}
              style={{
                background: timeframe === t ? '#22d3ee' : 'transparent',
                border: 'none',
                borderRadius: '6px',
                padding: '0.3rem 0.65rem',
                color: timeframe === t ? '#05080b' : '#cbd5e1',
                fontSize: '0.72rem',
                fontWeight: 800,
                fontFamily: 'var(--font-mono)',
                cursor: 'pointer',
              }}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      <div style={{ width: '100%', height: '220px' }}>
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={chartData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
            <defs>
              <linearGradient id="cyanGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#22d3ee" stopOpacity={0.4} />
                <stop offset="95%" stopColor="#22d3ee" stopOpacity={0.0} />
              </linearGradient>
              <linearGradient id="sageGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#34d399" stopOpacity={0.4} />
                <stop offset="95%" stopColor="#34d399" stopOpacity={0.0} />
              </linearGradient>
            </defs>
            <XAxis dataKey="time" stroke="#64748b" fontSize={11} tickLine={false} />
            <YAxis stroke="#64748b" fontSize={11} tickLine={false} />
            <Tooltip
              contentStyle={{
                background: 'rgba(8, 14, 22, 0.95)',
                border: '1px solid rgba(34, 211, 238, 0.4)',
                borderRadius: '10px',
                color: '#ffffff',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.75rem',
              }}
            />
            <Area type="monotone" dataKey="gen" stroke="#22d3ee" strokeWidth={2} fillOpacity={1} fill="url(#cyanGrad)" name="Generation (MW)" />
            <Area type="monotone" dataKey="demand" stroke="#34d399" strokeWidth={2} fillOpacity={1} fill="url(#sageGrad)" name="Demand (MW)" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
