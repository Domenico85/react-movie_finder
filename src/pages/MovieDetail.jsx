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

  if (!movie) return <div>Loading...</div>;

  return (
    <div>
      <h1>{movie.Title}</h1>
      <img src={movie.Poster} alt={movie.Title} />
      <p>{movie.Plot}</p>
      <p>Released: {movie.Released}</p>
      <p>Rating: {movie.imdbRating}</p>
    </div>
  );
}

export default MovieDetail;