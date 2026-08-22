import React, { useState } from 'react';
import { X, FileSpreadsheet, Download, CheckCircle2, FileText } from 'lucide-react';

export default function ReportExportModal({ isOpen, onClose }) {
  const [period, setPeriod] = useState('Monthly');
  const [downloaded, setDownloaded] = useState(false);

  if (!isOpen) return null;

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
        zIndex: 2500,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1rem',
        animation: 'fadeIn 0.15s ease',
      }}
      onClick={onClose}
    >
      <div
        className="natural-glass-card"
        style={{
          width: '100%',
          maxWidth: '480px',
          background: '#0e1420',
          border: '1px solid rgba(255, 255, 255, 0.15)',
          borderRadius: '0.875rem',
          boxShadow: '0 25px 60px rgba(0, 0, 0, 0.9)',
          padding: '1.5rem',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
            <div style={{ width: '36px', height: '36px', borderRadius: '0.5rem', background: 'rgba(16, 185, 129, 0.15)', color: '#34d399', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <FileSpreadsheet size={20} />
            </div>
            <div>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#ffffff' }}>Export Municipal Report</h3>
              <div style={{ fontSize: '0.75rem', color: '#94a3b8' }}>Generate certified SLA & complaint analytics</div>
            </div>
          </div>
          <button onClick={onClose} style={{ background: 'none', border: 'none', color: '#94a3b8', cursor: 'pointer' }}>
            <X size={18} />
          </button>
        </div>

        {downloaded ? (
          <div style={{ textAlign: 'center', padding: '2rem 1rem' }}>
            <CheckCircle2 size={48} color="#34d399" style={{ margin: '0 auto 1rem' }} />
            <h4 style={{ fontSize: '1.1rem', color: '#ffffff', fontWeight: 700, marginBottom: '0.4rem' }}>Report Downloaded!</h4>
            <p style={{ fontSize: '0.85rem', color: '#94a3b8' }}>CivicOS_Municipal_SLA_Report_2026.csv has been exported to your downloads folder.</p>
          </div>
        ) : (
          <div>
            <div style={{ marginBottom: '1.25rem' }}>
              <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: '#cbd5e1', marginBottom: '0.5rem' }}>
                Select Report Period
              </label>
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                {['Daily', 'Weekly', 'Monthly', 'Quarterly'].map((p) => (
                  <button
                    key={p}
                    onClick={() => setPeriod(p)}
                    style={{
                      flex: 1,
                      padding: '0.45rem',
                      borderRadius: '0.375rem',
                      border: period === p ? '1px solid #34d399' : '1px solid rgba(255, 255, 255, 0.1)',
                      background: period === p ? 'rgba(16, 185, 129, 0.15)' : 'rgba(255, 255, 255, 0.03)',
                      color: period === p ? '#34d399' : '#cbd5e1',
                      fontSize: '0.8rem',
                      fontWeight: 600,
                      cursor: 'pointer',
                    }}
                  >
                    {p}
                  </button>
                ))}
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
              <button
                onClick={() => handleExport('CSV')}
                className="btn-sage"
                style={{ width: '100%', justifyContent: 'center', padding: '0.65rem', fontSize: '0.9rem' }}
              >
                <Download size={16} /> Download CSV Spreadsheet
              </button>
              <button
                onClick={() => handleExport('PDF')}
                className="btn-glass"
                style={{ width: '100%', justifyContent: 'center', padding: '0.65rem', fontSize: '0.9rem' }}
              >
                <FileText size={16} /> Export Municipal Executive PDF
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
