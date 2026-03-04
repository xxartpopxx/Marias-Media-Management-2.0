import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { etsyProducts } from '../mock';
import { ExternalLink, ShoppingBag, ArrowLeft, Star, Package, Palette, Camera, Sparkles } from 'lucide-react';
import { Card } from './ui/card';
import { Button } from './ui/button';

export const EtsyShopPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    window.scrollTo(0, 0);
  }, []);

  const shopCategories = [
    {
      icon: Camera,
      title: "Photo Services",
      description: "Professional editing, restoration & enhancement"
    },
    {
      icon: Palette,
      title: "Custom Creations",
      description: "Personalized coloring books & pages"
    },
    {
      icon: Sparkles,
      title: "Party Games",
      description: "Custom murder mystery experiences"
    },
    {
      icon: Package,
      title: "Digital & Print",
      description: "Instant downloads & shipped products"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-purple-900 to-gray-900">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900/95 backdrop-blur-md shadow-lg">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-3 text-white hover:text-purple-300 transition-colors">
              <ArrowLeft className="w-5 h-5" />
              <span className="font-medium">Back to Home</span>
            </Link>
            <a
              href="https://www.etsy.com/shop/MariasMediaShop"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <Button 
                className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold"
              >
                <ShoppingBag className="w-4 h-4 mr-2" />
                View Full Store on Etsy
                <ExternalLink className="w-4 h-4 ml-2" />
              </Button>
            </a>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6">
        <div className="container mx-auto text-center">
          <div className={`transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            {/* Etsy Logo */}
            <div className="flex justify-center mb-8">
              <div className="bg-orange-500 rounded-2xl p-4">
                <svg className="w-16 h-16 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M8.56 3.04c.24-.16.64-.24 1.2-.24h4.08c.88 0 1.52.24 1.92.72.4.48.6 1.12.6 1.92v.72h.96c.16 0 .24.08.24.24v1.44c0 .16-.08.24-.24.24h-.96v7.68h.96c.16 0 .24.08.24.24v1.44c0 .16-.08.24-.24.24h-.96v.72c0 .8-.2 1.44-.6 1.92-.4.48-1.04.72-1.92.72H9.76c-.56 0-.96-.08-1.2-.24-.24-.16-.36-.4-.36-.72v-.96c0-.32.12-.56.36-.72.24-.16.64-.24 1.2-.24h3.36V8.08H9.76c-.56 0-.96-.08-1.2-.24-.24-.16-.36-.4-.36-.72v-.96c0-.32.12-.56.36-.72z"/>
                </svg>
              </div>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Maria's <span className="bg-gradient-to-r from-orange-400 to-pink-500 bg-clip-text text-transparent">Media Shop</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Discover unique digital products, custom photo services, and creative party games — all designed to help you create lasting memories.
            </p>
            
            {/* Shop Stats */}
            <div className="flex flex-wrap justify-center gap-8 mb-12">
              <div className="text-center">
                <div className="flex items-center justify-center gap-1 text-orange-400 mb-1">
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                </div>
                <p className="text-gray-400 text-sm">5-Star Reviews</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-white">100%</p>
                <p className="text-gray-400 text-sm">Satisfaction</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-white">Fast</p>
                <p className="text-gray-400 text-sm">Digital Delivery</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-12 px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {shopCategories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <div 
                  key={index}
                  className={`bg-white/5 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/10 transition-all duration-500 transform hover:scale-105 ${
                    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="bg-gradient-to-br from-orange-500 to-pink-500 w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-white font-semibold mb-1">{category.title}</h3>
                  <p className="text-gray-400 text-sm">{category.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Featured Products
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {etsyProducts.map((product, index) => (
              <a
                key={product.id}
                href={product.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`group transition-all duration-500 transform ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: `${(index + 4) * 100}ms` }}
              >
                <Card className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl overflow-hidden hover:border-orange-500/50 transition-all duration-300 group-hover:shadow-2xl group-hover:shadow-orange-500/20 h-full">
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-orange-400 transition-colors">
                      {product.title}
                    </h3>
                    <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                      {product.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-orange-400 font-semibold flex items-center gap-1">
                        View on Etsy
                        <ExternalLink className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                </Card>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <Card className="bg-gradient-to-r from-orange-500/20 to-pink-500/20 backdrop-blur-sm border border-orange-500/30 rounded-3xl p-12 text-center max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Visit the Full Shop
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Browse all products, read reviews, and shop securely on Etsy. New items added regularly!
            </p>
            <a
              href="https://www.etsy.com/shop/MariasMediaShop"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button 
                size="lg"
                className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold text-lg px-10 py-6 transform hover:scale-105 transition-all duration-300"
                style={{ boxShadow: '0 8px 30px rgba(249, 115, 22, 0.4)' }}
              >
                <ShoppingBag className="w-5 h-5 mr-2" />
                Shop on Etsy
                <ExternalLink className="w-5 h-5 ml-2" />
              </Button>
            </a>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-white/10">
        <div className="container mx-auto text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Maria's Media Management. All rights reserved.
          </p>
          <Link to="/" className="text-purple-400 hover:text-purple-300 mt-2 inline-block">
            Return to main site
          </Link>
        </div>
      </footer>
    </div>
  );
};
