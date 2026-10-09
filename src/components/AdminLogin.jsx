import React, { useState } from 'react';
import { Lock, ShieldCheck, KeyRound } from 'lucide-react';

export default function AdminLogin({ onLoginSuccess, lang }) {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    if (password === 'admin123') {
      setError('');
      onLoginSuccess();
    } else {
      setError(lang === 'en' ? 'Incorrect passcode. Try "admin123"' : 'తప్పు పిన్. "admin123" వాడండి');
    }
  };

  const handleQuickDemo = () => {
    setPassword('admin123');
    onLoginSuccess();
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content" style={{ maxWidth: '420px', textAlign: 'center' }}>
        <div style={{
          width: '60px',
          height: '60px',
          borderRadius: '50%',
          background: 'rgba(212, 175, 55, 0.15)',
          border: '1px solid var(--border-gold)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '0 auto 1rem',
          color: 'var(--gold-primary)'
        }}>
          <ShieldCheck size={30} />
        </div>

        <h2 style={{ fontFamily: 'var(--font-serif)', color: 'var(--gold-light)', marginBottom: '0.25rem' }}>
          {lang === 'en' ? 'Admin Portal Login' : 'అడ్మిన్ పోర్టల్ లాగిన్'}
        </h2>
        <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', marginBottom: '1.25rem' }}>
          FOOD MANTRA Menu Management
        </p>

        <form onSubmit={handleLogin}>
          <div className="form-group" style={{ textAlign: 'left' }}>
            <label className="form-label" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <KeyRound size={14} />
              {lang === 'en' ? 'Admin Passcode' : 'అడ్మిన్ పాస్‌వర్డ్'}
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter passcode (default: admin123)"
              className="form-control"
              autoFocus
            />
          </div>

          {error && (
            <div style={{ color: '#EF4444', fontSize: '0.8rem', marginBottom: '1rem', fontWeight: 600 }}>
              {error}
            </div>
          )}

          <div style={{ display: 'grid', gap: '0.75rem', marginTop: '1rem' }}>
            <button type="submit" className="btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
              <Lock size={16} />
              {lang === 'en' ? 'Log In to Dashboard' : 'లాగిన్ చేయండి'}
            </button>

            <button 
              type="button" 
              onClick={handleQuickDemo} 
              className="btn-secondary" 
              style={{ width: '100%', justifyContent: 'center', fontSize: '0.85rem' }}
            >
              ⚡ Quick Demo Login (Passcode: admin123)
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
