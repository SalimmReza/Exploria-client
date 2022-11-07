import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { getAuth } from "firebase/auth";
import app from '../../Firebase/firebase.config';
export const AuthContext = createContext();
const auth = getAuth(app);
const AuthProv = ({ children }) => {
    const [user, setUser] = useState("");
    const [loading, setLoading] = useState(true);

    const googleSignIn = (provider) => {
        setLoading(true);
        return signInWithPopup(auth, provider)

    }

    const logOut = () => {
        localStorage.removeItem('token')
        setLoading(true);
        return signOut(auth)
    }

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const loginIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }
    const updateUserProfile = (profile) => {
        return updateProfile(auth.currentUser, profile);
    }



    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (CurrentUser) => {
            // console.log(CurrentUser)
            setUser(CurrentUser)
            setLoading(false);
        });


        return () => {
            unsubscribe();
        }
    }, [])

    const authInfo = { user, loading, googleSignIn, logOut, createUser, loginIn, updateUserProfile }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>

    );
};

export default AuthProv;