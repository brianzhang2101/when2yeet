// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/database";
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCUA3BSE1df9oLYeLjpZBwO9WPVA5nxRx8",
  authDomain: "when2yeet.firebaseapp.com",
  databaseURL: "https://when2yeet-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "when2yeet",
  storageBucket: "when2yeet.appspot.com",
  messagingSenderId: "284804329181",
  appId: "1:284804329181:web:7da6859294599afbf97534",
  measurementId: "G-RMBXVBVZCW"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export default firebase;