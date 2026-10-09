export const RESTAURANT_INFO = {
  name: "FOOD MANTRA",
  subtitle: "Fine Dining & Restaurant",
  address: "19-1-119/4, Saamavayi Road, Chintalachen, Opp. Ramatulasi Kalyanamandapam, Tirupati.",
  phone: "+91 98765 43210", // Configurable in admin
  googleMapsUrl: "https://maps.google.com/?q=Chintalachen+Tirupati",
  tagline: "Freshly prepared food served here • Taxes extra as applicable",
  serviceType: "Dine-in Only • Payment at Counter"
};

export const CATEGORIES = [
  { id: "all", name: "All Items", teluguName: "అన్నీ", icon: "Utensils" },
  { id: "Starters", name: "Starters", teluguName: "స్టార్టర్స్", icon: "Flame" },
  { id: "Egg Dishes", name: "Egg Dishes", teluguName: "ఎగ్ డిషెస్", icon: "Egg" },
  { id: "Tiffins", name: "Tiffins", teluguName: "టిఫిన్స్", icon: "Coffee" },
  { id: "Rice & Fast Food", name: "Rice & Fast Food", teluguName: "రైస్ & ఫాస్ట్ ఫుడ్", icon: "Bowl" },
  { id: "Main Course & Curries", name: "Main Course & Curries", teluguName: "మెయిన్ కోర్స్ & కూరలు", icon: "Soup" },
  { id: "Meals", name: "Meals", teluguName: "భోజనాలు", icon: "Plate" },
  { id: "Biryani & Combos", name: "Biryani & Combos", teluguName: "బిర్యానీ & కాంబోలు", icon: "Drumstick" },
  { id: "Weekend Specials", name: "Weekend Specials", teluguName: "వీకెండ్ స్పెషల్స్", icon: "Sparkles" },
  { id: "Tandoori Bread", name: "Tandoori Bread", teluguName: "తందూరీ రొట్టెలు", icon: "Wheat" },
  { id: "Beverages", name: "Beverages", teluguName: "పానీయాలు", icon: "CupSoda" }
];

export const INITIAL_MENU = [
  // Starters - Veg & Non-Veg
  {
    id: "str_1",
    name: "Gobi Manchurian",
    teluguName: "గోబీ మంచూరియన్",
    category: "Starters",
    price: 100,
    isVeg: true,
    isAvailable: true,
    image: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "str_2",
    name: "Veg Manchurian",
    teluguName: "వెజ్ మంచూరియన్",
    category: "Starters",
    price: 100,
    isVeg: true,
    isAvailable: true,
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "str_3",
    name: "Paneer Manchurian",
    teluguName: "పన్నీర్ మంచూరియన్",
    category: "Starters",
    price: 160,
    isVeg: true,
    isAvailable: true,
    image: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "str_4",
    name: "Chilly Paneer",
    teluguName: "చిల్లీ పన్నీర్",
    category: "Starters",
    price: 180,
    isVeg: true,
    isAvailable: true,
    image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "str_5",
    name: "Paneer 65",
    teluguName: "పన్నీర్ 65",
    category: "Starters",
    price: 180,
    isVeg: true,
    isAvailable: true,
    image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "str_6",
    name: "Mushroom Manchurian",
    teluguName: "మష్రూమ్ మంచూరియన్",
    category: "Starters",
    price: 140,
    isVeg: true,
    isAvailable: true,
    image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "str_7",
    name: "Mushroom 65",
    teluguName: "మష్రూమ్ 65",
    category: "Starters",
    price: 140,
    isVeg: true,
    isAvailable: true,
    image: "https://images.unsplash.com/photo-1541544741938-0af808871cc0?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "str_8",
    name: "Mushroom Chilly",
    teluguName: "మష్రూమ్ చిల్లీ",
    category: "Starters",
    price: 160,
    isVeg: true,
    isAvailable: true,
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "str_9",
    name: "Chicken Manchurian",
    teluguName: "చికెన్ మంచూరియన్",
    category: "Starters",
    price: 150,
    isVeg: false,
    isAvailable: true,
    image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "str_10",
    name: "Chicken Pakoda",
    teluguName: "చికెన్ పకోడా",
    category: "Starters",
    price: 120,
    isVeg: false,
    isAvailable: true,
    image: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "str_11",
    name: "Chilli Chicken",
    teluguName: "చిల్లీ చికెన్",
    category: "Starters",
    price: 140,
    isVeg: false,
    isAvailable: true,
    image: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "str_12",
    name: "Chicken 65",
    teluguName: "చికెన్ 65",
    category: "Starters",
    price: 140,
    isVeg: false,
    isAvailable: true,
    image: "https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?auto=format&fit=crop&w=600&q=80"
  },

  // Egg Dishes (Dedicated Category)
  {
    id: "egg_1",
    name: "Omelette",
    teluguName: "ఆమ్లెట్",
    category: "Egg Dishes",
    price: 20,
    isVeg: false,
    isAvailable: true,
    image: "https://images.unsplash.com/photo-1510693206972-df098062cb71?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "egg_2",
    name: "Double Omelette",
    teluguName: "డబుల్ ఆమ్లెట్",
    category: "Egg Dishes",
    price: 40,
    isVeg: false,
    isAvailable: true,
    image: "https://images.unsplash.com/photo-1510693206972-df098062cb71?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "egg_3",
    name: "Egg Bhurji",
    teluguName: "ఎగ్ బుర్జీ",
    category: "Egg Dishes",
    price: 50,
    isVeg: false,
    isAvailable: true,
    image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "egg_4",
    name: "Boiled Egg (1 pc)",
    teluguName: "బాయిల్డ్ ఎగ్ (1 ముక్క)",
    category: "Egg Dishes",
    price: 10,
    isVeg: false,
    isAvailable: true,
    image: "https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "egg_5",
    name: "Egg Curry",
    teluguName: "ఎగ్ కర్రీ",
    category: "Egg Dishes",
    price: 80,
    isVeg: false,
    isAvailable: true,
    image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "egg_6",
    name: "Egg Masala",
    teluguName: "ఎగ్ మసాలా",
    category: "Egg Dishes",
    price: 100,
    isVeg: false,
    isAvailable: true,
    image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "rc_3",
    name: "Egg Fried Rice",
    teluguName: "ఎగ్ ఫ్రైడ్ రైస్",
    category: "Egg Dishes",
    price: 100,
    isVeg: false,
    isAvailable: true,
    image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=600&q=80"
  },

  // Tiffins
  {
    id: "tif_1",
    name: "Idly (4 pieces)",
    teluguName: "ఇడ్లీ (4 ముక్కలు)",
    category: "Tiffins",
    price: 40,
    isVeg: true,
    isAvailable: true,
    image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "tif_2",
    name: "Plain Dosa (2 pieces)",
    teluguName: "ప్లెయిన్ దోస (2 ముక్కలు)",
    category: "Tiffins",
    price: 50,
    isVeg: true,
    isAvailable: true,
    image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "tif_3",
    name: "Onion Dosa",
    teluguName: "ఆనియన్ దోస",
    category: "Tiffins",
    price: 50,
    isVeg: true,
    isAvailable: true,
    image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "tif_4",
    name: "Egg Dosa",
    teluguName: "ఎగ్ దోస",
    category: "Tiffins",
    price: 50,
    isVeg: false,
    isAvailable: true,
    image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "tif_5",
    name: "Podi Dosa",
    teluguName: "పొడి దోస",
    category: "Tiffins",
    price: 40,
    isVeg: true,
    isAvailable: true,
    image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "tif_6",
    name: "Ghee Dosa",
    teluguName: "నెయ్యి దోస",
    category: "Tiffins",
    price: 50,
    isVeg: true,
    isAvailable: true,
    image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "tif_7",
    name: "Ghee Karam Dosa",
    teluguName: "నెయ్యి కారం దోస",
    category: "Tiffins",
    price: 55,
    isVeg: true,
    isAvailable: true,
    image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "tif_8",
    name: "Ghee Podi Dosa",
    teluguName: "నెయ్యి పొడి దోస",
    category: "Tiffins",
    price: 60,
    isVeg: true,
    isAvailable: true,
    image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "tif_9",
    name: "Uthappam",
    teluguName: "ఉతప్పం",
    category: "Tiffins",
    price: 40,
    isVeg: true,
    isAvailable: true,
    image: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=600&q=80"
  },

  // Rice & Fast Food
  {
    id: "rc_1",
    name: "Veg Fried Rice",
    teluguName: "వెజ్ ఫ్రైడ్ రైస్",
    category: "Rice & Fast Food",
    price: 80,
    isVeg: true,
    isAvailable: true,
    image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "rc_2",
    name: "Chicken Fried Rice",
    teluguName: "చికెన్ ఫ్రైడ్ రైస్",
    category: "Rice & Fast Food",
    price: 120,
    isVeg: false,
    isAvailable: true,
    image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "rc_4",
    name: "Mushroom Rice",
    teluguName: "మష్రూమ్ రైస్",
    category: "Rice & Fast Food",
    price: 120,
    isVeg: true,
    isAvailable: true,
    image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "rc_5",
    name: "Gobi Rice",
    teluguName: "గోబీ రైస్",
    category: "Rice & Fast Food",
    price: 90,
    isVeg: true,
    isAvailable: true,
    image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "rc_6",
    name: "Plain Rice",
    teluguName: "ప్లెయిన్ రైస్",
    category: "Rice & Fast Food",
    price: 60,
    isVeg: true,
    isAvailable: true,
    image: "https://images.unsplash.com/photo-1596560548464-f010549b54d7?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "rc_7",
    name: "Jeera Rice",
    teluguName: "జీరా రైస్",
    category: "Rice & Fast Food",
    price: 70,
    isVeg: true,
    isAvailable: true,
    image: "https://images.unsplash.com/photo-1596560548464-f010549b54d7?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "rc_8",
    name: "Paneer Rice",
    teluguName: "పన్నీర్ రైస్",
    category: "Rice & Fast Food",
    price: 140,
    isVeg: true,
    isAvailable: true,
    image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "rc_9",
    name: "Tomato Rice",
    teluguName: "టమోటా రైస్",
    category: "Rice & Fast Food",
    price: 80,
    isVeg: true,
    isAvailable: true,
    image: "https://images.unsplash.com/photo-1596560548464-f010549b54d7?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "rc_10",
    name: "Kaju Rice",
    teluguName: "కాజు రైస్",
    category: "Rice & Fast Food",
    price: 150,
    isVeg: true,
    isAvailable: true,
    image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=600&q=80"
  },

  // Main Course & Curries
  {
    id: "cur_1",
    name: "Dal Fry",
    teluguName: "దాల్ ఫ్రై",
    category: "Main Course & Curries",
    price: 100,
    isVeg: true,
    isAvailable: true,
    image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "cur_2",
    name: "Dal Tadka",
    teluguName: "దాల్ తడ్కా",
    category: "Main Course & Curries",
    price: 110,
    isVeg: true,
    isAvailable: true,
    image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "cur_3",
    name: "Paneer Butter Masala",
    teluguName: "పన్నీర్ బటర్ మసాలా",
    category: "Main Course & Curries",
    price: 180,
    isVeg: true,
    isAvailable: true,
    image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "cur_4",
    name: "Paneer Tikka Masala",
    teluguName: "పన్నీర్ తిక్క మసాలా",
    category: "Main Course & Curries",
    price: 200,
    isVeg: true,
    isAvailable: true,
    image: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "cur_5",
    name: "Paneer Handi",
    teluguName: "పన్నీర్ హండీ",
    category: "Main Course & Curries",
    price: 220,
    isVeg: true,
    isAvailable: true,
    image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "cur_6",
    name: "Kaju Paneer",
    teluguName: "కాజు పన్నీర్",
    category: "Main Course & Curries",
    price: 220,
    isVeg: true,
    isAvailable: true,
    image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "cur_7",
    name: "Kaju Curry",
    teluguName: "కాజు కర్రీ",
    category: "Main Course & Curries",
    price: 200,
    isVeg: true,
    isAvailable: true,
    image: "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "cur_8",
    name: "Mushroom Masala",
    teluguName: "మష్రూమ్ మసాలా",
    category: "Main Course & Curries",
    price: 150,
    isVeg: true,
    isAvailable: true,
    image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "cur_9",
    name: "Mushroom Curry",
    teluguName: "మష్రూమ్ కర్రీ",
    category: "Main Course & Curries",
    price: 150,
    isVeg: true,
    isAvailable: true,
    image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "cur_10",
    name: "Mutter Masala",
    teluguName: "మటర్ మసాలా",
    category: "Main Course & Curries",
    price: 140,
    isVeg: true,
    isAvailable: true,
    image: "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "cur_11",
    name: "Mutter Paneer",
    teluguName: "మటర్ పన్నీర్",
    category: "Main Course & Curries",
    price: 180,
    isVeg: true,
    isAvailable: true,
    image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "cur_12",
    name: "Chana Masala",
    teluguName: "చనా మసాలా",
    category: "Main Course & Curries",
    price: 140,
    isVeg: true,
    isAvailable: true,
    image: "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "cur_13",
    name: "Chicken Curry – Half Plate",
    teluguName: "చికెన్ కర్రీ – హాఫ్ ప్లేట్",
    category: "Main Course & Curries",
    price: 80,
    isVeg: false,
    isAvailable: true,
    image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "cur_14",
    name: "Chicken Curry – Full Plate",
    teluguName: "చికెన్ కర్రీ – ఫుల్ ప్లేట్",
    category: "Main Course & Curries",
    price: 140,
    isVeg: false,
    isAvailable: true,
    image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "cur_15",
    name: "Chicken Fry – Half Plate",
    teluguName: "చికెన్ ఫ్రై – హాఫ్ ప్లేట్",
    category: "Main Course & Curries",
    price: 100,
    isVeg: false,
    isAvailable: true,
    image: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "cur_16",
    name: "Chicken Fry – Full Plate",
    teluguName: "చికెన్ ఫ్రై – ఫుల్ ప్లేట్",
    category: "Main Course & Curries",
    price: 160,
    isVeg: false,
    isAvailable: true,
    image: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=600&q=80"
  },

  // Meals & Combos
  {
    id: "mls_1",
    name: "Lunch Meal Plate",
    teluguName: "లంచ్ మీల్ ప్లేట్",
    category: "Meals",
    price: 79,
    isVeg: true,
    isAvailable: true,
    image: "https://images.unsplash.com/photo-1610192244261-3f33de3f55e4?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "mls_2",
    name: "Full Meals",
    teluguName: "ఫుల్ మీల్స్",
    category: "Meals",
    price: 110,
    isVeg: true,
    isAvailable: true,
    image: "https://images.unsplash.com/photo-1610192244261-3f33de3f55e4?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "mls_3",
    name: "Chicken Curry Meal",
    teluguName: "చికెన్ కర్రీ మీల్",
    category: "Meals",
    price: 160,
    isVeg: false,
    isAvailable: true,
    image: "https://images.unsplash.com/photo-1610192244261-3f33de3f55e4?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "mls_4",
    name: "Chapathi + Chicken Curry Combo",
    teluguName: "చపాతీ + చికెన్ కర్రీ కాంబో",
    category: "Meals",
    price: 99,
    isVeg: false,
    isAvailable: true,
    image: "https://images.unsplash.com/photo-1626074353765-517a681e40be?auto=format&fit=crop&w=600&q=80"
  },

  // Biryani & Combos
  {
    id: "bir_1",
    name: "Single Chicken Biryani",
    teluguName: "సింగిల్ చికెన్ బిర్యానీ",
    category: "Biryani & Combos",
    price: 89,
    isVeg: false,
    isAvailable: true,
    image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "bir_2",
    name: "Chicken Biryani",
    teluguName: "చికెన్ బిర్యానీ",
    category: "Biryani & Combos",
    price: 160,
    isVeg: false,
    isAvailable: true,
    image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "bir_3",
    name: "Sangati",
    teluguName: "సంగటి (రాగి సంగటి)",
    category: "Biryani & Combos",
    price: 30,
    isVeg: true,
    isAvailable: true,
    image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "bir_4",
    name: "Sangati + Chicken Curry Combo",
    teluguName: "సంగటి + చికెన్ కర్రీ కాంబో",
    category: "Biryani & Combos",
    price: 80,
    isVeg: false,
    isAvailable: true,
    image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=600&q=80"
  },

  // Weekend / Special Menu (Saturday Special Only)
  {
    id: "spc_1",
    name: "Special Veg Biryani",
    teluguName: "స్పెషల్ వెజ్ బిర్యానీ",
    category: "Weekend Specials",
    price: 100,
    isVeg: true,
    isAvailable: true,
    isSaturdaySpecial: true,
    specialTag: "Saturday Special Only",
    specialTagTelugu: "శనివారం స్పెషల్ మాత్రమే",
    image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=600&q=80"
  },

  // Tandoori Bread
  {
    id: "brd_1",
    name: "Pulka",
    teluguName: "పుల్కా",
    category: "Tandoori Bread",
    price: 15,
    isVeg: true,
    isAvailable: true,
    image: "https://images.unsplash.com/photo-1626074353765-517a681e40be?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "brd_2",
    name: "Butter Pulka",
    teluguName: "బటర్ పుల్కా",
    category: "Tandoori Bread",
    price: 20,
    isVeg: true,
    isAvailable: true,
    image: "https://images.unsplash.com/photo-1626074353765-517a681e40be?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "brd_3",
    name: "Tandoori Roti",
    teluguName: "తందూరీ రొట్టి",
    category: "Tandoori Bread",
    price: 20,
    isVeg: true,
    isAvailable: true,
    image: "https://images.unsplash.com/photo-1626074353765-517a681e40be?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "brd_4",
    name: "Butter Roti",
    teluguName: "బటర్ రొట్టి",
    category: "Tandoori Bread",
    price: 25,
    isVeg: true,
    isAvailable: true,
    image: "https://images.unsplash.com/photo-1626074353765-517a681e40be?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "brd_5",
    name: "Plain Naan",
    teluguName: "ప్లెయిన్ నాన్",
    category: "Tandoori Bread",
    price: 35,
    isVeg: true,
    isAvailable: true,
    image: "https://images.unsplash.com/photo-1626074353765-517a681e40be?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "brd_6",
    name: "Butter Naan",
    teluguName: "బటర్ నాన్",
    category: "Tandoori Bread",
    price: 40,
    isVeg: true,
    isAvailable: true,
    image: "https://images.unsplash.com/photo-1626074353765-517a681e40be?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "brd_7",
    name: "Chapathi",
    teluguName: "చపాతీ",
    category: "Tandoori Bread",
    price: 50,
    isVeg: true,
    isAvailable: true,
    image: "https://images.unsplash.com/photo-1626074353765-517a681e40be?auto=format&fit=crop&w=600&q=80"
  },

  // Beverages
  {
    id: "bev_1",
    name: "Tea",
    teluguName: "టీ",
    category: "Beverages",
    price: 15,
    isVeg: true,
    isAvailable: true,
    image: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "bev_2",
    name: "Filter Coffee",
    teluguName: "ఫిల్టర్ కాఫీ",
    category: "Beverages",
    price: 25,
    isVeg: true,
    isAvailable: true,
    image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "bev_3",
    name: "Water Bottle (Small)",
    teluguName: "వాటర్ బాటిల్ (స్మాల్)",
    category: "Beverages",
    price: 10,
    isVeg: true,
    isAvailable: true,
    image: "https://images.unsplash.com/photo-1560023907-5f313d8750b7?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "bev_4",
    name: "Water Bottle (Large)",
    teluguName: "వాటర్ బాటిల్ (లార్జ్)",
    category: "Beverages",
    price: 20,
    isVeg: true,
    isAvailable: true,
    image: "https://images.unsplash.com/photo-1560023907-5f313d8750b7?auto=format&fit=crop&w=600&q=80"
  }
];
