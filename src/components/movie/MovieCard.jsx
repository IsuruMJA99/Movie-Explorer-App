import { Link } from "react-router-dom";
import { FiStar, FiHeart } from "react-icons/fi";
import { getPosterUrl } from "../../services/api";
import { useMovies } from "../../contexts/MoviesContext";

function MovieCard({ movie }) {
  return (
    <div className="card h-full flex flex-col">
      <div className="relative">
        <Link to={`/movie/${movie.id}`}>
          {movie.poster_path ? (
            <img
              src={getPosterUrl(movie.poster_path)}
              alt={movie.title}
              className="w-full h-[300px] object-cover"
              loading="lazy"
            />
          ) : (
            <div className="w-full h-[300px] flex items-center justify-center bg-gray-200 dark:bg-dark-300">
              <span className="text-lg text-gray-500 dark:text-gray-400">
                No Image
              </span>
            </div>
          )}
        </Link>
      </div>

      <div className="p-4 flex-grow flex flex-col">
        <Link to={`/movie/${movie.id}`} className="block">
          <h3 className="font-bold text-lg mb-1 line-clamp-1 hover:text-primary transition-colors">
            {movie.title}
          </h3>
        </Link>

        <div className="flex items-center space-x-2 mb-2 text-sm text-gray-600 dark:text-gray-400">
          {movie.release_date && (
            <span>{new Date(movie.release_date).getFullYear()}</span>
          )}
        </div>

        <div className="mt-auto flex items-center">
          <div className="flex items-center bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-400 px-2 py-1 rounded">
            <FiStar className="mr-1" fill="currentColor" />
            <span>
              {movie.vote_average ? movie.vote_average.toFixed(1) : "N/A"}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
