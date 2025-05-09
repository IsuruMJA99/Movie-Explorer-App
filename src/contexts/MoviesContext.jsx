import { createContext, useContext, useState, useEffect } from 'react'
import { fetchTrendingMovies } from '../services/api'

const MoviesContext = createContext()

export function MoviesProvider({ children }) {
  const [trendingMovies, setTrendingMovies] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  
  const [favorites, setFavorites] = useState(() => {
    const savedFavorites = localStorage.getItem('favorites')
    return savedFavorites ? JSON.parse(savedFavorites) : []
  })

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites))
  }, [favorites])


  const loadTrendingMovies = async () => {
    try {
      setLoading(true)
      setError(null)
      const data = await fetchTrendingMovies()
      setTrendingMovies(data.results || [])
    } catch (err) {
      setError(err.message)
      setTrendingMovies([])
    } finally {
      setLoading(false)
    }
  }

  const toggleFavorite = (movie) => {
    setFavorites(prevFavorites => {
      const exists = prevFavorites.some(m => m.id === movie.id)
      
      if (exists) {
        return prevFavorites.filter(m => m.id !== movie.id)
      } else {
        return [...prevFavorites, movie]
      }
    })
  }

  const isFavorite = (movieId) => {
    return favorites.some(movie => movie.id === movieId)
  }

  return (
    <MoviesContext.Provider value={{
      trendingMovies,
      loading,
      error,
      favorites,
      loadTrendingMovies,
      toggleFavorite,
      isFavorite
    }}>
      {children}
    </MoviesContext.Provider>
  )
}

export function useMovies() {
  return useContext(MoviesContext)
}
