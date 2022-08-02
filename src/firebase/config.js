// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';
import { getEnvironmets } from "../helpers";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


const {
  VITE_APIKEY,
  VITE_AUTHDOMAIN,
  VITE_PROJECTID,
  VITE_STORAGEBUCKET,
  VITE_MESSAGINGSENDERID,
  VITE_APPID,
} = getEnvironmets();


// console.log(process.env);
// console.log( import.meta.env );

// Your web app's Firebase configuration
// Dev/Prov
// const firebaseConfig = {
  // apiKey: "AIzaSyCOEXJvIN-bzKocNoRuIVdNp2-iozNfWro",
  // authDomain: "cursos-react-d6863.firebaseapp.com",
  // projectId: "cursos-react-d6863",
  // storageBucket: "cursos-react-d6863.appspot.com",
  // messagingSenderId: "749038575939",
  // appId: "1:749038575939:web:5cf6dd4c9721b217ba0ff6"
// };

//Testing
// const firebaseConfig = {
//   apiKey: "AIzaSyDoUfCsJHFcTAXcyJQyabm2piPHJUfSvLc",
//   authDomain: "react-proyect-udemy.firebaseapp.com",
//   projectId: "react-proyect-udemy",
//   storageBucket: "react-proyect-udemy.appspot.com",
//   messagingSenderId: "785608704840",
//   appId: "1:785608704840:web:1c405c9331dcb2d8b4297d"
// };

const firebaseConfig = {
  apiKey: VITE_APIKEY,
  authDomain: VITE_AUTHDOMAIN,
  projectId: VITE_PROJECTID,
  storageBucket: VITE_STORAGEBUCKET,
  messagingSenderId: VITE_MESSAGINGSENDERID,
  appId: VITE_APPID,
};

console.log(firebaseConfig)

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);

export const FirebaseAuth = getAuth( FirebaseApp );

export const FirebaseDB = getFirestore( FirebaseApp )
