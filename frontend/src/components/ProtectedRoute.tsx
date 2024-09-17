import { useAuth0 } from '@auth0/auth0-react'
import React from 'react'
import Login from '../pages/Login'
type Props = {
    children: React.ReactNode
}

const ProtectedRoute = ({ children }: Props) => {
    const { isAuthenticated } = useAuth0()
    return (
        <>
            {isAuthenticated ? children : <Login/>}
        </>
    )
}

export default ProtectedRoute