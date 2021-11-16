import { combineReducers, createStore } from "redux";
import dialoguesReducer from "./dialoguesReducer";
import profileReducer from "./profileReducer";


let redusers = combineReducers({
    profilePage: profileReducer,
    dialoguesPage: dialoguesReducer
});

let store = createStore();


export default store;