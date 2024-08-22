import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDg3mx3YT8QYxchPuSPS3V0WqVAt2OGfa0",
  authDomain: "netflix-clone-f4d2a.firebaseapp.com",
  projectId: "netflix-clone-f4d2a",
  storageBucket: "netflix-clone-f4d2a.appspot.com",
  messagingSenderId: "345146365888",
  appId: "1:345146365888:web:dc8c602dd5b00221729a25",
  measurementId: "G-1FYY61C38G",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

export const db = getFirestore(firebaseApp);
export const auth = getAuth(firebaseApp);
