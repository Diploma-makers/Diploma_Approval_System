import Firebase from "firebase/compat/app";
import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDKdPi1zJckz7V0XMbaxWSyB9LzfaNuhS8",
  authDomain: "diploma-project-ba3f8.firebaseapp.com",
  projectId: "diploma-project-ba3f8",
  storageBucket: "diploma-project-ba3f8.appspot.com",
  messagingSenderId: "802841404102",
  appId: "1:802841404102:web:d5ae6d024b249ed20cadc7",
  measurementId: "G-0TBNZ7YRDL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore();

const auth = getAuth(app);

export { auth, db };