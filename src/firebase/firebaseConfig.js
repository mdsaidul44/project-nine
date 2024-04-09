// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCy5TGmwWIw6l1B2zZdJJmQGC_VDmCSm8w",
  authDomain: "my-firebase-assignment-nine.firebaseapp.com",
  projectId: "my-firebase-assignment-nine",
  storageBucket: "my-firebase-assignment-nine.appspot.com",
  messagingSenderId: "454765775408",
  appId: "1:454765775408:web:c9d74c7adeb019a6a6bbf5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth