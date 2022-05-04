import { getAuth, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js"


let usuario = document.getElementById('email_usuario');
let cerrar = document.getElementById('boton_cerrar');

const auth = getAuth();
onAuthStateChanged(auth, (user) => {
    if (user) {
        const uid = user.uid;

        usuario.textContent = user.email + ", ";

        
        cerrar.classList.remove('invisible');
        cerrar.textContent = "Cerrar sesion";
    }
    else {

        usuario.textContent = "usuario sin autenticar";

    }
});

cerrar.addEventListener('click', function(){
    signOut(auth).then(() => {
        cerrar.classList.add('invisible')
    }).catch((error) => {
        alert('Error al cerrar sesion')
    });
})
