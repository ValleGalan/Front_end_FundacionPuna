import { getAuth, GoogleAuthProvider } from 'firebase/auth'
import { initializeApp } from "firebase/app";
import { getEvn } from "./getEnv";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: getEvn('VITE_FIREBASE_API'),
    authDomain: "blogfundacionpuna.firebaseapp.com",
    projectId: "blogfundacionpuna",
    storageBucket: "blogfundacionpuna.firebasestorage.app",
    messagingSenderId: "622683123828",
    appId: "1:622683123828:web:9c892ec952de2991f4e121",
    measurementId: "G-RHMHBF6PXV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)
const provider = new GoogleAuthProvider()

export { auth, provider }