import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDUq_RKFFYCFbcYbRqPe5VhWF4Hl5Os6ec",
    authDomain: "amzon-clone-319a3.firebaseapp.com",
    projectId: "amzon-clone-319a3",
    storageBucket: "amzon-clone-319a3.appspot.com",
    messagingSenderId: "679672199476",
    appId: "1:679672199476:web:d04035ce7a2cd26061cd61",
    measurementId: "G-406NFFX1RW"
});

const auth = firebaseApp.auth();

export { auth }