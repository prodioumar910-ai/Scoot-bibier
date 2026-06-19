import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import HeroCarousel from './components/HeroCarousel';
import CollaboratorsTicker from './components/CollaboratorsTicker';
import ProductCatalog from './components/ProductCatalog';
import SocialLinks from './components/SocialLinks';
import LocationMap from './components/LocationMap';
import PortfolioStudio from './components/PortfolioStudio';
import OrderModal from './components/OrderModal';
import { Product } from './types';

export default function App() {
  const [activePage, setActivePage] = useState<'shop' | 'portfolio'>('shop');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Scroll to top on page transition
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activePage]);

  const handleSelectProduct = (product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleScrollToProducts = () => {
    setActivePage('shop');
    setTimeout(() => {
      const element = document.getElementById('models-section');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <div id="main-container" className="min-h-screen flex flex-col font-sans selection:bg-[#fab18a]/30">
      
      {/* Main Responsive Body Canvas (Header removed on page 1) */}
      <main className="flex-grow">
        
        {activePage === 'shop' ? (
          /* PAGE 1: Accueil & Boutique */
          <div id="page-shop-view" className="space-y-4">
            
            {/* Section 1: Hero Carousel with 5 slides (Full-bleed images, 2 buttons, no text) */}
            <HeroCarousel
              onScrollToProducts={handleScrollToProducts}
              onNavigateToPortfolio={() => setActivePage('portfolio')}
            />

            {/* Section 2: Moving Collaborators Marquee (Real images, no text labels) */}
            <CollaboratorsTicker />

            {/* Section 3: Nos Modèles rows (No text/price inside list, text/price appears on click / dialog) */}
            <ProductCatalog onSelectProduct={handleSelectProduct} />

            {/* Section 4: Mes réseaux sociaux (Decreased icons, all 3 on the same single line) */}
            <SocialLinks />

            {/* Section 5: Ma localisation Yirimadjo (Clean titles, no paragraphs/subtitles) */}
            <LocationMap />

            {/* Section 6: Voir mon portfolio button to navigate to page 2 */}
            <section id="portfolio-gate-section" className="w-full py-12 text-center">
              <div className="max-w-2xl mx-auto px-4 space-y-5">
                <span className="text-[10px] uppercase font-bold tracking-[0.25em] text-[#fab18a] bg-white/5 px-4 py-2 rounded-full border border-white/10">
                  Découvrez l'envers du décor
                </span>
                <h2 className="text-2xl md:text-3xl font-serif font-black text-white leading-tight">
                  Prêt à Découvrir Notre Portfolio de Shooting & Maquillage?
                </h2>
                <motion.button
                  id="gate-navigate-btn"
                  onClick={() => setActivePage('portfolio')}
                  className="px-8 py-3.5 bg-white text-black font-bold rounded-full shadow-2xl cursor-pointer text-xs relative overflow-hidden"
                  whileHover={{ 
                    scale: 1.08, 
                    backgroundColor: "#ffffff",
                    boxShadow: "0 0 25px rgba(250, 177, 138, 0.6)"
                  }}
                  whileTap={{ scale: 0.94 }}
                  animate={{
                    x: [-15, 15, -15],
                    boxShadow: [
                      "0 10px 25px -5px rgba(250, 177, 138, 0.1), 0 8px 10px -6px rgba(250, 177, 138, 0.1)",
                      "0 10px 30px 10px rgba(250, 177, 138, 0.35), 0 8px 15px -4px rgba(250, 177, 138, 0.25)",
                      "0 10px 25px -5px rgba(250, 177, 138, 0.1), 0 8px 10px -6px rgba(250, 177, 138, 0.1)"
                    ]
                  }}
                  transition={{
                    x: {
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut"
                    },
                    boxShadow: {
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }
                  }}
                >
                  Voir mon portfolio
                </motion.button>
              </div>
            </section>

          </div>
        ) : (
          /* PAGE 2: Portfolio, Photoshoots & Maquillage */
          <PortfolioStudio onBackToHome={() => setActivePage('shop')} />
        )}

      </main>

      {/* Footer Branding */}
      <footer id="app-footer" className="bg-black/60 border-t border-white/10 py-8 px-4 text-center text-white/55 text-xs">
        <div className="max-w-6xl mx-auto space-y-3 font-sans">
          <p className="font-serif font-bold text-sm tracking-widest text-[#fab18a]">
            MAISON COUTURE — BAMAKO, MALI
          </p>
          <p className="max-w-xs mx-auto text-[10px] text-gray-400">
            Styliste haut de gamme, création de tenues de prestige, maquillage artistique et shooting photo professionnel.
          </p>
          <div className="text-[9px] text-gray-500 pt-2">
            © 2026 Maison Couture. Tous droits réservés. Tous les boutons sont à bords arrondis.
          </div>
        </div>
      </footer>

      {/* Global Shopping Order Dialog */}
      <OrderModal
        product={selectedProduct}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />

    </div>
  );
}
