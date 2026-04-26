// Importamos la base de Firebase y Firestore (Base de datos)
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.12.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.12.0/firebase-firestore.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.12.0/firebase-analytics.js";

const firebaseConfig = {
    apiKey: "AIzaSyDE59usI9a18ktu3nxk2_Y331r4if8w1-k",
    authDomain: "quattros-app.firebaseapp.com",
    projectId: "quattros-app",
    storageBucket: "quattros-app.firebasestorage.app",
    messagingSenderId: "322688025414",
    appId: "1:322688025414:web:799957599830ae4df7db47",
    measurementId: "G-ZY3HHD3507"
};

// Inicializamos la App
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// Inicializamos y EXPORTAMOS la base de datos para usarla en tus otros scripts
export const db = getFirestore(app);