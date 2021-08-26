import { initializeApp } from 'firebase/app';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {

  apiKey: "AIzaSyBMT5N2jbclgAah4--QFIf90vaAjp67TZE",

  authDomain: "crwn-clothing-1bf6b.firebaseapp.com",

  projectId: "crwn-clothing-1bf6b",

  storageBucket: "crwn-clothing-1bf6b.appspot.com",

  messagingSenderId: "699211372972",

  appId: "1:699211372972:web:cc8c72b5c870a536138209",

  measurementId: "G-BTD1HWK3G8"

};

initializeApp(firebaseConfig)

export const auth = getAuth()
export const db = getFirestore() 

const provider = new GoogleAuthProvider()
provider.setCustomParameters({
    'prompt': 'select_account'
})

export const signInWithGoogle = () => signInWithPopup(auth, provider)