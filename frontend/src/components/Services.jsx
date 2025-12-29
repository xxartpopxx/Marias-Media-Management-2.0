import { useEffect, useRef, useState } from 'react';
import { Check } from 'lucide-react';
import { weeklyPricing, monthlyPricing } from '../mock';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';

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
    window.location.href = 'mailto:mariamongiardo15@gmail.com?subject=Info%20Request%20for%20Social%20Media%20Management%20Services';
  };

  return (
    <section id="services" ref={sectionRef} className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className={`text-center mb-20 transition-all duration-1000 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Our <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            We offer content creation, engagement strategy, audience growth support, website and newsletter guidance, influencer/client outreach — plus a complimentary social media guide when you hire Maria's Media Management.
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          <Tabs defaultValue="monthly" className="w-full">
            <TabsList 
              className="grid w-full max-w-md mx-auto grid-cols-2 mb-16 bg-purple-50 shadow-lg p-2 rounded-2xl border border-purple-100"
              style={{
                boxShadow: '0 8px 30px rgba(168, 85, 247, 0.15)'
              }}
            >
              <TabsTrigger 
                value="weekly" 
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-pink-500 data-[state=active]:text-white rounded-xl transition-all duration-300 text-base font-semibold py-3"
              >
                One Week
              </TabsTrigger>
              <TabsTrigger 
                value="monthly" 
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-pink-500 data-[state=active]:text-white rounded-xl transition-all duration-300 text-base font-semibold py-3"
              >
                One Month
              </TabsTrigger>
            </TabsList>

            <TabsContent value="weekly">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {weeklyPricing.map((plan, index) => (
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
                      <h3 className="text-2xl font-bold mb-3 text-gray-800">{plan.accounts} Account{plan.accounts > 1 ? 's' : ''}</h3>
                      <div className="mb-8">
                        <span className="text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
                          ${plan.price}
                        </span>
                        <span className="text-gray-500 text-lg">/week</span>
                      </div>
                      <div className="space-y-4 mb-8 text-left">
                        <div className="flex items-center gap-3">
                          <div className="bg-green-100 rounded-full p-1">
                            <Check className="w-4 h-4 text-green-600" />
                          </div>
                          <span className="text-gray-700">Daily Content Creation</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="bg-green-100 rounded-full p-1">
                            <Check className="w-4 h-4 text-green-600" />
                          </div>
                          <span className="text-gray-700">Engagement Services</span>
                        </div>
                      </div>
                      <Button
                        onClick={handleRequestInfo}
                        className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white py-6 font-semibold transition-all duration-300 transform hover:scale-105"
                        style={{
                          boxShadow: '0 8px 25px rgba(168, 85, 247, 0.3)'
                        }}
                      >
                        Request Info
                      </Button>
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="monthly">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {monthlyPricing.map((plan, index) => (
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
                      <h3 className="text-2xl font-bold mb-3 text-gray-800">{plan.accounts} Account{plan.accounts > 1 ? 's' : ''}</h3>
                      <div className="mb-8">
                        <span className="text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
                          ${plan.price}
                        </span>
                        <span className="text-gray-500 text-lg">/month</span>
                      </div>
                      <div className="space-y-4 mb-8 text-left">
                        <div className="flex items-center gap-3">
                          <div className="bg-green-100 rounded-full p-1">
                            <Check className="w-4 h-4 text-green-600" />
                          </div>
                          <span className="text-gray-700">Daily Content Creation</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="bg-green-100 rounded-full p-1">
                            <Check className="w-4 h-4 text-green-600" />
                          </div>
                          <span className="text-gray-700">Engagement Services</span>
                        </div>
                      </div>
                      <Button
                        onClick={handleRequestInfo}
                        className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white py-6 font-semibold transition-all duration-300 transform hover:scale-105"
                        style={{
                          boxShadow: '0 8px 25px rgba(168, 85, 247, 0.3)'
                        }}
                      >
                        Request Info
                      </Button>
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
};
