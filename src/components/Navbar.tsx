import { useContext } from 'react'
import { Link, useNavigate } from "react-router-dom"
import { AuthContext } from '../contexts/AuthContext'
import styled from "styled-components"

const NavbarContainer = styled.div`
  width: 100%;
  background-color: #0a1618;
  border-bottom: 2px solid #000000;
  height: 60px;
  display: flex;
  justify-content: center;
`
const NavbarUL = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
`
const NavbarLI = styled.li`
  font-size: 20px;

  &:hover{
    text-decoration: underline;
    color: #f4eef6;;
  }
`
const ButtonOut = styled.button`
  border: none;
  background-color: transparent;
  font-size: 19px;
  color: #f4eef6;

  &:hover{
    text-decoration: underline;
    cursor: pointer;
  }
`
const NavbarLink = styled(Link)`
`

export default function Navbar() {
  const auth = useContext(AuthContext)
  const navigate = useNavigate()

  const handleLogout = async () => {
    await auth.signout()
    navigate("/")
  }

  return (
    <NavbarContainer>
        <NavbarUL>
            <NavbarLI>
                <NavbarLink to="/">Home</NavbarLink>
            </NavbarLI>
            <NavbarLI>
                <NavbarLink to="/private">Private</NavbarLink>
            </NavbarLI>
            {auth.user && (
                <NavbarLI>
                  <ButtonOut onClick={handleLogout}>Sair</ButtonOut>
                </NavbarLI>
            )}
        </NavbarUL>
    </NavbarContainer>
  )
}
