import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyAKNYAohp8mmoT4K600igeXuoX-NjLD9Go",
  authDomain: "meta365-d8280.firebaseapp.com",
  projectId: "meta365-d8280",
  storageBucket: "meta365-d8280.appspot.com",
  messagingSenderId: "590171599618",
  appId: "1:590171599618:web:6d79fe6affb42b8088481b",
  measurementId: "G-8EZSXL97DJ",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
