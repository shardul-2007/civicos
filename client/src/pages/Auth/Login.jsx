import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Shield, Lock, Mail, UserCheck } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

export default function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const loggedUser = await login(email, password);
      if (loggedUser.role === 'ADMIN') {
        navigate('/admin');
      } else if (loggedUser.role === 'OFFICER') {
        navigate('/officer');
      } else {
        navigate('/report');
      }
    } catch (err) {
      if (!err.response) {
        setError('Cannot connect to CivicOS Command Server. Please check backend API availability.');
      } else if (err.response.status === 401) {
        setError('Invalid credentials. Please verify email and password.');
      } else if (err.response.status === 403) {
        setError('Access denied. Account lacks permission for this portal.');
      } else {
        setError(err.response.data?.message || 'Authentication error. Please try again.');
      }
    } finally {
      setLoading(false);
    }
  };

  const fillDemo = (role) => {
    if (role === 'admin') {
      setEmail('admin@civicos.gov');
      setPassword('admin123');
    } else if (role === 'officer') {
      setEmail('officer@civicos.gov');
      setPassword('officer123');
    } else {
      setEmail('citizen@civicos.gov');
      setPassword('citizen123');
    }
  };

  return (
    <div style={{ background: '#0a0d14', minHeight: '85vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem 1rem', color: '#f8fafc' }}>
      <div className="natural-glass-card" style={{ width: '100%', maxWidth: '450px', padding: '2.5rem', background: '#121722' }}>
        
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <div style={{ background: 'linear-gradient(135deg, #059669 0%, #0d9488 100%)', width: '50px', height: '50px', borderRadius: '12px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', color: 'white', marginBottom: '1rem', boxShadow: '0 0 15px rgba(16, 185, 129, 0.3)' }}>
            <Shield size={28} />
          </div>
          <h2 style={{ fontSize: '1.75rem', color: '#ffffff', fontWeight: 800 }}>CivicOS Authentication</h2>
          <p style={{ color: '#94a3b8', fontSize: '0.85rem' }}>Sign in to access Officer Desk or Command Portal</p>
        </div>

        {error && (
          <div style={{ background: 'rgba(239, 68, 68, 0.15)', border: '1px solid rgba(239, 68, 68, 0.4)', color: '#f87171', padding: '0.75rem 1rem', borderRadius: '0.5rem', fontSize: '0.85rem', marginBottom: '1.5rem', fontWeight: 600 }}>
            {error}
          </div>
        )}

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
                required
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
                required
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
            <button type="button" onClick={() => fillDemo('admin')} className="btn-glass" style={{ fontSize: '0.75rem', padding: '0.4rem', justifyContent: 'center' }}>
              Admin
            </button>
            <button type="button" onClick={() => fillDemo('officer')} className="btn-glass" style={{ fontSize: '0.75rem', padding: '0.4rem', justifyContent: 'center' }}>
              Officer
            </button>
            <button type="button" onClick={() => fillDemo('citizen')} className="btn-glass" style={{ fontSize: '0.75rem', padding: '0.4rem', justifyContent: 'center' }}>
              Citizen
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
