// 1- Escribir un programa que solicite la edad y si es mayor de 18 años mostrar un mensaje que ya puede conducir, si la edad ingresada no es un número válido indicarlo en un mensaje.

// let edad = parseInt(
//   prompt(
//     "Ingrese su edad así podremos verificar si es apto para acceder al carnet de conducir: "
//   )
// );

// if (edad >= 18 && edad <= 65) {
//   document.write(`Su edad es ${edad}, ¡enhorabuena puede acceder 😊!`);
// } else {
//   document.write("Lo sentimos, no puede acceder 😓");
// }

// 2- Escribir un programa que solicite una nota (número) de 0  a 10. Luego mostrar la calificación en un alert según los siguientes rangos de nota:
// 0-2: Muy deficiente
// 3-4: Insuficiente
// 5-6: Suficiente
// 7: Bien
// 8-9: Notable
// 10: Sobresaliente
// Si ingreso un número que no esté dentro del rango de 0 a 10 mostrar un mensaje de “número erróneo”. Si el número ingresado no es válido mostrar el mensaje “Introduce un número válido”.
// Ejemplo:
// Input: 5
// Input: 50
// Input: hola10
// Output: Suficiente
// Output: Número erróneo
// Output: Introduce un número válido

// let nota = parseInt(
//   prompt("Ingrese una nota del 0-10 para obteber su valoración:")
// );

// if (isNaN(nota)) {
//   alert("El valor introducido no es correcto.");
// }

// if (nota <= 2) {
//   alert("Muy deficiente 👎.");
// } else if (nota <= 4) {
//   alert("Insuficiente 👎.");
// } else if (nota <= 6) {
//   alert("Suficiente 👍.");
// } else if (nota === 7) {
//   alert("Bien 👍.");
// } else if (nota <= 9) {
//   alert("Notable 🙌.");
// } else if (nota === 10) {
//   alert("Sobresaliente 👏.");
// } else {
//   alert("Introduzca un valor correcto, por favor.");
// }

// 3- Realiza un script que pida cadenas de texto  hasta que se pulse “cancelar”. Al salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un guión -.
// Nota: usar confirm() https://www.w3schools.com/jsref/met_win_confirm.asp

// let frases = prompt("Queremos saber la frase que marca tu vida: ");
// let relacionFrases = "";

// while (frases) {
//   relacionFrases = relacionFrases + " - " + frases;

//   frases = prompt("Ingresa más frases favoritas: ");
// }

// document.write(relacionFrases);

//opción con confirm:

// let frases = prompt("Queremos saber la frase que marca tu vida:");
// let relacionFrases = "";
// let cancelar = false;
// while (!cancelar) {
//   relacionFrases = relacionFrases + " - " + frases;
//   frases = prompt("Ingresa más frases favoritas: ");
//   if (frases == null) {
//     let validar = confirm(
//       "Esta seguro que quiere cancelar el ingreso de datos?"
//     );
//     if (validar) {
//       cancelar = true;
//     }
//   }
// }
// document.write(relacionFrases);

// 4- Realiza un script que pida números hasta que se pulse “cancelar”. Si no es un número deberá indicarse con un «alert» y seguir pidiendo números. Al salir con “cancelar” deberá indicarse la suma total de los números introducidos.

// let numero = parseFloat(prompt("Introduzca un número: "));
// let sumaNumeros = 0.0;

// if (isNaN(numero)) {
//   alert("Introduzca un valor correcto, por favor.");
// } else {
//   while (numero) {
//     sumaNumeros = parseFloat(sumaNumeros) + parseFloat(numero);
//     numero = prompt("Ingresa más números para hacer la suma total:");
//   }
// }

// document.write(`La suma total de los números introducidos es: ${sumaNumeros}`);

// 5- Realizar una página con un script que calcule el valor de la letra de un número de DNI (Documento nacional de identidad).
// El algoritmo para calcular la letra del dni es el siguiente :
// El número debe ser entre 0 y 99999999
// Debemos calcular el resto de la división entera entre el número y el número 23.
// Según el resultado, de 0 a 22, le corresponderá una letra de las siguientes:  (T, R, W, A, G, M, Y, F, P, D, X, B, N, J, Z, S, Q, V, H, L, C, K, E)
// Si lo introducido no es un número deberá indicarse con un alert y volver a preguntar.
// Deberá de repetirse el proceso hasta que el usuario pulse «cancelar».
// Ejemplo:
// Input:  40773821
// Output: ‘L’
let isANumber = false;
let dni = 0;
while (isANumber == false) {
  dni = prompt("Por favor, introduzca su DNI sin letra");
  if (!isNaN(dni)) {
    isANumber = true;
  }
  if (isNaN(dni)) {
    alert("ERROR, solo se pueden introducir números.");
  }
  dni = parseInt(dni);
  if (dni < 0 || dni > 99999999) {
    alert("ERROR, el número del DNI tiene que estar entre 0 y 99999999.");
    isANumber = false;
  } else {
    switch (dni % 23) {
      case 0:
        document.write(`<h1>${dni}T</h1>`);
        isANumber = false;
        break;
      case 1:
        document.write(`<h1>${dni}R</h1>`);
        isANumber = false;
        break;
      case 2:
        document.write(`<h1>${dni}W</h1>`);
        isANumber = false;
        break;
      case 3:
        document.write(`<h1>${dni}A</h1>`);
        isANumber = false;
        break;
      case 4:
        document.write(`<h1>${dni}G</h1>`);
        isANumber = false;
        break;
      case 5:
        document.write(`<h1>${dni}M</h1>`);
        isANumber = false;
        break;
      case 6:
        document.write(`<h1>${dni}Y</h1>`);
        isANumber = false;
        break;
      case 7:
        document.write(`<h1>${dni}F</h1>`);
        isANumber = false;
        break;
      case 8:
        document.write(`<h1>${dni}P</h1>`);
        isANumber = false;
        break;
      case 9:
        document.write(`<h1>${dni}D</h1>`);
        isANumber = false;
        break;
      case 10:
        document.write(`<h1>${dni}X</h1>`);
        isANumber = false;
        break;
      case 11:
        document.write(`<h1>${dni}B</h1>`);
        isANumber = false;
        break;
      case 12:
        document.write(`<h1>${dni}N</h1>`);
        isANumber = false;
        break;
      case 13:
        document.write(`<h1>${dni}J</h1>`);
        isANumber = false;
        break;
      case 14:
        document.write(`<h1>${dni}Z</h1>`);
        isANumber = false;
        break;
      case 15:
        document.write(`<h1>${dni}S</h1>`);
        isANumber = false;
        break;
      case 16:
        document.write(`<h1>${dni}Q</h1>`);
        isANumber = false;
        break;
      case 17:
        document.write(`<h1>${dni}V</h1>`);
        isANumber = false;
        break;
      case 18:
        document.write(`<h1>${dni}H</h1>`);
        isANumber = false;
        break;
      case 19:
        document.write(`<h1>${dni}L</h1>`);
        isANumber = false;
        break;
      case 20:
        document.write(`<h1>${dni}C</h1>`);
        isANumber = false;
        break;
      case 21:
        document.write(`<h1>${dni}K</h1>`);
        isANumber = false;
        break;
      case 22:
        document.write(`<h1>${dni}E</h1>`);
        isANumber = false;
        break;
      default:
        break;
    }
  }
}
