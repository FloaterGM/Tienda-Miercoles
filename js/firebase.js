
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA1VsyyeuiCScoMtINC8DZiltrRBW2GrqA",
  authDomain: "tienda-miercoles-kny.firebaseapp.com",
  projectId: "tienda-miercoles-kny",
  storageBucket: "tienda-miercoles-kny.appspot.com",
  messagingSenderId: "442611427707",
  appId: "1:442611427707:web:440afe057e26ab2af7b5de",
  measurementId: "G-Q8RPX4GB9Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);