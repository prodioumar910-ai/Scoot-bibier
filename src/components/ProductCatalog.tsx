import { Product } from '../types';
import { ROW_1_PRODUCTS, ROW_2_PRODUCTS, ROW_3_PRODUCTS } from '../data';
import { Sparkles, Eye } from 'lucide-react';

interface ProductCatalogProps {
  onSelectProduct: (product: Product) => void;
}

export default function ProductCatalog({ onSelectProduct }: ProductCatalogProps) {
  
  const renderProductRow = (products: Product[], rowTitle: string) => {
    return (
      <div className="space-y-2 py-4">
        {/* Row Title */}
        <div className="flex justify-between items-center px-4 max-w-6xl mx-auto">
          <h3 className="text-xs font-sans font-bold uppercase tracking-[0.25em] text-white">
            {rowTitle}
          </h3>
          <span className="text-[9px] text-white/80 uppercase tracking-widest font-sans flex items-center space-x-1">
            <Sparkles className="w-3 h-3 text-white" />
            <span>Faites défiler & cliquez pour commander</span>
          </span>
        </div>

        {/* Manual Scrolling viewport */}
        <div className="relative w-full overflow-hidden py-2">
          {/* Subtle side shadow gradients */}
          <div className="absolute left-0 top-0 bottom-0 w-8 md:w-16 bg-gradient-to-r from-black/40 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-8 md:w-16 bg-gradient-to-l from-black/40 to-transparent z-10 pointer-events-none" />

          {/* Draggable/scrollable container */}
          <div className="w-full overflow-x-auto flex space-x-5 px-4 md:px-16 scrollbar-hide snap-x snap-mandatory scroll-smooth py-1">
            {products.map((product, idx) => (
              <div
                key={`row-${rowTitle}-${product.id}-${idx}`}
                onClick={() => onSelectProduct(product)}
                className="w-80 h-[440px] bg-black/60 rounded-none overflow-hidden shrink-0 transition-transform duration-300 hover:scale-[1.04] active:scale-95 cursor-pointer relative group border border-white/25 backdrop-blur-md shadow-[0_8px_32px_0_rgba(255,255,255,0.12)] ring-1 ring-white/10 hover:border-white/40 snap-start"
              >
                {/* Full size photo area (no pre-loaded texts/prices) */}
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-contain"
                  referrerPolicy="no-referrer"
                />
                
                {/* Subtle dark bottom vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10" />

                {/* Elegant overlay on Hover */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center space-y-2 p-4">
                  <div className="p-3 bg-white text-black rounded-full shadow-lg">
                    <Eye className="w-5 h-5 text-black" />
                  </div>
                  <span className="text-xs text-white font-medium tracking-wide font-sans uppercase">
                    Découvrir & Acheter
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  return (
    <section id="models-section" className="w-full py-12 scroll-mt-6">
      <div className="max-w-6xl mx-auto px-4 mb-4 text-center">
        <h2 className="text-2xl md:text-3xl font-serif font-black tracking-tight text-white mb-2">
          Nos Modèles
        </h2>
        <div className="w-16 h-[2px] bg-[#fab18a] mx-auto mt-3 rounded-full" />
      </div>

      <div className="space-y-6">
        {renderProductRow(ROW_1_PRODUCTS, 'luxe by scoot')}
        {renderProductRow(ROW_2_PRODUCTS, 'design scoot')}
        {renderProductRow(ROW_3_PRODUCTS, 'moderne scoot')}
      </div>
    </section>
  );
}
