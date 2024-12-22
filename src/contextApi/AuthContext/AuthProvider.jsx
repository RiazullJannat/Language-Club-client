import AuthContext from "./AuthContext";
import PropTypes from 'prop-types';

const AuthProvider = ({children}) => {
    const data={

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