import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/storage";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBQ42uRUpb0PeLJVhpcdoZicmEUMXYCbR8",
  authDomain: "reels-e69ac.firebaseapp.com",
  projectId: "reels-e69ac",
  storageBucket: "reels-e69ac.appspot.com",
  messagingSenderId: "469355742782",
  appId: "1:469355742782:web:7dbf62fb3a4c3b665d336f"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();

const firestore = firebase.firestore();
export const database = {
    users : firestore.collection("users"),
    getTimeStamp: firebase.firestore.FieldValue.getTimeStamp
}

export const storage = firestore.storage()