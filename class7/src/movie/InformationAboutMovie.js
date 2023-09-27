import React, { useContext } from "react";
import { MovieContext } from "../App";

export const InformationAboutMovie = () => {
  const { movie } = useContext(MovieContext);

  return (
    <div>
      <p>Title: {movie.title}</p>
      <p>Rating: {movie.rating}</p>
      <p>Genre: {movie.genre}</p>
      <p>Plot: {movie.plot}</p>
      <p>Release Date: {movie.releaseDate}</p>
    </div>
  );
};