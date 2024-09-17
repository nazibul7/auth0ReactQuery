import { Auth0Provider } from '@auth0/auth0-react'
import React from 'react'

type ChildrenProps={
    children:React.ReactNode
}
const Auth0ProviderComponents = ({children}:ChildrenProps) => {
    const domain=import.meta.env.VITE_AUTh0_DOMAIN;
    const clientId=import.meta.env.VITE_AUTH0_CLIENT_ID
    const redirectUri=import.meta.env.VITE_AUTH0_CALLBACK_URL
    return (
        <Auth0Provider
            domain={domain}
            clientId={clientId}
            authorizationParams={{
                redirect_uri:redirectUri
            }}
        >
            {children}
        </Auth0Provider>
    )
}

export default Auth0ProviderComponents