import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDrrB7r8XEIUqvb1vr1iAcGyQE60IvKKMY",
  authDomain: "jarlsy.firebaseapp.com",
  projectId: "jarlsy",
  storageBucket: "jarlsy.appspot.com",
  messagingSenderId: "83454434007",
  appId: "1:83454434007:web:10caf11b3e323b0e40ee92"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();
const auth = getAuth();
const storage = getStorage();

export { db, auth, storage };