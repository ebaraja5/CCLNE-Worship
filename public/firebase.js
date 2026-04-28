import { initializeApp } from "https://www.gstatic.com/firebasejs/12.12.0/firebase-app.js";
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  serverTimestamp
} from "https://www.gstatic.com/firebasejs/12.12.0/firebase-firestore.js";

/**
 * 🔴 IMPORTANT:
 * Replace this object with YOUR Firebase Web App config
 * (Firebase Console → Project settings → Your apps → Web app → Config)
 */
const firebaseConfig = {
  apiKey: "PASTE_YOURS",
  authDomain: "PASTE_YOURS",
  projectId: "PASTE_YOURS",
  storageBucket: "PASTE_YOURS",
  messagingSenderId: "PASTE_YOURS",
  appId: "PASTE_YOURS"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

/**
 * We store key/value documents in collection "kv"
 * docId = key (e.g., "cclne_week_2026_04_26")
 * fields: { value: "<json string>", updatedAt: serverTimestamp() }
 */
async function kvGet(key) {
  const ref = doc(db, "kv", key);
  const snap = await getDoc(ref);
  if (!snap.exists()) return null;
  return snap.data()?.value ?? null;
}

async function kvSet(key, value) {
  const ref = doc(db, "kv", key);
  await setDoc(ref, { value, updatedAt: serverTimestamp() }, { merge: true });
}

/**
 * Compatibility layer: mimics window.storage.get(key, true) → { value }
 * and window.storage.set(key, value, true)
 */
export const storage = {
  async get(key /*, shared */) {
    const v = await kvGet(key);
    return v == null ? null : { value: v };
  },
  async set(key, value /*, shared */) {
    await kvSet(key, value);
  }
};
