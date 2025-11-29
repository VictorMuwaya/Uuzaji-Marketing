
import React, { useEffect } from 'react';
import { Shield, FileText, ArrowLeft } from 'lucide-react';
import { PageRoute } from '../types';

interface LegalProps {
  type: 'privacy' | 'terms';
  onNavigate?: (page: PageRoute) => void;
}

const Legal: React.FC<LegalProps> = ({ type, onNavigate }) => {
  
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [type]);

  const isPrivacy = type === 'privacy';
  const title = isPrivacy ? 'Privacy Policy' : 'Terms of Service';
  const updatedDate = 'November 29, 2025';

  return (
    <div className="pt-20 min-h-screen bg-brand-dark">
      {/* Header */}
      <div className="bg-stone-900 border-b border-white/5 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center p-3 bg-white/5 rounded-full mb-6">
            {isPrivacy ? (
              <Shield className="w-8 h-8 text-brand-primary" />
            ) : (
              <FileText className="w-8 h-8 text-brand-primary" />
            )}
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">{title}</h1>
          <p className="text-gray-400">Last Updated: {updatedDate}</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {onNavigate && (
            <button 
                onClick={() => onNavigate(PageRoute.HOME)}
                className="mb-8 flex items-center text-brand-primary hover:text-white transition-colors text-sm font-semibold"
            >
                <ArrowLeft className="w-4 h-4 mr-2" /> Back to Home
            </button>
        )}

        <div className="prose prose-invert prose-lg max-w-none text-gray-300">
          
          {isPrivacy ? (
            // ================= PRIVACY POLICY CONTENT =================
            <div className="space-y-12">
              <section>
                <h2 className="text-2xl font-bold text-white mb-4">1. Introduction</h2>
                <p>
                  Welcome to Uuzaji Marketing ("we," "our," or "us"). We are committed to protecting your personal information and your right to privacy. 
                  This Privacy Policy applies to all information collected through our website (https://uuzaji.co.ug), our AI Strategy Generator, and our marketing services.
                </p>
                <p className="mt-4">
                  We operate in compliance with the <strong>Data Protection and Privacy Act, 2019 of Uganda</strong> and other relevant regional data protection laws in Kenya, Tanzania, and Rwanda.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">2. Information We Collect</h2>
                <p>We collect personal information that you voluntarily provide to us when you:</p>
                <ul className="list-disc pl-5 mt-4 space-y-2">
                  <li>Register on the website.</li>
                  <li>Use our AI Strategy Generator (Business name, industry, target audience).</li>
                  <li>Contact us via our contact forms (Name, email address, phone number).</li>
                  <li>Sign up for our newsletters or download resources.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">3. How We Use Your Information</h2>
                <p>We use the information we collect or receive:</p>
                <ul className="list-disc pl-5 mt-4 space-y-2">
                  <li><strong>To facilitate account creation and logon processes.</strong></li>
                  <li><strong>To send you marketing and promotional communications.</strong> You can opt-out at any time.</li>
                  <li><strong>To generate AI strategies.</strong> Input data provided to the AI Strategy tool is processed via Google Gemini API to generate results. We do not use this specific input data to train public models, but we advise against inputting strictly confidential trade secrets.</li>
                  <li><strong>To respond to legal requests</strong> and prevent harm.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">4. Sharing Your Information</h2>
                <p>
                  We only share information with your consent, to comply with laws, to provide you with services, to protect your rights, or to fulfill business obligations.
                </p>
                <p className="mt-4">
                  <strong>Third-Party Vendors:</strong> We may share data with third-party vendors, service providers, contractors, or agents who perform services for us, such as:
                </p>
                <ul className="list-disc pl-5 mt-4 space-y-2">
                  <li><strong>Google (Gemini API):</strong> For AI content generation.</li>
                  <li><strong>EmailJS:</strong> For routing contact form messages.</li>
                  <li><strong>Cloudflare:</strong> For website hosting and security.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">5. Contact Us</h2>
                <p>
                  If you have questions or comments about this policy, you may email us at <a href="mailto:privacy@uuzaji.co.ug" className="text-brand-primary hover:underline">privacy@uuzaji.co.ug</a> or by post to:
                </p>
                <address className="mt-4 not-italic text-gray-400 border-l-2 border-brand-primary pl-4">
                  Uuzaji Marketing Agency<br />
                  Plot 42, Lumumba Avenue<br />
                  Nakasero Hill<br />
                  Kampala, Uganda
                </address>
              </section>
            </div>
          ) : (
            // ================= TERMS OF SERVICE CONTENT =================
            <div className="space-y-12">
              <section>
                <h2 className="text-2xl font-bold text-white mb-4">1. Agreement to Terms</h2>
                <p>
                  These Terms of Service constitute a legally binding agreement made between you, whether personally or on behalf of an entity ("you") and Uuzaji Marketing ("we," "us" or "our"), concerning your access to and use of the https://uuzaji.co.ug website as well as any other media form, media channel, mobile website or mobile application related, linked, or otherwise connected thereto (collectively, the "Site").
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">2. AI Strategy Generator</h2>
                <p>
                  Our website features an AI-powered marketing strategy generator ("AI Tool"). By using this tool, you acknowledge that:
                </p>
                <ul className="list-disc pl-5 mt-4 space-y-2">
                  <li>The strategies generated are automated suggestions based on the information you provide and large language models.</li>
                  <li>These strategies are <strong>draft concepts</strong> and should not be considered as guaranteed professional financial or business advice.</li>
                  <li>Uuzaji is not liable for business losses incurred by implementing AI-generated suggestions without professional review.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">3. Intellectual Property Rights</h2>
                <p>
                  Unless otherwise indicated, the Site is our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the Site (collectively, the "Content") and the trademarks, service marks, and logos contained therein (the "Marks") are owned or controlled by us or licensed to us, and are protected by copyright and trademark laws.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">4. Prohibited Activities</h2>
                <p>
                  You may not access or use the Site for any purpose other than that for which we make the Site available. The Site may not be used in connection with any commercial endeavors except those that are specifically endorsed or approved by us.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">5. Governing Law</h2>
                <p>
                  These Terms shall be governed by and defined following the laws of <strong>Uganda</strong>. Uuzaji Marketing and yourself irrevocably consent that the courts of Uganda shall have exclusive jurisdiction to resolve any dispute which may arise in connection with these terms.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">6. Contact Us</h2>
                <p>
                  To resolve a complaint regarding the Site or to receive further information regarding use of the Site, please contact us at:
                </p>
                <p className="mt-4 text-brand-primary font-bold">hello@uuzaji.co.ug</p>
              </section>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Legal;
