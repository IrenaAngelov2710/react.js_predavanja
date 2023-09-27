import logo from "./logo.svg";
import "./App.css";
import { User } from "./components/User";
import React from "react";
import { Homepage } from "./components/Homepage";
import { UserInfo } from "./components/UserInfo";
import { User2Context } from "./uttils/User2Context";
import { Movie } from "./movie/Movie";

// this is the creation of the context
// sluzi za komunikacija pomegu komponentite
export const UserContext = React.createContext();
export const MovieContext = React.createContext();

// export const User2Context = React.createContext();

function App() {
  const user = {
    name: "Martin",
    surname: "Trajkov",
    jobPosition: "Developer",
    hobby: "Movies",
    city: "Skopje",
    street: "Jane Sandanski",
    number: 222,
  };

  const movie = {
    title: "Gone girl",
    images: [
      "https://cdn.kobo.com/book-images/395aef2d-44e2-4f98-bb62-33d7130eabcf/353/569/90/False/gone-girl-movie-tie-in-edition-1.jpg",
      "https://static.independent.co.uk/s3fs-public/thumbnails/image/2014/08/04/12/Ben-Affleck.jpg",
      "https://assets.mubicdn.net/images/artworks/614056/images-original.png?1687979373",
    ],
    rating: 8.1,
    genre: "Thriller/Mystery/Drama",
    plot: "On their fifth wedding anniversary, writing teacher Nick Dunne returns home to find his wife Amy missing.",
    releaseDate: "03-10-2014", 
    linkToTheTrailer: "https://www.youtube.com/watch?v=2-_-1nJf8Vg"
  };

  return (
    <div className="App">
      {/* <h1>Hello from class 7</h1> */}
      {/* <UserContext.Provider value="Laura">
        <User />
      </UserContext.Provider> */}
      {/* <KorisnikContext.Provider value={user}> */}
      {
        // we must use value in the provider it is reserved word
      }
      {/* <User2Context.Provider value={{ theme: "dark", font: 22, role: "ADMIN" }}>
        <Homepage />
        <UserInfo />
      </User2Context.Provider> */}
      {/* </KorisnikContext.Provider> */}
       {/* Обвивка на апликацијата со контекст */}
       <MovieContext.Provider value={{ movie }}>
        <Movie />
      </MovieContext.Provider>
    </div>
  );
}

export default App;

//? Neka imate nekoj objekt movie koj vnatre kje ima lista od sliki (barem 3), od nekoj film sto 
//? kje go najdete na internet, i potoa neka ima za filmot rating, zanr, plot, releaseDate,
//? linkToTheTrailer.
//? Potoa Kreirajte nekoja komponenta Movie.js, vo koja samo kje prikazite 2 drugi komponenti 
//? koj kje gi kreirate so ime informationAboutMovie.js i vnatre kje gi prikazite
//? site informacii za filmot, osven slikite i linkot a potoa kje kreirate nekoja komponenta 
//? koja kje bide VisualInformationAboutMovie.js, vo koja kje gi pokazete site sliki
//? i linkot do trailerot, no ovoj objekt movie da bide kreiran vo app.js i praten preku kontekst 
//? a potoa vo Information i VisualInformation da se zemaat informaciite za filmot
//? i da se prikazat vo soodvetniot html.

//? BONUS: Da napravime i uste edna komponenta visitors, on the site, vo koja kje prikazeme 
//? nekoja lista od usernames koja kje bide pratena od app.js preku contekstot.