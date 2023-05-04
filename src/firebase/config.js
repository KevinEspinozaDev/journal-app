// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore/lite';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAD73GyTaSl5H-gEnDuN4sug8aSlQTZEA8",
  authDomain: "react-course-c63d1.firebaseapp.com",
  projectId: "react-course-c63d1",
  storageBucket: "react-course-c63d1.appspot.com",
  messagingSenderId: "244807446348",
  appId: "1:244807446348:web:2ff5cdf1ca38916125e9e9"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth (FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);