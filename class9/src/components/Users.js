//? Da napravime nekoja navigacija, kaj sto kje imate Homepage, sto kje ima nekoj tekst Welcome to our page! i uste edna ruta koja sto kje nosi na users

//? Da kreirame edna posebna komponenta Users i vnatre da se prikazuvaat users od istovo api sto go imame
//? kje bide https://jsonplaceholder.typicode.com samo kje ima i /users, da se prikazat imeto i prezimeto, dokolku nemame useri da se prikazuva Loading

//? Potoa pokraj ovie informacii da imame i nekoj nacin da se pokazat details i koga kje se klikne na details, da ni se prikazat poveke informacii
//? za kliknatiot user. 

import { useState, useEffect } from "react";
import { API_URL } from "../Uttils/constants";
import { Link } from "react-router-dom";

export const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch(`${API_URL}/users`)
      .then((res) => res.json())
      .then((result) => setUsers(result))
      .catch((err) => alert(err));
  }, []);

  return (
    <div>
      <h1>Users</h1>
      {users.length > 0 ? (
        <div>
          {users.map((user) => {
            return (
              <div key={user.id}>
                <span>Id: {user.id}</span>
                <p>Name: {user.name}</p>
                <p>Username: {user.username}</p>
                <Link to={"/single-user/" + user.id}>Details...</Link>
                <hr />
              </div>
            );
          })}
        </div>
      ) : (
        <h2>Loading users....</h2>
      )}
    </div>
  );
};

//* "import { useState, useEffect } from "react";"
// Ovaa linija gi vnesuva f-ciite "useState" i "useEffect" od React
// "useState" se koristi za sozdavanje sostojba vo funkcionalnite komponenti, a "useEffect" se koristi za izvrsuvanje efekti vo komponentata

//* "import { API_URL } from "../uttils/constants";"
// Se vnesuva konstantata "API_URL" od  fajlot "constants.js"
// Ovaa konstanta se koristi za opredeluvanje na URL-to na API-to od kade ke se zemaat komentarite

//* "import { Link } from "react-router-dom";" 
// Se vnesuva komponentata "Link" od paketot "react-router-dom"
// Ovaa komponenta se koristi za kreiranje linkovi koi ke go menuvaat URL-to na aplikacijata, sto ovozmozuva navigacija pomegu razlicnite delovi na aplikacijata

//* "const [users, setUsers] = useState([]);"
// Se sozdava sostojba "users" i f-ja "setUsers" za nejzino azuriranje
// Vo pocetok "users" e postaveno na prazna niza

//* "useEffect(() => { ... }, []);"
// Se koristi "useEffect" za izvrsuvanje na kodot vo negovoto telo
// Vo ovoj slucaj kodot se izvrsuva samo ednas pri pocetok na komponentata, bidejki praznata nita "[]" se predava kako vtor argument na "useEffect"
// Vo teloto na "useEffect" se pravi HTTP baranje so "fetch" za da se zemat korisnicite od API-to i potoa se postavuvaat vo sostojbata "users"

// Vo vizuelniot del na komponentata se prikazuva naslov "Users" i potoa se pravi mapiranje na "users" nizata za da se prikazat site korisnici
// Ako ima korisnici, sekoj korisnik se prikazuva so id, name, username  i link kon detalite za toj user
// Linkot "Link" se koristi za da gi nasoci korisnicite kon posebna stranica kade ke moze da se vidat detali za toj user

// Dokolku "users" nizata e prazna (sto znaci deka se cekaat podatoci od API) se prikazuva poraka "Loading users..."