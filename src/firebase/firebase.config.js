// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD4X6ms3wexa0j3YFomrWzscsjrFVUfJkU",
  authDomain: "workshop-portal.firebaseapp.com",
  projectId: "workshop-portal",
  storageBucket: "workshop-portal.appspot.com",
  messagingSenderId: "185580451369",
  appId: "1:185580451369:web:b2082ce51b63377e4a0e38"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;