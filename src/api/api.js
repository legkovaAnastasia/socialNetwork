import axios from 'axios';

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers:{
        'API-KEY': '25066eda-ac09-4ba6-9e26-d4248fa2dda3'
        }
});

export const usersAPI = {
    getUSers(currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
        .then(response => {
            return response.data;
        });
    }
}

// export const getUSers = (currentPage, pageSize) => {
//     return instance.get(`users?page=${currentPage}&count=${pageSize}`)
//     .then(response => {
//         return response.data;
//     });
// }
