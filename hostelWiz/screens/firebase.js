const firebase = require('firebase');

const config = {
    apiKey: 'AIzaSyC97f1zYRqT1rrqBmhC_JHn2sNcQC-YBpE',
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
    projectId: "hostelwiz",
    storageBucket: "hostelwiz.appspot.com",
    messagingSenderId: "1096528947592",
    appId: "1:1096528947592:android:1572ae8adf302c1ec0b23d",
    measurementId: "G-CED24MJ2C3"
}

export default !firebase.apps.length ? firebase.initializeApp(config) : firebase.app();