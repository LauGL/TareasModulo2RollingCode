// // 1.- Escribe un programa de una sola línea que haga que aparezca en la pantalla un alert que diga “un mensaje”.

//     alert("Bienvenido a js");

// // 2.- Escribe un programa de una sola línea que escriba en la pantalla un texto que diga «Hello World» (document.write).

// document.write("Hello world")

// // 3.- Escribe un programa de una sola línea que escriba en la pantalla el resultado de sumar 3 + 5.

// document.write(`<br/>El resultado de 3 + 5 es igual a ${3+5}.` );

// // 4.- Escribe un programa de dos líneas que pida el nombre del usuario con un prompt y escriba un texto que diga «Hola nombreUsuario»
// // Ejemplo:

// // input: Coder
// // Output: Hola Coder

// let username = prompt("Por favor, introduzca su nombre de usuario: ")
// document.write(`<br/>Bienvenido, ${username}!`)

// // 5.- Escribe un programa de tres líneas que pida un número, pida otro número y escriba el resultado de sumar estos dos números.
// // Nota: Tener en cuenta la siguiente función: parseInt

// let numero1 = prompt("Por favor, introduzca un número: ")
// let numero2 = prompt("Por favor, introduzca otro número: ")
// document.write (`<br/>La suma de ${numero1} y ${numero2} es igual a ${parseInt(numero1)+parseInt(numero2)}!`)

// 6.- Escribe un programa que pida dos números y escriba en la pantalla cual es el mayor.
// Ejemplo:
// input: 15 , 3
// Output: El 15 es el número más grande

// let num1 = prompt("Por favor, introduzca un número: ");
// let num2 = prompt("Por favor, introduzca otro número: ");
// if (num1>num2){
//     document.write (`<br/>${num1} es mayor que ${num2}.`)
// }else if (num2>num1){
//     document.write (`<br/>${num2} es mayor que ${num1}.`)
// }else{
//     document.write (`<br/>${num1} y ${num2} son iguales.`)
// }

// num1 > num2
//   ? document.write(`<br/>${num1} es mayor que ${num2}.`)
//   : num2 > num1
//   ? document.write(`<br/>${num2} es mayor que ${num1}.`)
//   : document.write(`<br/>${num1} y ${num2} son iguales.`);

//   7.- Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres.
// Ejemplo:
// input: 15 , 3, 9
// Output: El 15 es el número más grande

// let number1 = prompt("Por favor, introduzca un número: ");
// let number2 = prompt("Por favor, introduzca otro número: ");
// let number3 = prompt("Por favor, introduzca uno más: ");
// if (number1 > number2 && number1 > number3) {
//   document.write(`<br/> El ${number1} es el más grande.`);
// } else if (number2 > number1 && number2 > number3) {
//   document.write(`<br/> El ${number2} es el más grande.`);
// } else {
//   document.write(`<br/> El ${number3} es el más grande.`);
// }

// 8.- Escribe un programa que pida un número y diga si es divisible por 2
// Ejemplo:
// input: 10
// input: 15
// Output: El 10 es divisible por 2.
// Output: El 15 no es divisible por 2.

// let divis1 = prompt("Por favor, introduzca un número: ");
// let divis2 = prompt("Por favor, introduzca otro número: ");
// if (divis1 % 2 === 0) {
//   document.write(`<br/>${divis1} es divisible por 2.`);
// } else {
//   document.write(`<br/>${divis1} no es divisible por 2.`);
// }
// if (divis2 % 2 === 0) {
//   document.write(`<br/>${divis2} es divisible por 2.`);
// } else {
//   document.write(`<br/>${divis2} no es divisible por 2.`);
// }

// 10.- Escribe un programa que pida un número y nos diga si es divisible por 2, 3, 5 o 7 (sólo hay que comprobar si lo es por uno de los cuatro)
// Ejemplo:
// input: 20
// Output: El 20 es divisible por 2.

// let selec1 = prompt("Por favor, ingrese un número:");
// if (selec1 % 2 === 0) {
//   document.write(`<br/>${selec1} es divisible por 2.`);
// } else if (selec1 % 3 === 0) {
//   document.write(`<br/>${selec1} es divisible por 3.`);
// } else if (selec1 % 5 === 0) {
//   document.write(`<br/>${selec1} es divisible por 5.`);
// } else if (selec1 % 7 === 0) {
//   document.write(`<br/>${selec1} es divisible por 7.`);
// } else {
//   document.write(`<br/>${selec1} no es divisible por 2, 3, 5 ni por 7.`);
// }

// 11.- Añadir al ejercicio anterior que nos diga por cuál de los cuatro es divisible (hay que decir todos por los que es divisible)
// Ejemplo:
// input: 20
// input: 210
// Output: El 20 es divisible por 2 y por 5.
// Output: El 210 es divisible por 2, por 3, por 5 y por 7.
// let selec1;
// do {
//   selec1 = prompt("Por favor, ingrese un número:");
//   if (isNaN(selec1)) {
//     alert("¡¡¡Solo se admiten números!!!");
//   }
// } while (isNaN(selec1));
// let dividable = true;
// if (selec1 % 2 === 0) {
//   document.write(`<br/>${selec1} es divisible por 2.`);
// }
// if (selec1 % 3 === 0) {
//   document.write(`<br/>${selec1} es divisible por 3.`);
// }
// if (selec1 % 5 === 0) {
//   document.write(`<br/>${selec1} es divisible por 5.`);
// }
// if (selec1 % 7 === 0) {
//   document.write(`<br/>${selec1} es divisible por 7.`);
// }
// dividable = false;
// if (dividable) {
//   document.write(`<br/>${selec1} no es divisible por 2, 3, 5 ni por 7.`);
// }
