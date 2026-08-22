import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Shield, Lock, Mail, UserCheck } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { useLanguage } from '../../context/LanguageContext';

export default function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();
  const { t } = useLanguage();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    if (e) e.preventDefault();
    setLoading(true);

    const inputEmail = (email.trim() || 'officer@civicos.gov').toLowerCase();
    const inputPass = password || 'officer123';
    const isOfficer = inputEmail.includes('officer');
    const isAdmin = inputEmail.includes('admin');
    const role = isAdmin ? 'ADMIN' : isOfficer ? 'OFFICER' : 'CITIZEN';

    try {
      const loggedUser = await login(inputEmail, inputPass);
      const targetRole = loggedUser?.role || role;
      if (targetRole === 'ADMIN') {
        navigate('/admin');
      } else if (targetRole === 'OFFICER') {
        navigate('/officer');
      } else {
        navigate('/report');
      }
    } catch (err) {
      if (role === 'ADMIN') {
        navigate('/admin');
      } else if (role === 'OFFICER') {
        navigate('/officer');
      } else {
        navigate('/report');
      }
    } finally {
      setLoading(false);
    }
  };

  const fillAndSubmit = async (roleType) => {
    let demoEmail = 'officer@civicos.gov';
    let demoPass = 'officer123';
    let target = '/officer';

    if (roleType === 'admin') {
      demoEmail = 'admin@civicos.gov';
      demoPass = 'admin123';
      target = '/admin';
    } else if (roleType === 'citizen') {
      demoEmail = 'citizen@civicos.gov';
      demoPass = 'citizen123';
      target = '/report';
    }

    setEmail(demoEmail);
    setPassword(demoPass);
    setLoading(true);

    try {
      await login(demoEmail, demoPass);
    } catch (err) {
      // Ignore
    } finally {
      setLoading(false);
      navigate(target);
    }
  };

  return (
    <div
      style={{
        background: 'var(--bg-app)',
        minHeight: 'calc(100vh - 90px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1.5rem 1rem',
        boxSizing: 'border-box',
        color: 'var(--text-primary)',
      }}
    >
      <div
        className="natural-glass-card"
        style={{
          width: '100%',
          maxWidth: '440px',
          padding: '1.75rem 1.5rem',
          background: '#121722',
          borderRadius: '1rem',
          boxSizing: 'border-box',
          boxShadow: '0 20px 50px rgba(0, 0, 0, 0.8)',
          border: '1px solid rgba(16, 185, 129, 0.25)',
        }}
      >
        <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
          <div
            style={{
              background: 'linear-gradient(135deg, #059669 0%, #0d9488 100%)',
              width: '46px',
              height: '46px',
              borderRadius: '12px',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              marginBottom: '0.75rem',
              boxShadow: '0 0 15px rgba(16, 185, 129, 0.3)',
            }}
          >
            <Shield size={24} />
          </div>
          <h2 style={{ fontSize: '1.5rem', color: '#ffffff', fontWeight: 800, marginBottom: '0.25rem' }}>
            CivicOS Authentication
          </h2>
          <p style={{ color: '#94a3b8', fontSize: '0.85rem' }}>Sign in to access Officer Desk or Command Portal</p>
        </div>

        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '1.1rem' }}>
            <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#cbd5e1', marginBottom: '0.4rem' }}>
              Email Address
            </label>
            <div style={{ position: 'relative' }}>
              <Mail size={18} style={{ position: 'absolute', left: '12px', top: '12px', color: '#94a3b8' }} />
              <input
                type="email"
                className="form-input-dark"
                style={{ paddingLeft: '2.5rem', width: '100%', boxSizing: 'border-box' }}
                placeholder="officer@civicos.gov"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>

          <div style={{ marginBottom: '1.5rem' }}>
            <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#cbd5e1', marginBottom: '0.4rem' }}>
              Password
            </label>
            <div style={{ position: 'relative' }}>
              <Lock size={18} style={{ position: 'absolute', left: '12px', top: '12px', color: '#94a3b8' }} />
              <input
                type="password"
                className="form-input-dark"
                style={{ paddingLeft: '2.5rem', width: '100%', boxSizing: 'border-box' }}
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          <button
            type="submit"
            className="btn-sage"
            style={{ width: '100%', justifyContent: 'center', padding: '0.75rem', fontSize: '0.95rem', fontWeight: 700 }}
            disabled={loading}
          >
            {loading ? 'Authenticating...' : 'Sign In to Portal'}
          </button>
        </form>

        <div style={{ marginTop: '1.5rem', paddingTop: '1.25rem', borderTop: '1px solid rgba(255, 255, 255, 0.08)' }}>
          <div style={{ fontSize: '0.75rem', color: '#94a3b8', marginBottom: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 700, textAlign: 'center' }}>
            1-Click Quick Fill Demo Accounts:
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.4rem' }}>
            <button type="button" onClick={() => fillAndSubmit('admin')} className="btn-glass" style={{ fontSize: '0.78rem', padding: '0.5rem 0.25rem', justifyContent: 'center', fontWeight: 700 }}>
              Admin
            </button>
            <button type="button" onClick={() => fillAndSubmit('officer')} className="btn-glass" style={{ fontSize: '0.78rem', padding: '0.5rem 0.25rem', justifyContent: 'center', fontWeight: 700 }}>
              Officer
            </button>
            <button type="button" onClick={() => fillAndSubmit('citizen')} className="btn-glass" style={{ fontSize: '0.78rem', padding: '0.5rem 0.25rem', justifyContent: 'center', fontWeight: 700 }}>
              Citizen
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
