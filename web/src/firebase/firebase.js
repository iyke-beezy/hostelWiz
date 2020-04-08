import firebase from 'firebase/app';
import 'firebase/auth';
//import 'firebase/database';

const app = firebase.initializeApp({
 apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
    projectId: "hostelwiz",
    storageBucket: "hostelwiz.appspot.com",
    messagingSenderId: "1096528947592",
    appId: "1:1096528947592:web:d18a691e334a52c2c0b23d",
    measurementId: "G-CED24MJ2C3"
  });
  
  export default app;