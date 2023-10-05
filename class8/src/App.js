import logo from "./logo.svg";
import "./App.css";
import "./css/style.css";
import { Route, Routes, Link, useRoutes, NavLink } from "react-router-dom";
import { useState} from "react";
import { Home } from "./components/Home";
import { BookList } from "./components/BookList";
import { Book } from "./components/Book";
import { NewBook } from "./components/NewBook";
import { NotFound } from "./components/NotFound";
import { BookLayout } from "./components/BookLayout";

import { HomeMovies } from "./components/HomeMovies";
import { Movies } from "./components/Movies";
import { NewMovie } from "./components/NewMovie";
import { MovieList } from "./components/MovieList";
import { Movie } from "./components/Movie";
import { NotFoundMovie } from "./components/NotFoundMovie";
import { MovieLayout } from "./components/MovieLayout";


// install react router
// npm i react-router-dom --save

function App() {
  // se sto moze da se napravi so Routes vo jsx, moze da se napravi
  // i so javascript element
  let element = useRoutes([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "*",
      element: <NotFound />,
    },
    {
      path: "/books",
      element: <BookLayout />,
      children: [
        {
          index: true,
          element: <BookList />,
        },
      ],
    },
  ]);

// Movies
 const movies = [
    { id: 1, title: "Gone girl", genre: "Thriller/Mystery/Drama", director: "David Fincher", releaseDate: "03-10-2014" },
    { id: 2, title: "Taken", genre: "Action/Thriller/Crime", director: "Pierre Morel", releaseDate:"19-02-2009" },
    { id: 3, title: "A Beautiful Mind", genre: "Romance/Drama/Historical drama", director: "Ron Howard", releaseDate: "28-02-2002" },
    { id: 4, title: "Unknown", genre: "Action/Thriller/Mystery", director: "Jaume Collet-Serra", releaseDate: "03-03-2011" },
    { id: 5, title: "Titanic", genre: "Romance/Drama/Disaster", director: "James Cameron", releaseDate: "19-12-1997" },
];

  return (
    <div className="App">
      {
        // react ni dozvoluva da imame poveke ruti so isti paths
      }
      {/* <Routes>
        <Route path="/books/new" element={<h1>Some Extra content</h1>} />
      </Routes> */}
      <nav>
      <ul>
          {/* <li>
            {
              // to ni kazuva koe treba da bide naseto url
            }
            <Link to="/" replace>
              Home
            </Link>
          </li>
          <li>
            <NavLink
              style={({ isActive }) => {
                return isActive ? { color: "red" } : { color: "blue" };
              }}
              to="/"
            >
              Home with Navlink
            </NavLink>
          </li>
          <li>
            <Link to="/books" reloadDocument>
              Books
            </Link>
          </li>
          <li>
            <NavLink to="/books">Books with navLink</NavLink>
          </li> */}
          {/* <li> THIS SHOULD NOT BE USED
            <a href="/books">Books with anchor</a>
          </li> */}

          {/* Vezba na cas */}
          {/* <li><Link to="/">HomeMovies</Link></li> */}
          {/* <li><Link to="/movies">Movies</Link></li> */}
          {/* Movies domasna 1 */}
          {/* <li><Link to="/movies">MovieList</Link></li> */}
          {/* Movies domasna 2 */}
          <li><Link to="/movies">MovieLayout</Link></li>
          {/* Movies domasna 1 */}
          {/* <li><Link to="*">NotFoundMovie</Link></li> */}
          
        </ul>
      </nav>
      {/* {element} */}
      <Routes>
      {
          // path e vsusnost kako kje izgleda naseto url
          // element e sto kje se pokaze na ekran
          // ako imame : togas rutata e dinamicka
        }
        {/* <Route path="/" element={<Home />} /> */}
        {/* <Route path="/books" element={<BookList />} />
        <Route path="/books/:id" element={<Book />} />
        <Route path="/books/new" element={<NewBook />} /> */}
        {
          // BookLayout kje se pokazuva na site ruti sto pocnuvaat
          // so /books, child rutite bi se pokazuvale preku
          // OUTLET-ot sto go imame vo BookLayout
        }
        {/* <Route path="/books" element={<BookLayout />}>
          <Route index element={<BookList />} />
          <Route path=":id" element={<Book />} />
          <Route path="new" element={<NewBook />} />
        </Route> */}
        {
          // * znaci dokolku ruterot ne fati nikoja od
          // rutite sto ni se definirani, togas kje ja ispecati taa
        }
        {/* <Route path="*" element={<NotFound />} /> */}

        {/* Vezba na cas */}
        {/* <Route path="/" element={<HomeMovies />} />  */}
        {/* <Route path="/movies" element={<Movies />} /> */}

        {/* Movies domasna 1 */}
        {/* <Route path="/movies" element={<MovieList movies={movies} />} /> */}
        {/* <Route path="/movies/:id" element={<Movie movies={movies}/>} /> */}
        {/* <Route path="/movies/new" element={<NewMovie />} /> */}
        {/* <Route path="*" element={<NotFoundMovie />} /> */}

        {/* Movies domasna 2 */}
        <Route path="/movies" element={<MovieLayout movies={movies} />} />
        <Route index element={<MovieList movies={movies} />} />
        <Route path="/movies/:id" element={<Movie movies={movies}/>} />
        <Route path="/movies/new?" element={<NewBook />} />
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

// Primer
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

//* "import { useRoutes } from "react-router-dom";""
// "useRoutes" e hook koj se koristi vo React Router bibliotekata za upravuvanje so marsrutiranjeto vo nasata React aplikacija
// Ovoj hook se koristi za definiranje i konfiguriranje marsruti i komponenti koi ke se prikazat na razlicni URL patisna
// Osnovna cel na "useRoutes" e da ovozmozi dinamicko marsrutiranje i renderiranje na komponentite vo zavisnost od URL patot

// Primer
// import { useRoutes } from "react-router-dom";

// const routes = [
//   {
//     path: "/"",
//     element: <Home />,
//     children: [
//       { path: "about", element: <About /> },
//       { path: "contact", element: <Contact /> },
//     ],
//   },
//   {
//     path: "/dashboard",
//     element: <Dashboard />,
//     children: [
//       { path: "profile", element: <Profile /> },
//       { path: "settings", element: <Settings /> },
//     ],
//   },
// ];

// function App() {
//   const routeResult = useRoutes(routes);

//   return routeResult;
// }

//* "import { NavLink } from "react-router-dom";"
// "NavLink" e komponenta koja se koristi vo React Router za da se kreiraat navigacioni linkovi vo nasata React aplikacija
// Ovaa komponenta e slicna na obicniot "Link", no ima dopolnitelni funkcionalnosti i stilovi za obelezuvanje aktivni linkovi
// Osnovni prednosti i koristi na "NavLink" vo React se:
// 1. Obelezuvanje na aktivni linkovi
// 2. Podrska na stilovi
// 3. Izbegnuvanje na refresh

// Primer 
// import { NavLink } from "react-router-dom";

// function Navigation() {
//   return (
//     <nav>
//       <ul>
//         <li>
//           <NavLink to="/" exact activeClassName="active">
//             Home
//           </NavLink>
//         </li>
//         <li>
//           <NavLink to="/about" activeClassName="active">
//             About
//           </NavLink>
//         </li>
//         <li>
//           <NavLink to="/contact" activeClassName="active">
//             Contact
//           </NavLink>
//         </li>
//       </ul>
//     </nav>
//   );
// }





















