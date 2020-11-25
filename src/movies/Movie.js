import React, { useEffect } from "react";
import PropTypes from "prop-types"

export function Movie({ movie }) {
  //  useEffect(() => {
  //    console.log(movie.name);
  //  }, []);

  return <li>{movie.title}</li>;
}

//Proptypes this makes debugging a lot easier!

Movie.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
  }).isRequired,
};