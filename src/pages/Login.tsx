import { useState } from 'react'
import { useContext } from "react"
import { AuthContext } from '../contexts/AuthContext'
import { useNavigate } from 'react-router-dom'

export default function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const navigate = useNavigate()
    const auth = useContext(AuthContext)

    const handleLogin = async () => {
        if(email && password){
            const isLogged = await auth.signin(email, password)
            if(isLogged){
                navigate("/") 
            } else {
                alert("Não deu certo!")
            }
        }
    }

  return (
    <div style={{width: "100%"}}>
        <div style={{width: "20%", margin: "40px auto", display: "flex", flexDirection: "column", gap: "10px 0"}}>
            <h2 style={{textAlign: "center"}}>Login Page</h2>
            <input style={{padding: "10px 0"}} type="email" placeholder='type your email..' onChange={(e) => setEmail(e.target.value)}/>
            <input style={{padding: "10px 0"}} type="password" placeholder='type your password..' onChange={(e) => setPassword(e.target.value)}/>
            <button style={{padding: "10px 0"}} onClick={handleLogin}>Login</button>
        </div>
    </div>
  )
}
