import axios from 'axios'


const API_KEY = import.meta.env.VITE_TMDB_API_KEY
const BASE_URL = 'https://api.themoviedb.org/3'
const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p'

// Create axios instance
const tmdbApi = axios.create({
  baseURL: BASE_URL,
  params: {
    api_key: API_KEY,
  },
})

// Get poster URL
export const getPosterUrl = (path, size = 'w500') => {
  if (!path) return null
  return `${IMAGE_BASE_URL}/${size}${path}`
}

// Get trending movies
export const fetchTrendingMovies = async () => {
  try {
    const response = await tmdbApi.get('/trending/movie/day')
    if (!response.data || !response.data.results) {
      throw new Error('Invalid response format')
    }
    return response.data
  } catch (error) {
    if (error.response?.status === 401) {
      throw new Error('Invalid API key. Please check your TMDb API key.')
    }
    throw new Error('Failed to fetch trending movies. Please try again later.')
  }
}


// Get movie details
export const fetchMovieDetails = async (movieId) => {
  try {
    const response = await tmdbApi.get(`/movie/${movieId}`, {
      params: {
        append_to_response: 'videos,credits',
      },
    })
    if (!response.data) {
      throw new Error('Invalid response format')
    }
    return response.data
  } catch (error) {
    if (error.response?.status === 401) {
      throw new Error('Invalid API key. Please check your TMDb API key.')
    }
    throw new Error('Failed to fetch movie details. Please try again later.')
  }
}

