//? Neka imate nekoj objekt movie koj vnatre kje ima lista od sliki (barem 3), od nekoj film sto 
//? kje go najdete na internet, i potoa neka ima za filmot rating, zanr, plot, releaseDate,
//? linkToTheTrailer.
//? Potoa Kreirajte nekoja komponenta Movie.js, vo koja samo kje prikazite 2 drugi komponenti 
//? koj kje gi kreirate so ime informationAboutMovie.js i vnatre kje gi prikazite
//? site informacii za filmot, osven slikite i linkot a potoa kje kreirate nekoja komponenta 
//? koja kje bide VisualInformationAboutMovie.js, vo koja kje gi pokazete site sliki
//? i linkot do trailerot, no ovoj objekt movie da bide kreiran vo app.js i praten preku kontekst 
//? a potoa vo Information i VisualInformation da se zemaat informaciite za filmot
//? i da se prikazat vo soodvetniot html.

//? BONUS: Da napravime i uste edna komponenta visitors, on the site, vo koja kje prikazeme 
//? nekoja lista od usernames koja kje bide pratena od app.js preku contekstot.

import { InformationAboutMovie } from "./InformationAboutMovie"; 
import { VisualInformationAboutMovie }from "./VisualInformationAboutMovie"; 

export const Movie = () => {
    return (
        <div>
            <InformationAboutMovie />
            <VisualInformationAboutMovie />
        </div>
    );
};