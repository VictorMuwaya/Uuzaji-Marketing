import React, { useState, useRef } from 'react';
import { Mail, Phone, MapPin, Send, Loader2, CheckCircle, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  
  // Form State
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: 'New Project Inquiry',
    message: ''
  });

  // Handle Input Changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Handle Submission
  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus('idle');

    // CONFIGURATION: Access keys securely via environment variables
    const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    try {
        if (!formRef.current) return;

        // Verify keys are present
        if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
            console.error('Missing EmailJS environment variables.');
            throw new Error("Configuration Error: EmailJS keys are missing. Please check Cloudflare settings.");
        }

        await emailjs.sendForm(
            SERVICE_ID,
            TEMPLATE_ID,
            formRef.current,
            PUBLIC_KEY
        );

        setStatus('success');
        setFormData({
            firstName: '',
            lastName: '',
            email: '',
            subject: 'New Project Inquiry',
            message: ''
        });
    } catch (error) {
        console.error('Email Error:', error);
        setStatus('error');
    } finally {
        setLoading(false);
    }
  };

  return (
    <div className="pt-20 min-h-screen bg-brand-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">Get In Touch</h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Ready to start your next project? We're here to help you grow.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-white mb-8">Visit our Kampala HQ</h3>
            
            <div className="flex items-start space-x-6 group">
              <div className="w-12 h-12 bg-brand-primary/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-brand-primary transition-colors duration-300">
                <MapPin className="w-6 h-6 text-brand-primary group-hover:text-white transition-colors" />
              </div>
              <div>
                <h4 className="text-white font-bold text-lg mb-1">Office Location</h4>
                <p className="text-gray-400">Plot 42, Lumumba Avenue<br />Nakasero Hill, Kampala</p>
              </div>
            </div>

            <div className="flex items-start space-x-6 group">
              <div className="w-12 h-12 bg-brand-primary/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-brand-primary transition-colors duration-300">
                <Mail className="w-6 h-6 text-brand-primary group-hover:text-white transition-colors" />
              </div>
              <div>
                <h4 className="text-white font-bold text-lg mb-1">Email Us</h4>
                <p className="text-gray-400">info@uuzaji.co.ug<br />support@uuzaji.co.ug</p>
              </div>
            </div>

            <div className="flex items-start space-x-6 group">
              <div className="w-12 h-12 bg-brand-primary/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-brand-primary transition-colors duration-300">
                <Phone className="w-6 h-6 text-brand-primary group-hover:text-white transition-colors" />
              </div>
              <div>
                <h4 className="text-white font-bold text-lg mb-1">Call Us</h4>
                <p className="text-gray-400">+256 701 234 567<br />Mon-Fri from 8am to 5pm</p>
              </div>
            </div>

            <div className="mt-12 p-6 bg-white/5 rounded-2xl border border-white/5">
                <p className="text-brand-uganda-yellow font-semibold mb-2">Did you know?</p>
                <p className="text-gray-400 text-sm">We also have satellite representatives in Nairobi, Dar es Salaam, and Kigali ready to meet you.</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white text-brand-dark p-8 rounded-2xl shadow-2xl">
            <h3 className="text-2xl font-bold mb-6">Send us a Message</h3>
            
            <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">First Name</label>
                  <input 
                    type="text" 
                    name="firstName"
                    required
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full bg-gray-100 border border-gray-200 rounded-lg px-4 py-3 focus:ring-2 focus:ring-brand-primary focus:border-transparent outline-none" 
                    placeholder="John" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Last Name</label>
                  <input 
                    type="text" 
                    name="lastName"
                    required
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full bg-gray-100 border border-gray-200 rounded-lg px-4 py-3 focus:ring-2 focus:ring-brand-primary focus:border-transparent outline-none" 
                    placeholder="Doe" 
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
                <input 
                    type="email" 
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-gray-100 border border-gray-200 rounded-lg px-4 py-3 focus:ring-2 focus:ring-brand-primary focus:border-transparent outline-none" 
                    placeholder="john@example.com" 
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Subject</label>
                <select 
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full bg-gray-100 border border-gray-200 rounded-lg px-4 py-3 focus:ring-2 focus:ring-brand-primary focus:border-transparent outline-none"
                >
                  <option value="New Project Inquiry">New Project Inquiry</option>
                  <option value="Partnership Proposal">Partnership Proposal</option>
                  <option value="Careers">Careers</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Message</label>
                <textarea 
                    name="message"
                    required
                    rows={4} 
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-gray-100 border border-gray-200 rounded-lg px-4 py-3 focus:ring-2 focus:ring-brand-primary focus:border-transparent outline-none resize-none" 
                    placeholder="How can we help you?"
                ></textarea>
              </div>

              {/* Status Messages */}
              {status === 'success' && (
                <div className="bg-green-100 border border-green-200 text-green-700 p-4 rounded-lg flex items-center animate-fade-in-up">
                    <CheckCircle className="w-5 h-5 mr-2" />
                    <span>Message sent successfully! We'll get back to you soon.</span>
                </div>
              )}

              {status === 'error' && (
                <div className="bg-red-100 border border-red-200 text-red-700 p-4 rounded-lg flex items-center animate-fade-in-up">
                    <AlertCircle className="w-5 h-5 mr-2" />
                    <span>Failed to send message. Please check the API keys or try again later.</span>
                </div>
              )}

              <button 
                type="submit" 
                disabled={loading}
                className="w-full bg-brand-dark text-white hover:bg-brand-primary font-bold py-4 rounded-lg flex items-center justify-center transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed transform active:scale-95"
              >
                {loading ? (
                    <>
                        <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                        Sending...
                    </>
                ) : (
                    <>
                        <Send className="w-5 h-5 mr-2" />
                        Send Message
                    </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
