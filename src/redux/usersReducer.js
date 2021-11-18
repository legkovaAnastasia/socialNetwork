const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

let initialState = {
    users: [
        // { id: 1, photoUrl: 'https://www.vokrug.tv/pic/person/f/2/0/7/f2073f62bfa96bbc291ebd37ef8c1659.jpg', followed: true, fullName: 'Anna', status: 'going out tonight', location: {city: 'Irkutsk', country: 'Russia'} },
        // { id: 2, photoUrl: 'https://www.vokrug.tv/pic/person/f/2/0/7/f2073f62bfa96bbc291ebd37ef8c1659.jpg', followed: true, fullName: 'Elena', status: 'whats the news?', location: {city: 'Brest', country: 'Belarus'} },
        // { id: 3, photoUrl: 'https://www.vokrug.tv/pic/person/f/2/0/7/f2073f62bfa96bbc291ebd37ef8c1659.jpg', followed: false, fullName: 'Igor', status: 'avocado and gym', location: {city: 'Lviv', country: 'Ukraine'} },
        // { id: 4, photoUrl: 'https://www.vokrug.tv/pic/person/f/2/0/7/f2073f62bfa96bbc291ebd37ef8c1659.jpg', followed: false, fullName: 'Valery', status: 'looking for a company', location: {city: 'Nursultan', country: 'Kazakhstan'} }
    ]
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
