import firebase from 'firebase/compat/app';
import 'firebase/compat/storage';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBNt2p4cKBzHU7oeMKjnRVFRxqDCy2i1Tg",
    authDomain: "artflow-e7a41.firebaseapp.com",
    projectId: "artflow-e7a41",
    storageBucket: "artflow-e7a41.appspot.com",
    messagingSenderId: "798126442083",
    appId: "1:798126442083:web:31bd1f29d31385cf8b9a56"
};

// Initialize Firebase
 firebase.initializeApp(firebaseConfig);
 const projectStorage=firebase.storage();
 const projectFirestore= firebase.firestore();
 const timestamp=firebase.firestore.FieldValue.serverTimestamp;
export { projectStorage , projectFirestore ,timestamp}