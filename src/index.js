import "./style";
import App from "./components/app";
import firebase from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDfCqfQ7rsaF9pQnHTyCZhLf8MU9TjdD7M",
  authDomain: "all-affiliate-links.firebaseapp.com",
  databaseURL: "https://all-affiliate-links.firebaseio.com",
  projectId: "all-affiliate-links",
  storageBucket: "all-affiliate-links.appspot.com",
  messagingSenderId: "604962989767",
  appId: "1:604962989767:web:6d17d4586b534c6dc2c0e2",
  measurementId: "G-Q7W89H26KF",
};

firebase.initializeApp(firebaseConfig);

export default App;
