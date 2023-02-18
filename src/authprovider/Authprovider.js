import React, { createContext, useEffect, useState } from "react";
import app from '../firebase/Firebase.config'
import {getAuth,
    signInWithPopup,
    signOut,
    GoogleAuthProvider,onAuthStateChanged,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword
    } from 'firebase/auth'
export const AuthContext = createContext();
const Authprovider = ({children}) => {
    const auth = getAuth(app);
    const [user,setUser] = useState(); 
    const [loding, setLoding] = useState();
    
    const googleProvider = new GoogleAuthProvider();
    const continewWithGoogle = () => {
        return signInWithPopup(auth, googleProvider);
    }

    const createUserEmail = (email, password) => {
		setLoding(true);
		return createUserWithEmailAndPassword(auth, email, password);
    }

    const logInWithEmailAndPassword = (email, password) => {
		setLoding(true);
		return signInWithEmailAndPassword (auth,email,password)
    }
  

        const userLogOut = () => {
            localStorage.clear();
            return signOut(auth);
        };
        useEffect(() => {
            const unSubscribes = onAuthStateChanged(auth, currentUser => {
                setUser(currentUser);
    
               setLoding(false)
            });
            return () => {
                unSubscribes();
            };
        }, []);
        const authInfo = {
          loding,
            user,
        
        logInWithEmailAndPassword,
        userLogOut,
        continewWithGoogle,
        setLoding,
        createUserEmail
        };


    return (
        <div>
     <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
        </div>
    );
};

export default Authprovider;