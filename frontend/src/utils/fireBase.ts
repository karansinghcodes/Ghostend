// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC28cknAAxVlrZ5JMz7aHWrl5PxNJBJyg8",
  authDomain: "ghostend-c3256.firebaseapp.com",
  projectId: "ghostend-c3256",
  storageBucket: "ghostend-c3256.firebasestorage.app",
  messagingSenderId: "4665723263",
  appId: "1:4665723263:web:2cd6de67005bfa21e3f24a",
  dataBaseURL: "https://ghostend-c3256-default-rtdb.firebaseio.com",
};

// Initialize Firebase


export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const googleProvider = new GoogleAuthProvider();