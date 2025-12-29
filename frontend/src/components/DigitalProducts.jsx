import { useEffect, useRef, useState } from 'react';
import { Camera, FileText, Lightbulb, Download, ExternalLink } from 'lucide-react';
import { digitalProducts } from '../mock';
import { Button } from './ui/button';
import { Card } from './ui/card';

const iconMap = {
  Camera: Camera,
  FileText: FileText,
  Lightbulb: Lightbulb,
  Download: Download
};

export const DigitalProducts = () => {
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
    <section id="digital-products" ref={sectionRef} className="py-24 bg-gradient-to-br from-purple-50 via-pink-50 to-purple-50 relative overflow-hidden">
      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-purple-200 rounded-full filter blur-3xl opacity-20"></div>
      <div className="absolute bottom-1/4 left-0 w-[600px] h-[600px] bg-pink-200 rounded-full filter blur-3xl opacity-20"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className={`text-center max-w-4xl mx-auto mb-16 transition-all duration-1000 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Digital Products & <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">Photo Editing Services</span>
          </h2>
          <p className="text-xl text-purple-600 mb-8 flex items-center justify-center gap-2">
            Inspired by the creativity of Maria's Media Shop on Etsy 🎨
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            In addition to social media management, Maria offers a curated collection of digital tools and photo editing services designed to help you elevate your brand visuals. Whether you're upgrading your content, refreshing your media kit, or transforming your photos — this is your creative studio, online.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto mb-12">
          {digitalProducts.map((product, index) => {
            const Icon = iconMap[product.icon];
            return (
              <Card
                key={product.id}
                className={`bg-white rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border-2 border-purple-100 hover:border-purple-200 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ 
                  transitionDelay: `${index * 100}ms`,
                  boxShadow: '0 10px 40px rgba(168, 85, 247, 0.15)'
                }}
              >
                <div 
                  className="bg-gradient-to-br from-purple-500 to-pink-500 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transform hover:rotate-12 transition-transform duration-300"
                  style={{
                    boxShadow: '0 8px 25px rgba(168, 85, 247, 0.4)'
                  }}
                >
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-800 leading-tight">{product.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">{product.description}</p>
              </Card>
            );
          })}
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
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-12 py-7 text-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:-translate-y-1"
              style={{
                boxShadow: '0 15px 50px rgba(168, 85, 247, 0.4)'
              }}
            >
              ✨ Visit the Digital Shop
              <ExternalLink className="ml-3 w-6 h-6" />
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};
