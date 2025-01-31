import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function MovieDetail() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovie = async () => {
      const API_KEY = import.meta.env.VITE_OMDB_API_KEY;
      const url = `https://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`;
      const response = await axios.get(url);
      setMovie(response.data);
    };
    fetchMovie();
  }, [id]);

  if (!movie) return <div className="text-center mt-4">Loading...</div>;

  return (
    <div className="card mx-auto" style={{ width: "18rem" }}>
      <img src={movie.Poster} className="card-img-top" alt={movie.Title} />
      <div className="card-body">
        <h5 className="card-title">{movie.Title}</h5>
        <p className="card-text">{movie.Plot}</p>
        <p className="card-text"><strong>Released:</strong> {movie.Released}</p>
        <p className="card-text"><strong>Rating:</strong> {movie.imdbRating}</p>
      </div>
    </div>
  );
}


export default MovieDetail;