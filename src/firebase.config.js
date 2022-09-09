import {getApp , getApps , initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore';
import {getStorage} from 'firebase/storage';



const firebaseConfig = {
    apiKey: "AIzaSyAX2WRHgBj3jPaE04079SayXuDxVtAjOg4",
    authDomain: "restaurant-app-afe0c.firebaseapp.com",
    databaseURL: "https://restaurant-app-afe0c-default-rtdb.firebaseio.com",
    projectId: "restaurant-app-afe0c",
    storageBucket: "restaurant-app-afe0c.appspot.com",
    messagingSenderId: "143116681543",
    appId: "1:143116681543:web:8826cf1f32d125b80c8c62"
  };

  const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);

  const fireStore = getFirestore(app);
  const storage = getStorage(app);

  export {app , fireStore , storage};