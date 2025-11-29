
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import AiStrategy from './pages/AiStrategy';
import Contact from './pages/Contact';
import BusinessCard from './pages/BusinessCard';
import { PageRoute } from './types';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<PageRoute>(PageRoute.HOME);

  // Simple Hash Routing Logic
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') as PageRoute;
      if (Object.values(PageRoute).includes(hash)) {
        setCurrentPage(hash);
      } else {
        // Default to home if hash is empty or invalid (unless it's just initialized)
        if (!window.location.hash) {
            window.location.hash = PageRoute.HOME;
            setCurrentPage(PageRoute.HOME);
        }
      }
    };

    // Set initial page based on hash
    handleHashChange();

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = (page: PageRoute) => {
    window.location.hash = page;
    window.scrollTo(0, 0);
  };

  const renderPage = () => {
    switch (currentPage) {
      case PageRoute.HOME:
        return <Home onNavigate={navigateTo} />;
      case PageRoute.ABOUT:
        return <About />;
      case PageRoute.SERVICES:
        return <Services onNavigate={navigateTo} />;
      case PageRoute.AI_STRATEGY:
        return <AiStrategy />;
      case PageRoute.CONTACT:
        return <Contact />;
      case PageRoute.BUSINESS_CARD:
        return <BusinessCard />;
      default:
        return <Home onNavigate={navigateTo} />;
    }
  };

  return (
    <div className="min-h-screen bg-brand-dark text-white font-sans selection:bg-brand-primary selection:text-white">
      <Navbar currentPage={currentPage} onNavigate={navigateTo} />
      
      <main className="flex-grow">
        {renderPage()}
      </main>

      {/* Only show footer on standard pages, the Business Card page is standalone/app-like */}
      {currentPage !== PageRoute.BUSINESS_CARD && <Footer onNavigate={navigateTo} />}
    </div>
  );
};

export default App;
