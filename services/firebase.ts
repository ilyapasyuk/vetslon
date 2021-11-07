import { CONFIG } from 'CONFIG'
import { getAnalytics } from 'firebase/analytics'
import { initializeApp } from 'firebase/app'
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseApp = initializeApp(CONFIG.firebaseConfig)

const googleAnalytics = getAnalytics(firebaseApp)
const firestore = getFirestore()
const googleAuthProvider = new GoogleAuthProvider()
const googleAuth = getAuth()

export {
  firebaseApp,
  googleAnalytics,
  firestore,
  googleAuthProvider,
  googleAuth,
  signInWithPopup,
  GoogleAuthProvider,
}
