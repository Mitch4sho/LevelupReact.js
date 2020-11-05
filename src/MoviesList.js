import React, { useState } from "react";

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

  return (
    <div>
      <label>
        Filter:
        <input onChange={(e) => setFilter(e.target.value)} value={filter} />
      </label>
      <ul>
        {movies
          .filter((movie) =>
            movie.name.toLowerCase().includes(filter.toLowerCase())
          )
          .map((movie) => (
            <li key={movie.name}>{movie.name}</li>
          ))}
      </ul>
    </div>
  );
}
