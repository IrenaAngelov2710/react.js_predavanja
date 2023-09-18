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

import PropTypes from "prop-types";

export const Student = ({ studenti, semestar }) => {
    console.log(studenti);
    return (
        <>
        <h1 class="student">Students</h1>
        <table border={1}>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Last name</th>
                    <th>Index</th>
                </tr>
            </thead>
            <tbody>
                {studenti.map((student, i) => {
                    return (
                        <tr key={i}>
                            <td>{student.name}</td>
                            <td>{student.lastName}</td>
                            <td>{student.index}</td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
        {semestar ? (
                    <h1 className="zimski">Zimski</h1>
                ) : (
                    <h1 className="leten">Leten</h1>
                )}
        </>
    ); 
};

Student.propTypes = {studenti: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        lastName: PropTypes.string.isRequired,
        index: PropTypes.number.isRequired,
      })
    ).isRequired,
    semestar: PropTypes.bool.isRequired
  };

  //* Ovoj kod e react funkcionalna komponenta narecena "Student" koja go prikazuva spisokot na studenti i semestarot na ekranot

  //* "import PropTypes from "prop-types";"
  // Ovaa linija importira biblioteka za proverka na propertita na komponenti so pomos na PropTypes
  // PropTypes se koristi za definiranje na tipovi i zadolzitelnost na propertita

  //* "export const Student = ({ studenti, semsestar }) => { ... };"
  // Ova e definicija na React funkcionalnata komponenta narecena "Student"
  // Taa prima objekt dva properti "studenti" i "semestar"
  // So koristenje na destrukturiranje, komponentata go izvlekuva "studenti" od properti objekt

  //* "console.log(studenti);"
  // Ovaa linija ja koristi "console.log()" f-jata za da gi prikaze vrednostite na "stundeti" propertito vo konzola
  // Ova moze da bide korisno za debagiranje i proverka na vleznite podatoci

  //* "<> ... </>;"
  // div

  //* "<h1 class="student">Students</h1>"
  // h1

  //* "<table border={1}> ... </table>"
  // Ova e HTML tabela koja se koristi za postavuvanje na granica okolu tabelata

  //* "<thead> ... </thead>"
  // Ova e glavniot del na tabelata koj se koristi za definiranje na zaglavieto na tabelata

  //* "<tbody> ... </tbody>"
  // Ova e teloto na tabelata kade sto se prikazuvaat podatocite

  //* "{studenti.map((student, i) => { ... })}"
  // Ova e Javascript izraz za mapiranje na podatocite od "studenti" nizata i generiranje na tabela so podatoci so podatocite na sekoj student
  // "map" f-jata se koristi za da se izminat site elementi od nizata i da se generira soodveten HTML 
  // Za sekoj student se prikazuvaat informacii za name ("<td>{student.name}</td>"), lastName ("<td>{student.lastName}</td>") i index ("<td>{stundet.index}</td>")

  // "key={i}" se koristi za da se identifikuva sekoj red od ostanatite i da se izbegnat predupreduvanjata na React zaedno so optimizacija na renderiranjeto

  //* "{semestar ? ... : ...}"
  // Se koristi ternaren operstor za da se proveri vrednosta na "semestar" i da se prikaze tekst "Zimski" ako "semestar" e "true" ili tekst "Leten" ako "semestar" se "false"

  //* "Student.propTypes = { ... };"
  // Se definiraat PropTypes za komponentata "Student" za da se obezbedi validacija na propertite
  // Za "Studenti" se koristi "PropTypes.arrayOf()" za da se proveri dali e niza od objekti, a za "semestar" se koristi "PropTypes.bool" za da se proveri deka e buleva vrednost i istiot properti se zadolzitelen  (isRequired)