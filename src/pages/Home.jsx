import React, { useState } from "react";
import axios from "axios";
import SearchBar from "../components/SearchBar";
import MovieList from "../components/MovieList";

function Home() {
  const [movies, setMovies] = useState([]);

  const searchMovies = async (query) => {
    const API_KEY = import.meta.env.VITE_OMDB_API_KEY;
    const url = `https://www.omdbapi.com/?apikey=${API_KEY}&s=${query}`;
    const response = await axios.get(url);
    setMovies(response.data.Search || []);
  };

  return (
    <div>
      <SearchBar onSearch={searchMovies} />
      <MovieList movies={movies} />
    </div>
  );
}

export default Home;