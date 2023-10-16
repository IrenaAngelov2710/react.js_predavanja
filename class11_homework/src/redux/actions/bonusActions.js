export const addNumber = (value) => ({
    type: "ADD_NUMBER",
    payload: value,
  });
  
  export const addNumberAsync = (value) => {
    return (dispatch) => {
      setTimeout(() => {
        dispatch(addNumber(value));
      }, 3000);
    };
  };

  //* Vo ovoj del od kodot imame definirano dve Redux akcii "addNumber" i "addNumberAsync"
  //* "export const addNumber = (value) => ({ type: "ADD_NUMBER", payload: value });"
  // Ovaa akcija pretstavuva dodavanje na odreden broj. Koga ke se povika taa kreira i vraka objekt so dva dela:
  // "type: "ADD_NUMBER" - "type" delot go identifikuva tipot na akcijata kako "ADD NUMBER". Vo Redux sekoja akcija mora da go ima ovoj del i toa obicno e string koj opisuva sto pravi akcijata
  // "payload: value" - "payload" delot prenesuva podatoci povrzani so akcijata. Vo ovoj slucaj "value" pretstavuva brojot sto sakame da go dodademe na vrednosta. Toj broj se prenesuva kako parametar pri povik na akcijata
  //* "export const addNumberAsync = (value) => { ... };"
  // Ovaa akcija pretstavuva asinhrono dodavanje na broj na vrednosta. Za razlika od obicnata akcija ovaa akcija koristi f-ja vo f-ja. Koga ke se povika, taa ne vraka direktno objekt so "type" i "payload" tuku vraka f-ja. Ova se narekuva "akcija so f-ja" ili "asinhrina f-ja"
  // Vnatresno ovaa f-ja vraka druga f-ja koja prifaka parametar "dispatch". Taa e pogodna za koristenje na f-cii so zabavuvanje kako "setTimeout". Vo primerot se koristi "seTimeout" za da se odlozi povikot na "dispatch(addNumber(value))" za 3 sekundi (3000 milisekundi)
  // Po istekot na vremeto se povikuva "dispatch(addNumber(value))" sto na krajot go izvrsuva prviot vid na akcija "addNumber" so soodvetniot "value" kako parametar