import React from 'react';

export default function Footer({ restaurantInfo, lang }) {
  return (
    <footer className="restaurant-footer">
      <div className="footer-tagline">
        {restaurantInfo.tagline || "Freshly prepared food served here • Taxes extra as applicable"}
      </div>
      <div className="footer-address">
        {restaurantInfo.name} – {restaurantInfo.subtitle}<br />
        {restaurantInfo.address}
      </div>
      <div style={{ fontSize: '0.75rem', opacity: 0.6, marginTop: '0.5rem' }}>
        © {new Date().getFullYear()} FOOD MANTRA. All rights reserved.
      </div>
    </footer>
  );
}
