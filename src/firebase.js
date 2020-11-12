import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyB-gMgZw4TtItqjbac5xRGj46UYVV4Tzr8",
  authDomain: "tinder-clone-eeea7.firebaseapp.com",
  databaseURL: "https://tinder-clone-eeea7.firebaseio.com",
  projectId: "tinder-clone-eeea7",
  storageBucket: "tinder-clone-eeea7.appspot.com",
  messagingSenderId: "873793283000",
  appId: "1:873793283000:web:1b3005fe3ce071e78be54d",
  measurementId: "G-FTHKPHNLPV",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const database = firebaseApp.firestore();

export default database;
