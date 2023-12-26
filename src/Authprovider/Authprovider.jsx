import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.config';

export const AuthContext = createContext();

const auth = getAuth(app);

const Authprovider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider();

    console.log(user);
    // create user
    const createUser = (email, password) => {
        setLoading(true)
        console.log(email, password);
        return createUserWithEmailAndPassword(auth, email, password)
    }
    // update user
    const updateUser = (userInfo) => {
        return updateProfile(auth.currentUser, userInfo)
    }
    // verify email
    const verifyEmail = () => {
        return sendEmailVerification(auth.currentUser)
    }
    // sign In
    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    // Log Out
    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }
    // reset password
    const forgetPassword = (email) => {
        return sendPasswordResetEmail(auth, email)

    }
    // google log in
    const googleLogIn = () => {
        return signInWithPopup(auth, googleProvider)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoading(false)
            console.log('user observing');
        })
        return () => unsubscribe()
    }, [])

    const authInfo = {
        createUser,
        verifyEmail,
        forgetPassword,
        signIn,
        logOut,
        updateUser,
        googleLogIn,
        loading,
        user
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default Authprovider;