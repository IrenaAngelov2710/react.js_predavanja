//* Ovoj kod pretstavuva React komponenta narecena "User"
// Ovaa komponenta ima props "user", "user1" i "shouldShowUser" i koristi "PropTypes" za definiranje na tipovite na ocekuvanite props i "defaultProps" za postavuvanje na standardni vrednosti za nekoi od niv

//* "import PropTypes from "prop-types";"
// Ovde se vcituva bibliotekata "prop-types" koja se koristi za definiranje i proverka na tipovite na props vo React komponentite

//* "export const User = (props) => { ... }"
// Ova e definicija na funkcionalnata komponenta "User" 
// Komponentata prifaka props "user", "user1" i "shouldShowUser" koi ke bidat koristeni za prikaz na informacii za korisnikot
// Vo zavisnost od vrednosta na "shouldShowUser" komponentata ke prikaze informacii za "user" ili "user1"

//* "console.log(props);"
// Ova e ednostavno ilustriranje na primenite props za proverka vo konzola

// Vo zavisnot od vrednosta na "shouldShowUser" komponetata renderira razlicni informacii za korisnikot
// Dokolku "shouldShowUser" e "false" se prikazuvaat informaciite za "user" dokolku e "true" se prikazuvaat informaciite za "user1"

//* "User.propTypes = { ... }"
// Ovde se definiraat PropTypes za komponentata 
// Se definira deka "user" i "user1" se objekti("object"), a "shouldShowUser" e bool vrednost("bool")
// Isto taka se koristi "isRequired" za da se oznaci deka "user" i "user1" se zadolzitelni

//* "User.defaultProps = { ... }"
// Ovde se definiraat standardni vrednosti za props
// Ako nekoj od niv ne se prosledi na komponetata, ke se koristat vrednostite od "defaultProps"
// Vo ovoj slucaj "shouldShowUser" ima standardna vrednost "false", a "user" ima standardni informacii za korisnikot

import PropTypes from "prop-types";

export const User = (props) => {
  console.log(props);
  return (
    <>
      {!props.shouldShowUser ? (
        <div>
          <h1>User:</h1>
          <p>Name: {props.user.name}</p>
          <p>Adress: {props.user.adress}</p>
          <p>Age:{props.user.age}</p>
        </div>
      ) : (
        <div>
          <h1>User1:</h1>
          <p>Name: {props.user1.name}</p>
          <p>Adress: {props.user1.adress}</p>
          <p>Age:{props.user1.age}</p>
        </div>
      )}
    </>
  );
};

User.propTypes = {
  user: PropTypes.object,
  user1: PropTypes.object,
  shouldShowUser: PropTypes.bool,
};

User.defaultProps = {
  shouldShowUser: false,
  user: { name: "John Doe", adress: "Leninova", age: 55 },
};


// First we need to install PropTypes: npm install prop-types --save
// Then we need to import them in the component: import PropTypes from "prop-types";
// And then we can use them in the format above

// ComponentName.propTypes = {nameOfProp: PropTypes.[typeOfProp]}
// for DefaultProps the format is
// ComponentName.defaultProps = {nameOfProp: [Value of prop]}

//? ZA DOMASNA
//? Da napraime komponenta student koja kje ima ime/prezime/index
//? neka ovaa komponenta gi pokazuva studentite vo nekoja tabela
//? i taa lista da se prakja kako props od app.js
//? da prakame pokraj listata uste property koe kje bide nekoj
//? semestar i neka toj semestar se pokazuva na ekranot vo nekoj
//? h1 element vednas posle tabelata

//? Da stavime PropTypes na listata od studenti i neka taa lista bide
//? required, neka ima propTypes i za semestarot

//? Ako slucajno semestarot ne e praten, sekogas da se ispisuva
//? tekstot zimski