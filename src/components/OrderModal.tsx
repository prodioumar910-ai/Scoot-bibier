import React, { useState } from 'react';
import { Product } from '../types';
import { X, Send, ShoppingBag } from 'lucide-react';

interface OrderModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function OrderModal({ product, isOpen, onClose }: OrderModalProps) {
  if (!isOpen || !product) return null;

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [error, setError] = useState('');

  const handleIncrement = () => setQuantity((prev) => prev + 1);
  const handleDecrement = () => {
    if (quantity > 1) setQuantity((prev) => prev - 1);
  };

  const handleOrderSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      setError('Veuillez entrer votre nom complet.');
      return;
    }
    if (!phone.trim()) {
      setError('Veuillez entrer votre numéro de téléphone.');
      return;
    }

    setError('');
    
    // WhatsApp structure: https://wa.me/22375434268?text=URI_ENCODED_MESSAGE
    const phoneNumber = '22375434268';
    
    const message = `Bonjour Maison de Stylisme ! ✨

Je souhaite commander le modèle suivant :
👗 Article : *${product.name}*
🏷️ Catégorie : ${product.category}
💰 Prix : ${product.price}
📊 Quantité : *${quantity}*

👤 *Informations Client :*
- Nom : ${name.trim()}
- Téléphone : ${phone.trim()}

🖼️ Lien Image : ${product.image.startsWith('http') ? product.image : window.location.origin + product.image}

Merci de confirmer ma commande ! 🙏`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    
    // Open in a new tab
    window.open(whatsappUrl, '_blank');
    onClose();
  };

  return (
    <div id="order-modal-overlay" className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm transition-opacity">
      <div 
        id="order-modal-content"
        className="relative w-full max-w-lg glass-panel text-white rounded-3xl overflow-hidden shadow-2xl border border-white/20 animate-in fade-in zoom-in-95 duration-300 max-h-[92vh] overflow-y-auto scrollbar-hide"
      >
        {/* Banner with product image displayed to perfection */}
        <div className="relative h-[420px] bg-black">
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-full h-full object-contain"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
          <button 
            id="close-modal-btn"
            onClick={onClose}
            className="absolute top-4 right-4 p-2.5 bg-black/70 text-white rounded-full hover:bg-white hover:text-black transition-all shadow-md z-10"
            aria-label="Fermer"
          >
            <X className="w-5 h-5" />
          </button>
          
          <div className="absolute bottom-4 left-6 right-6">
            <span className="text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full bg-black/50 backdrop-blur-md border border-white/10 text-[#fab18a]">
              {product.category}
            </span>
          </div>
        </div>

        {/* Ordering details */}
        <form onSubmit={handleOrderSubmit} className="p-6 space-y-4">
          <div className="space-y-1">
            <h3 className="text-2xl font-serif font-black text-white leading-tight">
              {product.name}
            </h3>
            <p className="text-xl font-sans font-extrabold text-[#fab18a]">
              {product.price}
            </p>
          </div>

          <p className="text-gray-300 text-xs md:text-sm">
            {product.description}
          </p>
          
          <div className="w-full h-[1px] bg-white/10" />

          {error && (
            <div className="p-3 text-xs text-red-300 bg-red-950/60 border border-red-500/30 rounded-xl">
              {error}
            </div>
          )}

          {/* Form Fields */}
          <div className="space-y-3">
            <div>
              <label htmlFor="client-name" className="block text-xs font-medium text-gray-300 mb-1">
                Nom complet *
              </label>
              <input
                id="client-name"
                type="text"
                placeholder="Ex: Fatoumata Kouyaté"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-2.5 bg-white/10 border border-white/20 rounded-full text-sm text-white placeholder-gray-400 focus:outline-none focus:border-white focus:ring-1 focus:ring-white transition-all"
                required
              />
            </div>

            <div>
              <label htmlFor="client-phone" className="block text-xs font-medium text-gray-300 mb-1">
                Numéro de téléphone * (WhatsApp)
              </label>
              <input
                id="client-phone"
                type="tel"
                placeholder="Ex: +223 75 43 42 68"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full px-4 py-2.5 bg-white/10 border border-white/20 rounded-full text-sm text-white placeholder-gray-400 focus:outline-none focus:border-white focus:ring-1 focus:ring-white transition-all"
                required
              />
            </div>

            {/* Quantity Selector */}
            <div className="flex items-center justify-between pt-2">
              <span className="text-xs font-medium text-gray-300">Quantité de produits</span>
              <div id="quantity-control" className="flex items-center space-x-3 bg-white/10 rounded-full p-1 border border-white/20">
                <button
                  type="button"
                  onClick={handleDecrement}
                  className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-white/20 text-white transition-all font-bold text-lg"
                >
                  -
                </button>
                <span className="w-8 text-center font-bold text-sm">{quantity}</span>
                <button
                  type="button"
                  onClick={handleIncrement}
                  className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-white/20 text-white transition-all font-bold text-lg"
                >
                  +
                </button>
              </div>
            </div>
          </div>

          {/* Action Button */}
          <button
            id="submit-order-btn"
            type="submit"
            className="w-full mt-4 py-3 px-6 bg-white hover:bg-gray-100 text-black font-semibold rounded-full flex items-center justify-center space-x-2 transition-all hover:scale-[1.02] cursor-pointer shadow-lg active:scale-95"
          >
            <Send className="w-4 h-4 text-black" />
            <span>Envoyer la commande via WhatsApp</span>
          </button>
        </form>
      </div>
    </div>
  );
}
