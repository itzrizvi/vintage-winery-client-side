import { useContext } from 'react';
import { AuthContext } from '../context/AuthProvider/AuthProvider';
// Use Auth Hook with Auth Context
const useAuth = () => {
    const auth = useContext(AuthContext);
    return auth;
};

export default useAuth;