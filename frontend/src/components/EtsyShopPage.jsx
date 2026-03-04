import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { etsyProducts, socialLinks } from '../mock';
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
              href={socialLinks.etsy}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <Button 
                className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold"
              >
                <ShoppingBag className="w-4 h-4 mr-2" />
                Open Full Etsy Store
                <ExternalLink className="w-4 h-4 ml-2" />
              </Button>
            </a>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="pt-28 pb-12 px-6">
        <div className="container mx-auto text-center">
          <div className={`transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            {/* Etsy Logo */}
            <div className="flex justify-center mb-6">
              <div className="bg-orange-500 rounded-2xl p-4">
                <svg className="w-14 h-14 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M8.559 4.297c0-.405.093-.891.652-.891 1.186 0 2.678.559 3.731.559.186 0 .558-.093.558-.465V2.091c0-.279-.186-.465-.372-.558C12.197 1.16 10.453.93 9.21.93c-2.19 0-4.634.93-4.634 4.043v2.232H3.07c-.279 0-.465.186-.465.465v1.581c0 .279.186.465.465.465h1.504v8.18c0 .279.186.465.465.465h2.605c.279 0 .465-.186.465-.465v-8.18h2.978c.279 0 .465-.186.465-.465v-.279l.465-1.302c.093-.186 0-.465-.279-.465H8.559V4.297z"/>
                </svg>
              </div>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Maria's <span className="bg-gradient-to-r from-orange-400 to-pink-500 bg-clip-text text-transparent">Media Shop</span>
            </h1>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
              Discover unique digital products, custom photo services, and creative party games — all designed to help you create lasting memories.
            </p>
            
            {/* Shop Stats */}
            <div className="flex flex-wrap justify-center gap-8 mb-10">
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

            {/* Main CTA */}
            <a
              href={socialLinks.etsy}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button 
                size="lg"
                className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold text-lg px-10 py-6 transform hover:scale-105 transition-all duration-300"
                style={{ boxShadow: '0 8px 30px rgba(249, 115, 22, 0.4)' }}
              >
                <ShoppingBag className="w-5 h-5 mr-2" />
                Browse Full Shop on Etsy
                <ExternalLink className="w-5 h-5 ml-2" />
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-10 px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {shopCategories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <div 
                  key={index}
                  className={`bg-white/5 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/10 transition-all duration-500 transform hover:scale-105 hover:bg-white/10 ${
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
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
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
                  <div className="aspect-square overflow-hidden relative">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                      <span className="bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-medium flex items-center gap-1">
                        View on Etsy <ExternalLink className="w-3 h-3" />
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-orange-400 transition-colors">
                      {product.title}
                    </h3>
                    <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                      {product.description}
                    </p>
                    <span className="text-orange-400 font-semibold flex items-center gap-1">
                      Shop Now
                      <ExternalLink className="w-4 h-4" />
                    </span>
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
              Ready to Shop?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Visit the full Etsy store to browse all products, read customer reviews, and shop securely. New items added regularly!
            </p>
            <a
              href={socialLinks.etsy}
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
