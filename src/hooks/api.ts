import axios from "axios";

const api = axios.create({
    baseURL: "https://api.google.com"
})

export const useApi = () => ({
    validateToken: async (token: string) => {
        const response = await api.post("/validate", {token})
        return response.data
    },
    signin: async (email: string, password: string) => {
        //usuario e token fake
        return ({
            user: {id: 3, name: "José", email: "jose@gmail.com"},
            token: "123456789"
        })
        const response = await api.post("/signin", {email, password})
        return response.data
    }, 
    logout: async () => {
        const response = await api.post("/logout")
        return response.data
    }
})