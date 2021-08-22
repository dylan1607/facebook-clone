import firebase from "firebase";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCkslkWg1xte5zhKwE-ef_LRoFBN7Rlqyw",
  authDomain: "facebook-1f413.firebaseapp.com",
  projectId: "facebook-1f413",
  storageBucket: "facebook-1f413.appspot.com",
  messagingSenderId: "1069520425903",
  appId: "1:1069520425903:web:ccd7e58d93bb389644155a",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
// const auth = firebase.auth();
const storage = firebase.storage();
export { db, storage };
