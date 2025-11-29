
import React from 'react';
import { Megaphone, BarChart3, Users, Search, Share2, Target, Smartphone, Globe, ArrowRight } from 'lucide-react';
import { PageRoute } from '../types';

interface ServicesProps {
  onNavigate: (page: PageRoute) => void;
}

const Services: React.FC<ServicesProps> = ({ onNavigate }) => {
  return (
    <div className="pt-20 min-h-screen bg-brand-dark">
      {/* Header */}
      <div className="bg-stone-900 py-20 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">Our Expertise</h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            We don't just follow trends; we set them. Our three pillars of service are designed to dominate the East African landscape through precision, data, and culture.
          </p>
        </div>
      </div>

      {/* Service 1: Digital Marketing */}
      <section className="py-20 border-b border-white/5 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-primary/5 rounded-l-full blur-3xl -z-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="inline-flex items-center justify-center p-3 bg-brand-primary/10 rounded-xl mb-6">
                <Megaphone className="w-8 h-8 text-brand-primary" />
              </div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
                Digital Marketing &<br />
                <span className="text-brand-primary">Brand Visibility</span>
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                The African digital landscape is mobile-first and social-driven. We craft campaigns that live where your audience lives—on WhatsApp, TikTok, Instagram, and Twitter. Our approach blends viral creativity with performance targeting.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <ServiceFeature 
                  icon={<Search className="w-5 h-5" />}
                  title="Pan-African SEO"
                  desc="Optimizing for local search intents and dialects (Swahili, Luganda, Kinyarwanda)."
                />
                <ServiceFeature 
                  icon={<Share2 className="w-5 h-5" />}
                  title="Social Media Management"
                  desc="Community management that engages in the local lingo and cultural context."
                />
                <ServiceFeature 
                  icon={<Target className="w-5 h-5" />}
                  title="Performance Ads"
                  desc="High-ROI PPC campaigns across Google, Meta, and LinkedIn."
                />
                <ServiceFeature 
                  icon={<Smartphone className="w-5 h-5" />}
                  title="Mobile-First Content"
                  desc="Vertical video and lightweight assets optimized for data-conscious users."
                />
              </div>
            </div>
            <div className="order-1 lg:order-2 flex justify-center">
               <div className="relative w-full max-w-md aspect-square bg-gradient-to-br from-stone-800 to-black rounded-2xl border border-white/10 p-8 flex items-center justify-center shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500">
                  <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
                  <Megaphone className="w-32 h-32 text-brand-primary opacity-20 absolute" />
                  <div className="relative z-10 text-center">
                    <h3 className="text-5xl font-bold text-white mb-2">300%</h3>
                    <p className="text-gray-400 uppercase tracking-widest text-sm">Average ROI</p>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service 2: Market Intelligence */}
      <section className="py-20 bg-stone-900 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="flex justify-center">
               <div className="relative w-full max-w-md aspect-square bg-gradient-to-bl from-brand-secondary/20 to-black rounded-full border border-white/10 p-8 flex items-center justify-center shadow-2xl -rotate-3 hover:rotate-0 transition-transform duration-500">
                  <BarChart3 className="w-32 h-32 text-brand-uganda-yellow opacity-20 absolute" />
                  <div className="relative z-10 text-center">
                    <h3 className="text-5xl font-bold text-white mb-2">40+</h3>
                    <p className="text-gray-400 uppercase tracking-widest text-sm">Data Points Analyzed</p>
                  </div>
               </div>
            </div>
            <div>
              <div className="inline-flex items-center justify-center p-3 bg-brand-uganda-yellow/10 rounded-xl mb-6">
                <BarChart3 className="w-8 h-8 text-brand-uganda-yellow" />
              </div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
                Market Intelligence &<br />
                <span className="text-brand-uganda-yellow">Consumer Insights</span>
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                Data without context is just noise. We provide deep-dive analytics into East African consumer behavior, helping you understand not just *what* they buy, but *why* they buy it.
              </p>
              
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-brand-uganda-yellow/20 flex items-center justify-center mt-1 mr-4">
                    <div className="w-2 h-2 bg-brand-uganda-yellow rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="text-white font-bold">Competitor Benchmarking</h4>
                    <p className="text-gray-500 text-sm">Detailed reports on your competition's digital footprint in Uganda, Kenya, and Tanzania.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-brand-uganda-yellow/20 flex items-center justify-center mt-1 mr-4">
                    <div className="w-2 h-2 bg-brand-uganda-yellow rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="text-white font-bold">Sentiment Analysis</h4>
                    <p className="text-gray-500 text-sm">AI-powered listening tools to gauge brand perception across social channels.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-brand-uganda-yellow/20 flex items-center justify-center mt-1 mr-4">
                    <div className="w-2 h-2 bg-brand-uganda-yellow rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="text-white font-bold">Trend Forecasting</h4>
                    <p className="text-gray-500 text-sm">Predictive modeling to help you stay ahead of market shifts.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Service 3: Community Activation */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-1/2 h-full bg-brand-uganda-red/5 rounded-r-full blur-3xl -z-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="inline-flex items-center justify-center p-3 bg-brand-uganda-red/10 rounded-xl mb-6">
                <Users className="w-8 h-8 text-brand-uganda-red" />
              </div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
                Community Activation &<br />
                <span className="text-brand-uganda-red">Experiential Events</span>
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                The heartbeat of African commerce is on the street. We bridge the digital and physical worlds with grassroots campaigns that build genuine trust and community loyalty.
              </p>
              
              <div className="grid grid-cols-1 gap-6">
                <div className="bg-white/5 p-6 rounded-xl border border-white/5 hover:bg-white/10 transition-colors">
                  <h4 className="text-xl font-bold text-white mb-2">Influencer Partnerships</h4>
                  <p className="text-gray-400 text-sm">Connecting you with micro-influencers who hold real sway in local communities, not just celebrities with inflated follower counts.</p>
                </div>
                <div className="bg-white/5 p-6 rounded-xl border border-white/5 hover:bg-white/10 transition-colors">
                  <h4 className="text-xl font-bold text-white mb-2">Brand Activations</h4>
                  <p className="text-gray-400 text-sm">Pop-up events, market storms, and campus tours designed to get your product into hands and hearts.</p>
                </div>
                <div className="bg-white/5 p-6 rounded-xl border border-white/5 hover:bg-white/10 transition-colors">
                  <h4 className="text-xl font-bold text-white mb-2">CSR & Impact Stories</h4>
                  <p className="text-gray-400 text-sm">Helping you tell stories that matter, aligning your brand with social causes that resonate locally.</p>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2 flex justify-center">
               <div className="relative w-full max-w-md aspect-square bg-gradient-to-tr from-brand-uganda-red/20 to-black rounded-3xl border border-white/10 p-8 flex items-center justify-center shadow-2xl rotate-6 hover:rotate-0 transition-transform duration-500">
                  <Globe className="w-32 h-32 text-brand-uganda-red opacity-20 absolute" />
                  <div className="relative z-10 text-center">
                    <h3 className="text-5xl font-bold text-white mb-2">6</h3>
                    <p className="text-gray-400 uppercase tracking-widest text-sm">Countries Active</p>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-brand-primary to-brand-secondary text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-8">Ready to dominate the market?</h2>
          <button 
            onClick={() => onNavigate(PageRoute.CONTACT)}
            className="bg-white text-brand-primary hover:bg-gray-100 px-10 py-4 rounded-full font-bold text-lg transition-all shadow-xl hover:scale-105 flex items-center mx-auto"
          >
            Start Your Campaign <ArrowRight className="w-5 h-5 ml-2" />
          </button>
        </div>
      </section>
    </div>
  );
};

const ServiceFeature: React.FC<{ icon: React.ReactNode, title: string, desc: string }> = ({ icon, title, desc }) => (
  <div className="flex flex-col">
    <div className="flex items-center mb-2 text-brand-primary font-bold">
      <div className="mr-2 p-1 bg-brand-primary/20 rounded-md">
        {icon}
      </div>
      {title}
    </div>
    <p className="text-gray-500 text-sm leading-snug">{desc}</p>
  </div>
);

export default Services;
