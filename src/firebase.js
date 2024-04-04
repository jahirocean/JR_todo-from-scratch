import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyB6_ByotvWiTTZLyJGHI4DZd8oxk87Jq6g",
  authDomain: "todo-app-1e53f.firebaseapp.com",
  projectId: "todo-app-1e53f",
  storageBucket: "todo-app-1e53f.appspot.com",
  messagingSenderId: "513721671910",
  appId: "1:513721671910:web:59ee42c8784d0af6985b27",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
export { db };
