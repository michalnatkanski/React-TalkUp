import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDbasq8COM6xN640eohMu2eyhNyEW2zy8s",
    authDomain: "talk-up-6e5af.firebaseapp.com",
    projectId: "talk-up-6e5af",
    storageBucket: "talk-up-6e5af.appspot.com",
    messagingSenderId: "610336184314",
    appId: "1:610336184314:web:35b1a759fbd7b76826f643"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, db };