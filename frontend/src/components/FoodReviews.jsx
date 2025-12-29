import { useEffect, useRef, useState } from 'react';
import { ExternalLink, Star } from 'lucide-react';
import { socialLinks } from '../mock';
import { Card } from './ui/card';

export const FoodReviews = () => {
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

  const reviewLinks = [
    {
      name: 'Google Reviews',
      url: socialLinks.google,
      icon: 'G',
      color: 'from-blue-500 to-blue-600',
      hoverColor: 'hover:from-blue-600 hover:to-blue-700'
    },
    {
      name: 'Yelp Reviews',
      url: socialLinks.yelp,
      icon: 'Y',
      color: 'from-red-500 to-red-600',
      hoverColor: 'hover:from-red-600 hover:to-red-700'
    },
    {
      name: 'Instagram: @mariasfoodphotos',
      url: socialLinks.instagramFood,
      icon: '📸',
      color: 'from-purple-500 to-pink-500',
      hoverColor: 'hover:from-purple-600 hover:to-pink-600'
    }
  ];

  return (
    <section ref={sectionRef} className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-purple-100 rounded-full filter blur-3xl opacity-20 animate-float"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-1000 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h2 className="text-5xl md:text-6xl font-bold mb-8">
            Where I Share <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">Food Reviews</span>
          </h2>
          <p className="text-xl text-gray-700 leading-relaxed mb-4">
            I love exploring restaurants and sharing thoughtful food reviews and photography.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed">
            You can read my real reviews and food content here:
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {reviewLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`transition-all duration-1000 transform ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <Card
                className={`bg-gradient-to-br ${link.color} ${link.hoverColor} text-white rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:scale-105 cursor-pointer`}
                style={{
                  boxShadow: '0 10px 40px rgba(168, 85, 247, 0.2)'
                }}
              >
                <div className="text-center">
                  <div className="text-5xl mb-4">{link.icon}</div>
                  <h3 className="text-xl font-bold mb-3">{link.name}</h3>
                  <ExternalLink className="w-6 h-6 mx-auto opacity-80" />
                </div>
              </Card>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
