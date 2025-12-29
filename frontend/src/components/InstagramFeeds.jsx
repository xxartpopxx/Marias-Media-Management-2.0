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

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Placeholder - To be replaced with actual Instagram feed widget
  const foodPhotos = [
    { id: 1, image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80" },
    { id: 2, image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80" },
    { id: 3, image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800&q=80" },
    { id: 4, image: "https://images.unsplash.com/photo-1551218808-94e220e084d2?w=800&q=80" },
    { id: 5, image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&q=80" },
    { id: 6, image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&q=80" },
    { id: 7, image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=800&q=80" },
    { id: 8, image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=800&q=80" },
    { id: 9, image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=800&q=80" }
  ];

  const contentReels = [
    { id: 1, image: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=800&q=80" },
    { id: 2, image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80" },
    { id: 3, image: "https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?w=800&q=80" },
    { id: 4, image: "https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=800&q=80" },
    { id: 5, image: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=800&q=80" },
    { id: 6, image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80" },
    { id: 7, image: "https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?w=800&q=80" },
    { id: 8, image: "https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=800&q=80" },
    { id: 9, image: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=800&q=80" }
  ];

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
        {/* Food Photography Feed */}
        <div className={`mb-24 transition-all duration-1000 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="text-center max-w-4xl mx-auto mb-12">
            <div className="inline-flex items-center gap-3 mb-6">
              <Instagram className="w-10 h-10 text-purple-600" />
              <h2 className="text-4xl md:text-5xl font-bold">
                Food <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">Photography</span>
              </h2>
            </div>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Maria works with restaurants and food businesses to create elevated menu and brand photography.
            </p>
            <p className="text-gray-600 mb-6">
              Follow along for dining experiences, food stories, and honest reviews.
            </p>
          </div>

          {/* Instagram Feed Grid - Replace with actual feed widget */}
          <div className="grid grid-cols-3 gap-4 max-w-5xl mx-auto mb-8">
            {foodPhotos.map((post, index) => (
              <a
                key={post.id}
                href={socialLinks.instagramFood}
                target="_blank"
                rel="noopener noreferrer"
                className={`group transition-all duration-1000 transform ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                <Card 
                  className="relative overflow-hidden rounded-2xl aspect-square border-2 border-purple-100 hover:border-purple-300 transition-all duration-500 transform hover:-translate-y-4 hover:scale-105 hover:rotate-2"
                  style={{
                    boxShadow: '0 10px 40px rgba(168, 85, 247, 0.15)',
                    transformStyle: 'preserve-3d'
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

          <div className="text-center space-y-4">
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
            <div>
              <Button
                size="lg"
                variant="outline"
                onClick={scrollToContact}
                className="border-2 border-purple-500 text-purple-600 hover:bg-purple-50 px-10 py-6 text-lg font-semibold transition-all duration-300 transform hover:scale-105"
              >
                <Camera className="mr-2 w-5 h-5" />
                Inquire About Photography
              </Button>
            </div>
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
                Social Media & <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">Branding</span>
              </h2>
            </div>
            <p className="text-lg text-gray-600 mb-6">
              Behind the scenes moments, creativity, storytelling, and social media tips.
            </p>
          </div>

          {/* Instagram Feed Grid - Replace with actual feed widget */}
          <div className="grid grid-cols-3 gap-4 max-w-5xl mx-auto mb-8">
            {contentReels.map((post, index) => (
              <a
                key={post.id}
                href={socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className={`group transition-all duration-1000 transform ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                <Card 
                  className="relative overflow-hidden rounded-2xl aspect-square border-2 border-purple-100 hover:border-purple-300 transition-all duration-500 transform hover:-translate-y-4 hover:scale-105 hover:-rotate-2"
                  style={{
                    boxShadow: '0 10px 40px rgba(168, 85, 247, 0.15)',
                    transformStyle: 'preserve-3d'
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
                style={
                  boxShadow: '0 15px 50px rgba(168, 85, 247, 0.4)'
                }}
              >
                <Instagram className="mr-3 w-5 h-5" />
                Follow @maria.mongiardo
                <ExternalLink className="ml-3 w-5 h-5" />
              </Button>
            </a>
          </div>

          {/* Instagram Feed Integration Instructions */}
          <div className="max-w-2xl mx-auto mt-12">
            <Card className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6 border-2 border-blue-200">
              <p className="text-sm text-gray-700 text-center">
                <span className="font-semibold text-blue-700">Note:</span> To display live Instagram feeds that automatically update, please connect via Instagram's feed widget (SnapWidget, Elfsight, or similar) in your site settings. These placeholder images will be replaced with your actual posts.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
