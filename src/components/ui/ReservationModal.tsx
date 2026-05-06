'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/Button';

interface ReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface FormData {
  name: string;
  phone: string;
  email: string;
  guests: string;
  date: string;
  time: string;
  specialRequests: string;
}

const initialFormData: FormData = {
  name: '',
  phone: '',
  email: '',
  guests: '2',
  date: '',
  time: '19:00',
  specialRequests: '',
};

export function ReservationModal({ isOpen, onClose }: ReservationModalProps) {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const formatDate = (dateStr: string) => {
    if (!dateStr) return '';
    const date = new Date(dateStr);
    const options: Intl.DateTimeFormatOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('en-IN', options);
  };

  const formatTime = (timeStr: string) => {
    if (!timeStr) return '';
    const [hours, minutes] = timeStr.split(':');
    const hour = parseInt(hours);
    const ampm = hour >= 12 ? 'PM' : 'AM';
    const displayHour = hour % 12 || 12;
    return `${displayHour}:${minutes} ${ampm}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Format message for WhatsApp
    const message = `🍽️ *New Reservation Request*

👤 *Name:* ${formData.name}
📱 *Phone:* ${formData.phone}
📧 *Email:* ${formData.email || 'Not provided'}
👥 *Number of Guests:* ${formData.guests}
📅 *Date:* ${formatDate(formData.date)}
🕐 *Time:* ${formatTime(formData.time)}
📝 *Special Requests:* ${formData.specialRequests || 'None'}

_Booking request from Amodad Village website_`;

    // Owner's WhatsApp number
    const ownerPhone = '917828088755'; // Without + sign
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${ownerPhone}?text=${encodedMessage}`;

    // Open WhatsApp
    window.open(whatsappUrl, '_blank');

    // Reset and close
    setTimeout(() => {
      setFormData(initialFormData);
      setIsSubmitting(false);
      onClose();
    }, 500);
  };

  // Get minimum date (today)
  const getMinDate = () => {
    const today = new Date();
    return today.toISOString().split('T')[0];
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 fade-in">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative bg-warm-white rounded-card shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto border border-stone-gray/10">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-stone-gray hover:text-charcoal transition-colors duration-300 z-10"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Header */}
        <div className="p-8 pb-4 text-center border-b border-stone-gray/10">
          <p className="font-inter text-xs tracking-[0.3em] uppercase text-soft-gold mb-2">Reservations</p>
          <h2 className="font-cormorant text-3xl font-medium text-charcoal mb-2">Reserve Your Table</h2>
          <div className="flex items-center justify-center gap-3">
            <div className="w-8 h-px bg-gradient-to-r from-transparent to-forest-green/40" />
            <div className="w-1.5 h-1.5 rounded-full bg-forest-green/40" />
            <div className="w-8 h-px bg-gradient-to-l from-transparent to-forest-green/40" />
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-8 pt-6 space-y-5">
          {/* Name */}
          <div>
            <label htmlFor="name" className="block font-inter text-xs uppercase tracking-wider text-stone-gray mb-2">
              Full Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 bg-cream border border-stone-gray/20 rounded-button font-inter text-charcoal placeholder-stone-gray/50 focus:outline-none focus:border-forest-green/50 focus:ring-1 focus:ring-forest-green/20 transition-all duration-300"
              placeholder="Enter your name"
            />
          </div>

          {/* Phone */}
          <div>
            <label htmlFor="phone" className="block font-inter text-xs uppercase tracking-wider text-stone-gray mb-2">
              Phone Number *
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 bg-cream border border-stone-gray/20 rounded-button font-inter text-charcoal placeholder-stone-gray/50 focus:outline-none focus:border-forest-green/50 focus:ring-1 focus:ring-forest-green/20 transition-all duration-300"
              placeholder="+91 98765 43210"
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block font-inter text-xs uppercase tracking-wider text-stone-gray mb-2">
              Email (Optional)
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-4 py-3 bg-cream border border-stone-gray/20 rounded-button font-inter text-charcoal placeholder-stone-gray/50 focus:outline-none focus:border-forest-green/50 focus:ring-1 focus:ring-forest-green/20 transition-all duration-300"
              placeholder="your@email.com"
            />
          </div>

          {/* Guests & Date Row */}
          <div className="grid grid-cols-2 gap-4">
            {/* Number of Guests */}
            <div>
              <label htmlFor="guests" className="block font-inter text-xs uppercase tracking-wider text-stone-gray mb-2">
                Guests *
              </label>
              <select
                id="guests"
                name="guests"
                value={formData.guests}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 bg-cream border border-stone-gray/20 rounded-button font-inter text-charcoal focus:outline-none focus:border-forest-green/50 focus:ring-1 focus:ring-forest-green/20 transition-all duration-300 appearance-none cursor-pointer"
              >
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, '10+'].map((num) => (
                  <option key={num} value={num}>
                    {num} {num === 1 ? 'Guest' : 'Guests'}
                  </option>
                ))}
              </select>
            </div>

            {/* Date */}
            <div>
              <label htmlFor="date" className="block font-inter text-xs uppercase tracking-wider text-stone-gray mb-2">
                Date *
              </label>
              <input
                type="date"
                id="date"
                name="date"
                value={formData.date}
                onChange={handleInputChange}
                required
                min={getMinDate()}
                className="w-full px-4 py-3 bg-cream border border-stone-gray/20 rounded-button font-inter text-charcoal focus:outline-none focus:border-forest-green/50 focus:ring-1 focus:ring-forest-green/20 transition-all duration-300 cursor-pointer"
              />
            </div>
          </div>

          {/* Time */}
          <div>
            <label htmlFor="time" className="block font-inter text-xs uppercase tracking-wider text-stone-gray mb-2">
              Preferred Time *
            </label>
            <select
              id="time"
              name="time"
              value={formData.time}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 bg-cream border border-stone-gray/20 rounded-button font-inter text-charcoal focus:outline-none focus:border-forest-green/50 focus:ring-1 focus:ring-forest-green/20 transition-all duration-300 appearance-none cursor-pointer"
            >
              <option value="12:00">12:00 PM (Lunch)</option>
              <option value="13:00">1:00 PM (Lunch)</option>
              <option value="14:00">2:00 PM (Lunch)</option>
              <option value="18:00">6:00 PM (Dinner)</option>
              <option value="19:00">7:00 PM (Dinner)</option>
              <option value="20:00">8:00 PM (Dinner)</option>
              <option value="21:00">9:00 PM (Dinner)</option>
              <option value="22:00">10:00 PM (Dinner)</option>
            </select>
          </div>

          {/* Special Requests */}
          <div>
            <label htmlFor="specialRequests" className="block font-inter text-xs uppercase tracking-wider text-stone-gray mb-2">
              Special Requests (Optional)
            </label>
            <textarea
              id="specialRequests"
              name="specialRequests"
              value={formData.specialRequests}
              onChange={handleInputChange}
              rows={3}
              className="w-full px-4 py-3 bg-cream border border-stone-gray/20 rounded-button font-inter text-charcoal placeholder-stone-gray/50 focus:outline-none focus:border-forest-green/50 focus:ring-1 focus:ring-forest-green/20 transition-all duration-300 resize-none"
              placeholder="Birthday celebration, anniversary, dietary requirements, preferred seating..."
            />
          </div>

          {/* Submit Button */}
          <div className="pt-4">
            <Button
              type="submit"
              variant="primary"
              size="lg"
              className="w-full btn-shine"
              icon={
                isSubmitting ? (
                  <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 2.042.784 3.89 2.067 5.291l2.067-2.067z" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                )
              }
            >
              {isSubmitting ? 'Sending...' : 'Confirm Booking via WhatsApp'}
            </Button>
          </div>

          {/* Note */}
          <p className="text-center font-inter text-xs text-stone-gray/70 italic pt-2">
            Booking will be confirmed via WhatsApp within 30 minutes
          </p>
        </form>
      </div>
    </div>
  );
}
