//* Ovoj kod e napisan vo Javascript koristejki ja React bibliotekata za razvoj na korisnicki interfejsi
// Cel na ovoj kod e da go demostrira koristenjeto na "useState" f-ja od React za upravuvanje so sostojbata(state) na komponentata

//* "import { useState } from "react";"
// Importiranje na "useState" od React

//* Definiranje na funkcionalnata komponenta "State"
// Vo ovaa funkcionalna komponenta se koristi "useSate" za kreiranje sostojba so pocetna vrednost "..."
// "inputValue" e vrednosta koja ja cuvame, a "setInputValue" e metodot koj go koristime za da ja promenime taa vrednost

//* Definiranje na f-cii za obrabotka na promeni na vlezot
// "onChange" f-jata se povikuva koga se menuva vrednosta na vleznioz element i go obrabotuva toa soopstenie
// Ja promenuva sodrzinata na elementot so id="result" so novata vrednost na vlezniot element
// "onChangeWithReact" f-jata isto taka se povikuva koga se menuva vrednosta na vlezniot element, no koristi "setInputValue" za da se azurira sostojbata "inputValue"

//* Renderiranje na komponentata
// Vo "return" delot se renderira JSX koj ja sostavuva korisnickata interfejsna komponenta
// Ima vlezen element (<input>) so id="something" i slusac na promeni koj go povikuva "onChangeWtihReact" metodot
// Pod nego ima zaglavie (<h1>) so id="result" koe ja prikazuva tekovnata vrednost na sostojbata "inputValue"

import { useState } from "react";

export const State = () => {
  // inputValue is the value we want to store
  // setInputValue is the method which we use for changing that value
  const [inputValue, setInputValue] = useState("....");

  let onChange = (event) => {
    console.log(event.target);
    const newValue = event.target.value;
    console.log(newValue);
    var element = document.getElementById("result");
    console.log(element);
    element.innerHTML = newValue;
  };

  let onChangeWithReact = (event) => {
    const newValue = event.target.value;
    setInputValue(newValue);
  };

  return (
    <div>
      {/* <input id="something" placeholder="type something" onChange={onChange} /> */}
      <input
        id="something"
        placeholder="type something"
        onChange={onChangeWithReact}
      />
      <h1 id="result">{inputValue}</h1>
    </div>
  );
};