import { useEffect, useRef, useState } from 'react';
import { ExternalLink, Globe, Monitor, DollarSign, Link2, Check, Sparkles, Rocket, Leaf, Eye, Server, RefreshCw, Wrench } from 'lucide-react';
import { websitePortfolio } from '../mock';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { scrollToContact } from '../lib/scrollUtils';

// Pricing tiers data
const pricingTiers = [
  {
    id: 'starter',
    icon: Leaf,
    emoji: '🌱',
    name: 'Landing Page / Starter Presence',
    price: 200,
    description: 'Perfect for businesses or personal brands needing a simple, polished online presence.',
    features: [
      'Single-page website',
      'Clean modern layout',
      'Mobile responsive',
      'Contact / inquiry form',
      'Social links',
      'Basic SEO setup',
      'Domain connection',
      'Unlimited design refinements'
    ],
    popular: false,
    color: 'green'
  },
  {
    id: 'business',
    icon: Sparkles,
    emoji: '✨',
    name: 'Business Website / Growth',
    price: 400,
    description: 'Designed for businesses ready for a more structured and complete website experience.',
    features: [
      '3–5 pages',
      'Elevated visual design',
      'Mobile responsive',
      'SEO-friendly structure',
      'Conversion-focused layout',
      'Performance optimization',
      'Custom sections',
      'Unlimited design refinements'
    ],
    popular: true,
    popularText: 'Ideal for most businesses',
    color: 'purple'
  },
  {
    id: 'premium',
    icon: Rocket,
    emoji: '🚀',
    name: 'Custom / Premium Website',
    price: 1000,
    description: 'For brands seeking a highly refined, visually distinctive, and strategically designed website.',
    features: [
      'Fully custom design',
      'Advanced layouts',
      'Scroll effects / visual polish',
      'Performance tuning',
      'SEO-focused structure',
      'UX optimization',
      'Strategic content layout',
      'Unlimited refinements'
    ],
    popular: false,
    color: 'pink'
  }
];

export const Portfolio = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [loadedIframes, setLoadedIframes] = useState({});
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

  // Load iframes progressively when section becomes visible
  useEffect(() => {
    if (isVisible) {
      websitePortfolio.forEach((site, index) => {
        setTimeout(() => {
          setLoadedIframes(prev => ({ ...prev, [site.id]: true }));
        }, index * 200);
      });
    }
  }, [isVisible]);

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
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto mb-20">
          {websitePortfolio.map((site, index) => (
            <a
              key={site.id}
              href={site.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`group block transition-all duration-700 transform ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
              aria-label={`Visit ${site.name} website - Opens in new tab`}
            >
              {/* Browser Mockup Frame */}
              <Card className="bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-500 transform hover:-translate-y-2 hover:scale-[1.02] border border-gray-700/50 hover:border-purple-500/50">
                {/* Browser Header */}
                <div className="bg-gray-900/80 px-3 py-2 flex items-center gap-2 border-b border-gray-700/50">
                  <div className="flex gap-1.5" aria-hidden="true">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/80"></div>
                  </div>
                  <div className="flex-1 bg-gray-800/80 rounded px-2 py-1 flex items-center gap-1.5 overflow-hidden">
                    <Globe className="w-3 h-3 text-gray-500 flex-shrink-0" aria-hidden="true" />
                    <span className="text-[10px] text-gray-400 truncate">{site.url.replace('https://', '').replace('/', '')}</span>
                  </div>
                </div>

                {/* Website Preview - thumbnail or iframe */}
                <div className="relative h-40 bg-gray-900 overflow-hidden">
                  {site.thumbnail ? (
                    <img
                      src={site.thumbnail}
                      alt={`${site.name} website preview`}
                      className="w-full h-full object-cover object-top"
                      loading="lazy"
                    />
                  ) : loadedIframes[site.id] ? (
                    <iframe
                      src={site.url}
                      title={`${site.name} website preview`}
                      className="w-full h-full border-0 pointer-events-none"
                      style={{
                        transform: 'scale(0.35)',
                        transformOrigin: 'top left',
                        width: '286%',
                        height: '286%'
                      }}
                      loading="lazy"
                      sandbox="allow-scripts allow-same-origin"
                      aria-hidden="true"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-purple-600/50 to-pink-600/50 flex items-center justify-center">
                      <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    </div>
                  )}
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <span className="bg-white/90 text-gray-900 px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2">
                      Visit Site <ExternalLink className="w-4 h-4" aria-hidden="true" />
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-4">
                  <h3 className="text-base font-bold text-white group-hover:text-pink-300 transition-colors duration-300 truncate">
                    {site.name}
                  </h3>
                </div>
              </Card>
            </a>
          ))}
        </div>

        {/* Pricing Section Header */}
        <div className={`text-center max-w-4xl mx-auto mb-12 transition-all duration-1000 delay-300 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="inline-flex items-center gap-2 bg-green-500/20 px-4 py-2 rounded-full mb-6 border border-green-500/30">
            <DollarSign className="w-4 h-4 text-green-400" aria-hidden="true" />
            <span className="text-sm text-green-300 font-medium">Pricing Plans</span>
          </div>
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-white">
            Choose Your <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">Perfect Plan</span>
          </h3>
          <p className="text-lg text-gray-300">
            Transparent pricing for every stage of your business journey.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto mb-16">
          {pricingTiers.map((tier, index) => {
            const IconComponent = tier.icon;
            const isPopular = tier.popular;
            
            return (
              <div
                key={tier.id}
                className={`transition-all duration-700 transform ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                } ${isPopular ? 'lg:-mt-4 lg:mb-4' : ''}`}
                style={{ transitionDelay: `${(index + 3) * 150}ms` }}
              >
                <Card className={`relative h-full bg-gray-800/50 backdrop-blur-sm rounded-3xl overflow-hidden border transition-all duration-500 hover:shadow-2xl ${
                  isPopular 
                    ? 'border-purple-500/70 hover:border-purple-400 shadow-xl shadow-purple-500/20 ring-2 ring-purple-500/30' 
                    : 'border-gray-700/50 hover:border-purple-500/50'
                }`}>
                  {/* Popular Badge */}
                  {isPopular && (
                    <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-center py-2 text-sm font-semibold">
                      ⭐ {tier.popularText}
                    </div>
                  )}
                  
                  <div className={`p-6 lg:p-8 ${isPopular ? 'pt-14' : ''}`}>
                    {/* Tier Header */}
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-2xl" aria-hidden="true">{tier.emoji}</span>
                      <h4 className="text-lg font-bold text-white leading-tight">{tier.name}</h4>
                    </div>
                    
                    {/* Price */}
                    <div className="mb-4">
                      <div className="flex items-baseline gap-1">
                        <span className="text-sm text-gray-400">Starting at</span>
                      </div>
                      <div className="flex items-baseline gap-2">
                        <span className={`text-4xl lg:text-5xl font-bold ${
                          isPopular ? 'text-purple-300' : 'text-white'
                        }`}>
                          ${tier.price}
                        </span>
                      </div>
                    </div>
                    
                    {/* Description */}
                    <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                      {tier.description}
                    </p>
                    
                    {/* Features List */}
                    <ul className="space-y-3 mb-8">
                      {tier.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start gap-3">
                          <Check className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                            isPopular ? 'text-purple-400' : 'text-green-400'
                          }`} aria-hidden="true" />
                          <span className="text-gray-300 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    {/* CTA Button */}
                    <Button
                      onClick={scrollToContact}
                      className={`w-full py-6 font-semibold transition-all duration-500 transform hover:scale-105 ${
                        isPopular
                          ? 'bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white'
                          : 'bg-white/10 hover:bg-white/20 text-white border border-white/20'
                      }`}
                      style={isPopular ? {
                        boxShadow: '0 8px 30px rgba(168, 85, 247, 0.4)'
                      } : {}}
                      aria-label={`Get started with ${tier.name} - Contact Maria`}
                    >
                      Get Started
                      <ExternalLink className="ml-2 w-4 h-4" aria-hidden="true" />
                    </Button>
                  </div>
                </Card>
              </div>
            );
          })}
        </div>

        {/* Additional Info Sections */}
        <div className={`max-w-5xl mx-auto space-y-8 transition-all duration-1000 delay-700 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          
          {/* Complimentary Prototype Preview */}
          <Card className="bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-blue-600/20 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-blue-500/30">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center">
                <Eye className="w-6 h-6 text-blue-400" aria-hidden="true" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                  <span>🧪</span> Complimentary Prototype Preview
                </h4>
                <p className="text-gray-300 leading-relaxed">
                  Every website project includes a complimentary prototype preview. Before final development, you'll receive a visual preview of your website's layout and design direction.
                </p>
              </div>
            </div>
          </Card>

          {/* Domains & Hosting */}
          <Card className="bg-gradient-to-br from-green-600/20 via-teal-600/20 to-green-600/20 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-green-500/30">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center">
                <Server className="w-6 h-6 text-green-400" aria-hidden="true" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <span>🌐</span> Domains & Hosting
                </h4>
                <div className="space-y-4">
                  <div>
                    <h5 className="text-white font-semibold mb-1 flex items-center gap-2">
                      <Link2 className="w-4 h-4 text-green-400" aria-hidden="true" />
                      Domain Connection
                    </h5>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      I handle the domain connection process to ensure everything is configured correctly.
                    </p>
                  </div>
                  <div>
                    <h5 className="text-white font-semibold mb-1 flex items-center gap-2">
                      <Globe className="w-4 h-4 text-teal-400" aria-hidden="true" />
                      Hosting & File Management
                    </h5>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      All websites are deployed via Netlify. Clients will need a Netlify account where website files are securely stored and managed.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* Revision Policy */}
          <Card className="bg-gradient-to-br from-amber-600/20 via-orange-600/20 to-amber-600/20 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-amber-500/30">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-amber-500/20 rounded-xl flex items-center justify-center">
                <RefreshCw className="w-6 h-6 text-amber-400" aria-hidden="true" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                  <span>🧠</span> Revision Policy
                </h4>
                <p className="text-gray-300 leading-relaxed">
                  <strong className="text-amber-300">Unlimited revisions</strong> apply during the active design phase of the project. Revisions refer to refinements of the approved layout and design direction. Major structural changes or scope expansions may require a project adjustment.
                </p>
              </div>
            </div>
          </Card>

          {/* Website Care Plans */}
          <Card className="bg-gradient-to-br from-pink-600/20 via-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-pink-500/30">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-pink-500/20 rounded-xl flex items-center justify-center">
                  <Wrench className="w-6 h-6 text-pink-400" aria-hidden="true" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                    <span>🛠</span> Website Care Plans
                  </h4>
                  <p className="text-gray-300 leading-relaxed">
                    Maintenance needs vary by website, but plans typically start at <strong className="text-pink-300">$30 per month</strong> depending on the level of updates and support required.
                  </p>
                </div>
              </div>
              <div className="flex-shrink-0">
                <div className="bg-gradient-to-br from-pink-500/30 to-purple-500/30 rounded-xl px-6 py-4 text-center border border-pink-400/30">
                  <div className="text-sm text-gray-400 mb-1">Starting at</div>
                  <div className="text-3xl font-bold text-white">$30</div>
                  <div className="text-sm text-gray-400">/ month</div>
                </div>
              </div>
            </div>
          </Card>

        </div>
      </div>
    </section>
  );
};
