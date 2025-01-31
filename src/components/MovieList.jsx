import React from "react";
import MovieCard from "./MovieCard";

function MovieList({ movies }) {
  return (
    <div className="row">
      {movies.length > 0 ? (
        movies.map((movie) => (
          <div key={movie.imdbID} className="col-md-4 mb-4">
            <MovieCard movie={movie} />
          </div>
        ))
      ) : (
        <p className="text-center">No movies found.</p>
      )}
    </div>
  );
}

export default MovieList;