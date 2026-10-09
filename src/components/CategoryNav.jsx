import React from 'react';
import { CATEGORIES } from '../data/initialMenu';
import { 
  Utensils, Flame, Coffee, CookingPot, Soup, 
  UtensilsCrossed, Drumstick, Wheat, CupSoda, Egg, Sparkles 
} from 'lucide-react';

const iconMap = {
  Utensils: Utensils,
  Flame: Flame,
  Coffee: Coffee,
  Bowl: CookingPot,
  Soup: Soup,
  Plate: UtensilsCrossed,
  Drumstick: Drumstick,
  Wheat: Wheat,
  CupSoda: CupSoda,
  Egg: Egg,
  Sparkles: Sparkles
};

export default function CategoryNav({ activeCategory, onSelectCategory, lang, menuItems }) {
  // Helper to count active items per category
  const getItemCount = (catId) => {
    if (catId === 'all') return menuItems.length;
    return menuItems.filter(item => item.category === catId).length;
  };

  return (
    <nav className="category-bar">
      {CATEGORIES.map(cat => {
        const IconComponent = iconMap[cat.icon] || Utensils;
        const isActive = activeCategory === cat.id;
        const count = getItemCount(cat.id);

        return (
          <button
            key={cat.id}
            onClick={() => onSelectCategory(cat.id)}
            className={`cat-tab ${isActive ? 'active' : ''}`}
          >
            <IconComponent size={15} />
            <span>{lang === 'en' ? cat.name : cat.teluguName}</span>
            <span style={{ 
              fontSize: '0.7rem', 
              opacity: 0.8, 
              background: isActive ? 'rgba(0,0,0,0.2)' : 'rgba(255,255,255,0.1)', 
              padding: '1px 6px', 
              borderRadius: '10px' 
            }}>
              {count}
            </span>
          </button>
        );
      })}
    </nav>
  );
}
