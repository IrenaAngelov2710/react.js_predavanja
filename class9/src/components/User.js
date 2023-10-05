//? Da napravime nekoja navigacija, kaj sto kje imate Homepage, sto kje ima nekoj tekst Welcome to our page! i uste edna ruta koja sto kje nosi na users

//? Da kreirame edna posebna komponenta Users i vnatre da se prikazuvaat users od istovo api sto go imame
//? kje bide https://jsonplaceholder.typicode.com samo kje ima i /users, da se prikazat imeto i prezimeto, dokolku nemame useri da se prikazuva Loading

//? Potoa pokraj ovie informacii da imame i nekoj nacin da se pokazat details i koga kje se klikne na details, da ni se prikazat poveke informacii
//? za kliknatiot user. 

import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { API_URL } from "../Uttils/constants";

export const User = () => {
  const { id } = useParams();

  const [user, setUser] = useState(undefined);

  useEffect(() => {
    fetch(`${API_URL}/users/${id}`)
      .then((res) => res.json())
      .then((result) => setUser(result))
      .catch((err) => alert(err));
  }, []);

  return (
    <div>
  <h1>Single user</h1>
  {user ? (
    <div>
      <span>Id: {user.id}</span>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      <p>Street: {user.address.street}</p>
      <p>Suite: {user.address.suite}</p>
      <p>City: {user.address.city}</p>
      <p>Zipcode: {user.address.zipcode}</p>
      <p>Latitude: {user.address.geo.lat}</p>
      <p>Longitude: {user.address.geo.lng}</p>
      <p>Phone: {user.phone}</p>
      <p>Website: {user.website}</p>
      <p>Company Name: {user.company.name}</p>
      <p>Company Catchphrase: {user.company.catchPhrase}</p>
      <p>Company BS: {user.company.bs}</p>
    </div>
  ) : (
    <h1>Loading user...</h1>
  )}
</div>
  );
};

// Ovoj kod pretstavuva React komponenta narecena "User"
// Ovaa komponenta e dizajnirana za prikaz na podatoci za eden konkreten user na osnova na negoviot "id"

//* "import { useParams } from "react-router-dom";"
// Ovaa linija gi vnesuva f-ciite "useEffect" i "useState" od React
// "useState" se koristi za sozdavanje sostojba vo funkcionalnite komponenti, a "useEffect" se koristi za izvrsuvanje na efekti vo komponentata

//* "import { API_URL } from "../uttils/constants";"
// Se vnesuva konstantata "API_URL" od fajlot "constants.js"
// Ovaa konstanta gi sodrzi URL-ta na API-to

//* "const { id } = useParams();"
// So ova se izvlekuva "id" parametarot od URL-to koristejki "useParams" hook
// "id-to" sega ke ja sodrzi vrednosta na "id" parametarot od URL-to koj se koristi za dobivanje na informacii za soodveten user

//* "const [user, setUser] = useState(undefined);"
// Se sozdava sostojba "user" i f-ja "setUser" za azuriranje na sostojbata
// Vo pocetok "user" e postaveno na "undefined" sto znaci deka informaciite za korisnikot se uste se vcituvaat

//* "useEffect(() => { ... }, []);"
// Se koristi "useEffect" za izvrsuvanje na kodot vo negovoto telo
// Ovoj kod se izvrsuva pri pocetok na komponentata bidejki praznata niza "[]" e predadena kako vtor argument
// Vo teloto na "useEffect" se pravi HTTP baranje so "fetch" za da se zemat podatoci za korisnikot so soodvetniot "id" od API-to
// Podatocite se vcituvaat i postavuvaat vo sostojbata "user"

// Vo vizuelniot del na komponentata se prikazuva naslov "Single user" i podatocite za korisnikot
// Ako informaciite za korisnikot se dostapni se prikazuva id, name, email, street itn
// Ako podatocite se uste ne se vcituvaat se prikazuva porakata "Loading user..."