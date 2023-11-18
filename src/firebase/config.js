import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyD16pB4Nzwc0qKCleWo1Sn0pc_cGfcYiKI",
  authDomain: "where-to-shop-ec3b4.firebaseapp.com",
  projectId: "where-to-shop-ec3b4",
  storageBucket: "where-to-shop-ec3b4.appspot.com",
  messagingSenderId: "520494955864",
  appId: "1:520494955864:web:0a9b3a284d08f02b09b92d",
  measurementId: "G-ETB2JNQ75L"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const store = getStorage(app);

export const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({prompt: 'select_account'})