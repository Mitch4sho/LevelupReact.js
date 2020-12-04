import React from "react";
import PropTypes from "prop-types"

export function Filter({ setFilter, filter }) {
  return (
    <label>
      <input
        placeholder="Search"
        onChange={(e) => setFilter(e.target.value)}
        value={filter}
      />
    </label>
  );
}
// Below is a examples of how proptypes are expected and they are just a way ot 
// set strict rules on certain props or values like accepting strings or numbers 


Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  setFilter: PropTypes.func.isRequired
};