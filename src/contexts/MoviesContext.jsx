import { createContext, useContext, useState } from "react";
import { fetchTrendingMovies } from "../services/api";

const MoviesContext = createContext();

export function MoviesProvider({ children }) {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const loadTrendingMovies = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await fetchTrendingMovies();
      setTrendingMovies(data.results || []);
    } catch (err) {
      setError(err.message);
      setTrendingMovies([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <MoviesContext.Provider
      value={{
        trendingMovies,
        loading,
        error,
        loadTrendingMovies,
      }}
    >
      {children}
    </MoviesContext.Provider>
  );
}

export function useMovies() {
  return useContext(MoviesContext);
}
