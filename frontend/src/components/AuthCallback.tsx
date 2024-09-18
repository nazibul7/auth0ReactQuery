import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useCreateMyUser } from '../api/UserApi'
import { useAuth0 } from '@auth0/auth0-react'

export const AuthCallback = () => {
    const { user } = useAuth0()
    const navigate = useNavigate()
    const createUser = useCreateMyUser({ auth0Id: user?.sub as string, email: user?.email as string })
    useEffect(() => {
        createUser()
        navigate('/')
    }, [])
    return (
        <>
            Loading...
        </>
    )
}
