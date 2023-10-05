import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { API_URL } from "../Uttils/constants";

export const Comment = () => {
  const { id } = useParams();

  const [comment, setComment] = useState(undefined);

  useEffect(() => {
    fetch(`${API_URL}/comments/${id}`)
      .then((res) => res.json())
      .then((result) => setComment(result))
      .catch((err) => alert(err));
  }, []);

  return (
    <div>
      <h1>Single comment</h1>
      {comment ? (
        <div>
          <span>Id: {comment.id}</span>
          <p>Name: {comment.name}</p>
          <p>Email: {comment.email}</p>
          <p>Body: {comment.body}</p>
        </div>
      ) : (
        <h1>Loading comment</h1>
      )}
    </div>
  );
};

// Ovoj kod pretstavuva React komponenta narecena "Comment"
// Ovaa komponenta e dizajnirana za prikaz na podatoci za eden konkreten komentar na osnova na negoviot "id"

//* "import { useParams } from "react-router-dom";"
// Ovaa linija gi vnesuva f-ciite "useEffect" i "useState" od React
// "useState" se koristi za sozdavanje sostojba vo funkcionalnite komponenti, a "useEffect" se koristi za izvrsuvanje na efekti vo komponentata

//* "import { API_URL } from "../uttils/constants";"
// Se vnesuva konstantata "API_URL" od fajlot "constants.js"
// Ovaa konstanta gi sodrzi URL-ta na API-to

//* "const { id } = useParams();"
// So ova se izvlekuva "id" parametarot od URL-to koristejki "useParams" hook
// "id-to" sega ke ja sodrzi vrednosta na "id" parametarot od URL-to koj se koristi za dobivanje na informacii za soodveten komentar

//* "const [comment, setComment] = useState(undefined);"
// Se sozdava sostojba "comment" i f-ja "setComment" za azuriranje na sostojbata
// Vo pocetok "comment" e postaveno na "undefined" sto znaci deka informaciite za komentarot se uste se vcituvaat

//* "useEffect(() => { ... }, []);"
// Se koristi "useEffect" za izvrsuvanje na kodot vo negovoto telo
// Ovoj kod se izvrsuva pri pocetok na komponentata bidejki praznata niza "[]" e predadena kako vtor argument
// Vo teloto na "useEffect" se pravi HTTP baranje so "fetch" za da se zemat podatoci za komentarot so soodvetniot "id" od API-to
// Podatocite se vcituvaat i postavuvaat vo sostojbata "comment"

// Vo vizuelniot del na komponentata se prikazuva naslov "Single comment" i podatocite za komentarot
// Ako informaciite za komentarot se dostapni se prikazuva id, name, email i body na komentarot
// Ako podatocite se uste ne se vcituvaat se prikazuva porakata "Loading comment"


