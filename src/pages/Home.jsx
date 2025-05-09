import { useEffect } from "react";
import { FiTrendingUp } from "react-icons/fi";
import MovieGrid from "../components/movie/MovieGrid";
import { useMovies } from "../contexts/MoviesContext";

function Home() {
  const { trendingMovies, loading, error, loadTrendingMovies } = useMovies();

  useEffect(() => {
    loadTrendingMovies();
  }, []);

  if (error) {
    return (
      <div className="min-h-[50vh] flex items-center justify-center">
        <div className="max-w-md p-8 text-center">
          <h2 className="mb-4 text-2xl font-bold text-red-500">Error</h2>
          <p className="mb-4 text-gray-600 dark:text-gray-400">{error}</p>
          <button onClick={loadTrendingMovies} className="btn btn-primary">
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div>
      <section className="mb-8">
        <div className="p-8 text-white bg-gradient-to-r from-secondary to-primary rounded-xl">
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">
            Welcome to Movie Explorer
          </h1>
          <p className="max-w-2xl mb-6 text-lg md:text-xl opacity-90">
            Discover trending movies, search for your favorites, and keep track
            of what you want to watch.
          </p>
        </div>
      </section>

      <section>
        <div className="flex items-center mb-4">
          <FiTrendingUp className="mr-2 text-2xl text-accent" />
          <h2 className="text-2xl font-bold">Trending Movies</h2>
        </div>

        {loading ? (
          <div className="min-h-[300px] flex justify-center items-center">
            <div className="w-12 h-12 border-4 rounded-full animate-spin-slow border-primary border-t-transparent"></div>
          </div>
        ) : (
          <MovieGrid movies={trendingMovies} />
        )}
      </section>
    </div>
  );
}

export default Home;
