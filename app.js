const promoBox = document.getElementById("promo");
const puntosSpan = document.getElementById("puntos");

function getPromo() {
  const hoy = new Date();
  const dia = hoy.getDay(); // 0 (domingo) a 6 (sábado)

  if (dia === 0 || dia === 6) {
    promoBox.innerText = "🎉 Promo fin de semana: 2x1 en panchos!";
  } else {
    promoBox.innerText = "🌭 Hoy: Combo clásico + bebida $1500";
  }
}

getPromo();

function login() {
  const email = document.getElementById("email").value;
  const pass = document.getElementById("password").value;
  auth.signInWithEmailAndPassword(email, pass)
    .catch(e => alert("Error: " + e.message));
}

function googleLogin() {
  const provider = new firebase.auth.GoogleAuthProvider();
  auth.signInWithPopup(provider)
    .catch(e => alert("Error con Google: " + e.message));
}

function logout() {
  auth.signOut();
}

auth.onAuthStateChanged(async user => {
  if (user) {
    document.getElementById("auth").style.display = "none";
    document.getElementById("userInfo").style.display = "block";
    document.getElementById("username").innerText = `Hola, ${user.email}`;

    const ref = db.collection("usuarios").doc(user.uid);
    const doc = await ref.get();

    if (!doc.exists) {
      await ref.set({ puntos: 0 });
      puntosSpan.innerText = 0;
    } else {
      puntosSpan.innerText = doc.data().puntos;
    }
  } else {
    document.getElementById("auth").style.display = "block";
    document.getElementById("userInfo").style.display = "none";
  }
});

async function sumarPunto() {
  const user = auth.currentUser;
  if (!user) return;

  const ref = db.collection("usuarios").doc(user.uid);
  const doc = await ref.get();
  const nuevosPuntos = (doc.data().puntos || 0) + 1;

  await ref.set({ puntos: nuevosPuntos });
  puntosSpan.innerText = nuevosPuntos;
}
