import * as axios from "axios";


const instance = axios.create({withCredentials:true,
                                baseURL:`https://social-network.samuraijs.com/api/1.0`,
                                headers:{"API-KEY":"5d16bb3c-e00e-4326-9938-6b442a102e86"}})
export const usersAPI = {
    getUsers: (currentPage = 1, pageSize = 5) => {
        return (
            instance.get(`/users?page=${currentPage}&count=${pageSize}`)
                .then(response => {
                    return response.data
                })
        )
    },
    followUsers: (userId) => {
        return(
        instance.post(`/follow/${userId}`, {})
            .then(response => {
                return response.data
            })
        )

    },
    unfollowUsers: (userId) => {
        return(
            instance.delete(`/follow/${userId}`)
                .then(response => {
                    return response.data
                })
        )

    }
}
export const profileAPI = {
    getProfile: (userId)=>{
        return(
            instance.get(`/profile/`+userId)
                .then(response => {
                    return response.data
                })
        )
    },
    getProfileStatus:(userId)=>{
        return(
            instance.get('profile/status/'+userId)
                .then(response =>{
                    // debugger;
                    return response.data
                })
        )
    },
    savePhoto:(photoFile)=>{
        const formData = new FormData();
        formData.append("image", photoFile);
        return(
            instance.put('/profile/photo',formData, {headers:{'content-type':"multipart/form-data"}})
                .then(response =>{
                    // debugger;
                    return response.data
                })
        )
    },
    changeProfileStatus:(status)=>{
        return(
            instance.put('profile/status',{status:status})
                .then(response=>{
                    return response.data
                    }
                )
        )
    }
}

export const headerAPI ={
    getHeader:()=>{

        return(

            instance.get(`/auth/me`)
                .then(response => {

                    return response.data
                })
        )
    }
}

export const authAPI ={
    login:(email, password, rememberMe = true)=>{

        return(
            instance.post('/auth/login', {email:email, password:password, rememberMe:rememberMe})
            .then(response=>{

                return response.data
            }))

    },
    logout:()=>{
        return(
            instance.delete('/auth/login')
            .then(response=>{
                return response.data
            })
        )

    }
}