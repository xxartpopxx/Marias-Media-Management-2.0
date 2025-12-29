import { Instagram, Linkedin, Mail, Heart } from 'lucide-react';
import { socialLinks } from '../mock';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-purple-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">
              Maria's Media Management
            </h3>
            <p className="text-gray-300 text-sm">
              Giving your social media profiles the attention they deserve.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => document.getElementById('home').scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-300 hover:text-purple-300 transition-colors duration-200"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-300 hover:text-purple-300 transition-colors duration-200"
                >
                  Meet Maria
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('services').scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-300 hover:text-purple-300 transition-colors duration-200"
                >
                  Services
                </button>
              </li>
              <li>
                <a
                  href="https://www.etsy.com/shop/MariasMediaShop?ref=seller-platform-mcnav"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-purple-300 transition-colors duration-200"
                >
                  Shop on Etsy
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
            <div className="flex gap-4 mb-4">
              <a
                href={socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 p-3 rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 p-3 rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:mariamongiardo15@gmail.com"
                className="bg-white/10 p-3 rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
            <p className="text-gray-300 text-sm">
              <a href="mailto:mariamongiardo15@gmail.com" className="hover:text-purple-300 transition-colors duration-200">
                mariamongiardo15@gmail.com
              </a>
            </p>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center">
          <p className="text-gray-300 text-sm flex items-center justify-center gap-2">
            © {currentYear} Maria's Media Management. Made with <Heart className="w-4 h-4 text-pink-400 fill-pink-400" /> in Boston, MA
          </p>
        </div>
      </div>
    </footer>
  );
};
