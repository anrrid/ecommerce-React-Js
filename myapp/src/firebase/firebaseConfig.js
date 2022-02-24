import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAMTgxRwOjar6tBx8YtNbVx5y8MBFHLU0U",
    authDomain: "my-store-63d97.firebaseapp.com",
    projectId: "my-store-63d97",
    storageBucket: "my-store-63d97.appspot.com",
    messagingSenderId: "845952512529",
    appId: "1:845952512529:web:af55f6377a63a96f07f7b0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)
