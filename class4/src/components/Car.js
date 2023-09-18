//* Ovoj kod pretstavuva funkcionalna React komponenta narecena "Car"
// Ovaa komponenta prifaka eden prop narecen "vehicles" koj e niza(array) od objekti(object)

//* "import PropTypes from "prop-types";"
// Ovaa linija importira biblioteka za proverka na propertita na komponenti so pomos na PropTypes
// PropTypes se koristi za definiranje na tipovi i zadolzitelnost na propertita

//* "export const Car = ({ vehicles }) => { ... }"
// Ova e definicija na funkcionalnata komponenta "Car"
// Komponentata prifaka edinstven prop narecen "vehicles" koj se destruktira od primeniot objekt
// Vo ovoj slucaj "vehicles" e niza od avtomobili koi se preneseuvaat na komponentata

//* "console.log(vehicles);"
// Ova e ednostavno ilustriranje na prethodno prenesenite "vehicles" za proverka vo konzola

//* "<div> ... <div/>;"
// div

//* "<h3>Our Garage!</h3>"
// h3

//* "<table border={1}> ... </table>"
// Ova e HTML tabela koja se koristi za postavuvanje na granica okolu tabelata

//* "<thead> ... </thead>"
// Ova e glavniot del na tabelata koj se koristi za definiranje na zaglavieto na tabelata

//* "<tbody> ... </tbody>"
// Ova e teloto na tabelata kade sto se prikazuvaat podatocite

//* "{vehicles.map((vehicle, i) => { ... })}"
// Ova e Javascript izraz za mapiranje na podatocite od "vehicles" nizata i generiranje na tabela so podatoci za sekoj avtomobil
// "map" f-jata se koristi za da se izminat site elementi od nizata i da se generira soodveten HTML
// Za sekoj avtomobli se prikazuvaat informacii za brand ("<td>{vehicle.brand}</td>"), model ("<td>{vehicle.model}</td>") i godina ("<td>{vehicle.year}</td>")
// "key={i}" se koristi za da se identifikuva sekoj red od ostanatite i da se izbegnat predupreduvanjata na React zaedno so optimizacija na renderiranjeto

//* "Car.propTypes = { ... }"
// Ovde se definiraat propTypes za komponentata 
// "propTypes" se koristat za da se definiraa tipot na "vehicle" prop i se proveruva dali e prosleden kako niza od objekti
// "isRequired" oznacuva deka ovoj prop e zadolzitelen i mora da bide prosleden na komponentata

import PropTypes from "prop-types";

export const Car = ({ vehicles }) => {
  console.log(vehicles);
  return (
    <div>
      <h3 className="car">Our Garage!</h3>
      <table border={1}>
        <thead>
          <tr>
            <th>Brand</th>
            <th>Model</th>
            <th>Year</th>
          </tr>
        </thead>
        <tbody>
          {vehicles.map((vehicle, i) => {
            return (
              <tr key={i}>
                <td>{vehicle.brand}</td>
                <td>{vehicle.model}</td>
                <td>{vehicle.year}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

Car.propTypes = {
  vehicles: PropTypes.arrayOf(PropTypes.object).isRequired,
};

