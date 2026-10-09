import React from 'react';
import { Phone, MapPin, Clock, CreditCard, Navigation } from 'lucide-react';

export default function ContactSection({ restaurantInfo, lang }) {
  return (
    <section style={{ 
      margin: '1.5rem 1rem', 
      background: 'var(--bg-card)', 
      border: '1px solid var(--border-dark)', 
      borderRadius: '16px', 
      padding: '1.25rem' 
    }}>
      <h3 style={{ 
        fontFamily: 'var(--font-serif)', 
        color: 'var(--gold-light)', 
        fontSize: '1.1rem', 
        marginBottom: '1rem', 
        display: 'flex', 
        alignItems: 'center', 
        gap: '8px' 
      }}>
        <MapPin size={18} style={{ color: 'var(--gold-primary)' }} />
        {lang === 'en' ? 'Restaurant Information' : 'రెస్టారెంట్ సమాచారం'}
      </h3>

      <div style={{ display: 'grid', gap: '1rem' }}>
        {/* Address */}
        <div style={{ display: 'flex', gap: '10px' }}>
          <MapPin size={18} style={{ color: 'var(--gold-primary)', flexShrink: 0, marginTop: '2px' }} />
          <div>
            <div style={{ fontWeight: 600, fontSize: '0.85rem', color: 'var(--text-main)' }}>
              {lang === 'en' ? 'Address' : 'చిరునామా'}
            </div>
            <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)', lineHeight: '1.4' }}>
              {restaurantInfo.address}
            </div>
            <a 
              href={restaurantInfo.googleMapsUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ 
                color: 'var(--gold-light)', 
                fontSize: '0.78rem', 
                display: 'inline-flex', 
                alignItems: 'center', 
                gap: '4px', 
                marginTop: '4px',
                textDecoration: 'none',
                fontWeight: 600 
              }}
            >
              <Navigation size={12} />
              {lang === 'en' ? 'Open in Google Maps' : 'గూగుల్ మ్యాప్స్‌లో చూడండి'}
            </a>
          </div>
        </div>

        {/* Phone */}
        <div style={{ display: 'flex', gap: '10px' }}>
          <Phone size={18} style={{ color: 'var(--gold-primary)', flexShrink: 0, marginTop: '2px' }} />
          <div>
            <div style={{ fontWeight: 600, fontSize: '0.85rem', color: 'var(--text-main)' }}>
              {lang === 'en' ? 'Contact Phone' : 'ఫోన్ నంబర్'}
            </div>
            <a 
              href={`tel:${restaurantInfo.phone}`} 
              style={{ 
                fontSize: '0.9rem', 
                color: 'var(--price-red)', 
                fontWeight: 700, 
                textDecoration: 'none' 
              }}
            >
              {restaurantInfo.phone}
            </a>
          </div>
        </div>

        {/* Timings & Payment Policy */}
        <div style={{ display: 'flex', gap: '10px' }}>
          <Clock size={18} style={{ color: 'var(--gold-primary)', flexShrink: 0, marginTop: '2px' }} />
          <div>
            <div style={{ fontWeight: 600, fontSize: '0.85rem', color: 'var(--text-main)' }}>
              {lang === 'en' ? 'Operating Hours & Service' : 'పనివేళలు & సేవలు'}
            </div>
            <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
              {lang === 'en' ? 'Open Daily: 11:00 AM – 10:30 PM • Dine-in Service' : 'ప్రతిరోజూ తెరిచి ఉంటుంది: ఉదయం 11:00 – రాత్రి 10:30'}
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', gap: '10px' }}>
          <CreditCard size={18} style={{ color: 'var(--gold-primary)', flexShrink: 0, marginTop: '2px' }} />
          <div>
            <div style={{ fontWeight: 600, fontSize: '0.85rem', color: 'var(--text-main)' }}>
              {lang === 'en' ? 'Payment Policy' : 'చెల్లింపుల వివరాలు'}
            </div>
            <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
              {lang === 'en' ? 'Payment at billing counter (Cash, UPI, Cards accepted)' : 'బిల్లింగ్ కౌంటర్ వద్ద చెల్లించండి (క్యాష్, UPI, కార్డ్స్)'}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
