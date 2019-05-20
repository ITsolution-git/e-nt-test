// This will intialize as singleton, hence do not need to export it
// TODO: Update firebase rule
import * as firebase from 'firebase';
import 'firebase/firestore';

firebase.initializeApp({
    apiKey: "AIzaSyBpWqe0rjAKi12o7awAb_VXsHc7hnOXGcI",
    authDomain: "entrewithoutflamelink-1e01e.firebaseapp.com",
    databaseURL: "https://entrewithoutflamelink-1e01e.firebaseio.com",
    projectId: "entrewithoutflamelink-1e01e",
    storageBucket: "entrewithoutflamelink-1e01e.appspot.com",
    messagingSenderId: "787220197816",
    appId: "1:787220197816:web:9f3118b44bd66b25"
})

const db = firebase.firestore()


export default db