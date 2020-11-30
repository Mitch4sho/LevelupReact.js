import React from "react";
import PropTypes from "prop-types"
import { Link } from "react-router-dom";

export function Movie({ movie, config }) {
  return (
    <Link to="details">
        <li>
          {config.images?.base_url && (
            <img
              src={config.images.base_url + "w342" + movie.poster_path}
              alt={movie.title + " Poster"}
            />
          )}
          <h3>{movie.title}</h3>
      </ Link>
    </li>
  )
}

//Proptypes this makes debugging a lot easier!

Movie.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    poster_path: PropTypes.string.isRequired,
  }).isRequired,
};