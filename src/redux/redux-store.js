import { applyMiddleware, combineReducers, createStore } from "redux";
import authReducer from "./authReducer";
import dialoguesReducer from "./dialoguesReducer";
import profileReducer from "./profileReducer";
import usersReducer from "./usersReducer";
import thunkMiddleware from 'redux-thunk';


let reducers = combineReducers({
    profilePage: profileReducer,
    dialoguesPage: dialoguesReducer,
    usersPage: usersReducer ,
    auth: authReducer        
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;