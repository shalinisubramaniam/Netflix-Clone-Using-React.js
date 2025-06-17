import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBChrGfmWAjaBwLLAZ17iEu-z4DE593XU4",
  authDomain: "netflix-clone-57221.firebaseapp.com",
  projectId: "netflix-clone-57221",
  storageBucket: "netflix-clone-57221.firebasestorage.app",
  messagingSenderId: "960332185952",
  appId: "1:960332185952:web:058fb2467913d7bcc5de05"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signup = async (name, email, password) => {
    try{
        await createUserWithEmailAndPassword(auth, email, password);
        const user = res.user;
        await addDoc(collection(db, "user"), {
            uid: user.uid,
            name,
            authProvider: "local",
            email,
        });
    }
    catch(error) {
        console.log(error);
        alert(error);
    }
}

const login = async(email, password)=>{
    try {
        await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
        console.log(error);
        alert(error);
    }
}

const logout = ()=>{
    signOut(auth);
}

export {auth, db, login, signup, logout};