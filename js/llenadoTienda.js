let productos = [
     
        { img: "/img/inosuke.jpg", nombre: "Llaveros KNY", precio: 15000 },
        { img: "/img/inosuke.jpg", nombre: "Llaveros KNY Katana", precio: 20000 },
        { img: "/img/inosuke.jpg", nombre: "Camiseta Estampada", precio: 45000 },
        { img: "/img/inosuke.jpg", nombre: "Buzo Estampado", precio: 70000 },
        { img: "/img/inosuke.jpg", nombre: "Figuritas Representativas", precio: 60000 },
        { img: "/img/inosuke.jpg", nombre: "Aretes Representativos (Tanjiro)", precio: 12000 },
        { img: "/img/inosuke.jpg", nombre: "Posters KNY", precio: 10000 },
        { img: "/img/inosuke.jpg", nombre: "Album KNY", precio: 25000 },
        { img: "/img/inosuke.jpg", nombre: "Stickers KNY", precio: 5000 },
        { img: "/img/inosuke.jpg", nombre: "Manillas KNY", precio: 10000 }
        

    
]

let fila = document.getElementById("fila");

productos.forEach(function(producto){

    let columna = document.createElement('div');

    columna.classList.add('col');


    let tarjeta = document.createElement('div');

    tarjeta.classList.add('card')
    tarjeta.classList.add('h-100')

    let img = document.createElement('img');
    
    img.classList.add('card-img-top');
    img.classList.add('p-4');
    img.src = producto.img;

    let titulo = document.createElement('h4');

    titulo.classList.add('fw-bold');
    titulo.classList.add('text-center');
    titulo.textContent = producto.nombre;

    img.appendChild(tarjeta);
    titulo.appendChild(tarjeta);

    columna.appendChild(tarjeta);
    fila.appendChild(columna);
    


})