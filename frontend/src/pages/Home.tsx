import { useAuth0 } from '@auth0/auth0-react'
import React from 'react'

const Home = () => {
const {user,logout}=useAuth0()
  return (
    <>
        {user?.email}
        <button onClick={()=>logout()}>Logout</button>
    </>
  )
}

export default Home