// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA1TsBUutzQlzC-zjdPOSwMH_l43VLMJ2E",
    authDomain: "darks-gamers.firebaseapp.com",
    projectId: "darks-gamers",
    storageBucket: "darks-gamers.firebasestorage.app",
    messagingSenderId: "938521789544",
    appId: "1:938521789544:web:c4d77cdcf2ed415ad9a7dd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);