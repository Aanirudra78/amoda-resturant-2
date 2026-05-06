// WhatsApp number for Amodad Village
export const WHATSAPP_NUMBER = '917828088755';

// Generate WhatsApp URL with pre-filled message
export function getWhatsAppUrl(message: string): string {
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
}

// Pre-filled message templates
export const whatsappMessages = {
  booking: `Hello! I'd like to reserve a table at Amodad Village.

Preferred Date: 
Time: 
Number of Guests: 
Special Requests: 

Looking forward to the experience!`,

  orderInquiry: `Hello! I'd like to inquire about placing an order from Amodad Village.

Please let me know the current menu and availability.

Thank you!`,

  order: (items: { name: string; quantity: number; price: number }[]) => {
    const orderDetails = items
      .map((item) => `${item.name} x ${item.quantity} — ₹${item.price * item.quantity}`)
      .join('\n');
    
    const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

    return `Hello! I'd like to place an order from Amodad Village:

ORDER DETAILS:
${orderDetails}

Total: ₹${total}

Delivery/Pickup: 
Contact: 

Thank you!`;
  },
};

// Generate booking URL
export function getBookingUrl(): string {
  return getWhatsAppUrl(whatsappMessages.booking);
}

// Generate order inquiry URL
export function getOrderInquiryUrl(): string {
  return getWhatsAppUrl(whatsappMessages.orderInquiry);
}

// Generate order URL with items
export function getOrderUrl(items: { name: string; quantity: number; price: number }[]): string {
  return getWhatsAppUrl(whatsappMessages.order(items));
}
