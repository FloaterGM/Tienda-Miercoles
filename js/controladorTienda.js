//Controlando etiquetas

/*let etq_titulo = document.getElementById('millos')

etq_titulo.textContent = "KNY (Kimetsu No Yaiba)"

console.log(etq_titulo.classList)

let etq_foto = document.getElementById('foto')

etq_foto.src = "/img/descarga.jpg" 

etq_titulo.classList.add('text-center')
etq_titulo.classList.add('text-light')*/

//Tienda 

let usuario = {
    
    nombre: 'Juan Sebastian Diaz',
    edad: 48,
    amigos: ["Victor", "Cristian"]


}

let etq_titulo = document.getElementById('millos')

etq_titulo.textContent = usuario.amigos[0];

