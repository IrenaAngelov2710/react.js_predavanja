//?Za domasna:
//?Da napravime komponenta koja kje bide slicna na Movie.js komponentata.
//?Da imame 4 sliki od avtomobili i pod sekoja slika da imame kopce like sto bi znacelo plus 1 glas za toj avtomobil. Preku useEffect napravete da koga nekoj avtomobil kje stigne do 4 glasa se ispecati vo konzola deka e avtomobil na godinata.
//?BONUS: Dokolku imate vreme
//?Pod sekoj avtomobil da ima tri kopcinja ednoto like, drugoto dislike (-1 glass) i superLike (+2 glasa) i preku useEffect da se naprai da vo konzola se pecatat glasovite od site avtomobili no samo koga se glasa za 1 i 3 tiot avtomobil

import { useState, useEffect } from "react";

export const Car = () => {
    const [car1Likes, setCar1Likes] = useState(0);
    const [car2Likes, setCar2Likes] = useState(0);
    const [car3Likes, setCar3Likes] = useState(0);
    const [car4Likes, setCar4Likes] = useState(0);

    useEffect(() => {
        if (car1Likes === 4) {
            console.log("VW Tiguan is the car of the year!");
        } else {
            console.log(`Car 1: ${car1Likes}`);
        }

        if (car2Likes === 4) {
            console.log("VW Golf 8 is the car of the year!");
        } else {
            console.log(`Car 2: ${car2Likes}`);
        }

        if (car3Likes === 4) {
            console.log("Toyota RAV4 is the car of the year!");
        } else {
            console.log(`Car 3: ${car3Likes}`);
        }

        if (car4Likes === 4) {
            console.log("Mercedes S Class is the car of the year!")
        } else {
            console.log(`Car 4: ${car4Likes}`)
        }
    }, [car1Likes, car3Likes]);

    return (
        <div className="cars">
            <h1>Vote for car of the year</h1>
            <div className="car1">
                <h1>VW Tiguan</h1>
                <img class="car-img" src="https://cdn.whichcar.com.au/assets/w_1024/170090d5/2023-volkswagen-tiguan-r-grid-03.jpg"
                style={{ width: 500, height: 300 }}
                alt="car1"/>
                <br />
                <button 
                onClick={() => {
                    setCar1Likes(car1Likes + 1);
                }}>Like</button>
                <button
                onClick={() => {
                    setCar1Likes(car1Likes - 1);
                }}>Dislike</button>
                <button
                onClick={() => {
                    setCar1Likes(car1Likes + 2);
                }}>Super Like</button>
                <h2>Total: {car1Likes}</h2>
            </div>

            <div className="car2">
                <h1>VW Golf 8</h1>
                <img class="car-img" src="https://media.asiaone.com/sites/default/files/styles/article_main_image/public/original_images/May2023/0522_carbuyer_main.jpeg?itok=fRgcYqdl"
                style={{ width: 500, height: 300 }}
                alt="car2" />
                <br />
                <button
                onClick={() => {
                    setCar2Likes(car2Likes + 1);
                }}>Like</button>
                <button
                onClick={() => {
                    setCar2Likes(car2Likes - 1);
                }}>Dislike</button>
                <button
                onClick={() => {
                    setCar2Likes(car2Likes + 2);
                }}>Super Like</button>
                <h2>Total: {car2Likes}</h2>
            </div>

            <div className="car3">
                <h1>Toyota RAV4</h1>
                <img class="car-img" src="https://cdn.motor1.com/images/mgl/RqnKe3/s1/toyota-rav4-gr-sport.jpg"
                style={{ width: 500, height: 300 }}
                alt="car3" />
                <br />
                <button
                onClick={() => {
                    setCar3Likes(car3Likes + 1);
                }}>Like</button>
                <button
                onClick={() => {
                    setCar3Likes(car3Likes - 1); 
                }}>Dislike</button>
                <button
                onClick={() => {
                    setCar3Likes(car3Likes + 2);
                }}>Super Like</button>
                <h2>Total: {car3Likes}</h2>
            </div>

            <div className="car4">
                <h1>Mercedes S Class</h1>
                <img class="car-img" src="https://i.ytimg.com/vi/MMO0Yiaa5EA/mqdefault.jpg"
                style={{ width: 500, height: 300 }}
                alt="car4" />
                <br />
                <button
                onClick={() => {
                    setCar4Likes(car4Likes + 1);
                }}>Like</button>
                <button
                onClick={() => {
                    setCar4Likes(car4Likes - 1); 
                }}>Dislike</button>
                <button
                onClick={() => {
                    setCar4Likes(car4Likes + 2);
                }}>Super Like</button>
                <h2>Total: {car4Likes}</h2>
            </div>
        </div>
    );
};

//* Ovoj kod e napisan vo React i sozdava komponenta narecena "Car" koja ovozmozuva glasanje za ceriti razlicni avtomobili i go prikazuva vkupniot broj na glasovi za sekoj avtomobil

//* "import { useState, useEffect } from "react";"
// Ovaa linija gi vnesuva hooks "useState" i "useEffect" od React, sto ovozmozuva koristenje na sostojbi i efekti vo komponentata

//* "const [car1Likes, setCar1Likes] = useState(0);..."
// Definiranje na sostojbi i f-cii za upravuvanje so niv
// Za sekoj od cetirite avtomobili se koristi "useState" za da se cuva brojot na glasovi za toj avtomobil
// Kade "car1Likes" gi cuva glasovite za VW Tiguan, a "setCar1Likes" e f-ja za da gi azurira ovie glasovi

//* "useEffect(() => { ... }, [car1Likes, car3Likes]);"
// Ovoj "useEffect" se izvrsuva sekogas koga se menuva sostojbata "car1Likes" ili "car3Likes"
// Vo ovoj slucaj so "useEffect" se proveruvaat glasovite za VW Tiguan i Toyota RAV4
// Ako brojot na glasovi za odreden avtomobil stigne do 4, se ispisuva soodvetna poraka deka toj avtomobil e "avtomobil na godinata"
// Vo sprotivno se pecati brojot na glasovi za sekoj od avtomobilite

//* "return (...);"
// Vo "return" delot na komponentata se vraka JSX kod koj go definira izgledot na aplikacijata
// Sekoj od cetirite avtomobili e prikazan vo poseben del so negova slika, kopce za glasanje (Like, Dislike, Super Like) i prikaz na vkupniot broj na glasovi za toj avtomobil

// Osnovnata ideja na ovoj kod e da se ovozmozi glasanje za razlicni avtomobili i da se prikaze dali nekoj od niv stanuva "avtomobil na godinata" koga ke dobie 4 glasa

