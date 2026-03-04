import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Download, Instagram, Mail } from 'lucide-react';
import { Button } from './ui/button';
import { socialLinks, facebookReviewsLink, googleReviewsLink } from '../mock';

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsMobileMenuOpen(false);
    }
  };

  const handleMediaKitDownload = () => {
    window.open('https://customer-assets.emergentagent.com/job_a9efaa07-0c20-4f2e-84b4-40005799affc/artifacts/bd8rz450_Media%20kit.pdf', '_blank');
  };

  // Facebook Icon Component
  const FacebookIcon = ({ className }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
    </svg>
  );

  // Google Icon Component
  const GoogleIcon = ({ className }) => (
    <svg className={className} viewBox="0 0 24 24">
      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
    </svg>
  );

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-gray-900/95 backdrop-blur-md shadow-lg' : 'bg-gray-900/80 backdrop-blur-sm'
      }`}
      role="banner"
    >
      <nav className="container mx-auto px-6 py-3" aria-label="Main navigation">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center" aria-label="Maria's Media Management - Home">
            <img 
              src="https://customer-assets.emergentagent.com/job_a9efaa07-0c20-4f2e-84b4-40005799affc/artifacts/ml1q1ugm_Maria%27s%20Media%20Kit.png" 
              alt="Maria's Media Management Logo"
              width="80"
              height="80"
              className="h-20 w-auto"
              loading="eager"
              decoding="async"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6" aria-label="Main navigation">
            <button 
              onClick={() => scrollToSection('home')} 
              className="text-white hover:text-purple-300 transition-colors duration-200 font-medium"
              aria-label="Go to Home section"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('about')} 
              className="text-white hover:text-purple-300 transition-colors duration-200 font-medium"
              aria-label="Go to Meet Maria section"
            >
              Meet Maria
            </button>
            <button 
              onClick={() => scrollToSection('services')} 
              className="text-white hover:text-purple-300 transition-colors duration-200 font-medium"
              aria-label="Go to Social Media Services section"
            >
              Social Media Services
            </button>
            <button 
              onClick={() => scrollToSection('portfolio')} 
              className="text-white hover:text-purple-300 transition-colors duration-200 font-medium"
              aria-label="Go to Website Portfolio section"
            >
              Website Portfolio
            </button>
            <button 
              onClick={() => scrollToSection('shop')} 
              className="text-white hover:text-purple-300 transition-colors duration-200 font-medium"
              aria-label="Go to Shop section"
            >
              Shop
            </button>
            <button 
              onClick={handleMediaKitDownload} 
              className="text-white hover:text-purple-300 transition-colors duration-200 font-medium flex items-center gap-1"
              aria-label="Download Media Kit PDF"
            >
              <Download className="w-4 h-4" aria-hidden="true" />
              Media Kit
            </button>
            <button 
              onClick={() => scrollToSection('contact')} 
              className="text-white hover:text-purple-300 transition-colors duration-200 font-medium"
              aria-label="Go to Contact section"
            >
              Contact
            </button>
            
            {/* Social Icons */}
            <div className="flex items-center space-x-3 border-l border-gray-600 pl-4 ml-2">
              <a
                href={socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-blue-400 transition-colors duration-200"
                aria-label="Follow on Facebook - Opens in new tab"
              >
                <FacebookIcon className="w-5 h-5" />
              </a>
              <a
                href={socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-pink-400 transition-colors duration-200"
                aria-label="Follow on Instagram - Opens in new tab"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href={googleReviewsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-green-400 transition-colors duration-200"
                aria-label="View Google Reviews - Opens in new tab"
              >
                <GoogleIcon className="w-5 h-5" />
              </a>
              <a
                href="mailto:mariamongiardo15@gmail.com"
                className="text-white hover:text-purple-400 transition-colors duration-200"
                aria-label="Send email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>

            <Link
              to="/shop"
              aria-label="Visit Etsy Shop"
            >
              <Button 
                className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold transform hover:scale-105 transition-all duration-300"
                style={{
                  boxShadow: '0 4px 15px rgba(249, 115, 22, 0.3)'
                }}
              >
                Shop Etsy
              </Button>
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white hover:text-purple-300"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          >
            {isMobileMenuOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav id="mobile-menu" className="lg:hidden mt-4 pb-4 space-y-4 animate-in slide-in-from-top" aria-label="Mobile navigation">
            <button 
              onClick={() => scrollToSection('home')} 
              className="block w-full text-left text-white hover:text-purple-300 transition-colors duration-200 font-medium"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('about')} 
              className="block w-full text-left text-white hover:text-purple-300 transition-colors duration-200 font-medium"
            >
              Meet Maria
            </button>
            <button 
              onClick={() => scrollToSection('services')} 
              className="block w-full text-left text-white hover:text-purple-300 transition-colors duration-200 font-medium"
            >
              Social Media Services
            </button>
            <button 
              onClick={() => scrollToSection('portfolio')} 
              className="block w-full text-left text-white hover:text-purple-300 transition-colors duration-200 font-medium"
            >
              Website Portfolio
            </button>
            <button 
              onClick={() => scrollToSection('shop')} 
              className="block w-full text-left text-white hover:text-purple-300 transition-colors duration-200 font-medium"
            >
              Shop
            </button>
            <button 
              onClick={handleMediaKitDownload} 
              className="block w-full text-left text-white hover:text-purple-300 transition-colors duration-200 font-medium"
            >
              Download Media Kit
            </button>
            <button 
              onClick={() => scrollToSection('contact')} 
              className="block w-full text-left text-white hover:text-purple-300 transition-colors duration-200 font-medium"
            >
              Contact
            </button>
            
            {/* Mobile Social Icons */}
            <div className="flex items-center space-x-4 pt-2 border-t border-gray-700">
              <a
                href={socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-blue-400 transition-colors duration-200"
                aria-label="Follow on Facebook - Opens in new tab"
              >
                <FacebookIcon className="w-6 h-6" />
              </a>
              <a
                href={socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-pink-400 transition-colors duration-200"
                aria-label="Follow on Instagram - Opens in new tab"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a
                href={googleReviewsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-green-400 transition-colors duration-200"
                aria-label="View Google Reviews - Opens in new tab"
              >
                <GoogleIcon className="w-6 h-6" />
              </a>
              <a
                href="mailto:mariamongiardo15@gmail.com"
                className="text-white hover:text-purple-400 transition-colors duration-200"
                aria-label="Send email"
              >
                <Mail className="w-6 h-6" />
              </a>
            </div>

            <Link
              to="/shop"
              className="block"
              aria-label="Visit Etsy Shop"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <Button className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold">
                Shop Etsy
              </Button>
            </Link>
          </nav>
        )}
      </nav>
    </header>
  );
};
