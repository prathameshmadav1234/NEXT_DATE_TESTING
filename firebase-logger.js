// Background Firebase Logging Script (removed logging logic as ESP32 now handles 24/7 logging)
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
import { getDatabase, ref, set, push, onValue } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-database.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyCLAKW51iGzR68EL-ZPWxraFz-NTdNJPqM",
  authDomain: "esp32ledcontrol-c0d28.firebaseapp.com",
  databaseURL: "https://esp32ledcontrol-c0d28-default-rtdb.firebaseio.com",
  projectId: "esp32ledcontrol-c0d28",
  storageBucket: "esp32ledcontrol-c0d28.appspot.com",
  messagingSenderId: "616534198261",
  appId: "1:616534198261:web:5c6848fdec9d01c9c6c2bc"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const auth = getAuth(app);

// No logging logic here; ESP32 handles it now
