import { useEffect, useRef, useState } from 'react';
import { Star, ExternalLink } from 'lucide-react';
import { googleReviews, yelpReviews, socialLinks } from '../mock';
import { Card } from './ui/card';
import { Button } from './ui/button';

export const Reviews = () => {
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

  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <Star key={i} className={`w-5 h-5 ${i < rating ? 'fill-yellow-500 text-yellow-500' : 'text-gray-300'}`} />
    ));
  };

  return (
    <section ref={sectionRef} className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-purple-100 rounded-full filter blur-3xl opacity-20 animate-float"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-1000 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Client & Community <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">Reviews</span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            See what people are saying on Google and Yelp
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
          {/* Google Reviews */}
          <div className={`transition-all duration-1000 transform ${
            isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
          }`}>
            <Card 
              className="bg-white rounded-3xl p-8 border-2 border-blue-100 hover:border-blue-200 transition-all duration-500 transform hover:-translate-y-3 hover:rotate-1"
              style={{
                boxShadow: '0 10px 40px rgba(66, 133, 244, 0.15)'
              }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-blue-500 text-white px-4 py-2 rounded-full font-bold text-lg">
                  G
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800">Google Reviews</h3>
                  <div className="flex items-center gap-1">
                    {renderStars(5)}
                  </div>
                </div>
              </div>
              {googleReviews.map((review) => (
                <div key={review.id} className="mb-4">
                  <p className="text-gray-700 leading-relaxed italic mb-3">"{review.text}"</p>
                  <p className="text-sm text-gray-500">- {review.reviewer}</p>
                </div>
              ))}
              <a
                href={socialLinks.google}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  className="w-full mt-4 bg-blue-500 hover:bg-blue-600 text-white transition-all duration-300 transform hover:scale-105"
                >
                  View All Google Reviews
                  <ExternalLink className="ml-2 w-4 h-4" />
                </Button>
              </a>
            </Card>
          </div>

          {/* Yelp Reviews */}
          <div className={`transition-all duration-1000 delay-200 transform ${
            isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
          }`}>
            <Card 
              className="bg-white rounded-3xl p-8 border-2 border-red-100 hover:border-red-200 transition-all duration-500 transform hover:-translate-y-3 hover:-rotate-1"
              style={{
                boxShadow: '0 10px 40px rgba(220, 38, 38, 0.15)'
              }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-red-500 text-white px-4 py-2 rounded-full font-bold text-lg">
                  Y
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800">Yelp Reviews</h3>
                  <div className="flex items-center gap-1">
                    {renderStars(5)}
                  </div>
                </div>
              </div>
              {yelpReviews.map((review) => (
                <div key={review.id} className="mb-4">
                  <p className="text-gray-700 leading-relaxed italic mb-3">"{review.text}"</p>
                  <p className="text-sm text-gray-500">- {review.reviewer}</p>
                </div>
              ))}
              <a
                href={socialLinks.yelp}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  className="w-full mt-4 bg-red-500 hover:bg-red-600 text-white transition-all duration-300 transform hover:scale-105"
                >
                  View All Yelp Reviews
                  <ExternalLink className="ml-2 w-4 h-4" />
                </Button>
              </a>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
