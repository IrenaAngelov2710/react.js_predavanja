export const Albums = ({ listOfAlbums, deleteAlbum }) => {
  console.log(listOfAlbums);
  return (
    <div id="albums">
      {listOfAlbums.length > 0 ? (
        <div>
          {listOfAlbums.map((album) => {
            return (
              <div key={album.id}>
                <hr />
                <p>Id: {album.id}</p>
                <h3>Title: {album.title}</h3>
                <button onClick={() => deleteAlbum(album)}>Delete</button>
              </div>
            );
          })}
        </div>
      ) : (
        <h3>Albums are loading</h3>
      )}
    </div>
  );
};

//* Ovoj kod pretstavuva React funkcionalna komponenta za prikaz na albumi

//* "export const Albums = ({ listOfAlbums, deleteAlbum }) => {"
// So ovaa linija se kreira React funkcionalna komponenta "Albums" koja prima dva argumenta kako props: "listOfAlbums" i "deleteAlbum"
// "listOfAlbums" e niza od albumi koi treba da se prikazat, a "deleteAlbum" e f-ja koja se povikuva koga korisnikot ke pritisne na kopceto "Delete" za brisenje na albumot

//* "console.log(listOfAlbums);"
// Ovaa linija go ispecatuva "listOfAlbums" vo konzola za da se proveri sodrzinata na nizata

//* "return ( ... )" 
// Ovaa f-ja vraka JSX element koj ke se prikaze na web stranicata

//* "{listOfAlbums.length > 0 ? ( ... ) : ( ... )}"
// Ova e ternaren operator koj proveruva dali "listOfAlbums" ima albumi (ima dolzina pogolema od 0) i se vraka soodveten JSX 
// Ako ima albumi se prikazuvaat albumite, a vo sprotivno se prikazuva poraka "Albums are loading"

//* "{listOfAlbums.map((album) => { ... })}"
// Ova e metod za mapiranje na sekoj album od "listOfAlbums" i go vraka soodvetniot JSX kod za sekoj album
// Za sekoj album se prikazuva id, title i kopceto Delete

//* "<div key={album.id}>"
// Sekoj album e zavitkan vo <div>  element i ima "key={album.id}" svojstvo
// Ova e vazno za efikasnost na React koga se mapiraat listi za da se identifikuvaat razlicnite elementi

//* "onClick={() => deleteAlbum(album)}"
// Ova e event handler za kopceto "Delete" koj go povikuva "deleteAlbum" metodot so soodvetniot album kako argument koga korisnikot pritiska na kopceto  