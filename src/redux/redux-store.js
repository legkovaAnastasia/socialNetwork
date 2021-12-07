import { combineReducers, createStore } from "redux";
import authReducer from "./authReducer";
import dialoguesReducer from "./dialoguesReducer";
import profileReducer from "./profileReducer";
import usersReducer from "./usersReducer";


let reducers = combineReducers({
    profilePage: profileReducer,
    dialoguesPage: dialoguesReducer,
    usersPage: usersReducer ,
    auth: authReducer        
});

let store = createStore(reducers);

window.store = store;

export default store;