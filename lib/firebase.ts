// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD9SqERKu4l4z5AOofxa5-ObAcSebNFSkk",
  authDomain: "times-3cb28.firebaseapp.com",
  projectId: "times-3cb28",
  storageBucket: "times-3cb28.appspot.com",
  messagingSenderId: "402360576261",
  appId: "1:402360576261:web:07002baf9bfa91c0caef6c",
  measurementId: "G-ENBWBNNVDB"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const googleAuthProvider = new GoogleAuthProvider();