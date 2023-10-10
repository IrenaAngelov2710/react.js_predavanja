//? NA CAS:
//? Da napraime get request do https://rickandmortyapi.com/api/character 
//? i neka slednive informacii se prikazat vo nekoja lista
//? id, name i status na karakterot

export const Characters = ({ listOfCharacters }) => {
    console.log(listOfCharacters);
    return (
      <div>
        {listOfCharacters.length > 0 ? (
          <div>
            {listOfCharacters.map((character) => {
              return (
                <div key={character.id}>
                  <hr />
                  <p>Id: {character.id}</p>
                  <h3>Name: {character.title}</h3>
                  <h3>Status: {character.status}</h3>
                </div>
              );
            })}
          </div>
        ) : (
          <h3>Characters are loading</h3>
        )}
      </div>
    );
  };




