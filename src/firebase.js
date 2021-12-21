import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore/lite';



const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
  measurementId: ""
  };

    const firebaseApp = initializeApp(firebaseConfig);
    const db          = getFirestore(firebaseApp);


    export default  db;