
import React from 'react';

export const Pricing: React.FC = () => {
  return (
    <section id="clenstvi" className="py-24 bg-slate-50 relative">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6">
            Vyberte si své <span className="text-emerald-600">členství</span>
          </h2>
          <p className="text-lg text-slate-600">
            Získejte neomezený přístup k tréninkovým programům a staňte se součástí největší české online golfové komunity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 max-w-5xl mx-auto gap-8">
          {/* Monthly Plan */}
          <div className="bg-white p-10 rounded-[2.5rem] border border-slate-200 shadow-sm flex flex-col hover:shadow-xl transition-all">
            <div className="mb-8">
              <h3 className="text-2xl font-black text-slate-900 mb-2">Měsíční PREMIUM</h3>
              <p className="text-slate-500">Ideální pro vyzkoušení</p>
            </div>
            <div className="mb-10 flex items-baseline gap-1">
              <span className="text-5xl font-black text-emerald-600">340</span>
              <span className="text-xl font-bold text-slate-400">Kč / měsíc</span>
            </div>
            <div className="space-y-4 mb-10 flex-grow">
              {[
                "300+ instruktážních videí",
                "Všechny tréninkové programy",
                "Přístup do NGA Players Zone",
                "Měsíční NGA League",
                "Přístup do Smartcoach aplikace"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <span className="text-emerald-500 font-bold">✓</span>
                  <span className="text-slate-700 font-medium">{item}</span>
                </div>
              ))}
            </div>
            <button onClick={(e) => e.preventDefault()} className="w-full py-4 bg-slate-900 text-white font-bold rounded-2xl hover:bg-slate-800 transition-colors">
              Chci PREMIUM členství
            </button>
          </div>

          {/* Annual Plan */}
          <div className="bg-emerald-900 p-10 rounded-[2.5rem] shadow-2xl relative flex flex-col transform md:scale-105">
            <div className="absolute top-6 right-6 bg-emerald-400 text-emerald-950 px-4 py-1.5 rounded-full font-black text-xs uppercase tracking-widest">
              UŠETŘETE 14%
            </div>
            <div className="mb-8">
              <h3 className="text-2xl font-black text-white mb-2">Roční PREMIUM</h3>
              <p className="text-emerald-100/60">Pro maximální progres</p>
            </div>
            <div className="mb-10 flex items-baseline gap-1">
              <span className="text-5xl font-black text-emerald-400">292</span>
              <span className="text-xl font-bold text-emerald-200/50">Kč / měsíc</span>
            </div>
            <div className="space-y-4 mb-10 flex-grow">
              {[
                "Vše z měsíčního členství",
                "6x 3D analýza švihu zdarma",
                "Slevy na osobní lekce 1:1",
                "Přednostní registrace na pobyty",
                "VIP dárkové poukazy"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <span className="text-emerald-400 font-bold">✓</span>
                  <span className="text-emerald-50/90 font-medium">{item}</span>
                </div>
              ))}
            </div>
            <button onClick={(e) => e.preventDefault()} className="w-full py-4 bg-emerald-400 text-emerald-950 font-black rounded-2xl hover:bg-emerald-300 transition-colors shadow-lg shadow-emerald-950/20">
              Chci ROČNÍ členství 🔥
            </button>
            <p className="text-center text-emerald-200/40 text-xs mt-4">Platba 3 500 Kč jednorázově za rok</p>
          </div>
        </div>
      </div>
    </section>
  );
};
