import React, { useState, useRef } from "react";
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

  // a way to access the Dom and use certain methods in regular React
  const ulRef = useRef(null);
  const ref = useRef(null)

  return (
    <div ref={ulRef}>
    <form onSumbit ={(e) => {
      e.preventDefault()
    }}>
      <input ref = {ref} />
      <button />
    </form>
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
