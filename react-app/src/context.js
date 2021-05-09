import { useContext, useState, useEffect, createContext } from 'react'
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyChgrL8arSqFeqbdGKODNID2QGIkmFo2MU',
  authDomain: 'autosure-d1722.firebaseapp.com',
  projectId: 'autosure-d1722',
  storageBucket: 'autosure-d1722.appspot.com',
  messagingSenderId: '269770090788',
  appId: '1:269770090788:web:ad699f8fc955347b066bb1',
}

firebase.initializeApp(firebaseConfig)
export const auth = firebase.auth()
export const db = firebase.firestore()
export const storage = firebase.storage()

const context = createContext()

export function useAuth() {
  return useContext(context)
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState()
  const [loading, setLoading] = useState(true)

  const signup = (email, password, fullName = '') => {
    let promise = new Promise(function (resolve, reject) {
      auth
        .createUserWithEmailAndPassword(email, password)
        .then((ref) => {
          ref.user.updateProfile({
            displayName: fullName,
          })

          resolve(ref)
        })
        .catch((error) => reject(error))
    })

    return promise
  }

  const signin = (email, password) => {
    let promise = new Promise(function (resolve, reject) {
      auth
        .signInWithEmailAndPassword(email, password)
        .then((ref) => {
          resolve(ref)
        })
        .catch((error) => {
          reject(error)
        })
    })

    return promise
  }

  const signout = () => {
    // window.localStorage.removeItem('celoSecretKey')
    return auth.signOut()
  }

  const passwordReset = (email) => {
    let promise = new Promise(function (resolve, reject) {
      auth
        .sendPasswordResetEmail(email)
        .then(() => {
          resolve(`Password Reset Email sent to ${email}`)
        })
        .catch((error) => {
          reject(error)
        })
    })

    return promise
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      console.log(user)
      setCurrentUser(user)
      setLoading(false)
    })

    return unsubscribe
  }, [currentUser])

  const value = {
    currentUser,
    signup,
    signin,
    signout,
    passwordReset,
  }

  return (
    <context.Provider value={value}>{!loading && children}</context.Provider>
  )
}
