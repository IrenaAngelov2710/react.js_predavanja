import { Link } from "react-router-dom";

export const Navigation = () => {
  return (
    <ul>
      <li>
        <Link to="/comments">Comments</Link>
      </li>
      <li>
        <Link to="/posts">Posts</Link>
      </li>
    </ul>
  );
};

//* "import { Link } from "react-router-dom";"
// So ovaa linija na kod go importirame "Link" od paketot "react-router-dom" vo komponentata
// "Link" se koristi ua kreiranje linkovi koi go upravuvaat rutingot vo nasata React aplikacija

//* "export const Navigation = () => { ... }"
// Ovaa f-ja se eksportira kako "Navigation". Taa e komponenta za navigacija vo nasiot React proekt

//* "return (...);"
// Vnatre vo f-jata "Navigation" imame JSX kod:
// "<ul>" - Ova e HTML element (unordered list) vo koj se naogaat nasite navigacioni linkovi
// "<li>" - Ova se HTML elementi koi se koristat ze kreiranje na listata so navigacioni opcii
// "<Link to="/comments">Comments</Link>" - Ovoj del se odnesuva na prviot link
// Komponentata "Link" se koristi za kreiranje link kon rutata "/comments" i tekstot "Comments" se prikazuva kako link koj korisnikot moze da go klikne
//" <Link to="/posts">Posts</Link>" - Ovoj del se odnesuva na vtoriot link
// Komponentata "Link" se koristi za kreiranje na link kon rutata "/posts" i tekstot "Posts" se prikazuva kako link koj korisnikot mode da go klikne