import React from 'react';
import { Shield, RefreshCw, AlertTriangle } from 'lucide-react';

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('[CivicOS ErrorBoundary Caught]:', error, errorInfo);
  }

  handleReload = () => {
    this.setState({ hasError: false, error: null });
    window.location.reload();
  };

  handleReset = () => {
    try {
      localStorage.clear();
      sessionStorage.clear();
    } catch (e) {
      // Ignore
    }
    this.setState({ hasError: false, error: null });
    window.location.href = '/';
  };

  render() {
    if (this.state.hasError) {
      return (
        <div style={{
          background: '#080b12',
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '2rem 1rem',
          color: '#ffffff',
          fontFamily: 'Outfit, Inter, sans-serif',
        }}>
          <div className="natural-glass-card" style={{
            maxWidth: '520px',
            width: '100%',
            padding: '2.5rem',
            background: '#121722',
            borderRadius: '1rem',
            border: '1px solid rgba(16, 185, 129, 0.3)',
            boxShadow: '0 25px 60px rgba(0, 0, 0, 0.9)',
            textAlign: 'center',
          }}>
            <div style={{
              width: '60px',
              height: '60px',
              borderRadius: '1rem',
              background: 'rgba(16, 185, 129, 0.15)',
              color: '#34d399',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '1.25rem',
            }}>
              <Shield size={32} />
            </div>

            <h2 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '0.5rem', color: '#ffffff' }}>
              CivicOS Platform Resilience
            </h2>
            <p style={{ color: '#94a3b8', fontSize: '0.9rem', marginBottom: '1rem', lineHeight: 1.5 }}>
              A temporary display sync anomaly occurred. Our automated platform resilience system has safely isolated the state.
            </p>

            {this.state.error && (
              <div style={{
                background: 'rgba(239, 68, 68, 0.1)',
                border: '1px solid rgba(239, 68, 68, 0.3)',
                borderRadius: '8px',
                padding: '0.75rem',
                color: '#f87171',
                fontSize: '0.75rem',
                fontFamily: 'monospace',
                textAlign: 'left',
                marginBottom: '1.25rem',
                overflowX: 'auto',
                maxHeight: '120px',
              }}>
                <div><strong>Diagnostics:</strong> {this.state.error.toString()}</div>
                {this.state.error.stack && (
                  <div style={{ marginTop: '0.4rem', fontSize: '0.68rem', color: '#cbd5e1', whiteSpace: 'pre-wrap' }}>
                    {this.state.error.stack.split('\n').slice(0, 3).join('\n')}
                  </div>
                )}
              </div>
            )}

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <button
                onClick={this.handleReload}
                className="btn-sage"
                style={{
                  width: '100%',
                  justifyContent: 'center',
                  padding: '0.75rem',
                  fontSize: '0.95rem',
                  fontWeight: 700,
                  cursor: 'pointer',
                }}
              >
                <RefreshCw size={16} /> Refresh & Restore Portal
              </button>

              <button
                onClick={this.handleReset}
                className="btn-glass"
                style={{
                  width: '100%',
                  justifyContent: 'center',
                  padding: '0.75rem',
                  fontSize: '0.88rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  borderColor: 'rgba(239, 68, 68, 0.4)',
                  color: '#f87171',
                }}
              >
                Clear Session Cache & Reset App
              </button>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
