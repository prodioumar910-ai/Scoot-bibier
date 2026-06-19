import { COLLABORATORS } from '../data';

export default function CollaboratorsTicker() {
  // Triple the collaborators array to make sure there is no gap in the perpetual horizontal loop
  const triplicatedCollaborators = [...COLLABORATORS, ...COLLABORATORS, ...COLLABORATORS];

  return (
    <section id="collaborators-section" className="w-full py-10 px-4 overflow-hidden">
      <div className="max-w-6xl mx-auto mb-6 text-center">
        <h2 className="text-xs uppercase tracking-[0.25em] text-[#fab18a] font-semibold">
          Ils ont travaillé avec nous
        </h2>
        <div className="w-12 h-[2px] bg-[#fab18a]/50 mx-auto mt-2" />
      </div>

      <div className="relative w-full max-w-6xl mx-auto overflow-hidden py-4 marquee-container">
        {/* Subtle background overlay to dim edges for elegant visual style */}
        <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-black/20 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-black/20 to-transparent z-10 pointer-events-none" />

        {/* Scrolling horizontal block from Left to Right */}
        <div className="flex w-full overflow-hidden">
          <div className="animate-scroll-ltr flex items-center space-x-12">
            {triplicatedCollaborators.map((partner, index) => (
              <div
                key={`partner-${partner.id}-${index}`}
                className="relative w-80 h-[440px] bg-black/60 rounded-none overflow-hidden shrink-0 select-none cursor-pointer group transition-transform duration-300 hover:scale-[1.04] active:scale-95 border border-white/25 backdrop-blur-md shadow-[0_8px_32px_0_rgba(255,255,255,0.12)] ring-1 ring-white/10 hover:border-white/40"
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="w-full h-full object-contain"
                  referrerPolicy="no-referrer"
                />
                
                {/* Visual dark overlay matching section 3 */}
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors duration-300" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
