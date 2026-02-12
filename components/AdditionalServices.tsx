
import React from 'react';

export const AdditionalServices: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Challenge */}
          <div className="relative group bg-slate-900 rounded-[3rem] p-10 md:p-12 overflow-hidden flex flex-col justify-end min-h-[400px]">
            <img 
              src="https://images.unsplash.com/photo-1593111774240-d529f12cf4bb?auto=format&fit=crop&q=80&w=1200" 
              className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:scale-105 transition-transform duration-700" 
              alt="Challenge" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>
            <div className="relative z-10">
              <div className="inline-block bg-emerald-500 text-emerald-950 px-4 py-1 rounded-lg font-black text-xs uppercase mb-4">INTENZIVNÍ VÝZVA</div>
              <h3 className="text-3xl font-black text-white mb-4">Nový Golf Challenge</h3>
              <p className="text-slate-300 mb-8 max-w-sm">
                Individuální plán s garancí výsledků. Intenzivní práce na handicapu s osobní podporou Marka.
              </p>
              <button onClick={(e) => e.preventDefault()} className="bg-white text-slate-900 px-8 py-3 rounded-xl font-bold hover:bg-emerald-400 transition-colors">
                Chci vědět více
              </button>
            </div>
          </div>

          {/* Individual Lessons */}
          <div className="relative group bg-emerald-100 rounded-[3rem] p-10 md:p-12 overflow-hidden flex flex-col justify-end min-h-[400px]">
            <div className="absolute top-0 right-0 p-12 text-7xl opacity-20 group-hover:rotate-12 transition-transform">⛳</div>
            <div className="relative z-10">
              <div className="inline-block bg-white text-emerald-900 px-4 py-1 rounded-lg font-black text-xs uppercase mb-4">OSOBNÍ PŘÍSTUP</div>
              <h3 className="text-3xl font-black text-emerald-950 mb-4">Osobní lekce 1:1</h3>
              <p className="text-emerald-900/70 mb-8 max-w-sm">
                Chcete trénovat přímo s Markem? Rezervujte si osobní trénink na hřišti nebo v indooru.
              </p>
              <button onClick={(e) => e.preventDefault()} className="bg-emerald-800 text-white px-8 py-3 rounded-xl font-bold hover:bg-emerald-900 transition-colors">
                Domluvit trénink
              </button>
            </div>
          </div>
        </div>

        {/* Merchandise & Trips */}
        <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { title: "Tréninkové pobyty", desc: "Zlepšete se u moře nebo na horách.", icon: "✈️" },
            { title: "Merchandise NGA", desc: "Oblečení a doplňky pro členy.", icon: "👕" },
            { title: "Dárkové poukazy", desc: "Darujte radost z lepšího golfu.", icon: "🎁" }
          ].map((item, idx) => (
            <div key={idx} className="p-8 rounded-[2rem] border border-slate-100 bg-slate-50 flex items-center gap-6 hover:shadow-md transition-shadow">
              <div className="text-4xl">{item.icon}</div>
              <div>
                <h4 className="font-extrabold text-slate-900">{item.title}</h4>
                <p className="text-slate-500 text-sm">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
