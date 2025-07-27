// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDGrNXp1GCHF_Nk17QJziVe0fGaoEEQ2VA",
  authDomain: "segredo-de-familia.firebaseapp.com",
  projectId: "segredo-de-familia",
  storageBucket: "segredo-de-familia.firebasestorage.app",
  messagingSenderId: "774045208625",
  appId: "1:774045208625:web:ce0c2c39f3574e6a6e8510"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
export const db = getFirestore(app)

