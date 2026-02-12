
import React from 'react';

export const League: React.FC = () => {
  return (
    <section id="liga" className="py-24 bg-white overflow-hidden relative">
      <div className="absolute top-0 right-0 -mr-24 -mt-24 w-96 h-96 bg-emerald-50 rounded-full blur-3xl opacity-50"></div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="bg-slate-900 rounded-[3rem] p-10 md:p-16 flex flex-col lg:flex-row gap-12 items-center">
          <div className="w-full lg:w-1/2">
            <div className="inline-block bg-emerald-500 px-4 py-1 rounded-full text-emerald-950 font-black text-xs uppercase tracking-[0.2em] mb-6">
              CELOSEZÓNNÍ SOUTĚŽ
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
              NGA League <br /><span className="text-emerald-400">Poměřte síly</span>
            </h2>
            <p className="text-xl text-slate-400 mb-8 max-w-lg leading-relaxed">
              Unikátní golfová liga pro členy akademie. Sledujte svůj progres, porovnávejte se s ostatními a hrajte o titul <span className="text-white font-bold">Hráč měsíce</span> a hodnotné ceny.
            </p>

            <div className="space-y-6 mb-10">
              {[
                { title: "Měsíční žebříček", val: "Aktuální výsledky členů v reálném čase." },
                { title: "Hráč měsíce", val: "Odměny za největší zlepšení a aktivitu." },
                { title: "NGA Players Zone", val: "Diskusní fórum a podpora od trenéra." }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center text-xl text-emerald-400">
                    {idx === 0 ? "📈" : idx === 1 ? "🏅" : "💬"}
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg">{item.title}</h4>
                    <p className="text-slate-500">{item.val}</p>
                  </div>
                </div>
              ))}
            </div>

            <button onClick={(e) => e.preventDefault()} className="bg-emerald-500 hover:bg-emerald-400 text-emerald-950 px-10 py-4 rounded-2xl font-black transition-all shadow-xl shadow-emerald-500/10">
              Vstoupit do ligy
            </button>
          </div>

          <div className="w-full lg:w-1/2">
            <div className="bg-slate-800/50 backdrop-blur-md border border-white/10 rounded-3xl p-6 shadow-2xl">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-white font-bold text-xl">Top Hráči Měsíce</h3>
                <span className="text-slate-400 text-sm">Srpen 2024</span>
              </div>
              <div className="space-y-4">
                {[
                  { name: "Jan Svoboda", hc: "12.4", trend: "-1.2", img: "https://picsum.photos/100/100?random=11" },
                  { name: "Lucie Nová", hc: "24.1", trend: "-2.8", img: "https://picsum.photos/100/100?random=12" },
                  { name: "Petr Malý", hc: "8.9", trend: "-0.5", img: "https://picsum.photos/100/100?random=13" },
                  { name: "Martin Kučera", hc: "36.0", trend: "-4.5", img: "https://picsum.photos/100/100?random=14" }
                ].map((p, i) => (
                  <div key={i} className="bg-white/5 hover:bg-white/10 p-4 rounded-2xl flex items-center justify-between transition-colors cursor-default">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full overflow-hidden border border-emerald-500">
                        <img
                          src={p.img}
                          alt={p.name}
                          width="40"
                          height="40"
                          loading="lazy"
                        />
                      </div>
                      <div>
                        <p className="text-white font-bold text-sm">{p.name}</p>
                        <p className="text-slate-500 text-xs">HCP: {p.hc}</p>
                      </div>
                    </div>
                    <div className="text-emerald-400 font-black text-sm">
                      {p.trend} HCP
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
