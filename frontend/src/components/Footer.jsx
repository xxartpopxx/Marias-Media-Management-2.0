import { Instagram, Linkedin, Mail, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { socialLinks, facebookReviewsLink, googleReviewsLink } from '../mock';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Facebook Icon Component
  const FacebookIcon = ({ className }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
    </svg>
  );

  // YouTube Icon Component
  const YouTubeIcon = ({ className }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
    </svg>
  );

  // TikTok Icon Component
  const TikTokIcon = ({ className }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
    </svg>
  );

  // Google Icon Component
  const GoogleIcon = ({ className }) => (
    <svg className={className} viewBox="0 0 24 24">
      <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
      <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
      <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
      <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
    </svg>
  );

  // Etsy Icon Component
  const EtsyIcon = ({ className }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M8.559 4.297c0-.405.093-.891.652-.891 1.186 0 2.678.559 3.731.559.186 0 .558-.093.558-.465V2.091c0-.279-.186-.465-.372-.558C12.197 1.16 10.453.93 9.21.93c-2.19 0-4.634.93-4.634 4.043v2.232H3.07c-.279 0-.465.186-.465.465v1.581c0 .279.186.465.465.465h1.504v8.18c0 .279.186.465.465.465h2.605c.279 0 .465-.186.465-.465v-8.18h2.978c.279 0 .465-.186.465-.465v-.279l.465-1.302c.093-.186 0-.465-.279-.465H8.559V4.297zm12.255 6.32c-1.302-.372-2.419-.559-3.35-.559-1.674 0-2.605.744-2.605 1.767 0 2.419 4.277 1.86 4.277 5.191 0 2.698-2.046 4.091-4.836 4.091-1.395 0-2.884-.279-4.184-.744-.186-.093-.372-.279-.372-.558v-1.674c0-.279.186-.465.465-.372 1.302.465 2.698.744 3.907.744 1.302 0 2.046-.465 2.046-1.395 0-2.512-4.277-1.767-4.277-5.284 0-2.605 2.046-4.091 4.836-4.091 1.302 0 2.512.186 3.721.558.186.093.372.279.372.558v1.395c0 .372-.186.465-.465.372h-.535z"/>
    </svg>
  );

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-purple-900 text-white py-12" role="contentinfo">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">
              Maria's Media Management
            </h3>
            <p className="text-gray-300 text-sm mb-4">
              Giving your social media profiles the attention they deserve.
            </p>
            <p className="text-gray-400 text-sm">
              North Shore, Massachusetts Based • Global Reach
            </p>
          </div>

          {/* Quick Links */}
          <nav aria-label="Footer navigation">
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm" role="list">
              <li>
                <button
                  onClick={() => scrollToSection('home')}
                  className="text-gray-300 hover:text-purple-300 transition-colors duration-200"
                  aria-label="Go to Home section"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('about')}
                  className="text-gray-300 hover:text-purple-300 transition-colors duration-200"
                  aria-label="Go to Meet Maria section"
                >
                  Meet Maria
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('services')}
                  className="text-gray-300 hover:text-purple-300 transition-colors duration-200"
                  aria-label="Go to Services section"
                >
                  Social Media Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('portfolio')}
                  className="text-gray-300 hover:text-purple-300 transition-colors duration-200"
                  aria-label="Go to Portfolio section"
                >
                  Website Portfolio
                </button>
              </li>
              <li>
                <Link
                  to="/shop"
                  className="text-gray-300 hover:text-purple-300 transition-colors duration-200"
                  aria-label="Visit Shop"
                >
                  Shop
                </Link>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="text-gray-300 hover:text-purple-300 transition-colors duration-200"
                  aria-label="Go to Contact section"
                >
                  Contact
                </button>
              </li>
            </ul>
          </nav>

          {/* Social Media */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="grid grid-cols-4 gap-3">
              <a
                href={socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 p-3 rounded-full hover:bg-blue-600 transition-all duration-300 hover:scale-110 flex items-center justify-center"
                aria-label="Follow on Facebook - Opens in new tab"
              >
                <FacebookIcon className="w-5 h-5" />
              </a>
              <a
                href={socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 p-3 rounded-full hover:bg-gradient-to-br hover:from-purple-600 hover:to-pink-600 transition-all duration-300 hover:scale-110 flex items-center justify-center"
                aria-label="Follow on Instagram - Opens in new tab"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href={socialLinks.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 p-3 rounded-full hover:bg-red-600 transition-all duration-300 hover:scale-110 flex items-center justify-center"
                aria-label="Subscribe on YouTube - Opens in new tab"
              >
                <YouTubeIcon className="w-5 h-5" />
              </a>
              <a
                href={socialLinks.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 p-3 rounded-full hover:bg-black transition-all duration-300 hover:scale-110 flex items-center justify-center"
                aria-label="Follow on TikTok - Opens in new tab"
              >
                <TikTokIcon className="w-5 h-5" />
              </a>
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 p-3 rounded-full hover:bg-blue-700 transition-all duration-300 hover:scale-110 flex items-center justify-center"
                aria-label="Connect on LinkedIn - Opens in new tab"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href={googleReviewsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 p-3 rounded-full hover:bg-green-600 transition-all duration-300 hover:scale-110 flex items-center justify-center"
                aria-label="View Google Reviews - Opens in new tab"
              >
                <GoogleIcon className="w-5 h-5" />
              </a>
              <a
                href={socialLinks.etsy}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 p-3 rounded-full hover:bg-orange-600 transition-all duration-300 hover:scale-110 flex items-center justify-center"
                aria-label="Shop on Etsy - Opens in new tab"
              >
                <EtsyIcon className="w-5 h-5" />
              </a>
              <a
                href={`mailto:${socialLinks.email}`}
                className="bg-white/10 p-3 rounded-full hover:bg-purple-600 transition-all duration-300 hover:scale-110 flex items-center justify-center"
                aria-label="Send email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-3 text-sm">
              <p className="text-gray-300">
                <a 
                  href={`mailto:${socialLinks.email}`}
                  className="hover:text-purple-300 transition-colors duration-200"
                  aria-label="Email Maria"
                >
                  {socialLinks.email}
                </a>
              </p>
              <p className="text-gray-400">
                Boston, Massachusetts
              </p>
              <div className="pt-2">
                <a
                  href={socialLinks.etsy}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-full text-sm font-medium transition-all duration-300"
                  aria-label="Shop on Etsy - Opens in new tab"
                >
                  <EtsyIcon className="w-4 h-4" />
                  Shop on Etsy
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center">
          <p className="text-gray-300 text-sm flex items-center justify-center gap-2">
            © {currentYear} Maria's Media Management. Made with <Heart className="w-4 h-4 text-pink-400 fill-pink-400" aria-hidden="true" /> <span className="sr-only">love</span> in Boston, MA
          </p>
        </div>
      </div>
    </footer>
  );
};
