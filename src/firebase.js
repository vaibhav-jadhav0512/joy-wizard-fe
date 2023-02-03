import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBLNkerXiz0c7CVlqqlFpNRVIMQfm-M_a8",
  authDomain: "joy-wizard.firebaseapp.com",
  projectId: "joy-wizard",
  storageBucket: "joy-wizard.appspot.com",
  messagingSenderId: "388175245689",
  appId: "1:388175245689:web:71cf1c8becbcdf4dae7fa8",
  measurementId: "G-7EYPK7NX76"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
