import { llenado_tienda } from "./llenadoTienda.js";
import { ampliar_info } from "./ampliar_info.js";

let producto = {};

llenado_tienda();

let fila_contenedora = document.getElementById('fila');

let informacion = new bootstrap.Modal(document.getElementById('modal_info'));
let resumen_compra = new bootstrap.Modal(document.getElementById('resumen_compra'));

fila_contenedora.addEventListener('click', function(evento){
    if(evento.target.classList.contains('btn')){

        producto = ampliar_info(evento);
        
        console.log(producto);
        informacion.show();
    }
}) 


let productos = [];
let boton_carrito = document.getElementById('boton_agg');


boton_carrito.addEventListener('click', function(){
    let cantidad=document.getElementById('cantidad_producto').value
    producto.cantidad=cantidad

    productos.push(producto);

    let suma=0
    productos.forEach(function(producto){
        suma=suma+Number(producto.cantidad);
    });
    
    let capsula=document.getElementById('capsula'); 
    capsula.textContent=suma
    capsula.classList.remove('invisible');

    informacion.hide();

    document.getElementById('cantidad_producto').value = '1';
})

let boton_v_carrito=document.getElementById('ver_carrito');
boton_v_carrito.addEventListener('click',function(){

    //recorrer el carrito y pintar los productos
    let base=document.getElementById('base_carro')

    base.innerHTML=''

    

   

    productos.forEach(function(producto){

        let fila=document.createElement('div');
        fila.classList.add('row');

        let columna1=document.createElement('div');
        columna1.classList.add('col-4');

        let columna2=document.createElement('div');
        columna2.classList.add('col-8');

        let foto=document.createElement('img');
        foto.classList.add('w-100','img-fluid');
        foto.src=producto.foto;

        let nombre=document.createElement('h1');
        nombre.classList.add('text-align-center');
        nombre.textContent=producto.nombre;

        let cantidad=document.createElement('p');
        cantidad.classList.add('text-align-center');
        cantidad.textContent="Cantidad: " + producto.cantidad;
        
        let precio=document.createElement('p');
        precio.classList.add('precio__tarjeta');
        precio.textContent="Subtotal: " + (producto.precio * parseInt(producto.cantidad));



        //PADRES E HIJOS
        columna2.appendChild(nombre);
        columna2.appendChild(cantidad);
        columna2.appendChild(precio);
        columna1.appendChild(foto);
        fila.appendChild(columna1);
        fila.appendChild(columna2);
        base.appendChild(fila);

    })

    resumen_compra.show();
})

