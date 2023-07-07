import { useState } from 'react'
import { useContext } from "react"
import { AuthContext } from '../contexts/AuthContext'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

const LoginContainer = styled.div`
    width: 100%;
    height: 100vw;
    display: flex;
`
const LoginWrapper = styled.div`
    width: 400px;
    height: 380px;
    margin: 80px auto;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    border: 3px solid #0a1618;
    border-radius: 5px;
`
const LoginTitle = styled.h2`
    text-align: center;
    color: #0a1618;
    font-size: 30px;
`
const LoginInput = styled.input`
    padding: 12px 0 12px 7px;
    width: 90%;
    border: 1px solid #0a1618;
    border-radius: 5px;
    font-size: 14px;
`
const LoginButton = styled.button`
    padding: 12px 0;
    width: 90%;
    border: 1px solid #0a1618;
    border-radius: 5px;
    letter-spacing: 2px;
    font-size: 16px;

    &:hover{
        transition: 0.4s;
        background-color: #0a1618;
        cursor: pointer; 
        color: #f4eef6;
    }
`

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
    <LoginContainer>
        <LoginWrapper>
            <LoginTitle>Login Form</LoginTitle>
            <LoginInput type="email" placeholder='type your email..' onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}/>
            <LoginInput type="password" placeholder='type your password..' onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}/>
            <LoginButton onClick={handleLogin}>Login</LoginButton>
        </LoginWrapper>
    </LoginContainer>
  )
}
