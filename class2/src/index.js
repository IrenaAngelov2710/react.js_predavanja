//* Ovoj kod ja koristi bibliotekata "React" za izgradba na web aplikacija
//* "import React from "react";" i "import ReactDOM from "react-dom/client";"
// Ovie dve linii gi vcituvaat bibliotekite React i ReactDOM
// React se koristi za sozdavanje i rabota so komponenti
// ReactDOM se koristi za renderiranje na komponentite na web stranicata
import React from "react";
import ReactDOM from "react-dom/client";
//* "import App from "./App";"
// Ovaa linija ja vcituva komponentata "App" od datotekata "App.js" ili "App.jsx"
import App from "./App";

//* "const root = ReactDOM.createRoot(document.getElementById("root"));"
// Ovde se sozdava korenot "root" na nasata aplikacija koristejki "createRoot" metodot na "ReactDOM"
// Toa go odreduva mestoto kade ke se vmetne nasata aplikacija vo HTML dokumentot
// "document.getElementById("root")" prebaruva  elementi so identifikator "root" vo HTML-ot
const root = ReactDOM.createRoot(document.getElementById("root"));
//* "root.render(<App />);"
// Ovde se koristi "render" metodot na korenot "root" za da se renderira komponentata "App" vo mestoto kade sto e postaven korenot
// Ovaa linija zapocnuva proces na renderiranje na nasata React aplikacija
root.render(<App />)


