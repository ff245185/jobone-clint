import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../authprovider/Authprovider";



const PrivateRouts = ({children}) =>{

    const { user, loading, setLoading } = useContext(AuthContext);

    const location = useLocation();
	if (loading) {
		return setLoading(true);
	}
    if (!user) {
		return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
	}
	return children;


};

export default PrivateRouts;