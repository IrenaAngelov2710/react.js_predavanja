//? Da go iskoristime slednovo API https://www.themealdb.com/api/json/v1/1/random.php
//? i da kreirame aplikacija koja kje ni prikazuva random hrana 

//? Vo nekoja komponenta pokazete gi slednive podatoci za hranata

//? strMeal, strCategory, strArea i strInstructions 

//? Iskoritete axios a ne fetch za povik do API-to

import axios from "axios";
import { useState, useEffect } from "react";

export const RandomMeal = () => {
    const [meal, setMeal] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        axios.get("https://www.themealdb.com/api/json/v1/1/random.php")
            .then((res) => {
                const randomMeal = res.data.meals[0];
                setMeal(randomMeal);
                setIsLoading(false);
            })
            .catch((error) => {
                console.error("Error", error);
                setIsLoading(false);
            });
    }, []);

    return (
        <div className="meal">
            {isLoading ? (
                <p>Loading...</p>
            ) : (
                <div>
                    <hr />
                    <h3>{meal.strMeal}</h3>
                    <h3>{meal.strCategory}</h3>
                    <h3>{meal.strArea}</h3>
                    <h3>{meal.strInstructions}</h3>
                </div>
            )}
        </div>

    );
};

//* Ovoj kod e napisan vo Javascript i ja koristi bibliotekata React za kreiranje komponenta za prikazuvanje na random jadenja

//* Prvicno se importiraat potrebnite biblioteki
// "axios" se koristi za izvrsuvanje HTTP baranje (GET baranje za random hrana)
// "useState" i "useEffect" se React hooks koi se koristat za upravuvanje so sostojbite i efektite vo komponentata

//* Se definira funkcionalna React komponenta "RandomMeal", koja nema vlezni elementi

//* Se definiraat dve sostojbi koristejki "useState"
// "meal" se koristi za cuvanje na podatoci za random jadenje
// "isLoading" se koristi za prikazuvanje na informacija dali podatocite se vcituvaat ili ne

//* Se koristi hook "useEffect" za da se izvrsi kodot vnatre vo nego pri pocetok na komponentata
// Kodot go vklucuva izvrsuvanjeto na HTTP GET baranje so Axios kon "https://www.themealdb.com/api/json/v1/1/random.php"

//* Koga baranjeto ke zavrsi uspesno se izvrsuva f-jata predadena kako argument vo ".then()"
// Vo ovoj slucaj se dobiva JSON odgovor od serverot i od toj odgovor se zema prvoto jadenje i se postavuva vo sostojba "meal"
// Isto taka se postavuva sostojbata "isLoading" na "false" za da se skrie porakata za vcituvanje

//* Ako baranjeto zavrsi so greska se izvrsuva f-jata predadena kako argument vo ".catch()"
// Vo ovoj slucaj se prikazuva greska vo konzolata i se postavuva sostojbata "isLoading" na "false"

//* Vo delot za vizuelno prikazuvanje na komponentata se proveruva sostojbata "isLoading"
// Ako e "true" se prikazuva porakata "Loading...". Ako e "false" se prikazuvaat podatocite za random jadenje
// Vo slucaj na uspesno baranje se prikazuva strMeal, strCatergory, strArea i strInstructions
// Vo slucaj na greska pri baranjeto, se prikazuva poraka za greska