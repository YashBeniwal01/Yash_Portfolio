import React from 'react';

const MovieItem = ({ movie }) => {
  return (
    <div>
      <h2>{movie.title}</h2>
      <p>{movie.year}</p>
      {/* Add more details here such as poster, rating, etc. */}
    </div>
  );
};

export default MovieItem;
