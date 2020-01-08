import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBkv0O3rAc4ZX1RZuJULsm_fNWOYKKyw90",
  authDomain: "shop-db-f79c8.firebaseapp.com",
  databaseURL: "https://shop-db-f79c8.firebaseio.com",
  projectId: "shop-db-f79c8",
  storageBucket: "shop-db-f79c8.appspot.com",
  messagingSenderId: "1098498202261",
  appId: "1:1098498202261:web:4441996f14cb9563d8199c",
  measurementId: "G-2HNPMTYSHH"
};

export const createUserProfieDocument = async (userAuth, additionalData) => {
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
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();

export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
