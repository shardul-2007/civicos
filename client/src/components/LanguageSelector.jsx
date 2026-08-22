import React, { useState, useRef, useEffect } from 'react';
import { Globe, Check, ChevronDown } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function LanguageSelector({ compact = false, alignLeft = false }) {
  const { lang, changeLanguage } = useLanguage();
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  const LANGUAGES = [
    { code: 'en', name: 'English', flag: '🇬🇧', label: 'EN' },
    { code: 'hi', name: 'हिंदी', flag: '🇮🇳', label: 'HI' },
    { code: 'mr', name: 'मराठी', flag: '🇮🇳', label: 'MR' },
  ];

  const currentLang = LANGUAGES.find(l => l.code === lang) || LANGUAGES[0];

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div ref={dropdownRef} style={{ position: 'relative', display: 'inline-block', zIndex: 9999 }}>
      <button
        onClick={() => setOpen(!open)}
        className="btn-glass"
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.35rem',
          padding: compact ? '0.35rem 0.55rem' : '0.4rem 0.75rem',
          fontSize: '0.8rem',
          fontWeight: 700,
          color: '#34d399',
          borderColor: 'rgba(16, 185, 129, 0.3)',
          background: 'rgba(16, 185, 129, 0.08)',
          borderRadius: '0.5rem',
          cursor: 'pointer',
        }}
        title="Select Language / भाषा चुनें / भाषा निवडा"
      >
        <Globe size={15} color="#34d399" />
        <span>{currentLang.label}</span>
        <span style={{ fontSize: '0.7rem' }}>{currentLang.flag}</span>
        <ChevronDown size={12} style={{ transform: open ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }} />
      </button>

      {open && (
        <div style={{
          position: 'absolute',
          top: '42px',
          left: alignLeft ? 0 : 'auto',
          right: alignLeft ? 'auto' : 0,
          width: '150px',
          background: '#121722',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          borderRadius: '0.625rem',
          boxShadow: '0 20px 45px rgba(0,0,0,0.95)',
          padding: '0.35rem',
          zIndex: 9999,
          display: 'flex',
          flexDirection: 'column',
          gap: '0.2rem',
        }}>
          {LANGUAGES.map((item) => (
            <button
              key={item.code}
              onClick={() => {
                changeLanguage(item.code);
                setOpen(false);
              }}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                width: '100%',
                padding: '0.45rem 0.65rem',
                borderRadius: '0.375rem',
                background: lang === item.code ? 'rgba(16, 185, 129, 0.2)' : 'transparent',
                color: lang === item.code ? '#34d399' : '#ffffff',
                border: 'none',
                fontSize: '0.85rem',
                fontWeight: lang === item.code ? 700 : 500,
                cursor: 'pointer',
                textAlign: 'left',
              }}
            >
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <span>{item.flag}</span>
                <span>{item.name}</span>
              </span>
              {lang === item.code && <Check size={14} color="#34d399" />}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
