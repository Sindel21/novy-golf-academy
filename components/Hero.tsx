
import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?auto=format&fit=crop&q=60&w=600"
          srcSet="https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?auto=format&fit=crop&q=60&w=600 600w, https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?auto=format&fit=crop&q=60&w=1000 1000w"
          sizes="100vw"
          alt="Golf background"
          className="w-full h-full object-cover"
          width="600"
          height="400"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-950/90 via-emerald-900/60 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-emerald-400/20 backdrop-blur-sm px-4 py-2 rounded-full border border-emerald-400/30 text-emerald-300 font-semibold text-sm mb-6 animate-fade-in">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            Online golfová platforma pro každého
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-[1.1] mb-6 drop-shadow-sm">
            Pomáhám golfistům mít <span className="text-emerald-400">RADOST</span> ze hry
          </h1>

          <p className="text-lg md:text-xl text-emerald-50/90 mb-10 max-w-xl leading-relaxed">
            Zlepšete svůj handicap bez radikálních změn ve švihu. Připojte se k akademii Marka Nového a začněte trefovat lépe už dnes.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#" onClick={(e) => e.preventDefault()} className="bg-emerald-500 hover:bg-emerald-400 text-emerald-950 px-10 py-4 rounded-xl font-extrabold text-lg transition-all shadow-xl shadow-emerald-900/40 flex items-center justify-center gap-2">
              Vyzkoušet trénink zdarma
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
            </a>
            <a href="#" onClick={(e) => e.preventDefault()} className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 px-10 py-4 rounded-xl font-bold text-lg transition-all flex items-center justify-center">
              Prohlédnout programy
            </a>
          </div>

          <div className="mt-12 flex items-center gap-8">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map(i => (
                <img
                  key={i}
                  src={`https://i.pravatar.cc/100?u=${i}`}
                  className="w-10 h-10 rounded-full border-2 border-emerald-900"
                  alt="Student Avatar"
                  width="40"
                  height="40"
                  loading="lazy"
                />
              ))}
              <div className="w-10 h-10 rounded-full border-2 border-emerald-900 bg-emerald-600 flex items-center justify-center text-[10px] font-bold text-white">+2k</div>
            </div>
            <div className="text-emerald-100 text-sm font-medium">
              Už <span className="text-white font-bold">2,500+ hráčů</span> zlepšuje svou hru s námi
            </div>
          </div>
        </div>
      </div>

      {/* Marquee Section */}
      <div className="absolute bottom-0 w-full bg-emerald-900/80 backdrop-blur-sm py-4 border-t border-white/10 overflow-hidden hidden md:block">
        <div className="marquee-container">
          <div className="marquee-content flex gap-12 items-center">
            {[1, 2, 3].map(i => (
              <React.Fragment key={i}>
                <span className="text-white/60 font-bold tracking-widest text-sm flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></span> GOLF AKCELERÁTOR
                </span>
                <span className="text-white/60 font-bold tracking-widest text-sm flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></span> PUTTING SECRETS
                </span>
                <span className="text-white/60 font-bold tracking-widest text-sm flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></span> SLICE TERMINÁTOR
                </span>
                <span className="text-white/60 font-bold tracking-widest text-sm flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></span> SHORT GAME SECRETS
                </span>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
