import { useEffect, useRef, useState } from 'react';
import { Check, Camera } from 'lucide-react';
import { pricingPlans } from '../mock';
import { Card } from './ui/card';
import { Button } from './ui/button';

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

  const handleRequestInfo = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const getAccountText = (accounts) => {
    const words = ['One', 'Two', 'Three', 'Four'];
    return words[accounts - 1] || accounts;
  };

  return (
    <section id="services" ref={sectionRef} className="py-32 bg-white relative overflow-hidden" aria-labelledby="services-heading">
      <div className="container mx-auto px-6 relative z-10">
        <div className={`text-center mb-24 transition-all duration-1000 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h2 id="services-heading" className="text-6xl md:text-7xl font-bold mb-8" style={{ letterSpacing: '-0.02em' }}>
            Social Media Management <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">Services</span>
          </h2>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16" role="list">
            {pricingPlans.map((plan, index) => (
              <Card
                key={index}
                className={`p-10 bg-gradient-to-br from-white to-purple-50 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-2 border-purple-100 hover:border-purple-300 rounded-3xl ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ 
                  transitionDelay: `${index * 100}ms`,
                  boxShadow: '0 10px 40px rgba(168, 85, 247, 0.1)'
                }}
                role="listitem"
              >
                <div className="text-center">
                  <h3 className="text-2xl font-bold mb-4 text-gray-800">
                    {getAccountText(plan.accounts)} Account{plan.accounts > 1 ? 's' : ''}
                  </h3>
                  <div className="mb-8">
                    <span className="text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
                      ${plan.price}
                    </span>
                    <span className="text-gray-500 text-lg block mt-2">per month</span>
                  </div>
                  <div className="space-y-4 mb-8 text-left">
                    <div className="flex items-start gap-3">
                      <div className="bg-green-100 rounded-full p-1 mt-0.5" aria-hidden="true">
                        <Check className="w-4 h-4 text-green-600" />
                      </div>
                      <span className="text-gray-700">Content creation and engagement support</span>
                    </div>
                  </div>
                  <Button
                    onClick={handleRequestInfo}
                    className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white py-6 font-semibold transition-all duration-500 transform hover:scale-105"
                    style={{
                      boxShadow: '0 8px 25px rgba(168, 85, 247, 0.3)'
                    }}
                    aria-label={`Inquire about ${getAccountText(plan.accounts)} Account plan at $${plan.price} per month`}
                  >
                    Inquire
                  </Button>
                </div>
              </Card>
            ))}
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
                    In addition to social media management packages, Maria also offers <span className="font-semibold text-purple-700">photo editing and brand photography for restaurants and businesses</span>. Please inquire directly to discuss these services.
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
