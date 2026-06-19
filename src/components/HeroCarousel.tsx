import { useState, useEffect } from 'react';
import { HERO_PRODUCTS } from '../data';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface HeroCarouselProps {
  onScrollToProducts: () => void;
  onNavigateToPortfolio: () => void;
}

export default function HeroCarousel({ onScrollToProducts, onNavigateToPortfolio }: HeroCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-play the 5 hero products
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % HERO_PRODUCTS.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + HERO_PRODUCTS.length) % HERO_PRODUCTS.length);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % HERO_PRODUCTS.length);
  };

  return (
    <section id="hero-carousel-section" className="relative w-full h-[580px] md:h-[820px] overflow-hidden flex flex-col items-center justify-center">
      <div className="w-full h-full text-white relative group">
        
        {/* Full-bleed Carousel Images taking the entire section */}
        {HERO_PRODUCTS.map((product, idx) => (
          <div
            key={product.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              idx === activeIndex ? 'opacity-100 z-10 scale-100' : 'opacity-0 z-0 scale-105'
            }`}
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            {/* Subtle bottom dark vignette overlay for button contrast */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/20 z-20" />
          </div>
        ))}

        {/* Carousel manual navigation arrows overlay with subtle round glass style */}
        <div className="absolute inset-x-4 top-1/2 -translate-y-1/2 z-30 flex justify-between pointer-events-none">
          <button
            onClick={handlePrev}
            className="p-2.5 bg-black/40 hover:bg-white hover:text-black rounded-full transition-all border border-white/10 pointer-events-auto cursor-pointer"
            aria-label="Image Précédente"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={handleNext}
            className="p-2.5 bg-black/40 hover:bg-white hover:text-black rounded-full transition-all border border-white/10 pointer-events-auto cursor-pointer"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Position indicators (Dots) */}
        <div className="absolute top-4 left-1/2 transform -translate-x-1/2 z-30 flex space-x-1.5">
          {HERO_PRODUCTS.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                idx === activeIndex ? 'bg-white scale-125' : 'bg-white/30 hover:bg-white/60'
              }`}
              aria-label={`Aller au slide ${idx + 1}`}
            />
          ))}
        </div>

        {/* Action buttons directly on the image with NO backplate panel & reduced dimensions */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-30 w-full max-w-sm px-4 flex items-center justify-center gap-3">
          <button
            onClick={onScrollToProducts}
            className="px-4 py-2 bg-white hover:bg-gray-100 text-black text-xs font-bold rounded-full shadow-lg transition-transform hover:scale-105 active:scale-95 cursor-pointer text-center"
          >
            Voir nos produits
          </button>
          <button
            onClick={onNavigateToPortfolio}
            className="px-4 py-2 bg-black/50 hover:bg-black/80 border border-white/20 text-white text-xs font-semibold rounded-full shadow-md transition-transform hover:scale-105 active:scale-95 cursor-pointer text-center"
          >
            Voir nos réalisations
          </button>
        </div>

      </div>
    </section>
  );
}
