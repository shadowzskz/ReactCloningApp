// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import firebase from "firebase/app";

// Add the Firebase services that you want to use
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDpOPL7USMZKiuvu3CtzG2Jdt8620v8oEk",
    authDomain: "login-1bcd0.firebaseapp.com",
    databaseURL: "https://login-1bcd0-default-rtdb.firebaseio.com",
    projectId: "login-1bcd0",
    storageBucket: "login-1bcd0.appspot.com",
    messagingSenderId: "114970673372",
    appId: "1:114970673372:web:bbce7766d9168c8dbcb419",
    measurementId: "G-7HL0BV5617"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();



export default firebase;
