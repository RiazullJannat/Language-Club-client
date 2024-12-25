import { useEffect, useState } from "react";
import AuthContext from "./AuthContext";
import PropTypes from 'prop-types';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../../firebase/firebase.config.init'
import axios from "axios";

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [authLoading, setAuthLoading] = useState(true);
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
        setAuthLoading(true)
        return signOut(auth)
    }

    const withGoogle = () => {
        setAuthLoading(true)
        return signInWithPopup(auth, googleProvider)
    }
    // track user
    useEffect(() => {
        setAuthLoading(true)
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setAuthLoading(false)
            if(currentUser){
                axios.post(`${import.meta.env.VITE_BASE_URL}/login`, currentUser,{withCredentials:true})
                .then(res => console.log(res.data))
            }
            else{
                axios.post(`${import.meta.env.VITE_BASE_URL}/logout`,{},{withCredentials:true})
                .then(res=>console.log(res.data))
            }
            console.log("current user:--->", currentUser)
        })
        return () => { unSubscribe() };
    }, [auth])
    const data = {
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