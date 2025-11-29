
import React, { useState, useEffect } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { PageRoute } from '../types';
import Logo from './Logo';

interface NavbarProps {
  currentPage: PageRoute;
  onNavigate: (page: PageRoute) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', value: PageRoute.HOME },
    { label: 'About Us', value: PageRoute.ABOUT },
    { label: 'Services', value: PageRoute.SERVICES },
    { label: 'AI Strategy', value: PageRoute.AI_STRATEGY },
    { label: 'Contact', value: PageRoute.CONTACT },
    { label: 'Digital Card', value: PageRoute.BUSINESS_CARD },
  ];

  const handleNavClick = (page: PageRoute) => {
    onNavigate(page);
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 print:hidden ${
        scrolled ? 'bg-brand-dark/95 backdrop-blur-md shadow-lg border-b border-white/10' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div 
            className="flex-shrink-0 flex items-center cursor-pointer group"
            onClick={() => handleNavClick(PageRoute.HOME)}
          >
            <Logo className="h-10 w-auto group-hover:scale-105 transition-transform duration-300" />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <button
                  key={link.value}
                  onClick={() => handleNavClick(link.value)}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                    currentPage === link.value
                      ? 'text-brand-primary bg-white/5'
                      : 'text-gray-300 hover:text-brand-primary hover:bg-white/5'
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
             <button 
                onClick={() => handleNavClick(PageRoute.AI_STRATEGY)}
                className="bg-brand-primary hover:bg-brand-secondary text-white px-6 py-2 rounded-full font-bold text-sm transition-all transform hover:scale-105 flex items-center"
             >
                <Globe className="w-4 h-4 mr-2" />
                Start Project
             </button>
          </div>

          {/* Mobile menu button */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-white/10 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-brand-dark/95 backdrop-blur-xl border-b border-white/10">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <button
                key={link.value}
                onClick={() => handleNavClick(link.value)}
                className={`block w-full text-left px-3 py-3 rounded-md text-base font-medium ${
                  currentPage === link.value
                    ? 'text-brand-primary bg-white/10'
                    : 'text-gray-300 hover:text-white hover:bg-white/5'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
