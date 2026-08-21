import React, { useState } from 'react';
import { X, FileSpreadsheet, Download, CheckCircle2, FileText } from 'lucide-react';

export default function ReportExportModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const [period, setPeriod] = useState('Monthly');
  const [downloaded, setDownloaded] = useState(false);

  const handleExport = (format) => {
    setDownloaded(true);
    setTimeout(() => {
      setDownloaded(false);
      onClose();
    }, 2000);
  };

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        background: 'rgba(5, 8, 15, 0.75)',
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
        zIndex: 500, // --z-modal
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1rem',
        animation: 'fadeIn 0.2s ease',
      }}
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          background: '#121722',
          border: '1px solid rgba(255, 255, 255, 0.12)',
          borderRadius: '0.75rem',
          width: '100%',
          maxWidth: '560px',
          padding: '2rem',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.8)',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '1.5rem',
            borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
            paddingBottom: '1rem',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <div style={{ background: 'rgba(16, 185, 129, 0.12)', border: '1px solid rgba(16, 185, 129, 0.25)', width: '36px', height: '36px', borderRadius: '0.4rem', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#34d399' }}>
              <FileSpreadsheet size={20} />
            </div>
            <div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#ffffff' }}>Generate Municipal Report</h3>
              <div style={{ fontSize: '0.75rem', color: '#94a3b8' }}>Export formatted executive intelligence metrics</div>
            </div>
          </div>
          <button
            onClick={onClose}
            style={{
              background: 'rgba(255, 255, 255, 0.06)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '0.4rem',
              color: '#cbd5e1',
              width: '32px',
              height: '32px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
            }}
          >
            <X size={18} />
          </button>
        </div>

        {downloaded ? (
          <div style={{ background: 'rgba(16, 185, 129, 0.15)', border: '1px solid #10b981', color: '#34d399', padding: '1.75rem', borderRadius: '0.5rem', textAlign: 'center' }}>
            <CheckCircle2 size={40} style={{ margin: '0 auto 0.75rem auto' }} />
            <h4 style={{ fontSize: '1.2rem', fontWeight: 800 }}>Municipal Report Exported Successfully</h4>
            <p style={{ fontSize: '0.85rem', color: '#cbd5e1', marginTop: '0.4rem' }}>
              CivicOS_{period}_Executive_Report_2026.pdf has been generated and queued for download.
            </p>
          </div>
        ) : (
          <div>
            <div style={{ marginBottom: '1.5rem' }}>
              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#cbd5e1', marginBottom: '0.5rem' }}>
                Select Reporting Horizon
              </label>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.5rem' }}>
                {['Daily', 'Weekly', 'Monthly'].map((p) => (
                  <button
                    key={p}
                    onClick={() => setPeriod(p)}
                    className={period === p ? 'btn-sage' : 'btn-glass'}
                    style={{ justifyContent: 'center', padding: '0.6rem', fontSize: '0.85rem' }}
                  >
                    {p}
                  </button>
                ))}
              </div>
            </div>

            <div style={{ background: '#0a0d14', padding: '1.25rem', borderRadius: '0.5rem', border: '1px solid rgba(255, 255, 255, 0.08)', marginBottom: '1.5rem', fontSize: '0.85rem' }}>
              <div style={{ fontWeight: 700, color: '#ffffff', marginBottom: '0.5rem' }}>Included Executive Sections:</div>
              <ul style={{ paddingLeft: '1.2rem', color: '#cbd5e1', lineHeight: 1.7, fontSize: '0.8rem' }}>
                <li>City Health Index & Monthly Benchmark Breakdown (82/100)</li>
                <li>Complaints Volume, Velocity & Category Distribution</li>
                <li>Department SLA Compliance & Workload Overload Metrics</li>
                <li>Geospatial Hotspots & Incident Clusters (Ward 14)</li>
                <li>AI Predictive Infrastructure Risk Forecasting</li>
              </ul>
            </div>

            <div style={{ display: 'flex', gap: '0.75rem' }}>
              <button onClick={() => handleExport('pdf')} className="btn-sage" style={{ flex: 1, justifyContent: 'center' }}>
                <Download size={16} /> Export PDF Report
              </button>
              <button onClick={() => handleExport('csv')} className="btn-glass" style={{ flex: 1, justifyContent: 'center' }}>
                <FileSpreadsheet size={16} /> Export CSV Data
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

