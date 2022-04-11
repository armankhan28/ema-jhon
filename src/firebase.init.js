// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDNty4Q59YeH6V_XDjnsQRCj0I-d6LYXVk",
  authDomain: "ema-john-cd592.firebaseapp.com",
  projectId: "ema-john-cd592",
  storageBucket: "ema-john-cd592.appspot.com",
  messagingSenderId: "818429874151",
  appId: "1:818429874151:web:b07b32221f910dd244f742"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;