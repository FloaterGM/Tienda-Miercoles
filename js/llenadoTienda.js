let productos = [
     
        { foto: "img/llaveros.jpg", nombre: "Llaveros KNY", desc: "Llaverito personalizado de KNY", precio: 15000 },
        { foto: "img/katana.jpg", nombre: "Katana KNY",  desc: "Katana personalizada de tamaño pequeño", precio: 25000 },
        { foto: "img/camiseta.jpg", nombre: "Camiseta Estampada",  desc: "Camisetas estamapadas con diseños de KNY", precio: 45000 },
        { foto: "img/buzo.jpg", nombre: "Buzo Estampado",  desc: "Buzos estamapados con diseños de KNY", precio: 70000 },
        { foto: "img/figuritas.jpg", nombre: "Figuritas Representativas",  desc: "Figuritas de los personajes del anime", precio: 60000 },
        { foto: "img/aretes.jpg", nombre: "Aretes Representativos (Tanjiro)",  desc: "Aretes de Kamado Tanjiro", precio: 12000 },
        { foto: "img/posters.jpg", nombre: "Posters KNY",  desc: "Posters representativos del anime", precio: 10000 },
        { foto: "img/album.jpg", nombre: "Album KNY",  desc: "Album de fotos con portada de KNY", precio: 25000 },
        { foto: "img/estampitas.jpg", nombre: "Stickers KNY",  desc: "Estampitas del anime", precio: 5000 },
        { foto: "img/collar.jpg", nombre: "Collar KNY",  desc: "Collar representativo", precio: 15000 }
]

let fila = document.getElementById("fila");

productos.forEach(function(producto){

    let columna = document.createElement('div');

    columna.classList.add('col');

    let tarjeta = document.createElement('div');

    tarjeta.classList.add('card');
    tarjeta.classList.add('h-100');
    tarjeta.classList.add('tarjeta__producto');
    

    let foto = document.createElement('img');
    
    foto.classList.add('card-img-top');
    foto.classList.add('p-4');
    foto.src = producto.foto;

    let cuerpo = document.createElement('div');

    cuerpo.classList.add('card-body');

    let titulo = document.createElement('h4');

    titulo.classList.add('card-title');
    titulo.classList.add('text-center');
    titulo.setAttribute('style', 'color: white; font-family: Fugaz One, cursive;');
    titulo.textContent = producto.nombre;

    let descripcion = document.createElement('p');

    descripcion.classList.add('card-text');
    descripcion.setAttribute('style', 'color: white; text-align: center;');
    descripcion.textContent = producto.desc;

    let precio = document.createElement('h5');

    precio.classList.add('precio__tarjeta');
    precio.setAttribute('style', 'color: white; text-align: center; font-weight: bolder; font-size: 2em;');
    precio.textContent = '$' + producto.precio;


    let boton = document.createElement('a');

    boton.classList.add('btn');
    boton.classList.add('boton__tarjeta');
    boton.textContent = 'Ver Producto';

    tarjeta.appendChild(cuerpo);


    cuerpo.appendChild(foto);
    cuerpo.appendChild(titulo);
    cuerpo.appendChild(descripcion);
    cuerpo.appendChild(precio);
    cuerpo.appendChild(boton);
    

    columna.appendChild(tarjeta);
    fila.appendChild(columna);
})

//Rutina para ampliar info del producto

let fila_contenedora = document.getElementById('fila');
fila_contenedora.addEventListener('click', function(evento){
    if(evento.target.classList.contains('btn')){

        let imagen_info = document.getElementById('foto_info');
        let titulo_info = document.getElementById('titulo_info');

        console.log(evento.target.parentElement.querySelector('img'));

        imagen_info.src = evento.target.parentElement.querySelector('img').src;

        titulo_info.textContent = evento.target.parentElement.querySelector('h4').textContent;

        let informacion = new bootstrap.Modal(document.getElementById('modal_info'));
        informacion.show();

    }
});