import { initializeApp } from 'firebase/app';
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCi6BcVZC9HTuxm0xpaC7jfGuMspakJDaA",
  authDomain: "newchildrensapp.firebaseapp.com",
  projectId: "newchildrensapp",
  storageBucket: "newchildrensapp.appspot.com",
  messagingSenderId: "1029875390313",
  appId: "1:1029875390313:web:4890cc15a37d7a4e070ff8",
  measurementId: "G-F182WK35CR"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);