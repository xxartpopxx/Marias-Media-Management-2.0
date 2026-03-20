import React, { Suspense, lazy, memo, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink, Globe, Monitor, Check, Sparkles, Rocket, Leaf, ChevronLeft, ChevronRight, DollarSign, Link2, Eye, Server, RefreshCw, Wrench, Grid3X3, Briefcase, Heart } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { FadeIn, StaggerChildren } from '../components/animations';
import SEOHead from '../components/SEOHead';
import { websitePortfolio, portfolioCategories } from '../mock';

const Footer = lazy(() => import('../components/Footer').then(m => ({ default: m.Footer })));
const FloatingContact = lazy(() => import('../components/FloatingContact').then(m => ({ default: m.FloatingContact })));

const SectionLoader = memo(() => (
  <div className="min-h-[100px] flex items-center justify-center bg-transparent">
    <div className="w-6 h-6 border-2 border-purple-200 border-t-purple-600 rounded-full animate-spin"></div>
  </div>
));

const pricingTiers = [
  {
    id: 'starter',
    icon: Leaf,
    emoji: '🌱',
    name: 'Landing Page / Starter Presence',
    price: 200,
    description: 'Perfect for businesses or personal brands needing a simple, polished online presence.',
    features: ['Single-page website', 'Clean modern layout', 'Mobile responsive', 'Contact / inquiry form', 'Social links', 'Basic SEO setup', 'Domain connection', 'Unlimited design refinements'],
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
    features: ['3–5 pages', 'Elevated visual design', 'Mobile responsive', 'SEO-friendly structure', 'Conversion-focused layout', 'Performance optimization', 'Custom sections', 'Unlimited design refinements'],
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
    features: ['Fully custom design', 'Advanced layouts', 'Scroll effects / visual polish', 'Performance tuning', 'SEO-focused structure', 'UX optimization', 'Strategic content layout', 'Unlimited refinements'],
    popular: false,
    color: 'pink'
  }
];

export const PortfolioPage = () => {
  const [loadedIframes, setLoadedIframes] = useState({});
  const scrollContainerRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [activeFilter, setActiveFilter] = useState('all');

  // Category icons mapping
  const categoryIcons = {
    grid: Grid3X3,
    briefcase: Briefcase,
    heart: Heart,
    rocket: Rocket
  };

  // Get filtered portfolio based on active filter
  const filteredPortfolio = activeFilter === 'all' 
    ? websitePortfolio 
    : websitePortfolio.filter(site => site.category === activeFilter);

  const checkScrollButtons = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', checkScrollButtons, { passive: true });
      checkScrollButtons();
    }
    return () => {
      if (container) {
        container.removeEventListener('scroll', checkScrollButtons);
      }
    };
  }, []);

  // Reset scroll position when filter changes
  useEffect(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({ left: 0, behavior: 'smooth' });
      setTimeout(checkScrollButtons, 300);
    }
  }, [activeFilter]);

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const handleIframeLoad = (id) => {
    setLoadedIframes(prev => ({ ...prev, [id]: true }));
  };

  return (
    <>
      <SEOHead
        title="Website Portfolio | Web Design Services | Maria's Media Management"
        description="View our portfolio of beautifully crafted websites. Professional web design services starting at $200. Mobile responsive, SEO-friendly, and conversion-focused."
        keywords="web design portfolio, website design, landing page design, business website, custom website, Boston web designer"
        canonical="https://mariasmediamanagement.com/portfolio"
      />

      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 relative overflow-hidden">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500 rounded-full filter blur-[150px] opacity-20"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-500 rounded-full filter blur-[150px] opacity-20"></div>
          
          <div className="container mx-auto px-6 relative z-10">
            <FadeIn>
              <div className="text-center max-w-4xl mx-auto">
                <div className="inline-block bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-full px-5 py-2 mb-8">
                  <span className="flex items-center gap-2 text-gray-300">
                    <Monitor className="w-4 h-4" /> Web Design Services
                  </span>
                </div>
                <h1 className="text-5xl md:text-7xl font-bold mb-8 text-white">
                  Website <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Portfolio</span>
                </h1>
                <p className="text-xl text-gray-300 mb-10">
                  Beautifully crafted websites that bring your vision to life. Check out some of my recent work below.
                </p>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Portfolio Gallery - MOVED ABOVE PRICING */}
        <section className="py-20 bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900">
          <div className="container mx-auto px-6">
            <FadeIn>
              <h2 className="text-4xl font-bold text-center mb-8 text-white">
                Recent <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">Work</span>
              </h2>
              
              {/* Category Filter Buttons */}
              <div className="flex flex-wrap justify-center gap-3 mb-12">
                {portfolioCategories.map((category) => {
                  const IconComponent = categoryIcons[category.icon];
                  const isActive = activeFilter === category.id;
                  const count = category.id === 'all' 
                    ? websitePortfolio.length 
                    : websitePortfolio.filter(s => s.category === category.id).length;
                  
                  return (
                    <button
                      key={category.id}
                      onClick={() => setActiveFilter(category.id)}
                      className={`group flex items-center gap-2 px-4 py-2.5 rounded-full font-medium transition-all duration-300 ${
                        isActive 
                          ? 'bg-gradient-to-r from-pink-500 to-purple-500 text-white shadow-lg shadow-purple-500/30' 
                          : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white border border-white/10 hover:border-white/30'
                      }`}
                      aria-label={`Filter by ${category.name}`}
                      aria-pressed={isActive}
                    >
                      <IconComponent className={`w-4 h-4 ${isActive ? 'text-white' : 'text-pink-400 group-hover:text-pink-300'}`} />
                      <span>{category.name}</span>
                      <span className={`text-xs px-2 py-0.5 rounded-full ${
                        isActive ? 'bg-white/20' : 'bg-white/10'
                      }`}>
                        {count}
                      </span>
                    </button>
                  );
                })}
              </div>
            </FadeIn>

            {/* Scrollable Portfolio */}
            <div className="relative">
              {/* Scroll Buttons */}
              <button
                onClick={() => scroll('left')}
                className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-gray-800/90 hover:bg-gray-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 ${!canScrollLeft ? 'opacity-50 cursor-not-allowed' : ''}`}
                disabled={!canScrollLeft}
                aria-label="Scroll left"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={() => scroll('right')}
                className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-gray-800/90 hover:bg-gray-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 ${!canScrollRight ? 'opacity-50 cursor-not-allowed' : ''}`}
                disabled={!canScrollRight}
                aria-label="Scroll right"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Scrollable Container - BIGGER CARDS */}
              <div
                ref={scrollContainerRef}
                className="flex gap-8 overflow-x-auto pb-6 px-12 scrollbar-hide snap-x snap-mandatory"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
              >
                {filteredPortfolio.map((site) => (
                  <div
                    key={site.id}
                    className="flex-shrink-0 w-[420px] snap-start"
                  >
                    <Card className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl overflow-hidden hover:border-purple-500 transition-all duration-300 group">
                      {/* Browser Chrome */}
                      <div className="bg-gray-900 px-4 py-3 flex items-center gap-3 border-b border-gray-700">
                        <div className="flex gap-2">
                          <div className="w-3 h-3 rounded-full bg-red-500"></div>
                          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                          <div className="w-3 h-3 rounded-full bg-green-500"></div>
                        </div>
                        <div className="flex-1 flex items-center gap-2 bg-gray-800 rounded-md px-3 py-1">
                          <Globe className="w-3 h-3 text-gray-500" />
                          <span className="text-xs text-gray-400 truncate">{site.url.replace('https://', '').replace('http://', '')}</span>
                        </div>
                      </div>
                      
                      {/* Website Preview - TALLER */}
                      <div className="relative h-64 bg-gray-900 overflow-hidden">
                        {site.thumbnail ? (
                          <img
                            src={site.thumbnail}
                            alt={`${site.name} website preview`}
                            className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                            loading="lazy"
                          />
                        ) : (
                          <>
                            {!loadedIframes[site.id] && (
                              <div className="absolute inset-0 bg-gray-800 flex items-center justify-center">
                                <div className="w-8 h-8 border-2 border-purple-500 border-t-transparent rounded-full animate-spin"></div>
                              </div>
                            )}
                            <iframe
                              src={site.url}
                              title={`${site.name} preview`}
                              className="w-[200%] h-[200%] origin-top-left scale-50 pointer-events-none"
                              loading="lazy"
                              onLoad={() => handleIframeLoad(site.id)}
                            />
                          </>
                        )}
                      </div>
                      
                      {/* Info */}
                      <div className="p-6">
                        <h3 className="text-xl font-bold text-white mb-2">{site.name}</h3>
                        <p className="text-gray-400 text-sm mb-4 line-clamp-2">{site.description}</p>
                        <a
                          href={site.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 text-sm font-medium transition-colors"
                        >
                          Visit Site <ExternalLink className="w-4 h-4" />
                        </a>
                      </div>
                    </Card>
                  </div>
                ))}
              </div>
              
              <p className="text-center text-gray-500 mt-4">← Use arrows or scroll to browse →</p>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900">
          <div className="container mx-auto px-6">
            <FadeIn>
              <h2 className="text-4xl font-bold text-center mb-16 text-white">
                Pricing <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">Packages</span>
              </h2>
            </FadeIn>

            <StaggerChildren className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto" staggerDelay={150}>
              {pricingTiers.map((tier) => {
                const Icon = tier.icon;
                return (
                  <Card
                    key={tier.id}
                    className={`relative rounded-3xl p-8 transition-all duration-500 hover:scale-105 ${
                      tier.popular
                        ? 'bg-gradient-to-br from-purple-600 to-pink-600 text-white border-0'
                        : 'bg-gray-800/50 backdrop-blur-sm border border-gray-700 text-white'
                    }`}
                  >
                    {tier.popular && (
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-gray-900 text-sm font-bold px-4 py-1 rounded-full flex items-center gap-1">
                        <span>⭐</span> {tier.popularText}
                      </div>
                    )}
                    
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-2xl">{tier.emoji}</span>
                      <h3 className="text-xl font-bold">{tier.name}</h3>
                    </div>
                    
                    <div className="mb-4">
                      <span className="text-sm opacity-80">Starting at</span>
                      <div className="text-5xl font-bold">${tier.price}</div>
                    </div>
                    
                    <p className={`mb-6 ${tier.popular ? 'text-white/90' : 'text-gray-400'}`}>
                      {tier.description}
                    </p>
                    
                    <ul className="space-y-3 mb-8">
                      {tier.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <Check className={`w-5 h-5 ${tier.popular ? 'text-white' : 'text-green-400'}`} />
                          <span className={tier.popular ? 'text-white/90' : 'text-gray-300'}>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <Link to="/contact">
                      <Button
                        className={`w-full py-6 font-semibold transition-all duration-300 ${
                          tier.popular
                            ? 'bg-white text-purple-600 hover:bg-gray-100'
                            : 'bg-gray-700 hover:bg-gray-600 text-white'
                        }`}
                      >
                        Get Started <ExternalLink className="w-4 h-4 ml-2" />
                      </Button>
                    </Link>
                  </Card>
                );
              })}
            </StaggerChildren>
          </div>
        </section>

        {/* Additional Info */}
        <section className="py-20 bg-gray-900">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <FadeIn direction="right">
                <Card className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <Eye className="w-6 h-6 text-purple-400" />
                    <h3 className="text-xl font-bold text-white">Complimentary Preview</h3>
                  </div>
                  <p className="text-gray-400 leading-relaxed">
                    Before any payment, you'll receive a prototype preview of your website design to ensure it aligns with your vision.
                  </p>
                </Card>
              </FadeIn>
              
              <FadeIn direction="left" delay={150}>
                <Card className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <Server className="w-6 h-6 text-purple-400" />
                    <h3 className="text-xl font-bold text-white">Domains & Hosting</h3>
                  </div>
                  <p className="text-gray-400 leading-relaxed">
                    Domain registration and hosting are handled separately. We'll guide you through the setup process.
                  </p>
                </Card>
              </FadeIn>
              
              <FadeIn direction="right" delay={300}>
                <Card className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <RefreshCw className="w-6 h-6 text-purple-400" />
                    <h3 className="text-xl font-bold text-white">Revision Policy</h3>
                  </div>
                  <p className="text-gray-400 leading-relaxed">
                    All packages include unlimited design refinements to ensure your complete satisfaction with the final result.
                  </p>
                </Card>
              </FadeIn>
              
              <FadeIn direction="left" delay={450}>
                <Card className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <Wrench className="w-6 h-6 text-purple-400" />
                    <h3 className="text-xl font-bold text-white">Website Care Plans</h3>
                  </div>
                  <p className="text-gray-400 leading-relaxed">
                    Optional $30/month maintenance plans for ongoing updates, security, and content changes.
                  </p>
                </Card>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600">
          <div className="container mx-auto px-6 text-center">
            <FadeIn>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready for Your New Website?
              </h2>
              <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
                Let's create something beautiful together. Get your free consultation today.
              </p>
              <Link to="/contact">
                <Button
                  size="lg"
                  className="bg-white text-purple-600 hover:bg-gray-100 px-10 py-6 text-lg font-semibold transition-all duration-300 transform hover:scale-105"
                >
                  Start Your Project <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </FadeIn>
          </div>
        </section>
      </main>

      <Suspense fallback={<SectionLoader />}>
        <Footer />
      </Suspense>
      <Suspense fallback={null}>
        <FloatingContact />
      </Suspense>
    </>
  );
};

export default PortfolioPage;
