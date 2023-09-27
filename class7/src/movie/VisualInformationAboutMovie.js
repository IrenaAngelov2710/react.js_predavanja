import React, { useContext } from "react";
import { MovieContext } from "../App";

export const VisualInformationAboutMovie= () => {
  const { movie } = useContext(MovieContext);

  return (
    <div>
        <p>
            <a href={movie.linkToTheTrailer} target="_blank">
                Link to movie
            </a>
      </p>
      <div className="image-container">
      <img src={movie.images[0]} alt={movie.title} />
      <img src={movie.images[1]} alt={movie.title} />
      <img src={movie.images[2]} alt={movie.title} />
      </div>
    </div>
  );
};