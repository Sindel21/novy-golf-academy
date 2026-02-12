
import React from 'react';

interface FooterProps {
  onNavigate: (page: 'home' | 'challenge') => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-slate-950 text-white pt-24 pb-12">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 lg:col-span-2">
            <div className="flex items-center gap-2 mb-8 cursor-pointer" onClick={() => onNavigate('home')}>
              <div className="w-12 h-12 bg-emerald-600 rounded-full flex items-center justify-center text-white font-bold text-2xl">
                N
              </div>
              <span className="font-extrabold text-2xl tracking-tight">
                NOVY GOLF ACADEMY
              </span>
            </div>
            <p className="text-slate-400 max-w-sm mb-8 text-lg leading-relaxed">
              Profesionální golfový trénink pro každého. Naším cílem je, abyste si každé kolo na hřišti užili na maximum.
            </p>
            <div className="flex gap-4">
              {['FB', 'IG', 'YT'].map(social => (
                <a key={social} href="#" onClick={(e) => e.preventDefault()} className="w-10 h-10 bg-white/5 hover:bg-emerald-600 rounded-full flex items-center justify-center font-bold text-xs transition-colors">
                  {social}
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-8 uppercase tracking-widest text-slate-500">Akademie</h4>
            <ul className="space-y-4 font-medium">
              <li><button onClick={() => onNavigate('home')} className="hover:text-emerald-400 transition-colors text-left">Hlavní stránka</button></li>
              <li><button onClick={() => onNavigate('challenge')} className="hover:text-emerald-400 font-bold transition-colors text-left">Nový Golf Challenge 2026</button></li>
              <li><a href="#" onClick={(e) => e.preventDefault()} className="hover:text-emerald-400 transition-colors block">Premium členství</a></li>
              <li><a href="#" onClick={(e) => e.preventDefault()} className="hover:text-emerald-400 transition-colors block">NGA League</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-8 uppercase tracking-widest text-slate-500">Kontakt</h4>
            <ul className="space-y-4 font-medium">
              <li>
                <a href="#" onClick={(e) => e.preventDefault()} className="flex items-center gap-3 hover:text-emerald-400 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/></svg>
                  novygolfacademy@gmail.com
                </a>
              </li>
              <li className="text-slate-400">
                PGA Professional: Marek Nový
              </li>
              <li className="text-slate-400">
                Po - Pá: 9:00 - 18:00
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-slate-500 text-sm">
          <p>© {new Date().getFullYear()} Novy Golf Academy. Všechna práva vyhrazena.</p>
          <div className="flex gap-8">
            <a href="#" onClick={(e) => e.preventDefault()} className="hover:text-white transition-colors">Obchodní podmínky</a>
            <a href="#" onClick={(e) => e.preventDefault()} className="hover:text-white transition-colors">Ochrana údajů</a>
            <a href="#" onClick={(e) => e.preventDefault()} className="hover:text-white transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
