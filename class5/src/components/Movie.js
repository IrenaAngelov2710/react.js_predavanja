//* Ovoj kod e napisan vo Javascript so koristenje na bibliotekata React
// Glavnata cel na ovoj kod e da se kreira ednostavna aplikacija za glasanje megu dva filma, "Interstellar" i "Hypnotic", kade korisnicte mozat da glasaat za svojot omilen film

//* "import { useState, useEffect } from "react";"
// Ovde se importiraat "useState" i "useEffect" hooks od React

//* "export const Movie = () => {...};"
// Kreirame funkcionalna React komponenta

//* "const [movie1Votes, setMovie1Votes] = useState(0); и const [movie2Votes, setMovie2Votes] = useState(0);"
// Ovde se definiraat dve sostojbi ("movie1Votes" i "movie2Votes") i funkcii ("setMovie1Votes" i "setMovie2Votes") za nivnoto upravuvanje
// Pocetnata vrednost na sekoja sostojba e postavena na 0, sto znaci deka pocnuvaat so nula glasovi

//* "useEffect(() => { ... }, [movie1Votes]);"
// Ovoj "useEffect" se izvrsuva sekogas koga se izmenuva sostojbata "movie1Votes"
// Vo ovoj "useEffect" se proveruva dali brojot na glasovi za "Interstaller" dostignal 5
// Ako e taka, se ispisuva poraka "Interstellar wins" vo konzola
// Isto taka se proveruva dali brojot na glasovi za "Hypnotic" dostignal 5
// i ako e taka se ispisuva porakata "Hypnotic wins" vo konzola

//* "return (...);"
// Vo "return" delot na komponentata se vraka JSX kod koj go definira izgledot na aplikacijata
// Tuka se prikazani dva filma ("Interstellar" i "Hypnotic") so nivnite sliki, brojaci za glasovi na sekoj film i kopcinja za glasanje
// Koga korisnikot klika na kopceto za glasanje na odreden film, se povikuva soodvetnata f-ja ("setMovie1Votes" ili "setMovie2Votes") za zgolemuvanje na brojot na glasovi za izbraniot film

import { useState, useEffect } from "react";

export const Movie = () => {
  //   const [counter, setCounter] = useState(0);
  const [movie1Votes, setMovie1Votes] = useState(0);
  const [movie2Votes, setMovie2Votes] = useState(0);

  useEffect(() => {
    console.log("Voting");
    if (movie1Votes === 5) {
      console.log("Interstellar wins");
    }

    if (movie2Votes === 5) {
      console.log("Hypnotic wins");
    }
  }, [movie1Votes]);

  return (
    <div>
      <h1>Welcome to our voting app</h1>
      {/* <button onClick={() => setCounter(counter + 1)}>Increment</button>
      <h3>Counter: {counter}</h3> */}
      <div>
        <img
          src="https://nypost.com/wp-content/uploads/sites/2/2014/11/interstellar1a.jpg?quality=75&strip=all"
          style={{ width: 150, height: 150 }}
        />
        <br />
        <button
          onClick={() => {
            setMovie1Votes(movie1Votes + 1);
          }}
        >
          Vote
        </button>
        <h2>Interstelar votes: {movie1Votes}</h2>
        <br />
        <br />
      </div>
      <div>
        <img
          src="https://m.media-amazon.com/images/M/MV5BNmNmNWNiMjUtZmYyMC00OWVhLThmMTItNjkxYzU4Yzk2NTdlXkEyXkFqcGdeQXVyMDc5ODIzMw@@._V1_FMjpg_UX1000_.jpg"
          style={{ width: 150, height: 150 }}
        />
        <br />
        <button
          onClick={() => {
            setMovie2Votes(movie2Votes + 1);
          }}
        >
          Vote
        </button>
        <h2>Hypnotic votes {movie2Votes}</h2>
      </div>
    </div>
  );
};