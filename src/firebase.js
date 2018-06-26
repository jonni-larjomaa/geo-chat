import firebase from 'firebase'

const config = {
    apiKey: "apiKey",
    authDomain: "domain",
    databaseURL: "db-url",
    projectId: "firebase-project-id",
    storageBucket: "bucketid",
    messagingSenderId: "666777888999"
  };

firebase.initializeApp(config);

export default firebase;
