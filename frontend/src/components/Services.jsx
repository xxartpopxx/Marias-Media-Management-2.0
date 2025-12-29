import { useEffect, useRef, useState } from 'react';
import { Check } from 'lucide-react';
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

  return (
    <section id="services" ref={sectionRef} className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className={`text-center mb-20 transition-all duration-1000 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h2 className="text-5xl md:text-6xl font-bold mb-8">
            Social Media Management <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">Services</span>
          </h2>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {pricingPlans.map((plan, index) => (
              <Card
                key={index}
                className={`p-8 bg-gradient-to-br from-white to-purple-50 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border-2 border-purple-100 hover:border-purple-300 rounded-3xl ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ 
                  transitionDelay: `${index * 100}ms`,
                  boxShadow: '0 10px 40px rgba(168, 85, 247, 0.1)'
                }}
              >
                <div className="text-center">
                  <h3 className="text-2xl font-bold mb-3 text-gray-800">
                    {plan.accounts === 1 ? 'One Account' : `${plan.accounts === 2 ? 'Two' : plan.accounts === 3 ? 'Three' : 'Four'} Accounts`}
                  </h3>
                  <div className="mb-6">
                    <span className="text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
                      ${plan.price}
                    </span>
                    <span className="text-gray-500 text-lg block mt-1">per month</span>
                  </div>
                  <div className="space-y-4 mb-8 text-left">
                    <div className="flex items-start gap-3">
                      <div className="bg-green-100 rounded-full p-1 mt-0.5">
                        <Check className="w-4 h-4 text-green-600" />
                      </div>
                      <span className="text-gray-700">Content creation and engagement support</span>
                    </div>
                  </div>
                  <Button
                    onClick={handleRequestInfo}
                    className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white py-6 font-semibold transition-all duration-300 transform hover:scale-105"
                    style={{
                      boxShadow: '0 8px 25px rgba(168, 85, 247, 0.3)'
                    }}
                  >
                    Get Started
                  </Button>
                </div>
              </Card>
            ))}
          </div>

          <div className={`text-center text-lg text-gray-600 transition-all duration-1000 delay-500 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <p>Every client receives a complimentary social media guide.</p>
          </div>
        </div>
      </div>
    </section>
  );
};
