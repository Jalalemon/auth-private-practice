import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/Firebase.config';
import {createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth'


export const AuthContext = createContext() 
const auth = getAuth(app)
const UserContext = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const googleProvider = new GoogleAuthProvider();

    const signWithgoggle = () =>{
       return signInWithPopup(auth, googleProvider)
    }

    const createUser = (email, password) => {
        setLoading(true)
     return createUserWithEmailAndPassword(auth, email, password)
    }
    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }
    
    useEffect(() =>{
        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            console.log('currentUser changed', currentUser);
            setUser(currentUser)
            setLoading(false)
            
        })
         return () => unsubscribe();   
        
    }, [])


    const authInfo = {createUser,logOut,user,loading,signWithgoggle, signIn}

    return (
        <div>
            <AuthContext.Provider value={authInfo}>
             {
                children
             }
            </AuthContext.Provider>

          
        </div>
    );
};

export default UserContext;