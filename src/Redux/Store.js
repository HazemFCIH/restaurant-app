import { legacy_createStore } from "redux";
import UserReducer from "./Reducers/UserReducer";

//  ****** Linking Redux dev tools with th project ****** //

const enhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;

//  ****** Creating Store ****** //

const store = legacy_createStore(UserReducer , enhancer());



export default store ;