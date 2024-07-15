import { initializeApp } from "firebase/app";
import{getFirestore}from "firebase/firestore";
import{GoogleAuthProvider, getAuth}from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyANg9aM8LtWmtxqgN82x09O3o9oqbZGwpk",
  authDomain: "discord-clone-7c4d6.firebaseapp.com",
  projectId: "discord-clone-7c4d6",
  storageBucket: "discord-clone-7c4d6.appspot.com",
  messagingSenderId: "56549946941",
  appId: "1:56549946941:web:acfc7f635e1d61cd355c54"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);//firebasaeのドキュメントに記載
const auth=getAuth(app);//認証
const provider =new GoogleAuthProvider();

export {auth,provider,db};

