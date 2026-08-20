import { useState, useEffect } from 'react';
import { MessageCircle, X, Send, Mail, User, MessageSquare } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { toast } from 'sonner';

// Helper to encode data for Netlify form submission
const encode = (data) =>
  Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');

export const FloatingContact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 140);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll + close on Escape while modal open
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    document.addEventListener('keydown', onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [isOpen]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

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
      setIsOpen(false);
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

  return (
    <>
      {/* Floating button */}
      <div
        className={`fixed bottom-6 right-6 md:bottom-8 md:right-8 z-40 transition-all duration-500 transform ${
          isVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-20 opacity-0 scale-0'
        }`}
        role="complementary"
        aria-label="Quick contact"
      >
        <div className="relative animate-float">
          {/* Pop-in tooltip bubble */}
          <span className="hidden sm:block absolute -top-11 right-0 bg-white text-purple-700 text-sm font-semibold px-4 py-2 rounded-2xl rounded-br-none shadow-xl whitespace-nowrap animate-bounceIn">
            👋 Let&apos;s build your website!
          </span>

          {/* Expanding glow rings for extra attention */}
          <span
            className="absolute inset-0 rounded-full bg-pink-500/40 animate-ping"
            style={{ animationDuration: '2.5s' }}
            aria-hidden="true"
          ></span>
          <span
            className="absolute -inset-1 rounded-full bg-gradient-to-r from-purple-500/50 to-pink-500/50 blur-md animate-pulse-glow"
            aria-hidden="true"
          ></span>

          <Button
            onClick={() => setIsOpen(true)}
            size="lg"
            className="relative bg-gradient-to-r from-purple-600 via-fuchsia-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-full px-7 py-7 text-base font-bold shadow-2xl hover:shadow-purple-500/60 transition-all duration-300 transform hover:scale-110 animate-pulse-slow"
            style={{ boxShadow: '0 12px 45px rgba(217, 70, 239, 0.55)' }}
            aria-label="Contact Maria - Open contact form"
          >
            <MessageCircle className="w-7 h-7 mr-2 animate-wave" aria-hidden="true" />
            <span>Contact Maria</span>
          </Button>

          {/* Online status dot */}
          <span className="absolute -top-1 -right-1 flex h-4 w-4" aria-hidden="true">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-4 w-4 bg-green-500 border-2 border-white"></span>
          </span>
        </div>
      </div>

      {/* Contact form modal */}
      {isOpen && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="floating-contact-title"
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-gray-900/70 backdrop-blur-sm animate-fadeIn"
            onClick={() => setIsOpen(false)}
            aria-hidden="true"
          ></div>

          {/* Modal card */}
          <div className="relative w-full max-w-lg bg-gradient-to-br from-white to-purple-50 rounded-3xl shadow-2xl border-2 border-purple-100 max-h-[90vh] overflow-y-auto animate-bounceIn">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 p-2 rounded-full text-gray-500 hover:text-purple-600 hover:bg-purple-100 transition-colors duration-200"
              aria-label="Close contact form"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="p-8 md:p-10">
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 mb-4 shadow-lg">
                  <MessageCircle className="w-7 h-7 text-white" aria-hidden="true" />
                </div>
                <h2 id="floating-contact-title" className="text-3xl font-bold mb-2">
                  Let&apos;s{' '}
                  <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
                    Connect
                  </span>
                </h2>
                <p className="text-gray-600">Tell Maria about your project — she&apos;ll get back to you soon!</p>
              </div>

              <form
                name="contact"
                method="POST"
                data-netlify="true"
                netlify-honeypot="bot-field"
                onSubmit={handleSubmit}
                className="space-y-4"
              >
                <input type="hidden" name="form-name" value="contact" />
                <p hidden>
                  <label>
                    Don&apos;t fill this out: <input name="bot-field" onChange={() => {}} />
                  </label>
                </p>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="relative">
                    <label htmlFor="fc-firstName" className="sr-only">First Name</label>
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-purple-400 w-5 h-5" aria-hidden="true" />
                    <Input
                      id="fc-firstName"
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
                    <label htmlFor="fc-lastName" className="sr-only">Last Name</label>
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-purple-400 w-5 h-5" aria-hidden="true" />
                    <Input
                      id="fc-lastName"
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
                  <label htmlFor="fc-email" className="sr-only">Email Address</label>
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-purple-400 w-5 h-5" aria-hidden="true" />
                  <Input
                    id="fc-email"
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
                  <label htmlFor="fc-message" className="sr-only">Your Message</label>
                  <MessageSquare className="absolute left-3 top-4 text-purple-400 w-5 h-5" aria-hidden="true" />
                  <Textarea
                    id="fc-message"
                    name="message"
                    placeholder="Tell me about your project..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="pl-12 pt-4 border-2 border-purple-200 focus:border-purple-400 rounded-xl transition-colors duration-300 resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white py-6 text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none"
                  aria-label={isSubmitting ? 'Sending your message' : 'Send message to Maria'}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                  <Send className="ml-2 w-5 h-5" aria-hidden="true" />
                </Button>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
