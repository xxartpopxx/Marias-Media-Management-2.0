import { useEffect, useRef, useState } from 'react';
import { Instagram, ExternalLink } from 'lucide-react';
import { socialLinks } from '../mock';
import { Card } from './ui/card';
import { Button } from './ui/button';

export const InstagramFeed = () => {
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

  // Placeholder for Instagram posts - in production, you'd fetch from Instagram API
  const instagramPosts = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80",
      caption: "Exploring Boston's best restaurants 🍽️"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80",
      caption: "Weekend brunch vibes ☕"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800&q=80",
      caption: "Foodie adventures continue 🌮"
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1551218808-94e220e084d2?w=800&q=80",
      caption: "Date night recommendations 🍷"
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&q=80",
      caption: "Must-try pizza spot 🍕"
    },
    {
      id: 6,
      image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&q=80",
      caption: "Sweet treats and good eats 🍰"
    }
  ];

  return (
    <section ref={sectionRef} className="py-24 bg-gradient-to-b from-purple-50 to-white relative overflow-hidden">
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-pink-100 rounded-full filter blur-3xl opacity-20 animate-pulse-slow"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-1000 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="inline-flex items-center gap-3 mb-6">
            <Instagram className="w-12 h-12 text-purple-600" />
            <h2 className="text-5xl md:text-6xl font-bold">
              Foodie <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">Adventures</span>
            </h2>
          </div>
          <p className="text-xl text-gray-600 leading-relaxed">
            Follow Maria's culinary journey and restaurant discoveries on Instagram
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-6xl mx-auto mb-12">
          {instagramPosts.map((post, index) => (
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
                className="relative overflow-hidden rounded-2xl aspect-square border-2 border-purple-100 hover:border-purple-300 transition-all duration-500 transform hover:-translate-y-3 hover:scale-105 hover:rotate-2"
                style={{
                  boxShadow: '0 10px 40px rgba(168, 85, 247, 0.15)'
                }}
              >
                <img
                  src={post.image}
                  alt={post.caption}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <p className="text-white text-sm font-medium">{post.caption}</p>
                  </div>
                </div>
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Instagram className="w-5 h-5 text-purple-600" />
                </div>
              </Card>
            </a>
          ))}
        </div>

        <div className={`text-center transition-all duration-1000 delay-500 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <a
            href={socialLinks.instagram}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 hover:from-purple-700 hover:via-pink-700 hover:to-orange-600 text-white px-12 py-7 text-xl font-semibold transition-all duration-300 transform hover:scale-110 hover:-translate-y-2"
              style={{
                boxShadow: '0 15px 50px rgba(168, 85, 247, 0.4)'
              }}
            >
              <Instagram className="mr-3 w-6 h-6" />
              Follow @maria.mongiardo
              <ExternalLink className="ml-3 w-6 h-6" />
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};
