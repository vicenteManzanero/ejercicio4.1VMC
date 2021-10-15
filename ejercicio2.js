'use strict';
/*
Crea una página web que tenga un listado de tipo <ul> 
con un <li> de muestra. Añade también un botón Nuevo 
número que cuando se pulse añada un elemento con un número
aleatorio a una lista desordenada
*/
//Optimizo
let doc = document;
//Creo la función
function aleatorio() {
    //Genero un número aleatorio (El enunciado no dice en que rango ni especifica nada así que he elegido hacerlo así).
    let numeroAleatorio = Math.round(Math.random() * 100);
    //Creo un elemento "li" y lo guardo en la variable elemento
    let elemento = doc.createElement("li");
    //Guardo el valor de la variable numeroAleatorio en el elemento creado previamente
    elemento.innerHTML = `${numeroAleatorio}`;
    //Lo añado al primer elemento ul como hijo.
    doc.querySelector("ul").appendChild(elemento);
}