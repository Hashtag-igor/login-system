import {useContext} from 'react'
import { AuthContext } from '../contexts/AuthContext'

export default function PrivatePage() {
  const auth = useContext(AuthContext)

  return (
    <div>
        <h2>Private Page</h2>

        <h3>Welcome, {auth.user?.name}</h3>
    </div>
  )
}
