//* Ovoj kod e napisan vo React i se odnesuva na komponetata narecena "Users" koja sluzi za prikaz na lista na korisnici i moze da se filtrira spored imeto ili korisnickoto ime 

//* "import { useState, useEffect } from "react";"
// Ovaa linija go vnesuva "useState" i "useEffect" od React, sto ovozmozuva koristenje na sostojbi i efekti vo komponentata

//* "const [usersToShow, setUsersToShow] = useState(props.users); i const [value, setValue] = useState("");"
// Se definiraat dve sostojbi ("userToShow" i "value") i soodvetnite f-cii ("setUsersToShow" i "setValue") za nivnoto upravuvanje
// Pocetnata vrednost na "usersToShow" se postavuva na listata na korisnici predadena kako props preku "props.users", a "value" se postavuva kako prazen string

//* "let changeValue = (event) => { ... }"
// Se definira f-ja "changeValue" koja se povikuva koga se menuva vrednosta vo input poleto
// Vrednosta se zacuvuva vo "newValue" i potoa se azurira sostojbata "value" so nea
// Potoa se pecati vrednosta na sostojbata "value" vo konzola

//* "useEffect(() => { ... }, [value]);"
// Ovoj "useEffect" se izvrsuva sekogas koga se menuva sostojbata "value"
// Vo ovoj "useEffect" se proveruva dali "value" ima vrednost(ne e prazen string)
// Ako ima vrednost se filtriraat korisnicite od "usersToShow" listata spored vneseniot tekst vo input poleto
// Filtriranite korisnici se zacuvuvaat vo "filteredUsers" i se azurira sostojba "usersToShow" so niv
// Ako "value" e prazen string se prikazuvaat site korisnici odnovo

//* "return (...);"
// Vo "return" delot na komponentata se vraka JSX kod koj go definira izgledot na aplikacijata
// Ima input pole za filtriranje na korisnicite spored imeto ili korisnickoto ime
// Podolu se prikazuva lista so korisnicite koi odgovaraat na filtriranjeto
// Sekoj korisnik e prikazan so negovoto ime, korisnickoto ime, e-postata i web-stranica

// Osnovnata ideja na ovoj kod e da ovozmozi filtriranje na listata so korisnici vrz osnova na tekstot vnesen vo input poleto i da gi prikaze samo korisnicite sto odgovaraat na toj filter

import { useState, useEffect } from "react";

export const Users = (props) => {
  const [usersToShow, setUsersToShow] = useState(props.users);
  const [value, setValue] = useState("");

  let changeValue = (event) => {
    let newValue = event.target.value;
    setValue(newValue);
    console.log(value);
  };

  useEffect(() => {
    if (value) {
      const filteredUsers = usersToShow.filter((user) => {
        return user.name.includes(value) || user.username.includes(value);
      });
      console.log(filteredUsers);
      setUsersToShow(filteredUsers);
    } else {
      setUsersToShow(props.users); // call to api
    }
  }, [value]);

  return (
    <div>
      <div>
        <h1>Filter here</h1>
        <input placeholder="Filter here" value={value} onChange={changeValue} />
      </div>
      <div>
        {usersToShow.map((user, i) => {
          return (
            <>
              <div key={i}>
                <p>Name: {user.name}</p>
                <p>Username: {user.username}</p>
                <p>Email: {user.email}</p>
                <p>Website: {user.website}</p>
              </div>
              <hr />
            </>
          );
        })}
      </div>
    </div>
  );
};