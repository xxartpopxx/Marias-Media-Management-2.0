import React, { Suspense, lazy, memo } from 'react';
import { Star, Quote, Facebook, Instagram, ExternalLink, ThumbsUp } from 'lucide-react';
import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { FadeIn, StaggerChildren } from '../components/animations';
import SEOHead from '../components/SEOHead';
import { testimonials, facebookReviewsLink, googleReviewsLink } from '../mock';

const Footer = lazy(() => import('../components/Footer').then(m => ({ default: m.Footer })));
const FloatingContact = lazy(() => import('../components/FloatingContact').then(m => ({ default: m.FloatingContact })));

const SectionLoader = memo(() => (
  <div className="min-h-[100px] flex items-center justify-center bg-transparent">
    <div className="w-6 h-6 border-2 border-purple-200 border-t-purple-600 rounded-full animate-spin"></div>
  </div>
));

export const ReviewsPage = () => {
  return (
    <>
      <SEOHead
        title="Reviews & Testimonials | Maria's Media Management"
        description="Read reviews from satisfied clients. See what entrepreneurs, clinics, and brands say about working with Maria's Media Management for social media and web design services."
        keywords="reviews, testimonials, client feedback, social media management reviews, web design reviews, Maria Mongiardo"
        canonical="https://mariasmediamanagement.com/reviews"
      />

      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-b from-purple-50 to-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-pink-100 rounded-full filter blur-3xl opacity-30"></div>
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-100 rounded-full filter blur-3xl opacity-30"></div>
          
          <div className="container mx-auto px-6 relative z-10">
            <FadeIn>
              <div className="text-center max-w-4xl mx-auto">
                <div className="flex justify-center gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-8 h-8 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <h1 className="text-5xl md:text-7xl font-bold mb-8">
                  Client <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">Reviews</span>
                </h1>
                <p className="text-xl text-gray-600 mb-10">
                  Don't just take our word for it — hear what our clients have to say about working with Maria's Media Management.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <a href={facebookReviewsLink} target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" className="border-2 border-blue-500 text-blue-600 hover:bg-blue-50">
                      <Facebook className="w-5 h-5 mr-2" /> Facebook Reviews
                    </Button>
                  </a>
                  <a href={googleReviewsLink} target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" className="border-2 border-green-500 text-green-600 hover:bg-green-50">
                      <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                        <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                        <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                        <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                        <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                      </svg>
                      Google Reviews
                    </Button>
                  </a>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* All Reviews Horizontal Gallery */}
        <section className="py-20 bg-gradient-to-b from-white to-purple-50">
          <div className="container mx-auto px-6">
            <FadeIn>
              <h2 className="text-3xl font-bold text-center mb-8">
                All <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">Reviews</span>
              </h2>
            </FadeIn>

            {/* Horizontal Scrollable Gallery */}
            <div className="relative">
              <div 
                className="flex gap-6 overflow-x-auto pb-6 px-4 snap-x snap-mandatory scrollbar-hide"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
              >
                {testimonials.map((review) => (
                  <Card
                    key={review.id}
                    className="flex-shrink-0 w-[350px] md:w-[420px] snap-start bg-white rounded-3xl p-8 border-2 border-purple-100 hover:border-purple-300 hover:shadow-xl transition-all duration-300 flex flex-col"
                  >
                    {/* Source Badge */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                      {review.source === 'facebook' ? (
                        <span className="flex items-center gap-1 text-xs text-blue-600 bg-blue-50 px-2 py-1 rounded-full">
                          <Facebook className="w-3 h-3" /> Facebook
                        </span>
                      ) : review.instagram ? (
                        <span className="flex items-center gap-1 text-xs text-pink-600 bg-pink-50 px-2 py-1 rounded-full">
                          <Instagram className="w-3 h-3" /> Client
                        </span>
                      ) : null}
                    </div>

                    {review.recommends && (
                      <div className="flex items-center gap-2 mb-3 text-green-600 text-sm">
                        <ThumbsUp className="w-4 h-4" />
                        <span className="font-medium">Recommends</span>
                      </div>
                    )}
                    
                    <Quote className="w-8 h-8 text-purple-200 mb-3" />
                    
                    <p className="text-gray-700 leading-relaxed mb-6 flex-grow">
                      "{review.text}"
                    </p>
                    
                    <div className="flex items-center gap-4 pt-4 border-t border-purple-100">
                      {review.image && (
                        <img
                          src={review.image}
                          alt={review.name}
                          className="w-12 h-12 rounded-full object-cover border-2 border-purple-200"
                          loading="lazy"
                        />
                      )}
                      <div className="flex-grow">
                        <p className="font-bold text-gray-800">{review.name}</p>
                        {review.company && (
                          <p className="text-purple-600 text-sm">{review.company}</p>
                        )}
                      </div>
                      {review.instagram && (
                        <a
                          href={review.instagram}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-pink-500 hover:text-pink-600 transition-colors"
                          aria-label={`Visit ${review.name}'s Instagram`}
                        >
                          <Instagram className="w-5 h-5" />
                        </a>
                      )}
                    </div>
                  </Card>
                ))}
              </div>
              
              <p className="text-center text-gray-400 mt-4">← Swipe to see more reviews →</p>
            </div>

            <FadeIn delay={500}>
              <div className="text-center mt-12 flex flex-wrap justify-center gap-4">
                <a href={facebookReviewsLink} target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="border-2 border-blue-500 text-blue-600 hover:bg-blue-50 px-6 py-5">
                    More on Facebook <ExternalLink className="w-4 h-4 ml-2" />
                  </Button>
                </a>
                <a href={googleReviewsLink} target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="border-2 border-green-500 text-green-600 hover:bg-green-50 px-6 py-5">
                    More on Google <ExternalLink className="w-4 h-4 ml-2" />
                  </Button>
                </a>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600">
          <div className="container mx-auto px-6">
            <FadeIn>
              <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto text-center">
                <div className="text-white">
                  <p className="text-5xl font-bold mb-2">3,100%</p>
                  <p className="text-white/80">Social Media Growth Achieved</p>
                </div>
                <div className="text-white">
                  <p className="text-5xl font-bold mb-2">300K+</p>
                  <p className="text-white/80">Monthly Audience Reach</p>
                </div>
                <div className="text-white">
                  <p className="text-5xl font-bold mb-2">5+ Years</p>
                  <p className="text-white/80">Client Partnerships</p>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6 text-center">
            <FadeIn>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Ready to Be Our Next <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">Success Story</span>?
              </h2>
              <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
                Join our growing list of satisfied clients and let's create something amazing together.
              </p>
              <a href="/contact">
                <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-10 py-6 text-lg font-semibold transition-all duration-300 transform hover:scale-105">
                  Start Your Project
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

export default ReviewsPage;
