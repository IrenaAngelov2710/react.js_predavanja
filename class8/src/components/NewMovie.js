//? Prodolzenie na primerot sto bese na casot za filmovi
//? da dodademe nekoj novi komponenti kako NewMovie koja kje se renderira
//? na pat /movies/new i vnatre da imate nekoja forma so 3 inputi 
//? za imeto na filmot,zanrot i ratingot i tie da se cuvaat vo nekoj stejt
//? koga kje se submitira formata da gi ispecatime vrednostite vo konzola.
// Da imame i notfound komponenta kade sto kje imame 
// nekoj golem tekst 404 koj sto kje bide crveno 
// a pod nego da ima nekoj drug tekst the resource you are looking for
// is missing. 

// Da napravime i Movies komponenta koja kje prima lista od filmovi 
// i preku custom parametar vo rutite da prikazuvame poveke informacii
// za posebniot film. Da se prikaze listata od filmovi vo movies i 
// potoa so klik na sekoj od filmovite da se prikazat dopolnitelni 
// informacii. 

// imajte ja listata i vo movies i vo Movie komponenta
 
// BONUS: listat da bide samo vo app.js a preku props prakajte ja vo
// komponentite sto vi trebaat

import React, { useState } from "react";

export const NewMovie = () => {
    const initialValues = { title: "", genre: "", rating: "" };
    const [formData, setFormData] = useState(initialValues);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData)
    };
        return (
            <div>
                <h1>New Movie</h1>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Title:</label>
                        <input
                        type="text"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}/>
                    </div>
                    <div>
                        <label>Genre:</label>
                        <input
                        type="text"
                        name="genre"
                        value={formData.genre}
                        onChange={handleChange}/>
                    </div>
                    <div>
                        <label>Rating</label>
                        <input
                        type="text"
                        name="rating"
                        value={formData.rating}
                        onChange={handleChange}/>
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    };