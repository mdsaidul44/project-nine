import { GithubAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from './../firebase/firebaseConfig';
import { GoogleAuthProvider } from "firebase/auth";
// import UpdateProfile from "../Pages/UpdateProfile/UpdateProfile";
import PropTypes from 'prop-types';

 
 
 export const AuthContext = createContext()
 
 const AuthProvider = ({children}) => { 
     const googleProvider = new GoogleAuthProvider()
     const githubProvider = new GithubAuthProvider()
     const [user,setUser] = useState(null)
     const [loading,setLoading] = useState(true)
     

    //  const profileUpdate = (name,photo) =>{
    //     setLoading(true)
    //     return UpdateProfile(auth,name,photo)
    // }

    const googleLogin = () =>{
        setLoading(true) 
        return signInWithPopup(auth,googleProvider)
    }

    const githubLogin = () =>{
        setLoading(true) 
        return signInWithPopup(auth,githubProvider)
    }

    const createUser = (email,password) =>{
        setLoading(true) 
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const createLogin = (email,password) =>{
        setLoading(true) 
        return signInWithEmailAndPassword(auth,email,password)
    }

    const logOut = ()=>{
        setLoading(true) 
        return signOut(auth)
    }

    


    useEffect(()=>{
      const Unsubscribe = onAuthStateChanged(auth,currentUser =>{
            console.log('on auth user set' ,currentUser)
            setUser(currentUser)
            setLoading(false) 
        });
        return ()=>{
            Unsubscribe()
        }
    },[])


    const AuthInfo = {
        user,
        loading,
        createUser,
        createLogin,
        logOut,
        googleLogin,
        githubLogin,
        setUser
        // profileUpdate
    }
    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes ={
    children: PropTypes.func
}
export default AuthProvider;