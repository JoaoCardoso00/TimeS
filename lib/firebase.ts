// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { collection, getDocs, getFirestore, limit, query, where } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD9SqERKu4l4z5AOofxa5-ObAcSebNFSkk",
  authDomain: "times-3cb28.firebaseapp.com",
  projectId: "times-3cb28",
  storageBucket: "times-3cb28.appspot.com",
  messagingSenderId: "402360576261",
  appId: "1:402360576261:web:07002baf9bfa91c0caef6c",
  measurementId: "G-ENBWBNNVDB",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const googleAuthProvider = new GoogleAuthProvider();
export const firestore = getFirestore(app);

export async function getUserWithUsername(username: string) {
    const usersRef = collection(firestore, "users");
    const q = query(usersRef, where("username", "==", username), limit(1));
    const userDoc = getDocs(q);
    return (await userDoc).docs[0];
}