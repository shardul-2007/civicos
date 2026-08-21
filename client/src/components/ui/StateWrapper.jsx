import React from 'react';
import { RefreshCw, AlertTriangle, Inbox } from 'lucide-react';

/**
 * StateWrapper — Universal Loading / Error / Empty state component.
 * Usage:
 *   <StateWrapper loading={loading} error={error} empty={!data?.length} onRetry={loadFn}>
 *     {children}
 *   </StateWrapper>
 */
export default function StateWrapper({
  loading,
  error,
  empty,
  emptyTitle = 'No Data Found',
  emptyMessage = 'Nothing to show here yet.',
  onRetry,
  children,
  loadingLabel = 'Loading live municipal data...',
  minHeight = '60vh',
}) {
  if (loading) {
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight,
          gap: '1rem',
          color: '#94a3b8',
        }}
      >
        {/* Animated Ring */}
        <div
          style={{
            width: '44px',
            height: '44px',
            borderRadius: '50%',
            border: '3px solid rgba(16, 185, 129, 0.2)',
            borderTopColor: '#10b981',
            animation: 'spin 0.9s linear infinite',
          }}
        />
        <div style={{ fontSize: '0.9rem', fontWeight: 600 }}>{loadingLabel}</div>
        <div
          style={{
            display: 'flex',
            gap: '4px',
            alignItems: 'center',
          }}
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className="pulse-dot"
              style={{
                animationDelay: `${i * 0.3}s`,
                width: '6px',
                height: '6px',
              }}
            />
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight,
          padding: '2rem 1rem',
        }}
      >
        <div
          style={{
            background: 'rgba(239, 68, 68, 0.12)',
            border: '1px solid rgba(239, 68, 68, 0.35)',
            borderRadius: '0.75rem',
            padding: '2rem',
            maxWidth: '480px',
            width: '100%',
            textAlign: 'center',
          }}
        >
          <AlertTriangle
            size={36}
            color="#ef4444"
            style={{ margin: '0 auto 1rem auto', display: 'block' }}
          />
          <h3 style={{ color: '#ffffff', fontSize: '1.1rem', fontWeight: 800, marginBottom: '0.5rem' }}>
            Connection Error
          </h3>
          <p style={{ color: '#fca5a5', fontSize: '0.85rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
            {typeof error === 'string' ? error : 'Unable to connect to the Municipal Command API. Please check your server connection.'}
          </p>
          {onRetry && (
            <button
              onClick={onRetry}
              className="btn-sage"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.6rem 1.25rem' }}
            >
              <RefreshCw size={15} />
              Retry Connection
            </button>
          )}
        </div>
      </div>
    );
  }

  if (empty) {
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight,
          gap: '0.75rem',
          color: '#64748b',
          textAlign: 'center',
          padding: '2rem',
        }}
      >
        <Inbox size={40} style={{ opacity: 0.5 }} />
        <div style={{ fontSize: '1rem', fontWeight: 700, color: '#94a3b8' }}>{emptyTitle}</div>
        <div style={{ fontSize: '0.85rem' }}>{emptyMessage}</div>
        {onRetry && (
          <button
            onClick={onRetry}
            className="btn-glass"
            style={{ marginTop: '0.5rem', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', padding: '0.5rem 1rem' }}
          >
            <RefreshCw size={14} /> Refresh
          </button>
        )}
      </div>
    );
  }

  return <>{children}</>;
}
