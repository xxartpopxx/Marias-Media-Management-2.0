import { useEffect, useRef, useState } from 'react';
import { Instagram, ShoppingBag } from 'lucide-react';
import { socialLinks } from '../mock';

export const FindMaria = () => {
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

  const platforms = [
    {
      name: 'Etsy',
      handle: 'MariasMediaShop',
      icon: ShoppingBag,
      url: socialLinks.etsy,
      color: 'from-orange-500 to-yellow-400'
    },
    {
      name: 'Instagram',
      handle: '@mariasfoodphotos',
      icon: Instagram,
      url: socialLinks.instagramFood,
      color: 'from-purple-500 to-pink-500'
    },
    {
      name: 'Instagram',
      handle: '@maria.mongiardo',
      icon: Instagram,
      url: socialLinks.instagram,
      color: 'from-pink-500 to-purple-500'
    }
  ];

  return (
    <section ref={sectionRef} className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-purple-100 rounded-full filter blur-3xl opacity-20"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-1000 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h2 className="text-5xl md:text-6xl font-bold mb-8">
            Where Else You Can <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">Find Maria</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {platforms.map((platform, index) => {
            const Icon = platform.icon;
            return (
              <a
                key={index}
                href={platform.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`group transition-all duration-1000 transform ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div 
                  className="bg-white rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border-2 border-gray-100 hover:border-purple-200"
                  style={{
                    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.08)'
                  }}
                >
                  <div 
                    className={`bg-gradient-to-br ${platform.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transform group-hover:rotate-12 group-hover:scale-110 transition-all duration-300`}
                    style={{
                      boxShadow: '0 8px 25px rgba(168, 85, 247, 0.3)'
                    }}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-gray-800">{platform.name}</h3>
                  <p className="text-purple-600 font-medium">{platform.handle}</p>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

