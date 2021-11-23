const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 21,
    currentPage: 1
}

const usersReduser = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(users => {
                    if (users.id === action.userID){
                        return {...users, followed: true}
                    } else {
                        return users;
                    }
                })
            }

        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(users => {
                    if (users.id === action.userID){
                        return {...users, followed: false}
                    } else {
                        return users;
                    }
                })
            }
        case SET_USERS: {
            return { ...state, users: [...state.users, ...action.users] }    
        }
        default: return state;
    }
}

export const followAC = (userID) => ({ type: FOLLOW, userID }); // вариант синтаксиса без return

export const unfolliwAC = (userID) => {
    return {
        type: UNFOLLOW, userID
    }
}
export const setUsersAC = (users) => {
    return {
        type: SET_USERS, users
    }
}

export default usersReduser;
