import { useApi } from "../hooks/api"
import { User } from "../types/User"
import { AuthContext } from "./AuthContext"
import { useState, useEffect } from "react"

export const AuthProvider = ({children}: {children: JSX.Element}) => {
    const [user, setUser] = useState<User | null>(null)

    const api = useApi()

    useEffect(() => {
        const validateToken = async () => {
            const storageData = localStorage.getItem("authToken")
            if(storageData){
                const data = await api.validateToken(storageData)
                if(data.user){
                    setUser(data.user)
                }
            }
        }
        validateToken()
    }, [api])

    async function signin(email: string, password: string){
        const data = await api.signin(email, password)
        if(data.user && data.token){
            setUser(data.user)
            sectionToken(data.token)
            return true;
        }
        return false;
    }

    async function signout(){
        await api.logout()
        setUser(null)
    }

    const sectionToken = (token: string) => {
        localStorage.setItem('authToken', token)
    }

    return (
        <AuthContext.Provider value={{user, signin, signout}}>
            {children}
        </AuthContext.Provider>
    )
}