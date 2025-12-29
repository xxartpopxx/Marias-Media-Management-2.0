import { useEffect, useRef, useState } from 'react';
import { Target, Heart, Zap } from 'lucide-react';

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
      icon: Heart,
      title: "Passion",
      description: "We bring heart to every project, campaign, and conversation."
    },
    {
      icon: Zap,
      title: "Strategy",
      description: "Data-driven insights meet creative storytelling for real growth."
    },
    {
      icon: Target,
      title: "Attention to Detail",
      description: "Every post, caption, and visual is crafted with intention."
    }
  ];

  return (
    <section ref={sectionRef} className="py-24 bg-gradient-to-b from-white to-purple-50 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-pink-100 rounded-full filter blur-3xl opacity-30"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-100 rounded-full filter blur-3xl opacity-30"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className={`text-center max-w-4xl mx-auto mb-16 transition-all duration-1000 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h2 className="text-5xl md:text-6xl font-bold mb-8">
            Our <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">Mission</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-6">
            Maria's Media Management is a Boston-based social media & digital branding studio supporting clients across the globe. We partner with creative brands, entrepreneurs, and organizations ready to elevate their online presence with intention and clarity.
          </p>
          <div className="my-10">
            <p className="text-2xl font-semibold text-purple-900 mb-3">What makes us different?</p>
            <p className="text-xl text-purple-700">Passion. Heart. Strategy. Attention to detail.</p>
          </div>
          <p className="text-lg text-gray-600 leading-relaxed">
            We take time to understand your story, your goals, and your audience — so we can build an authentic, sustainable presence that grows with you. From content strategy to research-driven insights, we empower our clients to truly understand their platforms and expand their reach with confidence.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className={`bg-white rounded-3xl p-10 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-purple-100 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ 
                  transitionDelay: `${index * 200}ms`,
                  boxShadow: '0 10px 40px rgba(168, 85, 247, 0.1), 0 0 0 1px rgba(168, 85, 247, 0.05)'
                }}
              >
                <div 
                  className="bg-gradient-to-br from-purple-100 to-pink-100 w-20 h-20 rounded-2xl flex items-center justify-center mb-6 transform hover:rotate-6 transition-transform duration-300"
                  style={{
                    boxShadow: '0 8px 20px rgba(168, 85, 247, 0.2)'
                  }}
                >
                  <Icon className="w-10 h-10 text-purple-600" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
