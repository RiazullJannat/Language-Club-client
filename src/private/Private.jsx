import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Loading from "../components/common/Loading";
import PropTypes from "prop-types";
const Private = ({children}) => {
    const { user, authLoading } = useAuth();
    const location = useLocation();
    if (authLoading) {
        return <Loading></Loading>
    }

    if (user) {
        return children
    }

    return <Navigate to="/login" state={location?.pathname}></Navigate>
};
Private.propTypes = {
    children: PropTypes.node.isRequired, 
  };
  
  
export default Private;