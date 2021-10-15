'use strict';

/*
Aunque parezca mentira, no existe ningún método para
añadir un elemento después de otro como sí lo hace 
insertBefore. Crea una función que reciba como 
parámetros dos elementos y coloque el primero 
después del segundo. La llamada se realizará de 
este modo:
function insertAfter(nuevoElemento, existenteElemento);
*/


function insertAfter(nuevoElemento,existenteElemento) {

    existenteElemento.parentNode.insertBefore(nuevoElemento, existenteElemento.nextSibling);
    
}
//Para hacer la comprobación, creo un elemento span 
let adios = document.createElement("span");
//añado el textro adios al elemento span
adios.innerHTML = "Adiós";
//Ahora,meto dentro de la variable hola el elemento span con id span
let hola = document.getElementById("span");


/*Utilizo el método creado y pongo la variable adios que ha sido creada nueva
 y depsues la variable hola que es la wue tiene el conetido del span del html*/
insertAfter(adios, hola);
/*Se aprecia que se ha puesto a la dechera de la palabra "hola" con lo que se
hace la comprobación de que se ha insertado despúes*/