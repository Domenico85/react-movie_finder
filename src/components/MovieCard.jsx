import React from "react";
import { Link } from "react-router-dom";

function MovieCard({ movie }) {
  return (
    <div>
      <h3>{movie.Title}</h3>
      <img src={movie.Poster} alt={movie.Title} />
      <p>Year: {movie.Year}</p>
      <Link to={`/movie/${movie.imdbID}`}>More Details</Link>
    </div>
  );
}

export default MovieCard;