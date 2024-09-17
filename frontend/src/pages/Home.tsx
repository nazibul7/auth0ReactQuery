import { useAuth0 } from '@auth0/auth0-react'
import React from 'react'

const Home = () => {
const {logout}=useAuth0()
  return (
    <>
        Home
        <button onClick={()=>logout()}>Logout</button>
    </>
  )
}

export default Home