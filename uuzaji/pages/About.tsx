
import React from 'react';
import { Images } from '../assets/images';
import { Linkedin, Twitter } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="pt-20 min-h-screen bg-brand-dark">
      {/* Header */}
      <div className="bg-stone-900 py-20 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">The Uuzaji Story</h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Born in Kampala, raised across the region. We are a collective of creatives, strategists, and technologists passionate about African narratives.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-24 h-24 border-t-4 border-l-4 border-brand-uganda-yellow"></div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-4 border-r-4 border-brand-uganda-red"></div>
            <img 
              src={Images.team.meeting}
              alt="Team meeting" 
              className="rounded-lg shadow-2xl relative z-10 w-full"
            />
          </div>
          <div>
            <h2 className="text-3xl font-display font-bold text-white mb-6">More Than Just Marketing</h2>
            <p className="text-gray-300 mb-6 leading-relaxed">
              "Uuzaji" means "Sales" or "Selling" in Swahili. But to us, it means connection. Founded in 2018, we recognized that international brands often missed the mark when communicating with East African audiences. They translated words, but not meanings.
            </p>
            <p className="text-gray-300 mb-6 leading-relaxed">
              We established Uuzaji to bridge that gap. By combining cutting-edge digital tools with deep-rooted cultural insights, we help businesses not just sell, but belong.
            </p>
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="border-l-2 border-brand-primary pl-4">
                <h4 className="text-white font-bold text-lg">Local Insight</h4>
                <p className="text-gray-500 text-sm">Native understanding of nuances across 40+ local dialects.</p>
              </div>
              <div className="border-l-2 border-brand-primary pl-4">
                <h4 className="text-white font-bold text-lg">Global Standard</h4>
                <p className="text-gray-500 text-sm">World-class analytics, reporting, and creative execution.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="bg-stone-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-display font-bold text-white mb-4">Leadership Team</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TeamCard 
              name="Victor Muwaya" 
              role="Head of IT" 
              image={Images.team.victor}
              socials={{
                linkedin: "linkedin.com/in/victor-muwaya-4a204a387",
                twitter: "https://twitter.com"
              }}
            />
            <TeamCard 
              name="Matthew Amanya" 
              role="Managing Director" 
              image={Images.team.matthew}
              socials={{
                linkedin: "linkedin.com/in/amanya-mathew-123245236",
                twitter: "https://twitter.com"
              }}
            />
            <TeamCard 
              name="Matridah Ntongo" 
              role="Head of Corporate" 
              image={Images.team.matridah}
              socials={{
                linkedin: "https://linkedin.com",
                twitter: "https://twitter.com"
              }}
            />
            <TeamCard 
              name="Victor Muwaya" 
              role="Head of IT" 
              image={Images.team.victor}
              socials={{
                linkedin: "linkedin.com/in/victor-muwaya-4a204a387",
                twitter: "https://twitter.com"
              }}
            />
            <TeamCard 
              name="Joel Muhumuza" 
              role="Creative Director" 
              image={Images.team.joel}
              socials={{
                linkedin: "https://linkedin.com",
                twitter: "https://twitter.com"
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

interface TeamCardProps {
    name: string;
    role: string;
    image: string;
    socials?: {
        linkedin?: string;
        twitter?: string;
    };
}

const TeamCard: React.FC<TeamCardProps> = ({ name, role, image, socials }) => (
  <div className="group text-center">
    <div className="relative overflow-hidden rounded-xl mb-6 aspect-[3/4] mx-auto max-w-sm">
      <img src={image} alt={name} className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-8">
        <div className="flex gap-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
            {socials?.linkedin && (
                <a 
                    href={socials.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-brand-primary hover:bg-white hover:text-brand-primary text-white rounded-full flex items-center justify-center transition-all duration-300 shadow-lg"
                    aria-label={`${name}'s LinkedIn`}
                >
                    <Linkedin size={18} />
                </a>
            )}
            {socials?.twitter && (
                <a 
                    href={socials.twitter} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-brand-primary hover:bg-white hover:text-brand-primary text-white rounded-full flex items-center justify-center transition-all duration-300 shadow-lg"
                    aria-label={`${name}'s Twitter`}
                >
                    <Twitter size={18} />
                </a>
            )}
        </div>
      </div>
    </div>
    <h3 className="text-xl font-bold text-white">{name}</h3>
    <p className="text-brand-primary">{role}</p>
  </div>
);

export default About;
