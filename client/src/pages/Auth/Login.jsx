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
    <div style={{ background: 'var(--bg-app)', minHeight: '85vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '5.5rem 1rem 3rem', color: 'var(--text-primary)' }}>
      <div className="natural-glass-card" style={{ width: '100%', maxWidth: '450px', padding: '2.5rem', background: '#121722', borderRadius: '1rem' }}>
        
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <div style={{ background: 'linear-gradient(135deg, #059669 0%, #0d9488 100%)', width: '50px', height: '50px', borderRadius: '12px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', color: 'white', marginBottom: '1rem', boxShadow: '0 0 15px rgba(16, 185, 129, 0.3)' }}>
            <Shield size={28} />
          </div>
          <h2 style={{ fontSize: '1.75rem', color: '#ffffff', fontWeight: 800 }}>CivicOS Authentication</h2>
          <p style={{ color: '#94a3b8', fontSize: '0.85rem' }}>Sign in to access Officer Desk or Command Portal</p>
        </div>

        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '1.25rem' }}>
            <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#cbd5e1', marginBottom: '0.5rem' }}>
              Email Address
            </label>
            <div style={{ position: 'relative' }}>
              <Mail size={18} style={{ position: 'absolute', left: '12px', top: '12px', color: '#94a3b8' }} />
              <input
                type="email"
                className="form-input-dark"
                style={{ paddingLeft: '2.5rem', width: '100%' }}
                placeholder="officer@civicos.gov"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>

          <div style={{ marginBottom: '1.75rem' }}>
            <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#cbd5e1', marginBottom: '0.5rem' }}>
              Password
            </label>
            <div style={{ position: 'relative' }}>
              <Lock size={18} style={{ position: 'absolute', left: '12px', top: '12px', color: '#94a3b8' }} />
              <input
                type="password"
                className="form-input-dark"
                style={{ paddingLeft: '2.5rem', width: '100%' }}
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          <button type="submit" className="btn-sage" style={{ width: '100%', justifyContent: 'center', padding: '0.75rem', fontSize: '1rem' }} disabled={loading}>
            {loading ? 'Authenticating...' : 'Sign In to Portal'}
          </button>
        </form>

        <div style={{ marginTop: '2rem', paddingTop: '1.5rem', borderTop: '1px solid rgba(255, 255, 255, 0.08)' }}>
          <div style={{ fontSize: '0.75rem', color: '#94a3b8', marginBottom: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 700 }}>
            Hackathon Quick Fill Demo Accounts:
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.5rem' }}>
            <button type="button" onClick={() => fillAndSubmit('admin')} className="btn-glass" style={{ fontSize: '0.75rem', padding: '0.45rem', justifyContent: 'center' }}>
              Admin
            </button>
            <button type="button" onClick={() => fillAndSubmit('officer')} className="btn-glass" style={{ fontSize: '0.75rem', padding: '0.45rem', justifyContent: 'center' }}>
              Officer
            </button>
            <button type="button" onClick={() => fillAndSubmit('citizen')} className="btn-glass" style={{ fontSize: '0.75rem', padding: '0.45rem', justifyContent: 'center' }}>
              Citizen
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
