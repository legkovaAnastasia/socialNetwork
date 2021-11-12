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
            ]
        }
    },
    _callSubscriber() { console.log('state changed'); },
    getState() {
        return this._state;
    },
    addPost() {
        let newPost = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likeCounter: 0
        };

        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this._state);
    },
    updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state);
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    }
}

// let rerenderEntireTree =() => {

// };

//   let state = {
//     profilePage: {
//         posts: [
//         { id: 1, message: 'Hi, how you doing?', likeCounter: '3' },
//         { id: 2, message: 'Whats up?', likeCounter: '3' },
//         { id: 3, message: 'Its my first post', likeCounter: '6' },
//         { id: 4, message: 'Hey', likeCounter: '9' }
//         ],

//         newPostText: 'its something new'
//     },

//     dialoguesPage: {
//         dialogues: [
//             {id: 1, name: 'Anna'},
//             {id: 2, name: 'Ksenya'},
//             {id: 3, name: 'Alex'},
//             {id: 4, name: 'Volodya'},
//             {id: 5, name: 'Rex'}
//         ],
//         messages: [
//             {id: 1, message: 'Hello'},
//             {id: 2, message: 'Yo'},
//             {id: 3, message: 'Kek'},
//             {id: 4, message: 'How you doing?'},
//             {id: 5, message: 'Lol'}
//         ]
//     }
//   };

//  export const addPost = (postMessage) => {
//       let newPost = {
//           id: 5,
//           message: postMessage,
//           likeCounter: 0
//       };

//       state.profilePage.posts.push(newPost);
//       state.profilePage.newPostText = '';
//       rerenderEntireTree(state);
//   }

//   export const updateNewPostText = (newText) => {
//     state.profilePage.newPostText = newText;
//     rerenderEntireTree(state);
// }

// export const subscribe = (observer) => {
//     rerenderEntireTree = observer;
// }

export default store;
window.store = store;