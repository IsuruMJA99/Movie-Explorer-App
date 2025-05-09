import { Link } from 'react-router-dom'
import { FiGithub, FiTwitter, FiInstagram } from 'react-icons/fi'

function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="bg-dark-100 text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <Link to="/" className="flex items-center space-x-2">
              <span className="text-accent text-xl font-bold">Movie</span>
              <span className="text-primary text-xl font-bold">Explorer</span>
            </Link>
            <p className="text-sm mt-2 text-gray-300">
              Data provided by The Movie Database (TMDb)
            </p>
          </div>
          
          <div className="flex flex-col items-center mb-4 md:mb-0">
            <div className="flex space-x-6 text-xl">
              <a href="#" className="hover:text-primary transition-colors" aria-label="GitHub">
                <FiGithub />
              </a>
              <a href="#" className="hover:text-primary transition-colors" aria-label="Twitter">
                <FiTwitter />
              </a>
              <a href="#" className="hover:text-primary transition-colors" aria-label="Instagram">
                <FiInstagram />
              </a>
            </div>
          </div>
          
          <div className="text-sm text-gray-300">
            <p>© {currentYear} Movie Explorer. All rights reserved.</p>
            <div className="mt-2 flex space-x-4">
              <a href="#" className="hover:text-primary">Terms</a>
              <a href="#" className="hover:text-primary">Privacy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
