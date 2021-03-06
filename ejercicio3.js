'use strict';
/*
Crea dos elementos  <p>  dentro del  <div>  temporizador  
que indiquen los minutos y segundos de un temporizador de 
modo que, al darle al botón  Comenzar , se muestre el
temporizador por pantalla
*/
//Aquí optimizo el document.
let doc = document;

function temporizador(minutos = 0, segundos) {
    //Antes de empezar, miro a ver si se le pasa sólo un parámetro, y si es así, hago que los minutos se pongan a 0 y los segundos obtengan el valor de lo pasado por parámetro
    if (arguments.length == 1) {
        minutos = 0;
        segundos = arguments[0];
    }
    //Aquí lanzo la excepción si se introducen los datos incorrectamente.
    if (minutos < 0 || segundos < 0 || segundos > 59 || isNaN(minutos) || isNaN(segundos)) {
        throw console.error("Números incorrectos, programa terminado");
    } else {
        //Si no se cumple lo de arriba, hago el setInterval.
        let id = setInterval(() => { //se necesita el id para poder hacer el clearInterval.
            if (minutos == 0 && segundos == 0) {
                clearInterval(id);
            } else {
                //Aquí le digo que si los segundos llegan a 0 se reseteen a 59 y se reste en uno al valor minutos. 
                if (segundos == 0) {
                    minutos--;
                }
                if (segundos == 0) {
                    segundos = 59;
                }
            }
            //Ésta es la parte que hace que se vea por consola la cuenta atrás.
            doc.getElementById("minutos").innerHTML = `${minutos} : `;//En éste apartado lo meto en el "p" con el id "minutos".
            doc.getElementById("segundos").innerHTML = `${segundos}`;//En éste apartado lo meto en el "p" con el id "segundos".
            segundos--;
        }, 1000);
    }

}

