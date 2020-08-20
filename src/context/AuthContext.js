import React, { createContext, useState } from 'react'
import firebase from '../firebase/firebase'

export const AuthContext = createContext()

export function AuthProvider(props) {

    const [user, setUser] = useState({})

    const authListener = () => {
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                setUser(user)
            } else {
                setUser(null)
            }
        })
    }

    const LogOut = () => {
        firebase.auth().signOut()
    }

    return (
        <AuthContext.Provider value={{ user, authListener, LogOut }}>
            {props.children}
        </AuthContext.Provider>
    )
}
