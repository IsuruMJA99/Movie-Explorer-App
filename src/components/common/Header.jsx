import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../../contexts/AuthContext'
import SearchBar from '../movie/SearchBar'
import { FiMenu, FiX, FiUser, FiLogOut, FiHeart } from 'react-icons/fi'

function Header() {
  const { user, logout } = useAuth()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const navigate = useNavigate()
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }
  
  const handleLogout = () => {
    logout()
    navigate('/')
    setIsMenuOpen(false)
  }
  
  return (
    <header className="bg-gradient-to-r from-blue-100 to-indigo-50 shadow-lg py-5 sticky top-0 z-50">
      <div className="container mx-auto px-4 flex flex-wrap items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <span className="text-accent text-3xl font-bold">Movie</span>
          <span className="text-primary text-3xl font-bold">Explorer</span>
        </Link>
        
        <div className="lg:hidden">
          <button 
            onClick={toggleMenu}
            className="p-2 text-gray-700 hover:text-indigo-600 transition duration-300"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
        
        <div className={`w-full lg:w-auto flex-col lg:flex-row lg:flex ${isMenuOpen ? 'flex mt-6' : 'hidden'}`}>
          <div className="flex-1 mb-4 lg:mb-0 lg:mr-4 lg:max-w-md">
            <SearchBar />
          </div>
          
          <div className="flex flex-col lg:flex-row items-start lg:items-center space-y-4 lg:space-y-0 lg:space-x-6">
            {user ? (
              <>
                <Link
                  to="/favorites"
                  className="flex items-center space-x-2 text-gray-700  hover:bg-gray-300 hover:text-black p-2 rounded transition duration-300 font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <FiHeart size={20} className="text-pink-500" />
                  <span>Favorites</span>
                </Link>
                
                <div className="flex items-center space-x-2 text-gray-700 hover:bg-gray-300 hover:text-black p-2 rounded transition duration-300 ">
                  <FiUser size={20} className="text-indigo-600 " />
                  <span>{user.username}</span>
                </div>
                
                <button
                  onClick={handleLogout}
                  className="flex items-center space-x-2 text-red-500 hover:bg-red-500 hover:text-white p-2 rounded transition duration-300 "
                >
                  <FiLogOut size={20} />
                  <span>Logout</span>
                </button>
              </>
            ) : (
              <Link
                to="/login"
                className="inline-flex items-center px-4 py-2 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition duration-300 shadow-md"
                onClick={() => setIsMenuOpen(false)}
              >
                <FiUser className="mr-2" />
                Sign In
              </Link>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header