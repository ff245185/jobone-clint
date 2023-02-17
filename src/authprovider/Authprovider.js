import React, { children, createContext, useEffect, useState } from "react";
import app from '../firebase/Firebase.config'
import {getAuth,GoogleAuthProvider,createUserWithEmailAndPassword} from 'firebase/auth'
export const AuthContext = createContext();
const auth = getAuth(app)
const Authprovider = () => {
    const [user,setUser] = useState(); 
    const [loding, setLoding] = useState();
    
    const googleProvider = new GoogleAuthProvider();
    const continewWithGoogle = () => {
        return signInWithPopup(auth, googleProvider);
    }

    const createUserWithEmailAndPass = (email, password) => {
		setLoding(true);
		return createUserWithEmailAndPassword(auth, email, password);
    }
    const logInWithEmailAndPassword = (email, password) => {
		setLoding(true);
		return 
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
            createUserWithEmailAndPass,
            userProfileUpdate,
            logInWithEmailAndPassword,
            userLogOut,
           continewWithGoogle,
        setLoding
        };


    return (
        <div>
     <AuthContext.Provider value={authInfo}></AuthContext.Provider>
        </div>
    );
};

export default Authprovider;