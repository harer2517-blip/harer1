


import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-firestore.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-analytics.js";

const firebaseConfig = {
    apiKey: "AIzaSyCMoFpEmsjbYPjYAl_LEX8GjC5so8kn9-Y",
    authDomain: "harir-92e27.firebaseapp.com",
    projectId: "harir-92e27",
    storageBucket: "harir-92e27.firebasestorage.app",
    messagingSenderId: "787234689138",
    appId: "1:787234689138:web:1d91758ff0d5c1fa9f72eb",
    measurementId: "G-T0JQMQQYZE"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export { app, analytics, db };
