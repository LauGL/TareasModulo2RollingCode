// Tarea clase 5/7/23

//En un establecimiento de juegos existen cuatro salas: Arcade, Consolas, Rol, Realidad Virtual. Si un usuario paga 4 créditos puede acceder a todas, si paga 3 solo podrá acceder a las tres primeras, si paga 2 a las dos primeras y si paga 1 solo a la primera sala.

// let credito = parseInt(
//   prompt(
//     "Por favor introduzca créditos para acceder a las salas: \n4 créditos:Arcade, Consolas, Rol, Realidad Virtual \n3 créditos: Arcade, Consolas y Rol \n2 créditos: Arcade y Consolas \n1 crédito: Arcade"
//   )
// );

// switch (true) {
//   case credito === 4:
//     document.write(
//       "Tiene acceso a todas las salas: Arcade, Consolas, Rol y Realidad virtual."
//     );
//     break;
//   case credito === 3:
//     document.write("Tiene acceso a tres salas: Arcade, Consolas y Rol.");
//     break;
//   case credito === 2:
//     document.write("Tiene acceso a dos salas: Arcade y Consolas.");
//     break;
//   case credito === 1:
//     document.write("Tiene acceso a la sala Arcade.");
//   default:
//     document.write("Introduce un crédito correcto.");
// }

// Tarea clase 10/7/23

//Escribe un programa que pida una frase, devuelva la cantidad de vocales que tiene la frase y muestre en consola cuales son.

let frase = prompt("Por favor, ingrese una frase:");
fraseEnMinusculas = frase.toLowerCase();

let vocales = ["a", "e", "i", "o", "u"];

let contador = 0;

let vocalesEncontradas = [];

if (!isNaN(frase)) {
  alert("Lo sentimos, el valor introducido no es válido.");
}

for (let i = 0; i < fraseEnMinusculas.length; i++) {
  let letra = fraseEnMinusculas[i];

  if (vocales.includes(letra)) {
    contador++;

    if (!vocalesEncontradas.includes(letra)) {
      vocalesEncontradas.push(letra);
    }
  }
}

console.log("Laantidad de vocales en su frase es:", contador);
console.log("Y las vocales encontradas han sido:", vocalesEncontradas);
