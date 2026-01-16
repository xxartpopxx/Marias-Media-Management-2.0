import { useState, useEffect } from 'react';
import { MessageCircle } from 'lucide-react';
import { Button } from './ui/button';
import { scrollToContact } from '../lib/scrollUtils';

export const FloatingContact = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-8 right-8 z-40 transition-all duration-500 transform ${
        isVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-20 opacity-0 scale-0'
      }`}
      role="complementary"
      aria-label="Quick contact"
    >
      <Button
        onClick={scrollToContact}
        size="lg"
        className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-full px-6 py-6 shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-110 animate-pulse-slow"
        style={{
          boxShadow: '0 10px 40px rgba(168, 85, 247, 0.4)'
        }}
        aria-label="Contact Maria - Jump to contact form"
      >
        <MessageCircle className="w-6 h-6 mr-2" aria-hidden="true" />
        <span className="font-semibold">Contact Maria</span>
      </Button>
    </div>
  );
};
