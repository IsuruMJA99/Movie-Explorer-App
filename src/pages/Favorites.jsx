import { useMovies } from '../contexts/MoviesContext'
import MovieGrid from '../components/movie/MovieGrid'
import { FiArrowLeft, FiHeart } from 'react-icons/fi'
import { Link } from 'react-router-dom'

function Favorites() {
  const { favorites } = useMovies()

  return (
    <>
    <Link to="/" className="inline-flex items-center text-primary hover:underline mb-6">
        <FiArrowLeft className="mr-2" />
        Back to Movies
      </Link>
    <div className="space-y-8 transition-opacity duration-300 ease-in-out">
      {/* Header Section */}
      <div>
        <h1 className="text-3xl font-bold flex items-center mb-2">
          <FiHeart className="text-accent mr-2" />
          My Favorite Movies
        </h1>
        <p className="text-gray-600 ">
          Your personal collection of favorite movies.
        </p>
      </div>

      {/* Conditional Content */}
      {favorites.length === 0 ? (
        <div className="bg-gray-300 rounded-lg shadow p-8 text-center transition-all duration-300">
          <FiHeart className="mx-auto text-6xl text-gray-300  mb-4" />
          <h2 className="text-xl font-bold mb-2">No favorites yet</h2>
          <p className="text-gray-600">
            Start adding movies to your favorites by clicking the heart icon on any movie card.
          </p>
        </div>
      ) : (
        <div className="transition-opacity duration-300 opacity-100">
          <MovieGrid movies={favorites} />
        </div>
      )}
    </div>
    </>
  )
}

export default Favorites
