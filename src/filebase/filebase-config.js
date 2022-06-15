import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyC2VhszX7dCQiUKTl8V60_KIJyivzc3mSU",
  authDomain: "meta-news-f30ce.firebaseapp.com",
  projectId: "meta-news-f30ce",
  storageBucket: "meta-news-f30ce.appspot.com",
  messagingSenderId: "639719954946",
  appId: "1:639719954946:web:83bebba1b5af050126a51b",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
