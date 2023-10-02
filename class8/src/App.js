import logo from "./logo.svg";
import "./App.css";
import { Route, Routes, Link } from "react-router-dom";
import { useState} from "react";
import { Home } from "./components/Home";
import { BookList } from "./components/BookList";
import { Book } from "./components/Book";
import { NewBook } from "./components/NewBook";
import { NotFound } from "./components/NotFound";

import { HomeMovies } from "./components/HomeMovies";
import { Movies } from "./components/Movies";
import { NewMovie } from "./components/NewMovie";
import { NotFoundMovie } from "./components/NotFoundMovie";
import { MovieList } from "./components/MovieList";
import { Movie } from "./components/Movie";




// install react router
// npm i react-router-dom --save

function App() {
 const movies = [
    { id: 1, title: "Gone girl", genre: "Thriller/Mystery/Drama", director: "David Fincher", releaseDate: "03-10-2014" },
    { id: 2, title: "Taken", genre: "Action/Thriller/Crime", director: "Pierre Morel", releaseDate:"19-02-2009" },
    { id: 3, title: "A Beautiful Mind", genre: "Romance/Drama/Historical drama", director: "Ron Howard", releaseDate: "28-02-2002" },
    { id: 4, title: "Unknown", genre: "Action/Thriller/Mystery", director: "Jaume Collet-Serra", releaseDate: "03-03-2011" },
    { id: 5, title: "Titanic", genre: "Romance/Drama/Disaster", director: "James Cameron", releaseDate: "19-12-1997" },
];

  return (
    <div className="App">
      <nav>
        <ul>
          {/* <li>
            {
              // to ni kazuva koe treba da bide naseto url
            }
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/books">BookList</Link>
          </li> */}
          {/* <li> THIS SHOULD NOT BE USED
            <a href="/books">Books with anchor</a>
          </li> */}

          <li><Link to="/">HomeMovies</Link></li>
          <li><Link to="/movies">MovieList</Link></li>
          <li><Link to="*">NotFoundMovie</Link></li>
        </ul>
      </nav>

      <Routes>
        {/* <Route path="/" element={<Home />} />
        <Route path="/books" element={<BookList />} />
        <Route path="/books/:id" element={<Book />} />
        <Route path="/books/new" element={<NewBook />}/> */}
        {/* dokolku ruterot ne fati nikoja ruta od gore, togas ke se ispecati ovaa */}
        {/* <Route path="*" element={<NotFound/>}/> */}

        <Route path="/" element={<HomeMovies />} /> 
        {/* <Route path="/movies" element={<Movies />} /> */}
        <Route path="/movies" element={<MovieList movies={movies} />} />
        <Route path="/movies/:id" element={<Movie movies={movies}/>} />
        <Route path="/movies/new" element={<NewMovie />} />
        <Route path="*" element={<NotFoundMovie />} />
      </Routes>
    </div>
  );
}

export default App;

//* Vo React, "Routes" i "Route" se del od bibliotekata React Router koi se koristat za upravuvanje so marsruti i navigacija vo web aplikaciite
//* "Routes" komponentata
// "Routes" e komponenta koja sluzi kako kontejner za definiranje na marsruti vo nasata React aplikacija
// Taa ovozmozuva deklarativno definiranje na marsruti i komponenti koi treba da se prikazat za sekoj marsrut
// "Routes" se koristi za ovozmozuvanje na dinamicka navigacija pomegu razlicni delovi od nasata aplikacija

//* "Route" komponenta
// "Route" e komponenta koja definira eden marsrut vo nasata aplikacija
// Sekoja "Route" komponenta ima svojstvo "path" koe ja definira URL patekata koja treba da se sovpadne za da se prikaze odredena komponenta
// Isto taka ima svojstvo "element" koe definira koja komponentata treba da se prikaze koga marsrutot ke se sovpadne so "path"
// "Route" se koristi vnatre vo "Routes" komponentata za da se definiraat site marsruti vo aplikacijata

//* "import { Link } from "react-router-dom";"
// "import { Link } from "react-router-dom";" e import na "Link" komponenta od bibliotekata "react-router-dom"
// "Link" komponentata se koristi za kreiranje navigaciski linkovi megu razlicni stranici ili ruti vo nasata React aplikacija
// Koga koristime "Link" kreirame HTML "<a>" element koj se odnesuva kako link, no so nekolku prednosti:
// 1. Sprecuva celosno podnovuvanje na stranicata
// Koga koristime obicen "<a>" element, kliknuvanjeto na linkot moze da predizvika celosno podnovuvanje na stranicata
// So "Link" ova se sprecuva i nasata React aplikacija ke ne odnese na novata stranica bez podnovuvanje na celata stranica
// 2. Dodavanje na aktivni stilovi avtomatski
// "Link" avtomatski dodava klasi ili stilovi na aktivniot link

// import React from "react";
// import { Link } from "react-router-dom";

// export const Navigation = () => {
//   return (
//     <nav>
//       <ul>
//         <li>
//           <Link to="/">Pocetna</Link>
//         </li>
//         <li>
//           <Link to="/about">Za nas</Link>
//         </li>
//         <li>
//           <Link to="/contact">Kontakt</Link>
//         </li>
//       </ul>
//     </nav>
//   );
// };

//* Hash router - ima # pred patekata
// primer: /#/books

//* History router 
// celoto navigiranje napred-nazad

//* Memory router
// namesto da cuva vo rutata kade sme bile, vo memorija go cuva
// najcesto se koristi za testiranje

//* Static router
// se koristi za server renderi i toa go pravi preku property location
// primer: <StaticRouter location ="/books">
// ne se koristi za navigiranje od page do page, poseben e ovoj

//* Native Router
// ovoj se instalira posebno vo poseben paket e
// se koristi za mobilni apps







