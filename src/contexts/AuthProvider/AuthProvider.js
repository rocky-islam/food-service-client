import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth'
import app from '../../firebase/firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app)

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // user create with email password
    const createUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password);
    };
    // update name photo
     const updateUserProfile = (profile) => {
       return updateProfile(auth.currentUser, profile);
     };

    //  sign in with email password
     const signIn = (email, password) => {
       return signInWithEmailAndPassword(auth, email, password);
     };

    //  google login
    const providerLogin = (provider) => {
      return signInWithPopup(auth, provider);
    };


    //  log out
     const logOut = () => {
       return signOut(auth);
     };

    useEffect( () =>{
        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            console.log(currentUser);
            setUser(currentUser);
            
        });
        return () => {
            return unsubscribe();
        }
    },[])

    const authInfo = {
      user,
      loading,
      createUser,
      updateUserProfile,
      signIn,
      logOut,
      providerLogin,
    };
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;