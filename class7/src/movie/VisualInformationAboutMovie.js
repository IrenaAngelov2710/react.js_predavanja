import React from "react";
import { MovieContext } from "../App";

export const VisualInformationAboutMovie= () => {
  const movie = React.useContext(MovieContext);

  return (
    <div>
      <a href={movie.linkToTheTrailer} target="_blank"> Link to the trailer</a>
      <br />
            {movie.images.map((image, i) => (
              <img key={i} src={image} style={{ width: 300, height: 300  }} />
            ))}
    </div>
  );
};