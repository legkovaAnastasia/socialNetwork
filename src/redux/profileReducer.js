import { usersAPI } from '../api/api';

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

let initialState = {
    posts: [
        { id: 1, message: 'Hi, how you doing?', likeCounter: '3' },
        { id: 2, message: 'Whats up?', likeCounter: '3' },
        { id: 3, message: 'Its my first post', likeCounter: '6' },
        { id: 4, message: 'Hey', likeCounter: '9' }
    ],
    newPostText: 'its something new',
    profile: null
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                message: state.newPostText,
                likeCounter: 0
            };
            return {...state,
                posts: [...state.posts, newPost],
                newPostText: ''
             };    
        case UPDATE_NEW_POST_TEXT:
            return {...state,
                newPostText: action.newText
            };
        case SET_USER_PROFILE:
            return {...state, profile: action.profile                
            };
        default: return state;
    }
}

export const addPostActionCreator = () => ({ type: ADD_POST }); // вариант синтаксиса без return

export const updateNewPostTextActionCreator = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT, newText: text
    }
}
export const setUserProfile = (profile) => {
    return {
        type: SET_USER_PROFILE, profile
    }
}

export const getUserProfile = (userId) => (dispatch) => {
    usersAPI.getProfile(userId)
    .then(response => {
        dispatch(setUserProfile(response.data));
    });
}

export default profileReducer;
