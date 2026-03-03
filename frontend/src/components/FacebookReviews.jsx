import { useEffect, useRef, useState } from 'react';
import { facebookReviews, facebookReviewsLink, googleReviewsLink } from '../mock';
import { Quote, ThumbsUp, ExternalLink } from 'lucide-react';
import { Card } from './ui/card';

export const FacebookReviews = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
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

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % facebookReviews.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-gradient-to-b from-purple-50 to-white relative overflow-hidden" aria-labelledby="facebook-reviews-heading">
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-blue-100 rounded-full filter blur-3xl opacity-20" aria-hidden="true"></div>
      <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-purple-100 rounded-full filter blur-3xl opacity-20" aria-hidden="true"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className={`text-center mb-16 transition-all duration-1000 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h2 id="facebook-reviews-heading" className="text-5xl md:text-6xl font-bold mb-6">
            Client <span className="bg-gradient-to-r from-blue-600 to-purple-500 bg-clip-text text-transparent">Reviews</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See what our website clients are saying about their experience working with Maria's Media Management.
          </p>
        </div>

        {/* Reviews Carousel */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="relative min-h-[300px]" role="region" aria-live="polite" aria-atomic="true">
            {facebookReviews.map((review, index) => (
              <div
                key={review.id}
                className={`transition-all duration-700 transform ${
                  index === currentIndex
                    ? 'opacity-100 scale-100 relative'
                    : 'opacity-0 scale-95 absolute inset-0 pointer-events-none'
                }`}
                aria-hidden={index !== currentIndex}
              >
                <Card 
                  className="bg-white rounded-3xl p-8 md:p-12 border-2 border-blue-100 hover:border-blue-200 transition-all duration-300"
                  style={{
                    boxShadow: '0 20px 60px rgba(59, 130, 246, 0.15)'
                  }}
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="bg-blue-600 rounded-full p-2" aria-hidden="true">
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                      </svg>
                    </div>
                    {review.recommends && (
                      <span className="flex items-center gap-1 text-green-600 font-medium">
                        <ThumbsUp className="w-4 h-4" />
                        Recommends
                      </span>
                    )}
                  </div>
                  <Quote className="w-12 h-12 text-blue-200 mb-4" aria-hidden="true" />
                  <blockquote>
                    <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed italic font-light">
                      "{review.text}"
                    </p>
                  </blockquote>
                  <div className="flex items-center justify-between">
                    <cite className="not-italic">
                      <span className="font-bold text-xl text-gray-800 block">{review.name}</span>
                      <span className="text-blue-600 text-sm">Facebook Review</span>
                    </cite>
                  </div>
                </Card>
              </div>
            ))}
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-3 mt-8" aria-label="Review navigation">
            {facebookReviews.map((review, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`transition-all duration-300 rounded-full ${
                  index === currentIndex
                    ? 'bg-gradient-to-r from-blue-600 to-purple-500 w-10 h-4'
                    : 'bg-blue-200 w-4 h-4 hover:bg-blue-300'
                }`}
                style={{
                  boxShadow: index === currentIndex ? '0 4px 15px rgba(59, 130, 246, 0.4)' : 'none'
                }}
                aria-current={index === currentIndex ? 'true' : undefined}
                aria-label={`Show review ${index + 1} from ${review.name}`}
              />
            ))}
          </div>
        </div>

        {/* Review Platform Links */}
        <div className={`flex flex-wrap justify-center gap-4 transition-all duration-1000 delay-300 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <a
            href={facebookReviewsLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
            style={{ boxShadow: '0 8px 25px rgba(59, 130, 246, 0.3)' }}
            aria-label="View all reviews on Facebook - Opens in new tab"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
            View All Facebook Reviews
            <ExternalLink className="w-4 h-4" aria-hidden="true" />
          </a>
          <a
            href={googleReviewsLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-white hover:bg-gray-50 text-gray-800 border-2 border-gray-200 hover:border-gray-300 px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
            style={{ boxShadow: '0 8px 25px rgba(0, 0, 0, 0.1)' }}
            aria-label="View reviews on Google - Opens in new tab"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            View Google Reviews
            <ExternalLink className="w-4 h-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
};
