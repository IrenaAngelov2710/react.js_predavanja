import axios from "axios";
import { useState, useEffect } from "react";

export const Motivation = () => {
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    axios.get("https://type.fit/api/quotes").then((res) => setQuotes(res.data));
  });

  return (
    <div>
      <h1>Motivation!</h1>
      {quotes.map((quote, i) => {
        return (
          <div key={i}>
            <hr />
            <h3>{quote.text}</h3>
            <p>Said by the great {quote.author}</p>
          </div>
        );
      })}
    </div>
  );
};

//* Ovoj kod e React funkcionalna komponenta narecena "Motivation" koja gi prikazuva motivaciskite citati od web servis

//* "import axios from "axios";"
// So ovaa linija vnesuva bibliotektata "axions" koja se koristi za izvrsuvanje HTTP baranja kon web servisite

//* "import { useState, useEffect } from "react";"
// So ovaa linija se vnesuvaat "useState" i "useEffect" hooks od React
// "useState" se koristi za da se vodi sostojbata vo komponentite, dodeka "useEffect" se koristi za da se izvrsuva asinhron kod pri postavuvanje ili promena na sostojbata

//* "const [quotes, setQuotes] = useState([]);"
// Ovaa linija kreira sostojba "quotes" i f-ja "setQuotes" za da se menuva sostojbata
// Vo ovoj slucaj "quotes" se niza koja se koristi za cuvanje na citatite

//* "useEffect(() => { ... });"
// Ovoj del na kodot koristi "useEffect" hook za da se izvrsi kod koga komponentata ke se postavi na ekranot
// Vo ovoj slucaj koristi "axios.get" za da gi zeme citatite od web servisot "https://type.fit/api/quotes" i potoa gi postavuva vo sostojbata "quotes" so pomos na "setQuotes"

//* "<h1>Motivation!</h1>"
// Ovaa linija kreira naslov "Motivation" koj se prikazuva na ekranot

//* "{quotes.map((quote, i) => { ... })}"
// Ova e del od JSX kodot kade se mapiraat i prikazuvaat citatite od sostojbata "quotes"
// So pomos na "map" metodot sekoj citat se prikazuva kako "div" so tekstot na citatot i avtorot

//* "<div key={i}>"
// Sekoj citat e zavitkan vo "<div>" element kade key={i}
// Ova se koristi za efikasnot vo React pri renderiranje na listi

//* "<hr />" 
// Ovaa linija dodava horizontalna crta kako razdelie pomegu citatite

//* "<h3>{quote.text}</h3>"
// Se prikazuva tekstot na citatot kako naslov "<h3>" element

//* "<p>Said by the great {quote.author}</p>"
// Se prikazuva avtorot na citatot vo "<p>" element