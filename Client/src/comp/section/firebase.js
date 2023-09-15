// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDkaD71nMJtAkPtr2JmbVKEGQ_DT8QN3_Q",
    authDomain: "orbit-c489c.firebaseapp.com",
    projectId: "orbit-c489c",
    storageBucket: "orbit-c489c.appspot.com",
    messagingSenderId: "823041692691",
    appId: "1:823041692691:web:e9bdeec2a45908a7f85be6",
    measurementId: "G-LG36VH0YKL"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth, GoogleAuthProvider };
export default app;
