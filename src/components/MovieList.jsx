import React from "react";
import MovieCard from "./MovieCard";
const MovieList = ({ movies }) => {
  return (
    <div className="mx-auto grid grid-cols md:grid-cols-2 max-w-4xl space-y-10 text-sm justify-center">
      {movies.map((movie, id) => (
        <MovieCard key={id} movie={movie} />
      ))}
    </div>
  );
};

export default MovieList;
