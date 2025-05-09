import React from "react";
import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  return (
    <Link to={`/details/${movie.id}`}>
      <div className="w-90 flex flex-col space-y-2 items-center">
        <img
          className="rounded-2xl object-fill w-70 h-90  shadow-2xl  shadow-gray-600"
          src={movie.posterURL}
          alt=""
        />
        <h3 className="font-bold text-2xl">{movie.title}</h3>
        <p>{movie.description}</p>
        <p>
          <strong>Rating:</strong> {movie.rating}
        </p>
      </div>
    </Link>
  );
};

export default MovieCard;
