import { createContext, useContext, useState, useEffect } from 'react'
import { fetchTrendingMovies, searchMovies } from '../services/api'

const MoviesContext = createContext()

export function MoviesProvider({ children }) {
  const [trendingMovies, setTrendingMovies] = useState([])
  const [searchResults, setSearchResults] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [lastSearch, setLastSearch] = useState(() => {
    return localStorage.getItem('lastSearch') || ''
  })
  const [favorites, setFavorites] = useState(() => {
    const savedFavorites = localStorage.getItem('favorites')
    return savedFavorites ? JSON.parse(savedFavorites) : []
  })

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites))
  }, [favorites])

  useEffect(() => {
    if (lastSearch) {
      localStorage.setItem('lastSearch', lastSearch)
    }
  }, [lastSearch])

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

  const searchForMovies = async (query) => {
    if (!query) return
    
    try {
      setLoading(true)
      setError(null)
      setLastSearch(query)
      const data = await searchMovies(query)
      setSearchResults(data.results || [])
    } catch (err) {
      setError(err.message)
      setSearchResults([])
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
      searchResults,
      loading,
      error,
      lastSearch,
      favorites,
      loadTrendingMovies,
      searchForMovies,
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