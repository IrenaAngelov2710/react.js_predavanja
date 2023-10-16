// npm i react-redux
// npm i redux
// import { createStore, applyMiddleware } from "redux";
import { balanceReducer } from "./reducer/balanceReducer"; // Ovoj reduktor e odgovoren za upravuvanje so sostojbite na brojacot vo nasata aplikacija
// import thunk from "redux-thunk";
import { configureStore } from "@reduxjs/toolkit"; // F-ja za kreiranje na Redux Store

// const store = createStore(balanceReducer, applyMiddleware(thunk));

const store = configureStore({ reducer: balanceReducer }); // Kreiranje na Redux Store so pomos na f-jata "configureStore"

export default store;