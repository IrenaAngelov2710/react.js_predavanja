// Kreirajte komponenta home koja sto vnatre ke ima
// nekoj text Welcome to my page, potoa vo nekoj h2
// I am learning React Router.
//? Potoa da imame uste edna koomponenta Movies i vnatre
//? da prikazeme nekoja lista od filmovi,  tie neka imaat
//? ime i zanr
//? Da kreirame ruti za Home i Movies i navigacija do niv
//? za novies neka bide /movies a za home /

import { Link } from "react-router-dom";

export const Movies = () => {
    const movies = [
        { id: 1, title: "Gone girl", genre: "Thriller/Mystery/Drama" },
        { id: 2, title: "Taken", genre: "Action/Thriller/Crime" },
        { id: 3, title: "A Beautiful Mind", genre: "Romance/Drama/Historical drama" },
        { id: 4, title: "Unknown", genre: "Action/Thriller/Mystery" },
        { id: 5, title: "Titanic", genre: "Romance/Drama/Disaster" },
    ];
    return (
        <div>
            <ul>
                {movies.map((movie) =>
                    <li key={movie.id}>
                        <strong>Title: {movie.title}</strong> Genre: {movie.genre}
                    </li>)}
            </ul>
            <Link to="/movies/new">New Movie</Link>
        </div>
    )
};




