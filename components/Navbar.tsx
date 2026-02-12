
import React, { useState, useEffect } from 'react';

interface NavbarProps {
  onNavigate: (page: 'home' | 'challenge') => void;
  current: 'home' | 'challenge';
}

export const Navbar: React.FC<NavbarProps> = ({ onNavigate, current }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const sentinel = document.getElementById('nav-sentinel');
    if (!sentinel) return;

    const observer = new IntersectionObserver((entries) => {
      // If the sentinel is NOT intersecting, it means we've scrolled past it
      setIsScrolled(!entries[0].isIntersecting);
    }, { threshold: [1.0] });

    observer.observe(sentinel);
    return () => observer.disconnect();
  }, []);

  // Lock body scroll when mobile menu is open to prevent background scrolling
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  // Close menu when navigating
  const handleMobileNavigate = (page: 'home' | 'challenge') => {
    onNavigate(page);
    setIsMenuOpen(false);
  };

  // Text color logic for general menu items
  const menuTextColor = 'text-white/80 hover:text-white';

  // Brand/Logo text color logic
  const brandTextColor = 'text-white';

  return (
    <div className="fixed top-0 left-0 w-full z-50">
      {/* Sentinel to detect scroll without scroll events */}
      <div id="nav-sentinel" className="absolute top-0 h-4 w-full pointer-events-none" style={{ top: '20px' }} />

      {/* Navbar Background Layer */}
      <div
        className={`absolute inset-0 transition-[background-color,box-shadow] duration-300 ease-in-out ${isScrolled ? 'bg-slate-950/95 backdrop-blur-md shadow-md' : 'bg-transparent'
          }`}
      />

      {/* Navbar Content */}
      <nav className={`relative z-50 container mx-auto px-4 md:px-8 flex justify-between items-center transition-[padding] duration-300 ${isScrolled ? 'py-3' : 'py-5'}`}>
        {/* Logo */}
        <div
          className="flex items-center gap-2 cursor-pointer relative z-50"
          onClick={() => handleMobileNavigate('home')}
        >
          <div className="w-10 h-10 bg-emerald-700 rounded-full flex items-center justify-center text-white font-bold text-xl">
            N
          </div>
          <span className={`font-extrabold text-xl tracking-tight transition-colors ${brandTextColor} ${isMenuOpen ? 'text-slate-900' : ''}`}>
            NOVY GOLF ACADEMY
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-sm font-semibold uppercase tracking-wider">
          <button
            onClick={() => onNavigate('home')}
            className={`transition-colors ${current === 'home' ? 'text-emerald-400 font-bold underline' : menuTextColor} underline-offset-4`}
          >
            Domů
          </button>
          <button
            onClick={() => onNavigate('challenge')}
            className={`transition-colors ${current === 'challenge' ? 'text-emerald-400 font-bold underline' : menuTextColor} underline-offset-4`}
          >
            Challenge 2026
          </button>
        </div>

        {/* Desktop Button & Mobile Toggle */}
        <div className="flex items-center gap-4 relative z-50">
          <button
            onClick={() => onNavigate('challenge')}
            className="bg-emerald-600 hover:bg-emerald-500 text-white px-10 py-2.5 rounded-full text-sm font-bold transition-all shadow-lg hover:shadow-emerald-200 hidden sm:block"
          >
            Vsadit na úspěch
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`p-2 rounded-lg transition-colors md:hidden ${isMenuOpen ? 'text-slate-900' : 'text-white'}`}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12" /><line x1="4" x2="20" y1="6" y2="6" /><line x1="4" x2="20" y1="18" y2="18" /></svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-white md:hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0 pointer-events-none'
          }`}
        style={{ zIndex: 40 }}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8 p-4 overflow-y-auto">
          <button
            onClick={() => handleMobileNavigate('home')}
            className={`text-2xl font-black uppercase tracking-widest ${current === 'home' ? 'text-emerald-600 underline' : 'text-slate-900'} underline-offset-8`}
          >
            Domů
          </button>
          <button
            onClick={() => handleMobileNavigate('challenge')}
            className={`text-2xl font-black uppercase tracking-widest ${current === 'challenge' ? 'text-emerald-600 underline' : 'text-slate-900'} underline-offset-8`}
          >
            Challenge 2026
          </button>

          <div className="w-full max-w-xs h-px bg-slate-100 my-4"></div>

          <button
            onClick={() => handleMobileNavigate('challenge')}
            className="w-full max-w-xs bg-emerald-600 text-white py-5 rounded-2xl font-black text-xl shadow-xl shadow-emerald-200"
          >
            Vsadit na úspěch
          </button>

          <div className="flex gap-6 mt-8">
            <div className="w-12 h-12 bg-slate-50 rounded-full flex items-center justify-center text-slate-400">FB</div>
            <div className="w-12 h-12 bg-slate-50 rounded-full flex items-center justify-center text-slate-400">IG</div>
            <div className="w-12 h-12 bg-slate-50 rounded-full flex items-center justify-center text-slate-400">YT</div>
          </div>
        </div>
      </div>
    </div>
  );
};
