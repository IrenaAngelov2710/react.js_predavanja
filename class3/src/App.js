import "./App.css";
import { Sport } from "./components/Sport";
import { Sport2 } from "./components/Sport2";
import { Sport3 } from "./components/Sport3";
import { Player } from "./components/Player";
import { Comments } from "./components/Comments";
import { StudentClass } from "./components/StudentClass";
import { CommentsClass } from "./components/CommetnsClass";

function App() {
  let sportsAndPeople = [
    { name: "Martin", sport: "Football" },
    { name: "Laura", sport: "Tenis" },
    { name: "Vedran", sport: "Table Tenis" },
    { name: "Bobi", sport: "Handbal" },
  ];

  let gamer = {
    firstName: "Martin",
    score: 5,
    print: function () {
      // when we use `` we can write regular strings and inside
      // if we want to use javascript we use ${}
      console.log(`name: ${gamer.firstName} - score: ${gamer.score}`);
    },
  };

  // console.log(player);

  //? Da napravime komponenta vo koja kje prikazuvame
  //? komentari, neka sekoj komentar ima id, author,
  //? text. Neka listata so komentari ja imate vo
  //? app.js i pratite preku props vo kreiranata
  //? komponenta i tamu da gi prikazime informaciite
  //? neka bidat vo nekoja tabela
  //? pokraj ova imate nekoe kopce LIKE sto vo
  //? konzola kje pecati +1

  
  //? Da go konvertirate istiot primer od casot (primerot za komentarite)
  //? i da go napravite vo klasna komponenta

  let comments = [
    { id: 1, author: "Irena", text: "This is first comment."},
    { id: 2, author: "Angela", text: "This is second comment."} ,
    { id: 3, author: "Martin", text: "This is third comment."} ,
    { id: 4, author: "Dance", text: "This is fourth comment."} ,
  ];

  let student = {
    name: "Martin",
    lastName: "Trajkov",
    index: 155025,
  };

  let student2 = {
    name: "Kole",
    lastName: "Vasilev",
    index: 111111,
  };

  // installing prop-types
  // npm install prop-types --save
  // npm install --save prop-types
  return (
    <div className="App">
      {/* <h1>Hello from React props</h1> */}
      {/* <Sport name={123} /> */}
      {/* <Sport name="Martin" sport="Tenis" /> */}
      {/* <Sport name="Laura" sport="Tenis" />
      <Sport name="Vedran" sport="Table Tenis" />  */}
      {/* <Sport />  */}
      {/* <Sport2 name="Laura" sport="Tenis" /> */}
      {/* <Sport2 /> */}
      {/* <Sport3 /> */}
      {/* {sportsAndPeople.map((object) => {
        return <Sport name={object.name} sport={object.sport} />;
      })} */}
      {/* <Sport3 sports={sportsAndPeople} /> */}
      {
        // Player is the component name
        // igrac is the object that is located inside props
        // gamer is the javascript object
      }
      {/* <Player igrac={gamer} /> */}

      {/* <h1 class="component">Functional component</h1>
      <Comments comments={comments}/> */}
      
      {/* <h1>Student Class</h1>
      <StudentClass student={student} />
      <StudentClass student={student2} /> */}

      {/* <h1 class="component">Class component</h1>
      <CommentsClass comments={comments} /> */}

      
    </div>
  );
}

export default App;