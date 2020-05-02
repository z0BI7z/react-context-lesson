import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyCHMOvmqx-YEOK_x--swQMJB-ZQ6v1mpy8",
  authDomain: "react-shop-app-4ec34.firebaseapp.com",
  databaseURL: "https://react-shop-app-4ec34.firebaseio.com",
  projectId: "react-shop-app-4ec34",
  storageBucket: "react-shop-app-4ec34.appspot.com",
  messagingSenderId: "616528757495",
  appId: "1:616528757495:web:2fd111618ca51aaffb89f2",
  measurementId: "G-FCDXTXFWQW"
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
