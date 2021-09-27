import { initializeApp } from 'firebase/app';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  updateEmail,
  updatePassword,
} from 'firebase/auth';

const firebaseApp = initializeApp({
  apiKey: "AIzaSyCY_wc2g5tFbcn1aLEGZd5xMcq1ee1F7ag",
  authDomain: "consfilm.firebaseapp.com",
  databaseURL: "https://consfilm-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "consfilm",
  storageBucket: "consfilm.appspot.com",
  messagingSenderId: "617384959728",
  appId: "1:617384959728:web:bd2fa9ac91328c629f6c35"
});

export const auth = getAuth();
export const createUser = createUserWithEmailAndPassword;
export const signInUser = signInWithEmailAndPassword;
export const resetPassword = sendPasswordResetEmail;
export const changeEmail = updateEmail;
export const changePassword = updatePassword;
export default firebaseApp;
