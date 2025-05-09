import React from 'react'
import { Link } from 'react-router-dom'
import { FiHome, FiArrowLeft, FiFilm } from 'react-icons/fi'

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 px-4 py-12">
      <div className="max-w-lg w-full text-center bg-white rounded-xl shadow-xl p-8 border border-gray-100">
        <div className="mb-6 flex justify-center">
          <div className="inline-flex p-4 bg-indigo-100 rounded-full">
            <FiFilm size={60} className="text-indigo-600" />
          </div>
        </div>
        
        <h1 className="text-5xl font-bold text-gray-800 mb-3">404</h1>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Page Not Found</h2>
        
        <p className="text-gray-600 mb-8 max-w-md mx-auto">
          Oops! The page you are looking for might have been removed, had its name changed, 
          or is temporarily unavailable.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link 
            to="/" 
            className="w-full sm:w-auto inline-flex items-center justify-center px-5 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-colors duration-300"
          >
            <FiHome className="mr-2" />
            Back to Home
          </Link>
          
          <button 
            onClick={() => window.history.back()} 
            className="w-full sm:w-auto inline-flex items-center justify-center px-5 py-3 bg-gray-100 text-gray-700 font-medium rounded-lg hover:bg-gray-200 transition-colors duration-300"
          >
            <FiArrowLeft className="mr-2" />
            Go Back
          </button>
        </div>
        
        <div className="mt-10 pt-6 border-t border-gray-200">
          <p className="text-gray-500 text-sm">
            Can't find what you're looking for? Try searching for movies on our home page.
          </p>
        </div>
      </div>
    </div>
  )
}

export default NotFound
