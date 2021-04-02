import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0',
    headers: {
        "API-KEY": "23ab8b18-87cd-45c7-ba46-0b20b5014a46"
    }
})

export const menuAPI = {
    getMenu() {
        return {}
    }
}
export const userAPI = {
    getUsers(pageNum, count) {
        return instance.get(`users?page=${pageNum}&count=${count}`)
            .then(response => {
                return response.data;
            })
    }
}

export const profileAPI = {
    getProfile(userId) {
        return instance.get(`/profile/${userId}`)
            .then(response => {
                return response.data
            })
    }
}

