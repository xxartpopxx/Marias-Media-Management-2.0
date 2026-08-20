import React, { Suspense, lazy, memo } from 'react';
import { Link } from 'react-router-dom';
import {
  Activity, Map, Syringe, Calculator, BarChart3, ShieldCheck,
  Microscope, BookOpen, ArrowRight, ExternalLink, Globe, HeartPulse
} from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { FadeIn, StaggerChildren } from '../components/animations';
import SEOHead from '../components/SEOHead';

const Footer = lazy(() => import('../components/Footer').then(m => ({ default: m.Footer })));
const FloatingContact = lazy(() => import('../components/FloatingContact').then(m => ({ default: m.FloatingContact })));

const SectionLoader = memo(() => (
  <div className="min-h-[100px] flex items-center justify-center bg-transparent">
    <div className="w-6 h-6 border-2 border-teal-200 border-t-teal-500 rounded-full animate-spin"></div>
  </div>
));

const EPISPLAIN_URL = 'https://episplain.org/';

const features = [
  {
    icon: Map,
    title: 'Chronic Disease Maps',
    description: 'Interactive maps that visualize chronic disease prevalence across regions, making population health patterns easy to explore.'
  },
  {
    icon: Activity,
    title: 'Autoimmune Disease Data',
    description: 'Clear, curated data on autoimmune conditions that helps researchers, students, and the public understand real-world trends.'
  },
  {
    icon: Syringe,
    title: 'Vaccine Coverage Dashboards',
    description: 'Live dashboards tracking vaccination coverage so communities can see progress and identify gaps at a glance.'
  },
  {
    icon: Calculator,
    title: 'Risk Calculators',
    description: 'Easy-to-use calculators that translate complex epidemiological models into personalized, understandable risk insights.'
  },
  {
    icon: BarChart3,
    title: 'Data Storytelling',
    description: 'Public health data presented through charts and narratives that turn numbers into meaningful, actionable knowledge.'
  },
  {
    icon: ShieldCheck,
    title: 'Health Literacy',
    description: 'Plain-language explanations that empower everyone — not just experts — to make informed decisions about their health.'
  }
];

export const EpiSplainPage = () => {
  return (
    <>
      <SEOHead
        title="Epidemiology & Public Health | EpiSplain"
        description="Explore epidemiology and public health made simple. Interactive chronic disease maps, vaccine coverage dashboards, autoimmune data, and risk calculators — powered by EpiSplain."
        keywords="epidemiology, public health, EpiSplain, chronic disease maps, vaccine coverage, autoimmune data, risk calculators, health literacy"
        canonical="https://mariasmediamanagement.com/episplain"
      />

      <main className="pt-24">
        {/* Hero */}
        <section className="py-16 bg-gradient-to-br from-slate-900 via-teal-900 to-slate-900 relative overflow-hidden">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-teal-500 rounded-full filter blur-[150px] opacity-20 animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500 rounded-full filter blur-[150px] opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>

          <div className="container mx-auto px-6 relative z-10">
            <FadeIn>
              <div className="text-center max-w-4xl mx-auto">
                <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-5 py-2 mb-8">
                  <HeartPulse className="w-4 h-4 text-teal-300" aria-hidden="true" />
                  <span className="text-sm text-teal-100 font-medium">Public Health Education</span>
                </div>
                <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 text-white">
                  Epidemiology &amp; <span className="animate-text-gradient">Public Health</span>
                </h1>
                <p className="text-lg md:text-xl text-slate-300 mb-10 leading-relaxed">
                  Complex health data, made human. EpiSplain turns epidemiology and public health into
                  interactive maps, dashboards, and tools anyone can understand — so knowledge reaches
                  the people who need it most.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <a href={EPISPLAIN_URL} target="_blank" rel="noopener noreferrer" aria-label="Explore EpiSplain - Opens in new tab">
                    <Button
                      size="lg"
                      className="bg-gradient-to-r from-teal-500 to-blue-500 hover:from-teal-600 hover:to-blue-600 text-white px-8 py-6 text-lg font-semibold transition-all duration-300 transform hover:scale-105"
                      style={{ boxShadow: '0 10px 40px rgba(20, 184, 166, 0.4)' }}
                    >
                      Explore EpiSplain <ExternalLink className="ml-2 w-5 h-5" aria-hidden="true" />
                    </Button>
                  </a>
                  <Link to="/contact">
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-2 border-white/30 text-white hover:bg-white/10 px-8 py-6 text-lg font-semibold transition-all duration-300"
                    >
                      Get in Touch
                    </Button>
                  </Link>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* What is EpiSplain */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
              <FadeIn direction="right">
                <div>
                  <div className="inline-flex items-center gap-2 bg-teal-50 text-teal-700 px-4 py-2 rounded-full mb-6 border border-teal-100">
                    <Microscope className="w-4 h-4" aria-hidden="true" />
                    <span className="text-sm font-medium">What is EpiSplain?</span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                    An interactive platform that makes public health data{' '}
                    <span className="bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">accessible to everyone</span>
                  </h2>
                  <p className="text-lg text-gray-600 leading-relaxed mb-6">
                    EpiSplain bridges the gap between rigorous epidemiological research and everyday
                    understanding. Through interactive chronic disease maps, autoimmune disease data,
                    vaccine coverage dashboards, and personal risk calculators, it transforms dense
                    datasets into clear, engaging, and trustworthy insights.
                  </p>
                  <a href={EPISPLAIN_URL} target="_blank" rel="noopener noreferrer"
                     className="inline-flex items-center gap-2 text-teal-600 hover:text-teal-700 font-semibold transition-colors">
                    Visit episplain.org <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </a>
                </div>
              </FadeIn>
              <FadeIn direction="left" delay={150}>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { icon: Globe, label: 'Population Health' },
                    { icon: BarChart3, label: 'Data Dashboards' },
                    { icon: BookOpen, label: 'Health Education' },
                    { icon: ShieldCheck, label: 'Trusted Insights' },
                  ].map((item, i) => {
                    const Icon = item.icon;
                    return (
                      <div key={i} className="bg-gradient-to-br from-teal-50 to-blue-50 rounded-2xl p-6 border border-teal-100 text-center hover:-translate-y-1 transition-transform duration-300">
                        <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-gradient-to-br from-teal-500 to-blue-500 flex items-center justify-center">
                          <Icon className="w-6 h-6 text-white" aria-hidden="true" />
                        </div>
                        <p className="font-semibold text-gray-800">{item.label}</p>
                      </div>
                    );
                  })}
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-16 bg-gradient-to-b from-slate-50 to-white">
          <div className="container mx-auto px-6">
            <FadeIn>
              <div className="text-center max-w-3xl mx-auto mb-12">
                <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gray-900">
                  Explore the <span className="bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">Tools</span>
                </h2>
                <p className="text-lg text-gray-600">
                  Everything you need to understand public health trends — designed for researchers,
                  students, and curious minds alike.
                </p>
              </div>
            </FadeIn>

            <StaggerChildren className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto" staggerDelay={120}>
              {features.map((feature, i) => {
                const Icon = feature.icon;
                return (
                  <Card key={i} className="group bg-white rounded-2xl p-8 border border-gray-100 hover:border-teal-200 hover:shadow-xl transition-all duration-500 hover:-translate-y-2 magnetic-hover">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-teal-500 to-blue-500 flex items-center justify-center mb-5 transform group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-7 h-7 text-white" aria-hidden="true" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-teal-600 transition-colors duration-300">{feature.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                  </Card>
                );
              })}
            </StaggerChildren>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-gradient-to-r from-teal-600 to-blue-600">
          <div className="container mx-auto px-6 text-center">
            <FadeIn>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Ready to explore public health data?
              </h2>
              <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
                Dive into interactive maps, dashboards, and tools on EpiSplain — where epidemiology
                becomes something everyone can understand.
              </p>
              <a href={EPISPLAIN_URL} target="_blank" rel="noopener noreferrer" aria-label="Go to EpiSplain - Opens in new tab">
                <Button
                  size="lg"
                  className="bg-white text-teal-600 hover:bg-gray-100 px-10 py-6 text-lg font-semibold transition-all duration-300 transform hover:scale-105"
                >
                  Go to EpiSplain <ExternalLink className="ml-2 w-5 h-5" aria-hidden="true" />
                </Button>
              </a>
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

export default EpiSplainPage;
