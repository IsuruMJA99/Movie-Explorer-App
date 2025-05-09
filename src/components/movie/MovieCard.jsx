import { Link } from 'react-router-dom'
import { FiStar, FiHeart, FiCalendar, FiClock } from 'react-icons/fi'
import { getPosterUrl } from '../../services/api'
import { useMovies } from '../../contexts/MoviesContext'

function MovieCard({ movie }) {
  const { toggleFavorite, isFavorite } = useMovies()
  const favorite = isFavorite(movie.id)

  const handleFavoriteClick = (e) => {
    e.preventDefault()
    e.stopPropagation()
    toggleFavorite(movie)
  }

  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col overflow-hidden border border-gray-100 group">
      <div className="relative overflow-hidden">
        <Link to={`/movie/${movie.id}`}>
          {movie.poster_path ? (
            <img 
              src={getPosterUrl(movie.poster_path)} 
              alt={movie.title} 
              className="w-full h-[300px] object-cover transform group-hover:scale-105 transition-transform duration-300"
              loading="lazy"
            />
          ) : (
            <div className="w-full h-[300px] flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200">
              <span className="text-lg text-gray-500 font-medium">No Image Available</span>
            </div>
          )}

          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          
          <div className="absolute top-3 right-3">
            <button 
              onClick={handleFavoriteClick} 
              className={`p-2.5 rounded-full shadow-md transform hover:scale-110 transition-all duration-200 ${
                favorite 
                  ? 'bg-red-500 text-white' 
                  : 'bg-white/90 text-gray-700 hover:bg-red-500 hover:text-white'
              }`}
              aria-label={favorite ? "Remove from favorites" : "Add to favorites"}
            >
              <FiHeart 
                fill={favorite ? 'currentColor' : 'none'} 
                stroke="currentColor" 
                strokeWidth={favorite ? 0 : 2} 
                size={18}
              />
            </button>
          </div>
        </Link>
      </div>
      
      <div className="p-5 flex-grow flex flex-col">
        <Link to={`/movie/${movie.id}`} className="block">
          <h3 className="font-bold text-lg mb-2 line-clamp-1 text-gray-800 group-hover:text-indigo-600 transition-colors">
            {movie.title}
          </h3>
        </Link>
        
        <div className="flex items-center space-x-3 mb-3 text-sm text-gray-600">
          {movie.release_date && (
            <div className="flex items-center">
              <FiCalendar className="mr-1 text-indigo-500" size={14} />
              <span>{new Date(movie.release_date).getFullYear()}</span>
            </div>
          )}
          
          {movie.runtime && (
            <div className="flex items-center">
              <FiClock className="mr-1 text-indigo-500" size={14} />  
              <span>{movie.runtime} min</span>
            </div>
          )}
        </div>
        
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {movie.overview || "No description available."}
        </p>
        
        <div className="mt-auto flex items-center justify-between">
          <div className="flex items-center bg-yellow-50 text-yellow-700 px-3 py-1 rounded-full font-medium">
            <FiStar className="mr-1" fill="currentColor" stroke="none" size={16} />
            <span>{movie.vote_average ? movie.vote_average.toFixed(1) : 'N/A'}</span>
          </div>
          
          <Link 
            to={`/movie/${movie.id}`} 
            className="text-sm font-medium text-indigo-600 hover:text-indigo-800 transition-colors"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  )
}

export default MovieCard