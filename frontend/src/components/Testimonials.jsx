import { useEffect, useRef, useState } from 'react';
import { testimonials, facebookReviewsLink, googleReviewsLink } from '../mock';
import { Instagram, Quote, ThumbsUp, ExternalLink } from 'lucide-react';
import { Card } from './ui/card';

export const Testimonials = () => {
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
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="testimonials" ref={sectionRef} className="py-24 bg-gradient-to-b from-white to-purple-50 relative overflow-hidden" aria-labelledby="testimonials-heading">
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-purple-100 rounded-full filter blur-3xl opacity-20" aria-hidden="true"></div>
      <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-pink-100 rounded-full filter blur-3xl opacity-20" aria-hidden="true"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className={`text-center mb-20 transition-all duration-1000 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h2 id="testimonials-heading" className="text-5xl md:text-6xl font-bold mb-6">
            We Love Our <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">Clients</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Here's what people have to say about working with Maria's Media Management — real relationships, real growth, real results.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="relative min-h-[400px]" role="region" aria-live="polite" aria-atomic="true">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`transition-all duration-700 transform ${
                  index === currentIndex
                    ? 'opacity-100 scale-100 relative'
                    : 'opacity-0 scale-95 absolute inset-0 pointer-events-none'
                }`}
                aria-hidden={index !== currentIndex}
              >
                <Card 
                  className="bg-white rounded-3xl p-10 md:p-14 border-2 border-purple-100 hover:border-purple-200 transition-all duration-300"
                  style={{
                    boxShadow: '0 20px 60px rgba(168, 85, 247, 0.15)'
                  }}
                >
                  {/* Source Badge */}
                  {testimonial.source === 'facebook' && (
                    <div className="flex items-center gap-2 mb-4">
                      <div className="bg-blue-600 rounded-full p-1.5" aria-hidden="true">
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                        </svg>
                      </div>
                      {testimonial.recommends && (
                        <span className="flex items-center gap-1 text-green-600 font-medium text-sm">
                          <ThumbsUp className="w-3 h-3" />
                          Recommends
                        </span>
                      )}
                    </div>
                  )}
                  
                  <Quote className="w-14 h-14 text-purple-200 mb-6" aria-hidden="true" />
                  <blockquote>
                    <p className="text-xl md:text-2xl text-gray-700 mb-10 leading-relaxed italic font-light">
                      "{testimonial.text}"
                    </p>
                  </blockquote>
                  <div className="flex items-center gap-5">
                    {testimonial.image && (
                      <img
                        src={testimonial.image}
                        alt={`${testimonial.name} - Client testimonial`}
                        width="80"
                        height="80"
                        loading="lazy"
                        decoding="async"
                        className="w-20 h-20 rounded-full object-cover border-4 border-purple-100"
                        style={{
                          boxShadow: '0 8px 20px rgba(168, 85, 247, 0.2)'
                        }}
                      />
                    )}
                    <div className="flex-1">
                      <cite className="not-italic">
                        <span className="font-bold text-xl text-gray-800 block">{testimonial.name}</span>
                        {testimonial.company && (
                          <span className="text-purple-600 text-base">{testimonial.company}</span>
                        )}
                        {testimonial.source === 'facebook' && (
                          <span className="text-blue-600 text-sm block">Facebook Review</span>
                        )}
                      </cite>
                    </div>
                    {testimonial.instagram && (
                      <a
                        href={testimonial.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gradient-to-br from-purple-100 to-pink-100 p-4 rounded-full hover:from-purple-200 hover:to-pink-200 transition-all duration-300 transform hover:scale-110"
                        style={{
                          boxShadow: '0 4px 15px rgba(168, 85, 247, 0.2)'
                        }}
                        aria-label={`Follow ${testimonial.name} on Instagram - Opens in new tab`}
                      >
                        <Instagram className="w-6 h-6 text-purple-600" aria-hidden="true" />
                      </a>
                    )}
                  </div>
                </Card>
              </div>
            ))}
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-10 flex-wrap" aria-label="Testimonial navigation">
            {testimonials.map((testimonial, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`transition-all duration-300 rounded-full ${
                  index === currentIndex
                    ? 'bg-gradient-to-r from-purple-600 to-pink-500 w-8 h-3'
                    : 'bg-purple-200 w-3 h-3 hover:bg-purple-300'
                }`}
                style={{
                  boxShadow: index === currentIndex ? '0 4px 15px rgba(168, 85, 247, 0.4)' : 'none'
                }}
                aria-current={index === currentIndex ? 'true' : undefined}
                aria-label={`Show testimonial ${index + 1} from ${testimonial.name}`}
              />
            ))}
          </div>

          {/* Review Platform Links */}
          <div className={`flex flex-wrap justify-center gap-4 mt-12 transition-all duration-1000 delay-300 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <a
              href={facebookReviewsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-full font-medium text-sm transition-all duration-300 transform hover:scale-105"
              style={{ boxShadow: '0 8px 25px rgba(59, 130, 246, 0.3)' }}
              aria-label="View all reviews on Facebook - Opens in new tab"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
              View Facebook Reviews
              <ExternalLink className="w-3 h-3" aria-hidden="true" />
            </a>
            <a
              href={googleReviewsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-white hover:bg-gray-50 text-gray-800 border-2 border-gray-200 hover:border-gray-300 px-5 py-2.5 rounded-full font-medium text-sm transition-all duration-300 transform hover:scale-105"
              style={{ boxShadow: '0 8px 25px rgba(0, 0, 0, 0.1)' }}
              aria-label="View reviews on Google - Opens in new tab"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              View Google Reviews
              <ExternalLink className="w-3 h-3" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
