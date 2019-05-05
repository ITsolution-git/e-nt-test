import * as firebase from 'firebase';

const keys = {
    apiKey: "AIzaSyBJftud2hCntfz2w8fsYoJLWfci-z5e5SM",
    authDomain: "entre-app.firebaseapp.com",
    databaseURL: "https://entre-app.firebaseio.com",
    projectId: "entre-app",
    storageBucket: "entre-app.appspot.com",
    messagingSenderId: "270500852673",
    appId: "1:270500852673:web:e6d4a4617b899117"
}

firebase.initializeApp(keys);

firebase.auth().setPersistence(firebase.auth.Auth.Persistence.NONE);