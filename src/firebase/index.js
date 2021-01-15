import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/storage";
import "firebase/auth";

const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyB2trjB2tfgk-V8TeUTNnNy1QwyewlUXK4",
    authDomain: "main-page-b5c0f.firebaseapp.com",
    databaseURL: "https://main-page-b5c0f.firebaseio.com",
    projectId: "main-page-b5c0f",
    storageBucket: "main-page-b5c0f.appspot.com",
    messagingSenderId: "21146739247",
    appId: "1:21146739247:web:f7b106f2aebb2c0c501cda",
    measurementId: "G-6EWWKJG19H"
});

export { firebaseConfig as firebase };

export const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);