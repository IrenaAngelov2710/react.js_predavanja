//? Class component
//? neka vo nekoj h1 element stoi vaseto ime i prezime
//? a potoa vo h2 neka bide vaseto mesto na ziveenje

import React from "react";

export class PlaceOfResidence extends React.Component {
  render() {
    return (
      <div>
        <h1>Irena Angelov</h1>
        <h2>I am living in Dortmund!</h2>
      </div>
    );
  }
}