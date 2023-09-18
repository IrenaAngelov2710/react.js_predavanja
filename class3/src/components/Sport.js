//* Ovoj kod pretstavuva React funkcionalna komponenta narecena "Sport"
// Vo React komponentite se osnovni izgradbeni blokovi za kreiranje na korisnicki interfejs
// Ovaa komponenta prima dve propertinja(props): "name" i "sport"
// Propertitite se nacin na prenos na podatoci od roditelskata komponenta kon decata

//* "import PropTypes from "prop-types";"
// Ovaa linija vnesuva PropTypes od paketot "prop-types"
// PropTypes e biblioteka koja se koristi za proverka na tipovite na propertitite koi gi prima komponentata
// Toa pomaga da se obezbedi konkretna upotreba na komponentata i deklarira ocekuvani tipovi na podatoci

//* "export function Sport(props) { ... };"
// Ovde se definira funkcionalnata komponenta "Sport" koja prima "props" kako argument
// "Props" e objekt koj sodrzi propertiti preneseni kon ovaa komponenta od roditelskata komponenta
// Vo ovoj slucaj komponentata ocekuva dve propertiti: "name" i "sport"

//* "console.log(props);"
// Ovaa linija ednostavno gi prikazuva propertitite primeni kako "props" vo konzola, sto moze da bide korisno za debagiranje

//* "const name = props.name; const sport = props.sport;"
// Ovde se izvlekuvaat propertitite "name" i "sport" od "props" objektot i im se dodeluvaat lokalni promenlivi za podocna koristenje

//* "return ..."
// Ova e delot na JSX na komponentata kade se definira kako komponentata ke ja prikaze svojata sodrzina
// Vo ovoj slucaj komponetata prikazuva ime i omileniot sport na korisnikot koristejki gi vrednosiste na propertitite "name" i "sport" koi se preneseni od roditelskata komponenta

//* "Sport.propTypes = { ... }"
// Ovde se definiraat PropTypes za komponentata
// PropTypes se koristat za deklarativna proverka na tipovite na propertitite
// Vo ovoj slucaj propertitite "name" i "sport" moraat da bidat od tip "string" i se zadolzizelni(isRequired)

import PropTypes from "prop-types";

export function Sport(props) {
  console.log(props);
  const name = props.name;
  const sport = props.sport;

  return (
    <div>
      <h1>My name is {name}!</h1>
      <p>My favourite sport is {sport}.</p>
    </div>
  );
}

Sport.propTypes = {
  name: PropTypes.string.isRequired,
  sport: PropTypes.string.isRequired,
};

Sport.defaultProps = {
  name: "John Doe",
  sport: "Baseball",
};