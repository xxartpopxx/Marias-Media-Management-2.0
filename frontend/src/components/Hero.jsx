import { useState, useEffect } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
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

  const scrollToProducts = () => {
    const element = document.getElementById('digital-products');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video-style Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-pink-800 to-purple-800">
        {/* Simulated scrolling feed elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-3xl animate-float" style={{ animationDelay: '0s' }}></div>
          <div className="absolute top-40 right-20 w-48 h-48 bg-white rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
          <div className="absolute bottom-32 left-1/4 w-56 h-56 bg-white rounded-2xl animate-float" style={{ animationDelay: '4s' }}></div>
          <div className="absolute top-1/3 right-1/3 w-40 h-40 bg-white rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-20 right-1/4 w-52 h-52 bg-white rounded-3xl animate-float" style={{ animationDelay: '3s' }}></div>
        </div>
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 pt-20">
        <div className={`text-center max-w-5xl mx-auto transition-all duration-1000 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-5 py-2 rounded-full mb-8 shadow-lg border border-white/20">
            <Sparkles className="w-4 h-4 text-pink-300" />
            <span className="text-sm font-medium text-white">Boston-Based • Global Reach</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight text-white drop-shadow-2xl">
            Giving Your Social Media Profiles
            <span className="block mt-2 bg-gradient-to-r from-pink-300 via-purple-300 to-pink-300 bg-clip-text text-transparent animate-gradient">
              the Attention They Deserve
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-pink-100 mb-6 font-light">
            Purpose-driven strategy • Thoughtful design • Engaging, human-centered storytelling
          </p>
          
          <p className="text-lg md:text-xl text-white/90 mb-12 max-w-4xl mx-auto leading-relaxed">
            At Maria's Media Management, we transform social media into a powerful extension of your brand — blending creativity, strategy, and connection. Whether you're a business, creator, nonprofit, or entrepreneur, we help your online presence not only look beautiful, but work for you.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              onClick={scrollToContact}
              className="bg-white text-purple-900 hover:bg-pink-50 px-8 py-7 text-lg font-semibold shadow-2xl hover:shadow-pink-500/50 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1"
              style={{
                boxShadow: '0 10px 40px rgba(236, 72, 153, 0.3), 0 0 0 3px rgba(255, 255, 255, 0.1)'
              }}
            >
              Work With Maria
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={scrollToProducts}
              className="border-2 border-white/40 bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 hover:border-white/60 px-8 py-7 text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:-translate-y-1"
              style={{
                boxShadow: '0 10px 40px rgba(168, 85, 247, 0.2)'
              }}
            >
              Explore Digital Products & Photo Editing
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};
