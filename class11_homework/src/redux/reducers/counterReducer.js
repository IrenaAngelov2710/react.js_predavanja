const initialState = {
    count: 0,
    bonusValue: 0,
  };
  
  export const counterReducer = (state = initialState, action) => {
    switch (action.type) {
      case "INCREMENT":
        return {
          ...state,
          count: state.count + 1,
        };
      case "DECREMENT":
        return {
          ...state,
          count: state.count - 1,
        };
      case "ADD_NUMBER":
        return {
          ...state,
          bonusValue: state.bonusValue + action.payload,
        };
      default:
        return state;
    };
  };

  //* Vo ovoj del od kodot go definirame Redux reduktorot za upravuvanje so sostojbata na nasata aplikacija
  //* "const initialState = { count: 0, bonusValue: 0 };"
  // Ovaa promenliva "initialState" pretstavuva pocetna sostojba na aplikacijata
  // Nasiot brojac "count" e postaven na 0 i "bonusValue" e isto taka postaven na 0

  //* "export const counterReducer = (state = initialState, action) => { ... }"
  // Ovaa f-ja e reduktor koj prima dva paraametri: "state" i "action"
  // Reduktorot e odgovoren za upravuvanje so promenite na sostojbata 
  // Vnatresniot del na reduktorot e izgraden do pomos na "switch" narednata, koja go proveruva "type" delot na "action". Vo zavisnot od tipot na akcijata reduktorot primenuva odgovorna logika za izmena na sostojbata
  // "case "INCREMENT":" - Koga ke se dobie akcija so tip "INCREMENT" reduktorot go zgolemuva "count" brojacot za 1
  // "case "DECREMENT":" - Koga ke se dobie akcija so tip "DECCREMENT" reduktorot go namaluva "count" brojacot za 1
  // "case "ADD_NUMBER":" - Koga ke se dobie akcija so tip "ADD NUMBER" reduktorot ja dodava vrednosta na "action.payload" kon "bonusValue"
  // "default:" - Ovaa sekcija se izvrsuva koga tipot na akcijata ne odgovara na nieden od gorenavedenite slucai