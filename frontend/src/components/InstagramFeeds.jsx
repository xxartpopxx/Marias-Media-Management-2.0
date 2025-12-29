import { useEffect, useRef, useState } from 'react';
import { Instagram, ExternalLink, Camera } from 'lucide-react';
import { socialLinks } from '../mock';
import { Card } from './ui/card';
import { Button } from './ui/button';

export const InstagramFeeds = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    // Load Elfsight script
    const script = document.createElement('script');
    script.src = 'https://elfsightcdn.com/platform.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      document.body.removeChild(script);
    };
  }, []);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section ref={sectionRef} className="py-24 bg-gradient-to-b from-purple-50 to-white relative overflow-hidden">
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-pink-100 rounded-full filter blur-3xl opacity-20 animate-pulse-slow"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Social Media & Brand Reels - Live Elfsight Feed */}
        <div className={`mb-24 transition-all duration-1000 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="text-center max-w-4xl mx-auto mb-12">
            <div className="inline-flex items-center gap-3 mb-6">
              <Instagram className="w-10 h-10 text-purple-600" />
              <h2 className="text-4xl md:text-5xl font-bold">
                Social Media & Brand <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">Reels</span>
              </h2>
            </div>
            <p className="text-lg text-gray-600 mb-6">
              Behind the scenes moments, creativity, storytelling, and social media tips from @maria.mongiardo
            </p>
          </div>

          {/* Elfsight Instagram Feed */}
          <div className="max-w-6xl mx-auto">
            <div 
              className="elfsight-app-9fd835c2-4b3d-4f30-bedb-ea6e47913cf9" 
              data-elfsight-app-lazy
              style={{
                minHeight: '400px'
              }}
            ></div>
          </div>

          <div className="text-center mt-8">
            <a
              href={socialLinks.instagram}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 hover:from-purple-700 hover:via-pink-700 hover:to-orange-600 text-white px-10 py-6 text-lg font-semibold transition-all duration-300 transform hover:scale-110 hover:-translate-y-2"
                style={{
                  boxShadow: '0 15px 50px rgba(168, 85, 247, 0.4)'
                }}
              >
                <Instagram className="mr-3 w-5 h-5" />
                Follow @maria.mongiardo
                <ExternalLink className="ml-3 w-5 h-5" />
              </Button>
            </a>
          </div>
        </div>

        {/* Food & Restaurant Photography - Link Only */}
        <div className={`transition-all duration-1000 delay-500 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <Card 
            className="max-w-4xl mx-auto bg-gradient-to-br from-white to-purple-50 rounded-3xl p-12 border-2 border-purple-100 hover:shadow-2xl transition-all duration-500"
            style={{
              boxShadow: '0 10px 40px rgba(168, 85, 247, 0.15)'
            }}
          >
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-shrink-0">
                <div 
                  className="bg-gradient-to-br from-purple-500 to-pink-500 w-24 h-24 rounded-full flex items-center justify-center transform hover:rotate-12 hover:scale-110 transition-all duration-300"
                  style={{
                    boxShadow: '0 10px 30px rgba(168, 85, 247, 0.4)'
                  }}
                >
                  <Camera className="w-12 h-12 text-white" />
                </div>
              </div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-3xl font-bold mb-4 text-gray-800">
                  Food & Restaurant <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">Photography</span>
                </h3>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  Maria works with restaurants and food businesses to create elevated menu and brand photography.
                </p>
                <p className="text-gray-600 mb-6">
                  See more on Instagram: <a href={socialLinks.instagramFood} target="_blank" rel="noopener noreferrer" className="font-semibold text-purple-600 hover:text-pink-500 transition-colors duration-300">@mariasfoodphotos</a>
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                  <a
                    href={socialLinks.instagramFood}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      size="lg"
                      className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-6 font-semibold transition-all duration-300 transform hover:scale-110 hover:-translate-y-2"
                      style={{
                        boxShadow: '0 10px 30px rgba(168, 85, 247, 0.4)'
                      }}
                    >
                      <Instagram className="mr-2 w-5 h-5" />
                      View Work
                    </Button>
                  </a>
                  <Button
                    size="lg"
                    variant="outline"
                    onClick={scrollToContact}
                    className="border-2 border-purple-500 text-purple-600 hover:bg-purple-50 px-8 py-6 font-semibold transition-all duration-300 transform hover:scale-105"
                  >
                    <Camera className="mr-2 w-5 h-5" />
                    Inquire About Photography
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
