import React, { useState } from 'react';
import { CATEGORIES } from '../data/initialMenu';
import { 
  Plus, Edit, Trash2, CheckCircle2, XCircle, RefreshCw, 
  Phone, MapPin, Database, LogOut, Search, Check, Save 
} from 'lucide-react';

export default function AdminDashboard({ 
  menuItems, 
  restaurantInfo, 
  onAddItem, 
  onUpdateItem, 
  onToggleAvailability, 
  onDeleteItem, 
  onResetDefault, 
  onUpdateRestaurantInfo,
  onLogout,
  lang 
}) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCat, setSelectedCat] = useState('all');
  
  // Modal states
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [editingItem, setEditingItem] = useState(null);
  const [editingInfo, setEditingInfo] = useState(false);

  // Form State for New / Edit Item
  const emptyForm = {
    name: '',
    teluguName: '',
    category: 'Starters',
    price: '',
    isVeg: true,
    isAvailable: true,
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=600&q=80'
  };
  const [formData, setFormData] = useState(emptyForm);

  // Restaurant Info state
  const [infoForm, setInfoForm] = useState(restaurantInfo);

  // Success Toast state
  const [toastMsg, setToastMsg] = useState('');

  const showToast = (msg) => {
    setToastMsg(msg);
    setTimeout(() => setToastMsg(''), 3000);
  };

  // Filtered items for admin list
  const filteredItems = menuItems.filter(item => {
    const matchesCat = selectedCat === 'all' || item.category === selectedCat;
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          (item.teluguName && item.teluguName.includes(searchTerm));
    return matchesCat && matchesSearch;
  });

  const handleOpenAddModal = () => {
    setFormData(emptyForm);
    setEditingItem(null);
    setIsAddModalOpen(true);
  };

  const handleOpenEditModal = (item) => {
    setEditingItem(item);
    setFormData({
      name: item.name,
      teluguName: item.teluguName || '',
      category: item.category,
      price: item.price,
      isVeg: item.isVeg,
      isAvailable: item.isAvailable,
      image: item.image || ''
    });
    setIsAddModalOpen(true);
  };

  const handleSubmitItem = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.price) {
      alert("Please fill in item name and price.");
      return;
    }

    if (editingItem) {
      onUpdateItem(editingItem.id, formData);
      showToast(`Updated "${formData.name}" successfully!`);
    } else {
      onAddItem(formData);
      showToast(`Added "${formData.name}" to menu!`);
    }

    setIsAddModalOpen(false);
  };

  const handleSaveInfo = (e) => {
    e.preventDefault();
    onUpdateRestaurantInfo(infoForm);
    setEditingInfo(false);
    showToast("Updated restaurant contact details!");
  };

  return (
    <div className="admin-container">
      {/* Toast Banner */}
      {toastMsg && (
        <div style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          background: 'var(--gold-gradient)',
          color: '#000',
          padding: '0.75rem 1.25rem',
          borderRadius: '12px',
          fontWeight: '700',
          zIndex: 200,
          boxShadow: '0 4px 20px rgba(0,0,0,0.5)',
          display: 'flex',
          alignItems: 'center',
          gap: '8px'
        }}>
          <CheckCircle2 size={18} />
          {toastMsg}
        </div>
      )}

      {/* Admin Top Header */}
      <div className="admin-card" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
        <div>
          <h2 className="gold-text" style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem' }}>
            Menu Management Admin
          </h2>
          <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
            FOOD MANTRA • Live items: {menuItems.length}
          </p>
        </div>

        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
          <button onClick={handleOpenAddModal} className="btn-primary">
            <Plus size={16} /> Add Dish
          </button>
          <button onClick={onResetDefault} className="btn-secondary" title="Reset all to default initial items">
            <RefreshCw size={15} /> Reset Menu
          </button>
          <button onClick={onLogout} className="btn-danger" style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            <LogOut size={15} /> Exit Admin
          </button>
        </div>
      </div>

      {/* Restaurant Contact Settings Card */}
      <div className="admin-card">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
          <h3 style={{ fontSize: '1rem', color: 'var(--gold-light)', display: 'flex', alignItems: 'center', gap: '6px' }}>
            <Phone size={16} /> Restaurant Contact & Details
          </h3>
          {!editingInfo && (
            <button onClick={() => setEditingInfo(true)} className="btn-secondary" style={{ padding: '0.35rem 0.75rem', fontSize: '0.8rem' }}>
              <Edit size={14} /> Edit Phone & Address
            </button>
          )}
        </div>

        {editingInfo ? (
          <form onSubmit={handleSaveInfo} style={{ display: 'grid', gap: '0.75rem' }}>
            <div>
              <label className="form-label">Phone Number (Configurable)</label>
              <input 
                type="text" 
                value={infoForm.phone} 
                onChange={(e) => setInfoForm({...infoForm, phone: e.target.value})} 
                className="form-control"
              />
            </div>
            <div>
              <label className="form-label">Address</label>
              <input 
                type="text" 
                value={infoForm.address} 
                onChange={(e) => setInfoForm({...infoForm, address: e.target.value})} 
                className="form-control"
              />
            </div>
            <div style={{ display: 'flex', gap: '0.5rem', marginTop: '0.25rem' }}>
              <button type="submit" className="btn-primary" style={{ padding: '0.4rem 0.85rem', fontSize: '0.85rem' }}>
                <Save size={14} /> Save Details
              </button>
              <button type="button" onClick={() => setEditingInfo(false)} className="btn-secondary" style={{ padding: '0.4rem 0.85rem', fontSize: '0.85rem' }}>
                Cancel
              </button>
            </div>
          </form>
        ) : (
          <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', display: 'grid', gap: '4px' }}>
            <div><strong style={{ color: '#FFF' }}>Phone:</strong> {restaurantInfo.phone}</div>
            <div><strong style={{ color: '#FFF' }}>Address:</strong> {restaurantInfo.address}</div>
          </div>
        )}
      </div>

      {/* Supabase Notice Banner */}
      <div style={{
        background: 'rgba(30, 41, 59, 0.6)',
        border: '1px dashed var(--border-gold)',
        borderRadius: '12px',
        padding: '0.85rem 1rem',
        marginBottom: '1.25rem',
        fontSize: '0.82rem',
        color: 'var(--text-muted)',
        display: 'flex',
        alignItems: 'center',
        gap: '10px'
      }}>
        <Database size={20} style={{ color: 'var(--gold-primary)', flexShrink: 0 }} />
        <div>
          <strong style={{ color: 'var(--gold-light)' }}>Database Notice:</strong> Changes are saved to <code>localStorage</code> for this live demo. To connect to Supabase later, simply replace the <code>menuService.js</code> file methods with Supabase API queries.
        </div>
      </div>

      {/* Search & Filter Controls in Admin */}
      <div style={{ display: 'flex', gap: '0.75rem', marginBottom: '1rem', flexWrap: 'wrap' }}>
        <div style={{ flex: 1, minWidth: '220px', position: 'relative' }}>
          <Search size={16} style={{ position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
          <input 
            type="text"
            placeholder="Search dish in admin..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="form-control"
            style={{ paddingLeft: '2.2rem' }}
          />
        </div>

        <select 
          value={selectedCat} 
          onChange={(e) => setSelectedCat(e.target.value)}
          className="form-control"
          style={{ width: 'auto', minWidth: '180px' }}
        >
          {CATEGORIES.map(c => (
            <option key={c.id} value={c.id}>{c.name}</option>
          ))}
        </select>
      </div>

      {/* Menu List Table / Cards */}
      <div className="admin-card" style={{ padding: 0, overflow: 'hidden' }}>
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.85rem', textAlign: 'left' }}>
            <thead>
              <tr style={{ background: 'rgba(255,255,255,0.04)', borderBottom: '1px solid var(--border-dark)', color: 'var(--gold-light)' }}>
                <th style={{ padding: '0.75rem 1rem' }}>Item & Telugu</th>
                <th style={{ padding: '0.75rem 1rem' }}>Category</th>
                <th style={{ padding: '0.75rem 1rem' }}>Type</th>
                <th style={{ padding: '0.75rem 1rem' }}>Price</th>
                <th style={{ padding: '0.75rem 1rem' }}>Status</th>
                <th style={{ padding: '0.75rem 1rem', textAlign: 'right' }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredItems.map(item => (
                <tr key={item.id} style={{ borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
                  <td style={{ padding: '0.75rem 1rem' }}>
                    <div style={{ fontWeight: 700, color: '#FFF' }}>{item.name}</div>
                    <div style={{ fontSize: '0.78rem', color: 'var(--text-gold)', fontFamily: 'var(--font-telugu)' }}>
                      {item.teluguName || '-'}
                    </div>
                  </td>
                  <td style={{ padding: '0.75rem 1rem', color: 'var(--text-muted)' }}>
                    {item.category}
                  </td>
                  <td style={{ padding: '0.75rem 1rem' }}>
                    {item.isVeg ? (
                      <span style={{ color: 'var(--veg-green)', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                        <span className="veg-icon"></span> Veg
                      </span>
                    ) : (
                      <span style={{ color: 'var(--nonveg-red)', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                        <span className="nonveg-icon"></span> Non-Veg
                      </span>
                    )}
                  </td>
                  <td style={{ padding: '0.75rem 1rem', fontWeight: 700, color: 'var(--price-red)' }}>
                    ₹{item.price}
                  </td>
                  <td style={{ padding: '0.75rem 1rem' }}>
                    <button
                      onClick={() => {
                        onToggleAvailability(item.id);
                        showToast(`Status changed for ${item.name}`);
                      }}
                      style={{
                        background: item.isAvailable ? 'rgba(34, 197, 94, 0.15)' : 'rgba(239, 68, 68, 0.15)',
                        color: item.isAvailable ? '#4ADE80' : '#F87171',
                        border: `1px solid ${item.isAvailable ? 'rgba(34, 197, 94, 0.3)' : 'rgba(239, 68, 68, 0.3)'}`,
                        padding: '0.3rem 0.65rem',
                        borderRadius: '12px',
                        fontSize: '0.75rem',
                        fontWeight: '700',
                        cursor: 'pointer',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '4px'
                      }}
                    >
                      {item.isAvailable ? <Check size={12} /> : <XCircle size={12} />}
                      {item.isAvailable ? 'Available' : 'Sold Out'}
                    </button>
                  </td>
                  <td style={{ padding: '0.75rem 1rem', textAlign: 'right' }}>
                    <div style={{ display: 'flex', gap: '6px', justifyContent: 'flex-end' }}>
                      <button
                        onClick={() => handleOpenEditModal(item)}
                        className="btn-secondary"
                        style={{ padding: '0.35rem 0.6rem', fontSize: '0.75rem' }}
                        title="Edit Dish"
                      >
                        <Edit size={13} />
                      </button>
                      <button
                        onClick={() => {
                          if (confirm(`Delete "${item.name}" from menu?`)) {
                            onDeleteItem(item.id);
                            showToast(`Deleted ${item.name}`);
                          }
                        }}
                        className="btn-danger"
                        style={{ padding: '0.35rem 0.6rem', fontSize: '0.75rem' }}
                        title="Delete Dish"
                      >
                        <Trash2 size={13} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Add / Edit Dish Modal */}
      {isAddModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h3 style={{ fontFamily: 'var(--font-serif)', color: 'var(--gold-light)', marginBottom: '1rem' }}>
              {editingItem ? 'Edit Menu Dish' : 'Add New Menu Dish'}
            </h3>

            <form onSubmit={handleSubmitItem}>
              <div className="form-group">
                <label className="form-label">Dish Name (English) *</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Paneer Butter Masala"
                  className="form-control"
                />
              </div>

              <div className="form-group">
                <label className="form-label">Telugu Name (తెలుగు పేరు)</label>
                <input
                  type="text"
                  value={formData.teluguName}
                  onChange={(e) => setFormData({ ...formData, teluguName: e.target.value })}
                  placeholder="e.g. పన్నీర్ బటర్ మసాలా"
                  className="form-control"
                  style={{ fontFamily: 'var(--font-telugu)' }}
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
                <div className="form-group">
                  <label className="form-label">Category *</label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="form-control"
                  >
                    {CATEGORIES.filter(c => c.id !== 'all').map(c => (
                      <option key={c.id} value={c.id}>{c.name}</option>
                    ))}
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label">Price (₹) *</label>
                  <input
                    type="number"
                    required
                    min="0"
                    value={formData.price}
                    onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                    placeholder="180"
                    className="form-control"
                  />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', marginBottom: '1rem' }}>
                <div className="form-group">
                  <label className="form-label">Food Type</label>
                  <select
                    value={formData.isVeg ? 'veg' : 'nonveg'}
                    onChange={(e) => setFormData({ ...formData, isVeg: e.target.value === 'veg' })}
                    className="form-control"
                  >
                    <option value="veg">🟢 Pure Veg</option>
                    <option value="nonveg">🔴 Non-Veg</option>
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label">Availability Status</label>
                  <select
                    value={formData.isAvailable ? 'available' : 'soldout'}
                    onChange={(e) => setFormData({ ...formData, isAvailable: e.target.value === 'available' })}
                    className="form-control"
                  >
                    <option value="available">Available</option>
                    <option value="soldout">Sold Out</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Image URL</label>
                <input
                  type="url"
                  value={formData.image}
                  onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                  placeholder="https://images.unsplash.com/..."
                  className="form-control"
                />
              </div>

              <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'flex-end', marginTop: '1.25rem' }}>
                <button
                  type="button"
                  onClick={() => setIsAddModalOpen(false)}
                  className="btn-secondary"
                >
                  Cancel
                </button>
                <button type="submit" className="btn-primary">
                  {editingItem ? 'Save Changes' : 'Add to Menu'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
