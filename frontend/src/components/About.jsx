import { useEffect, useRef, useState } from 'react';
import { nonprofitPartners } from '../mock';

export const About = () => {
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
    <section id="about" ref={sectionRef} className="py-24 bg-white" aria-labelledby="about-heading">
      <div className="container mx-auto px-6">
        <div className={`text-center mb-16 transition-all duration-1000 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h2 id="about-heading" className="text-5xl md:text-6xl font-bold mb-4">
            Meet <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">Maria</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-start max-w-6xl mx-auto">
          <div className={`transition-all duration-1000 transform ${
            isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
          }`}>
            <div className="relative group">
              <div 
                className="absolute -top-6 -left-6 w-full h-full bg-gradient-to-br from-purple-200 to-pink-200 rounded-3xl transition-transform duration-300 group-hover:scale-105"
                style={{
                  boxShadow: '0 20px 60px rgba(168, 85, 247, 0.3)'
                }}
                aria-hidden="true"
              ></div>
              <img
                src="https://images.ctfassets.net/ef34o61n7ee2/315eYhq4Pd2VAFokRA2dlg/07587558fcb0cabec06c599e72015a65/maria.mongiardo_67077307_195168964832873_4373870044423530444_n.jpg"
                alt="Maria Mongiardo - Founder of Maria's Media Management, social media strategist and digital branding expert"
                width="600"
                height="600"
                loading="lazy"
                decoding="async"
                className="relative rounded-3xl shadow-2xl w-full object-cover transition-transform duration-300 group-hover:scale-105"
                style={{
                  boxShadow: '0 25px 50px rgba(0, 0, 0, 0.2)',
                  aspectRatio: '1/1'
                }}
              />
            </div>
          </div>

          <div className={`transition-all duration-1000 delay-300 transform ${
            isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
          }`}>
            <div 
              className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-10 border border-purple-100"
              style={{
                boxShadow: '0 10px 40px rgba(168, 85, 247, 0.1)'
              }}
            >
              <p className="text-xl font-semibold text-purple-900 mb-6 leading-relaxed">
                Maria Mongiardo is a storyteller at heart — blending backgrounds in science, public health, research, and digital strategy to help brands and nonprofits connect with real people in meaningful ways.
              </p>
              
              <div className="space-y-5 text-gray-700 leading-relaxed">
                <p>
                  Born and raised on the North Shore of Massachusetts, Maria earned her Bachelor's degree from Clark University and her Master of Public Health from Boston University School of Medicine. While deeply passionate about health and research, she has also been immersed in online communities since her early Tumblr days — building connections, creating content, and helping others tell their stories.
                </p>
                
                <div className="my-6">
                  <p className="font-semibold text-purple-900 mb-3">Over the years, Maria has supported nonprofits such as:</p>
                  <ul className="space-y-2 ml-4" role="list">
                    {nonprofitPartners.map((org, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-purple-500 mr-2" aria-hidden="true">•</span>
                        <span>{org}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <p>
                  Today, she partners with entrepreneurs, clinics, chefs, coaches, salons, trainers, and creative business owners — providing strategy, content support, and digital growth guidance.
                </p>
                
                <p className="text-xl font-semibold text-purple-900 pt-4">
                  Maria's goal is simple: help good people and meaningful brands shine online.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
