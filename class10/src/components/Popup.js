export const Popup = ({ imageUrl, closePhoto }) => {
  //   console.log(closePhoto);
  return (
    <div id="popup">
      <button
        onClick={() => {
          closePhoto();
        }}
      >
        {
          // ova bi ni pokazalo x vnatre vo buttonot
          // ova se nekoj html codes
        }
        &times;
      </button>
      <div className="popup-container">
        <img src={imageUrl} alt="Big picture" />
      </div>
    </div>
  );
};

//* Ova e React funkcionalna komponenta narecena "Popup" i se koristi za prikazuvanje na slika vo poseben prozorec

//* "export const Popup = ({ imageUrl, closePhoto }) => {"
// So ovaa linija kreirame React funkcionalna komponenta "Popup" koja prima dva props kako argumenti: "imageUrl" (URL na slikata za prikazuvanje) i "closePhoto" (f-ja za zatvaranje na prozorecot)

//* "return ( ... )"
// Ovaa f-ja vraka JSX kod koj se prikazuva vo komponentata

//* "<div id="popup">"
// Ovaa linija kreira kontejner za prozorecot

//* "<button onClick={() => { closePhoto(); }}>"
// Ovoj del na kodot kreira kopce koe se koristi za zatvaranje na Popup prozorezot
// Koga korisnikot ke klikne na ova kopce se povikuva f-jata "closePhoto()" za da se zatvori Popup prozerecot

//* "&times
// Ova e HTML entity koj se koristi za prikazuvanje na krst (x) vo kopceto za zatvaranje na Popup prozorecot

//* "<div className="popup-container">" 
// Ovoj div se koristi kako kontejner za prikazuvanje na slikata vo Popup prozorecot

//* "<img src={imageUrl} alt="Big picture" />"
// Ovaa linija prikazuva slika vo Popup prozorecot
// "src" atributot se postavuva na vrednosta na "imageUrl" koj e URL na slikata
// "alt" atributot se koristi kako tekst koj se prikazuva koga slikata ne moze da se vcita