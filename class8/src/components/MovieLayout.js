// Prodolzenie na primerot sto bese na casot za filmovi
// da dodademe nekoj novi komponenti kako NewMovie koja kje se renderira
// na pat /movies/new i vnatre da imate nekoja forma so 3 inputi 
// za imeto na filmot,zanrot i ratingot i tie da se cuvaat vo nekoj stejt
// koga kje se submitira formata da gi ispecatime vrednostite vo 
// konzola. Da imame i notfound komponenta kade sto kje imame 
// nekoj golem tekst 404 koj sto kje bide crveno 
// a pod nego da ima nekoj drug tekst the resource you are looking for
// is missing. 

// Da napravime i Movies komponenta koja kje prima lista od filmovi 
// i preku custom parametar vo rutite da prikazuvame poveke informacii
// za posebniot film. Da se prikaze listata od filmovi vo movies i 
// potoa so klik na sekoj od filmovite da se prikazat dopolnitelni 
// informacii. 

// imajte ja listata i vo movies i vo Movie komponenta

// BONUS: listat da bide samo vo app.js a preku props prakajte ja vo
// komponentite sto vi trebaat


//? DOPOLNUVANJE: 
//? Da napraime da se prakjaat query parametri pri navigiranjeto 
//? do nov film, mozete direktno vo to propertyto vo Link za New Movie
//? da gi stavite so ? nesto kao <Link to="/movies/new?">New movie</Link>

//? parametrite da bidat name (ime na film) i genre i potoa ovie
//? query parametri da se zemat vo komponetata za new movie i tamu 
//? da se prikazat vo nekoj html elementi

import { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";

export const MovieLayout = ({ movies }) => {

    const values = {title: "", genre: "", rating: ""};
    const [formValues, setFormValues] = useState(values);

    // Query params
    const [searchParams, setSearchParams] = useSearchParams([]);
    const title = searchParams.get("title");
    const genre = searchParams.get("genre");

    return (
    <div>
        <h1>Movies List</h1>
        <ul>
            {movies.map((movie) => (
            <li key={movie.id}>
                <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
                </li>
                ))}
        </ul>
        <Link to={`/movies/new?title=${title}&genre=${genre}`}>New Movie</Link>
        <br />
        <input
        type="text"
        value={title}
        onChange={(e) => setSearchParams({ title: e.target.value })}/>
      <h1>{title}</h1>
      <input
        type="text"
        value={genre}
        onChange={(e) => setSearchParams({ genre: e.target.value })}/>
      <h1>{genre}</h1>
      </div>
    )
};