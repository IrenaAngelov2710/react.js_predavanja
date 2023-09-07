  //? Da kreirame i treta komponenta kade kje imame nekoj tekst
  //? koj kje bide eve slika od moeto omileno hoby
  //? da ima slika od hobito
  //? da stavime css vnatre da toj tekst e oboen vo nekoja razlicna boja
  //? i normalno slikata da ni bide vo razmer i toj css da bide
  //? importiran od nekoj nadvoresen css file
  //? koga kje pomineme so mouse-ot vrz slikata da ispecatime vo
  //? konzola nekoj tekst (hello there!!!)

  export function Hobby() {
    const hobbyText = "Eve slika od moeto omileno hobi";
    const hobbyImgSrc = "https://i.ytimg.com/vi/0QrbdHhP2Us/hqdefault.jpg";

    function handleImageMouseEnter() {
        console.log("Hello there!!!")
    }

    return (
        <div className="hobby">
            <p className="hobby-text">{ hobbyText }</p>
            <img
            src={ hobbyImgSrc }
            alt="Moeto omileno hobi"
            className="hobby-image"
            onMouseEnter={handleImageMouseEnter}
            />
        </div>
    )
  }