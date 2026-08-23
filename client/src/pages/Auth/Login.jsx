import React, { useState } from 'react';
import { useNavigate, useSearchParams, Link } from 'react-router-dom';
import { Shield, Lock, Mail, User, Phone, AlertCircle, ArrowRight } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { useLanguage } from '../../context/LanguageContext';

export default function Login() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const redirectParam = searchParams.get('redirect');

  const { login, register } = useAuth();
  const { t } = useLanguage();

  const [mode, setMode] = useState('login'); // 'login' or 'signup'
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleRoleRedirect = (userObj) => {
    if (redirectParam) {
      navigate(redirectParam);
      return;
    }
    const role = userObj?.role || 'CITIZEN';
    if (role === 'ADMIN') {
      navigate('/admin');
    } else if (role === 'OFFICER') {
      navigate('/officer');
    } else {
      navigate('/citizen');
    }
  };

  const handleSubmit = async (e) => {
    if (e) e.preventDefault();
    setError('');

    const cleanEmail = email.trim().toLowerCase();

    if (!cleanEmail) {
      setError('Please enter your email address.');
      return;
    }
    if (!password) {
      setError('Please enter your password.');
      return;
    }

    if (mode === 'signup') {
      if (!name.trim()) {
        setError('Please enter your full name.');
        return;
      }
      if (password.length < 6) {
        setError('Password must be at least 6 characters.');
        return;
      }
      if (password !== confirmPassword) {
        setError('Passwords do not match.');
        return;
      }
    }

    setLoading(true);

    try {
      if (mode === 'signup') {
        const registeredUser = await register({
          name: name.trim(),
          email: cleanEmail,
          phone: phone.trim(),
          password,
          role: 'CITIZEN',
        });
        handleRoleRedirect(registeredUser);
      } else {
        const loggedUser = await login(cleanEmail, password);
        handleRoleRedirect(loggedUser);
      }
    } catch (err) {
      setError(err.response?.data?.message || err.message || 'Authentication failed. Please check credentials.');
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
      target = '/citizen';
    }

    setEmail(demoEmail);
    setPassword(demoPass);
    setLoading(true);

    try {
      const userObj = await login(demoEmail, demoPass);
      handleRoleRedirect(userObj);
    } catch (err) {
      navigate(target);
    } finally {
      setLoading(false);
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
        padding: '2.5rem 1rem',
        boxSizing: 'border-box',
        color: 'var(--text-primary)',
      }}
    >
      <div
        className="natural-glass-card"
        style={{
          width: '100%',
          maxWidth: '460px',
          padding: '2rem 1.75rem',
          background: '#121722',
          borderRadius: '1.25rem',
          boxSizing: 'border-box',
          boxShadow: '0 25px 60px rgba(0, 0, 0, 0.9)',
          border: '1px solid rgba(16, 185, 129, 0.3)',
        }}
      >
        {/* Brand Header */}
        <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
          <div
            style={{
              background: 'linear-gradient(135deg, #059669 0%, #0d9488 100%)',
              width: '50px',
              height: '50px',
              borderRadius: '14px',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              marginBottom: '0.75rem',
              boxShadow: '0 0 20px rgba(16, 185, 129, 0.4)',
            }}
          >
            <Shield size={26} />
          </div>
          <h2 style={{ fontSize: '1.5rem', color: '#ffffff', fontWeight: 800, marginBottom: '0.35rem' }}>
            CivicOS Operating System
          </h2>
          <p style={{ color: '#94a3b8', fontSize: '0.85rem' }}>
            {mode === 'login' ? 'Sign in to access your municipal portal' : 'Register a new citizen account'}
          </p>
        </div>

        {/* Tab Switcher */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.4rem', background: 'rgba(255,255,255,0.03)', padding: '0.3rem', borderRadius: '0.75rem', marginBottom: '1.5rem', border: '1px solid rgba(255,255,255,0.06)' }}>
          <button
            type="button"
            onClick={() => { setMode('login'); setError(''); }}
            style={{
              padding: '0.55rem',
              fontSize: '0.85rem',
              fontWeight: 800,
              borderRadius: '0.5rem',
              border: 'none',
              cursor: 'pointer',
              background: mode === 'login' ? 'var(--grad-sage)' : 'transparent',
              color: mode === 'login' ? '#ffffff' : '#94a3b8',
              boxShadow: mode === 'login' ? '0 4px 12px rgba(16,185,129,0.3)' : 'none',
              transition: 'all 0.2s',
            }}
          >
            {t('login')}
          </button>
          <button
            type="button"
            onClick={() => { setMode('signup'); setError(''); }}
            style={{
              padding: '0.55rem',
              fontSize: '0.85rem',
              fontWeight: 800,
              borderRadius: '0.5rem',
              border: 'none',
              cursor: 'pointer',
              background: mode === 'signup' ? 'var(--grad-sage)' : 'transparent',
              color: mode === 'signup' ? '#ffffff' : '#94a3b8',
              boxShadow: mode === 'signup' ? '0 4px 12px rgba(16,185,129,0.3)' : 'none',
              transition: 'all 0.2s',
            }}
          >
            Sign Up
          </button>
        </div>

        {/* Error Alert */}
        {error && (
          <div style={{ background: 'rgba(239,68,68,0.12)', border: '1px solid rgba(239,68,68,0.35)', color: '#f87171', padding: '0.75rem 0.9rem', borderRadius: '0.5rem', marginBottom: '1.25rem', fontSize: '0.82rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            <AlertCircle size={15} style={{ flexShrink: 0 }} /> {error}
          </div>
        )}

        {/* Auth Form */}
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem' }}>

          {/* Full Name for Signup */}
          {mode === 'signup' && (
            <div>
              <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, color: '#cbd5e1', marginBottom: '0.35rem' }}>
                Full Name *
              </label>
              <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
                <User size={17} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: '#94a3b8', pointerEvents: 'none', zIndex: 2 }} />
                <input
                  type="text"
                  className="form-input-dark"
                  style={{ paddingLeft: '2.8rem', width: '100%', height: '48px', fontSize: '0.88rem', boxSizing: 'border-box' }}
                  placeholder="Shardul Parihar"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
            </div>
          )}

          {/* Email */}
          <div>
            <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, color: '#cbd5e1', marginBottom: '0.35rem' }}>
              Email Address *
            </label>
            <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
              <Mail size={17} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: '#94a3b8', pointerEvents: 'none', zIndex: 2 }} />
              <input
                type="email"
                className="form-input-dark"
                style={{ paddingLeft: '2.8rem', width: '100%', height: '48px', fontSize: '0.88rem', boxSizing: 'border-box' }}
                placeholder="citizen@civicos.gov"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>

          {/* Phone for Signup */}
          {mode === 'signup' && (
            <div>
              <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, color: '#cbd5e1', marginBottom: '0.35rem' }}>
                Mobile Number
              </label>
              <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
                <Phone size={17} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: '#94a3b8', pointerEvents: 'none', zIndex: 2 }} />
                <input
                  type="tel"
                  className="form-input-dark"
                  style={{ paddingLeft: '2.8rem', width: '100%', height: '48px', fontSize: '0.88rem', boxSizing: 'border-box' }}
                  placeholder="+91 98230 11223"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
            </div>
          )}

          {/* Password */}
          <div>
            <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, color: '#cbd5e1', marginBottom: '0.35rem' }}>
              Password *
            </label>
            <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
              <Lock size={17} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: '#94a3b8', pointerEvents: 'none', zIndex: 2 }} />
              <input
                type="password"
                className="form-input-dark"
                style={{ paddingLeft: '2.8rem', width: '100%', height: '48px', fontSize: '0.88rem', boxSizing: 'border-box' }}
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
          </div>

          {/* Confirm Password for Signup */}
          {mode === 'signup' && (
            <div>
              <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, color: '#cbd5e1', marginBottom: '0.35rem' }}>
                Confirm Password *
              </label>
              <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
                <Lock size={17} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: '#94a3b8', pointerEvents: 'none', zIndex: 2 }} />
                <input
                  type="password"
                  className="form-input-dark"
                  style={{ paddingLeft: '2.8rem', width: '100%', height: '48px', fontSize: '0.88rem', boxSizing: 'border-box' }}
                  placeholder="••••••••"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
              </div>
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            className="btn-sage"
            style={{ width: '100%', minHeight: '48px', justifyContent: 'center', padding: '0.75rem', fontSize: '0.95rem', fontWeight: 700, marginTop: '0.4rem' }}
            disabled={loading}
          >
            {loading ? (
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <div style={{ width: '14px', height: '14px', borderRadius: '50%', border: '2px solid rgba(255,255,255,0.3)', borderTopColor: '#fff', animation: 'spin 0.8s linear infinite' }} />
                <span>Processing...</span>
              </div>
            ) : (
              mode === 'login' ? (
                <>Sign In to Portal <ArrowRight size={16} /></>
              ) : (
                <>Create Citizen Account <ArrowRight size={16} /></>
              )
            )}
          </button>
        </form>

        {/* Demo Quick Fill */}
        <div style={{ marginTop: '1.5rem', paddingTop: '1.25rem', borderTop: '1px solid rgba(255, 255, 255, 0.08)' }}>
          <div style={{ fontSize: '0.72rem', color: '#94a3b8', marginBottom: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 700, textAlign: 'center' }}>
            1-Click Quick Fill Demo Accounts:
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.4rem' }}>
            <button type="button" onClick={() => fillAndSubmit('admin')} className="btn-glass" style={{ fontSize: '0.78rem', minHeight: '40px', padding: '0.5rem 0.25rem', justifyContent: 'center', fontWeight: 700 }}>
              Admin
            </button>
            <button type="button" onClick={() => fillAndSubmit('officer')} className="btn-glass" style={{ fontSize: '0.78rem', minHeight: '40px', padding: '0.5rem 0.25rem', justifyContent: 'center', fontWeight: 700 }}>
              Officer
            </button>
            <button type="button" onClick={() => fillAndSubmit('citizen')} className="btn-glass" style={{ fontSize: '0.78rem', minHeight: '40px', padding: '0.5rem 0.25rem', justifyContent: 'center', fontWeight: 700 }}>
              Citizen
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
