import {initializeApp} from "firebase/app";
import {getStorage} from "firebase/storage";

const firebaseConfig = {
    apiKey: process.env.API_KEY,
    authDomain: process.env.AUTH_DOMAIN,
    projectId: process.env.PROJECT_ID,
    storageBucket: 'ecom-a2878.appspot.com',
    messagingSenderId: process.env.MESSAGING_SENDER_ID,
    appId: process.env.API_ID
  };
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export {
    storage
};