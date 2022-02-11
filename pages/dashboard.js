import React from 'react'
import { useUser } from '@auth0/nextjs-auth0';

const dashboard = () => {
    const { user, error, isLoading } = useUser();

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>{error.message}</div>;

    return (
    <div>
        {
            useUser().user 
            ? <a href="/api/auth/logout">Logout</a>
            : <a href="/api/auth/login">Login</a>
        }
        {user && (
        <div>
        <img src={user.picture} alt={user.name} />
        <h2>{user.name}</h2>
        <p>{user.email}</p>
        </div>
        )}
    </div>
    )
}

export default dashboard