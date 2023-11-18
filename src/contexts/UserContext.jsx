import { createContext } from "react"
import PropTypes from 'prop-types';
import { useContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase/config";

export const UserContext = createContext()

export function UserContextProvider({children}) {
    const [user, setUser] = useState(null)

    useEffect(() => {
        onAuthStateChanged(auth, (firebaseUser) => {
            // TODO: Update this
            if (firebaseUser) {
                console.log('firebaseUser:', firebaseUser)
                setUser({
                    id: firebaseUser.uid,
                    email: firebaseUser.email,
                    name: firebaseUser.displayName,
                })
            } else {
                setUser(null)
            }
        });
    }, [])

    return <UserContext.Provider
    value={{
        user,
    }}>
        {children}
    </UserContext.Provider>
}

UserContextProvider.propTypes = {
    children: PropTypes.any.isRequired,
};

export function useUser() {
    return useContext(UserContext)
}
