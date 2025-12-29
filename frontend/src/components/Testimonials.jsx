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
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="testimonials" ref={sectionRef} className="py-20 bg-white relative overflow-hidden">
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-purple-100 rounded-full filter blur-3xl opacity-20"></div>
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-pink-100 rounded-full filter blur-3xl opacity-20"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className={`text-center mb-16 transition-all duration-1000 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            We Love Our <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">Clients!</span>
          </h2>
          <p className="text-xl text-gray-600">Here's what people have to say about Maria's Media Management</p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`transition-all duration-700 transform ${
                  index === currentIndex
                    ? 'opacity-100 scale-100 relative'
                    : 'opacity-0 scale-95 absolute inset-0 pointer-events-none'
                }`}
              >
                <Card className="bg-gradient-to-br from-white to-purple-50 p-8 md:p-12 shadow-2xl border-2 border-purple-100 hover:border-purple-200 transition-all duration-300">
                  <Quote className="w-12 h-12 text-purple-300 mb-6" />
                  <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed italic">
                    "{testimonial.text}"
                  </p>
                  <div className="flex items-center gap-4">
                    {testimonial.image && (
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-16 h-16 rounded-full object-cover border-4 border-purple-200"
                      />
                    )}
                    <div className="flex-1">
                      <h4 className="font-bold text-lg text-gray-800">{testimonial.name}</h4>
                      {testimonial.company && (
                        <p className="text-purple-600 text-sm">{testimonial.company}</p>
                      )}
                    </div>
                    {testimonial.instagram && (
                      <a
                        href={testimonial.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-purple-100 p-3 rounded-full hover:bg-purple-200 transition-colors duration-300"
                      >
                        <Instagram className="w-5 h-5 text-purple-600" />
                      </a>
                    )}
                  </div>
                </Card>
              </div>
            ))}
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`transition-all duration-300 rounded-full ${
                  index === currentIndex
                    ? 'bg-purple-600 w-8 h-3'
                    : 'bg-purple-200 w-3 h-3 hover:bg-purple-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
