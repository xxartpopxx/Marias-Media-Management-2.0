import React, { Suspense, lazy, memo, useState } from 'react';
import { Send, Mail, User, MessageSquare, MapPin, Phone, Clock, Instagram, Facebook } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Card } from '../components/ui/card';
import { FadeIn, StaggerChildren } from '../components/animations';
import SEOHead from '../components/SEOHead';
import { toast } from 'sonner';
import { socialLinks } from '../mock';

const Footer = lazy(() => import('../components/Footer').then(m => ({ default: m.Footer })));
const FloatingContact = lazy(() => import('../components/FloatingContact').then(m => ({ default: m.FloatingContact })));

const SectionLoader = memo(() => (
  <div className="min-h-[100px] flex items-center justify-center bg-transparent">
    <div className="w-6 h-6 border-2 border-purple-200 border-t-purple-600 rounded-full animate-spin"></div>
  </div>
));

const encode = (data) =>
  Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');

export const ContactPage = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const form = e.target;
      const data = {
        'form-name': form.getAttribute('name'),
        ...formData,
      };

      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode(data),
      });

      toast.success('Message Sent!', {
        description: 'Thank you for reaching out. Maria will get back to you soon!',
        duration: 5000,
      });

      setFormData({ firstName: '', lastName: '', email: '', message: '' });
      form.reset();
    } catch (error) {
      console.error('Form submission error:', error);
      toast.error('Something went wrong', {
        description: 'Please try again in a moment.',
        duration: 5000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const contactInfo = [
    { icon: MapPin, title: "Location", value: "North Shore, Massachusetts", subtext: "Serving clients globally" },
    { icon: Mail, title: "Email", value: "mariamongiardo15@gmail.com", link: "mailto:mariamongiardo15@gmail.com" },
    { icon: Clock, title: "Response Time", value: "Within 24-48 hours", subtext: "Business days" }
  ];

  return (
    <>
      <SEOHead
        title="Contact | Get in Touch | Maria's Media Management"
        description="Ready to transform your social media presence? Contact Maria's Media Management for a free consultation. Based in Massachusetts, serving clients globally."
        keywords="contact, social media consultation, get in touch, Boston, Massachusetts, free consultation"
        canonical="https://mariasmediamanagement.com/contact"
      />

      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-b from-purple-50 to-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-purple-100 rounded-full filter blur-3xl opacity-30"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-pink-100 rounded-full filter blur-3xl opacity-30"></div>
          
          <div className="container mx-auto px-6 relative z-10">
            <FadeIn>
              <div className="text-center max-w-3xl mx-auto">
                <h1 className="text-5xl md:text-7xl font-bold mb-8">
                  Let's Create Something{' '}
                  <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
                    Meaningful Together
                  </span>
                </h1>
                <p className="text-xl text-gray-600">
                  Ready to transform your social media presence? Get in touch today.
                </p>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Contact Info Cards */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <StaggerChildren className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto" staggerDelay={100}>
              {contactInfo.map((item, index) => {
                const Icon = item.icon;
                return (
                  <Card
                    key={index}
                    className="p-6 text-center bg-gradient-to-br from-purple-50 to-pink-50 border-2 border-purple-100 rounded-2xl hover:shadow-lg transition-all duration-300"
                  >
                    <div className="bg-gradient-to-br from-purple-500 to-pink-500 w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="font-bold text-gray-800 mb-2">{item.title}</h3>
                    {item.link ? (
                      <a href={item.link} className="text-purple-600 hover:text-purple-700 font-medium">
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-gray-700 font-medium">{item.value}</p>
                    )}
                    {item.subtext && <p className="text-gray-500 text-sm mt-1">{item.subtext}</p>}
                  </Card>
                );
              })}
            </StaggerChildren>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-20 bg-gradient-to-b from-white to-purple-50">
          <div className="container mx-auto px-6">
            <div className="max-w-2xl mx-auto">
              <FadeIn>
                <Card className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border-2 border-purple-100">
                  <h2 className="text-3xl font-bold text-center mb-8">
                    Send a <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">Message</span>
                  </h2>
                  
                  <form
                    name="contact"
                    method="POST"
                    data-netlify="true"
                    netlify-honeypot="bot-field"
                    onSubmit={handleSubmit}
                    className="space-y-6"
                  >
                    <input type="hidden" name="form-name" value="contact" />
                    <p hidden>
                      <label>Don't fill this out: <input name="bot-field" onChange={() => {}} /></label>
                    </p>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="relative">
                        <label htmlFor="firstName" className="sr-only">First Name</label>
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-purple-400 w-5 h-5" />
                        <Input
                          id="firstName"
                          type="text"
                          name="firstName"
                          placeholder="First Name"
                          value={formData.firstName}
                          onChange={handleChange}
                          required
                          autoComplete="given-name"
                          className="pl-12 py-6 border-2 border-purple-200 focus:border-purple-400 rounded-xl transition-colors duration-300"
                        />
                      </div>
                      <div className="relative">
                        <label htmlFor="lastName" className="sr-only">Last Name</label>
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-purple-400 w-5 h-5" />
                        <Input
                          id="lastName"
                          type="text"
                          name="lastName"
                          placeholder="Last Name"
                          value={formData.lastName}
                          onChange={handleChange}
                          required
                          autoComplete="family-name"
                          className="pl-12 py-6 border-2 border-purple-200 focus:border-purple-400 rounded-xl transition-colors duration-300"
                        />
                      </div>
                    </div>
                    
                    <div className="relative">
                      <label htmlFor="email" className="sr-only">Email Address</label>
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-purple-400 w-5 h-5" />
                      <Input
                        id="email"
                        type="email"
                        name="email"
                        placeholder="Email Address"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        autoComplete="email"
                        className="pl-12 py-6 border-2 border-purple-200 focus:border-purple-400 rounded-xl transition-colors duration-300"
                      />
                    </div>
                    
                    <div className="relative">
                      <label htmlFor="message" className="sr-only">Your Message</label>
                      <MessageSquare className="absolute left-3 top-4 text-purple-400 w-5 h-5" />
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Tell us about your project or goals..."
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="pl-12 pt-4 border-2 border-purple-200 focus:border-purple-400 rounded-xl transition-colors duration-300 resize-none"
                      />
                    </div>
                    
                    <Button
                      type="submit"
                      size="lg"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white py-6 text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none"
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                      <Send className="ml-2 w-5 h-5" />
                    </Button>
                  </form>
                </Card>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Social Links */}
        <section className="py-16 bg-purple-50">
          <div className="container mx-auto px-6">
            <FadeIn>
              <div className="text-center">
                <h2 className="text-2xl font-bold mb-6">Connect on Social Media</h2>
                <div className="flex justify-center gap-4">
                  <a
                    href={socialLinks.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-br from-purple-500 to-pink-500 p-4 rounded-full text-white hover:scale-110 transition-transform duration-300"
                    aria-label="Follow on Instagram"
                  >
                    <Instagram className="w-6 h-6" />
                  </a>
                  <a
                    href={socialLinks.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-600 p-4 rounded-full text-white hover:scale-110 transition-transform duration-300"
                    aria-label="Follow on Facebook"
                  >
                    <Facebook className="w-6 h-6" />
                  </a>
                  <a
                    href="mailto:mariamongiardo15@gmail.com"
                    className="bg-gray-800 p-4 rounded-full text-white hover:scale-110 transition-transform duration-300"
                    aria-label="Send email"
                  >
                    <Mail className="w-6 h-6" />
                  </a>
                </div>
              </div>
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

export default ContactPage;
