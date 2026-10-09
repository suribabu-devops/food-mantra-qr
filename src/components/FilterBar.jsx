import React from 'react';
import { Search, X } from 'lucide-react';

export default function FilterBar({ 
  searchQuery, 
  onSearchChange, 
  vegFilter, 
  onVegFilterChange, 
  lang 
}) {
  return (
    <div className="filter-container">
      {/* Search Bar */}
      <div className="search-box">
        <Search className="search-icon" size={16} />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder={lang === 'en' ? "Search dishes... (e.g. Biryani, Paneer, Dosa)" : "వంటకాల కోసం వెతకండి... (ఉదా: బిర్యానీ, పన్నీర్)"}
          className="search-input"
        />
        {searchQuery && (
          <button
            onClick={() => onSearchChange('')}
            style={{
              position: 'absolute',
              right: '0.85rem',
              top: '50%',
              transform: 'translateY(-50%)',
              background: 'none',
              border: 'none',
              color: 'var(--text-muted)',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center'
            }}
          >
            <X size={16} />
          </button>
        )}
      </div>

      {/* Veg / Non-Veg Filter Chips */}
      <div className="veg-filter-group">
        <button
          onClick={() => onVegFilterChange('all')}
          className={`filter-chip ${vegFilter === 'all' ? 'active-all' : ''}`}
        >
          {lang === 'en' ? 'All Dishes' : 'అన్నీ'}
        </button>

        <button
          onClick={() => onVegFilterChange('veg')}
          className={`filter-chip ${vegFilter === 'veg' ? 'active-veg' : ''}`}
        >
          <span className="veg-icon"></span>
          {lang === 'en' ? 'Pure Veg' : 'వెజ్'}
        </button>

        <button
          onClick={() => onVegFilterChange('nonveg')}
          className={`filter-chip ${vegFilter === 'nonveg' ? 'active-nonveg' : ''}`}
        >
          <span className="nonveg-icon"></span>
          {lang === 'en' ? 'Non-Veg' : 'నాన్-వెజ్'}
        </button>
      </div>
    </div>
  );
}
