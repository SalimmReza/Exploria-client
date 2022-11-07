// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBGClGtFCqEMZ3zmnn2-yuJWsU3_-Gx1Ug",
    authDomain: "assignment11-cb917.firebaseapp.com",
    projectId: "assignment11-cb917",
    storageBucket: "assignment11-cb917.appspot.com",
    messagingSenderId: "94693828656",
    appId: "1:94693828656:web:086a43633ffbb11949e5f5"


    // apiKey: "AIzaSyBGClGtFCqEMZ3zmnn2-yuJWsU3_-Gx1Ug",
    // authDomain: "assignment11-cb917.firebaseapp.com",
    // projectId: "assignment11-cb917",
    // storageBucket: "assignment11-cb917.appspot.com",
    // messagingSenderId: "94693828656",
    // appId: "1:94693828656:web:086a43633ffbb11949e5f5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;