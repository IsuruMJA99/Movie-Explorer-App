import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import SearchBar from '../movie/SearchBar'
import { FiMenu, FiX, FiUser, FiLogOut, FiHeart } from 'react-icons/fi'

function Header() {


  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const navigate = useNavigate()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const handleLogout = () => {
   
  }

  return (
    <header className="bg-white dark:bg-dark-100 shadow-md py-4">
      <div className="container mx-auto px-4 flex flex-wrap items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <span className="text-accent text-3xl font-bold">Movie</span>
          <span className="text-primary text-3xl font-bold">Explorer</span>
        </Link>
        
        <div className="lg:hidden">
          <button 
            onClick={toggleMenu}
            className="p-2 text-secondary dark:text-light-100 hover:text-primary"
          >
            {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
        
        <div className={`w-full lg:w-auto flex-col lg:flex-row lg:flex ${isMenuOpen ? 'flex mt-4' : 'hidden'}`}>
          <div className="flex-1 mb-4 lg:mb-0 lg:mr-4 lg:max-w-md">
            <SearchBar />
          </div>
          
          <div className="flex flex-col lg:flex-row items-start lg:items-center space-y-3 lg:space-y-0 lg:space-x-4">
           
            
   
              <>
                <Link
                  to="/favorites"
                  className="flex items-center space-x-2 hover:text-primary"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <FiHeart size={20} />
                  <span>Favorites</span>
                </Link>
                
                <div className="flex items-center space-x-2 text-secondary dark:text-light-300">
                  <FiUser size={20} />
                  <span>isuru</span>
                </div>
                
                <button
                  onClick={handleLogout}
                  className="flex items-center space-x-2 text-red-500 hover:text-red-600"
                >
                  <FiLogOut size={20} />
                  <span>Logout</span>
                </button>
              </>
            
              {/* <Link
                to="/login"
                className="btn btn-primary flex items-center"
                onClick={() => setIsMenuOpen(false)}
              >
                <FiUser className="mr-2" />
                Sign In
              </Link> */}
        
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header