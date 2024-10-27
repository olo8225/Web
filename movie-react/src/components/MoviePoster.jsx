import React from "react"; // eslint-disable-line no-unused-vars
import PropTypes from "prop-types";
import { Poster } from "../styled/MoviePosterStyles";

const MoviePoster = ({ movie }) => {
  return (
    <Poster>
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
      />
    </Poster>
  );
};

MoviePoster.propTypes = {
  movie: PropTypes.shape({
    poster_path: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export default MoviePoster;
