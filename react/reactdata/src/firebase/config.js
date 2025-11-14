// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBs_E7rKC-99q86hKm5WSExF-erZonWfPg",
  authDomain: "reactfirebase-51a61.firebaseapp.com",
  projectId: "reactfirebase-51a61",
  storageBucket: "reactfirebase-51a61.firebasestorage.app",
  messagingSenderId: "585506152088",
  appId: "1:585506152088:web:2a0c1fd6bbc48f44e5faed"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);