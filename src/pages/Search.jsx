import { useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { FiArrowLeft, FiSearch } from 'react-icons/fi'
import MovieGrid from '../components/movie/MovieGrid'
import { useMovies } from '../contexts/MoviesContext'
import { Link } from 'react-router-dom'

function Search() {
  const { searchResults, loading, error, lastSearch, searchForMovies } = useMovies()
  const [searchParams, setSearchParams] = useSearchParams()

  useEffect(() => {
    const query = searchParams.get('q') || lastSearch
    if (query) {
      searchForMovies(query)
      setSearchParams({ q: query })
    }
  }, [])

  if (error) {
    return (
      <div className="min-h-[50vh] flex items-center justify-center">
        <div className="max-w-md p-8 text-center">
          <h2 className="mb-4 text-2xl font-bold text-red-500">Error</h2>
          <p className="mb-4 text-gray-400">{error}</p>
          <button
            onClick={() => searchForMovies(lastSearch)}
            className="btn btn-primary"
          >
            Try Again
          </button>
        </div>
      </div>
    )
  }

  return (
    <div>
        <Link to="/" className="inline-flex items-center text-primary hover:underline mb-6">
        <FiArrowLeft className="mr-2" />
        Back to Movies
      </Link>
      <div className="mb-8">
        <h1 className="flex items-center mb-2 text-3xl font-bold">
          <FiSearch className="mr-2 text-primary" />
          Search Results
        </h1>
        {lastSearch && (
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Showing results for: <span className="font-semibold">{lastSearch}</span>
          </p>
        )}
      </div>

      {loading ? (
        <div className="min-h-[300px] flex justify-center items-center">
          <div className="w-12 h-12 border-4 rounded-full animate-spin-slow border-primary border-t-transparent"></div>
        </div>
      ) : searchResults.length === 0 ? (
        <div className="py-10 text-center">
          <p className="mb-4 text-xl">No movies found for "{lastSearch}"</p>
          <p className="text-gray-600 dark:text-gray-400">
            Try searching for a different movie title.
          </p>
        </div>
      ) : (
        <MovieGrid movies={searchResults} />
      )}
    </div>
  )
}

export default Search