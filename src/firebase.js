import firebase from 'firebase/compat/app';
import "firebase/auth";
import "firebase/firestore";

const app = firebase.initializeApp({
  //   apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  //   authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  //   projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  //   storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  //   messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  //   appId: process.env.REACT_APP_FIREBASE_APP_ID,

  apiKey: "AIzaSyBpXP3yJgc5CLPJRYLrRHLxRStFrC81nN8",
  authDomain: "wheres-waldo-a7d26.firebaseapp.com",
  projectId: "wheres-waldo-a7d26",
  storageBucket: "wheres-waldo-a7d26.appspot.com",
  messagingSenderId: "648724755598",
  appId: "1:648724755598:web:0d3191e22d1acbe52f85df",
  measurementId: "G-D52M52V846",
});

export const firestore = firebase.firestore();
export const auth = app.auth();
export default app;