import React from 'react';
import { Shield } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer style={{ background: '#090d16', color: '#64748b', borderTop: '1px solid #1e293b', padding: '1.75rem 1.5rem', fontSize: '0.85rem' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '1rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#94a3b8' }}>
          <Shield size={18} color="#3b82f6" />
          <span style={{ fontWeight: 700, color: '#f8fafc' }}>CivicOS</span> — AI-Powered Civic Intelligence Platform
        </div>
        <div>
          {t('copyright')}
        </div>
        <div>
          System Status: <span style={{ color: '#10b981', fontWeight: 600 }}>● All Engines Operational</span>
        </div>
      </div>
    </footer>
  );
}
