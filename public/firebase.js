import { initializeApp } from "https://www.gstatic.com/firebasejs/12.12.0/firebase-app.js";
import {
  getFirestore,
  doc,
  getDoc,
  setDoc
} from "https://www.gstatic.com/firebasejs/12.12.0/firebase-firestore.js";

/* ✅ Your Firebase config (what you pasted) */
const firebaseConfig = {
  apiKey: "AIzaSyAhXX8e6Dbu7d5oipHhbAY_p7sR4r9CQNQ",
  authDomain: "cclne-worship.firebaseapp.com",
  projectId: "cclne-worship",
  storageBucket: "cclne-worship.firebasestorage.app",
  messagingSenderId: "933754252522",
  appId: "1:933754252522:web:bc11e7859b650bbf79bb93"
};

/* Initialize Firebase */
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

/* ✅ Storage adapter used by your app */
export const storage = {
  async get(key) {
    const ref = doc(db, "kv", key);
    const snap = await getDoc(ref);
    return snap.exists() ? { value: snap.data().value } : null;
  },
  async set(key, value) {
    const ref = doc(db, "kv", key);
    await setDoc(ref, { value });
  }
};
