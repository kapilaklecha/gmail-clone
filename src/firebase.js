import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAbl26C6LOJtu-j9MyQUijX-fSPKI3aZY8",
  authDomain: "clone-3c00b.firebaseapp.com",
  projectId: "clone-3c00b",
  storageBucket: "clone-3c00b.appspot.com",
  messagingSenderId: "966526465208",
  appId: "1:966526465208:web:b5eb6e4267f8e0ff80b04d",
};

const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
var provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
