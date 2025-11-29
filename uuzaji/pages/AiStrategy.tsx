import React, { useState } from 'react';
import { Sparkles, Send, Loader2, Copy, CheckCircle } from 'lucide-react';
import { generateMarketingStrategy } from '../services/geminiService';
import ReactMarkdown from 'react-markdown';

const AiStrategy: React.FC = () => {
  const [formData, setFormData] = useState({
    businessName: '',
    industry: '',
    targetAudience: ''
  });
  const [result, setResult] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setResult(null);

    try {
      const strategy = await generateMarketingStrategy(
        formData.businessName,
        formData.industry,
        formData.targetAudience
      );
      setResult(strategy);
    } catch (err) {
      setError("We encountered an issue connecting to our AI brain. Please ensure the API Key is configured correctly or try again later.");
    } finally {
      setLoading(false);
    }
  };

  const handleCopy = () => {
    if (result) {
      navigator.clipboard.writeText(result);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="pt-20 min-h-screen bg-brand-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-3 bg-brand-primary/10 rounded-full mb-6">
            <Sparkles className="w-6 h-6 text-brand-primary mr-2" />
            <span className="text-brand-primary font-bold tracking-wider uppercase text-sm">Powered by Gemini 2.5 Flash</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
            Instant Brand Strategy Generator
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Not sure how to penetrate the East African market? Let our AI assistant draft a preliminary concept for you in seconds.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Form */}
          <div className="bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-sm h-fit">
            <h3 className="text-2xl font-bold text-white mb-6">Tell us about your business</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Business Name</label>
                <input
                  type="text"
                  name="businessName"
                  required
                  value={formData.businessName}
                  onChange={handleInputChange}
                  className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-brand-primary focus:border-transparent outline-none transition-all"
                  placeholder="e.g. Nile Coffee Roasters"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Industry</label>
                <select
                  name="industry"
                  required
                  value={formData.industry}
                  onChange={handleInputChange}
                  className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-brand-primary focus:border-transparent outline-none transition-all"
                >
                  <option value="" disabled>Select an industry</option>
                  <option value="Agriculture">Agriculture & Agribusiness</option>
                  <option value="Technology">Fintech & Technology</option>
                  <option value="Tourism">Tourism & Hospitality</option>
                  <option value="Retail">Retail & E-commerce</option>
                  <option value="Fashion">Fashion & Textiles</option>
                  <option value="Health">Healthcare</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Target Audience</label>
                <textarea
                  name="targetAudience"
                  required
                  rows={3}
                  value={formData.targetAudience}
                  onChange={handleInputChange}
                  className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-brand-primary focus:border-transparent outline-none transition-all resize-none"
                  placeholder="e.g. Young professionals in Kampala aged 25-35 who love premium coffee."
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-brand-primary to-brand-secondary hover:from-orange-500 hover:to-amber-600 text-white font-bold py-4 rounded-lg flex items-center justify-center transition-all transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                    Generating Strategy...
                  </>
                ) : (
                  <>
                    <Sparkles className="w-5 h-5 mr-2" />
                    Generate Strategy
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Results Area */}
          <div className="relative">
            {error && (
               <div className="bg-red-500/10 border border-red-500/50 text-red-200 p-6 rounded-xl">
                 <p>{error}</p>
               </div>
            )}

            {!result && !loading && !error && (
              <div className="h-full border-2 border-dashed border-white/10 rounded-2xl flex flex-col items-center justify-center text-gray-500 p-12 text-center">
                <div className="w-20 h-20 bg-white/5 rounded-full flex items-center justify-center mb-6">
                  <Sparkles className="w-8 h-8 opacity-50" />
                </div>
                <p>Your custom strategy will appear here.<br />Ready to ignite your brand?</p>
              </div>
            )}

            {result && (
              <div className="bg-gradient-to-br from-gray-900 to-black border border-white/10 rounded-2xl p-8 shadow-2xl animate-fade-in-up relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4">
                  <button 
                    onClick={handleCopy}
                    className="p-2 hover:bg-white/10 rounded-full transition-colors text-gray-400 hover:text-white"
                    title="Copy to clipboard"
                  >
                    {copied ? <CheckCircle className="w-5 h-5 text-green-500" /> : <Copy className="w-5 h-5" />}
                  </button>
                </div>
                <h3 className="text-xl font-bold text-brand-uganda-yellow mb-6">Generated Strategy</h3>
                <div className="prose prose-invert prose-orange max-w-none text-gray-300">
                    {/* Using ReactMarkdown to safely render the Markdown response from Gemini */}
                    <ReactMarkdown>{result}</ReactMarkdown>
                </div>
                <div className="mt-8 pt-6 border-t border-white/10">
                  <p className="text-sm text-gray-500 italic">
                    *This is an AI-generated draft. Contact our team for a comprehensive execution plan.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AiStrategy;
