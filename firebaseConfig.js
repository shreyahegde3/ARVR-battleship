// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDGhA5GRlozar2JRW8LZVwDOeUDoc-dgmI",
  authDomain: "arvr-770e6.firebaseapp.com",
  databaseURL: "https://arvr-770e6-default-rtdb.firebaseio.com",
  projectId: "arvr-770e6",
  storageBucket: "arvr-770e6.firebasestorage.app",
  messagingSenderId: "240683720583",
  appId: "1:240683720583:web:1b24a8feea189bfea5bd22",
  measurementId: "G-Q0TQ28C1LV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);


export { database };