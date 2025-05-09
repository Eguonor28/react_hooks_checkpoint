import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const MovieTrailer = ({ movies }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const movie = movies.find((m) => m.id === parseInt(id));

  if (!movie) return <p className="text-center">Movie not found</p>;
  return (
    <div className="p-4 max-w-3xl mx-auto">
      <button
        className="mb-4 bg-gray-200 px-4 py-2 rounded"
        onClick={() => navigate("/")}
      >
        ⬅️ Back
      </button>
      <h2 className="text-2xl font-bold mb-2">{movie.title}</h2>
      <img
        className="rounded-2xl object-fill w-70 h-90  shadow-2xl  shadow-gray-600"
        src={movie.posterURL}
        alt=""
      />
      <p className="mb-4">{movie.description}</p>
      <p className="mb-4 font-bold">Rating: {movie.rating}</p>
      <div className="aspect-w-16 aspect-h-9">
        <iframe
          className="w-full h-96"
          src={movie.trailerLink}
          title="Movie Trailer"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default MovieTrailer;
