// 4- Escribir el código de una función a la que se pasa como parámetro un número entero y devuelve como resultado una cadena de texto que indica si el número es par o impar. Mostrar por pantalla el resultado devuelto por la función.

// const esParOImpar = function (numero) {
//   if (isNaN(numero)) {
//     document.write(
//       `<h1>${numero} no es un número, por favor introduzca dígitos.</h1></br>`
//     );
//     return;
//   }
//   if (numero % 2 == 0) {
//     document.write("<h1>El número es par.</h1></br>");
//   } else {
//     document.write("<h1>El número es impar.</h1></br>");
//   }
//   //   numero % 2 == 0
//   //     ? console.log("El número es par.")
//   //     : console.log("El número es impar.");
//   // };
// };

// esParOImpar(5);
// esParOImpar(2);
// esParOImpar("nfkjve");

// 5- Definir una función que muestre información sobre una cadena de texto que se le pasa como argumento. A partir de la cadena que se le pasa, la función determina si esa cadena está formada sólo por mayúsculas, sólo por minúsculas o por una mezcla de ambas.

// const definirTipo = function (frase) {
//   if (!isNaN(frase)) {
//     console.log(`Lo sentimos ${frase} no es válido.`);
//     return;
//   }
//   if (frase === frase.toUpperCase()) {
//     console.log(`La frase ${frase} está formada por mayúculas.`);
//   } else if (frase === frase.toLowerCase()) {
//     console.log(`La frase ${frase} está formada por minúsculas.`);
//   } else {
//     console.log(`La frase ${frase} está formada por mayúsculas y minúsculas.`);
//   }
// };

// definirTipo("¡HOLA MUNDO!");
// definirTipo("¿cómo estamos?");
// definirTipo("BiEnVeNiDoS");

// 6- Solicitar por pantalla al usuario ingresar el valor de los lados de un rectángulo, luego crear una función para calcular su perímetro y mostrarlo por pantalla.
// La fórmula del perímetro  es p = 2*(a +b)
// Ejemplo:
// Input:
// lado A = 24
// lado B = 5
// Output: 58

// const calcularPerimetro = function () {
//   let medida1 = parseFloat(
//     prompt("Por favor ingrese el primer valor de su rectángulo: ")
//   );
//   let medida2 = parseFloat(
//     prompt("Por favor ingrese el segundo valor de su rectángulo: ")
//   );
//   if (isNaN(medida1, medida2)) {
//     alert("Por favor introduzca números.");
//     return;
//   }
//   let perimetro = 2 * (medida1 + medida2);
//   perimetro = parseFloat(perimetro);
//   document.write(`El valor del perímetro de su rectángulo es ${perimetro}`);
// };

// calcularPerimetro();

// 7- Escriba un script que muestre la tabla de multiplicar de un número ingresado por pantalla, la creación de la tabla debe ser realizada con una función y mostrar solo los resultados del 1 al 10 del número elegido por el usuario.

// const multiplicar = function () {
//   let numero = parseInt(
//     prompt("Por favor, introduzca el valor para calcular la tabla: ")
//   );
//   let valor = 1;
//   if (!isNaN(numero)) {
//     while (valor <= 10) {
//       document.write(`${numero} x ${valor} = ${numero * valor}<br>`);

//       valor++;
//     }
//   }
// };

// multiplicar();

// function tablaDeMultiplicar(
//   numero = parseInt(prompt("Ingrese el valor de la tabla a calcular")),
//   vueltas = parseInt(prompt("del 1 al cuanto?"))
// ) {
//   if (isNaN(numero) || isNaN(vueltas)) {
//     return alert("Debe ingresar un número");
//   }

//   document.write(`Tabla del ${numero}<br>`);
//   for (let index = 1; index <= vueltas; index++) {
//     document.write(`${numero} x ${index} = ${numero * index}<br>`);
//   }
// }
