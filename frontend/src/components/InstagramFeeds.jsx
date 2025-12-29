import { useEffect, useRef, useState } from 'react';
import { Instagram, ExternalLink } from 'lucide-react';
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

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Placeholder images - in production, these would be from Instagram API
  const foodPhotos = [
    { id: 1, image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80" },
    { id: 2, image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80" },
    { id: 3, image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800&q=80" },
    { id: 4, image: "https://images.unsplash.com/photo-1551218808-94e220e084d2?w=800&q=80" },
    { id: 5, image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&q=80" },
    { id: 6, image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&q=80" }
  ];

  const contentReels = [
    { id: 1, image: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=800&q=80" },
    { id: 2, image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80" },
    { id: 3, image: "https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?w=800&q=80" },
    { id: 4, image: "https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=800&q=80" },
    { id: 5, image: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=800&q=80" },
    { id: 6, image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80" }
  ];

  return (
    <section ref={sectionRef} className="py-24 bg-gradient-to-b from-purple-50 to-white relative overflow-hidden">
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-pink-100 rounded-full filter blur-3xl opacity-20 animate-pulse-slow"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Food Photography Feed */}
        <div className={`mb-20 transition-all duration-1000 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-3 mb-6">
              <Instagram className="w-10 h-10 text-purple-600" />
              <h2 className="text-4xl md:text-5xl font-bold">
                Food <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">Photography</span>
              </h2>
            </div>
            <p className="text-lg text-gray-600 mb-6">
              Follow my culinary adventures and restaurant discoveries
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-5xl mx-auto mb-8">
            {foodPhotos.map((post, index) => (
              <a
                key={post.id}
                href={socialLinks.instagramFood}
                target="_blank"
                rel="noopener noreferrer"
                className={`group transition-all duration-1000 transform ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <Card 
                  className="relative overflow-hidden rounded-2xl aspect-square border-2 border-purple-100 hover:border-purple-300 transition-all duration-500 transform hover:-translate-y-3 hover:scale-105 hover:rotate-2"
                  style={{
                    boxShadow: '0 10px 40px rgba(168, 85, 247, 0.15)'
                  }}
                >
                  <img
                    src={post.image}
                    alt="Food photography"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm p-2 rounded-full">
                      <Instagram className="w-5 h-5 text-purple-600" />
                    </div>
                  </div>
                </Card>
              </a>
            ))}
          </div>

          <div className="text-center">
            <a
              href={socialLinks.instagramFood}
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
                Follow @mariasfoodphotos
                <ExternalLink className="ml-3 w-5 h-5" />
              </Button>
            </a>
          </div>
        </div>

        {/* Content & Reels Feed */}
        <div className={`transition-all duration-1000 delay-500 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-3 mb-6">
              <Instagram className="w-10 h-10 text-purple-600" />
              <h2 className="text-4xl md:text-5xl font-bold">
                Reels and <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">Content</span>
              </h2>
            </div>
            <p className="text-lg text-gray-600 mb-6">
              Behind the scenes and social media insights
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-5xl mx-auto mb-8">
            {contentReels.map((post, index) => (
              <a
                key={post.id}
                href={socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className={`group transition-all duration-1000 transform ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <Card 
                  className="relative overflow-hidden rounded-2xl aspect-square border-2 border-purple-100 hover:border-purple-300 transition-all duration-500 transform hover:-translate-y-3 hover:scale-105 hover:-rotate-2"
                  style={{
                    boxShadow: '0 10px 40px rgba(168, 85, 247, 0.15)'
                  }}
                >
                  <img
                    src={post.image}
                    alt="Content reel"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm p-2 rounded-full">
                      <Instagram className="w-5 h-5 text-purple-600" />
                    </div>
                  </div>
                </Card>
              </a>
            ))}
          </div>

          <div className="text-center">
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
      </div>
    </section>
  );
};
