import * as axios from "axios";


const instance = axios.create({withCredentials:true,
                                baseURL:`https://social-network.samuraijs.com/api/1.0`,
                                headers:{"API-KEY":"5d16bb3c-e00e-4326-9938-6b442a102e86"}})
export const usersAPI={
     getUsers :(currentPage = 1, pageSize = 5) => {
        return (
            instance.get(`/users?page=${currentPage}&count=${pageSize}`)
                .then(response => {
                    return response.data
                })
        )
    }

}