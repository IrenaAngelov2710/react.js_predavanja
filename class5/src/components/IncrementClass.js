//* Ovoj kod e napisan vo React i koristi klasicna komponenta za kreiranje aplikacija koja ovozmozuva inkrementiranje na brojacot na klik na kopceto

//* "import React from "react";"
// Se definira klasicna komponenta narecena "IncrementClass" koja e nasledena od "React.Component"

//* "constructor(props) { ... }"
// Konstruktorot se koristi za postavuvanje pocetni vrednosti i sostojbi na komponentata
// So "super(props)" se povikuva kontruktorot na roditelskata klasa
// Vo "this.state" se postavuva pocetnata vrednost na sostojbata "counter" na 0

//* "componentDidMount() { ... }"
// Metodot "componentDidMount" se izvrsuva otkako komponentata ke bide montirana(koga ke se prikaze na ekranot)
// Vo ovoj slucaj se koristi za pecatenje na poraka vo konzolaza koga komponentata prvpat se renderira

//* "componentDidUpdate() { ... }"
// Metodot "componentDidUpdate" se izvrsuva sekoj pat koga sostojbata na komponetata se izmenuva
// Vo ovoj slucaj se koristi za pecatenje na sostojbata vo konzolata sekogas koga se azurira sostojbata

//* "increment = () => { ... }"
// Ova e metod za inkrementiranje na sostojbata "counter" na komponentata
// Se koristi "this.setState" za azuriranje na sostojbata na nacin sto ovozmozuva reaktivno renderiranje na komponentata

//* "render() { ... }"
// "renden" metodot se koristi za definiranje kako treba da izgleda komponetata koga ke se renderira na ekranot
// Vo ovoj slucaj komponentata sodrzi kopce za inkrementiranje i prikaz na vrednosta na "counter"

// So ovoj kod korisnikot koga ke klikne na kopceto "Increment" ke se povika metodot "increment" sto ke se azurira sostojbata "counter" i ke predizvika povtorno renderiranje na komponentata, sto ke rezultira vo prikaz na novata vrednost na brojacot

import React from "react";

export class IncrementClass extends React.Component {
  constructor(props) {
    super(props); // this is a must
    // ova e istoto kako i useState
    this.state = {
      counter: 0,
    };
  }

  componentDidMount() {
    // this is called on the first render
    console.log("this is component did mount");
  }

  componentDidUpdate() {
    // this is called on every state change
    console.log("this is component did update");
  }

  increment = () => {
    this.setState({ counter: this.state.counter + 1 });
  };

  render() {
    return (
      <div>
        <button onClick={this.increment}>Increment</button>
        <h2>Counter value: {this.state.counter}</h2>
      </div>
    );
  }
}