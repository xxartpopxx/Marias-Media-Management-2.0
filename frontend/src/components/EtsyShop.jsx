import { useEffect, useRef, useState } from 'react';
import { ExternalLink, Star } from 'lucide-react';
import { etsyProducts } from '../mock';
import { Button } from './ui/button';
import { Card } from './ui/card';

export const EtsyShop = () => {
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
    <section id="etsy-shop" ref={sectionRef} className="py-24 bg-gradient-to-br from-purple-50 via-pink-50 to-purple-50 relative overflow-hidden">
      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-purple-200 rounded-full filter blur-3xl opacity-20 animate-pulse-slow"></div>
      <div className="absolute bottom-1/4 left-0 w-[600px] h-[600px] bg-pink-200 rounded-full filter blur-3xl opacity-20 animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className={`text-center max-w-4xl mx-auto mb-16 transition-all duration-1000 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Shop <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">Maria's Digital Products</span>
          </h2>
          <p className="text-xl text-purple-600 mb-8 flex items-center justify-center gap-2">
            Discover professional tools and resources on Etsy 🎨
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Elevate your brand with our curated collection of digital products, templates, and professional photo editing services — all designed to help you shine online.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto mb-12">
          {etsyProducts.map((product, index) => (
            <Card
              key={product.id}
              className={`bg-white rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 hover:rotate-1 border-2 border-purple-100 hover:border-purple-200 group ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{ 
                transitionDelay: `${index * 100}ms`,
                boxShadow: '0 10px 40px rgba(168, 85, 247, 0.15)',
                perspective: '1000px'
              }}
            >
              <div className="relative overflow-hidden h-64 bg-gradient-to-br from-purple-100 to-pink-100">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3"
                  style={{
                    transform: 'translateZ(0)',
                    backfaceVisibility: 'hidden'
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-gray-800 leading-tight group-hover:text-purple-600 transition-colors duration-300">{product.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm mb-4">{product.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
                    ${product.price}
                  </span>
                  <div className="flex items-center gap-1 text-yellow-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className={`text-center transition-all duration-1000 delay-500 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <a
            href="https://www.etsy.com/shop/MariasMediaShop?ref=seller-platform-mcnav"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-12 py-7 text-xl font-semibold transition-all duration-300 transform hover:scale-110 hover:-translate-y-2"
              style={{
                boxShadow: '0 15px 50px rgba(168, 85, 247, 0.4)'
              }}
            >
              ✨ Visit Full Etsy Shop
              <ExternalLink className="ml-3 w-6 h-6" />
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};
