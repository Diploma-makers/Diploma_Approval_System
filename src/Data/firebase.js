import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getAuth, OAuthProvider  } from "firebase/auth";
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCla6ZIjYRMkNwYFntjWrNAagLswXcoh2E",
  authDomain: "diploma-approval-system.firebaseapp.com",
  databaseURL: "https://diploma-approval-system-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "diploma-approval-system",
  storageBucket: "diploma-approval-system.appspot.com",
  messagingSenderId: "183070933585",
  appId: "1:183070933585:web:a555a17cc9ea586bb6ae70",
  measurementId: "G-X30YBGXLMW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

const auth = getAuth(app);

const provider = new OAuthProvider('microsoft.com');

export { auth, db };