import React, {  useContext } from 'react';
import { Authcontext } from '../Context/Context';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoutes = ({children}) => {
    const { user, loading } = useContext(Authcontext)
    const location = useLocation()
    if (loading) {
        <p>loading...</p>
    }
    if (user && user.uid) {
        return children;
    }
    return <Navigate to='/login' state={{ from:location }} replace></Navigate>

};

export default PrivateRoutes;