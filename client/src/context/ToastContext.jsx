import React, { createContext, useContext, useState, useCallback, useRef } from 'react';
import { CheckCircle2, AlertTriangle, XCircle, X, Info } from 'lucide-react';

const ToastContext = createContext(null);

export function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([]);
  const idRef = useRef(0);

  const showToast = useCallback((message, type = 'success', duration = 4500) => {
    const id = ++idRef.current;
    setToasts((prev) => [...prev, { id, message, type }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, duration);
  }, []);

  const dismiss = (id) => setToasts((prev) => prev.filter((t) => t.id !== id));

  const iconMap = {
    success: <CheckCircle2 size={18} />,
    error: <XCircle size={18} />,
    warning: <AlertTriangle size={18} />,
    info: <Info size={18} />,
  };

  const colorMap = {
    success: {
      background: 'rgba(16, 185, 129, 0.15)',
      border: '1px solid #10b981',
      color: '#34d399',
    },
    error: {
      background: 'rgba(239, 68, 68, 0.15)',
      border: '1px solid #ef4444',
      color: '#f87171',
    },
    warning: {
      background: 'rgba(245, 158, 11, 0.15)',
      border: '1px solid #f59e0b',
      color: '#fbbf24',
    },
    info: {
      background: 'rgba(59, 130, 246, 0.12)',
      border: '1px solid #3b82f6',
      color: '#60a5fa',
    },
  };

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}

      {/* Fixed Toast Container */}
      <div
        style={{
          position: 'fixed',
          bottom: '1.5rem',
          right: '1.5rem',
          zIndex: 'var(--z-toast, 600)',
          display: 'flex',
          flexDirection: 'column',
          gap: '0.65rem',
          maxWidth: '420px',
          width: 'calc(100vw - 2rem)',
          pointerEvents: 'none',
        }}
      >
        {toasts.map((toast) => {
          const colors = colorMap[toast.type] || colorMap.success;
          return (
            <div
              key={toast.id}
              style={{
                ...colors,
                padding: '0.9rem 1.1rem',
                borderRadius: '0.6rem',
                display: 'flex',
                alignItems: 'flex-start',
                gap: '0.6rem',
                fontWeight: 600,
                fontSize: '0.875rem',
                lineHeight: 1.45,
                boxShadow: '0 8px 32px rgba(0,0,0,0.6)',
                backdropFilter: 'blur(16px)',
                WebkitBackdropFilter: 'blur(16px)',
                animation: 'toast-in 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                pointerEvents: 'all',
              }}
            >
              <span style={{ marginTop: '1px', flexShrink: 0 }}>{iconMap[toast.type]}</span>
              <span style={{ flex: 1 }}>{toast.message}</span>
              <button
                onClick={() => dismiss(toast.id)}
                style={{
                  background: 'none',
                  border: 'none',
                  color: 'inherit',
                  cursor: 'pointer',
                  padding: '0',
                  opacity: 0.7,
                  flexShrink: 0,
                  display: 'flex',
                  alignItems: 'center',
                }}
                aria-label="Dismiss notification"
              >
                <X size={16} />
              </button>
            </div>
          );
        })}
      </div>
    </ToastContext.Provider>
  );
}

export function useToast() {
  const ctx = useContext(ToastContext);
  if (!ctx) throw new Error('useToast must be used inside <ToastProvider>');
  return ctx;
}
