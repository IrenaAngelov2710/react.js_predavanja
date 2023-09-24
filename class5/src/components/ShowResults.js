//? Da se kreira aplikacijata od slikata,
//? da imame firstName, lastName, email , password
//? i godini i tie da se cuvaat vo state. Tie vrednosti
//? od stejtot da se pokazuvaat vo tabela 
//? no da ima moznost preku kopce da se krijat i
//? pokazuvaat. 

//? BONUS: Pazete na tekstot na kopceto, dokolku 
//? treba da se pokazat tekstot da bide Show Results
//? dokolku treba da se skrijat da bide Hide Results

import { useState } from 'react';

export const ShowResults = () => {
    
    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [age, setAge] = useState("");
    const [showResults, setShowResults] = useState(false);

    let results = () => {
        setShowResults(!showResults);
    };
    
    return (
        <div className="show-results">
            <h1 className="h1-show-results">User Registration</h1>
            <div>
                <input className="input-show-results" type="text" placeholder="First name" value={name} onChange={(e) => setName(e.target.value)}/>
                <input className="input-show-results" type="text" placeholder="Last name" value={lastName} onChange={(e) => setLastName(e.target.value)}/>
                <input className="input-show-results" type="text" placeholder="E-mail" value={email} onChange={(e) => setEmail(e.target.value)}/>
                <input className="input-show-results" type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                <input className="input-show-results" type="number" placeholder="Age" value={age} onChange={(e) => setAge(e.target.value)}/>
                <button className="results-btn" onClick={results}>{showResults ? 'Hide Results' : 'Show Results'}</button>
            </div>
            {showResults && (
        <div className='table-show-results'>
          <table border="1">
            <thead>
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Password</th>
                <th>Age</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{name}</td>
                <td>{lastName}</td>
                <td>{email}</td>
                <td>{password}</td>
                <td>{age}</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

//* Ovoj kod pretstavuva React funkcionalna komponenta za registracija na korisnici so moznost da se prikazat rezultatite od registracijata vo tabela so pritiskanje na kopceto Show Results i prikrivanje na rezultatite so pritiskanje na kopceto Hide Results

//* "import { useState } from 'react';" 
// Go vnesuvame "useState" od React sto ke ni ovozmozi da rabotime so sostojbata na komponetata

//* "const [name, setName] = useState("");"
// Go koristime "useState" za da definirame promenlivi i f-cii za postavuvanje na sostojbi
// Vo ovoj slucaj imame promenliva "name" i f-ja "setName" za nea
// Istoto go pravime za "lastName", "email", "password" i "age", so pocetni vrednosti na site kako prazen string

//* "const [showResults, setShowResults] = useState(false);"
// Definirame sostojba "showResults" i f-ja "setShowResults" za nea, pocetnata vrednost e "false"
// Ovaa sostojba ke ja koristime za prikazuvanje ili skrivanje na rezultatite od formata

//* "let results = () => { setShowResults(!showResults); };"
// Go definirame "results" kako f-ja koja ja menuva sostojbata "showResults", sto ke gi prikaze ili skrie rezultatite

//* "return (...);"
// Vo "return" delot go vrakame celiot HTML i JXS kod na komponentata
// Imame eden "<div>" so klasa "show-results" koj ja opkruzuva celata sodrzina na komponentata
// "<h1 className="h1-show-results">User Registration</h1>" - Zaglavije na formata za registracija
// "<input>" elementi za vnesuvanje na informacii za korisnikot. "onChange" nastanite se koristat za da se azuriraat sostojbite pri sekoe vnesuvanje na tekst
// "<button className="results-btn" onClick={results}>{showResults ? 'Hide Results' : 'Show Results'}</button>" - Kopceto za prikazuvanje ili skrivanje na rezultatite. Tekstot na kompceto se menuva vrz osnova na sostojbata "showResults"
// "{showResults && (...)}" - Ova e usloven izraz koj proveruva dali "showResults" e "true", i ako e vistinito go prikazuva sledniot HTML kod vo tabelata koja gi prikazuva vnesenite podatoci na korisnikot