import logo from "./logo.svg";
import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import { API_RickAndMorty, API_URL } from "./uttils/constants";
import { Albums } from "./components/Albums";
import { Gallery } from "./components/Gallery";
import { Motivation } from "./components/Motivation";
import { Characters } from "./components/Characters";
import { RandomMeal } from "./components/TheMeal";

function App() {
  const [albums, setAlbums] = useState([]);
  const [photos, setPhotos] = useState([]);
  const [selectedPhoto, setSelectedPhoto] = useState("");

  // Vezba na cas
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch(API_URL + "/albums")
      .then((res) => res.json())
      .then((result) => setAlbums(result))
      .catch((err) => alert(err));

    fetch(API_URL + "/photos")
      .then((res) => res.json())
      .then((result) => setPhotos(result));

      // Vezba na cas
      fetch(API_RickAndMorty + "/character")
      .then((res) => res.json())
      .then((result) => setCharacters(result.results))
      .catch((err) => alert(err));
  }, []);

  function deleteAlbum(album) {
    console.log(album);
    // vo novata niza stavi gi site elementi koj imaat razlicno id
    setAlbums(albums.filter((item) => item.id !== album.id));
  }

  function closePhoto() {
    console.log("inside close photo");
    setSelectedPhoto("");
  }
  
  return (
    <div className="App">
      {/* <h1>Welcome to class10</h1> */}
      {/* <h1>Rick and Morty API</h1> */}
      <ul>
        {/* <li>
          <Link to="/albums">Albums</Link>
        </li>
        <li>
          <Link to="/gallery">Gallery</Link>
        </li>
        <li>
          <Link to="/motivation">Motivation</Link>
        </li> */}

        {/* Domasna TheMeal */}
        <h1>Click</h1><Link to="/meal">hier</Link><span> to see a random meal</span>
        <h3>Click refresh to see another random meal</h3>

        {/* Vezba na cas */}
        {/* <li>
          <Link to="/character">Characters</Link>
        </li> */}
      </ul>

      <Routes>
        {/* <Route
          path="/albums"
          element={<Albums listOfAlbums={albums} deleteAlbum={deleteAlbum} />}
        />
        <Route
          path="/gallery"
          element={
            <Gallery
              listOfPhotos={photos}
              selectedPhoto={selectedPhoto}
              setSelectedPhoto={setSelectedPhoto}
              closePhoto={closePhoto}
            />
          }
        />
        <Route path="/motivation" element={<Motivation />} /> */}

        {/* Domasna TheMeal */}
        <Route path="/meal" element={<RandomMeal />} />

        {/* Vezba na cas */}
        {/* <Route
        path="/character"
        element={<Characters listOfCharacters={characters} />}
        /> */}

      </Routes>
    </div>
  );
}

export default App