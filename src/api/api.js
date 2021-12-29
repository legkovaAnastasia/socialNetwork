import axios from 'axios';
import { follow } from '../redux/usersReducer';

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers:{
        'API-KEY': '3dadebee-0ac9-4307-a5f5-94c82542f358'
        }
});

export const usersAPI = {
    getUSers(currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
        .then(response => {
            return response.data;
        });
    },
    follow(userId) {
        return instance.post(`follow/${userId}`)
    },
    unfollow(userId) {
        return instance.delete(`follow/${userId}`)
    },
    getProfile(userId){
        console.warn('obsolete method. please use profileAPI obj')
        return profileAPI.getProfile(userId)
    }
}
export const profileAPI = {
    getProfile(userId){
        return instance.get(`profile/` + userId)
    },
    getStatus(userId){
        return instance.get(`profile/status/` + userId)
    },
    updateStatus(status){
        return instance.put(`profile/status/`, {status: status})
    },
    savePhoto(photoFile){
        let formData = new FormData();
        formData.append('image', photoFile)
        return instance.put(`profile/photo/`, formData, {
            headers: {
                'Content-type': 'multipart/from-data'
            }
        })
    },
    saveProfile(profile){
        return instance.put(`profile`, profile)
    }
}

export const authAPI = {
    me() {
       return instance.get(`auth/me`);
    },
    login(email, password, rememberMe = false) {
       return instance.post(`auth/login`, {email, password, rememberMe});
    },
    logout() {
       return instance.delete(`auth/login`);
    }
}

