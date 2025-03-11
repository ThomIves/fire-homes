// Import the functions you need from the SDKs you need
import { initializeApp, getApps } from "firebase/app";
import { Auth, getAuth } from "firebase/auth";
import { FirebaseStorage, getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB0JYYOLc2NgeuGm0bM3viBLjC3lpZp_Dk",
  authDomain: "fire-homes-thom.firebaseapp.com",
  projectId: "fire-homes-thom",
  storageBucket: "fire-homes-thom.firebasestorage.app",
  messagingSenderId: "728267304993",
  appId: "1:728267304993:web:48f2f6fe864e4debf8f360",
};

// Initialize Firebase
const currentApps = getApps();
let auth: Auth;
let storage: FirebaseStorage;

if (!currentApps.length) {
  const app = initializeApp(firebaseConfig);
  auth = getAuth(app);
  storage = getStorage(app);
} else {
  const app = currentApps[0];
  auth = getAuth(app);
  storage = getStorage(app);
}

export { auth, storage };
