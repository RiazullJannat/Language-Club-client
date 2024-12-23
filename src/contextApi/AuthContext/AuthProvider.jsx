import { useState } from "react";
import AuthContext from "./AuthContext";
import PropTypes from 'prop-types';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from '../../firebase/firebase.config.init'

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [authLoading, setAuthLoading] = useState(false);
    const auth = getAuth(app)

    const register = (email, password) => {
        setAuthLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const login = (email, password) => {
        setAuthLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }

    const data={
        user,
        authLoading,
        setAuthLoading,
        setUser,
        register,
        login,
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