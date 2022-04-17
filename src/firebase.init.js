// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBr2vNPE5Si64AzwLYaD01_G26y7DHdzpc",
    authDomain: "gym-edge-react.firebaseapp.com",
    projectId: "gym-edge-react",
    storageBucket: "gym-edge-react.appspot.com",
    messagingSenderId: "247275355491",
    appId: "1:247275355491:web:ddb8f457ec6b039b062756"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;