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

//Tarea 24/07/23

//1 Crear un objeto con datos de usuario: username, state, role. Debe tener dos funciones, una que permita cambiar el estado y otra que muestre información del usuario.

// let user = {
//   username: "LauGL",
//   state: "Offline",
//   role: "Alumno",

//   cambiarEstado: function (nuevoEstado) {
//     this.state = nuevoEstado;
//   },

//   seeInfo: function () {
//     for (const data in this) {
//       if (data != "cambiarEstado" && data != "seeInfo") {
//         console.log(`${data}:${this[data]}`);
//       }
//     }
//   },
// };

// 2 Tarea 2:
// Crear un arreglo de objetos que contenga información de productos (por lo menos 10). Los datos que debe almacenar cada objeto son:

// Nombre
// Detalle
// Stock
// Precio unitario
// Marca
// Crear una función que muestre en pantalla una lista de los productos con nombre, detalle y precio.
// Crear una función de búsqueda donde le pasemos como parámetro un termino y busque productos cuyo nombre coincida en parte con el termino enviado como parámetro.

const productosDeMercado = [
  {
    nombre: "Manzanas",
    detalle: "Manzanas frescas, variedad Golden",
    stock: 30,
    precioUnitario: 1.99,
    marca: "FruitCo",
  },
  {
    nombre: "Arroz",
    detalle: "Arroz blanco, largo fino",
    stock: 50,
    precioUnitario: 2.75,
    marca: "GrainCo",
  },
  {
    nombre: "Leche",
    detalle: "Leche entera, 1 litro",
    stock: 25,
    precioUnitario: 1.5,
    marca: "DairyFresh",
  },
  {
    nombre: "Pan",
    detalle: "Pan de trigo integral, 500g",
    stock: 40,
    precioUnitario: 2.25,
    marca: "BakeryDelight",
  },
  {
    nombre: "Huevos",
    detalle: "Huevos frescos, docena",
    stock: 20,
    precioUnitario: 3.99,
    marca: "Eggcellent",
  },
  {
    nombre: "Pasta",
    detalle: "Pasta de trigo, espagueti",
    stock: 35,
    precioUnitario: 1.8,
    marca: "PastaWorld",
  },
  {
    nombre: "Tomates",
    detalle: "Tomates maduros, tipo pera",
    stock: 15,
    precioUnitario: 0.99,
    marca: "VeggieFresh",
  },
  {
    nombre: "Aceite de Oliva",
    detalle: "Aceite de oliva virgen extra, 500ml",
    stock: 10,
    precioUnitario: 6.5,
    marca: "OliveOilCo",
  },
  {
    nombre: "Pollo",
    detalle: "Pechuga de pollo fresca, 1kg",
    stock: 12,
    precioUnitario: 7.99,
    marca: "PoultryFarm",
  },
  {
    nombre: "Café",
    detalle: "Café molido, tostado oscuro",
    stock: 18,
    precioUnitario: 4.25,
    marca: "CoffeeLovers",
  },
];

// const listarProductos = (productos) => {
//   productos.forEach((producto, index) => {
//     let i = index + 1;
//     if (i > 3) {
//       return;
//     }
//     console.log(
//       `Producto nº ${i}: \nNombre: ${producto.nombre}\nDetalle: ${producto.detalle}\nPrecio: ${producto.precioUnitario} €\n`
//     );
//   });
// };

const buscarDetalle = (palabra, productos) => {
  let detalle = productos.filter((producto) => {
    return producto.nombre.toLowerCase().includes(palabra.toLowerCase());
  });

  return detalle;
};
