import { useEffect, useRef, useState } from 'react';
import { Instagram, ExternalLink, Camera } from 'lucide-react';
import { socialLinks } from '../mock';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { scrollToContact } from '../lib/scrollUtils';

export const InstagramFeeds = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scriptLoaded, setScriptLoaded] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Load SociableKIT script only when section is visible (lazy load third-party)
          // and only if not already loaded
          if (!scriptLoaded) {
            const existingScript = document.querySelector('script[src*="sociablekit.com"]');
            if (!existingScript) {
              const script = document.createElement('script');
              script.src = 'https://widgets.sociablekit.com/instagram-feed/widget.js';
              script.defer = true;
              script.onload = () => setScriptLoaded(true);
              document.body.appendChild(script);
            } else {
              setScriptLoaded(true);
            }
          }
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [scriptLoaded]);

  return (
    <section ref={sectionRef} className="py-32 bg-gradient-to-b from-purple-50 to-white relative overflow-hidden" aria-labelledby="instagram-heading">
      <div className="container mx-auto px-6 relative z-10">
        {/* Food & Brand Reels - SociableKIT Feed */}
        <div className={`mb-32 transition-all duration-1000 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="text-center max-w-4xl mx-auto mb-16">
            <div className="inline-flex items-center gap-4 mb-8">
              <Instagram className="w-12 h-12 text-purple-600" aria-hidden="true" />
              <h2 id="instagram-heading" className="text-5xl md:text-6xl font-bold" style={{ letterSpacing: '-0.02em' }}>
                Food & Brand <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">Reels</span>
              </h2>
            </div>
            <p className="text-xl text-gray-600 mb-8">
              @maria.mongiardo — Follow along on Instagram
            </p>
          </div>

          {/* SociableKIT Instagram Feed - Responsive */}
          <div className="max-w-6xl mx-auto">
            <div 
              className="sk-instagram-feed" 
              data-embed-id="25644225"
              style={{
                minHeight: '400px',
                width: '100%'
              }}
              aria-label="Instagram feed from @maria.mongiardo"
            ></div>
          </div>

          <div className="text-center mt-10">
            <a
              href={socialLinks.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow @maria.mongiardo on Instagram - Opens in new tab"
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 hover:from-purple-700 hover:via-pink-700 hover:to-orange-600 text-white px-12 py-7 text-lg font-semibold transition-all duration-500 transform hover:scale-105"
                style={{
                  boxShadow: '0 15px 50px rgba(168, 85, 247, 0.4)'
                }}
              >
                <Instagram className="mr-3 w-5 h-5" aria-hidden="true" />
                Follow @maria.mongiardo
                <ExternalLink className="ml-3 w-5 h-5" aria-hidden="true" />
              </Button>
            </a>
          </div>
        </div>

        {/* Food & Restaurant Photography - Link Only */}
        <div className={`transition-all duration-1000 delay-500 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <Card 
            className="max-w-5xl mx-auto bg-gradient-to-br from-white to-purple-50 rounded-3xl p-16 border-2 border-purple-100 hover:shadow-2xl transition-all duration-500"
            style={{
              boxShadow: '0 10px 40px rgba(168, 85, 247, 0.15)'
            }}
          >
            <div className="flex flex-col md:flex-row items-center gap-10">
              <div className="flex-shrink-0">
                <div 
                  className="bg-gradient-to-br from-purple-500 to-pink-500 w-28 h-28 rounded-full flex items-center justify-center transform hover:rotate-12 hover:scale-110 transition-all duration-500"
                  style={{
                    boxShadow: '0 10px 30px rgba(168, 85, 247, 0.4)'
                  }}
                  aria-hidden="true"
                >
                  <Camera className="w-14 h-14 text-white" />
                </div>
              </div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-4xl font-bold mb-6 text-gray-800" style={{ letterSpacing: '-0.01em' }}>
                  Food & Restaurant <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">Photography</span>
                </h3>
                <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                  These are photos Maria has captured for restaurants and food businesses across Massachusetts and beyond. Her work focuses on creating elevated brand-driven food imagery for menus, websites, and social media.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                  <a
                    href={socialLinks.instagramFood}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="View Maria's food photography on Instagram - Opens in new tab"
                  >
                    <Button
                      size="lg"
                      className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-10 py-7 font-semibold transition-all duration-500 transform hover:scale-105"
                      style={{
                        boxShadow: '0 10px 30px rgba(168, 85, 247, 0.4)'
                      }}
                    >
                      <Instagram className="mr-2 w-5 h-5" aria-hidden="true" />
                      View Work
                    </Button>
                  </a>
                  <Button
                    size="lg"
                    variant="outline"
                    onClick={scrollToContact}
                    className="border-2 border-purple-500 text-purple-600 hover:bg-purple-50 px-10 py-7 font-semibold transition-all duration-500 transform hover:scale-105"
                    aria-label="Inquire about food photography services"
                  >
                    <Camera className="mr-2 w-5 h-5" aria-hidden="true" />
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
