// Import the functions you need from the SDKs you need
//import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCrwmiyy9kgkxncnBa4jX1zUcjEP74hkBE",
  authDomain: "news-app-10de1.firebaseapp.com",
  projectId: "news-app-10de1",
  storageBucket: "news-app-10de1.appspot.com",
  messagingSenderId: "47217425735",
  appId: "1:47217425735:web:ad9210f6e482a151d4a062",
  measurementId: "G-5LWPFER1RX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

export const auth = getAuth(app);
export default app;
