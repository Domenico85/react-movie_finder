import React from "react";
import { Link } from "react-router-dom";

function MovieCard({ movie }) {
  return (
    <div className="card">
      <img src={movie.Poster} className="card-img-top" alt={movie.Title} />
      <div className="card-body">
        <h5 className="card-title">{movie.Title}</h5>
        <p className="card-text">Year: {movie.Year}</p>
        <Link to={`/movie/${movie.imdbID}`} className="btn btn-primary">More Details</Link>
      </div>
    </div>
  );
}

export default MovieCard;
