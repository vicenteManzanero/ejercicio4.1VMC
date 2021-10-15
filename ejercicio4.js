'use strict';
/*
A partir del código del fichero Ejercicio04.htmlEjercicio04.html genera el 
código necesario para que la pulsar sobre los botones realice las siguientes acciones:

• Añadir fila , añade el contenido del campo como última fila de la tabla
• Caniar , transforma el texto de la celda seleccionada mediante la función toCani
• al pasar el ratón por encima de una celda, cambiará el color de fondo de la misma

*/
//Instrucción para optimizar el código

let doc = document;
//este es el contador paramodificar los id's de cada fila
var contador = 1;
function anadirFila() {
//Primero obtengo el valor del texto y lo guardo en una variable
let texto = doc.getElementById("texto").value;
//Creo la etiqueta tr que va a contener los td's
let tr = doc.createElement("tr");
//Dentro del td introdzco doto lo que quiero que se vea en la tabla
tr.innerHTML = `<td onmouseover='this.style.background="aqua" ' onmouseout='this.style.background="white" ' id="fila${contador}">${texto}</td><td><button onclick="toCani(id='fila${contador}');">Caniar</button></td>`;
//incremento el id para que se incremente el id de cada fila
contador++;
//Lo añado a la tabla
doc.getElementById("bodyTabla").appendChild(tr);
//en el tocani hay que quitar el texto del ejemplo (si molesta)
}


function toCani(frase) {
  console.log(`fila${contador}`);
  let caniado = doc.getElementById(`fila${contador}`).innerText;
    //convierto la frase introducida a un array para recorrerlo más cómodo
    let cadena2 = Array.from(caniado);
    //éste array es lo que retorno
    let cadenaRetorno = [];
  //hago un for y cambio las "c" mayúsculas y minúsculas por k's
    for (let i = 0; i < cadena2.length; i++) {
      if (cadena2[i] == "c" || cadena2[i] == "C") {
        cadenaRetorno[i] = "k";
      } else {
        cadenaRetorno[i] = cadena2[i];
      }
    }
  //hago otro bucle una vez todo convertido para hacer la modificación de letras mayúsculas y minúsculas
    for (let i = 0; i < cadenaRetorno.length; i++) {
      i % 2 == 0
        ? (cadenaRetorno[i] = cadenaRetorno[i].toUpperCase())
        : (cadenaRetorno[i] = cadenaRetorno[i].toLowerCase());
    }
    //antes de hacer el retorno, le concateno las HHH
    //return cadenaRetorno.join("") + "HHH";
    let resultado = cadenaRetorno.join("") + "HHH"
    doc.getElementById(`fila${contador}`).innerText = resultado;
    console.log(resultado);
  }

  //una cadena cani es como esta
  //falta la parte cani

  