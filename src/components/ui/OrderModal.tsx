'use client';

import { useState } from 'react';

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

interface OrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
}

interface OrderDetails {
  name: string;
  phone: string;
  tableNumber: string;
  orderType: 'dine-in' | 'takeaway';
  specialRequests: string;
}

export function OrderModal({ isOpen, onClose, items }: OrderModalProps) {
  const [orderDetails, setOrderDetails] = useState<OrderDetails>({
    name: '',
    phone: '',
    tableNumber: '',
    orderType: 'dine-in',
    specialRequests: '',
  });

  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleInputChange = (field: keyof OrderDetails, value: string) => {
    setOrderDetails((prev) => ({ ...prev, [field]: value }));
  };

  const handleOrderSubmit = () => {
    if (!orderDetails.name || !orderDetails.phone) {
      alert('Please fill in your name and phone number');
      return;
    }

    const orderItems = items
      .map((item) => `${item.name} x ${item.quantity} — ₹${item.price * item.quantity}`)
      .join('\n');

    const message = `🍽️ *NEW ORDER - AMODAD VILLAGE*

👤 *Customer Details:*
Name: ${orderDetails.name}
Phone: ${orderDetails.phone}
${orderDetails.orderType === 'dine-in' ? `Table: ${orderDetails.tableNumber || 'Not specified'}` : ''}

📦 *Order Type:* ${orderDetails.orderType === 'dine-in' ? 'Dine In' : 'Take Away'}

📋 *Order Details:*
${orderItems}

💰 *Total Amount:* ₹${total}

${orderDetails.specialRequests ? `📝 *Special Requests:*\n${orderDetails.specialRequests}` : ''}

Thank you for your order! 🙏`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/917828088755?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative bg-warm-white rounded-card shadow-card-hover max-w-lg w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-warm-white border-b border-stone-gray/20 p-6 flex items-center justify-between">
          <h2 className="font-cormorant text-2xl font-medium text-charcoal">Complete Your Order</h2>
          <button
            onClick={onClose}
            className="p-2 text-stone-gray hover:text-charcoal transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Form */}
        <div className="p-6 space-y-6">
          {/* Name */}
          <div>
            <label className="block font-inter text-sm text-charcoal mb-2">
              Your Name <span className="text-terracotta-hint">*</span>
            </label>
            <input
              type="text"
              value={orderDetails.name}
              onChange={(e) => handleInputChange('name', e.target.value)}
              placeholder="Enter your name"
              className="w-full px-4 py-3 bg-cream border border-stone-gray/30 rounded-input font-inter text-sm text-charcoal placeholder:text-stone-gray focus:outline-none focus:border-forest-green transition-colors"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block font-inter text-sm text-charcoal mb-2">
              Phone Number <span className="text-terracotta-hint">*</span>
            </label>
            <input
              type="tel"
              value={orderDetails.phone}
              onChange={(e) => handleInputChange('phone', e.target.value)}
              placeholder="Enter your phone number"
              className="w-full px-4 py-3 bg-cream border border-stone-gray/30 rounded-input font-inter text-sm text-charcoal placeholder:text-stone-gray focus:outline-none focus:border-forest-green transition-colors"
            />
          </div>

          {/* Order Type */}
          <div>
            <label className="block font-inter text-sm text-charcoal mb-2">Order Type</label>
            <div className="flex gap-4">
              <button
                onClick={() => handleInputChange('orderType', 'dine-in')}
                className={`flex-1 py-3 px-4 rounded-input font-inter text-sm transition-all ${
                  orderDetails.orderType === 'dine-in'
                    ? 'bg-forest-green text-warm-white'
                    : 'bg-cream text-charcoal border border-stone-gray/30 hover:border-forest-green'
                }`}
              >
                🍽️ Dine In
              </button>
              <button
                onClick={() => handleInputChange('orderType', 'takeaway')}
                className={`flex-1 py-3 px-4 rounded-input font-inter text-sm transition-all ${
                  orderDetails.orderType === 'takeaway'
                    ? 'bg-forest-green text-warm-white'
                    : 'bg-cream text-charcoal border border-stone-gray/30 hover:border-forest-green'
                }`}
              >
                📦 Take Away
              </button>
            </div>
          </div>

          {/* Table Number (only for dine-in) */}
          {orderDetails.orderType === 'dine-in' && (
            <div>
              <label className="block font-inter text-sm text-charcoal mb-2">Table Number</label>
              <input
                type="text"
                value={orderDetails.tableNumber}
                onChange={(e) => handleInputChange('tableNumber', e.target.value)}
                placeholder="Enter table number (if known)"
                className="w-full px-4 py-3 bg-cream border border-stone-gray/30 rounded-input font-inter text-sm text-charcoal placeholder:text-stone-gray focus:outline-none focus:border-forest-green transition-colors"
              />
            </div>
          )}

          {/* Special Requests */}
          <div>
            <label className="block font-inter text-sm text-charcoal mb-2">Special Requests</label>
            <textarea
              value={orderDetails.specialRequests}
              onChange={(e) => handleInputChange('specialRequests', e.target.value)}
              placeholder="Any special requests, allergies, or preferences..."
              rows={3}
              className="w-full px-4 py-3 bg-cream border border-stone-gray/30 rounded-input font-inter text-sm text-charcoal placeholder:text-stone-gray focus:outline-none focus:border-forest-green transition-colors resize-none"
            />
          </div>

          {/* Order Summary */}
          <div className="bg-cream rounded-card p-4">
            <h3 className="font-cormorant text-lg font-medium text-charcoal mb-3">Order Summary</h3>
            <div className="space-y-2 mb-4">
              {items.map((item) => (
                <div key={item.id} className="flex justify-between font-inter text-sm text-charcoal">
                  <span>{item.name} × {item.quantity}</span>
                  <span className="text-soft-gold font-medium">₹{item.price * item.quantity}</span>
                </div>
              ))}
            </div>
            <div className="border-t border-stone-gray/20 pt-3 flex justify-between items-center">
              <span className="font-cormorant text-lg text-charcoal">Total</span>
              <span className="font-inter text-xl font-medium text-forest-green">₹{total}</span>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="sticky bottom-0 bg-warm-white border-t border-stone-gray/20 p-6">
          <button
            onClick={handleOrderSubmit}
            className="w-full bg-forest-green text-warm-white font-inter font-medium text-sm uppercase tracking-wider py-4 rounded-button hover:bg-forest-green/90 transition-all flex items-center justify-center gap-2"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Order via WhatsApp
          </button>
        </div>
      </div>
    </div>
  );
}
