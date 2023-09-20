//* Ovaa funkcionalna komponenta "Counter" pretstavuva brojac so dve kopcinja za zgolemuvanje i namaluvanje na brojot
// Se koristi "useState" hook za sledenje na sostojbata "counter" i koga ke se klikne na kopcinjata se povikuvaat f-ciite "increment" ili "decrement" za izmena na sostojbata na "counter"

//* "import { useState } from "react";"
// Importiranje na "useState" od React
// Toa e React hook koj se koristi za sledenje i azuriranje na sostjbata na komponentata

//* "export const Counter = () => {"
// Kreirame funkcionalna React komponenta "Counter"

//* "const [counter, setCounter] = useState(0);"
// Vo ramkite na komponentata koristime "useState" hook za da definirame pocetna vrednost na sostojbata "counter" i f-jata "setCounter" koja ke se koristi za azuriranje na sostojbata
// Pocetnata vrednost na brojacot e postavena na 0

//* "const increment = () => {
//*   setCounter(counter + 1);
//* }

//* const decrement = () => {
//*   setCounter(counter - 1);
//* }"
// Definiranje na dve f-cii: "increment" i "decrement"
// Ovie vrednosti se koristat za zgolemuvanje i namaluvanje na vrednosta na "counter"

//* "return (...);"
// Se vraka JXS koj go prikazuva brojot na "counter" i dve kopcinja za zgolemuvanje i namaluvanje na brojot

import { useState} from "react";

export const Counter = () => {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter(counter + 1)
  }

  const decrement = () => {
    setCounter(counter - 1)
  }
     return (
    <div className="counter">
      <h1 className="klik">{counter}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}