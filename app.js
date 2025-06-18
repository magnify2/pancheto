const firebaseConfig = {
  apiKey: "AIzaSyBU4LqO5Ajomy7ASwKXtMiVtw3v2Bgm77o",
  authDomain: "prueba-e77a0.firebaseapp.com",
  projectId: "prueba-e77a0",
  storageBucket: "prueba-e77a0.firebasestorage.app",
  messagingSenderId: "906353918752",
  appId: "1:906353918752:web:4132b32b1128fc5ad14d45",
  measurementId: "G-1TECYWHFH8"
};

firebase.initializeApp(firebaseConfig);

function registrar() {
  const email = document.getElementById('email').value;
  const contrasena = document.getElementById('contrasena').value;

  firebase.auth().createUserWithEmailAndPassword(email, contrasena)
    .then(userCredential => {
      alert("Usuario registrado: " + userCredential.user.email);
    })
    .catch(error => {
      alert("Error: " + error.message);
    });
}

// Hacer la función global para que el botón la pueda llamar
window.registrar = registrar;
