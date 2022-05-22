// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyArxEf-uSMb31fQso2zXFH-1tEux2emD0A",
    authDomain: "flying-drone-eb0c2.firebaseapp.com",
    projectId: "flying-drone-eb0c2",
    storageBucket: "flying-drone-eb0c2.appspot.com",
    messagingSenderId: "20678496875",
    appId: "1:20678496875:web:25bf39dd0968668649572e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth;