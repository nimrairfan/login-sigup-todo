import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore"
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC-RylAM1zDDa4USwirDuvm9hwsyOChgZg",
  authDomain: "firestore-todo-c1b47.firebaseapp.com",
  projectId: "firestore-todo-c1b47",
  storageBucket: "firestore-todo-c1b47.appspot.com",
  messagingSenderId: "1067434344861",
  appId: "1:1067434344861:web:01eb37c0b3fcc7a6d36f74"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth();
const db =  getFirestore();

export {db , auth}

