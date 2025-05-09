import MovieCard from "./MovieCard";

function MovieGrid({ movies, title }) {
  if (!movies || movies.length === 0) {
    return (
      <div className="py-8 text-center">
        <h2 className="text-xl font-semibold mb-4">{title}</h2>
        <p className="text-gray-600 dark:text-gray-400">No movies found</p>
      </div>
    );
  }

  return (
    <div className="py-6">
      {title && <h2 className="text-2xl font-bold mb-6">{title}</h2>}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}

export default MovieGrid;
