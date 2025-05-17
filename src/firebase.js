import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAs2cmgKb3WU9xAyUNQsXLBeGK9-wG_cto",
  authDomain: "mbti-guide-ba504.firebaseapp.com",
  projectId: "mbti-guide-ba504",
  storageBucket: "mbti-guide-ba504.firebasestorage.app",
  messagingSenderId: "715567293884",
  appId: "1:715567293884:web:ed073df7478eab4031b7b9",
  measurementId: "G-XXJ5G8W867"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();