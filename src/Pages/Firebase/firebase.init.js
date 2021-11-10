import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

const initializeFirebaseAuth = () => {
    initializeApp(firebaseConfig);
}

export default initializeFirebaseAuth;