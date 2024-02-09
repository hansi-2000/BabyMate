import { initializeApp } from "firebase/app";
import { getFirestore, initializeFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCajGINK3iiWiiAA5Da79izPz5fY4o1YQc",
    authDomain: "babymate-a5667.firebaseapp.com",
    projectId: "babymate-a5667",
    storageBucket: "babymate-a5667.appspot.com",
    messagingSenderId: "226983846199",
    appId: "1:226983846199:web:89ab9d77bff3718e713ab2",
    measurementId: "G-RSKHBSTYXP"
  };

const app = initializeApp(firebaseConfig);

//const auth = getAuth(app)

const db = initializeFirestore(app, {
experimentalForceLongPolling: true
})

export { db };