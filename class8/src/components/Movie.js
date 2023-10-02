// Prodolzenie na primerot sto bese na casot za filmovi
// da dodademe nekoj novi komponenti kako NewMovie koja kje se renderira
// na pat /movies/new i vnatre da imate nekoja forma so 3 inputi 
// za imeto na filmot,zanrot i ratingot i tie da se cuvaat vo nekoj stejt
// koga kje se submitira formata da gi ispecatime vrednostite vo konzola.
// Da imame i notfound komponenta kade sto kje imame 
// nekoj golem tekst 404 koj sto kje bide crveno 
// a pod nego da ima nekoj drug tekst the resource you are looking for
// is missing. 

//? Da napravime i Movies komponenta koja kje prima lista od filmovi 
//? i preku custom parametar vo rutite da prikazuvame poveke informacii
//? za posebniot film. Da se prikaze listata od filmovi vo movies i 
//? potoa so klik na sekoj od filmovite da se prikazat dopolnitelni 
//? informacii. 

//? imajte ja listata i vo movies i vo Movie komponenta
 
//? BONUS: listat da bide samo vo app.js a preku props prakajte ja vo
//? komponentite sto vi trebaat

import React from "react";
import { useParams } from "react-router-dom";

export const Movie = ({ movies }) => {
  //const movieList = [{}];

  // ova id e ona sto se naoga vo app.js vo dinamickata ruta za movies
  const { id } = useParams();
  const selectedMovie = movies.find(movie => movie.id === parseInt(id));

 
  return (
  <div>
    <h1>Information about the moive:</h1>
    <h2>{selectedMovie.title}</h2>
    <p>Genre: {selectedMovie.genre}</p>
    <p>Director: {selectedMovie.director}</p>
    <p>Release Date: {selectedMovie.releaseDate}</p>
   </div> )
};






