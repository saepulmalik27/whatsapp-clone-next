import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBZYkSFoiWDP__IIT-KZxs5MYOWxzx4AlA",
    authDomain: "whatsapp-clone-a06be.firebaseapp.com",
    projectId: "whatsapp-clone-a06be",
    storageBucket: "whatsapp-clone-a06be.appspot.com",
    messagingSenderId: "648114972664",
    appId: "1:648114972664:web:17bc2513d0a61aecbad80d"
  };

  const app = firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

  const db = app.firestore();
  const auth = app.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {db, auth, provider};