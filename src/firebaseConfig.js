import { initializeApp } from 'firebase/app';
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
        apiKey: "AIzaSyDz_TNd-Kqbju-ChvgOpZwbN8aWxEBaiEY",
        authDomain: "tinder-clone-aa405.firebaseapp.com",
        databaseURL: "https://tinder-clone-aa405-default-rtdb.firebaseio.com",
        projectId: "tinder-clone-aa405",
        storageBucket: "tinder-clone-aa405.appspot.com",
        messagingSenderId: "544340436489",
        appId: "1:544340436489:web:ed9232c15cb8b590d47ad8",
        measurementId: "G-1Y5WTKLQQ8"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);