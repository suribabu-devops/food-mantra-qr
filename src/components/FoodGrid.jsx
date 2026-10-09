import React from 'react';
import FoodCard from './FoodCard';
import { CATEGORIES } from '../data/initialMenu';
import { UtensilsCrossed } from 'lucide-react';

export default function FoodGrid({ items, activeCategory, searchQuery, vegFilter, lang }) {
  if (items.length === 0) {
    return (
      <div className="empty-state">
        <UtensilsCrossed className="empty-icon" size={48} />
        <h3>{lang === 'en' ? 'No dishes found' : 'ఏమీ లభించలేదు'}</h3>
        <p style={{ fontSize: '0.85rem', marginTop: '0.25rem' }}>
          {lang === 'en' 
            ? 'Try clearing your search or switching filters.' 
            : 'శోధనను మార్చండి లేదా ఫిల్టర్‌ని తీసివేయండి.'}
        </p>
      </div>
    );
  }

  // If specific category selected or search active, display direct grid
  if (activeCategory !== 'all' || searchQuery.trim() !== '' || vegFilter !== 'all') {
    return (
      <div style={{ paddingBottom: '1.5rem' }}>
        {activeCategory !== 'all' && (
          <h2 className="category-heading">
            {lang === 'en' 
              ? (CATEGORIES.find(c => c.id === activeCategory)?.name || activeCategory)
              : (CATEGORIES.find(c => c.id === activeCategory)?.teluguName || activeCategory)}
          </h2>
        )}

        <div className="food-grid">
          {items.map(item => (
            <FoodCard key={item.id} item={item} lang={lang} />
          ))}
        </div>
      </div>
    );
  }

  // If 'All' is selected with no search filter, group items by category for luxury menu layout
  const categoriesPresent = CATEGORIES.filter(cat => cat.id !== 'all');

  return (
    <div style={{ paddingBottom: '1.5rem' }}>
      {categoriesPresent.map(cat => {
        const catItems = items.filter(item => item.category === cat.id);
        if (catItems.length === 0) return null;

        return (
          <section key={cat.id} id={`category-${cat.id}`}>
            <h2 className="category-heading">
              {lang === 'en' ? cat.name : cat.teluguName}
            </h2>
            <div className="food-grid">
              {catItems.map(item => (
                <FoodCard key={item.id} item={item} lang={lang} />
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}
