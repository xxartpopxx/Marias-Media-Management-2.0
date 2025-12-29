import { useEffect, useRef, useState } from 'react';
import { Target, Users, Heart } from 'lucide-react';

export const Mission = () => {
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

  const features = [
    {
      icon: Target,
      title: "Passion & Drive",
      description: "Dedicated to helping clients succeed with unwavering commitment"
    },
    {
      icon: Users,
      title: "Global Reach",
      description: "Serving clients from Boston to Barcelona, New York to Australia"
    },
    {
      icon: Heart,
      title: "Attention to Detail",
      description: "Understanding client needs to deliver personalized solutions"
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-pink-100 rounded-full filter blur-3xl opacity-20"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-100 rounded-full filter blur-3xl opacity-20"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-1000 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">Mission</span>
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Maria's Media Management is a business based out of Boston, Massachusetts but accommodates people from across the globe. We work with creative brands, businesses, and entrepreneurs who are looking to elevate their social media platforms. We are dedicated to helping our clients learn the ins and outs of their social media profiles and how they can expand their audiences.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="bg-gradient-to-br from-purple-100 to-pink-100 w-16 h-16 rounded-xl flex items-center justify-center mb-6 transform hover:rotate-6 transition-transform duration-300">
                  <Icon className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
