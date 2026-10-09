import React from 'react';
import { Phone, MapPin, Globe, ShieldCheck, UtensilsCrossed } from 'lucide-react';

export default function Header({ 
  restaurantInfo, 
  lang, 
  onToggleLang, 
  isAdminView, 
  onToggleAdminView 
}) {
  return (
    <header className="hero-header">
      {/* Top Bar for Actions */}
      <div className="header-actions">
        <button 
          onClick={onToggleLang} 
          className="lang-btn" 
          title="Switch Language"
        >
          <Globe size={14} />
          {lang === 'en' ? 'తెలుగులోకి మార్చండి' : 'English'}
        </button>

        <button 
          onClick={onToggleAdminView} 
          className="admin-nav-btn"
          title="Admin Menu Management"
        >
          <ShieldCheck size={14} />
          {isAdminView ? (lang === 'en' ? 'Customer View' : 'కస్టమర్ వ్యూ') : (lang === 'en' ? 'Admin Portal' : 'అడ్మిన్ పోర్టల్')}
        </button>
      </div>

      {/* Brand & Crest */}
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '0.5rem' }}>
        <div style={{ 
          width: '54px', 
          height: '54px', 
          borderRadius: '50%', 
          background: 'var(--gold-gradient)', 
          padding: '2px', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center' 
        }}>
          <div style={{ 
            width: '100%', 
            height: '100%', 
            borderRadius: '50%', 
            background: '#0D0E12', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            color: 'var(--gold-primary)' 
          }}>
            <UtensilsCrossed size={26} />
          </div>
        </div>
      </div>

      <h1 className="brand-title gold-text">
        {restaurantInfo.name || "FOOD MANTRA"}
      </h1>
      
      <p className="brand-subtitle">
        {lang === 'en' ? (restaurantInfo.subtitle || "Fine Dining & Restaurant") : "ఫైన్ డైనింగ్ & రెస్టారెంట్"}
      </p>

      {/* Address */}
      <div className="address-badge">
        <MapPin size={14} style={{ color: 'var(--gold-primary)', flexShrink: 0 }} />
        <span>{restaurantInfo.address}</span>
      </div>

      {/* Quick Phone Call & Dine-in Notice */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap', fontSize: '0.82rem', marginTop: '0.2rem' }}>
        <a href={`tel:${restaurantInfo.phone}`} className="phone-link">
          <Phone size={14} />
          <span>{restaurantInfo.phone}</span>
        </a>
        <span style={{ color: 'rgba(255,255,255,0.3)' }}>•</span>
        <span style={{ color: 'var(--text-muted)' }}>
          {lang === 'en' ? '🍽️ Dine-in Service • Pay at Counter' : '🍽️ డైన్-ఇన్ సర్వీస్ • కౌంటర్ వద్ద చెల్లింపు'}
        </span>
      </div>
    </header>
  );
}
