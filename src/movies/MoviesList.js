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

export function MoviesList() {
  const [filter, setFilter] = useState("");
  
  useEffect(() => {
    console.log("use effect");
  }, [filter]); 

  return (
    <div>
      <Filter filter={filter} setFilter={setFilter} />
      <ul>
        {movies
          .filter((movie) =>
            movie.name.toLowerCase().includes(filter.toLowerCase())
          )
          .map((movie) => (
            <Movie key={movie.name} movie={movie} />
          ))}
      </ul>
    </div>
  );
}
