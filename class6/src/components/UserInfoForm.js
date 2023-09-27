//? Da napravime slicen primer na onoj sto go napravivme na predavanjata. 

//? Neka imame forma vo koja imame ime, prezime i telefonski broj 
//? i neka na submit na taa forma, se proveruvaat slednive validacii 

//? imeto mora da bide najmalku 3 karakteri no najmnogu 20
//? prezimeto mora da bide najmalku 5 karakteri no najmnogu 20
//? telefonskiot broj, zadolzitelno e da bide brojki i da ima tocno 9 brojki

//? dokolku nekoi od ovie validacii ne e zadovoleno da se prikaze soodveten error 
//? pod negovoto pole a dokolku site se zadovoleni 
//? da se napravi da ja snema formata i da se prikaze nekoj tekst vo h1 formata bese ispratena.

import { useState, useEffect } from "react";

export const UserInfoForm = () => {
    const initialValues = { name: "", surname: "", phonenumber: "" };
    const [formValues, setFormValues] = useState(initialValues);
    const [isSubmit, setIsSubmit] = useState(false);
    const [formErrors, setFormErrors] = useState({});

    let handleChange = (e) => {
        console.log(e);
        console.log(e.target);
        const { name, value } = e.target;
        console.log(name);
        console.log(value);
        setFormValues((formValues) => ({ ...formValues, [name]: value, }));
        console.log(formValues);
      };

    useEffect(() => {
        console.log(formValues);
    }, [formValues]); 


    let handleSubmit = (e) => {
        e.preventDefault(); // da ne se vrsi standardna akcija na prakanje na formata
        setFormErrors(validate(formValues)); // ja povikuva f-jata validate
        setIsSubmit(true); // se postavuva f-jata setIsSubmit na true, za da se pokaze soodvetnata poraka deka formata e uspesno ispratena
      };

    const validate = (values) => {
        console.log(values);
        const regex = /^\d{9}$/;
        const errors = {};
        if(!values.name) {
            errors.name = "Name is required";
        } else if (values.name.length < 3 || values.name.length > 20) {
            errors.name = "Name must be between 3 and 20 characters";
        }

        if (!values.surname) {
            errors.surname = "Surname is required";
        } else if (values.surname.length < 5 || values.surname.length > 20) {
            errors.surname = "Surname must be between 5 and 20 characters";
        }

        if (!values.phonenumber) {
            errors.phonenumber = "Phone number is required";
        } else if (!regex.test(values.phonenumber)) {
            errors.phonenumber = "Phone number must be 9 digits";
        }

        console.log(errors);
        return errors;
    };

    return (
        <div>
            <form>
                <h1>User Information</h1>
                {Object.keys(formErrors).length === 0 && isSubmit && (
          <div>Signed in successfully</div>
        )}
                <hr />
            <div>
                <div>
                    <label>Name</label>
                    <input
                    name="name" 
                    placeholder="name" 
                    value={formValues.name} 
                    onChange={handleChange} />
                    <p className="error-p">{formErrors?.name}</p>
                </div>
                <div>
                    <label>Surname</label>
                    <input 
                    name="surname"
                    placeholder="surname" 
                    value={formValues.surname} 
                    onChange={handleChange} />
                    <p className="error-p">{formErrors?.surname}</p>
                </div>
                <div>
                    <label>Phone number</label>
                    <input 
                    name="phonenumber"
                    placeholder="phonenumber" 
                    value={formValues.phonenumber} onChange={handleChange} />
                    <p className="error-p">{formErrors?.phonenumber}</p>
                </div>
            </div>
            <button onClick={handleSubmit}>Submit</button>
            </form>
        </div>
    );
};

//* Ovoj kod e napisan vo Javascript i ja koristi bibliotekta React za sozdavanje na forma za vnesuvanje informacii za korisnik

//* "useState" i "useEffect" se hooks od React koi ovozmozuvaat sledenje na sostojbata i efekti vrz komponentata

//* "initialValues" gi postavuva pocetnite vrednosti za name, surname i phone number kako prazni nizi

//* "useState" se koristi za da se definiraat sostojbite "formValues", "isSubmit" i "formErrors" kako promenlivi
// "formValues" gi cuva vrednostite vo formata, "isSubmit" se koristi za da se sledi dali formata bila podnesena, a "formErrors" gi cuva greskite koi moze da se pojavata pri validacija na formata

//* "handleChange" e f-ja koja se povikuva koga se menuva vrednosta vo nekoj od vleznite polinja(input)
// Ovaa f-ja gi azurira "formValues" so novite vrednosti od polinjata

//* "useEffect" e hooks koj se koristi za da se sledi sostojbata na "formValues"
// Koga "formValues" se azurira se pecatat novite vrednosti vo konzolata

//* "handleSubmit" e f-ja koja se povikuva koga ke se pritisne kopceto "Submit" na formata
// Ovaa f-ja gi vrsi slednite operacii
// Isprogramirano e da ne se izvrsuva standardna akcija na prakanje na formata (e.preventDefault())
// Se povikuva f-jata "validate" koja proveruva dali vnesenite vrednosti se validni i ja postavuva sostojbata "formErrors" so soodvetnite greski
// Se postavuva "isSubmit" na "true" za da se prikaze poraka deka formata e uspesno podnesena

//* "validate" e f-ja koja proveruva validnost na vnesenite vrednosti vo formata
// Proveruva dali imeto ima pomegu 3 i 20 karakteri, dali prezimeto ima pomegu 5 i 20 karakteri i dali brojot na telefonot e sostaven od tocno 9 cifri
// Greskite se cuvaat vo objektot "errors"

//* Vrakanjeto na JSX vo f-jata "UserInfoForm" generira HTML forma so tri vlezni polinja, name, surname i phone number, kako i soodvetni poraki za greski i kopce za podnesuvanja na formata
// Porakata "Signed in successfully" se prikazuva samo ako formata e uspesno podnesena i nema greski