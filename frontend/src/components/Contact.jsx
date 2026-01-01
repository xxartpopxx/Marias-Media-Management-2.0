import { useState, useEffect, useRef } from 'react';
import { Send, Mail, User, MessageSquare } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { toast } from 'sonner';

// Helper to encode data for Netlify form submission
const encode = (data) =>
  Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');

export const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const current = sectionRef.current;
    if (current) {
      observer.observe(current);
    }

    return () => {
      if (current) {
        observer.unobserve(current);
      }
    };
  }, []);

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
        description:
          'Thank you for reaching out. Maria will get back to you soon!',
        duration: 5000,
      });

      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        message: '',
      });

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
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-20 bg-white relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-96 h-96 bg-purple-100 rounded-full filter blur-3xl opacity-20"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-100 rounded-full filter blur-3xl opacity-20"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div
          className={`text-center mb-16 transition-all duration-1000 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            Let's Create Something{' '}
            <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
              Meaningful Together
            </span>
          </h2>
          <p className="text-xl text-gray-600">
            Ready to transform your social media presence?
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div
            className={`bg-gradient-to-br from-white to-purple-50 rounded-3xl shadow-2xl p-8 md:p-12 border-2 border-purple-100 transition-all duration-1000 delay-300 transform ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <form
              name="contact"
              method="POST"
              data-netlify="true"
              netlify-honeypot="bot-field"
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              {/* Netlify wiring */}
              <input type="hidden" name="form-name" value="contact" />
              <p hidden>
                <label>
                  Don’t fill this out: <input name="bot-field" onChange={() => {}} />
                </label>
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-purple-400 w-5 h-5" />
                  <Input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="pl-12 py-6 border-2 border-purple-200 focus:border-purple-400 rounded-xl transition-colors duration-300"
                  />
                </div>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-purple-400 w-5 h-5" />
                  <Input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className="pl-12 py-6 border-2 border-purple-200 focus:border-purple-400 rounded-xl transition-colors duration-300"
                  />
                </div>
              </div>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-purple-400 w-5 h-5" />
                <Input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="pl-12 py-6 border-2 border-purple-200 focus:border-purple-400 rounded-xl transition-colors duration-300"
                />
              </div>
              <div className="relative">
                <MessageSquare className="absolute left-3 top-4 text-purple-400 w-5 h-5" />
                <Textarea
                  name="message"
                  placeholder="Your Message"
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
          </div>
        </div>
      </div>
    </section>
  );
};
