import { authAPI } from '../api/api';
import { stopSubmit } from 'redux-form';
import { getAuthUserData } from './authReducer';

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';

let initialState = {
    initialized: false
}

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true
            }
        default: return state;
    }
}

export const initializedSuccess = () => ({ type: INITIALIZED_SUCCESS }); // вариант синтаксиса без return

export const initializeApp = () => (dispatch) => {
    let promise = dispatch(getAuthUserData()); //если промисов несколько, то объединяем их в массив, и потом только then: Promise.all([promise, ...]).then 
    Promise.all([promise])
    .then(() => {                       
        dispatch(initializedSuccess());
    })
    
    
}

export default appReducer;
