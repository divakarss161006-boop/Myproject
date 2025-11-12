// team11/firebase/Config.js   ← Use same filename in your import

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-storage.js";

// ✅ Your Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyCgSPqI8EIhblvtoSrqW9dSK0cGUT-5a7I",
  authDomain: "smart-pass-bc0eb.firebaseapp.com",
  projectId: "smart-pass-bc0eb",
  storageBucket: "smart-pass-bc0eb.appspot.com",
  messagingSenderId: "822844023137",
  appId: "1:822844023137:web:871a61aabe4743bfd0e520"
};

// ✅ Initialize Firebase App
const app = initializeApp(firebaseConfig);

// ✅ Initialize Firebase Services
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

// ✅ Export so you can use them in other pages (import { auth, db } from ...)
export { app, auth, db, storage };
