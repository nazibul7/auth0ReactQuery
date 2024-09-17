import { useAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Login = () => {
  const { loginWithRedirect, getAccessTokenSilently, user, isAuthenticated } = useAuth0();
  const [isLoading, setIsLoading] = useState(true);

  const login = async () => {
    await loginWithRedirect();
  };

  const fetchData = async () => {
    if (isAuthenticated) {
      try {
        const token = await getAccessTokenSilently();
        const res = await axios.post('http://localhost:4000/api/v1/user/register', {
          email: user?.email,
          name: user?.name,
          password: ''
        }, {
          headers: {
            'Authorization': `Bearer ${token}`
          },
          withCredentials: true
        });
        console.log(res.data);
      } catch (error) {
        console.log('Error while fetching data from server', error);
      }
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      fetchData();
    }
    setIsLoading(false);
  }, [isAuthenticated]);

  if (isLoading) return <div>Loading...</div>;

  return (
    <>
      <div>Login with Auth0</div>
      {!isAuthenticated ? (
        <button onClick={login}>Login</button>
      ) : (
        <div>Welcome {user?.name}</div>
      )}
    </>
  );
};

export default Login;