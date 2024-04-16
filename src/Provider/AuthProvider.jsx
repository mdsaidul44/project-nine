import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from './../firebase/firebaseConfig';

 
 
 export const AuthContext = createContext()

const AuthProvider = ({children}) => { 
    const [user,setUser] = useState(null)

    const createUser = (email,password) =>{
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const createLogin = (email,password) =>{
        return signInWithEmailAndPassword(auth,email,password)
    }

    const logOut = ()=>{
        return signOut(auth)
    }


    useEffect(()=>{
      const Unsubscribe = onAuthStateChanged(auth,currentUser =>{
            console.log('on auth user set' ,currentUser)
            setUser(currentUser)
        });
        return ()=>{
            Unsubscribe()
        }
    },[])


    const AuthInfo = {
        user,
        createUser,
        createLogin,
        logOut
    }
    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;