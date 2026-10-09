import { INITIAL_MENU, RESTAURANT_INFO } from '../data/initialMenu';

const MENU_STORAGE_KEY = 'food_mantra_menu_v2';
const RESTAURANT_STORAGE_KEY = 'food_mantra_info_v1';

export const menuService = {
  // Get all menu items with automatic sync for newly added initial items
  getMenuItems: () => {
    try {
      const stored = localStorage.getItem(MENU_STORAGE_KEY);
      if (stored) {
        const storedItems = JSON.parse(stored);
        // Merge missing initial items if new dishes were added to code
        const storedIds = new Set(storedItems.map(i => i.id));
        const missingItems = INITIAL_MENU.filter(i => !storedIds.has(i.id));

        if (missingItems.length > 0) {
          const merged = [...storedItems, ...missingItems];
          localStorage.setItem(MENU_STORAGE_KEY, JSON.stringify(merged));
          return merged;
        }
        return storedItems;
      }
    } catch (err) {
      console.error("Error reading menu from localStorage:", err);
    }
    // Initialize default if empty
    localStorage.setItem(MENU_STORAGE_KEY, JSON.stringify(INITIAL_MENU));
    return INITIAL_MENU;
  },

  // Save all menu items
  saveMenuItems: (items) => {
    try {
      localStorage.setItem(MENU_STORAGE_KEY, JSON.stringify(items));
      return true;
    } catch (err) {
      console.error("Error saving menu to localStorage:", err);
      return false;
    }
  },

  // Add new item
  addItem: (newItem) => {
    const items = menuService.getMenuItems();
    const itemWithId = {
      ...newItem,
      id: `item_${Date.now()}`,
      isAvailable: newItem.isAvailable !== undefined ? newItem.isAvailable : true,
      price: Number(newItem.price)
    };
    const updated = [itemWithId, ...items];
    menuService.saveMenuItems(updated);
    return updated;
  },

  // Update item
  updateItem: (id, updatedFields) => {
    const items = menuService.getMenuItems();
    const updated = items.map(item => {
      if (item.id === id) {
        return {
          ...item,
          ...updatedFields,
          price: updatedFields.price !== undefined ? Number(updatedFields.price) : item.price
        };
      }
      return item;
    });
    menuService.saveMenuItems(updated);
    return updated;
  },

  // Toggle Availability (Available / Sold Out)
  toggleAvailability: (id) => {
    const items = menuService.getMenuItems();
    const updated = items.map(item => {
      if (item.id === id) {
        return { ...item, isAvailable: !item.isAvailable };
      }
      return item;
    });
    menuService.saveMenuItems(updated);
    return updated;
  },

  // Delete item
  deleteItem: (id) => {
    const items = menuService.getMenuItems();
    const updated = items.filter(item => item.id !== id);
    menuService.saveMenuItems(updated);
    return updated;
  },

  // Reset menu to original default data
  resetToDefault: () => {
    localStorage.setItem(MENU_STORAGE_KEY, JSON.stringify(INITIAL_MENU));
    localStorage.setItem(RESTAURANT_STORAGE_KEY, JSON.stringify(RESTAURANT_INFO));
    return INITIAL_MENU;
  },

  // Get Restaurant Config
  getRestaurantInfo: () => {
    try {
      const stored = localStorage.getItem(RESTAURANT_STORAGE_KEY);
      if (stored) {
        return JSON.parse(stored);
      }
    } catch (err) {
      console.error("Error reading restaurant info:", err);
    }
    localStorage.setItem(RESTAURANT_STORAGE_KEY, JSON.stringify(RESTAURANT_INFO));
    return RESTAURANT_INFO;
  },

  // Save Restaurant Info
  saveRestaurantInfo: (info) => {
    try {
      localStorage.setItem(RESTAURANT_STORAGE_KEY, JSON.stringify(info));
      return true;
    } catch (err) {
      console.error("Error saving restaurant info:", err);
      return false;
    }
  }
};
