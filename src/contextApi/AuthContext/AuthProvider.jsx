import AuthContext from "./AuthContext";
import PropTypes from 'prop-types';

const AuthProvider = ({children}) => {
    return (
        <AuthContext.Provider>
            {children}
        </AuthContext.Provider>
    );
};
// prop validation....
AuthProvider.propTypes = {
    children: PropTypes.node.isRequired,
};
export default AuthProvider;