import { useContext } from 'react'
import { Link, useNavigate } from "react-router-dom"
import { AuthContext } from '../contexts/AuthContext'

export default function Navbar() {
  const auth = useContext(AuthContext)
  const navigate = useNavigate()

  const handleLogout = async () => {
    await auth.signout()
    navigate("/")
  }

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
                  <button onClick={handleLogout}>Sair</button>
                </li>
            )}
        </ul>
    </nav>
  )
}
