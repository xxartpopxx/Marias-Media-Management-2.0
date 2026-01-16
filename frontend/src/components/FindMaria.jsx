import { useEffect, useRef, useState } from 'react';
import { ExternalLink, Linkedin, FileText, Heart, BookOpen } from 'lucide-react';
import { professionalLinks } from '../mock';

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
    <section ref={sectionRef} className="py-16 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden" aria-labelledby="find-maria-heading">
      <div className="container mx-auto px-6 relative z-10">
        <div className={`text-center max-w-2xl mx-auto mb-10 transition-all duration-1000 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h2 id="find-maria-heading" className="text-3xl md:text-4xl font-bold mb-4">
            Where Else You Can <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">Find Maria</span>
          </h2>
        </div>

        <nav className="max-w-3xl mx-auto space-y-3" aria-label="External links to Maria's work">
          {professionalLinks.map((link, index) => {
            const Icon = iconMap[link.icon];
            return (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`group block transition-all duration-700 transform ${
                  isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
                aria-label={`${link.name} - ${link.description} - Opens in new tab`}
              >
                <div 
                  className="bg-white rounded-2xl p-5 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-gray-200 hover:border-purple-300"
                >
                  <div className="flex items-center gap-4">
                    <div 
                      className="bg-gradient-to-br from-purple-500 to-pink-500 w-10 h-10 rounded-lg flex items-center justify-center transform group-hover:scale-110 transition-all duration-300 flex-shrink-0"
                      aria-hidden="true"
                    >
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-base font-bold text-gray-800 group-hover:text-purple-600 transition-colors duration-300">{link.name}</h3>
                      <p className="text-sm text-gray-500">{link.description}</p>
                    </div>
                    <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-purple-600 transition-colors duration-300 flex-shrink-0" aria-hidden="true" />
                  </div>
                </div>
              </a>
            );
          })}
        </nav>
      </div>
    </section>
  );
};
