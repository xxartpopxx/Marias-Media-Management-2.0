import React, { Suspense, lazy, memo } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink, ShoppingBag, Star, Palette, BookOpen, Gift, Sparkles } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { FadeIn, StaggerChildren, FloatingImage } from '../components/animations';
import SEOHead from '../components/SEOHead';
import { etsyProducts } from '../mock';

const Footer = lazy(() => import('../components/Footer').then(m => ({ default: m.Footer })));
const FloatingContact = lazy(() => import('../components/FloatingContact').then(m => ({ default: m.FloatingContact })));

const SectionLoader = memo(() => (
  <div className="min-h-[100px] flex items-center justify-center bg-transparent">
    <div className="w-6 h-6 border-2 border-purple-200 border-t-purple-600 rounded-full animate-spin"></div>
  </div>
));

export const ShopPage = () => {
  const categories = [
    { icon: Palette, title: "Photo Editing", description: "Professional editing services" },
    { icon: BookOpen, title: "Coloring Books", description: "Custom personalized designs" },
    { icon: Gift, title: "Party Games", description: "Unique entertainment options" },
    { icon: Sparkles, title: "Digital Products", description: "Instant downloadable items" }
  ];

  return (
    <>
      <SEOHead
        title="Shop Digital Products | Maria's Media Management"
        description="Browse our collection of digital products including custom photo editing, personalized coloring books, and unique party games. Shop now on Etsy."
        keywords="digital products, photo editing, custom coloring books, murder mystery party games, personalized gifts, Etsy shop"
        canonical="https://mariasmediamanagement.com/shop"
      />

      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-b from-orange-50 to-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-100 rounded-full filter blur-3xl opacity-40"></div>
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-pink-100 rounded-full filter blur-3xl opacity-30"></div>
          
          <div className="container mx-auto px-6 relative z-10">
            <FadeIn>
              <div className="text-center max-w-4xl mx-auto">
                <div className="inline-flex items-center gap-2 bg-orange-100 rounded-full px-5 py-2 mb-8">
                  <ShoppingBag className="w-4 h-4 text-orange-600" />
                  <span className="text-orange-700 font-medium">Digital Products & Services</span>
                </div>
                <h1 className="text-5xl md:text-7xl font-bold mb-8">
                  Shop Digital <span className="bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">Products</span> and Services
                </h1>
                <p className="text-xl text-gray-600 mb-10">
                  Explore our collection of unique digital products, from custom photo editing to personalized coloring books and party games.
                </p>
                <a
                  href="https://www.etsy.com/shop/MariasMediaShop"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-10 py-6 text-lg font-semibold transition-all duration-300 transform hover:scale-105">
                    Visit Etsy Shop <ExternalLink className="ml-2 w-5 h-5" />
                  </Button>
                </a>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Categories */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <StaggerChildren className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto" staggerDelay={100}>
              {categories.map((cat, index) => {
                const Icon = cat.icon;
                return (
                  <Card
                    key={index}
                    className="p-6 text-center bg-gradient-to-br from-orange-50 to-pink-50 border-2 border-orange-100 rounded-2xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                  >
                    <div className="bg-gradient-to-br from-orange-500 to-pink-500 w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-bold text-gray-800 mb-1">{cat.title}</h3>
                    <p className="text-gray-600 text-sm">{cat.description}</p>
                  </Card>
                );
              })}
            </StaggerChildren>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-20 bg-gradient-to-b from-white to-purple-50">
          <div className="container mx-auto px-6">
            <FadeIn>
              <h2 className="text-4xl font-bold text-center mb-16">
                Featured <span className="bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">Products</span>
              </h2>
            </FadeIn>

            <StaggerChildren className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto" staggerDelay={100}>
              {etsyProducts.map((product) => (
                <Card
                  key={product.id}
                  className="bg-white rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 group"
                >
                  <div className="relative h-56 overflow-hidden bg-gradient-to-br from-purple-100 to-pink-100">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-gray-800 mb-2 line-clamp-1">{product.title}</h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">{product.description}</p>
                    
                    <a
                      href={product.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button
                        className="w-full bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white"
                      >
                        Shop Now
                      </Button>
                    </a>
                  </div>
                </Card>
              ))}
            </StaggerChildren>
          </div>
        </section>

        {/* Etsy Reviews */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <FadeIn>
              <div className="max-w-3xl mx-auto text-center">
                <div className="flex justify-center gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-8 h-8 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <h2 className="text-3xl font-bold mb-4">
                  Loved by <span className="bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">Customers</span>
                </h2>
                <p className="text-xl text-gray-600 mb-8">
                  Check out our 5-star reviews on Etsy from happy customers around the world.
                </p>
                <a
                  href="https://www.etsy.com/shop/MariasMediaShop"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    variant="outline"
                    className="border-2 border-orange-500 text-orange-600 hover:bg-orange-50 px-8 py-6 text-lg font-semibold"
                  >
                    View All Reviews on Etsy <ExternalLink className="ml-2 w-5 h-5" />
                  </Button>
                </a>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-to-r from-orange-500 to-pink-500">
          <div className="container mx-auto px-6 text-center">
            <FadeIn>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Have a Custom Request?
              </h2>
              <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
                Looking for something unique? Get in touch to discuss custom digital products.
              </p>
              <Link to="/contact">
                <Button
                  size="lg"
                  className="bg-white text-orange-600 hover:bg-gray-100 px-10 py-6 text-lg font-semibold transition-all duration-300 transform hover:scale-105"
                >
                  Contact Us <ArrowRight className="ml-2 w-5 h-5" />
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

export default ShopPage;
