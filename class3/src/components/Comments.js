//? Da napravime komponenta vo koja ke prikazuvame komentari
//? neka sekoj komentar ima id, author, text.
//? neka listata so komentari ja imate vo app.js i pratite preku props vo kreiranata komponenta
//? tamu da gi prikazeme informaciite
//? neka bidat vo tabela
//? pokraj ova imate nekoe kopce LIKE sto vo konzola ke pecati +1

export function Comments(props) {

    console.log(props);
    function onLikeClick() {
        console.log("+1");
      }

    return (
      <>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>AUTHOR</th>
              <th>TEXT</th>
              <th>LIKES</th>
            </tr>
          </thead>
          <tbody>
            {props.comments.map((comment) => (
              <tr>
                <td>{comment.id}</td>
                <td>{comment.author}</td>
                <td>{comment.text}</td>
                <td>
                  <button onClick={onLikeClick}>LIKE</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        </>
    );
  }

  //* Ovoj kod pretstavuva funkcionalna komponenta
  // Ovaa React komponenta narecena "Comments" prikazuva lista od komentari na web stranata

  //* "console.log(props);"
  // Ovaa linija gi prikazuva propertitite (props) koi se preneseni kon komponentata vo konzolaza za debagiranje

  //* "onLikeClick()"
  // Vo f-jata "onLikeClick()" prosto se prikazuva porakata "+1" vo konzolaza koga ke se klikne na kopceto "LIKE"
  
  // Vo JSX delot na komponentata, se koristi mapiranje (map) na nizata "props.comments" za da se generiraat delovi od HTML kod za sekoj komentar
  // Za sekoj komentar se generira HTML kod koj prikazuva informacii kako ID, avtorot, tekstot i kopceto "LIKE"

  // Kopceto "LIKE" ima nastan (event) "onClick" koj ja povikuva f-jata "onLikeClick()" koga ke se klikne na kopceto
// Vo ovaa implementacija f-jata ne izvrsuva aktuelno dodavanje na lajkovi na komentarite, tuku samo prikazuva debag informacii 
