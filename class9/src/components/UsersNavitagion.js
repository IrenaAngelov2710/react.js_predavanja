//? Da napravime nekoja navigacija, kaj sto kje imate Homepage, sto kje ima nekoj tekst Welcome to our page! i uste edna ruta koja sto kje nosi na users

//? Da kreirame edna posebna komponenta Users i vnatre da se prikazuvaat users od istovo api sto go imame
//? kje bide https://jsonplaceholder.typicode.com samo kje ima i /users, da se prikazat imeto i prezimeto, dokolku nemame useri da se prikazuva Loading

//? Potoa pokraj ovie informacii da imame i nekoj nacin da se pokazat details i koga kje se klikne na details, da ni se prikazat poveke informacii
//? za kliknatiot user. 

import { Link } from "react-router-dom";

export const UserNavigation = () => {
  return (
    <div>
        <h1>Welcome to our page!</h1>
        <ul>
      <li>
        <Link to="/users">Users</Link>
      </li>
    </ul>
    </div>
  );
};

//* "import { Link } from "react-router-dom";"
// So ovaa linija na kod go importirame "Link" od paketot "react-router-dom" vo komponentata
// "Link" se koristi ua kreiranje linkovi koi go upravuvaat rutingot vo nasata React aplikacija

//* "export const UsersNavigation = () => { ... }"
// Ovaa f-ja se eksportira kako "UsersNavigation". Taa e komponenta za navigacija vo nasiot React proekt

//* "return (...);"
// Vnatre vo f-jata "UsersNavigation" imame JSX kod:
// "<h1>" - Ova e HTML element vo koj se prikzuva porakata "Welcome to our page!"
// "<ul>" - Ova e HTML element (unordered list) vo koj se naogaat nasite navigacioni linkovi
// "<li>" - Ova se HTML elementi koi se koristat ze kreiranje na listata so navigacioni opcii
// "<Link to="/users">Users</Link>" 
// Komponentata "Link" se koristi za kreiranje link kon rutata "/users" i tekstot "Users" se prikazuva kako link koj korisnikot moze da go klikne
