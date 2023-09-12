//* Ovaa React komponenta, narecena "Sport3" prima "props" objekt koj sodrzi svojstvo "sports" koj e niza od objekti
// Vo ovaa komponenta se koristi mapiranje (map) na nizata "sports" za da se generiraat delovi od JSX za sekoj objekt vo nizata

//* "console.log(props);"
// Ovaa linija gi prikazuva propertitie (props) koi se prateni kon komponentata vo konzola za debagiranje

// Vo JSX delot na komponetata, se koristi "map()" metodot za mapiranje na nizata "sports"
// Za sekoj objekt od nizata se izvrsuva sledniot kod:
//* "console.log(index);"
// Go prikazuva indeksot na tekovniot objekt vo konzolata za debagiranje
//* "console.log(object);"
// Gi prikazuva podatocite od tekovniot objekt vo konzolata za debagiranje

// Za sekoj objekt, se generira del od JSX kade se prikazuva imeto i omileniot sport na objektot koristejki gi vrednostite "object.name" i "object.sport"

export function Sport3(props) {
  console.log(props);
  return (
    <div>
      {/* <h1>My name is Vedran!</h1>
      <p>My favourite sport is Table Tenis!</p> */}
      {props.sports.map((object, index) => {
        console.log(index);
        console.log(object);
        return (
          <div key={index}>
            <h1>My name is {object.name}</h1>
            <p>My favourite sport is {object.sport}</p>
          </div>
        );
      })}
    </div>
  );
}