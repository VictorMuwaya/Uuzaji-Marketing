import React, { useState } from 'react';
import { Mail, MapPin, Globe, Share2, Printer, ArrowLeft, Check } from 'lucide-react';
import Logo from '../components/Logo';
import { Images } from '../assets/images';
import { PageRoute } from '../types';

const BusinessCard: React.FC = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [showToast, setShowToast] = useState(false);

  // Helper to go back since this is sometimes a standalone view
  const goBack = () => {
    window.location.hash = PageRoute.HOME;
  };

  const copyToClipboard = async () => {
    const url = window.location.href;
    try {
      await navigator.clipboard.writeText(url);
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000);
    } catch (err) {
      console.error('Clipboard API failed, trying fallback:', err);
      // Fallback for some environments
      const textArea = document.createElement("textarea");
      textArea.value = url;
      textArea.style.position = "fixed"; // Avoid scrolling to bottom
      textArea.style.left = "-9999px";
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      try {
        document.execCommand('copy');
        setShowToast(true);
        setTimeout(() => setShowToast(false), 3000);
      } catch (e) {
        console.error('Fallback copy failed', e);
      }
      document.body.removeChild(textArea);
    }
  };

  const handleShare = async () => {
    const shareData = {
      title: 'Uuzaji Marketing',
      text: 'Check out Uuzaji, the premier East African marketing firm.',
      url: window.location.href
    };

    // Check if Web Share API is supported and can share the data
    if (navigator.share && navigator.canShare && navigator.canShare(shareData)) {
      try {
        await navigator.share(shareData);
      } catch (error) {
        console.error('Error sharing:', error);
        // If the error isn't because the user cancelled, try the fallback
        if ((error as Error).name !== 'AbortError') {
             await copyToClipboard();
        }
      }
    } else {
        await copyToClipboard();
    }
  };

  const CardFront = ({ className = "" }) => (
    <div 
        className={`relative w-full h-full overflow-hidden shadow-2xl border border-white/5 bg-stone-900 rounded-xl ${className}`}
        style={{ printColorAdjust: 'exact', WebkitPrintColorAdjust: 'exact' }}
    >
        {/* Texture */}
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: `url('${Images.patterns.carbon}')` }}></div>
        
        {/* Geometric accents */}
        <div className="absolute right-0 top-0 w-2/3 h-full bg-gradient-to-l from-brand-primary/20 to-transparent skew-x-12"></div>
        <div className="absolute left-0 bottom-0 w-1/3 h-1.5 bg-gradient-to-r from-brand-uganda-yellow via-brand-primary to-brand-uganda-red"></div>
        
        {/* Content */}
        <div className="relative h-full flex flex-col items-center justify-center p-6">
          <Logo className="h-24 w-auto scale-125" />
        </div>
    </div>
  );

  const CardBack = ({ className = "" }) => (
      <div 
        className={`relative w-full h-full overflow-hidden shadow-2xl bg-white text-brand-dark rounded-xl ${className}`}
        style={{ printColorAdjust: 'exact', WebkitPrintColorAdjust: 'exact' }}
      >
             <div className="absolute top-0 w-full h-1.5 bg-gradient-to-r from-brand-uganda-yellow via-brand-primary to-brand-uganda-red"></div>
             
             <div className="h-full flex flex-row p-6 sm:p-8 items-center">
                {/* Left: Info */}
                <div className="flex-1 flex flex-col justify-center space-y-5 pr-4">
                  <div>
                    <Logo className="h-8 w-auto mb-2" variant="dark" />
                  </div>
                  
                  <div className="space-y-3 text-sm text-gray-700">
                    <div className="flex items-center gap-3">
                      <Globe className="w-5 h-5 text-brand-primary" />
                      <span className="font-medium">www.uuzaji.co.ug</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Mail className="w-5 h-5 text-brand-primary" />
                      <span className="font-medium">hello@uuzaji.co.ug</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <MapPin className="w-5 h-5 text-brand-primary" />
                      <span className="font-medium">Nakasero Hill, Kampala</span>
                    </div>
                  </div>
                </div>

                {/* Right: QR Code */}
                <div className="w-[120px] flex flex-col items-center justify-center border-l-2 border-gray-100 pl-4">
                  <div className="bg-white p-2 rounded-lg shadow-inner border border-gray-200">
                    <img 
                      src={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent('https://uuzaji.co.ug')}&bgcolor=ffffff&color=1c1917`}
                      alt="Website QR Code"
                      className="w-20 h-20 sm:w-24 sm:h-24 object-contain"
                    />
                  </div>
                  <p className="text-[10px] font-bold text-gray-400 mt-2 uppercase tracking-wide text-center">Scan Me</p>
                </div>
             </div>
      </div>
  );

  return (
    <div className="pt-20 min-h-screen bg-brand-dark flex flex-col items-center justify-center p-4 relative overflow-hidden print:pt-0 print:bg-white print:block print:h-auto print:min-h-0 print:overflow-visible">
      
      {/* Screen Only Content */}
      <div className="print:hidden contents">
          {/* Background Decor */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
              <div className="absolute top-20 left-10 w-64 h-64 bg-brand-primary/10 rounded-full blur-3xl"></div>
              <div className="absolute bottom-20 right-10 w-96 h-96 bg-brand-uganda-red/5 rounded-full blur-3xl"></div>
          </div>

          <div className="relative z-10 w-full max-w-lg mb-6 flex justify-between items-center">
            <button onClick={goBack} className="text-gray-400 hover:text-white flex items-center transition-colors">
                <ArrowLeft className="w-5 h-5 mr-1" />
                Back to Site
            </button>
          </div>

          <div className="relative z-10 text-center mb-10 animate-fade-in-up">
            <h1 className="text-3xl md:text-5xl font-display font-bold text-white mb-3">
              Digital Identity
            </h1>
            <p className="text-gray-400 text-lg">
              Tap the card to reveal contact details
            </p>
          </div>

          <div 
            className="group relative w-[340px] h-[200px] sm:w-[500px] sm:h-[280px] cursor-pointer perspective-1000 z-10"
            onClick={() => setIsFlipped(!isFlipped)}
          >
            <div className={`relative w-full h-full duration-700 preserve-3d transition-transform ${isFlipped ? 'rotate-y-180' : ''}`}>
              
              {/* Front of Card */}
              <div className="absolute inset-0 w-full h-full backface-hidden rounded-xl">
                 <CardFront />
              </div>

              {/* Back of Card */}
              <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 rounded-xl">
                 <CardBack />
              </div>

            </div>
          </div>
          
          {/* Actions */}
          <div className="mt-16 flex gap-4 z-10 relative">
            <button 
              onClick={() => window.print()}
              className="flex items-center px-6 py-3 bg-white/5 hover:bg-white/10 text-white rounded-full transition-colors border border-white/10 backdrop-blur-sm group"
            >
              <Printer className="w-4 h-4 mr-2 group-hover:text-brand-primary transition-colors" />
              Print Card
            </button>
            <button 
              className="flex items-center px-6 py-3 bg-brand-primary hover:bg-brand-secondary text-white rounded-full transition-colors shadow-lg shadow-brand-primary/25"
              onClick={handleShare}
            >
              {showToast ? <Check className="w-4 h-4 mr-2" /> : <Share2 className="w-4 h-4 mr-2" />}
              {showToast ? 'Copied Link!' : 'Share'}
            </button>
            
             {/* Toast Notification */}
             {showToast && (
                <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 bg-black/90 text-white text-sm py-2 px-4 rounded-lg shadow-xl border border-white/10 whitespace-nowrap animate-fade-in-up">
                    Link copied to clipboard!
                </div>
            )}
          </div>

          <div className="mt-8 text-xs text-gray-600">
              Uuzaji Digital Card &copy; {new Date().getFullYear()}
          </div>
      </div>

      {/* Print Only Content */}
      <div className="hidden print:flex flex-col items-center justify-start min-h-screen w-full gap-8 bg-white text-black p-8">
         <div className="text-center mb-4">
             <h1 className="text-xl font-bold text-black uppercase tracking-wider">Uuzaji Marketing</h1>
             <p className="text-xs text-gray-500">Business Card Print Preview</p>
         </div>
         
         <div className="flex flex-col gap-8 items-center">
            {/* Wrapper for Front */}
             <div className="w-[3.5in] h-[2in] rounded-none overflow-hidden border border-gray-200 shadow-none relative" style={{ printColorAdjust: 'exact', WebkitPrintColorAdjust: 'exact' }}>
                 <CardFront className="rounded-none border-0 shadow-none" />
             </div>

            {/* Wrapper for Back */}
             <div className="w-[3.5in] h-[2in] rounded-none overflow-hidden border border-gray-200 shadow-none relative" style={{ printColorAdjust: 'exact', WebkitPrintColorAdjust: 'exact' }}>
                 <CardBack className="rounded-none border-0 shadow-none" />
             </div>
         </div>

         <div className="text-center mt-8 text-xs text-gray-400">
             <p>www.uuzaji.co.ug</p>
         </div>
      </div>

    </div>
  );
};

export default BusinessCard;
