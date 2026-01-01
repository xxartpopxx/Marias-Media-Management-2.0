import { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from './ui/button';

export const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex flex-col overflow-hidden">
      {/* Real Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        style={{ filter: 'brightness(0.4)' }}
      >
        <source src="https://customer-assets.emergentagent.com/job_a9efaa07-0c20-4f2e-84b4-40005799affc/artifacts/8asjsv8t_6953896-uhd_4096_2160_25fps.mp4" type="video/mp4" />
      </video>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/60 via-pink-900/50 to-purple-900/60"></div>

      <div className="container mx-auto px-6 relative z-10 pt-24 md:pt-28 flex-1 flex flex-col justify-center">
        {/* Layout with Logo on left and content */}
        <div className={`flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-12 transition-all duration-1000 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          {/* Prominent Logo - Left side on desktop, top on mobile */}
          <div className="flex-shrink-0">
            <img 
              src="https://customer-assets.emergentagent.com/job_a9efaa07-0c20-4f2e-84b4-40005799affc/artifacts/ml1q1ugm_Maria%27s%20Media%20Kit.png" 
              alt="Maria's Media Management" 
              className="h-28 sm:h-36 md:h-40 lg:h-48 w-auto drop-shadow-2xl"
              style={{
                filter: 'drop-shadow(0 4px 30px rgba(255, 255, 255, 0.2)) drop-shadow(0 10px 40px rgba(0, 0, 0, 0.5))'
              }}
            />
          </div>
          
          {/* Hero content */}
          <div className="text-center lg:text-left max-w-4xl">
            <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md px-4 py-2 md:px-6 md:py-3 rounded-full mb-6 md:mb-8 shadow-lg border border-white/20">
              <span className="text-xs md:text-sm font-medium text-white tracking-wide">North Shore, Massachusetts Based • Global Reach</span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-4 md:mb-6 leading-tight text-white drop-shadow-2xl" style={{ letterSpacing: '-0.02em' }}>
              Giving Your Social Media
              <span className="block mt-2 md:mt-3 bg-gradient-to-r from-pink-300 via-purple-300 to-pink-300 bg-clip-text text-transparent">
                the Attention It Deserves
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl md:text-2xl text-pink-100 mb-4 md:mb-6 font-light" style={{ letterSpacing: '0.01em' }}>
              Purpose driven strategy. Thoughtful design. Real connection.
            </p>
            
            <p className="text-sm sm:text-base md:text-lg text-white/90 mb-8 md:mb-10 leading-relaxed">
              At Maria's Media Management, I help you turn social media into a natural extension of your brand. Your online presence should feel genuine, compelling, and intentional.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">
              <Button
                size="lg"
                onClick={scrollToContact}
                className="bg-white text-purple-900 hover:bg-pink-50 px-8 py-6 md:px-10 md:py-7 text-base md:text-lg font-semibold shadow-2xl hover:shadow-pink-500/50 transition-all duration-500 transform hover:scale-105"
                style={{
                  boxShadow: '0 10px 40px rgba(236, 72, 153, 0.4), 0 0 0 3px rgba(255, 255, 255, 0.1)'
                }}
              >
                Work With Maria
                <ArrowRight className="ml-3 w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
