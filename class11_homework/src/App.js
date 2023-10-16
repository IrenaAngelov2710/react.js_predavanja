import logo from './logo.svg';
import './App.css';
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./redux/actions/counterActions";
import { Bonus } from "./components/Bonus";

function App() {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>Counter: {count}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <Bonus />
    </div>
  );
};

export default App;

//* "import { useSelector, useDispatch } from "react-redux";" - Ovie se React Redux hooks
// "useSelector" se koristi za da se dobie sostojbata od Redux, a "useDispatch" se koristi za da se dobie f-jata "dispatch" za da se izvrsat Redux akcii

//* "import { increment, decrement } from "./redux/action/counterActions";" - Ovie se React Redux hooks
// Ovde se importiraat dve Redux akcii: "increment" i "decrement" koi se definirani vo datotekata "./redux/actions/counterActions"

//* "import { Bonus } from "./components/Bonus";"
// Se importira komponentata "Bonus" koja se koristi vo ovoj kod

//* Definiranje na f-jata "App()" koja e glavna komponenta na aplikacijata

//* "const count = useSelector((state) => state.count);"
// Se koristi "useSelector" za da se dobie "count" od Redux sostojbata. "state.count" e del od sostojbata koj go sodrzi tekovniot brojac

//* "const dispatch = useDispatch();"
// So "useDispatch" se dobiva f-jata "dispatch" koja se koristi za da se izvrsat Redux akcii

//* Vizuelniot del na komponentata "return(...);" sodrzi:
// <div className="App"> - Del od HTML-ot na komponentata kade se sodrzi sodrzinata na aplikacijata
// <h1>Counter: {count}</h1> - Ja prikazuva tekovnata vrednost na brojacot koja se dobiva od sostojbata "count"
// <button onClick={() => dispatch(increment())}>Increment</button> - Kopce za zgolemuvanje na brojacot. Koga korisnikot ke klikne se povikuva Redux akcijata "increment()" so pomos na "dispatch"
// <button onClick={() => dispatch(decrement())}>Decrement</button> - Kopce za namaluvanje na brojacot. Koga korisnikot ke klikne se povikuva Readux akcijata "decrement" so pomos na "dispatch"
// <Bonus /> - Se smestuva komponentata "Bonus" koja e del od ovaa komponenta