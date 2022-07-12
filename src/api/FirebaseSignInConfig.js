import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBSJlyqcfImaFLsSCwJ_jz447BlfxtsbLk",
  authDomain: "cinema-verse.firebaseapp.com",
  databaseURL: "https://cinema-verse-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "cinema-verse",
  storageBucket: "cinema-verse.appspot.com",
  messagingSenderId: "621161934386",
  appId: "1:621161934386:web:4c52b25cfc228799ad162b"
};

const app = initializeApp(firebaseConfig);

export const authentication = getAuth(app);
