'use strict';

/*
Dispones del código de una página web en Ejercicio01.htmlEjercicio01.html. Añade el código necesario
en un fichero js aparte para mostrar la siguiente información:

•el número de párrafos de la página
•el texto del segundo párrafo
•el número de enlaces de la página
•la dirección del primer enlace
•la dirección del penúltimo enlace

El texto del resumen será añadido al <div> con id=info 
y debe estar debidamente formateado.
*/

//Con esta declaración hago una optimización del código.
let doc = document;

//Ahora declaro una variable y guardo todos párrafos del documento
let numeroParrafos = doc.getElementsByTagName("p").length;


//Ahora, declaro otra variable para guardar el texto del segundo párrafo
let textoSegundoParrafo = doc.getElementsByTagName("p")[1].innerText;


//Aqui hago lo mismo, delcaro la variable y recorro el DOM para almacenar los enlaces.
let numeroEnlaces = doc.getElementsByTagName("a").length;


//Declaración
let direccionEnlace = doc.querySelector("a").href;


//En este caso lo hago en 2 partes, primero guardo todos los enlaces y despues accedo al penúltimo.
let enlaces = doc.querySelectorAll("a");
let penultimoEnlace = enlaces[enlaces.length - 2].href;

//Ahora, lo muestro en el div que pide el ejercicio.

let resultado = doc.createElement("p");
let resultado1 = doc.createElement("p");
let resultado2 = doc.createElement("p");
let resultado3 = doc.createElement("p");
let resultado4 = doc.createElement("p");
resultado.innerHTML = `El número de párrafos en ésta página es :<br>  ${numeroParrafos}`;
resultado1.innerHTML = `El texto del segundo párrafo es :<br> ${textoSegundoParrafo}`;
resultado2.innerHTML = `El número de enlaces en ésta página es :<br> ${numeroEnlaces}`;
resultado3.innerHTML = `La dirección del primer enlace de ésta página es :<br> ${direccionEnlace}`;
resultado4.innerHTML = `La dirección del penúltimo enlace de ésta página es :<br> ${penultimoEnlace}`;
doc.getElementById("info").appendChild(resultado);
doc.getElementById("info").appendChild(resultado1);
doc.getElementById("info").appendChild(resultado2);
doc.getElementById("info").appendChild(resultado3);
doc.getElementById("info").appendChild(resultado4);