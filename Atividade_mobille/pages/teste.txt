// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBt2DGeUrP09aT0d5Z_s-_xAiTtVHI_ZN8",
  authDomain: "atividademobile-42b34.firebaseapp.com",
  projectId: "atividademobile-42b34",
  storageBucket: "atividademobile-42b34.firebasestorage.app",
  messagingSenderId: "724741279733",
  appId: "1:724741279733:web:b226a98c864fef1ae69abc",
  measurementId: "G-G7MQH6NSL3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);