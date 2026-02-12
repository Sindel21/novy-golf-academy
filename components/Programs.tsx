
import React from 'react';

const programList = [
  {
    title: "Golf Akcelerátor",
    desc: "Ucelený program pro rychlé základy a správný švih.",
    img: "https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?auto=format&fit=crop&q=80&w=800",
    tag: "Pro začátečníky"
  },
  {
    title: "Putting Secrets",
    desc: "Mistrovství na greenu. Jak číst dráhu a trefovat jamky.",
    img: "https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?auto=format&fit=crop&q=80&w=800",
    tag: "Krátká hra"
  },
  {
    title: "Slice Terminátor",
    desc: "Navždy se zbavte nepříjemného šlajsu a hrajte rovně.",
    img: "https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?auto=format&fit=crop&q=80&w=800",
    tag: "Long Game"
  },
  {
    title: "Short Game Secrets",
    desc: "Čipy a pity, které vám ušetří 5-10 ran na kolo.",
    img: "https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?auto=format&fit=crop&q=80&w=800",
    tag: "Okolí greenu"
  }
];

export const Programs: React.FC = () => {
  return (
    <section id="programy" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
              Specializované <span className="text-emerald-600">tréninky</span>
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Více než 300 instruktážních video lekcí rozdělených do přehledných programů podle částí hry.
            </p>
          </div>
          <a href="#" onClick={(e) => e.preventDefault()} className="text-emerald-700 font-bold hover:underline flex items-center gap-2 mb-2 transition-all">
            Zobrazit všechny programy
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {programList.map((prog, i) => (
            <div key={i} className="group bg-white rounded-[2rem] overflow-hidden border border-slate-100 hover:shadow-2xl transition-all duration-500 flex flex-col h-full">
              <div className="relative h-64 overflow-hidden">
                <img
                  src={prog.img.replace('q=80', 'q=60').replace('w=600', 'w=450')}
                  alt={prog.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  width="400"
                  height="256"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 backdrop-blur-sm px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest text-emerald-800 shadow-sm border border-emerald-50">
                    {prog.tag}
                  </span>
                </div>
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-black text-slate-900 mb-3 group-hover:text-emerald-600 transition-colors">{prog.title}</h3>
                <p className="text-slate-600 mb-8 line-clamp-2 text-sm leading-relaxed">{prog.desc}</p>
                <div className="mt-auto">
                  <button onClick={(e) => e.preventDefault()} className="w-full py-3.5 bg-slate-50 hover:bg-emerald-600 hover:text-white rounded-xl font-bold transition-all text-slate-900 text-sm">
                    Dozvědět se více
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
