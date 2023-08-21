// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAaCYBTJhu98XlxsH8Wp_UER_Bk6Cqq3RM",
  authDomain: "react-1-cd544.firebaseapp.com",
  databaseURL: "https://react-1-cd544-default-rtdb.firebaseio.com",
  projectId: "react-1-cd544",
  storageBucket: "react-1-cd544.appspot.com",
  messagingSenderId: "639202796159",
  appId: "1:639202796159:web:7a22cc1fad14da9095554a"
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);

export default firebase;