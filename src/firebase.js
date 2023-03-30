//do not make any changes to this file
import { initializeApp } from "firebase/app";
import {getAuth,
createUserWithEmailAndPassword,
signInWithEmailAndPassword} from 'firebase/auth';
import {getStorage} from 'firebase/storage'
import 'firebase/compat/firestore';
import {collection,addDoc,serverTimestamp} from 'firebase/firestore'
import { getFirestore } from 'firebase/firestore';
const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY ,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN ,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID
};
const app = initializeApp(firebaseConfig);
 const auth = getAuth(app);
const db = getFirestore();
const storage = getStorage(app)
export {storage,auth,db,collection,addDoc,serverTimestamp,createUserWithEmailAndPassword,signInWithEmailAndPassword} 
export default app;
