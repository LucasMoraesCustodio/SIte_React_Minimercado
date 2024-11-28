// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

import { getAnalytics } from "firebase/analytics";

import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

export const firebaseConfig = {

  apiKey: "AIzaSyCBa5NzHXl_50l-31beQexF0cSFniYAovc",

  authDomain: "mercado-autonomo.firebaseapp.com",

  projectId: "mercado-autonomo",

  storageBucket: "mercado-autonomo.appspot.com", // Corrigir o valor do storageBucket

  messagingSenderId: "1028394355816",

  appId: "1:1028394355816:web:62c7acc735f520e3c5ffdd",

  measurementId: "G-6DPJ6DFD3P"

};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app); // Remover esta linha se não precisar de Analytics
const db = getFirestore(app);

export { app, db };