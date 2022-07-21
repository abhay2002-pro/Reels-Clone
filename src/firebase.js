import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/storage";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCcn-R8mJ5s5kDHcCQphXTbcoPurQGfy8I",
  authDomain: "reels-37a7f.firebaseapp.com",
  projectId: "reels-37a7f",
  storageBucket: "reels-37a7f.appspot.com",
  messagingSenderId: "509101681918",
  appId: "1:509101681918:web:38c198e2958d9f420ac9af"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();

const firestore = firebase.firestore();
export const database = {
  users: firestore.collection("users"),
  getTimeStamp: firebase.firestore.FieldValue.serverTimestamp,
};

export const storage = firebase.storage();
