import { llenado_tienda } from "./llenadoTienda.js";
import { ampliar_info } from "./ampliar_info.js";

let producto = {};

llenado_tienda();

let fila_contenedora = document.getElementById('fila');

fila_contenedora.addEventListener('click', function(evento){
    if(evento.target.classList.contains('btn')){
        let informacion = new bootstrap.Modal(document.getElementById('modal_info'));

        producto = ampliar_info(evento);
        
        console.log(producto);
        informacion.show();
    }
}) 

let boton_carrito = document.getElementById('boton_agg');
let productos = [];



boton_carrito.addEventListener('click', function(){
    productos.push(producto);
    console.log(productos)
})


    

