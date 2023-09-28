import logo from "./logo.svg";
import "./App.css";
import { User } from "./components/User";
import React from "react";
import { Homepage } from "./components/Homepage";
import { UserInfo } from "./components/UserInfo";
import { User2Context } from "./uttils/User2Context";
import { Movie } from "./movie/Movie";
import { Visitors } from "./movie/Visitors";

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

  const visitors = [
    {name: "Rosamund", surname: "Pike"},
    {name: "Emily", surname: "Ratajkowski"},
    {name: "Ben", surname: "Affleck"},
    {name: "Carrie", surname: "Coon"},
    {name: "Kim", surname: "Dickens"},
    {name: "Neil Patrick", surname: "Harris"},
  ];

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
       <MovieContext.Provider value={movie}>
        <Movie />
      </MovieContext.Provider>
      <MovieContext.Provider value={visitors}>
        <Visitors />
      </MovieContext.Provider>
    </div>
  );
}

export default App;

