// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBjuNMW1lMXkXM1Zz9eqHRfQuxM1F7Nd1s",
  authDomain: "todo-app-github-6a554.firebaseapp.com",
  projectId: "todo-app-github-6a554",
  storageBucket: "todo-app-github-6a554.appspot.com",
  messagingSenderId: "591296535073",
  appId: "1:591296535073:web:9d8a7079c88caa8314a160",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
