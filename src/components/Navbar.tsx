import { useContext } from 'react'
import { Link } from "react-router-dom"
import { AuthContext } from '../contexts/AuthContext'

export default function Navbar() {

  const auth = useContext(AuthContext)

  return (
    <nav style={{width: "100%", backgroundColor: "black", height: "80px", display: "flex", justifyContent: "center"}}>
        <ul style={{display: "flex", justifyContent: "space-between", alignItems: "center", width: "90%"}}>
            <li style={{fontSize: "22px"}}>
                <Link to="/">Home</Link>
            </li>
            <li style={{fontSize: "22px"}}>
                <Link to="/private">Private</Link>
            </li>
            {auth.user && (
                <li style={{fontSize: "22px"}}>
                  <a href="#">Sair</a>
                </li>
            )}
        </ul>
    </nav>
  )
}
