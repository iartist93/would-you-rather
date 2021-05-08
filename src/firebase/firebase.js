import firebase from "firebase/app";
import "firebase/auth";

//---------------------------------------------------
// connect firebase to the app

const firebaseConfig = {
  apiKey: "AIzaSyDyMpGr5nX2a3UNuZu5SlV1VATAjt4k_WA",
  authDomain: "would-you-rather-43abc.firebaseapp.com",
  projectId: "would-you-rather-43abc",
  storageBucket: "would-you-rather-43abc.appspot.com",
  messagingSenderId: "765077006774",
  appId: "1:765077006774:web:a6dcf905d0cd037e9ef917",
};

// don't initalize firebase twice
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
}
firebase.auth().useDeviceLanguage();

//---------------------------------------------------
// Google Authentication

const provider = new firebase.auth.GoogleAuthProvider();
export const handleSignin = () => {
  firebase.auth().signInWithRedirect(provider);
};

export const handleSignout = () => {
  firebase.auth().signOut();
};

//---------------------------------------------------
export { firebase };
