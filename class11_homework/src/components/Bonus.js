// import React from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { addNumber, addNumberAsync } from "../redux/actions/bonusActions";

// export const Bonus = () => {
//   const bonusValue = useSelector((state) => state.bonusValue);
//   const dispatch = useDispatch();

//   return (
//     <div>
//       <h2>Bonus Component</h2>
//       <p>Bonus Value: {bonusValue}</p>
//       <button onClick={() => dispatch(addNumber(5))}>Add 5</button>
//       <button onClick={() => dispatch(addNumberAsync(10))}>
//         Add 10 Async
//       </button>
//     </div>
//   );
// };

import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addNumber, addNumberAsync } from "../redux/actions/bonusActions";

export const Bonus = () => {
  const [inputValue, setInputValue] = useState("");

  const bonusValue = useSelector((state) => state.bonusValue);
  const dispatch = useDispatch();

  const handleAddNumber = () => {
    console.log("Dispatching add number");
    const number = parseInt(inputValue);
    dispatch(addNumber(number));
  };
  
  const handleAddNumberAsync = () => {
    console.log("Dispatching add number async");
    const number = parseInt(inputValue);
    dispatch(addNumberAsync(number));
  };

  return (
      <div>
        <h2>Value: {bonusValue}</h2>
        <input type="number" onChange={(e) => setInputValue(e.target.value)} />
        <div>
          <button onClick={handleAddNumber}>Add number</button>
          <button onClick={handleAddNumberAsync}>Add number but asyncronious - after some time</button>
        </div>
      </div>
  );
}



//* "import React from "react";"
// Importiranje na glavnata biblioteka React. Ovaa biblioteka e neophrodna za da se kreiraat React komponenti

//* "import { useSelector, useDispatch } from "react-redux";"
// Importiranje na "useSelector" i "useDispatch" hooks od React Redux
// Ovie hooks se koristat za da se dobie sostojbata od Redux i za da se dobie f-jata "dispatch" za izvrsuvanje na Redux akciite

//* "import { addNumber, addNumberAsync } from "../redux/actions/bonusActions";"
// Importiranje na dve Redux akcii: "addNumber" i "addNumberAsync" koi se definirani vo datotekata "redux/actions/bonusActions"
// Ovie akcii se koristat za dodavanje broj na vrednosta, pri sto "addNumberAsync" ovozmozuva asinhrono dodavanje

//* "const bonusValue = useSelector((state) => state.bonusValue);"
// So pomos na "useSelector" se dobiva vrednosta na "bonusValue" od Redux sostojbata. Ova znaci deka vrednosta "bonusValue" se vcituva od globalnata sostojba na aplikacijata i se zacuvuva vo lokalnata promenliva "bonusValue"
// "const dispatch = useDispatch();" - So "useDispatch" se dobiva f-ja "dispatch" koja se koristi za izvrsuvanje na Redux akcii

//* Vizuleniot del na komponentata "return (...);" sordzi:
// <div> - HTML div element 
// <h2>Bonus Component</h2> - Zaglavie sto go prikazuva imeto na komponentata
// <p>Bonus Value: {bonusValue}</p> - Paragraf koj ja prikazuva tekovnata vrednost na bonusot. "{bonusValue}" se vmetnuva kako izraz za da se prikaze vrednosta na "bonusValue"
// <button onClick={() => dispatch(addNumber(5))}>Add 5</button> - Kopce za dodavanje 5 vo bonus vrednosta. Koga korisnikot ke klikne na kopceto se povikuva Redux akcijata "addNumber" so vrednost 5 kako argument preku f-jata "dispatch"
// <button onClick={() => dispatch(addNumberAsync(10))}>Add 10 Async</button> - Kopce za asinhrono dodavanje na 10 vo bonus vrednosta. Koga korisnikot ke klikne  na kopceto se povikuva Redux akcijata "addNumberAsync" so vrednost 10  kako argument preku f-jata "dispatch" 

