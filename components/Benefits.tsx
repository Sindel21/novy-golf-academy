
import React from 'react';

const benefitList = [
  {
    title: "Trénink Driveru",
    desc: "Získejte 20+ metrů k odpališti díky technice, ne síle.",
    icon: "🏌️‍♂️",
    color: "bg-emerald-100 text-emerald-700"
  },
  {
    title: "Magie Patování",
    desc: "Zkraťte cestu do jamky a eliminujte 'three-putts'.",
    icon: "⛳",
    color: "bg-blue-100 text-blue-700"
  },
  {
    title: "Krátká Hra",
    desc: "Tajemství 'up and down' z každé pozice kolem greenu.",
    icon: "🎯",
    color: "bg-amber-100 text-amber-700"
  },
  {
    title: "Mentální Odolnost",
    desc: "Jak udržet klidnou hlavu, i když se zrovna nedaří.",
    icon: "🧠",
    color: "bg-purple-100 text-purple-700"
  }
];

export const Benefits: React.FC = () => {
  return (
    <section id="nabidka-zdarma" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6">
            Proč trénovat s <span className="text-emerald-600">NGA?</span>
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            Nabízíme ucelený systém, který se nesoustředí jen na švih, ale na komplexní zlepšení vaší hry od odpaliště až po green.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefitList.map((benefit, idx) => (
            <div key={idx} className="p-8 rounded-3xl border border-slate-100 bg-slate-50 hover:bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-3xl mb-6 shadow-sm ${benefit.color}`}>
                {benefit.icon}
              </div>
              <h3 className="text-xl font-extrabold text-slate-900 mb-3">{benefit.title}</h3>
              <p className="text-slate-600 leading-relaxed">{benefit.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 p-8 md:p-12 rounded-[2.5rem] bg-emerald-900 text-white relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-700/20 rounded-full -translate-y-1/2 translate-x-1/4"></div>
          <div className="relative z-10 max-w-xl">
            <h3 className="text-2xl md:text-3xl font-extrabold mb-4">Zdarma tréninkové materiály</h3>
            <p className="text-emerald-100/80 mb-0">
              Stáhněte si naše úvodní lekce na driver a patování. Krátká videa s tipy, které okamžitě zlepší vaši hru bez nutnosti měnit celý švih.
            </p>
          </div>
          <button 
            onClick={(e) => e.preventDefault()}
            className="relative z-10 whitespace-nowrap bg-emerald-400 hover:bg-emerald-300 text-emerald-950 px-10 py-4 rounded-2xl font-black transition-transform hover:scale-105 shadow-lg"
          >
            CHCI ZDARMA LEKCE 🏌️‍♂️
          </button>
        </div>
      </div>
    </section>
  );
};
