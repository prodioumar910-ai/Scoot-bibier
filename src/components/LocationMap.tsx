import { MapPin, Navigation } from 'lucide-react';

export default function LocationMap() {
  const mapQueryUrl = 'https://www.google.com/maps/place/Yirimadio,+Bamako,+Mali/';
  // Standard embed URL for Yirimadio, Bamako, Mali
  const embedMapUrl = 'https://maps.google.com/maps?q=Yirimadio,%20Bamako,%20Mali&t=&z=14&ie=UTF8&iwloc=&output=embed';

  return (
    <section id="location-section" className="w-full py-10 px-4">
      <div className="max-w-4xl mx-auto glass-panel text-white rounded-3xl p-6 md:p-8 text-center relative overflow-hidden shadow-2xl space-y-6">
        {/* Glow backdrop */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-32 bg-[#fab18a]/5 rounded-full blur-3xl pointer-events-none" />

        <div className="relative space-y-3 flex flex-col items-center justify-center">
          <div className="p-2.5 rounded-full bg-white/5 border border-white/10 text-[#fab18a]">
            <MapPin className="w-5 h-5 text-[#fab18a]" />
          </div>
          
          <h2 className="text-2xl md:text-3xl font-serif font-black tracking-tight text-white mb-1">
            Yirimadjo, Bamako, Mali
          </h2>
        </div>

        {/* Real Live Map Preview */}
        <div className="relative w-full h-[250px] md:h-[350px] rounded-2xl overflow-hidden border border-white/10 shadow-inner group">
          <iframe
            src={embedMapUrl}
            title="Aperçu Google Maps - Yirimadjo"
            className="w-full h-full border-0 filter invert-[90%] hue-rotate-180 contrast-125 opacity-80 group-hover:opacity-100 transition-opacity duration-300"
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        {/* Action Button */}
        <div className="relative pt-2">
          <a
            id="maps-redirect-btn"
            href={mapQueryUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex px-6 py-2.5 bg-white hover:bg-gray-100 text-black font-semibold text-xs rounded-full items-center justify-center space-x-2 transition-transform hover:scale-105 active:scale-95 shadow-lg cursor-pointer"
          >
            <Navigation className="w-3.5 h-3.5 text-black" />
            <span>Cliquer pour localiser</span>
          </a>
        </div>
      </div>
    </section>
  );
}
