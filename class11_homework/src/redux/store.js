// npm i react-redux
// npm i redux
// import { createStore, applyMiddleware } from "redux";
import { counterReducer } from "./reducers/counterReducer"; // Ovoj reduktor e odgovoren za upravuvanje so sostojbite na brojatoc vo nasata aplikacija
// import thunk from "redux-thunk";
import { configureStore } from "@reduxjs/toolkit"; // F-ja za kreiranje na Redux Store

// const store = createStore(counterReducer, applyMiddleware(thunk));

const store = configureStore({ reducer: counterReducer }); // Kreiranje na Redux Store so pomos na f-jata "configureStore"

export default store;