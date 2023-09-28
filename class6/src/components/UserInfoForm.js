//? Da napravime slicen primer na onoj sto go napravivme na predavanjata. 

//? Neka imame forma vo koja imame ime, prezime i telefonski broj 
//? i neka na submit na taa forma, se proveruvaat slednive validacii 

//? imeto mora da bide najmalku 3 karakteri no najmnogu 20
//? prezimeto mora da bide najmalku 5 karakteri no najmnogu 20
//? telefonskiot broj, zadolzitelno e da bide brojki i da ima tocno 9 brojki

//? dokolku nekoi od ovie validacii ne e zadovoleno da se prikaze soodveten error 
//? pod negovoto pole a dokolku site se zadovoleni 
//? da se napravi da ja snema formata i da se prikaze nekoj tekst vo h1 formata bese ispratena.

import React, { useState } from "react";

export const UserInfoForm = () => {
    const initialValues = { name: "", surname: "", phonenumber: "" };
    const [formValues, setFormValues] = useState(initialValues);
    const [isSubmit, setIsSubmit] = useState(false);
    const [formErrors, setFormErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value});
    };

    const handleSubmit = (e) => {
        e.preventDefault(); 
        const errors = validate(formValues);
        setFormErrors(errors);
        if (Object.keys(errors).length === 0) {
        setIsSubmit(true);
    }
    };

    const showForm = () => {
        setIsSubmit(false);
        setFormValues("");
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
          {!isSubmit ? (
            <form>
              <input
                name="name"
                type="text"
                placeholder="Name"
                value={formValues.name}
                onChange={handleChange}
              />
              <br />
              <p>{formErrors?.name}</p>
              <input
                name="surname"
                type="text"
                placeholder="Surname"
                value={formValues.surname}
                onChange={handleChange}
              />
              <br />
              <p>{formErrors?.surname}</p>
              <input
                name="phonenumber"
                type="text"
                placeholder="Phonenumber"
                value={formValues.phonenumber}
                onChange={handleChange}
              />
              <br />
              <p>{formErrors?.phone}</p>
              <button type="submit" onClick={handleSubmit}>
                Submit
              </button>
            </form>
          ) : (
            <div>
              <h1>Form submitted successfully!</h1>
              <button type="button"
              onClick={showForm}>Show Form</button>
            </div>
          )}
        </div>
      );
    };

//* Ovoj kod e napisan vo Javascript i ja koristi bibliotekata React za sozdavanje na forma za vnesuvanje informacii za korisnik(Name, Surname, Phonenumber)

//* "import React, { useState } from "react";"
//* "useState" e hooks od React koj ovozmozuva sledenje na sostojbata na komponentata

//* "export const UserInfoForm = () => {...}"
// Definirame funkcionalna komponenta koja vednas ja eksportirame za da mozeme da ja koristime vo drug del od aplikacijata

//* "const initialValues = { name: "", surname: "", phonenumber: "" }"
// Definirame objekt "InitialValues" koj gi sodrzi pocetnice vrednosti na polinjata za vnesuvanje

//* "useState" se koristi za da se definiraat sostojbite "formValues", "isSubmit" i "formErrors" kako promenlivi
// "formValues" gi cuva vrednostite vo formata, "isSubmit" se koristi za da se sledi dali formata bila podnesena, a "formErrors" gi cuva greskite koi moze da se pojavat pri validacija na formata

//* "const handleChange = (e) => {...}"
// "handleChange" e f-ja koja se povikuva koga se menuva vrednosta vo nekoj od vleznite polinja(input)
// Ovaa f-ja gi azurira "formValues" so novite vrednosti od polinjata
// "const { name, value } = e.target;" - Ovaa linija kod koristi destrukcija na objektot "e.target" za da se dobijat vrednostite na atributite "name" i "value"
// Se koristi f-jata "setFormValue" koja ja obnovuva sostojbata so novi vrednosti
// Preku "{ ...formValues, [name]: value }" se kreira nov objekt kade se zadrzani starite vrednosti od "formValues", no se azurira vrednosta na poleto so ime "name" so novata vrednost "value"

//* "handleSubmit" e f-ja koja se povikuva koga ke se pritisne kopceto "Submit" na formata
// Ovaa f-ja gi vrsi slednite operacii
// "e.preventDefault();" - Ovaa linija kod se koristi za da se spreci standardnoto prakanje na formata
// "const errors = validate(formValues);" - Vo ovaa linija se povikuva f-jata "validate" so parametar "formValues", koja gi proveruva i validira vnesenite podatoci od korisnikot
// Rezultatot od ovaa proverka se zacuvuva vo promenlivata "errors"
// "setFormErrors(errors);" - Ovaa linija kod gi postavuva greskite vo formularot
// Toa obicno se koristi za da se prikazat poraki za greski na korisnikot, ako ima takvi
// "if (Object.keys(errors).length === 0) { setIsSubmit(true); }" - So ovoj del proveruvame dali nizata na klucevi na objektot "erros" e prazna
// Ako e prazna toa znaci deka nema greski i formularot e validen
// Vo toj slucaj se postavuva state promenlivata "isSubmit" na "true" sto moze da se koristi za da se ivrsi odredena akcija ili za da se ovozmozi submitiranje na formata

//* "showForm" se koristi za prikazuvanje na formata otkako e uspesno pratena
// "setIsSubmit(false);" - Ovaa linija ja postavuva vrednosta na sostojbata "isSubmit" na "false"
// Promenlivata "isSubmit" se koristi za sledenje dali formata bila podnesena 
// So postavuvanje na "false" ovaa linija oznacuva deka formata ne e podnesena i se vrakame vo sostojbata kade korisnikot moze povtorno da ja podnese
// "setFormValues("");" - Ovaa linija gi postavuva vrednostite na sostojbata "formValues" vo prazen string
// So postavuvanje vo prazen string se brisat ili resetiraat vnesenite vrednosti, sto ovozmozuva korisnikot da pocne od pocetok so popolnuvanje na formata

//* "validate" e f-ja koja proveruva validnost na vnesenite vrednosti vo formata
// Proveruva dali imeto ima pomegu 3 i 20 karakteri, dali prezimeto ima pomegu 5 i 20 karakteri i dali brojot na telefonot e sostaven od tocno 9 cifri
// Greskite se cuvaat vo objektot "errors"

//* "return (...)" - Ovoj kod definira JXS komponenta koja obicno se koristi za prikazuvanje na formular i poraki po uspesno ili neuspesno podnesuvanje na formularot 
// "{!isSubmit ? (...) : (...)}" - Ovaa linija koristi ternaler operator za usloven rendering
// Ako vrednosta na promenlivata "isSubmit" e "false" ke se prikaze prvata posledovatelnost na komponentata, a ako e "true" ke se prikaze vtorata posledovatelnost
// Vo prviot del se naoga "<form>" kade sto korisnicite mozat da gi vnesuvaat svoite informacii
// "<input>" - Ovoj element se koristi za vnesuvanje informacii vo formata
// Sekoj "input" element ima atribut kako "name", "type", "placeholder" i "value"
// "<p>" - Ovoj element se koristi za prikazuvanje na poraki za greski ili informacii pod polinjata za vnesuvanje
// "<button>" - Ovoj element se koristi za prikazuvanje na kopceto za podnesuvanje na formata. Koga korisnikot ke go klikne ova kopce se povikuva f-jata "handleSubmit"
// Vo vtoriot del se naoga "<h1>" koj se koristi za prikazuvanje na naslov
// "<button type="button" onClick={showForm}>Show Form</button>" - Ovaa linija sodrzi kopce za prikazuvanje na formata po uspesno podnesuvanje. Koga korisnikot ke go klikne ova kopce ke povikuva f-jata "showForm"