import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB0E9T9AZ6O2ftqWMUbUHiae7jIP-fw3Wk",
  authDomain: "clone-a3e69.firebaseapp.com",
  projectId: "clone-a3e69",
  storageBucket: "clone-a3e69.appspot.com",
  messagingSenderId: "388467404922",
  appId: "1:388467404922:web:19c5780724b6704b920bc3",
  measurementId: "G-0K7GYRF3QG"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

const auth = firebaseApp.auth()

export default auth;
