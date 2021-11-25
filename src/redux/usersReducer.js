const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';

let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 2
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
            return { ...state, users: action.users } 
            // return { ...state, users: [...state.users, ...action.users]}   
        }
        case SET_CURRENT_PAGE: {
            return {...state, currentPage: action.currentPage}
        }
        case SET_TOTAL_USERS_COUNT: {
            return {...state, totalUsersCount: action.count}
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
export const setCurrentPageAC = (currentPage) => {
    return{
        type: SET_CURRENT_PAGE, currentPage
    }
}
export const setTotalUsersCountAC = (totalUsersCount) => {
    return{
        type: SET_TOTAL_USERS_COUNT, count: totalUsersCount
    }
}

export default usersReduser;
