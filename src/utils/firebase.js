// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCzdu1UpYDObKD0NH9VDfSZvBkmt45V5ps",
  authDomain: "dev-netflix-1f8f3.firebaseapp.com",
  projectId: "dev-netflix-1f8f3",
  storageBucket: "dev-netflix-1f8f3.firebasestorage.app",
  messagingSenderId: "739341933270",
  appId: "1:739341933270:web:5eed110e8b22a9854f4777",
  measurementId: "G-YDX57B8ESM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app); 

export const auth = getAuth()