// Tarea clase 10/7/23

//Escribe un programa que pida una frase, devuelva la cantidad de vocales que tiene la frase y muestre en consola cuales son.

// let frase = prompt("Por favor, ingrese una frase:");
// fraseEnMinusculas = frase.toLowerCase();

// let vocales = ["a", "e", "i", "o", "u"];

// let contador = 0;

// let vocalesEncontradas = [];

// if (!isNaN(frase)) {
//   alert("Lo sentimos, el valor introducido no es válido.");
// }

// for (let i = 0; i < fraseEnMinusculas.length; i++) {
//   let letra = fraseEnMinusculas[i];

//   if (vocales.includes(letra)) {
//     contador++;

//     if (!vocalesEncontradas.includes(letra)) {
//       vocalesEncontradas.push(letra);
//     }
//   }
// }

// console.log("La cantidad de vocales en su frase es:", contador);
// console.log("Y las vocales encontradas han sido:", vocalesEncontradas);

// let phrase = prompt("Escribe una frase");
// phrase = phrase.toLowerCase();
// console.log(phrase);
// for (let i = 0; i < phrase.length; i++) {
//   if (
//     phrase.at(i) == "a" ||
//     phrase.at(i) == "e" ||
//     phrase.at(i) == "i" ||
//     phrase.at(i) == "o" ||
//     phrase.at(i) == "u"
//   ) {
//     document.write(phrase.at(i));
//   }
// }

//Función

// const encontrarVocales = function (frase = prompt("Ingrese una frase")) {
//     let vocales = ["a", "á", "e", "é", "i", "í", "o", "ó", "u", "ú"];
//     let vocalesEncontradas = [];

//     if (frase == null) {
//       return `El usuario canceló la ejecución`;
//     }

//     if (frase == "") {
//       return `No ingresó ninguna frase`;
//     }

//     let arrayLetras = frase.toLowerCase().split("");

//     for (let i = 0; i < arrayLetras.length; i++) {
//       if (vocales.includes(arrayLetras[i])) {
//         vocalesEncontradas.push(arrayLetras[i]);
//       }
//     }

//     if (vocalesEncontradas.length > 0) {
//       return `Se encontraron ${vocalesEncontradas.length} vocales, las mismas son ${vocalesEncontradas}`;
//     } else {
//       return `No Se encontraron vocales`;
//     }
//   };
