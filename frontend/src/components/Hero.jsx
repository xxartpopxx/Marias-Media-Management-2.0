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
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
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

      <div className="container mx-auto px-6 relative z-10 pt-20">
        <div className={`text-center max-w-5xl mx-auto transition-all duration-1000 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md px-6 py-3 rounded-full mb-12 shadow-lg border border-white/20">
            <span className="text-sm font-medium text-white tracking-wide">North Shore, Massachusetts Based • Global Reach</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold mb-10 leading-tight text-white drop-shadow-2xl" style={{ letterSpacing: '-0.02em' }}>
            Giving Your Social Media
            <span className="block mt-4 bg-gradient-to-r from-pink-300 via-purple-300 to-pink-300 bg-clip-text text-transparent">
              the Attention It Deserves
            </span>
          </h1>
          
          <p className="text-2xl md:text-3xl text-pink-100 mb-10 font-light" style={{ letterSpacing: '0.01em' }}>
            Purpose driven strategy. Thoughtful design. Real connection.
          </p>
          
          <p className="text-xl md:text-2xl text-white/90 mb-16 max-w-4xl mx-auto leading-relaxed">
            At Maria's Media Management, I help you turn social media into a natural extension of your brand. Your online presence should feel genuine, compelling, and intentional.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button
              size="lg"
              onClick={scrollToContact}
              className="bg-white text-purple-900 hover:bg-pink-50 px-12 py-8 text-xl font-semibold shadow-2xl hover:shadow-pink-500/50 transition-all duration-500 transform hover:scale-105"
              style={{
                boxShadow: '0 10px 40px rgba(236, 72, 153, 0.4), 0 0 0 3px rgba(255, 255, 255, 0.1)'
              }}
            >
              Work With Maria
              <ArrowRight className="ml-3 w-6 h-6" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
