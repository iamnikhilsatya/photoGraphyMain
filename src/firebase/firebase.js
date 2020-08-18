import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyCUBIw60buThjrDtUL7mSE4X4TTJR9hvTk",
    authDomain: "photography-2e1ff.firebaseapp.com",
    databaseURL: "https://photography-2e1ff.firebaseio.com",
    projectId: "photography-2e1ff",
    storageBucket: "photography-2e1ff.appspot.com",
    messagingSenderId: "606561085958",
    appId: "1:606561085958:web:fba107c428e1c487603187"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase