'use client';

import { useState } from 'react';
import Image from 'next/image';
import { OrderModal } from '@/components/ui/OrderModal';
import { useScrollReveal } from '@/hooks/useScrollAnimations';

interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
}

interface CartItem extends MenuItem {
  quantity: number;
}

const menuItems: MenuItem[] = [
  // Starters
  { id: '1', name: 'Paneer Tikka', description: 'Marinated cottage cheese grilled to perfection', price: 280, image: 'https://picsum.photos/seed/paneer-tikka/200/200', category: 'starters' },
  { id: '2', name: 'Hara Bhara Kabab', description: 'Spinach and pea patties with herbs', price: 240, image: 'https://picsum.photos/seed/kabab/200/200', category: 'starters' },
  { id: '3', name: 'Corn Cheese Balls', description: 'Crispy corn and cheese fritters', price: 220, image: 'https://picsum.photos/seed/corn-balls/200/200', category: 'starters' },
  
  // Main Course
  { id: '4', name: 'Dal Makhani', description: 'Creamy black lentils slow-cooked overnight', price: 320, image: 'https://picsum.photos/seed/dal-makhani/200/200', category: 'main' },
  { id: '5', name: 'Paneer Butter Masala', description: 'Cottage cheese in rich tomato gravy', price: 360, image: 'https://picsum.photos/seed/paneer-masala/200/200', category: 'main' },
  { id: '6', name: 'Veg Kolhapuri', description: 'Mixed vegetables in spicy Kolhapuri gravy', price: 340, image: 'https://picsum.photos/seed/kolhapuri/200/200', category: 'main' },
  { id: '7', name: 'Malai Kofta', description: 'Soft paneer dumplings in creamy sauce', price: 380, image: 'https://picsum.photos/seed/malai-kofta/200/200', category: 'main' },
  
  // Breads & Rice
  { id: '8', name: 'Butter Naan', description: 'Soft leavened bread with butter', price: 60, image: 'https://picsum.photos/seed/naan/200/200', category: 'breads' },
  { id: '9', name: 'Tandoori Roti', description: 'Whole wheat bread from clay oven', price: 40, image: 'https://picsum.photos/seed/roti/200/200', category: 'breads' },
  { id: '10', name: 'Garlic Naan', description: 'Naan topped with garlic and coriander', price: 80, image: 'https://picsum.photos/seed/garlic-naan/200/200', category: 'breads' },
  { id: '11', name: 'Steamed Rice', description: 'Fluffy basmati rice', price: 120, image: 'https://picsum.photos/seed/rice/200/200', category: 'breads' },
  
  // Beverages
  { id: '12', name: 'Masala Chai', description: 'Traditional spiced tea', price: 60, image: 'https://picsum.photos/seed/chai/200/200', category: 'beverages' },
  { id: '13', name: 'Fresh Lime Soda', description: 'Refreshing lime with soda', price: 80, image: 'https://picsum.photos/seed/lime-soda/200/200', category: 'beverages' },
  { id: '14', name: 'Lassi', description: 'Sweet yogurt drink', price: 100, image: 'https://picsum.photos/seed/lassi/200/200', category: 'beverages' },
  
  // Desserts
  { id: '15', name: 'Gulab Jamun', description: 'Deep-fried milk dumplings in syrup', price: 120, image: 'https://picsum.photos/seed/gulab-jamun/200/200', category: 'desserts' },
  { id: '16', name: 'Rasmalai', description: 'Soft paneer discs in sweet milk', price: 150, image: 'https://picsum.photos/seed/rasmalai/200/200', category: 'desserts' },
];

const categories = [
  { id: 'starters', label: 'Starters' },
  { id: 'main', label: 'Main Course' },
  { id: 'breads', label: 'Breads & Rice' },
  { id: 'beverages', label: 'Beverages' },
  { id: 'desserts', label: 'Desserts' },
];

export function Menu() {
  const [activeCategory, setActiveCategory] = useState('starters');
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [headerRef, headerVisible] = useScrollReveal<HTMLDivElement>();

  const addToCart = (item: MenuItem) => {
    setCart((prev) => {
      const existing = prev.find((i) => i.id === item.id);
      if (existing) {
        return prev.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...prev, { ...item, quantity: 1 }];
    });
  };

  const removeFromCart = (itemId: string) => {
    setCart((prev) => {
      const existing = prev.find((i) => i.id === itemId);
      if (existing && existing.quantity > 1) {
        return prev.map((i) =>
          i.id === itemId ? { ...i, quantity: i.quantity - 1 } : i
        );
      }
      return prev.filter((i) => i.id !== itemId);
    });
  };

  const getCartQuantity = (itemId: string) => {
    return cart.find((i) => i.id === itemId)?.quantity || 0;
  };

  const filteredItems = menuItems.filter((item) => item.category === activeCategory);

  return (
    <section id="menu" className="section-padding bg-warm-white relative overflow-hidden">
      {/* Decorative element */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-forest-green/5 rounded-full blur-3xl -translate-x-1/2" />
      
      <div className="max-w-content mx-auto container-padding relative">
        {/* Section Header */}
        <div ref={headerRef} className={`text-center mb-14 scroll-reveal ${headerVisible ? 'revealed' : ''}`}>
          <p className="font-inter text-xs tracking-[0.3em] uppercase text-soft-gold mb-4">Culinary Delights</p>
          <h2 className="font-cormorant text-section-mobile lg:text-section font-medium text-charcoal mb-6">
            Our Menu
          </h2>
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-12 h-px bg-gradient-to-r from-transparent to-forest-green/40" />
            <div className="w-1.5 h-1.5 rounded-full bg-forest-green/40" />
            <div className="w-12 h-px bg-gradient-to-l from-transparent to-forest-green/40" />
          </div>
          <p className="font-inter text-base text-stone-gray max-w-2xl mx-auto leading-relaxed">
            Authentic recipes passed down through generations, prepared with love and the finest ingredients.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Category Sidebar */}
          <div className="lg:col-span-1">
            <div className="lg:sticky lg:top-28 bg-cream rounded-card p-6 border border-stone-gray/10">
              <h3 className="font-cormorant text-xl font-medium text-charcoal mb-5 tracking-wide">Categories</h3>
              <nav className="flex flex-row lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0">
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className={`
                      font-inter text-sm whitespace-nowrap px-5 py-2.5 rounded-button transition-all duration-300
                      ${activeCategory === cat.id
                        ? 'bg-forest-green text-warm-white shadow-md'
                        : 'text-charcoal hover:bg-forest-green/10 border border-transparent hover:border-forest-green/20'}
                    `}
                  >
                    {cat.label}
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Menu Items */}
          <div className="lg:col-span-3">
            <div className="space-y-4">
              {filteredItems.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center gap-5 p-5 bg-cream rounded-card border border-stone-gray/10 card-hover group"
                >
                  {/* Image */}
                  <div className="relative w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      sizes="80px"
                      className="object-cover"
                    />
                  </div>

                  {/* Details */}
                  <div className="flex-grow">
                    <h4 className="font-cormorant text-xl font-medium text-charcoal">{item.name}</h4>
                    <p className="font-inter text-sm text-stone-gray">{item.description}</p>
                  </div>

                  {/* Price & Add */}
                  <div className="flex items-center gap-4">
                    <span className="font-inter text-lg font-medium text-soft-gold">₹{item.price}</span>
                    
                    {getCartQuantity(item.id) > 0 ? (
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="w-8 h-8 rounded-full bg-forest-green/10 text-forest-green flex items-center justify-center hover:bg-forest-green/20 transition-colors"
                        >
                          −
                        </button>
                        <span className="font-inter text-sm w-6 text-center">{getCartQuantity(item.id)}</span>
                        <button
                          onClick={() => addToCart(item)}
                          className="w-8 h-8 rounded-full bg-forest-green/10 text-forest-green flex items-center justify-center hover:bg-forest-green/20 transition-colors"
                        >
                          +
                        </button>
                      </div>
                    ) : (
                      <button
                        onClick={() => addToCart(item)}
                        className="font-inter text-xs uppercase tracking-wider px-4 py-2 border border-forest-green text-forest-green rounded-button hover:bg-forest-green hover:text-warm-white transition-all duration-300"
                      >
                        Add
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Cart Summary */}
            {cart.length > 0 && (
              <div className="mt-8 p-6 bg-forest-green rounded-card">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-cormorant text-xl font-medium text-warm-white">Your Order</h4>
                  <span className="font-inter text-sm text-warm-white/80">
                    {cart.reduce((sum, item) => sum + item.quantity, 0)} items
                  </span>
                </div>
                
                <div className="space-y-2 mb-4">
                  {cart.map((item) => (
                    <div key={item.id} className="flex justify-between text-warm-white/90 font-inter text-sm">
                      <span>{item.name} × {item.quantity}</span>
                      <span>₹{item.price * item.quantity}</span>
                    </div>
                  ))}
                </div>

                <div className="border-t border-warm-white/20 pt-4 flex items-center justify-between">
                  <span className="font-cormorant text-lg text-warm-white">Total: ₹{cart.reduce((sum, item) => sum + item.price * item.quantity, 0)}</span>
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="font-inter text-xs uppercase tracking-wider px-6 py-3 bg-soft-gold text-charcoal rounded-button hover:bg-soft-gold/80 transition-all"
                  >
                    Order Now
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Order Modal */}
      <OrderModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        items={cart}
      />
    </section>
  );
}
