import { Link } from 'react-router-dom';
import { FiGithub, FiTwitter, FiInstagram, FiMail } from 'react-icons/fi';

function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-dark-100 text-gray-300 py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="flex flex-col">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <span className="text-blue-400 text-2xl font-bold">Movie</span>
              <span className="text-white text-2xl font-bold">Explorer</span>
            </Link>
            <p className="text-sm text-gray-400">
              Your ultimate destination for discovering movies and TV shows.
            </p>
            <p className="text-xs mt-2 text-gray-500">
              Data provided by The Movie Database (TMDb)
            </p>
          </div>
          
          {/* Quick Links */}
          <div className="flex flex-col">
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <div className="grid grid-cols-2 gap-2">
              <Link to="/" className="text-sm hover:text-blue-400 transition-colors">Movies</Link>
              <Link to="/tv-shows" className="text-sm hover:text-blue-400 transition-colors">TV Shows</Link>
              <Link to="/trending" className="text-sm hover:text-blue-400 transition-colors">Trending</Link>
              <Link to="/watchlist" className="text-sm hover:text-blue-400 transition-colors">Watchlist</Link>
              <Link to="/about" className="text-sm hover:text-blue-400 transition-colors">About Us</Link>
              <Link to="/contact" className="text-sm hover:text-blue-400 transition-colors">Contact</Link>
            </div>
          </div>
          
          {/* Connect Section */}
          <div className="flex flex-col">
            <h3 className="text-white font-semibold mb-4">Connect With Us</h3>
            <div className="flex space-x-5 text-xl mb-4">
              <a 
                href="#" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition-colors" 
                aria-label="GitHub"
              >
                <FiGithub />
              </a>
              <a 
                href="#" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition-colors" 
                aria-label="Twitter"
              >
                <FiTwitter />
              </a>
              <a 
                href="#" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition-colors" 
                aria-label="Instagram"
              >
                <FiInstagram />
              </a>
              <a 
                href="#" 
                className="hover:text-blue-400 transition-colors" 
                aria-label="Email Us"
              >
                <FiMail />
              </a>
            </div>
            <p className="text-sm">
              Subscribe to our newsletter for updates
            </p>
            <div className="mt-2 flex">
              <input 
                type="email" 
                placeholder="Your email" 
                className="bg-gray-500 text-sm p-2 rounded-l border-0 focus:ring-2 focus:ring-blue-400 focus:outline-none w-full text-white" 
              />
              <button className="bg-blue-500 text-white px-4 rounded-r hover:bg-blue-600 transition-colors">
                Send
              </button>
            </div>
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="mt-8 pt-6 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm mb-4 md:mb-0">© {currentYear} Movie Explorer. All rights reserved.</p>
          <div className="flex space-x-6">
            <Link to="#" className="text-sm hover:text-blue-400 transition-colors">Terms of Service</Link>
            <Link to="#" className="text-sm hover:text-blue-400 transition-colors">Privacy Policy</Link>
            <Link to="/faq" className="text-sm hover:text-blue-400 transition-colors">FAQ</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;