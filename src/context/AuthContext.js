import React, { useContext, useEffect, useState } from 'react'
import { auth } from '../firebase'; 
//created context in the name of AuthContext
const AuthContext = React.createContext();

// creating a hook to use AuthContext in any functional component
export function useAuth(){
    return useContext(AuthContext);
}

export default function AuthProvider({children}) {
const [currentUser, setCurrentUser] = useState()
const [loading, setLoading] = useState(true)
//signup creates user
function signup(email,password){
auth.createUserWithEmailAndPassword(email,password)
}
//log in user
function login(email,password){
  return auth.signInWithEmailAndPassword(email,password)
}
//logout functionality
function logout(){
 return auth.signOut();
}
function resetPassword(email){
return auth.sendPasswordResetEmail(email)
}
//sets the user .only want to run when we mount the component
useEffect(()=>{
   const unsubscribe = auth.onAuthStateChanged(user =>{
        setCurrentUser(user)
        setLoading(false)
    })
    return unsubscribe
},[])

//value
const value = {
    currentUser,
    signup,
    login,
    logout,
    resetPassword,
}

  return (
    // any component inside provider will be able to access the values
      <AuthContext.Provider value={value}>
        {!loading && children}
      </AuthContext.Provider>
    
  )
}
