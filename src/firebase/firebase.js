// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyBm6Wuj_g5CWQSi9cjGJd1_ZpgTa3rl1Mo",
  authDomain: "coally-20361.firebaseapp.com",
  projectId: "coally-20361",
  storageBucket: "coally-20361.appspot.com",
  messagingSenderId: "908083158683",
  appId: "1:908083158683:web:abc642bcb2883111db703e"
};
    

const app = initializeApp(firebaseConfig);
const db = getFirestore()

export {
    app,
    db
}