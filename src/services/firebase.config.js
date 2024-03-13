import {initializeApp} from "firebase/app";
import {getStorage} from "firebase/storage";

const firebaseConfig = {
    apiKey: process.env.API_KEY,
    authDomain: process.env.AUTH_DOMAIN,
    projectId: "ecom-a2878",
    storageBucket: "ecom-a2878.appspot.com",
    messagingSenderId: "224405286537",
    appId: "1:224405286537:web:0b90f164a9c6029e1be058"
  };
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export {
    storage
};