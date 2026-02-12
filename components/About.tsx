
import React from 'react';

export const About: React.FC = () => {
  return (
    <section id="o-mne" className="py-24 bg-slate-900 overflow-hidden relative">
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="w-full lg:w-1/2 relative">
            <div className="absolute -inset-4 bg-emerald-500/10 blur-2xl rounded-full"></div>
            <div className="relative rounded-[2rem] overflow-hidden border-4 border-slate-800 shadow-2xl aspect-[4/5]">
              <img 
                src="https://images.unsplash.com/photo-1593111774240-d529f12cf4bb?auto=format&fit=crop&q=80&w=1200" 
                alt="Marek Nový" 
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-slate-950/90 to-transparent">
                <p className="text-emerald-400 font-bold text-sm tracking-widest uppercase mb-1">Hlavní Trenér & Zakladatel</p>
                <h3 className="text-3xl font-black text-white">Marek Nový</h3>
              </div>
            </div>
            {/* Stats */}
            <div className="absolute -bottom-6 -right-6 md:right-10 bg-white p-6 rounded-3xl shadow-2xl border border-slate-100 hidden sm:block">
              <div className="flex items-center gap-4">
                <div className="bg-emerald-100 p-3 rounded-xl">
                  🏆
                </div>
                <div>
                  <p className="text-slate-500 text-xs font-bold uppercase tracking-wider">Reference</p>
                  <p className="text-slate-900 font-black text-lg">PGA Professional</p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2">
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-8 leading-tight">
              Kdo je <span className="text-emerald-400">Marek Nový?</span>
            </h2>
            <div className="space-y-6 text-slate-300 text-lg leading-relaxed">
              <p>
                Jsem profesionální golfista a certifikovaný trenér PGA s dlouholetou zkušeností. Moje mise je jednoduchá: pomáhat hráčům všech úrovní dosahovat lepších výsledků a hlavně mít z golfu radost.
              </p>
              <p>
                Věřím, že každý švih je unikátní. Moje metoda tréninku se nesnaží o "kopírování dokonalosti", ale o hledání efektivity ve vašich přirozených pohybech.
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                {[
                  "PGA Professional",
                  "Vítěz turnajů Pro-Am",
                  "10+ let zkušeností",
                  "Specialista na 3D analýzu",
                  "Zakladatel NGA",
                  "Certifikovaný Smartcoach"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 bg-white/5 p-4 rounded-xl border border-white/10 hover:bg-white/10 transition-colors">
                    <span className="text-emerald-400">✓</span>
                    <span className="text-white font-semibold text-base">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="mt-12 flex items-center gap-6">
              <div>
                <img src="https://picsum.photos/100/100?random=50" className="w-14 h-14 rounded-full border-2 border-emerald-500" alt="Client" />
              </div>
              <div>
                <p className="text-white italic">"Díky Markovi jsem srazil handicap o 5 bodů za jedinou sezónu bez radikální změny techniky."</p>
                <p className="text-emerald-400 font-bold mt-1">— Petr K., člen NGA Premium</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
