  //? Class component
  //? neka vo nekoj h1 element stoi vaseto ime i prezime
  //? a potoa vo h2 neka bide vaseto mesto na ziveenje
import React from "react";
import { PlaceOfResidence } from "./components/PlaceOfResidence";

export class AppClassComponent extends React.Component {
    render() {
        return (
          <div>
            <PlaceOfResidence />
          </div>
        );
      }
    }