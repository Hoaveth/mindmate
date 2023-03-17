import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyBfDr_WcixrDS1xNSHLuugn1AOustHWMYc",
  authDomain: "mindmate-3a39d.firebaseapp.com",
  projectId: "mindmate-3a39d",
  storageBucket: "mindmate-3a39d.appspot.com",
  messagingSenderId: "231488947370",
  appId: "1:231488947370:web:c8b85a66f0fbab9051bcd3",
  measurementId: "G-8J3MCECE4R",
};

// Initialize Firebase app
const app = initializeApp(firebaseConfig);

export { app };
