import React, {useState, createContext, useContext } from 'react'

const UserContext = React.createContext();



function UserProvider(props) {
    const [currentUser, setCurrentUser] = useState({});

    const handleUpdateUser = (user) => {
        setCurrentUser(user);
    }

    return(<UserContext.Provider value={{currentUser, handleUpdateUser}}>
        {props.children}
    </UserContext.Provider>);
}

export const useUserContext = () => {
    return useContext(UserContext);
}

export { UserProvider };