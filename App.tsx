
import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Benefits } from './components/Benefits';
import { About } from './components/About';
import { Programs } from './components/Programs';
import { Pricing } from './components/Pricing';
import { League } from './components/League';
import { AdditionalServices } from './components/AdditionalServices';
import { Footer } from './components/Footer';
import { ChallengePage } from './pages/ChallengePage';

const App: React.FC = () => {
  // Nastavení výchozí stránky na 'home' pro lepší uživatelský zážitek po vstupu na web
  const [currentPage, setCurrentPage] = useState<'home' | 'challenge'>('home');

  // Handle back button and navigation
  useEffect(() => {
    const handleHash = () => {
      if (window.location.hash === '#challenge') {
        setCurrentPage('challenge');
      } else if (window.location.hash === '#home' || window.location.hash === '') {
        setCurrentPage('home');
      }
    };
    window.addEventListener('hashchange', handleHash);
    handleHash();
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const navigateTo = (page: 'home' | 'challenge') => {
    window.location.hash = page === 'challenge' ? 'challenge' : 'home';
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar onNavigate={navigateTo} current={currentPage} />
      <main>
        {currentPage === 'home' ? (
          <>
            <Hero />
            <Benefits />
            <About />
            <Programs />
            <League />
            <Pricing />
            <AdditionalServices />
          </>
        ) : (
          <ChallengePage />
        )}
      </main>
      <Footer onNavigate={navigateTo} />
    </div>
  );
};

export default App;
