export const increment = () => ({
    type: "INCREMENT",
});

export const decrement = () => ({
    type: "DECREMENT",
});

//* Vo ovoj del od kodot imame definirano dve Redux akcii "increment" i "decrement"
//* "export const increment = () => ({ type: "INCREMENT" });"
// Ovaa akcija pretstavuva zgolemuvanje na brojacot. Koga ke se povika taa kreira i vraka objekt so dva dela:
// "type: "INCREMENT";"- "type" delot go identifikuva tipot na akcija kako "INCREMENT". Vo React Redux sekoja akcija mora da go ima ovoj del i toa obicno e string koj opisuva sto pravi akcijata
//* "export const decrement = () => ({ type: "DECREMENT" });"
// Ovaa akcija pretstavuva namaluvanje na brojacot. Slicno na prethodnata akcija koga ke se povika kreira i vraka objekt so dva dela:
// "type: "DECREMENT;" - "type" delot go identifikuva tipot na akcija kako "DECREMENT"

// Koga ovie akcii se povikuvaat so f-jata "dispatch" vo Redux tie se isprakaat do Redux reducers (vo ovoj slucaj counterReducer) koj gi obrabotuba i ja menuva sostojbata na aplikacijata vo soglasnost so niv
// Na primer koga se povikuva akcijata "increment", "count" brojacot se zgolemuva za 1 vo sostojbata na aplikacijata, a koga se povikuva akcijata "decrement", "count" brojacot se namaluvaza 1 vo sostojbata na aplikacijata