import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, MapPin, Mail, Phone } from 'lucide-react';
import { PageRoute } from '../types';
import Logo from './Logo';

interface FooterProps {
    onNavigate: (page: PageRoute) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-black text-white pt-16 pb-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <div className="mb-6">
              <Logo className="h-12 w-auto" />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Elevating East African brands through data-driven strategies and culturally resonant storytelling. Based in Kampala, serving the region.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-brand-primary transition-colors" aria-label="Facebook"><Facebook size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-brand-primary transition-colors" aria-label="Twitter"><Twitter size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-brand-primary transition-colors" aria-label="Instagram"><Instagram size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-brand-primary transition-colors" aria-label="LinkedIn"><Linkedin size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-brand-uganda-yellow">Explore</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><button onClick={() => onNavigate(PageRoute.ABOUT)} className="hover:text-white transition-colors">Our Story</button></li>
              <li><button onClick={() => onNavigate(PageRoute.AI_STRATEGY)} className="hover:text-white transition-colors">AI Services</button></li>
              <li><button onClick={() => onNavigate(PageRoute.CONTACT)} className="hover:text-white transition-colors">Careers</button></li>
              <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-brand-uganda-yellow">Services</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>Digital Marketing</li>
              <li>Brand Identity</li>
              <li>Pan-African SEO</li>
              <li>Market Research</li>
              <li>Influencer Management</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-brand-uganda-yellow">Contact</h3>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 text-brand-primary flex-shrink-0" />
                <span>Nakasero Hill, Kampala,<br/>Uganda</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-brand-primary flex-shrink-0" />
                <span>+256 700 123 456</span>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-3 text-brand-primary flex-shrink-0" />
                <span>uuzaji.ug@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Uuzaji Marketing Agency. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <button onClick={() => onNavigate(PageRoute.PRIVACY_POLICY)} className="hover:text-white transition-colors">Privacy Policy</button>
            <button onClick={() => onNavigate(PageRoute.TERMS_OF_SERVICE)} className="hover:text-white transition-colors">Terms of Service</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
