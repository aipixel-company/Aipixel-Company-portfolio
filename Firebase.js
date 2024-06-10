// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAbpCOis8aq0jZUYcpxsEKqbpki6b0r9Kk",
  authDomain: "ai-pixel-portfolio.firebaseapp.com",
  projectId: "ai-pixel-portfolio",
  storageBucket: "ai-pixel-portfolio.appspot.com",
  messagingSenderId: "865786350405",
  appId: "1:865786350405:web:ce1abdc940bc38ca024c2c",
  measurementId: "G-CFNZ88B6J2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const storage = getStorage(app);


export { db, storage };