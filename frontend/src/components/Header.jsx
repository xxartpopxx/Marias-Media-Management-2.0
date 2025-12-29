import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Download } from 'lucide-react';
import { Button } from './ui/button';

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
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

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-gray-900/95 backdrop-blur-md shadow-lg' : 'bg-gray-900/80 backdrop-blur-sm'
      }`}
    >
      <nav className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <img 
              src="https://customer-assets.emergentagent.com/job_a9efaa07-0c20-4f2e-84b4-40005799affc/artifacts/ml1q1ugm_Maria%27s%20Media%20Kit.png" 
              alt="Maria's Media Management" 
              className="h-16 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('home')} className="text-white hover:text-purple-300 transition-colors duration-200 font-medium">
              Home
            </button>
            <button onClick={() => scrollToSection('about')} className="text-white hover:text-purple-300 transition-colors duration-200 font-medium">
              Meet Maria
            </button>
            <button onClick={() => scrollToSection('services')} className="text-white hover:text-purple-300 transition-colors duration-200 font-medium">
              Services
            </button>
            <button onClick={() => scrollToSection('shop')} className="text-white hover:text-purple-300 transition-colors duration-200 font-medium">
              Shop
            </button>
            <button onClick={handleMediaKitDownload} className="text-white hover:text-purple-300 transition-colors duration-200 font-medium flex items-center gap-2">
              <Download className="w-4 h-4" />
              Media Kit
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-white hover:text-purple-300 transition-colors duration-200 font-medium">
              Contact
            </button>
            <a
              href="https://www.etsy.com/shop/MariasMediaShop"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button 
                className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold transform hover:scale-105 transition-all duration-300"
                style={{
                  boxShadow: '0 4px 15px rgba(168, 85, 247, 0.3)'
                }}
              >
                Shop Etsy
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white hover:text-purple-300"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4 animate-in slide-in-from-top">
            <button onClick={() => scrollToSection('home')} className="block w-full text-left text-white hover:text-purple-300 transition-colors duration-200 font-medium">
              Home
            </button>
            <button onClick={() => scrollToSection('about')} className="block w-full text-left text-white hover:text-purple-300 transition-colors duration-200 font-medium">
              Meet Maria
            </button>
            <button onClick={() => scrollToSection('services')} className="block w-full text-left text-white hover:text-purple-300 transition-colors duration-200 font-medium">
              Services
            </button>
            <button onClick={() => scrollToSection('shop')} className="block w-full text-left text-white hover:text-purple-300 transition-colors duration-200 font-medium">
              Shop
            </button>
            <button onClick={handleMediaKitDownload} className="block w-full text-left text-white hover:text-purple-300 transition-colors duration-200 font-medium">
              Download Media Kit
            </button>
            <button onClick={() => scrollToSection('contact')} className="block w-full text-left text-white hover:text-purple-300 transition-colors duration-200 font-medium">
              Contact
            </button>
            <a
              href="https://www.etsy.com/shop/MariasMediaShop"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <Button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold">
                Shop Etsy
              </Button>
            </a>
          </div>
        )}
      </nav>
    </header>
  );
};
