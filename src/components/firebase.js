
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDW2p3ndS4q2Euc0sTPisbnu-13nvZpO-8",
    authDomain: "task7-1p-b8fd7.firebaseapp.com",
    projectId: "task7-1p-b8fd7",
    storageBucket: "task7-1p-b8fd7.appspot.com",
    messagingSenderId: "243344362170",
    appId: "1:243344362170:web:f04a84ca8d70075a7e9083"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db };