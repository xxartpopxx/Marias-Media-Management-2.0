import React, { Suspense, lazy, memo } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check, Camera, Sparkles, Users, TrendingUp, MessageSquare, BarChart3, Palette, Megaphone, Calendar } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { FadeIn, StaggerChildren } from '../components/animations';
import SEOHead from '../components/SEOHead';

const Footer = lazy(() => import('../components/Footer').then(m => ({ default: m.Footer })));
const FloatingContact = lazy(() => import('../components/FloatingContact').then(m => ({ default: m.FloatingContact })));

const SectionLoader = memo(() => (
  <div className="min-h-[100px] flex items-center justify-center bg-transparent">
    <div className="w-6 h-6 border-2 border-purple-200 border-t-purple-600 rounded-full animate-spin"></div>
  </div>
));

export const ServicesPage = () => {
  const mainServices = [
    {
      icon: Sparkles,
      title: "Content Creation",
      description: "Engaging posts, stories, and reels tailored to your brand voice and audience. We craft content that resonates and drives engagement.",
      features: ["Custom graphics & visuals", "Engaging captions", "Story & reel creation", "Brand-aligned content"]
    },
    {
      icon: Users,
      title: "Community Engagement",
      description: "Building authentic connections with your followers through meaningful interactions that foster loyalty and growth.",
      features: ["Comment management", "DM responses", "Audience interaction", "Community building"]
    },
    {
      icon: TrendingUp,
      title: "Growth Strategy",
      description: "Data-driven approaches to expand your reach, increase brand awareness, and convert followers into customers.",
      features: ["Competitor analysis", "Trend research", "Algorithm optimization", "Growth roadmaps"]
    },
    {
      icon: MessageSquare,
      title: "Brand Consistency",
      description: "Maintaining a cohesive visual identity and messaging across all platforms to strengthen brand recognition.",
      features: ["Voice guidelines", "Visual standards", "Cross-platform consistency", "Brand storytelling"]
    },
    {
      icon: BarChart3,
      title: "Analytics & Reporting",
      description: "Monthly performance insights with actionable recommendations to continuously improve your social presence.",
      features: ["Monthly reports", "KPI tracking", "Insights & trends", "Strategy adjustments"]
    },
    {
      icon: Calendar,
      title: "Content Calendar",
      description: "Strategic planning and scheduling to maintain consistent posting and maximize engagement across platforms.",
      features: ["Monthly planning", "Optimal timing", "Content themes", "Campaign coordination"]
    }
  ];

  const includedFeatures = [
    "Custom content creation for your platforms",
    "Regular posting schedule management",
    "Audience engagement and community building",
    "Monthly performance reports and insights",
    "Brand voice development and consistency",
    "Strategic hashtag research and optimization"
  ];

  return (
    <>
      <SEOHead
        title="Services | Social Media Management | Maria's Media Management"
        description="Comprehensive social media management services including content creation, community engagement, growth strategy, and brand consistency. Elevate your online presence."
        keywords="social media management, content creation, community engagement, brand strategy, Instagram management, Facebook management, social media services"
        canonical="https://mariasmediamanagement.com/services"
      />

      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-b from-purple-50 to-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-pink-100 rounded-full filter blur-3xl opacity-30"></div>
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-100 rounded-full filter blur-3xl opacity-30"></div>
          
          <div className="container mx-auto px-6 relative z-10">
            <FadeIn>
              <div className="text-center max-w-4xl mx-auto">
                <h1 className="text-5xl md:text-7xl font-bold mb-8">
                  Social Media <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">Services</span>
                </h1>
                <p className="text-xl text-gray-600 mb-10">
                  Elevate your social media presence with personalized management tailored to your brand's unique needs and goals.
                </p>
                <Link to="/contact">
                  <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-10 py-6 text-lg font-semibold transition-all duration-300 transform hover:scale-105">
                    Get a Free Consultation <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <FadeIn>
              <h2 className="text-4xl font-bold text-center mb-16">
                What We <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">Offer</span>
              </h2>
            </FadeIn>

            <StaggerChildren className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto" staggerDelay={100}>
              {mainServices.map((service, index) => {
                const Icon = service.icon;
                return (
                  <Card
                    key={index}
                    className="p-8 bg-gradient-to-br from-white to-purple-50 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-2 border-purple-100 hover:border-purple-300 rounded-3xl"
                  >
                    <div className="bg-gradient-to-br from-purple-500 to-pink-500 w-14 h-14 rounded-2xl flex items-center justify-center mb-6">
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-gray-800">{service.title}</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                    <ul className="space-y-2">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-center text-sm text-gray-600">
                          <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </Card>
                );
              })}
            </StaggerChildren>
          </div>
        </section>

        {/* What's Included */}
        <section className="py-20 bg-gradient-to-b from-white to-purple-50">
          <div className="container mx-auto px-6">
            <FadeIn>
              <div className="max-w-4xl mx-auto">
                <Card className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-10 md:p-12 border-2 border-purple-200 shadow-xl">
                  <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">What's Included</h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    {includedFeatures.map((item, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="bg-green-100 rounded-full p-1 mt-0.5 flex-shrink-0">
                          <Check className="w-4 h-4 text-green-600" />
                        </div>
                        <span className="text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                  <div className="text-center mt-10">
                    <Link to="/contact">
                      <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-10 py-6 text-lg font-semibold transition-all duration-300 transform hover:scale-105">
                        Get a Personalized Quote
                      </Button>
                    </Link>
                  </div>
                </Card>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Additional Services */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <FadeIn>
              <div className="max-w-4xl mx-auto">
                <Card className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-10 border-2 border-purple-200 shadow-lg">
                  <div className="flex items-start gap-6">
                    <div className="bg-gradient-to-br from-purple-500 to-pink-500 w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Camera className="w-7 h-7 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-4 text-gray-800">Additional Services</h3>
                      <p className="text-xl text-gray-700 leading-relaxed">
                        In addition to social media management, Maria also offers <span className="font-semibold text-purple-700">photo editing and brand photography for restaurants and businesses</span>. Please inquire directly to discuss these services.
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600">
          <div className="container mx-auto px-6 text-center">
            <FadeIn>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Elevate Your Social Presence?
              </h2>
              <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
                Let's discuss how we can help your brand thrive online.
              </p>
              <Link to="/contact">
                <Button
                  size="lg"
                  className="bg-white text-purple-600 hover:bg-gray-100 px-10 py-6 text-lg font-semibold transition-all duration-300 transform hover:scale-105"
                >
                  Contact Us Today <ArrowRight className="ml-2 w-5 h-5" />
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

export default ServicesPage;
