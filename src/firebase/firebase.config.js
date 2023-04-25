// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD-0M7MeSEz-mNLH7VanBJJiQsGce5uy4U",
    authDomain: "email-password-d9bd9.firebaseapp.com",
    projectId: "email-password-d9bd9",
    storageBucket: "email-password-d9bd9.appspot.com",
    messagingSenderId: "112237534059",
    appId: "1:112237534059:web:fb1e7329e6a794d0714a2e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export { auth }