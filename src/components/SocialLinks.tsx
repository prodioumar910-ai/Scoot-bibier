
export default function SocialLinks() {
  const networks = [
    {
      name: 'WhatsApp',
      link: 'https://wa.me/22375434268',
      accent: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20 hover:bg-emerald-600/30 hover:border-emerald-500/40',
      icon: <img src="https://lh3.googleusercontent.com/d/1S2LxSpNum9j-KJ6gDMrY2O--pQZGpl5B" alt="WhatsApp" className="w-7 h-7 md:w-8 md:h-8 object-contain" referrerPolicy="no-referrer" />
    },
    {
      name: 'TikTok',
      link: 'https://www.tiktok.com',
      accent: 'bg-zinc-500/10 text-white border-zinc-500/20 hover:bg-zinc-500/30 hover:border-zinc-500/40',
      icon: <img src="https://lh3.googleusercontent.com/d/1kmu-CUCd4phEMCprAS_DrBTzGIs1wopU" alt="TikTok" className="w-7 h-7 md:w-8 md:h-8 object-contain" referrerPolicy="no-referrer" />
    },
    {
      name: 'Snapchat',
      link: 'https://www.snapchat.com',
      accent: 'bg-yellow-500/10 text-yellow-500 border-yellow-500/20 hover:bg-yellow-500/30 hover:border-yellow-500/40',
      icon: <img src="https://lh3.googleusercontent.com/d/17_cpbmS5rgQbjwm2Ba2Psph7LQxJXmBi" alt="Snapchat" className="w-7 h-7 md:w-8 md:h-8 object-contain" referrerPolicy="no-referrer" />
    }
  ];

  return (
    <section id="social-networks-section" className="w-full py-10 px-4">
      <div className="max-w-4xl mx-auto glass-panel text-white rounded-3xl p-6 md:p-8 text-center relative overflow-hidden shadow-2xl">
        {/* Glow effect */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-80 h-32 bg-[#fab18a]/5 rounded-full blur-3xl pointer-events-none" />

        <div className="relative space-y-1 mb-6">
          <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#fab18a]">
            Rejoignez-nous
          </span>
          <h2 className="text-xl md:text-2xl font-serif font-black tracking-tight text-white">
            Suivez Notre Maison de Mode
          </h2>
        </div>

        {/* 3 Clickable Social Icons on the EXACT SAME HORIZONTAL LINE */}
        <div className="flex items-center justify-center gap-6 pt-2">
          {networks.map((net) => (
            <a
              key={net.name}
              href={net.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`p-3.5 md:p-4 rounded-full border transition-all duration-300 hover:scale-110 active:scale-90 shadow-md cursor-pointer ${net.accent}`}
              title={net.name}
            >
              {net.icon}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
