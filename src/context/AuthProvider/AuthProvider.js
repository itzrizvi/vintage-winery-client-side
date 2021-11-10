import React, { createContext } from 'react';
import useFirebase from '../../hooks/useFirebase';
// Creating Auth Context
export const AuthContext = createContext(null);

// Auth Provider Component
const AuthProvider = ({ children }) => {
    const allContext = useFirebase();
    return (
        <AuthContext.Provider value={allContext}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;