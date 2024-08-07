// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCiSlOiKSQG5iPJGZgM_keYrAkcwZoXWYQ",
  authDomain: "inventorymanagement-95d47.firebaseapp.com",
  projectId: "inventorymanagement-95d47",
  storageBucket: "inventorymanagement-95d47.appspot.com",
  messagingSenderId: "323000975123",
  appId: "1:323000975123:web:2528e928e947f945c9e4e6",
  measurementId: "G-GCM6D225DL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const firestore = getFirestore(app)

export {firestore}