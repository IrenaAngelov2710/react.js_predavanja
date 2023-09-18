//* Ovoj kod e napisan koristejki go React i ilustrira kako da se koristi "useState" za upravuvanje so niza na datumi(dates) i dinamicko dodavanje novi datumi vo nizata

//* "import { useState } from "react";"
// Importiranje na "useState" od React

//* Definiranje na funkcionalna komponenta "Dates"
// Vo ovaa komponenta se koristi "useState" za kreiranje sostojba so pocetna vrednost prazna niza ([])

//* Definiranje na f-ja "addDate"
// F-jata "addDate" se povikuva koga ke se klikne na kopceto "Add Date"
// Taa sozdava nov objekt od tekovniot datum, ja kopira sodrzinata na "dates" vo nova niza "newDates", go dodava noviot datum vo "newDates" i potoa ja postavuva sostojbata "dates" so novata niza

//* Renderiranje na komponentata
// Vo ovoj del komponentata go renderira zaglavieto "My Favourite Dates", lista od datumi koi se prikazani kako <p> elementi koristejki go metodot .map() i kopceto "Add Date" koe se koristi za povik na f-jata "addDate" koga ke se klikne
// Sekoj datum vo nozata "dates" se prikazuva kako nov element vo listata
// Klucot "key" se koristi za da se oznaci sekoj element vo reakcijata i ovozmozuva efikasno renderiranje na samo izmenetite delovi od listata

import { useState } from "react";

export const Dates = () => {
  // we must always set new array in the state
  // this is a must for every type
  const [dates, setDates] = useState([]);

  const addDate = () => {
    // creating object from the current date
    let date = new Date().toString();
    // ... spread operator
    // site postoecki dati sto gi imame vo dates gi kopirame i stavame
    // vo novata niza newDates
    var newDates = [...dates];

    // ja dodavame novata data
    newDates.push(date);
    console.log(newDates);
    console.log(dates);
    // gi setirame dates zaedno so novata data
    setDates(newDates);
  };

  return (
    <div>
      <h1>My Favourite Dates</h1>
      {dates.map((date, i) => {
        return <p key={i}>{date}</p>;
      })}
      <button onClick={addDate}>Add Date</button>
    </div>
  );
};