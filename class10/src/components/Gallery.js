import { Popup } from "./Popup";

export const Gallery = ({
  listOfPhotos,
  selectedPhoto,
  setSelectedPhoto,
  closePhoto,
}) => {
  //   console.log(closePhoto);
  console.log(selectedPhoto);
  return (
    <div id="gallery">
      <h2>Our Gallery!</h2>
      <div id="gallery">
        {
          // .slice ja kratime nizata, gi zemame prvite 20 elementi
          listOfPhotos.slice(0, 20).map((photo) => {
            return (
              <div
                className="image-holder"
                onClick={() => setSelectedPhoto(photo)}
                key={photo.id}
              >
                <img src={photo.thumbnailUrl} alt={photo.title} />
              </div>
            );
          })
        }
      </div>
      {selectedPhoto !== "" && (
        <Popup imageUrl={selectedPhoto.url} closePhoto={closePhoto} />
      )}
    </div>
  );
};

//* Ovoj kod pretstavuva React funkcionalna komponenta narecena "Gallery" koja prikazuva galerija so sliki

//* "import { Popup } from "./Popup";"
// So ovaa linija se vnesuva komponentata "Popup" od fajlot "Popup.js"
// Ova znaci deka "Popup" komponentata ke bide dostapna za koristenje vo ovoj fajl

//* "export const Gallery = ({ listOfPhotos, selectedPhoto, setSelectedPhoto, closePhoto }) => {"
// Ovaa linija kreira React komponenta narecena "Gallery" koja prima cetiri argumenti kako props: "listOfPhotos" (niza so sliki), "selectedPhoto" (izbrana slika), "setSelectedPhoto" (f-ja za postavuvanje na izbranata slika) i "closePhoto" (f-ja za zatvaranje na slikata)

//* "console.log(selectedPhoto);"
// Ovaa linija ja koristi "console.log" f-jata za da ja ispecati vrednosta na "selectedPhoto" vo konzola
// Ova e korisno za debagiranje

//* "<div id="gallery">"
// Ovoj element go postavuva kontejnerot na celata galerija

//* "<h2>Our Gallery!</h2>"
// Ovoj element go prikazuva naslovot "Our Gallery!" vo galerijata

//* "{listOfPhotos.slice(0, 20).map((photo) => { ... })}"
// Ova e del od JSX kodot kade se mapiraat i prikazuvaat slikite od "listOfPhotos"
// F-jata "slice(0, 20)" go ogranicuva brojot na sliki koi ke bidat prikazani do prvite 20 elementi od nizata
// Za sekoja slika se kreira "div" so klasa "image-holder" i se postavuva "onClick" nastan koj se povikuva koga korisnikot ke klikne na slikata
// Odbranata slika se postavuva kako izbrana so pomos na f-jata "setSelectedPhoto(photo)"

//* "<Popup imageUrl={selectedPhoto.url} closePhoto={closePhoto} />"
// Ako ima izbrana slika ("selectedPhoto" ne e prazen string) se prikazuva "Popup" komponentata
// "Popup" komponentata se povikuva so "imageUrl" props koja ja dobiva od izbranata slika i "closePhoto" f-jata koja se koristi za zatvaranje na slikata vo "Popup"