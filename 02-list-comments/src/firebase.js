import firebase from 'firebase/app'
import 'firebase/database'


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAsMjwajiPs5z06UukMGe9ub_rT1J9Jo6s",
  authDomain: "reactjs-app-comments.firebaseapp.com",
  databaseURL: "https://reactjs-app-comments.firebaseio.com",
  projectId: "reactjs-app-comments",
  storageBucket: "reactjs-app-comments.appspot.com",
  messagingSenderId: "325751674555",
  appId: "1:325751674555:web:c46dbfb71b8db6ad"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const database = firebase.database()