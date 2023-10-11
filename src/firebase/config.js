// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBiWLiMTIQD0GXDSHIOvYktacrbx0iLM4g",
  authDomain: "react-cursos-bf67d.firebaseapp.com",
  projectId: "react-cursos-bf67d",
  storageBucket: "react-cursos-bf67d.appspot.com",
  messagingSenderId: "148167984071",
  appId: "1:148167984071:web:0d7444cf5faad87f9e8fe2"
};

// Initialize Firebase
export const FirebaseApp  = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth( FirebaseApp );
export const FirebaseDB   = getFirestore( FirebaseApp );