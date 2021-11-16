import { act } from "@testing-library/react";

const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
    dialogues: [
        { id: 1, name: 'Anna' },
        { id: 2, name: 'Ksenya' },
        { id: 3, name: 'Alex' },
        { id: 4, name: 'Volodya' },
        { id: 5, name: 'Rex' }
    ],
    messages: [
        { id: 1, message: 'Hello' },
        { id: 2, message: 'Yo' },
        { id: 3, message: 'Kek' },
        { id: 4, message: 'How you doing?' },
        { id: 5, message: 'Lol' }
    ],
    newMessageBody: ""
}


const dialoguesReducer = (state = initialState, action) => {
    switch (action.type){
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body;
            return state;
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            state.newMessageBody = '';
            state.messages.push({ id: 6, message: body });
            return state;
        default:
            return state          
    }
}

export const sendMessageBodyCreator = () => ({ type: SEND_MESSAGE }); // вариант синтаксиса без return

export const updateNewMessageBodyCreator = (body) => {
    return {
        type: UPDATE_NEW_MESSAGE_BODY, body: body
    }
}

export default dialoguesReducer;