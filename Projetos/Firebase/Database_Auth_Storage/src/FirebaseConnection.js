import firebase from 'firebase';

let config = {
    apiKey: "AIzaSyAsnhRngioHpbBxUlX0ZmYHPlDdS41xQUA",
    authDomain: "projeto-teste-29a27.firebaseapp.com",
    databaseURL: "https://projeto-teste-29a27.firebaseio.com",
    projectId: "projeto-teste-29a27",
    storageBucket: "projeto-teste-29a27.appspot.com",
    messagingSenderId: "1026685178387"
  };
  firebase.initializeApp(config);
  //firebase.auth().signInWithEmailAndPassword('douglaspoma@yahoo.com','123456');

  export default firebase;