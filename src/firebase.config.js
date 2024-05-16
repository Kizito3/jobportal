// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

const apiKey = import.meta.env.apiKey;
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: apiKey,
  authDomain: "my-project-73049-1686069137164.firebaseapp.com",
  projectId: "my-project-73049-1686069137164",
  storageBucket: "my-project-73049-1686069137164.appspot.com",
  messagingSenderId: "150843199573",
  appId: "1:150843199573:web:49ded1d013a9b8c8a204dc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export {db};