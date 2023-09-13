// export function Player({ player: { firstName, print } }) {
//   //   console.log(props);
//   return (
//     <div>
//       <h1>Player name is {firstName}</h1>
//       <button onClick={print}>Player Score</button>
//     </div>
//   );
// }

//* Ovoj kod pretstavuva React funkcionalna komponenta narecena "Player"
// Taa gi prikazuva informaciite za igracot i ovozmozuva ispituvanje na rezultatot na igracot so kliknuvanje na kopceto
// Ovaa komponenta prima "props" kako argument, a vo JXS se prikazuvaat informaciite za igracot i kopceto za ispis na rezultatot na igracot

//* "props.igrac.firstName"
// Se koristi za prikazuvanje na imeto na igracot vo elementot "<h1>"

//* "props.igrac.print"
// Se koristi kako f-ja koja ke se povika koga ke se klikne kopceto "Player Score"
// Ovaa f-ja ja povikuva metodata "print" definirana vo objektot "gamer"

export function Player(props) {
    console.log(props);
    return (
      <div>
        <h1>Player name is {props.igrac.firstName}</h1>
        <button onClick={props.igrac.print}>Player Score</button>
      </div>
    );
  }