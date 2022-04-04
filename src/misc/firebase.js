import firebase from 'firebase/app';
import 'firebase/auth';
// import firebase from 'firebase/compat/app';
// import 'firebase/compat/auth';
import 'firebase/database';

const config={
    apiKey: "AIzaSyDD9CAyoZqbcgKWQHYNtxN3rT8R9a77yZ8",
    authDomain: "chat-web-app-36a74.firebaseapp.com",
    projectId: "chat-web-app-36a74",
    storageBucket: "chat-web-app-36a74.appspot.com",
    messagingSenderId: "579243334986",
    appId: "1:579243334986:web:7e8a7c6699527ae41af5b3"
}

const app=firebase.initializeApp(config);

export const auth=app.auth();
export const database=app.database();