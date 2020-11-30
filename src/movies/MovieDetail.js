import React from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";

const BASE_URL  = "https://api.themoviedb.org/3/movie/";
const API_KEY = "?api_key=acb01648392c4e67394377c61583afcd"

export function MovieDetail() {
  const { id } = useParams();
  const [movie, setMovie] =  useState({});

  const getMovie = async () => {
    try {
      const res = await fetch(BASE_URL + id + API_KEY);
      const newMovie = await res.json();
      setMovie(newMovie);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    getMovie();
  }, [id])
    
  if (!movie.title) return null
  
  return (
    <div>
      <h1>{movie.title}</h1>
      <h1>{movie.overview}</h1>
      <ul>
        {movie.genres.map((genre) => (
        <li key = {genre.id}>{genre.name}</li>
        ))}
      </ul>
    </div>
  );
}
