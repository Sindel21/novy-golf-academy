
import React from 'react';

export const ChallengePage: React.FC = () => {
  const scrollToForm = () => {
    const element = document.getElementById('application-form');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-slate-950 text-white selection:bg-emerald-500 selection:text-emerald-950">
      {/* Hero Section */}
      <section className="relative pt-24 pb-12 md:pt-32 md:pb-20 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[800px] bg-emerald-900/20 blur-[120px] rounded-full"></div>

        <div className="container mx-auto px-4 md:px-8 relative z-10 text-center">
          <div className="inline-block bg-emerald-500 text-emerald-950 px-6 py-2 rounded-full font-black text-sm uppercase tracking-widest mb-6 md:mb-8 animate-bounce">
            Limitovaná nabídka pro 7 hráčů
          </div>

          <h1 className="text-4xl md:text-8xl font-black mb-6 md:mb-8 leading-[1.05] tracking-tighter uppercase">
            VSADÍM <span className="text-emerald-400 italic">50 000 KČ</span><br />
            NA VÁŠ GOLFOVÝ<br />
            ÚSPĚCH
          </h1>

          <p className="text-lg md:text-3xl font-bold text-emerald-100/70 mb-8 md:mb-12 max-w-4xl mx-auto">
            Hledám 7 hráčů, kterým v roce 2026 rozpůlím HCP. Pokud to nedokážeme, vyplatím vám bonus.
          </p>

          <div className="max-w-4xl mx-auto aspect-video bg-slate-900 rounded-[2rem] border-4 border-slate-800 shadow-2xl overflow-hidden mb-8 md:mb-12 relative group cursor-pointer">
            <img
              src="https://images.unsplash.com/photo-1593111774240-d529f12cf4bb?auto=format&fit=crop&q=80&w=1200"
              className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
              alt="Marek Nový Video"
              width="1200"
              height="675"
              loading="lazy"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-24 h-24 bg-emerald-500 rounded-full flex items-center justify-center text-emerald-950 pl-2 shadow-2xl group-hover:scale-110 transition-transform">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="currentColor"><path d="m7 4 12 8-12 8V4z" /></svg>
              </div>
            </div>
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-4 text-xs font-bold tracking-widest uppercase">
              <span className="bg-black/50 px-3 py-1 rounded">00:03</span>
              <span className="bg-black/50 px-3 py-1 rounded">02:21</span>
            </div>
          </div>

          <div className="bg-slate-900/50 backdrop-blur-md border border-white/10 p-6 md:p-8 rounded-3xl max-w-xl mx-auto flex flex-col">
            <div className="order-2 md:order-1">
              <h3 className="text-lg font-bold mb-2 md:mb-4 uppercase tracking-widest text-emerald-400">POČET ZBÝVAJÍCÍCH MÍST:</h3>
              <div className="text-5xl md:text-6xl font-black text-white mb-0 md:mb-6">5 <span className="text-slate-600 text-3xl">/ 7</span></div>
            </div>
            <button
              onClick={scrollToForm}
              className="order-1 md:order-2 w-full bg-emerald-500 hover:bg-emerald-400 text-emerald-950 px-8 py-4 md:py-5 rounded-2xl font-black text-lg md:text-xl leading-tight transition-all shadow-xl shadow-emerald-500/20 mb-6 md:mb-0"
            >
              CHCI V ROCE 2026<br />POLOVIČNÍ HCP
            </button>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-24 bg-white text-slate-900">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl">
          <div className="prose prose-xl prose-slate mx-auto">
            <h2 className="text-4xl font-black mb-8 text-center uppercase tracking-tight">NOVÝ GOLF CHALLENGE</h2>
            <p className="text-xl leading-relaxed mb-6 font-medium">
              Nejde o kurz ani tréninkový plán ke stažení. Je to osobní, celosezónní spolupráce, kde pracujeme systematicky, aby se váš golf reálně posunul na hřišti, ne jen na drivingu.
            </p>
            <p className="text-xl leading-relaxed mb-12">
              Spolupráce je otevřená maximálně 7 hráčům, protože tento typ práce vyžaduje čas, pozornost a odpovědnost.
            </p>
          </div>

          <div className="bg-slate-50 border-2 border-slate-200 p-12 rounded-[3rem] shadow-sm italic relative">
            <div className="text-6xl text-emerald-200 absolute -top-4 -left-4">"</div>
            <h3 className="text-2xl font-black mb-6">PROČ VÁM CHCI ZAPLATIT ZA VÁŠ ÚSPĚCH?</h3>
            <p className="mb-6 leading-relaxed text-lg">
              „Možná si říkáte, že jsem se zbláznil. Proč bych vám měl po měsících tvrdé práce vracet 50 000 Kč ze své odměny? Odpověď je upřímná: Hledám motivaci, kterou si za peníze nekoupíte.
            </p>
            <div className="space-y-6">
              <div className="flex gap-4">
                <span className="font-black text-emerald-600 text-2xl">1.</span>
                <p className="font-bold">Chci v týmu jen dravce. Ne lidi, co si jdou občas bouchnout. Chci lidi, kteří budou makat, aby mě o těch 50 000 Kč na konci sezóny připravili.</p>
              </div>
              <div className="flex gap-4">
                <span className="font-black text-emerald-600 text-2xl">2.</span>
                <p className="font-bold">Věřím svému systému. Za 22 let v golfu vím, že když dodržíte můj plán, ten výsledek se dostaví. Je to matematická jistota.</p>
              </div>
              <div className="flex gap-4">
                <span className="font-black text-emerald-600 text-2xl">3.</span>
                <p className="font-bold">Moje vizitka je váš HCP. Když uspějete, získáte nejlepší golf svého života. Já získám důkaz, že moje metoda funguje u kohokoliv.</p>
              </div>
            </div>
            <p className="mt-8 font-black text-xl text-emerald-700">
              Můj cíl pro rok 2026 je jednoduchý: Chci být v říjnu tím nejhůře placeným trenérem v Praze, ale nejlepším v celé republice.
            </p>
          </div>
          <div className="mt-16 text-center">
            <button
              onClick={scrollToForm}
              className="bg-emerald-600 hover:bg-emerald-500 text-white px-12 py-5 rounded-2xl font-black text-xl leading-tight transition-all shadow-xl shadow-emerald-600/20"
            >
              CHCI V ROCE 2026<br />POLOVIČNÍ HCP
            </button>
          </div>
        </div>
      </section>

      {/* The Letter Section */}
      <section className="py-24 bg-slate-100 text-slate-900">
        <div className="container mx-auto px-4 md:px-8 max-w-3xl bg-white p-12 md:p-20 rounded-xl shadow-2xl border border-slate-200 relative">
          <div className="mb-12 border-b-2 border-slate-100 pb-8">
            <h3 className="text-3xl font-black uppercase tracking-tighter mb-4 text-emerald-800">HLEDÁM 7 STATEČNÝCH</h3>
            <p className="text-red-600 font-black uppercase text-sm tracking-widest">
              POKUD TOTO NEMÁTE NEBO NECHCETE SVÉMU GOLFU VĚNOVAT, TENTO PROJEKT NENÍ PRO VÁS AND NEČTĚTE DÁL.
            </p>
          </div>

          <div className="space-y-6 text-lg leading-relaxed font-serif">
            <p>Milí golfoví nadšenci,</p>
            <p>Pokud chcete dosáhnout toho, že vás budou golfoví přátelé i soupeři obdivovat a v klubu vás budou vítat jako šampiona...</p>
            <p>A pokud chcete jednou provždy prolomit stagnaci a snížit svůj handicap tak dramaticky, že se stanete legendou nejelen mezi svými známými… nebo pokud prostě jen chcete mít ze svého golfu radost.</p>
            <p className="font-bold">Pak tohle bude ten nejdůležitější dopis, jaký kdy přečtete.</p>
            <p>Jmenuji se Marek Nový a jsem jedním z nejlepších golfových trenérů v České Republice. Jedna věc mě trápí. Příliš mnoho hráčů vidím, jak jsou zapálení do golfu, ale jejich výkony jsou spíše zdrojem frustrace než radosti.</p>
            <p>Zkouší všechno. Individuální lekce. Tréninkové plány z internetu. Kupují stále novější vybavení. A výsledky? Stále žádné.</p>
            <p>Slyšel jsem už tolikrát, jak se hráč podíval na svůj golfový bag a měl chuť ty hole rozlámat, ROZDUPAT.</p>
            <p>Chápu to, také jsem poznal golfové trápení, to je součást golfu. Přiznám se zažil jsem vše. Od šlajzů, přes trojpaty, sokety a drbky…</p>
            <p className="text-2xl font-black text-emerald-700 uppercase tracking-tight pt-8">
              Sestavil jsem systém, díky kterému během šesti měsíců sníží hráči svůj handicap na polovinu.
            </p>
            <p>Tento systém jsem pojmenoval <strong>Nový Golf Challenge</strong>.</p>
            <p>A teď přichází nejlepší část: Pokud společně dosáhneme cíle a snížíme váš HCP na polovinu, vyplatím vám <strong>50 000 Kč jako Success Bonus.</strong></p>
          </div>
          <div className="mt-12 pt-12 border-t border-slate-100 flex items-center gap-6">
            <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-emerald-500">
              <img
                src="https://images.unsplash.com/photo-1593111774240-d529f12cf4bb?auto=format&fit=crop&q=80&w=300"
                alt="Marek Nový"
                width="80"
                height="80"
                loading="lazy"
              />
            </div>
            <div>
              <p className="font-black text-xl">Marek Nový</p>
              <p className="text-slate-500 italic">Váš trenér v NGC</p>
            </div>
          </div>
          <div className="mt-16 text-center">
            <button
              onClick={scrollToForm}
              className="w-full bg-emerald-600 hover:bg-emerald-500 text-white px-8 py-5 rounded-2xl font-black text-xl leading-tight transition-all shadow-xl shadow-emerald-600/20"
            >
              CHCI V ROCE 2026<br />POLOVIČNÍ HCP
            </button>
          </div>
        </div>
      </section>

      {/* Myths & Mistakes */}
      <section className="py-24 bg-slate-950 text-white">
        <div className="container mx-auto px-4 md:px-8 max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">
              CO NIKDY <span className="text-red-500 italic">NEDĚLAT</span>,<br />
              POKUD SE CHCETE ZLEPŠIT
            </h2>
            <p className="text-xl text-slate-400">Chyby, které vás stojí měsíce tvrdé dřiny a nikdo vám je neřekne.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              "Přestaňte 'držet hlavu dole' - bolí z toho krk a nepomůže to.",
              "NIKDY se nesoustřeďte pouze na délku odpalů.",
              "Odpalování stovek míčků na drivingu je nejhorší způsob tréninku.",
              "Krátká hra se netrénuje z jednoho místa.",
              "Patovací pohyb není rovný a snaha o to vám znechutí hru.",
              "Statistika počtu patů na kolo je bez kontextu k ničemu.",
              "Vše je o hlavě? Bez techniky vám ani hlava Tigera nepomůže."
            ].map((mistake, i) => (
              <div key={i} className="flex gap-5 p-6 bg-slate-900/50 border border-white/5 rounded-2xl hover:border-red-500/30 transition-colors">
                <span className="text-red-500 text-3xl flex-shrink-0">✕</span>
                <p className="text-lg font-medium text-slate-200">{mistake}</p>
              </div>
            ))}
          </div>
          <div className="mt-20 text-center">
            <button
              onClick={scrollToForm}
              className="bg-emerald-500 hover:bg-emerald-400 text-emerald-950 px-12 py-5 rounded-2xl font-black text-xl leading-tight transition-all shadow-xl shadow-emerald-500/20"
            >
              CHCI V ROCE 2026<br />POLOVIČNÍ HCP
            </button>
          </div>
        </div>
      </section>

      {/* The Solution / Tools */}
      <section className="py-24 bg-emerald-900 relative overflow-hidden text-white">
        <div className="absolute top-0 right-0 opacity-10 text-[30rem] -mr-48 -mt-48 leading-none">🏌️‍♂️</div>
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="mb-20">
            <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight uppercase tracking-tighter">
              TADY JE ZLOMEK TOHO,<br />CO NAJDETE V <span className="text-emerald-300 italic">NGC</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {[
              { title: "Sportsbox 3D & Trackman", desc: "Díky špičkovým nástrojům objevíte svou cestu ke zlepšení. Přesně víte, na co se zaměřit." },
              { title: "Profi Strategie tréninku", desc: "Za pomoci SmartCoach softwaru vytvoříme tréninkový plán, který je zábavný a efektivní." },
              { title: "Analýza statistik (až o 10 ran lépe)", desc: "Navrhneme strategii na hřišti, která vám prakticky znemožní zahrát DABLÁČE." },
              { title: "Efektivní zóny tréninku", desc: "Spojení dat ze všech zdrojů pro ten nejefektivnější trénink. Statistika, Sportsbox a Trackman." }
            ].map((tool, i) => (
              <div key={i} className="bg-white/10 backdrop-blur-xl p-10 rounded-[3rem] border border-white/10 hover:bg-white/20 transition-all">
                <h3 className="text-2xl font-black mb-4 uppercase tracking-widest text-emerald-300">{tool.title}</h3>
                <p className="text-lg text-emerald-50/80 leading-relaxed">{tool.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-20 text-center">
            <button
              onClick={scrollToForm}
              className="bg-white text-emerald-900 px-12 py-6 rounded-3xl font-black text-2xl leading-tight hover:scale-105 transition-transform shadow-2xl"
            >
              CHCI V ROCE 2026<br />POLOVIČNÍ HCP
            </button>
          </div>
        </div>
      </section>

      {/* Included Content from NGA */}
      <section className="py-24 bg-white text-slate-900">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black mb-4 uppercase">VŠE, CO POTŘEBUJETE, NA JEDNOM MÍSTĚ</h2>
            <p className="text-xl text-slate-500">Jako člen NGC získáváte automaticky přístup k celému portálu NovyGolfAcademy.cz</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "GOLF ONLINE AMATEUR LEAGUE", "PUTTING SECRETS", "GOLF AKCELERÁTOR",
              "SLICE TERMINÁTOR", "WINTER GOLF CLASSIC", "JÓGA PRO GOLFISTY"
            ].map((item, i) => (
              <div key={i} className="p-6 border border-slate-100 bg-slate-50 rounded-2xl flex items-center gap-4">
                <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-700 font-bold">✓</div>
                <span className="font-bold text-slate-800">{item}</span>
              </div>
            ))}
          </div>
          <div className="mt-16 text-center">
            <button
              onClick={scrollToForm}
              className="bg-emerald-600 hover:bg-emerald-500 text-white px-12 py-5 rounded-2xl font-black text-xl leading-tight transition-all shadow-xl shadow-emerald-600/20"
            >
              CHCI V ROCE 2026<br />POLOVIČNÍ HCP
            </button>
          </div>
        </div>
      </section>

      {/* Detailed Offer Table */}
      <section className="py-24 bg-slate-950 text-white">
        <div className="container mx-auto px-4 md:px-8 max-w-5xl">
          <div className="bg-slate-900 rounded-[2rem] md:rounded-[3rem] p-6 md:p-12 border border-emerald-500/20 shadow-2xl shadow-emerald-500/5">
            <h2 className="text-3xl md:text-5xl font-black mb-12 text-center uppercase italic text-emerald-400">TOTO VŠE JE SOUČÁSTÍ NOVÝ GOLF CHALLENGE</h2>
            <div className="space-y-6 mb-12">
              {[
                "2 hodiny týdně osobní trénink s Markem Novým (Celkem až 56 hodin)",
                "Každý měsíc společná hra nebo doprovod na hřišti",
                "Použití Trackman pro analýzu a data pro trénink",
                "Využití aplikace Sportbox 3D - Členství na 1 rok",
                "Tréninkový plán samostatného tréninku (až 162 hodin)",
                "Sledování statistik v systému Smartcoach (DOŽIVOTNÍ členství)",
                "Bonusový únorový měsíc tréninků pro první přihlášené",
                "Marek Nový na telefonu pro jakýkoliv dotaz",
                "Analýza odehraných kol i mimo tréninkové hodiny",
                "Sázka 50 000 Kč - pokud cíl nesplníme, dostanete je zpět!"
              ].map((feature, i) => (
                <div key={i} className="flex gap-4 items-start py-4 border-b border-white/5">
                  <span className="text-emerald-500 text-2xl">★</span>
                  <p className="text-xl font-bold">{feature}</p>
                </div>
              ))}
            </div>

            <div id="application-form" className="bg-emerald-950/50 p-6 md:p-10 rounded-2xl border border-emerald-500/30 text-center">
              <h3 className="text-xl md:text-2xl font-black mb-6 uppercase">Zadejte prosím mail pro detaily o ceně</h3>
              <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
                <input
                  type="email"
                  placeholder="Váš e-mail (např. email@priklad.com)"
                  className="flex-grow bg-slate-800 border-2 border-slate-700 rounded-xl px-4 py-4 text-white focus:border-emerald-500 outline-none transition-all text-sm md:text-base"
                />
                <button className="bg-emerald-500 hover:bg-emerald-400 text-emerald-950 px-6 py-4 rounded-xl font-black uppercase tracking-widest whitespace-nowrap transition-all text-sm md:text-base">
                  Chci se ucházet
                </button>
              </div>
              <p className="mt-4 text-emerald-200/50 text-xs">Odesláním vyjadřujete zájem o jedno ze 7 míst v NGC 2026.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
