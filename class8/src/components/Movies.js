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
                        {movie.title} ({movie.genre})
                    </li>)}
            </ul>
        </div>
    )
};