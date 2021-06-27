import firebase from "firebase/app"
import "firebase/firestore"
import "firebase/auth"


var fbConfig = {
  apiKey: "AIzaSyDtSvwB6RKDUhRBn0ohY-DnCT9GuxeA1sQ",
  authDomain: "blog-60273.firebaseapp.com",
  projectId: "blog-60273",
  storageBucket: "blog-60273.appspot.com",
  messagingSenderId: "13995340913",
  appId: "1:13995340913:web:001b2b1bd0139db0c3d7d0",
  measurementId: "G-38XSZL9XL8"
  };
  // Initialize Firebase
  firebase.initializeApp(fbConfig);

  firebase.firestore().settings({timestampsInSnapshots: true})

  export default firebase;