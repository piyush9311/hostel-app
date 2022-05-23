import React, { useState, createContext } from 'react';

export const UserAuthContext = createContext();


export const UserProvider = (props) => {
    const [user, setUser] = useState([
        {
            name: 'Dummy',
            email: 'test@gmail.com',
            password: '123456'
        }
    ]);

    return (
        <UserAuthContext.Provider value={[user, setUser]}>
            {props.children}
        </UserAuthContext.Provider>
    );
}