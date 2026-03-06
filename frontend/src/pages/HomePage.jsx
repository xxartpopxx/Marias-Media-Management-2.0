import React, { Suspense, lazy, memo } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Heart, Zap, Target, Sparkles, Users, TrendingUp, Globe, Star } from 'lucide-react';
import { Hero } from '../components/Hero';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { FadeIn, StaggerChildren, FloatingImage } from '../components/animations';
import SEOHead from '../components/SEOHead';
import { testimonials } from '../mock';

// Lazy load heavier components
const Footer = lazy(() => import('../components/Footer').then(m => ({ default: m.Footer })));
const FloatingContact = lazy(() => import('../components/FloatingContact').then(m => ({ default: m.FloatingContact })));

const SectionLoader = memo(() => (
  <div className="min-h-[100px] flex items-center justify-center bg-transparent">
    <div className="w-6 h-6 border-2 border-purple-200 border-t-purple-600 rounded-full animate-spin"></div>
  </div>
));

export const HomePage = () => {
  const features = [
    { icon: Heart, title: "Passion", description: "We bring heart to every project, campaign, and conversation." },
    { icon: Zap, title: "Strategy", description: "Data-driven insights meet creative storytelling for real growth." },
    { icon: Target, title: "Attention to Detail", description: "Every post, caption, and visual is crafted with intention." }
  ];

  const services = [
    { icon: Sparkles, title: "Content Creation", description: "Engaging posts, stories, and reels tailored to your brand." },
    { icon: Users, title: "Community Building", description: "Authentic connections with your audience." },
    { icon: TrendingUp, title: "Growth Strategy", description: "Data-driven approaches to expand your reach." },
    { icon: Globe, title: "Website Design", description: "Beautiful, conversion-focused websites." }
  ];

  return (
    <>
      <SEOHead
        title="Maria's Media Management | Social Media & Web Design Services"
        description="Boston-based social media management and web design studio. We help brands, entrepreneurs, and organizations elevate their online presence with strategy, creativity, and heart."
        keywords="social media management, web design, digital marketing, Boston, content creation, brand strategy"
        canonical="https://mariasmediamanagement.com"
      />

      <main>
        <Hero />

        {/* Mission Section */}
        <section className="py-24 bg-gradient-to-b from-white to-purple-50 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-pink-100 rounded-full filter blur-3xl opacity-30"></div>
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-100 rounded-full filter blur-3xl opacity-30"></div>
          
          <div className="container mx-auto px-6 relative z-10">
            <FadeIn>
              <div className="text-center max-w-4xl mx-auto mb-16">
                <h2 className="text-5xl md:text-6xl font-bold mb-8">
                  Our <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">Mission</span>
                </h2>
                <p className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-6">
                  Maria's Media Management is a Boston-based social media & digital branding studio supporting clients across the globe.
                </p>
                <div className="my-10">
                  <p className="text-2xl font-semibold text-purple-900 mb-3">What makes us different?</p>
                  <p className="text-xl text-purple-700">Passion. Heart. Strategy. Attention to detail.</p>
                </div>
              </div>
            </FadeIn>

            <StaggerChildren className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto" staggerDelay={150}>
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <article
                    key={index}
                    className="bg-white rounded-3xl p-10 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-purple-100"
                    style={{ boxShadow: '0 10px 40px rgba(168, 85, 247, 0.1)' }}
                  >
                    <div className="bg-gradient-to-br from-purple-100 to-pink-100 w-20 h-20 rounded-2xl flex items-center justify-center mb-6 transform hover:rotate-6 transition-transform duration-300">
                      <Icon className="w-10 h-10 text-purple-600" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-gray-800">{feature.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                  </article>
                );
              })}
            </StaggerChildren>
          </div>
        </section>

        {/* Services Preview */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6">
            <FadeIn>
              <div className="text-center mb-16">
                <h2 className="text-5xl md:text-6xl font-bold mb-6">
                  Our <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">Services</span>
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Comprehensive digital solutions to elevate your brand
                </p>
              </div>
            </FadeIn>

            <StaggerChildren className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-12" staggerDelay={100}>
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <Card
                    key={index}
                    className="p-8 bg-gradient-to-br from-white to-purple-50 hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border-2 border-purple-100 hover:border-purple-300 rounded-3xl text-center"
                  >
                    <div className="bg-gradient-to-br from-purple-500 to-pink-500 w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-5">
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-lg font-bold mb-2 text-gray-800">{service.title}</h3>
                    <p className="text-gray-600 text-sm">{service.description}</p>
                  </Card>
                );
              })}
            </StaggerChildren>

            <FadeIn delay={400}>
              <div className="text-center">
                <Link to="/services">
                  <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-6 text-lg font-semibold transition-all duration-300 transform hover:scale-105">
                    View All Services <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Testimonials Preview */}
        <section className="py-24 bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900">
          <div className="container mx-auto px-6">
            <FadeIn>
              <div className="text-center mb-16">
                <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white">
                  Client <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Love</span>
                </h2>
              </div>
            </FadeIn>

            <StaggerChildren className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto" staggerDelay={150}>
              {testimonials.slice(0, 3).map((testimonial, index) => (
                <Card
                  key={index}
                  className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-8 hover:bg-white/15 transition-all duration-300"
                >
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-white/90 mb-6 leading-relaxed line-clamp-4">"{testimonial.text}"</p>
                  <div className="flex items-center gap-4">
                    {testimonial.image && (
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full object-cover"
                        loading="lazy"
                      />
                    )}
                    <div>
                      <p className="font-semibold text-white">{testimonial.name}</p>
                      {testimonial.company && <p className="text-white/60 text-sm">{testimonial.company}</p>}
                    </div>
                  </div>
                </Card>
              ))}
            </StaggerChildren>

            <FadeIn delay={400}>
              <div className="text-center mt-12">
                <Link to="/reviews">
                  <Button className="bg-white/10 backdrop-blur-sm border border-white/30 text-white hover:bg-white/20 px-8 py-6 text-lg font-semibold transition-all duration-300">
                    View All Reviews <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-gradient-to-r from-purple-600 to-pink-600">
          <div className="container mx-auto px-6 text-center">
            <FadeIn>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Transform Your Online Presence?
              </h2>
              <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
                Let's create something meaningful together. Get in touch today.
              </p>
              <Link to="/contact">
                <Button
                  size="lg"
                  className="bg-white text-purple-600 hover:bg-gray-100 px-10 py-6 text-lg font-semibold transition-all duration-300 transform hover:scale-105"
                >
                  Get Started <ArrowRight className="ml-2 w-5 h-5" />
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

export default HomePage;
