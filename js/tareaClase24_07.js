//Tarea 24/07/23

//1 Crear un objeto con datos de usuario: username, state, role. Debe tener dos funciones, una que permita cambiar el estado y otra que muestre información del usuario.

// Tarea 1:
// Crear un objeto con datos de usuario: username, state, role. Debe tener dos funciones, una que permita cambiar el estado y otra que muestre información del usuario

// let user = {
//   username: "Jhon",
//   state: true,
//   role: "Basic",
//   changeState: function () {
//     return (this.state = !this.state);
//   },

//   mostrarDatos: function () {
//     for (const prop in this) {
//       //   console.log(prop);
//       //this['username'] => 'Jhon'
//       if (prop != "changeState" && prop != "mostrarDatos") {
//         console.log(`${prop}:${this[prop]}`); //username:'jhon'
//       }
//     }
//   },
// };

// let user = {
//   username: "LauGL",
//   state: true,
//   role: "Alumno",

//   cambiarEstado: function () {
//     return (this.state = !this.state);
//   }

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

// const productosDeMercado = [
//   {
//     nombre: "Manzanas",
//     detalle: "Manzanas frescas, variedad Golden",
//     stock: 30,
//     precioUnitario: 1.99,
//     marca: "FruitCo",
//   },
//   {
//     nombre: "Arroz",
//     detalle: "Arroz blanco, largo fino",
//     stock: 50,
//     precioUnitario: 2.75,
//     marca: "GrainCo",
//   },
//   {
//     nombre: "Leche",
//     detalle: "Leche entera, 1 litro",
//     stock: 25,
//     precioUnitario: 1.5,
//     marca: "DairyFresh",
//   },
//   {
//     nombre: "Pan",
//     detalle: "Pan de trigo integral, 500g",
//     stock: 40,
//     precioUnitario: 2.25,
//     marca: "BakeryDelight",
//   },
//   {
//     nombre: "Huevos",
//     detalle: "Huevos frescos, docena",
//     stock: 20,
//     precioUnitario: 3.99,
//     marca: "Eggcellent",
//   },
//   {
//     nombre: "Pasta",
//     detalle: "Pasta de trigo, espagueti",
//     stock: 35,
//     precioUnitario: 1.8,
//     marca: "PastaWorld",
//   },
//   {
//     nombre: "Tomates",
//     detalle: "Tomates maduros, tipo pera",
//     stock: 15,
//     precioUnitario: 0.99,
//     marca: "VeggieFresh",
//   },
//   {
//     nombre: "Aceite de Oliva",
//     detalle: "Aceite de oliva virgen extra, 500ml",
//     stock: 10,
//     precioUnitario: 6.5,
//     marca: "OliveOilCo",
//   },
//   {
//     nombre: "Pollo",
//     detalle: "Pechuga de pollo fresca, 1kg",
//     stock: 12,
//     precioUnitario: 7.99,
//     marca: "PoultryFarm",
//   },
//   {
//     nombre: "Café",
//     detalle: "Café molido, tostado oscuro",
//     stock: 18,
//     precioUnitario: 4.25,
//     marca: "CoffeeLovers",
//   },
// ];

// const listarProductos = (productos) => {
//   productos.forEach((producto, index) => {
//     let i = index + 1;
//     if (i > 3) {
//       return;
//     }
//     document.write(
//       `Producto nº ${i}: <br>Nombre: ${producto.nombre}<br>Detalle: ${producto.detalle}<br>Precio: ${producto.precioUnitario} €<br>`
//     );
//   });
// };

// const buscarDetalle = (palabra, productos) => {
//   let detalle = productos.filter((producto) => {
//     return producto.nombre.toLowerCase().includes(palabra.toLowerCase());
//   });

//   return detalle;
// };

// let productos = [
//   {
//     nombre: "Ipad",
//     detalle: "Tablet de Apple",
//     stock: 10,
//     precio: 200,
//     marca: "Apple",
//   },
//   {
//     nombre: "Iphone",
//     detalle: "Teléfono inteligente de Apple",
//     stock: 50,
//     precio: 350,
//     marca: "Apple",
//   },

//   {
//     nombre: "MacBook",
//     detalle: "Notebook de Apple",
//     stock: 20,
//     precio: 500,
//     marca: "Apple",
//   },

//   {
//     nombre: "Ipen",
//     detalle: "Lapiz de Apple",
//     stock: 10,
//     precio: 250,
//     marca: "Apple",
//   },
// ];

// const listProd = (array = productos) => {
//   document.write("Lista de productos<br>");
//   document.write("-------------------<br>");
//   document.write("<ol>");
//   array.forEach(function (producto) {
//     document.write(`<li>
//         Producto: ${producto.nombre}
//         <ul>
//         <li>Detalle: ${producto.detalle}</li>
//         <li>Precio: $${producto.precio}</li>
//         </ul>
//         </li>`);
//   });
//   document.write("</ol>");
// };

// //termino => 'h' 'ma', 'pad'
// const searchProd = (termino) => {
//   //entrar al arreglo, recorrer objeto por objeto y comparar el nombre del producto con el termino. Si parte o todo el nombre contiene ese termino mostrarlo

//   let productosEncontrados = productos.filter(function (producto) {
//     return producto.nombre.toLowerCase().includes(termino.toLowerCase()); //pad
//   });

//   listProd(productosEncontrados);
// };
