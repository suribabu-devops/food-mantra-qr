import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import CategoryNav from './components/CategoryNav';
import FilterBar from './components/FilterBar';
import FoodGrid from './components/FoodGrid';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import AdminLogin from './components/AdminLogin';
import AdminDashboard from './components/AdminDashboard';
import { menuService } from './services/menuService';

export default function App() {
  // State for menu & restaurant info
  const [menuItems, setMenuItems] = useState([]);
  const [restaurantInfo, setRestaurantInfo] = useState({});

  // UI state
  const [lang, setLang] = useState('en'); // 'en' | 'te'
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [vegFilter, setVegFilter] = useState('all'); // 'all' | 'veg' | 'nonveg'

  // Admin View state (check if window.location.pathname === '/admin' or hash === '#admin')
  const [isAdminView, setIsAdminView] = useState(
    window.location.pathname.includes('/admin') || window.location.hash.includes('admin')
  );
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);

  // Initialize data on mount
  useEffect(() => {
    const items = menuService.getMenuItems();
    const info = menuService.getRestaurantInfo();
    setMenuItems(items);
    setRestaurantInfo(info);
  }, []);

  // Sync route changes if user modifies URL or clicks admin toggle
  useEffect(() => {
    const handlePopState = () => {
      setIsAdminView(window.location.pathname.includes('/admin') || window.location.hash.includes('admin'));
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Handlers for menu mutation
  const handleAddItem = (newItem) => {
    const updated = menuService.addItem(newItem);
    setMenuItems(updated);
  };

  const handleUpdateItem = (id, fields) => {
    const updated = menuService.updateItem(id, fields);
    setMenuItems(updated);
  };

  const handleToggleAvailability = (id) => {
    const updated = menuService.toggleAvailability(id);
    setMenuItems(updated);
  };

  const handleDeleteItem = (id) => {
    const updated = menuService.deleteItem(id);
    setMenuItems(updated);
  };

  const handleResetDefault = () => {
    if (confirm("Reset menu to default items? Any custom added items will be replaced.")) {
      const resetItems = menuService.resetToDefault();
      const resetInfo = menuService.getRestaurantInfo();
      setMenuItems(resetItems);
      setRestaurantInfo(resetInfo);
    }
  };

  const handleUpdateRestaurantInfo = (newInfo) => {
    menuService.saveRestaurantInfo(newInfo);
    setRestaurantInfo(newInfo);
  };

  const toggleLanguage = () => {
    setLang(prev => prev === 'en' ? 'te' : 'en');
  };

  const toggleAdminView = () => {
    if (isAdminView) {
      setIsAdminView(false);
      window.history.pushState({}, '', '/');
    } else {
      setIsAdminView(true);
      window.history.pushState({}, '', '/admin');
    }
  };

  // Filter food items based on category, search, veg/nonveg
  const filteredMenuItems = menuItems.filter(item => {
    // Category match
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
    
    // Veg/Non-Veg match
    let matchesVeg = true;
    if (vegFilter === 'veg') matchesVeg = item.isVeg === true;
    if (vegFilter === 'nonveg') matchesVeg = item.isVeg === false;

    // Search query match (English name or Telugu name)
    const q = searchQuery.toLowerCase().trim();
    let matchesSearch = true;
    if (q) {
      const nameMatch = item.name.toLowerCase().includes(q);
      const teluguMatch = item.teluguName ? item.teluguName.includes(q) : false;
      const catMatch = item.category.toLowerCase().includes(q);
      matchesSearch = nameMatch || teluguMatch || catMatch;
    }

    return matchesCategory && matchesVeg && matchesSearch;
  });

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Header */}
      <Header
        restaurantInfo={restaurantInfo}
        lang={lang}
        onToggleLang={toggleLanguage}
        isAdminView={isAdminView}
        onToggleAdminView={toggleAdminView}
      />

      {/* Main Content Area */}
      {isAdminView ? (
        isAdminLoggedIn ? (
          <main style={{ flex: 1, padding: '1rem 0' }}>
            <AdminDashboard
              menuItems={menuItems}
              restaurantInfo={restaurantInfo}
              onAddItem={handleAddItem}
              onUpdateItem={handleUpdateItem}
              onToggleAvailability={handleToggleAvailability}
              onDeleteItem={handleDeleteItem}
              onResetDefault={handleResetDefault}
              onUpdateRestaurantInfo={handleUpdateRestaurantInfo}
              onLogout={() => setIsAdminLoggedIn(false)}
              lang={lang}
            />
          </main>
        ) : (
          <AdminLogin
            onLoginSuccess={() => setIsAdminLoggedIn(true)}
            lang={lang}
          />
        )
      ) : (
        <main style={{ flex: 1 }}>
          {/* Category Horizontal Navigation */}
          <CategoryNav
            activeCategory={activeCategory}
            onSelectCategory={setActiveCategory}
            lang={lang}
            menuItems={menuItems}
          />

          {/* Search & Veg/Non-Veg Filter Bar */}
          <FilterBar
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
            vegFilter={vegFilter}
            onVegFilterChange={setVegFilter}
            lang={lang}
          />

          {/* Food Grid View */}
          <FoodGrid
            items={filteredMenuItems}
            activeCategory={activeCategory}
            searchQuery={searchQuery}
            vegFilter={vegFilter}
            lang={lang}
          />

          {/* Restaurant Information & Contact Section */}
          <ContactSection
            restaurantInfo={restaurantInfo}
            lang={lang}
          />
        </main>
      )}

      {/* Footer */}
      <Footer
        restaurantInfo={restaurantInfo}
        lang={lang}
      />
    </div>
  );
}
