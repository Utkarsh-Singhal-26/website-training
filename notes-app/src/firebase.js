import { initializeApp } from "firebase/app";
import { getFirestore, collection } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyB_BeBtnn7scQhjTqCkWyCg-B7nuOTY14A",
    authDomain: "react-notes-app-2604.firebaseapp.com",
    projectId: "react-notes-app-2604",
    storageBucket: "react-notes-app-2604.appspot.com",
    messagingSenderId: "313324157782",
    appId: "1:313324157782:web:eece96744021ca4647b4f7"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const notesCollection = collection(db, "notes")
