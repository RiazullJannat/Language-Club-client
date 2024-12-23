import { useEffect, useState } from "react";
import AuthContext from "./AuthContext";
import PropTypes from 'prop-types';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../../firebase/firebase.config.init'

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [authLoading, setAuthLoading] = useState(false);
    const auth = getAuth(app)
    const googleProvider = new GoogleAuthProvider();

    const register = (email, password) => {
        setAuthLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const login = (email, password) => {
        setAuthLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }

    const update = (updatedData) => {
        return updateProfile(auth.currentUser, updatedData)
    }

    const logout = () => {
        return signOut(auth)
    }

    const withGoogle = () => {
        return signInWithPopup( auth, googleProvider)
    }
    // track user
    useEffect(()=>{
        const unSubscribe  = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            console.log("current user:--->", currentUser)
        })
        return ()=>{unSubscribe()};
    },[auth])
    const data={
        user,
        authLoading,
        setAuthLoading,
        setUser,
        register,
        login,
        update,
        logout,
        withGoogle,
    }
    return (
        <AuthContext.Provider value={data}>
            {children}
        </AuthContext.Provider>
    );
};
// prop validation....
AuthProvider.propTypes = {
    children: PropTypes.node.isRequired,
};
export default AuthProvider;