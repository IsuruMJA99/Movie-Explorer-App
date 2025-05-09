import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FiSearch } from 'react-icons/fi'
import { useMovies } from '../../contexts/MoviesContext'

function SearchBar() {
  const { searchForMovies, lastSearch } = useMovies()
  const [query, setQuery] = useState(lastSearch || '')
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    const trimmedQuery = query.trim()
    if (trimmedQuery) {
      searchForMovies(trimmedQuery)
      navigate(`/search?q=${encodeURIComponent(trimmedQuery)}`)
    }
  }

  return (
   <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto bg-white rounded">
  <div className="relative">
    <input
      type="text"
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      placeholder="Search for movies..."
      className="w-full pl-10 pr-28 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
    />
    <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-lg">
      <FiSearch />
    </span>
    <button 
      type="submit" 
      className="absolute right-2 top-1/2 transform -translate-y-1/2 px-4 py-1.5 bg-blue-600 text-white text-sm rounded-md hover:bg-blue-700 transition-colors duration-200 disabled:opacity-50"
      disabled={!query.trim()}
    >
      Search
    </button>
  </div>
</form>

  )
}

export default SearchBar