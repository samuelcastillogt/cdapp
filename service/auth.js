import { getAuth, GoogleAuthProvider, signInWithRedirect, getRedirectResult } from "firebase/auth"

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBTlIW_1NAeMeSDOdCc4AICtGxoYbaUyuw",
  authDomain: "directorio-bc73c.firebaseapp.com",
  databaseURL: "https://directorio-bc73c.firebaseio.com",
  projectId: "directorio-bc73c",
  storageBucket: "directorio-bc73c.appspot.com",
  messagingSenderId: "584037980083",
  appId: "1:584037980083:web:3d1a9f630024b3c3565dc6",
  measurementId: "G-PL8N063SXF"
};

const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider()

const auth = getAuth(app)
console.log(auth)
export const autentocacion = ()=>{
    getRedirectResult(auth)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access Google APIs.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;

    // The signed-in user info.
    const user = result.user;
    // IdP data available using getAdditionalUserInfo(result)
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });
}
