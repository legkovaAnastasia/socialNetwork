import { applyMiddleware, combineReducers, createStore } from "redux";
import authReducer from "./authReducer";
import dialoguesReducer from "./dialoguesReducer";
import profileReducer from "./profileReducer";
import usersReducer from "./usersReducer";
import thunkMiddleware from 'redux-thunk';
import {reducer as formReducer} from 'redux-form';
import appReducer from "./appReducer";


let reducers = combineReducers({
    profilePage: profileReducer,
    dialoguesPage: dialoguesReducer,
    usersPage: usersReducer ,
    auth: authReducer,
    form: formReducer,
    app: appReducer     
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;