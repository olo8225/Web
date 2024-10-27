import React from "react"; // eslint-disable-line no-unused-vars
import PropTypes from "prop-types";
import MoviePoster from "../components/MoviePoster";

const Movies = ({ movies }) => {
  return (
    <div>
      <h2>영화 목록</h2>
      <div
        style={{
          display: "flex-start",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {movies.map((movie) => (
          <MoviePoster key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

Movies.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      poster_path: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Movies;
