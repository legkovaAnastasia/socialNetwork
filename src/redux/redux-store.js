import { combineReducers, createStore } from "redux";
import dialoguesReducer from "./dialoguesReducer";
import profileReducer from "./profileReducer";


let reducers = combineReducers({
    profilePage: profileReducer,
    dialoguesPage: dialoguesReducer
});

let store = createStore(reducers);


export default store;