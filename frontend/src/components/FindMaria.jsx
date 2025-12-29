import { useEffect, useRef, useState } from 'react';
import { ExternalLink, Linkedin, FileText, Heart, BookOpen } from 'lucide-react';
import { professionalLinks } from '../mock';
import { Card } from './ui/card';

const iconMap = {
  linkedin: Linkedin,
  research: FileText,
  writing: BookOpen,
  nonprofit: Heart
};

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

  return (
    <section ref={sectionRef} className="py-24 bg-white relative overflow-hidden">
      {/* Logo watermark */}
      <div className="absolute top-20 right-10 opacity-5">
        <img 
          src="https://customer-assets.emergentagent.com/job_a9efaa07-0c20-4f2e-84b4-40005799affc/artifacts/ml1q1ugm_Maria%27s%20Media%20Kit.png" 
          alt="" 
          className="w-64 h-auto"
        />
      </div>
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-purple-100 rounded-full filter blur-3xl opacity-20 animate-pulse-slow"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-1000 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h2 className="text-5xl md:text-6xl font-bold mb-8">
            Where Else You Can <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">Find Maria</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {professionalLinks.map((link, index) => {
            const Icon = iconMap[link.icon];
            return (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`group transition-all duration-1000 transform ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <Card
                  className="bg-white rounded-3xl p-6 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 hover:scale-105 border-2 border-gray-100 hover:border-purple-200 h-full"
                  style={{
                    boxShadow: '0 10px 40px rgba(0, 0, 0, 0.08)',
                    transformStyle: 'preserve-3d'
                  }}
                >
                  <div className="flex items-start gap-4">
                    <div 
                      className="bg-gradient-to-br from-purple-500 to-pink-500 w-12 h-12 rounded-xl flex items-center justify-center transform group-hover:rotate-12 group-hover:scale-110 transition-all duration-300 flex-shrink-0"
                      style={{
                        boxShadow: '0 8px 25px rgba(168, 85, 247, 0.3)'
                      }}
                    >
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold mb-1 text-gray-800 group-hover:text-purple-600 transition-colors duration-300">{link.name}</h3>
                      <p className="text-sm text-gray-600">{link.description}</p>
                    </div>
                    <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-purple-600 transition-colors duration-300 flex-shrink-0" />
                  </div>
                </Card>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};
