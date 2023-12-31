import "./App.css";
import { Car } from "./components/Car";
import { User } from "./components/User";
import { Student } from "./components/Student";
import { State } from "./components/State";
import { Dates } from "./components/Dates";
import { Counter } from "./components/Counter";


function App() {
  let cars = [
    { brand: "Ford", model: "Focus", year: 2009 },
    { brand: "Tesla", model: "S", year: 2022 },
    { brand: "Opel", model: "Corsa", year: 2015 },
  ];

  let user = {
    name: "Martin",
    age: 27,
  };

  let user1 = {
    name: "Laura",
    age: 25,
  };

  let students = [
    { name: "Irena", lastName: "Angelov", index: 44536 },
    { name: "Angela", lastName: "Antova", index: 44537 },
    { name: "Dance", lastName: "Baceva", index: 44538 },
    { name: "Martin", lastName: "Trajkov", index: 44539 },
  ];

  return (
    <div className="App">
      {/* Hello Class! */}
      {/* <Car vehicles={cars} /> */}
      {/* <User user={user} user1={user1} shouldShowUser={1} /> */}
      {/* <User user1={user1} /> */}
      {/* <Student studenti={students} semestar={true} /> */}
      <br />
      {/* <State /> */}
      {/* <Dates /> */}
      <Counter />
    </div>
  );
}

export default App;

// Rules when using hooks
// React hooks cant be called inside loop, conditions or nested function
// React hooks are defined on the begining of our component
// They are called only from functional components
// React hooks can call other react hooks