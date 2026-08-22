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
    document.addEventListener('touchstart', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, []);

  const handleSelect = (code) => {
    changeLanguage(code);
    setOpen(false);
  };

  return (
    <div ref={dropdownRef} style={{ position: 'relative', display: 'inline-block', zIndex: 99999 }}>
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="btn-glass"
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.4rem',
          padding: compact ? '0.45rem 0.65rem' : '0.5rem 0.85rem',
          fontSize: '0.85rem',
          fontWeight: 700,
          color: '#34d399',
          borderColor: 'rgba(16, 185, 129, 0.4)',
          background: 'rgba(16, 185, 129, 0.12)',
          borderRadius: '0.5rem',
          cursor: 'pointer',
          userSelect: 'none',
          WebkitTapHighlightColor: 'transparent',
        }}
        title="Select Language / भाषा चुनें / भाषा निवडा"
      >
        <Globe size={16} color="#34d399" />
        <span>{currentLang.label}</span>
        <span style={{ fontSize: '0.75rem' }}>{currentLang.flag}</span>
        <ChevronDown size={14} style={{ transform: open ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }} />
      </button>

      {open && (
        <div
          style={{
            position: 'absolute',
            top: '46px',
            left: alignLeft ? 0 : 'auto',
            right: alignLeft ? 'auto' : 0,
            minWidth: '160px',
            background: '#121722',
            border: '1.5px solid rgba(16, 185, 129, 0.4)',
            borderRadius: '0.75rem',
            boxShadow: '0 20px 50px rgba(0,0,0,0.95)',
            padding: '0.4rem',
            zIndex: 99999,
            display: 'flex',
            flexDirection: 'column',
            gap: '0.25rem',
          }}
        >
          {LANGUAGES.map((item) => (
            <button
              key={item.code}
              type="button"
              onClick={() => handleSelect(item.code)}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                width: '100%',
                padding: '0.6rem 0.75rem',
                minHeight: '44px', // Touch target optimized for mobile fingers
                borderRadius: '0.5rem',
                background: lang === item.code ? 'rgba(16, 185, 129, 0.25)' : 'rgba(255, 255, 255, 0.03)',
                color: lang === item.code ? '#34d399' : '#ffffff',
                border: lang === item.code ? '1px solid rgba(16, 185, 129, 0.5)' : '1px solid transparent',
                fontSize: '0.9rem',
                fontWeight: lang === item.code ? 800 : 600,
                cursor: 'pointer',
                textAlign: 'left',
                userSelect: 'none',
                WebkitTapHighlightColor: 'transparent',
              }}
            >
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span style={{ fontSize: '1rem' }}>{item.flag}</span>
                <span>{item.name}</span>
              </span>
              {lang === item.code && <Check size={16} color="#34d399" />}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
