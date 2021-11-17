import { act } from "@testing-library/react";

import profileReducer from "./profileReducer";
import dialoguesReducer from "./dialoguesReducer";


export let store = {
    _state: {
        profilePage: {
            posts: [
                { id: 1, message: 'Hi, how you doing?', likeCounter: '3' },
                { id: 2, message: 'Whats up?', likeCounter: '3' },
                { id: 3, message: 'Its my first post', likeCounter: '6' },
                { id: 4, message: 'Hey', likeCounter: '9' }
            ],

            newPostText: 'its something new'
        },

        dialoguesPage: {
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
    },
    _callSubscriber() { console.log('state changed'); },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },


    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialoguesPage = dialoguesReducer(this._state.dialoguesPage, action);

        this._callSubscriber(this._state);
    }
}


// export default store;
window.store = store;