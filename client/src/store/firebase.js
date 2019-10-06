import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyDTD_BATIdzSmujWb7qq89tjnexN2JoaYc",
  authDomain: "couvertown-a124b.firebaseapp.com",
  databaseURL: "https://couvertown-a124b.firebaseio.com",
  projectId: "couvertown-a124b",
  storageBucket: "couvertown-a124b.appspot.com",
  messagingSenderId: "1025064350973",
  appId: "1:1025064350973:web:748bd44123a086353b7a94"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.database();

export { db };

export default firebase;
