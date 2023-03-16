// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCzqQAgiUh2d3zPLSAQOjxrHljGuclIpH4",
  authDomain: "aqous-client.firebaseapp.com",
  projectId: "aqous-client",
  storageBucket: "aqous-client.appspot.com",
  messagingSenderId: "696902821721",
  appId: "1:696902821721:web:19ec6e585cad0dea358e48"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();
export default app;