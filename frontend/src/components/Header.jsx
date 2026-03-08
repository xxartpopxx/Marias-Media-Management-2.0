import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Download, Instagram, Mail } from 'lucide-react';
import { Button } from './ui/button';
import { socialLinks, googleReviewsLink } from '../mock';

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const handleMediaKitDownload = () => {
    window.open('https://customer-assets.emergentagent.com/job_a9efaa07-0c20-4f2e-84b4-40005799affc/artifacts/bd8rz450_Media%20kit.pdf', '_blank');
  };

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/services', label: 'Social Media Services' },
    { to: '/portfolio', label: 'Website Services' },
    { to: '/reviews', label: 'Reviews' },
    { to: '/contact', label: 'Contact' },
  ];

  const isActive = (path) => location.pathname === path;

  // Social Icons
  const FacebookIcon = ({ className }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
    </svg>
  );

  const GoogleIcon = ({ className }) => (
    <svg className={className} viewBox="0 0 24 24">
      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
    </svg>
  );

  const YouTubeIcon = ({ className }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
    </svg>
  );

  const TikTokIcon = ({ className }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
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
          <Link to="/" className="flex items-center group" aria-label="Maria's Media Management - Home">
            <img 
              src="https://customer-assets.emergentagent.com/job_a9efaa07-0c20-4f2e-84b4-40005799affc/artifacts/ml1q1ugm_Maria%27s%20Media%20Kit.png" 
              alt="Maria's Media Management Logo"
              width="80"
              height="80"
              className="h-16 md:h-20 w-auto transition-transform duration-300 group-hover:scale-105"
              loading="eager"
              decoding="async"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1" aria-label="Main navigation">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                  isActive(link.to)
                    ? 'text-white bg-purple-600/30'
                    : 'text-white/80 hover:text-white hover:bg-white/10'
                }`}
              >
                {link.label}
              </Link>
            ))}
            
            <button 
              onClick={handleMediaKitDownload} 
              className="px-4 py-2 rounded-lg text-white/80 hover:text-white hover:bg-white/10 transition-all duration-300 font-medium flex items-center gap-1"
              aria-label="Download Media Kit PDF"
            >
              <Download className="w-4 h-4" aria-hidden="true" />
              Media Kit
            </button>
            
            {/* Social Icons */}
            <div className="flex items-center space-x-2 border-l border-gray-600 pl-4 ml-2">
              <a
                href={socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full text-white/70 hover:text-blue-400 hover:bg-white/10 transition-all duration-300"
                aria-label="Follow on Facebook"
              >
                <FacebookIcon className="w-5 h-5" />
              </a>
              <a
                href={socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full text-white/70 hover:text-pink-400 hover:bg-white/10 transition-all duration-300"
                aria-label="Follow on Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href={socialLinks.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full text-white/70 hover:text-red-500 hover:bg-white/10 transition-all duration-300"
                aria-label="Subscribe on YouTube"
              >
                <YouTubeIcon className="w-5 h-5" />
              </a>
              <a
                href={socialLinks.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full text-white/70 hover:text-white hover:bg-white/10 transition-all duration-300"
                aria-label="Follow on TikTok"
              >
                <TikTokIcon className="w-5 h-5" />
              </a>
              <a
                href={googleReviewsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full text-white/70 hover:bg-white/10 transition-all duration-300"
                aria-label="View Google Reviews"
              >
                <GoogleIcon className="w-5 h-5" />
              </a>
              <a
                href="mailto:mariamongiardo15@gmail.com"
                className="p-2 rounded-full text-white/70 hover:text-purple-400 hover:bg-white/10 transition-all duration-300"
                aria-label="Send email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>

            <a 
              href="https://www.etsy.com/shop/MariasMediaShop"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button 
                className="ml-2 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold transform hover:scale-105 transition-all duration-300"
                style={{ boxShadow: '0 4px 15px rgba(249, 115, 22, 0.3)' }}
              >
                Shop Etsy
              </Button>
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-lg text-white hover:bg-white/10 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          id="mobile-menu"
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMobileMenuOpen ? 'max-h-[600px] opacity-100 mt-4' : 'max-h-0 opacity-0'
          }`}
        >
          <nav className="bg-gray-800/90 backdrop-blur-md rounded-2xl p-6 border border-gray-700" aria-label="Mobile navigation">
            <div className="space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`block py-3 px-4 rounded-xl font-medium transition-all duration-200 ${
                    isActive(link.to)
                      ? 'text-white bg-purple-600/30'
                      : 'text-white/90 hover:bg-white/10'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <button 
                onClick={handleMediaKitDownload} 
                className="block w-full text-left py-3 px-4 rounded-xl text-white/90 hover:bg-white/10 transition-all duration-200 font-medium"
              >
                Download Media Kit
              </button>
            </div>
            
            {/* Mobile Social Icons */}
            <div className="flex items-center justify-center flex-wrap gap-3 pt-6 mt-6 border-t border-gray-700">
              <a
                href={socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-700 p-3 rounded-full text-white hover:bg-blue-600 transition-all duration-200"
                aria-label="Follow on Facebook"
              >
                <FacebookIcon className="w-5 h-5" />
              </a>
              <a
                href={socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-700 p-3 rounded-full text-white hover:bg-gradient-to-br hover:from-purple-600 hover:to-pink-600 transition-all duration-200"
                aria-label="Follow on Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href={socialLinks.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-700 p-3 rounded-full text-white hover:bg-red-600 transition-all duration-200"
                aria-label="Subscribe on YouTube"
              >
                <YouTubeIcon className="w-5 h-5" />
              </a>
              <a
                href={socialLinks.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-700 p-3 rounded-full text-white hover:bg-black transition-all duration-200"
                aria-label="Follow on TikTok"
              >
                <TikTokIcon className="w-5 h-5" />
              </a>
              <a
                href={googleReviewsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-700 p-3 rounded-full text-white hover:bg-green-600 transition-all duration-200"
                aria-label="View Google Reviews"
              >
                <GoogleIcon className="w-5 h-5" />
              </a>
              <a
                href="mailto:mariamongiardo15@gmail.com"
                className="bg-gray-700 p-3 rounded-full text-white hover:bg-purple-600 transition-all duration-200"
                aria-label="Send email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>

            <div className="mt-6">
              <a 
                href="https://www.etsy.com/shop/MariasMediaShop" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block"
              >
                <Button className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold text-lg py-4">
                  Shop Etsy
                </Button>
              </a>
            </div>
          </nav>
        </div>
      </nav>
    </header>
  );
};
