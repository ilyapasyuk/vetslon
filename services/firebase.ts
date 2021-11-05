import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
import { getFirestore } from 'firebase/firestore'
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'

import { CONFIG } from 'CONFIG'

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
