// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD5cl97yubTfBJLKJ2mozAl5_3d-75YjKY",
  authDomain: "netflixgpt-af8b8.firebaseapp.com",
  projectId: "netflixgpt-af8b8",
  storageBucket: "netflixgpt-af8b8.firebasestorage.app",
  messagingSenderId: "44200641785",
  appId: "1:44200641785:web:a2c97a55c01f1307d50e28",
  measurementId: "G-H4PFTGPC4T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth =getAuth();