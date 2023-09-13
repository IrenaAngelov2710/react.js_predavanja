  //? Da go konvertirate istiot primer od casot (primerot za komentarite)
  //? i da go napravite vo klasna komponenta

import React from "react";

export class CommentsClass extends React.Component{
  render() {
    console.log(this.props);
    function onLikeClick(){
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
          {this.props.comments.map((comment) => (
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
    )
  };
}

  //* Ovoj kod pretstavuva klasna komponenta
  // Ovaa React komponenta narecena "CommentsClass" prikazuva lista od komentari na web stranata

  // Vo "render()" metodot na klasnata komponenta se definira f-jata "onLikeClick()"
  // Ovaa f-ja se povikuva sekogas koga ke se klikne ne kopceto "LIKE" i prikazuva "+1" vo konzolata
  // Vo ovaa implementacija, f-jata "onLikeClick()" ne ja modificira sostojbata na komentarite, tuku samo dava debag informacii

  // Vo JSX delot na komponentata, se koristi tabela za prikazuvanje na komentarite
  // Propertite "this.props.comments" e niza od objekti kade sekoj objekt pretstavuva eden komentar

  // Preku metodot "map()" se mapira nizata na komentari i za sekoj komentar se generira red vo tabelata
  // Sekoj red sodrzi informacii za ID, avtorot, tekstot i kopceto "LIKE"

  // Kopceto "LIKE" ima nastan(event) "onClick" koja povikuva f-jata "onLikeClick()" koga ke se klikne
  // Vo ovaa implementacija f-jata ne izvrsuva aktuelno dodavanje na lajkovi na komentarite, tuku samo prikazuva debag informacii 