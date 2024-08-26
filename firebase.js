// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCaz1keGnl5iHBUechaXhQh2vg7R8UVhUg",
  authDomain: "popcards-3b0b1.firebaseapp.com",
  projectId: "popcards-3b0b1",
  storageBucket: "popcards-3b0b1.appspot.com",
  messagingSenderId: "877257496369",
  appId: "1:877257496369:web:91a16fbfceadb579a7c210",
  measurementId: "G-J65VRJYEDZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
