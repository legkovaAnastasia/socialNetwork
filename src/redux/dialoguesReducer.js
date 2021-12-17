import { act } from "@testing-library/react";

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
    ]
}


const dialoguesReducer = (state = initialState, action) => {
    switch (action.type){
        case SEND_MESSAGE:
            let body = action.newMessageBody;
            return {...state, 
                messages: [...state.messages, { id: 6, message: body } ]} //альтернатива пушу        
        default:
            return state;          
    }
}

export const sendMessageBodyCreator = (newMessageBody) => ({ type: SEND_MESSAGE, newMessageBody }); // вариант синтаксиса без return

export default dialoguesReducer;