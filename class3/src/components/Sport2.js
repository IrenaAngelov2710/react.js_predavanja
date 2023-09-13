//* Ovoj kod pretstavuva React funkcionalna komponenta narecena "Sport2"
// Ovaa komponenta ima slicna funkcionalnost kako komponetata "Sport", no koristi poinakov nacin za destrukcija na "props" objektot
// Vo ovaa komponenta "props" objektot ne se destrukcira eksplicitno so "props.name" i "props.sport", tuku se koristi destrukcija na argumentite na f-jata
// Ova znaci deka "name" i "sport" se direktno dostapni kako argumenti na f-jata

// we are sending props inside Sport2 arguments
// but we are using destrucuring and we imediatly have the variables
export function Sport2({ name, sport }) {
    return (
      <div>
        <h1>My name is {name}!</h1>
        <p>My favourite sport is {sport}!</p>
      </div>
    );
  }