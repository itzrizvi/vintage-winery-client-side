import React from 'react';
import { Spinner } from 'react-bootstrap';
import { useLocation, Navigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

// Setting Admin Route for secure route of admins
const AdminRoute = ({ children, ...rest }) => {
    const { user, isLoading, admin } = useAuth();
    const location = useLocation();
    if (isLoading) {
        return <Spinner animation="grow" />
    }
    if (user.email && admin) {
        return children;
    }
    return <Navigate to="/" state={{ from: location }} />
};

export default AdminRoute;