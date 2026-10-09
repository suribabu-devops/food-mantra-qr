import React, { useState } from 'react';

// Fallback high quality food image if unsplash link fails
const FALLBACK_IMAGE = "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=400&q=80";

export default function FoodCard({ item, lang }) {
  const [imgSrc, setImgSrc] = useState(item.image || FALLBACK_IMAGE);
  const [imgError, setImgError] = useState(false);

  const handleImgError = () => {
    if (!imgError) {
      setImgError(true);
      setImgSrc(FALLBACK_IMAGE);
    }
  };

  const isTodaySaturday = new Date().getDay() === 6;
  const isSoldOut = !item.isAvailable;

  return (
    <div className={`food-card ${isSoldOut ? 'sold-out' : ''}`}>
      {/* Food Photo Container */}
      <div className="card-img-wrapper">
        <img
          src={imgSrc}
          alt={item.name}
          onError={handleImgError}
          className="food-img"
          loading="lazy"
        />
        
        {/* Sold Out Overlay */}
        {isSoldOut && (
          <div className="sold-out-overlay">
            <span>{lang === 'en' ? 'Sold Out' : 'స్టాక్ లేదు'}</span>
          </div>
        )}
      </div>

      {/* Food Card Details */}
      <div className="card-details">
        <div>
          <div className="card-header-line">
            <h3 className="food-title">{item.name}</h3>
            {/* Veg / Non-Veg Indicator Icon */}
            {item.isVeg ? (
              <span className="veg-icon" title="Pure Veg"></span>
            ) : (
              <span className="nonveg-icon" title="Non-Veg"></span>
            )}
          </div>

          {/* Telugu Title */}
          {item.teluguName && (
            <p className="food-telugu-title">{item.teluguName}</p>
          )}

          {/* Saturday Special Badge */}
          {item.isSaturdaySpecial && (
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '4px',
              fontSize: '0.72rem',
              fontWeight: '700',
              color: '#F4D068',
              background: 'rgba(212, 175, 55, 0.15)',
              border: '1px solid rgba(212, 175, 55, 0.4)',
              borderRadius: '12px',
              padding: '1px 8px',
              marginTop: '4px'
            }}>
              <span>✨ {lang === 'en' ? 'Saturday Special Only' : 'శనివారం స్పెషల్ మాత్రమే'}</span>
              {!isTodaySaturday && (
                <span style={{ fontSize: '0.68rem', opacity: 0.8, color: '#9CA3AF' }}>
                  ({lang === 'en' ? 'Saturdays Only' : 'శనివారం'})
                </span>
              )}
            </div>
          )}
        </div>

        {/* Price & Availability Badge */}
        <div className="card-footer-line">
          <span className="price-tag price-text">₹{item.price}</span>
          
          <span className={`status-badge ${item.isAvailable ? 'available' : 'unavailable'}`}>
            {item.isAvailable 
              ? (lang === 'en' ? 'Available' : 'అందుబాటులో ఉంది') 
              : (lang === 'en' ? 'Sold Out' : 'సౌలభ్యం లేదు')}
          </span>
        </div>
      </div>
    </div>
  );
}
