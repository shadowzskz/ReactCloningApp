import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBfujrZTAVQgsBqIFfabXFj-iliDU4RtjI",
    authDomain: "todo-app-cp-cfbec.firebaseapp.com",
    databaseURL: "https://todo-app-cp-cfbec.firebaseio.com",
    projectId: "todo-app-cp-cfbec",
    storageBucket: "todo-app-cp-cfbec.appspot.com",
    messagingSenderId: "232933438013",
    appId: "1:232933438013:web:754b2165d9a327f9887054",
    measurementId: "G-VT2ZFZL1YS"
});

const db = firebaseApp.firestore();


export default db;