// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-homescape.firebaseapp.com",
  projectId: "mern-homescape",
  storageBucket: "mern-homescape.appspot.com",
  messagingSenderId: "553377484665",
  appId: "1:553377484665:web:9ea3f083aabf0e6ce9a9a8"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);