import { act } from "@testing-library/react";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE'

let store = {
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
        if (action.type === ADD_POST) {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likeCounter: 0
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
            this._state.dialoguesPage.newMessageBody = action.body;
            this._callSubscriber(this._state);
        } else if (action.type === SEND_MESSAGE) {
            let body = this._state.dialoguesPage.newMessageBody;
            this._state.dialoguesPage.newMessageBody = '';
            this._state.dialoguesPage.messages.push({ id: 6, message: body });
            this._callSubscriber(this._state);
        }
    }

}

export const addPostActionCreator = () => ({ type: ADD_POST }); // вариант синтаксиса без return

export const updateNewPostTextActionCreator = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT, newText: text
    }
}
export const sendMessageBodyCreator = () => ({ type: SEND_MESSAGE }); // вариант синтаксиса без return

export const updateNewMessageBodyCreator = (body) => {
    return {
        type: UPDATE_NEW_MESSAGE_BODY, body: body
    }
}

export default store;
window.store = store;