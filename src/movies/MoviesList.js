import React, { useState, useEffect } from "react";
import { Movie } from "./Movie";
import { Filter } from "../Filter";

const movies = [
  {
    name: "36th Chamber",
  },
  {
    name: "Man of Iron",
  },
  {
    name: "Matrix",
  },
];

const API_URL =
  "https://api.themoviedb.org/3/discover/movie?api_key=acb01648392c4e67394377c61583afcd&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1";

export function MoviesList() {
  const [filter, setFilter] = useState("");
  const [movies, setMovies] = useState([]);

  //getting the movie data from the API
  const getMovies = async () => {
    try {
      const res = await fetch(API_URL);
      const movies = await res.json();
      setMovies(movies.results);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div>
      <Filter filter={filter} setFilter={setFilter} />
      <ul>
        {movies
          .filter((movie) =>
            movie.title.toLowerCase().includes(filter.toLowerCase())
          )
          .map((movie) => (
            <Movie key={movie.id} movie={movie} />
          ))}
      </ul>
    </div>
  );
}
