const firebaseConfig = {
  apiKey: "AIzaSyDJ-sWTJ52wXgYOhoHXfSr-9XJkYKBQ7-4",
  authDomain: "fidelizacion-3a0a4.firebaseapp.com",
  projectId: "fidelizacion-3a0a4",
  storageBucket: "fidelizacion-3a0a4.firebasestorage.app",
  messagingSenderId: "94160795420",
  appId: "1:94160795420:web:fe46ebb36a8c6e4782ecd9",
  measurementId: "G-8HLP6SEWSQ"
};

// Inicializar Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
