import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAfs0l2MWdacmD8kA7sbTeBTrfYnK9wTpE",
  authDomain: "fitnessreact-fe807.firebaseapp.com",
  projectId: "fitnessreact-fe807",
  storageBucket: "fitnessreact-fe807.appspot.com",
  messagingSenderId: "433762938711",
  appId: "1:433762938711:web:4f7f105985df646f811812",
  measurementId: "G-V4JQXDJKHE"
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db; 