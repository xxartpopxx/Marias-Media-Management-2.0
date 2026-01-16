import { useEffect, useRef, useState } from 'react';
import { ExternalLink, Globe, Monitor, DollarSign, Link2 } from 'lucide-react';
import { websitePortfolio } from '../mock';
import { Button } from './ui/button';
import { Card } from './ui/card';

export const Portfolio = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredSite, setHoveredSite] = useState(null);
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

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="portfolio" ref={sectionRef} className="py-24 md:py-32 bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 relative overflow-hidden" aria-labelledby="portfolio-heading">
      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-purple-500/20 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-pink-500/20 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/10 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className={`text-center max-w-4xl mx-auto mb-16 transition-all duration-1000 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-white/20">
            <Monitor className="w-4 h-4 text-pink-400" aria-hidden="true" />
            <span className="text-sm text-pink-200 font-medium">Web Design Services</span>
          </div>
          <h2 id="portfolio-heading" className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-white">
            Website <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Portfolio</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
            Beautifully crafted websites that bring your vision to life. Check out some of my recent work below.
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16">
          {websitePortfolio.map((site, index) => (
            <article
              key={site.id}
              className={`transition-all duration-1000 transform ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
              onMouseEnter={() => setHoveredSite(site.id)}
              onMouseLeave={() => setHoveredSite(null)}
            >
              {/* Browser Mockup Frame */}
              <Card className="group bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-500 transform hover:-translate-y-3 border border-gray-700/50 hover:border-purple-500/50">
                {/* Browser Header */}
                <div className="bg-gray-900/80 px-4 py-3 flex items-center gap-3 border-b border-gray-700/50">
                  <div className="flex gap-2" aria-hidden="true">
                    <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                  </div>
                  <div className="flex-1 bg-gray-800/80 rounded-lg px-3 py-1.5 flex items-center gap-2 overflow-hidden">
                    <Globe className="w-3.5 h-3.5 text-gray-500 flex-shrink-0" aria-hidden="true" />
                    <span className="text-xs text-gray-400 truncate">{site.url.replace('https://', '')}</span>
                  </div>
                </div>

                {/* Website Preview - Using iframe */}
                <div className="relative h-48 bg-gray-900 overflow-hidden">
                  <iframe
                    src={site.url}
                    title={`${site.name} website preview`}
                    className="w-full h-full border-0 pointer-events-none transform scale-100"
                    style={{
                      transform: 'scale(0.5)',
                      transformOrigin: 'top left',
                      width: '200%',
                      height: '200%'
                    }}
                    loading="lazy"
                    sandbox="allow-scripts allow-same-origin"
                    aria-hidden="true"
                  />
                  {/* Overlay for interaction */}
                  <div className={`absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent transition-opacity duration-300 ${
                    hoveredSite === site.id ? 'opacity-90' : 'opacity-60'
                  }`} aria-hidden="true"></div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-3 right-3 bg-purple-500/90 backdrop-blur-sm px-3 py-1 rounded-full">
                    <span className="text-xs font-medium text-white">{site.category}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-pink-300 transition-colors duration-300">
                    {site.name}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4 line-clamp-2 leading-relaxed">
                    {site.description}
                  </p>
                  {/* Skills tags for A2 Hospitality */}
                  {site.skills && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {site.skills.map((skill, skillIndex) => (
                        <span 
                          key={skillIndex} 
                          className="text-xs bg-purple-500/20 text-purple-300 px-2 py-1 rounded-full border border-purple-500/30"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  )}
                  <a
                    href={site.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-pink-400 hover:text-pink-300 font-medium text-sm transition-all duration-300 group-hover:gap-3"
                    aria-label={`Visit ${site.name} website - Opens in new tab`}
                  >
                    Visit Website
                    <ExternalLink className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
                  </a>
                </div>
              </Card>
            </article>
          ))}
        </div>

        {/* Pricing Card */}
        <div className={`max-w-4xl mx-auto transition-all duration-1000 delay-500 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <Card className="relative bg-gradient-to-br from-purple-600/20 via-pink-600/20 to-purple-600/20 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-purple-500/30 overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-pink-500/20 to-purple-500/20 rounded-full filter blur-3xl" aria-hidden="true"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-purple-500/20 to-pink-500/20 rounded-full filter blur-3xl" aria-hidden="true"></div>
            
            <div className="relative z-10">
              <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="text-center md:text-left">
                  <div className="inline-flex items-center gap-2 bg-green-500/20 px-4 py-2 rounded-full mb-4 border border-green-500/30">
                    <DollarSign className="w-4 h-4 text-green-400" aria-hidden="true" />
                    <span className="text-sm text-green-300 font-medium">Website Design Package</span>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    Get Your Own <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">Custom Website</span>
                  </h3>
                  <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-gray-300">
                    <div className="flex items-center gap-2">
                      <Monitor className="w-5 h-5 text-pink-400" aria-hidden="true" />
                      <span>Custom Design</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Link2 className="w-5 h-5 text-purple-400" aria-hidden="true" />
                      <span>Domain Connection</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Globe className="w-5 h-5 text-blue-400" aria-hidden="true" />
                      <span>Live Website</span>
                    </div>
                  </div>
                </div>
                
                <div className="text-center flex-shrink-0">
                  <div className="bg-gradient-to-br from-purple-500/30 to-pink-500/30 rounded-2xl p-6 md:p-8 border border-purple-400/30">
                    <div className="text-5xl md:text-6xl font-bold text-white mb-2">
                      $200
                    </div>
                    <p className="text-gray-300 text-sm mb-4">per website + domain setup</p>
                    <Button
                      onClick={scrollToContact}
                      className="w-full bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white py-6 px-8 font-semibold transition-all duration-500 transform hover:scale-105"
                      style={{
                        boxShadow: '0 8px 30px rgba(236, 72, 153, 0.4)'
                      }}
                      aria-label="Get started with a custom website - Contact Maria"
                    >
                      Get Started
                      <ExternalLink className="ml-2 w-4 h-4" aria-hidden="true" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
