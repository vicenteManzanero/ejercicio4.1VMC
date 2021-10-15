'use strict';
/*
Crea dos elementos  <p>  dentro del  <div>  temporizador  
que indiquen los minutos y segundos de un temporizador de 
modo que, al darle al botón  Comenzar , se muestre el
temporizador por pantalla
*/
let doc = document;

function temporizador(minutos = 0, segundos) {
    //antes de empezar, miro a ver si se le pasa sólo un parámetro, y si es así, hago que los minutos se pongan a 0 y los segundos obtengan el valor de lo pasado por parámetro
    if (arguments.length == 1) {
        minutos = 0;
        segundos = arguments[0];
    }
    //aqui lanzo la excepción si se introducen los datos incorrectamente
    if (minutos < 0 || segundos < 0 || segundos > 59 || isNaN(minutos) || isNaN(segundos)) {
        throw console.error("Números incorrectos, programa terminado");
    } else {
        //si no se cumple lo de arriba, hago el setInterval
        let id = setInterval(() => { //se necesita el id para poder hacer el clearInterval
            if (minutos == 0 && segundos == 0) {
                clearInterval(id);
            } else {
                //aquí le digo que si los segundos llegan a 0 se reseteen a 59 y le quite uno al valor minutos 
                if (segundos == 0) {
                    minutos--;
                }
                if (segundos == 0) {
                    segundos = 59;
                }
            }
            //esta es la parte que hace que se vea por consola la cuenta atrás
            let elemento = doc.createElement("p");
            elemento.innerHTML = `${minutos} : ${segundos}`;
            doc.getElementById("temporizador").appendChild(elemento);
            segundos--;
        }, 1000);
    }

}