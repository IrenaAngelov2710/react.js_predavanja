//* Ovoj kod pretstavuva React komponenta narecena "StudentClass" koja e klasna komponenta
// Ovaa komponentat se nasleduva od "React.Component" i ima metod "render()" koj se koristi za definiranje kako komponentata ke se prikaze na web stranata
// Vo ovaa komponenta, se prikazuvaat informaciite za studentot koi se prenesuvaat kako propertiti (props) na komponentata
// Konkretno se prikazuva imeto, prezimeto i indeksot na studentot

import React from "react";

export class StudentClass extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <h2>Student name: {this.props.student.name}</h2>
        <h2>Student lastName: {this.props.student.lastName}</h2>
        <h2>Student index: {this.props.student.index}</h2>
      </div>
    )
  };
}