import { useEffect, useRef, useState } from 'react';
import { ExternalLink } from 'lucide-react';
import { etsyProducts } from '../mock';
import { Button } from './ui/button';
import { Card } from './ui/card';

export const Shop = () => {
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

  return (
    <section id="shop" ref={sectionRef} className="py-24 bg-gradient-to-br from-purple-50 via-pink-50 to-purple-50 relative overflow-hidden" aria-labelledby="shop-heading">
      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-purple-200 rounded-full filter blur-3xl opacity-20 animate-pulse-slow" aria-hidden="true"></div>
      <div className="absolute bottom-1/4 left-0 w-[600px] h-[600px] bg-pink-200 rounded-full filter blur-3xl opacity-20 animate-pulse-slow" style={{ animationDelay: '2s' }} aria-hidden="true"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className={`text-center max-w-4xl mx-auto mb-16 transition-all duration-1000 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h2 id="shop-heading" className="text-5xl md:text-6xl font-bold mb-8">
            Shop Digital Products and <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">Services</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {etsyProducts.map((product, index) => (
            <a
              key={product.id}
              href={product.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`group transition-all duration-1000 transform ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
              aria-label={`${product.title} - View on Etsy - Opens in new tab`}
            >
              <Card
                className="bg-white rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 hover:rotate-1 border-2 border-purple-100 hover:border-purple-200 h-full"
                style={{
                  boxShadow: '0 10px 40px rgba(168, 85, 247, 0.15)',
                  perspective: '1000px'
                }}
              >
                <div className="relative overflow-hidden h-64 bg-gradient-to-br from-purple-100 to-pink-100">
                  <img
                    src={product.image}
                    alt={product.title}
                    width="320"
                    height="256"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3"
                    style={{
                      transform: 'translateZ(0)',
                      backfaceVisibility: 'hidden'
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" aria-hidden="true"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold mb-4 text-gray-800 leading-tight group-hover:text-purple-600 transition-colors duration-300">
                    {product.title}
                  </h3>
                  <Button
                    className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white transition-all duration-300 transform group-hover:scale-105"
                    tabIndex={-1}
                  >
                    View on Etsy
                    <ExternalLink className="ml-2 w-4 h-4" aria-hidden="true" />
                  </Button>
                </div>
              </Card>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
