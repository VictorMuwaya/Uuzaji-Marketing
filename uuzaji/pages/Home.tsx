
import React, { useEffect, useState } from 'react';
import { ArrowRight, BarChart3, Megaphone, Users, Globe2, ChevronDown } from 'lucide-react';
import { PageRoute } from '../types';
import { Images } from '../assets/images';

interface HomeProps {
  onNavigate: (page: PageRoute) => void;
}

const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/80 to-transparent z-10"></div>
          <div className="absolute inset-0 bg-cover bg-center opacity-40" style={{ backgroundImage: `url('${Images.hero.bg}')` }}></div>
        </div>

        {/* Content */}
        <div className={`relative z-20 text-center px-4 max-w-5xl mx-auto transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="inline-block mb-4 px-4 py-1 rounded-full border border-brand-primary/50 bg-brand-primary/10 backdrop-blur-sm">
            <span className="text-brand-primary font-semibold tracking-wider text-sm uppercase">East Africa's Finest</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6 leading-tight">
            We Speak the Language of <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-uganda-yellow via-brand-primary to-brand-uganda-red">
              African Growth
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto font-light">
            Uuzaji bridges the gap between global brands and local hearts. We craft data-driven campaigns deeply rooted in the culture of the Great Lakes region.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button 
              onClick={() => onNavigate(PageRoute.CONTACT)}
              className="px-8 py-4 bg-brand-primary hover:bg-brand-secondary text-white rounded-full font-bold text-lg transition-all transform hover:scale-105 shadow-lg shadow-brand-primary/25 w-full sm:w-auto"
            >
              Get Started
            </button>
            <button 
              onClick={() => onNavigate(PageRoute.AI_STRATEGY)}
              className="px-8 py-4 bg-transparent border border-white/20 hover:bg-white/10 text-white rounded-full font-bold text-lg transition-all backdrop-blur-sm flex items-center justify-center gap-2 w-full sm:w-auto"
            >
              <Globe2 className="w-5 h-5" />
              Try AI Strategy
            </button>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-white/50">
          <ChevronDown size={32} />
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-brand-dark py-12 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { label: 'Active Campaigns', value: '120+' },
              { label: 'Countries Served', value: '6' },
              { label: 'Client Growth', value: '300%' },
              { label: 'Team Members', value: '45' },
            ].map((stat, idx) => (
              <div key={idx} className="p-4">
                <div className="text-4xl md:text-5xl font-display font-bold text-white mb-2">{stat.value}</div>
                <div className="text-brand-primary text-sm uppercase tracking-widest">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 bg-stone-900 relative">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-brand-primary/5 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">Our Expertise</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-brand-uganda-yellow to-brand-uganda-red mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ServiceCard 
              icon={<Megaphone className="w-8 h-8 text-white" />}
              title="Digital Marketing"
              description="Targeted social media and search campaigns optimized for the East African digital landscape."
              onClick={() => onNavigate(PageRoute.SERVICES)}
            />
            <ServiceCard 
              icon={<BarChart3 className="w-8 h-8 text-white" />}
              title="Market Intelligence"
              description="Deep dive analytics into consumer behavior across Uganda, Kenya, Tanzania and Rwanda."
              onClick={() => onNavigate(PageRoute.SERVICES)}
            />
            <ServiceCard 
              icon={<Users className="w-8 h-8 text-white" />}
              title="Community Activation"
              description="Grassroots campaigns and experiential marketing that connects directly with local communities."
              onClick={() => onNavigate(PageRoute.SERVICES)}
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-brand-primary to-brand-secondary relative overflow-hidden">
        {/* Decorative Patterns */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10" style={{ backgroundImage: `url('${Images.hero.overlay}')` }}></div>
        
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">Ready to scale your brand across the Savannah?</h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Let's build a strategy that resonates with the heartbeat of East Africa.
          </p>
          <button 
            onClick={() => onNavigate(PageRoute.CONTACT)}
            className="bg-white text-brand-primary hover:bg-gray-100 px-8 py-4 rounded-full font-bold text-lg transition-colors shadow-xl"
          >
            Schedule a Consultation
          </button>
        </div>
      </section>
    </div>
  );
};

const ServiceCard: React.FC<{ icon: React.ReactNode, title: string, description: string, onClick: () => void }> = ({ icon, title, description, onClick }) => (
  <div className="bg-white/5 border border-white/5 p-8 rounded-2xl hover:bg-white/10 transition-all duration-300 group hover:-translate-y-2 flex flex-col h-full">
    <div className="w-14 h-14 bg-gradient-to-br from-brand-primary to-brand-secondary rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-white mb-4 group-hover:text-brand-uganda-yellow transition-colors">{title}</h3>
    <p className="text-gray-400 leading-relaxed mb-6 flex-grow">
      {description}
    </p>
    <div 
      className="mt-auto flex items-center text-brand-primary font-semibold text-sm cursor-pointer"
      onClick={onClick}
    >
      <span>Learn more</span>
      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
    </div>
  </div>
);

export default Home;
