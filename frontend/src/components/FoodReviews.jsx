import { useEffect, useRef, useState } from 'react';
import { ExternalLink } from 'lucide-react';
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
      logo: 'https://customer-assets.emergentagent.com/job_a9efaa07-0c20-4f2e-84b4-40005799affc/artifacts/31njkd8u_Google-Review-Logo.png',
      color: 'from-blue-500 to-blue-600',
      hoverColor: 'hover:from-blue-600 hover:to-blue-700'
    },
    {
      name: 'Yelp Reviews',
      url: socialLinks.yelp,
      logo: 'https://upload.wikimedia.org/wikipedia/commons/a/ad/Yelp_Logo.svg',
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
    <section ref={sectionRef} className="py-32 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className={`text-center max-w-3xl mx-auto mb-20 transition-all duration-1000 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h2 className="text-5xl md:text-6xl font-bold mb-10" style={{ letterSpacing: '-0.02em' }}>
            Where I Share <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">Food Reviews</span>
          </h2>
          <p className="text-xl text-gray-700 leading-relaxed mb-6">
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
                className={`bg-gradient-to-br ${link.color} ${link.hoverColor} text-white rounded-3xl p-10 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer`}
                style={{
                  boxShadow: '0 10px 40px rgba(168, 85, 247, 0.2)'
                }}
              >
                <div className="text-center">
                  {link.logo ? (
                    <div className="bg-white rounded-2xl p-5 mb-6 inline-block">
                      <img 
                        src={link.logo} 
                        alt={link.name}
                        className="h-14 w-auto mx-auto"
                      />
                    </div>
                  ) : (
                    <div className="text-6xl mb-6">{link.icon}</div>
                  )}
                  <h3 className="text-xl font-bold mb-4">{link.name}</h3>
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
