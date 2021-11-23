import { combineReducers, createStore } from "redux";
import dialoguesReducer from "./dialoguesReducer";
import profileReducer from "./profileReducer";
import usersReduser from "./usersReducer";


let reducers = combineReducers({
    profilePage: profileReducer,
    dialoguesPage: dialoguesReducer,
    usersPage: usersReduser         
});

let store = createStore(reducers);

window.store = store;

export default store;