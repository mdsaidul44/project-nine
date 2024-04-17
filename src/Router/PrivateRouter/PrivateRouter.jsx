import { useContext } from "react"; 
import { Navigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import PropTypes from 'prop-types';

 

const PrivateRouter = ({children}) => {
    const {user,loading}  = useContext(AuthContext)

    if(loading){
        return <span className="loading loading-spinner loading-lg"></span> 
    }

    if(user){
        return children
    }
    return <Navigate to='/login'></Navigate>;
};
PrivateRouter.propTypes ={
    children: PropTypes.func
}
export default PrivateRouter;