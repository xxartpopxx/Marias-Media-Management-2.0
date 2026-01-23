import { useEffect, useRef, useState } from 'react';
import { testimonials } from '../mock';
import { Instagram, Quote } from 'lucide-react';
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
          <div className="flex justify-center gap-3 mt-10" aria-label="Testimonial navigation">
            {testimonials.map((testimonial, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`transition-all duration-300 rounded-full ${
                  index === currentIndex
                    ? 'bg-gradient-to-r from-purple-600 to-pink-500 w-10 h-4'
                    : 'bg-purple-200 w-4 h-4 hover:bg-purple-300'
                }`}
                style={{
                  boxShadow: index === currentIndex ? '0 4px 15px rgba(168, 85, 247, 0.4)' : 'none'
                }}
                aria-current={index === currentIndex ? 'true' : undefined}
                aria-label={`Show testimonial ${index + 1} from ${testimonial.name}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
