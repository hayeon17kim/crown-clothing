import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCUT38eumMo6TLoj9x6qGfiv66sujoYcaY",
    authDomain: "crwn-db-ee439.firebaseapp.com",
    databaseURL: "https://crwn-db-ee439.firebaseio.com",
    projectId: "crwn-db-ee439",
    storageBucket: "crwn-db-ee439.appspot.com",
    messagingSenderId: "475027208704",
    appId: "1:475027208704:web:602376347d67135d94b6e5",
    measurementId: "G-T87YZNSMH2"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({propmt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;