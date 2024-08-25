// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getAnalytics } from "firebase/analytics"
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBySxpIkGhZHwfk5CE_Sp8wI7UDbTw-Oxk",
  authDomain: "popcards-3932f.firebaseapp.com",
  projectId: "popcards-3932f",
  storageBucket: "popcards-3932f.appspot.com",
  messagingSenderId: "142592127900",
  appId: "1:142592127900:web:4ee7d31e00287875808e59",
  measurementId: "G-97MY4R6TXN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)
const db = getFirestore(app)

export {db}