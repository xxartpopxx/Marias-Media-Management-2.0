import { useEffect, useRef, useState } from 'react';
import { Check, Camera, Sparkles, Users, TrendingUp, MessageSquare } from 'lucide-react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { scrollToContact } from '../lib/scrollUtils';

export const Services = () => {
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

  const serviceFeatures = [
    {
      icon: Sparkles,
      title: "Content Creation",
      description: "Engaging posts, stories, and reels tailored to your brand voice and audience."
    },
    {
      icon: Users,
      title: "Community Engagement",
      description: "Building authentic connections with your followers through meaningful interactions."
    },
    {
      icon: TrendingUp,
      title: "Growth Strategy",
      description: "Data-driven approaches to expand your reach and increase brand awareness."
    },
    {
      icon: MessageSquare,
      title: "Brand Consistency",
      description: "Maintaining a cohesive visual identity and messaging across all platforms."
    }
  ];

  return (
    <section id="services" ref={sectionRef} className="py-32 bg-white relative overflow-hidden" aria-labelledby="services-heading">
      <div className="container mx-auto px-6 relative z-10">
        <div className={`text-center mb-24 transition-all duration-1000 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h2 id="services-heading" className="text-6xl md:text-7xl font-bold mb-8" style={{ letterSpacing: '-0.02em' }}>
            Social Media Management <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Elevate your social media presence with personalized management tailored to your brand's unique needs and goals.
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          {/* Service Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16" role="list">
            {serviceFeatures.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <Card
                  key={index}
                  className={`p-8 bg-gradient-to-br from-white to-purple-50 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-2 border-purple-100 hover:border-purple-300 rounded-3xl ${
                    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                  }`}
                  style={{ 
                    transitionDelay: `${index * 100}ms`,
                    boxShadow: '0 10px 40px rgba(168, 85, 247, 0.1)'
                  }}
                  role="listitem"
                >
                  <div className="text-center">
                    <div className="bg-gradient-to-br from-purple-500 to-pink-500 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6" aria-hidden="true">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-gray-800">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </Card>
              );
            })}
          </div>

          {/* What's Included Section */}
          <div className={`max-w-4xl mx-auto mb-16 transition-all duration-1000 delay-500 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <Card 
              className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-10 border-2 border-purple-200"
              style={{
                boxShadow: '0 10px 40px rgba(168, 85, 247, 0.15)'
              }}
            >
              <h3 className="text-2xl font-bold text-center mb-8 text-gray-800">What's Included</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  "Custom content creation for your platforms",
                  "Regular posting schedule management",
                  "Audience engagement and community building",
                  "Monthly performance reports and insights",
                  "Brand voice development and consistency",
                  "Strategic hashtag research and optimization"
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="bg-green-100 rounded-full p-1 mt-0.5 flex-shrink-0" aria-hidden="true">
                      <Check className="w-4 h-4 text-green-600" />
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
              <div className="text-center mt-10">
                <Button
                  onClick={scrollToContact}
                  className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-10 py-6 font-semibold transition-all duration-500 transform hover:scale-105 text-lg"
                  style={{
                    boxShadow: '0 8px 25px rgba(168, 85, 247, 0.3)'
                  }}
                  aria-label="Get a personalized quote for social media management services"
                >
                  Get a Personalized Quote
                </Button>
              </div>
            </Card>
          </div>

          {/* Additional Services Note */}
          <div className={`max-w-4xl mx-auto transition-all duration-1000 delay-700 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <Card 
              className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-10 border-2 border-purple-200"
              style={{
                boxShadow: '0 10px 40px rgba(168, 85, 247, 0.15)'
              }}
            >
              <div className="flex items-start gap-6">
                <div className="bg-gradient-to-br from-purple-500 to-pink-500 w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0" aria-hidden="true">
                  <Camera className="w-7 h-7 text-white" />
                </div>
                <div className="flex-1">
                  <p className="text-xl text-gray-700 leading-relaxed">
                    In addition to social media management, Maria also offers <span className="font-semibold text-purple-700">photo editing and brand photography for restaurants and businesses</span>. Please inquire directly to discuss these services.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
