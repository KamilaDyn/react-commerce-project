import firebase from "firebase/app";

import "firebase/firestore";

const firestore = firebase.firestore();
firestore
  .collection("users")
  .doc("t8W3hB3SVOZAr67OH1rQ")
  .collection("cartItems")
  .doc("VbzmujZC1cCEeeoXbj2L");
