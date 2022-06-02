import React, { useContext, useState, useEffect } from 'react'
import { createUserWithEmailAndPassword } from "firebase/auth"
import { auth } from '../firebase'

export const AuthContext = React.createContext()

export function useAuth () {
  return useContext(AuthContext)
}

export function AuthProvider ({ children }) {
  const [currentUser, setCurrentUser] = useState()

  const signUp = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
    console.log(userCredential)
    const user = userCredential.user;
    setCurrentUser(user)
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.error(errorCode, errorMessage)
  });
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setCurrentUser(user)
    })

    return unsubscribe
  }, [])

  const value = {
    currentUser,
    signUp,
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}