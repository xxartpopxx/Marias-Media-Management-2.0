import { useEffect, useRef, useState } from 'react';
import { Check } from 'lucide-react';
import { weeklyPricing, monthlyPricing, otherServices } from '../mock';
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
    <section id="services" ref={sectionRef} className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="container mx-auto px-6">
        <div className={`text-center mb-16 transition-all duration-1000 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We offer content creation, engagement strategies, follower growth, website management, influencer/client outreach and our complimentary social media guide when you hire Maria's Media Management.
          </p>
        </div>

        <div className="max-w-6xl mx-auto mb-16">
          <Tabs defaultValue="monthly" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-12 bg-white shadow-lg p-1 rounded-xl">
              <TabsTrigger value="weekly" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-pink-500 data-[state=active]:text-white rounded-lg transition-all duration-300">
                One Week
              </TabsTrigger>
              <TabsTrigger value="monthly" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-pink-500 data-[state=active]:text-white rounded-lg transition-all duration-300">
                One Month
              </TabsTrigger>
            </TabsList>

            <TabsContent value="weekly">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {weeklyPricing.map((plan, index) => (
                  <Card
                    key={index}
                    className={`p-8 bg-white hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-2 hover:border-purple-300 ${
                      isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                    }`}
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <div className="text-center">
                      <h3 className="text-2xl font-bold mb-2 text-gray-800">{plan.accounts} Account{plan.accounts > 1 ? 's' : ''}</h3>
                      <div className="mb-6">
                        <span className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
                          ${plan.price}
                        </span>
                        <span className="text-gray-500">/week</span>
                      </div>
                      <div className="space-y-3 mb-6">
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <Check className="w-5 h-5 text-green-500" />
                          <span>Daily Content Creation</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <Check className="w-5 h-5 text-green-500" />
                          <span>Engagement Services</span>
                        </div>
                      </div>
                      <Button
                        onClick={handleRequestInfo}
                        className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white transition-all duration-300"
                      >
                        Request Info
                      </Button>
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="monthly">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {monthlyPricing.map((plan, index) => (
                  <Card
                    key={index}
                    className={`p-8 bg-white hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-2 hover:border-purple-300 ${
                      isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                    }`}
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <div className="text-center">
                      <h3 className="text-2xl font-bold mb-2 text-gray-800">{plan.accounts} Account{plan.accounts > 1 ? 's' : ''}</h3>
                      <div className="mb-6">
                        <span className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
                          ${plan.price}
                        </span>
                        <span className="text-gray-500">/month</span>
                      </div>
                      <div className="space-y-3 mb-6">
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <Check className="w-5 h-5 text-green-500" />
                          <span>Daily Content Creation</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <Check className="w-5 h-5 text-green-500" />
                          <span>Engagement Services</span>
                        </div>
                      </div>
                      <Button
                        onClick={handleRequestInfo}
                        className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white transition-all duration-300"
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

        {/* Other Services */}
        <div className={`max-w-6xl mx-auto transition-all duration-1000 delay-500 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h3 className="text-3xl font-bold text-center mb-10">
            Shop Our <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">Digital Products</span>
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {otherServices.map((service, index) => (
              <Card
                key={service.id}
                className="p-8 bg-white hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-2 hover:border-pink-300"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <h4 className="text-xl font-bold mb-4 text-gray-800">{service.title}</h4>
                <div className="mb-4">
                  <span className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
                    ${service.price}
                  </span>
                </div>
                <p className="text-gray-600 mb-6 text-sm">{service.description}</p>
                <a
                  href="https://www.etsy.com/shop/MariasMediaShop?ref=seller-platform-mcnav"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="w-full bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white transition-all duration-300">
                    Buy on Etsy
                  </Button>
                </a>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
