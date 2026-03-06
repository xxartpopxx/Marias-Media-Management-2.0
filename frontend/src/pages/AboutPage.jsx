import React, { Suspense, lazy, memo } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Award, Users, Heart, BookOpen } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { FadeIn, FloatingImage, StaggerChildren } from '../components/animations';
import SEOHead from '../components/SEOHead';
import { nonprofitPartners } from '../mock';

const Footer = lazy(() => import('../components/Footer').then(m => ({ default: m.Footer })));
const FloatingContact = lazy(() => import('../components/FloatingContact').then(m => ({ default: m.FloatingContact })));

const SectionLoader = memo(() => (
  <div className="min-h-[100px] flex items-center justify-center bg-transparent">
    <div className="w-6 h-6 border-2 border-purple-200 border-t-purple-600 rounded-full animate-spin"></div>
  </div>
));

export const AboutPage = () => {
  const highlights = [
    { icon: Award, title: "MPH Graduate", description: "Boston University School of Medicine" },
    { icon: Users, title: "Global Clients", description: "Supporting brands worldwide" },
    { icon: Heart, title: "Nonprofit Focus", description: "Dedicated to meaningful causes" },
    { icon: BookOpen, title: "Research Background", description: "Data-driven strategies" }
  ];

  return (
    <>
      <SEOHead
        title="About Maria | Maria's Media Management"
        description="Meet Maria Mongiardo - a storyteller blending science, public health, research, and digital strategy to help brands connect with real people in meaningful ways."
        keywords="Maria Mongiardo, social media expert, digital strategist, Boston, public health, brand storytelling"
        canonical="https://mariasmediamanagement.com/about"
      />

      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-b from-purple-50 to-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-pink-100 rounded-full filter blur-3xl opacity-30"></div>
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-100 rounded-full filter blur-3xl opacity-30"></div>
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
              <FadeIn direction="right">
                <div className="relative">
                  <div className="absolute -top-6 -left-6 w-full h-full bg-gradient-to-br from-purple-200 to-pink-200 rounded-3xl"></div>
                  <FloatingImage
                    src="https://images.ctfassets.net/ef34o61n7ee2/315eYhq4Pd2VAFokRA2dlg/07587558fcb0cabec06c599e72015a65/maria.mongiardo_67077307_195168964832873_4373870044423530444_n.jpg"
                    alt="Maria Mongiardo - Founder of Maria's Media Management"
                    className="relative rounded-3xl shadow-2xl w-full object-cover"
                    floatRange={10}
                    duration={5000}
                  />
                </div>
              </FadeIn>

              <FadeIn direction="left" delay={200}>
                <div>
                  <h1 className="text-5xl md:text-6xl font-bold mb-8">
                    Meet <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">Maria</span>
                  </h1>
                  <p className="text-xl font-semibold text-purple-900 mb-6 leading-relaxed">
                    Maria Mongiardo is a storyteller at heart — blending backgrounds in science, public health, research, and digital strategy to help brands and nonprofits connect with real people in meaningful ways.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Born and raised on the North Shore of Massachusetts, Maria earned her Bachelor's degree from Clark University and her Master of Public Health from Boston University School of Medicine.
                  </p>
                  <Link to="/contact">
                    <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-6 text-lg font-semibold transition-all duration-300 transform hover:scale-105">
                      Work With Maria <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                  </Link>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Highlights */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <StaggerChildren className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto" staggerDelay={100}>
              {highlights.map((item, index) => {
                const Icon = item.icon;
                return (
                  <Card
                    key={index}
                    className="p-6 text-center bg-gradient-to-br from-purple-50 to-pink-50 border-2 border-purple-100 rounded-2xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                  >
                    <div className="bg-gradient-to-br from-purple-500 to-pink-500 w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-bold text-gray-800 mb-1">{item.title}</h3>
                    <p className="text-gray-600 text-sm">{item.description}</p>
                  </Card>
                );
              })}
            </StaggerChildren>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-20 bg-gradient-to-b from-white to-purple-50">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <FadeIn>
                <Card className="bg-white rounded-3xl p-10 md:p-12 shadow-xl border border-purple-100">
                  <h2 className="text-3xl font-bold mb-8 text-center">
                    My <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">Story</span>
                  </h2>
                  
                  <div className="space-y-6 text-gray-700 leading-relaxed">
                    <p>
                      While deeply passionate about health and research, I have also been immersed in online communities since my early Tumblr days — building connections, creating content, and helping others tell their stories.
                    </p>
                    
                    <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-6 my-8">
                      <p className="font-semibold text-purple-900 mb-4">Over the years, I've supported nonprofits such as:</p>
                      <ul className="grid md:grid-cols-2 gap-2">
                        {nonprofitPartners.map((org, index) => (
                          <li key={index} className="flex items-center">
                            <span className="text-purple-500 mr-2">•</span>
                            <span className="text-gray-700">{org}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <p>
                      Today, I partner with entrepreneurs, clinics, chefs, coaches, salons, trainers, and creative business owners — providing strategy, content support, and digital growth guidance.
                    </p>
                    
                    <p className="text-xl font-semibold text-purple-900 pt-4 text-center">
                      My goal is simple: help good people and meaningful brands shine online.
                    </p>
                  </div>
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
                Let's Work Together
              </h2>
              <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
                Ready to elevate your brand's online presence?
              </p>
              <Link to="/contact">
                <Button
                  size="lg"
                  className="bg-white text-purple-600 hover:bg-gray-100 px-10 py-6 text-lg font-semibold transition-all duration-300 transform hover:scale-105"
                >
                  Get in Touch <ArrowRight className="ml-2 w-5 h-5" />
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

export default AboutPage;
