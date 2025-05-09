import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { FiStar, FiCalendar, FiClock, FiHeart, FiArrowLeft } from 'react-icons/fi'
import { fetchMovieDetails, getPosterUrl } from '../services/api'
import { useMovies } from '../contexts/MoviesContext'

function MovieDetails() {
  const { id } = useParams()
  const [movie, setMovie] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const { toggleFavorite, isFavorite } = useMovies()
  const favorite = isFavorite(Number(id))

  useEffect(() => {
    const getMovieDetails = async () => {
      try {
        setLoading(true)
        const data = await fetchMovieDetails(id)
        setMovie(data)
      } catch (err) {
        setError('Failed to fetch movie details')
        console.error(err)
      } finally {
        setLoading(false)
      }
    }

    getMovieDetails()
  }, [id])

  if (loading) {
    return (
      <div className="py-20 flex justify-center items-center">
        <div className="animate-spin w-16 h-16 border-4 border-primary border-t-transparent rounded-full"></div>
      </div>
    )
  }


  const trailer = movie.videos?.results?.find(
    video => video.type === 'Trailer' && video.site === 'YouTube'
  )

  return (
    <div>
      <Link to="/" className="inline-flex items-center text-primary hover:underline mb-6">
        <FiArrowLeft className="mr-2" />
        Back to Movies
      </Link>

      <div className="bg-dark-100 rounded-lg shadow-lg overflow-hidden">
        {movie.backdrop_path && (
          <div className="relative h-[300px] md:h-[400px]">
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url(${getPosterUrl(movie.backdrop_path, 'original')})`,
                filter: 'blur(1px)',
                opacity: 0.3
              }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
            
            <div className="relative h-full container mx-auto px-4 flex items-end pb-8 max-md:mt-[25%]">
              <div className="flex flex-col md:flex-row md:items-end gap-6 ">
                <div className="w-[150px] md:w-[200px]  rounded-lg overflow-hidden shadow-lg mt-4 md:mt-0 border-4 border-white ">
                  {movie.poster_path ? (
                    <img 
                      src={getPosterUrl(movie.poster_path)} 
                      alt={movie.title} 
                      className="w-full"
                    />
                  ) : (
                    <div className="w-full h-[300px] flex items-center justify-center bg-gray-400">
                      <span className="text-lg text-gray-600 ">No Image</span>
                    </div>
                  )}
                </div>
                
                <div className="flex-1">
                  <h1 className="text-3xl md:text-4xl font-bold text-white drop-shadow-md">
                    {movie.title}
                  </h1>
                  
                  {movie.tagline && (
                    <p className="text-gray-300 mt-2 italic">"{movie.tagline}"</p>
                  )}
                  
                  <div className="flex flex-wrap gap-3 mt-4">
                    {movie.genres?.map(genre => (
                      <span 
                        key={genre.id} 
                        className="bg-primary/80 text-white px-3 py-1 rounded-full text-sm"
                      >
                        {genre.name}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        
        <div className="p-6">
          <div className="flex flex-wrap justify-between items-center mb-6">
            <div className="flex flex-wrap gap-4 mb-4 md:mb-0">

              <div className="flex items-center bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-400 px-3 py-2 rounded">
                <FiStar className="mr-2" fill="currentColor" />
                <span className="font-semibold">{movie.vote_average?.toFixed(1)}</span>
                <span className="text-sm ml-1">({movie.vote_count})</span>
              </div>
              
              {movie.release_date && (
                <div className="flex items-center px-3 py-2 bg-gray-300  rounded">
                  <FiCalendar className="mr-2" />
                  <span>{new Date(movie.release_date).toLocaleDateString()}</span>
                </div>
              )}
              
              {movie.runtime && (
                <div className="flex items-center px-3 py-2 bg-gray-300  rounded">
                  <FiClock className="mr-2" />
                  <span>{Math.floor(movie.runtime / 60)}h {movie.runtime % 60}m</span>
                </div>
              )}
            </div>
            
            <button 
              onClick={() => toggleFavorite(movie)} 
              className={`flex items-center px-4 py-2 rounded ${
                favorite 
                  ? 'bg-red-500 text-white' 
                  : 'bg-gray-200 dark:bg-dark-200 text-gray-700 dark:text-gray-300 hover:bg-red-500 hover:text-white'
              } transition-colors`}
            >
              <FiHeart className={`mr-2 ${favorite ? 'fill-current' : ''}`} />
              {favorite ? 'Remove from Favorites' : 'Add to Favorites'}
            </button>
          </div>
          
          <div className="mb-8">
            <h2 className="text-xl font-bold mb-4 text-white">Overview</h2>
            <p className="text-gray-300 leading-relaxed">
              {movie.overview || 'No overview available.'}
            </p>
          </div>
          
          {trailer && (
            <div className="mb-8">
              <h2 className="text-xl font-bold mb-4 text-white">Trailer</h2>
              <div className="aspect-video rounded-lg overflow-hidden">
                <iframe 
                  src={`https://www.youtube.com/embed/${trailer.key}`}
                  title={`${movie.title} Trailer`}
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
            </div>
          )}
          
          {movie.credits?.cast?.length > 0 && (
            <div>
              <h2 className="text-xl font-bold mb-4 text-white">Cast</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {movie.credits.cast.slice(0, 6).map(person => (
                  <div key={person.id} className="bg-dark-200 rounded-lg overflow-hidden">
                    {person.profile_path ? (
                      <img 
                        src={getPosterUrl(person.profile_path, 'w185')} 
                        alt={person.name}
                        className="w-full h-40 object-cover" 
                      />
                    ) : (
                      <div className="w-full h-40 flex items-center justify-center bg-gray-200 dark:bg-dark-300">
                        <span className="text-sm text-gray-500 dark:text-gray-400">No Image</span>
                      </div>
                    )}
                    <div className="p-2">
                      <p className="font-semibold text-sm truncate text-white">{person.name}</p>
                      <p className="text-xs text-gray-300 truncate">{person.character}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default MovieDetails
