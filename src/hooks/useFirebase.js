import initializeFirebaseAuth from "../Pages/Firebase/firebase.init";
import { useState, useEffect } from "react";
import {
    getAuth,
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
    signInWithEmailAndPassword,
    GoogleAuthProvider,
    signInWithPopup,
    updateProfile
} from "firebase/auth";



// Initialize Firebase
initializeFirebaseAuth();

const useFirebase = () => {
    // Auth Function
    const auth = getAuth();
    const gProvider = new GoogleAuthProvider();

    // All States For Firebase
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [admin, setAdmin] = useState(false);
    const [authError, setAuthError] = useState('');

    // Clear Error 
    const clearError = () => {
        setTimeout(() => {
            setAuthError('');
        }, 4000);
    };

    useEffect(() => {
        clearError();
    }, [authError]);

    // Register With Email Password
    const registerNewUser = (email, password, name, history) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setAuthError('');
                const newUser = { email, displayName: name };
                setUser(newUser);
                // Save User
                saveUser(email, name, 'POST');
                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {
                }).catch((error) => {
                });

                history.replace('/home');
            })
            .catch((error) => {
                setAuthError(error.message);
                // ..
            })
            .finally(() => setIsLoading(false));
    }

    // Login with Email and Password
    const loginWithEmail = (email, password, location, history) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const destination = location?.state?.from || '/home';
                history.replace(destination);
                setAuthError('')
            })
            .catch((error) => {
                setAuthError(error.message);
            })
            .finally(() => setIsLoading(false));
    }

    // Google Sign In
    const googleSignIn = (location, history) => {
        setIsLoading(true);
        signInWithPopup(auth, gProvider)
            .then((result) => {
                const destination = location?.state?.from || '/home';
                history.replace(destination);
                const user = result.user;
                setAuthError('')
                // Save User
                saveUser(user.email, user.displayName, 'PUT');
            }).catch((error) => {
                setAuthError(error.message);
            })
            .finally(() => setIsLoading(false));
    }

    // Observer Function
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            } else {
                setUser({});
            }
            setIsLoading(false);
        });
        return () => unsubscribe;
    }, [auth]);

    // Logout Function
    const logOut = () => {
        setIsLoading(true)
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        })
            .finally(() => setIsLoading(false));
    }

    // Save Users Data
    const saveUser = (email, displayName, method) => {
        const user = { email, displayName };
        fetch('https://fierce-forest-71065.herokuapp.com/users', {
            method: method,
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user),
        })
            .then()
    }

    // Fetching For Admin Role user
    useEffect(() => {
        const url = `https://fierce-forest-71065.herokuapp.com/users/${user.email}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setAdmin(data.admin));
    }, [user.email]);

    return {
        user,
        admin,
        isLoading,
        authError,
        registerNewUser,
        loginWithEmail,
        googleSignIn,
        logOut
    }

}

export default useFirebase;