// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCCPUHRwMHDOcjzSzUcdXSjtY3DCGpEppU",
  authDomain: "furnipart-818be.firebaseapp.com",
  projectId: "furnipart-818be",
  storageBucket: "furnipart-818be.firebasestorage.app",
  messagingSenderId: "1017120655512",
  appId: "1:1017120655512:web:51090c967be1b8427be8ed",
  measurementId: "G-7E11BZY3G4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
const analytics = getAnalytics(app);
