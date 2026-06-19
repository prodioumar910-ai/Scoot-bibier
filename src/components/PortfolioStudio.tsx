import { PHOTOSHOOT_IMAGES, MAKEUP_IMAGE } from '../data';
import { Phone, ArrowLeft, Camera, Sparkles, Heart } from 'lucide-react';

interface PortfolioStudioProps {
  onBackToHome: () => void;
}

export default function PortfolioStudio({ onBackToHome }: PortfolioStudioProps) {
  const handlePhoneCall = () => {
    window.location.href = 'tel:+22375434268';
  };

  return (
    <div id="portfolio-view-container" className="py-8 md:py-12 animate-in fade-in slide-in-from-bottom-8 duration-500">
      {/* Back Button and Title */}
      <div className="max-w-6xl mx-auto px-4 mb-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <button
          onClick={onBackToHome}
          className="flex items-center space-x-2 px-5 py-2.5 bg-white text-black font-semibold rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:-translate-x-1 active:scale-95 shadow-md cursor-pointer text-sm"
        >
          <ArrowLeft className="w-4 h-4 text-black" />
          <span>Retour à l'Accueil</span>
        </button>

        <div className="text-center md:text-right">
          <h1 className="text-3xl md:text-5xl font-serif font-black text-white mt-1">
            Studio & Portfolio
          </h1>
        </div>
      </div>

      {/* SECTION 1: Nos photo shoot (1 unique stunning photoshoot image, like makeup but without subtitle) */}
      <section id="photoshoots-section" className="max-w-4xl mx-auto px-4 py-10">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center space-x-2 text-[#fab18a] mb-2">
            <Sparkles className="w-4 h-4 text-[#fab18a]" />
            <h2 className="text-2xl md:text-3xl font-serif font-black text-white">
              Ont fait des photo shooting
            </h2>
          </div>
          <div className="w-12 h-[2px] bg-[#fab18a] mx-auto mt-4 rounded-full" />
        </div>

        {/* Single photoshoot spotlight image, centered and tall, matching makeup layout but filled, with no side descriptions/subtitles */}
        <div id="spotlight-photoshoot-frame" className="relative rounded-3xl overflow-hidden shadow-2xl glass-panel border border-white/15 w-full h-[500px] md:h-[750px] bg-black/90">
          <img
            src={PHOTOSHOOT_IMAGES[0].url}
            alt="Unique photoshoot"
            className="w-full h-full object-contain"
            referrerPolicy="no-referrer"
          />
          {/* Subtle dark bottom vignette */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20 pointer-events-none" />
        </div>
      </section>

      {/* SECTION 2: Maquillage (1 unique stunning cosmetics image) */}
      <section id="makeup-section" className="max-w-4xl mx-auto px-4 py-16">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-serif font-black text-white">
            Ont fait des maquillage artistique et simple
          </h2>
          <div className="w-12 h-[2px] bg-[#fab18a] mx-auto mt-4 rounded-full" />
        </div>

        {/* Single makeup spotlight image */}
        <div className="relative rounded-3xl overflow-hidden shadow-2xl glass-panel border border-white/15 flex flex-col md:flex-row">
          
          <div className="w-full md:w-1/2 h-[340px] md:h-[460px] relative">
            <img
              src={MAKEUP_IMAGE.url}
              alt={MAKEUP_IMAGE.title}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            {/* Corner visual accent */}
            <div className="absolute top-4 left-4 inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-full bg-black/55 backdrop-blur-md border border-white/10 text-xs text-[#fab18a] font-medium uppercase tracking-wider">
              <Heart className="w-3.5 h-3.5 fill-current text-[#fab18a]" />
              <span>Studio Maquillage</span>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          </div>

          <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-between bg-black/20 backdrop-blur-md text-white">
            <div className="space-y-4">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#fab18a]">
                Focus Beauté
              </span>
              <h3 className="text-2xl font-serif font-bold text-white">
                {MAKEUP_IMAGE.title}
              </h3>
              <p className="text-sm text-gray-200 leading-relaxed font-sans font-medium bg-white/5 p-4 rounded-xl border border-white/5 shadow-inner">
                Sublimez votre image dès aujourd'hui ! Que ce soit pour un maquillage éblouissant ou un shooting photo d'exception, donnez vie à vos projets d'un simple appel !
              </p>
              
              <ul className="space-y-2 text-xs text-gray-300 pt-2">
                <li className="flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 bg-[#fab18a] rounded-full" />
                  <span>Maquillage de mariée haut de gamme</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 bg-[#fab18a] rounded-full" />
                  <span>Mise en beauté Shooting photo & Clips</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 bg-[#fab18a] rounded-full" />
                  <span>Fards et pigments cuivrés & bordeaux luxueux</span>
                </li>
              </ul>
            </div>

          </div>

        </div>
      </section>

      {/* Lower sticky-like Call Button Container */}
      <footer className="max-w-md mx-auto p-4 mb-8 text-center">
        <p className="text-xs text-gray-300 mb-4 font-light uppercase tracking-[0.2em]">
          Maison Stylisme & Photoshoot
        </p>
        <button
          id="direct-call-action-btn"
          onClick={handlePhoneCall}
          className="w-full py-4 px-8 bg-white hover:bg-gray-100 text-black text-base font-bold rounded-full flex items-center justify-center space-x-3 transition-transform hover:scale-[1.03] active:scale-95 shadow-lg relative overflow-hidden group cursor-pointer"
        >
          <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
          <Phone className="w-5 h-5 text-black animate-bounce" />
          <span>Appel scoot</span>
        </button>
      </footer>
    </div>
  );
}
