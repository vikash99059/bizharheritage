// firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyC56IvgnrSNxUu6hosVOF0AUcfXiofKDg0",
  authDomain: "jharkhand-heritage-blog.firebaseapp.com",
  projectId: "jharkhand-heritage-blog",
  storageBucket: "jharkhand-heritage-blog.firebasestorage.app",
  messagingSenderId: "804774651468",
  appId: "1:804774651468:android:cbece6af3a836ec3ba76e9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const storage = getStorage(app);
