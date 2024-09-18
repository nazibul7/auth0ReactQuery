import { AppState, Auth0Provider, User } from '@auth0/auth0-react'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useCreateMyUser } from '../api/UserApi'

type ChildrenProps = {
    children: React.ReactNode
}
const Auth0ProviderComponents = ({ children }: ChildrenProps) => {
    const navigate = useNavigate()
    const domain = import.meta.env.VITE_AUTh0_DOMAIN;
    const clientId = import.meta.env.VITE_AUTH0_CLIENT_ID
    const redirectUri = import.meta.env.VITE_AUTH0_CALLBACK_URL
    const audience = import.meta.env.VITE_API_AUDIENCE
    const onRedirectCallback = async (appstate?: AppState, user?: User) => {
        navigate('/auth-callback')
    }
    return (
        <Auth0Provider
            domain={domain}
            clientId={clientId}
            authorizationParams={{
                redirect_uri: redirectUri,
                audience: audience
            }}
            onRedirectCallback={onRedirectCallback}
        >
            {children}
        </Auth0Provider>
    )
}

export default Auth0ProviderComponents