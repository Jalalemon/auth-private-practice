// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAa51cLJZpEcXnQCP2fUl8vCwuyuJDMg5U",
  authDomain: "auth-private-route-practice.firebaseapp.com",
  projectId: "auth-private-route-practice",
  storageBucket: "auth-private-route-practice.appspot.com",
  messagingSenderId: "85524111342",
  appId: "1:85524111342:web:d2ec746e8bf9a1a55fb8ff"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app