
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyCTQBW4nRmAtk9oG-2TWZIsxzs07ppIH54",
  authDomain: "tamara-63390.firebaseapp.com",
  projectId: "tamara-63390",
  storageBucket: "tamara-63390.firebasestorage.app",
  messagingSenderId: "987599955545",
  appId: "1:987599955545:web:2220f796f383b2ba973348"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
