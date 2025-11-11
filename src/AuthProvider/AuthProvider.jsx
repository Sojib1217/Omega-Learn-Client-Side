import React, { createContext, useEffect, useState } from 'react';
import { app } from '../../firebase.config';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";


export const AuthContext=createContext()

const AuthProvider = ({ children }) => {
    const googleProvider = new GoogleAuthProvider()
    const auth = getAuth(app)
    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState(null)

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)

    }

    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const signInWithGoogle = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }
    const logout = () => {
        return signOut(auth)
    }
    const updateUser=(userData)=>{
     return updateProfile(auth.currentUser,userData)
    }



    const authInfo = {
        createUser,
        signIn,
        signInWithGoogle,
        logout,
        loading,
        updateUser,
        user

    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            setLoading(false)
        })
        return () => {
            unsubscribe()
        }
    }, [auth])




    return (
        <AuthContext value={authInfo}> {children} </AuthContext>
    )
    
};

export default AuthProvider;