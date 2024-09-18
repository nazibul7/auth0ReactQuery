import { useAuth0 } from "@auth0/auth0-react"

type PropData = {
    auth0Id: string
    email: string
}
export const useCreateMyUser = (data: PropData) => {
    const { getAccessTokenSilently } = useAuth0()
    const BASE_URL=import.meta.env.VITE_API_BASE_URL
    const fetching = async () => {
        const accessToken = await getAccessTokenSilently()
        const res = await fetch(`${BASE_URL}/api/v1/user/register`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${accessToken}`
            },
            body:JSON.stringify(data)
        })
        if(!res.ok){
            throw new Error('Failed to create user')
        }
    }
    return fetching
}