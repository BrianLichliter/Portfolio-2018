import firebase from 'firebase'
const config = {
    apiKey: "AIzaSyC6VPi9vl-JssSjFt3jnGnyTcIgp9FoDsc",
    authDomain: "brianlichliter-2018.firebaseapp.com",
    databaseURL: "https://brianlichliter-2018.firebaseio.com",
    projectId: "brianlichliter-2018",
    storageBucket: "brianlichliter-2018.appspot.com",
    messagingSenderId: "498128919855"
};
firebase.initializeApp(config);
export default firebase;