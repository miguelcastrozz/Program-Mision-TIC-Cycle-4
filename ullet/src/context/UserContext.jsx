import React, {useState} from 'react';

// Variable global
const UserContext = React.createContext();

// ¿Quiénes tienen acceso?
export function UserProvider({children}) {

    const [user, setUser] = useState(null);

    return (
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
    );

}

export default UserContext;
