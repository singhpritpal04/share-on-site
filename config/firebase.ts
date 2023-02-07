// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBd7N1F_pnkfwEdXqnYd4UN_hoUWejDseA",
  authDomain: "share-on-site-6533a.firebaseapp.com",
  projectId: "share-on-site-6533a",
  storageBucket: "share-on-site-6533a.appspot.com",
  messagingSenderId: "402647774423",
  appId: "1:402647774423:web:c61c457c90ebbd5beaec92"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const provider = new GoogleAuthProvider();
