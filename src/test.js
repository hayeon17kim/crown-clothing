import firebase from "firebase/app";
import "firebase/firestore";

const firestore = firebase.firestore();

firestore
  .collection("users")
  .doc("q4X0uvU2F6HTAkDat7AZ")
  .collection("cartItems")
  .doc("6hVE4YHzDhAnZB9I8mZT");

firebase.doc("/users/q4X0uvU2F6HTAkDat7AZ/cartItems/6hVE4YHzDhAnZB9I8mZT");
