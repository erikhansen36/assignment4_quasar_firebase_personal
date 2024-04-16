import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

import {initializeApp} from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAaBAvZCETZSmEKrCfYpwrNUWHPRLkjQY4",
  authDomain: "quasartodolist-b3fb6.firebaseapp.com",
  projectId: "quasartodolist-b3fb6",
  storageBucket: "quasartodolist-b3fb6.appspot.com",
  messagingSenderId: "274900089237",
  appId: "1:274900089237:web:424f1b6ab0b83d74325e9c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = firebase.initializeApp(firebaseConfig);
export default db.firestore();
