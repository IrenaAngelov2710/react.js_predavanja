import logo from './logo.svg';
import './App.css';
import { Link, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import { API_URL } from "./uttils/constants";
import { Characters } from './components/Characters';
import { Pagination } from './components/Pagination';

function App() {
  const [listOfCharacters, setListOfCharacters] = useState([]);
  const [location, setLocation] = useState([]);
  const [episode, setEpisode] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [charactersPerPage, setCharactersPerPage] = useState(3);

  useEffect(() => {
    fetch(API_URL + "/character")
      .then((res) => res.json())
      .then((result) => setListOfCharacters(result.results))
      .catch((err) => alert(err));

      fetch(API_URL + "/location")
      .then((res) => res.json())
      .then((result) => setLocation(result.results))
      .catch((err) => alert(err));

      fetch(API_URL + "/episode")
      .then((res) => res.json())
      .then((result) => setEpisode(result.results))
      .catch((err) => alert(err));
  }, []);

    const lastCharacter = currentPage * charactersPerPage;
    const firstCharacter = lastCharacter - charactersPerPage;
    const characters = listOfCharacters.slice(firstCharacter, lastCharacter);

  return (
    <div className="App">
      <h1>RICK AND MORTY <Link className="link" to="/character">CHARACTERS</Link></h1>
  
      <Routes>
        <Route path="/character" element={<Characters
         listOfCharacters={characters}
         location={location}
         episode={episode}
        />} />

      </Routes>
    
      <Pagination
        totalCharacters={listOfCharacters.length}
        charactersPerPage={charactersPerPage}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}/>
    </div>
  );
}

export default App;
