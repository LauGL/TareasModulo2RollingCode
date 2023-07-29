// 1- Crea un objeto llamado auto que tenga algunas características como el color, marca, modelo y si está encendido o apagado. Crea los métodos necesarios para permitir encender y apagar el auto.

// Output:
// objeto.encender();
// objeto.apadar()
// auto encendido
// El auto se apagó

// class Auto {
//   constructor(color, marca, modelo, estado) {
//     this.color = color;
//     this.marca = marca;
//     this.modelo = modelo;
//     this.estado = estado;
//   }
//   cambiarEstado() {
//     this.estado = !this.estado;
//     if (this.estado == true) {
//       console.log(`Su ${this.marca} está encendido`);
//     } else {
//       console.log(`Su ${this.marca} está apagado`);
//     }
//   }
// }
// let auto1 = new Auto("Rojo", "Ford", "Mustang", false);

// 2-Escribe un programa que cree un objeto "cuenta" con las siguientes propiedades:
// Una propiedad titular con el valor "Alex".
// Una propiedad saldo, teniendo como valor inicial 0.
// Un método ingresar() que permita añadir dinero a la cuenta, pasando la cantidad como parámetro
// Un método extraer() que permita retirar la cantidad pasada como parámetro.
// Un método informar() que retorne la información del estado de la cuenta.

// Utiliza este objeto para mostrar la descripción, ingresar y extraer dinero y volver a mostrar la descripción del estado de la cuenta.

// class Cuenta {
//   constructor(titular, saldo = 0) {
//     this.titular = titular;
//     this.saldo = saldo;
//   }
//   ingresar(dineroIngresado) {
//     if (dineroIngresado < 0) {
//       console.warn(
//         `El valor ${dineroIngresado} no es correcto. Por favor, realice un ingreso correcto.`
//       );
//     } else {
//       this.saldo += dineroIngresado;
//       console.log(`Su saldo final tras el ingreso es: ${this.saldo}€ `);
//     }
//   }
//   extraer(dineroRetirado) {
//     if (this.saldo < dineroRetirado || isNaN(dineroRetirado)) {
//       console.warn(
//         `El valor ${dineroRetirado} no es válido o excede a su saldo actual.`
//       );
//     } else {
//       this.saldo -= dineroRetirado;
//       console.log(`Su saldo final tras retirar es: ${this.saldo}€ `);
//     }
//   }
//   informar() {
//     console.log(`El saldo actual de su cuenta es: ${this.saldo}€`);
//   }
// }

// let cuenta1 = new Cuenta("Álex");
// cuenta1.informar();
// cuenta1.ingresar(60);
// cuenta1.extraer(40);
// cuenta1.informar();

// 3-Escribe una clase que permita crear distintos objetos “rectángulos”, con las propiedades de alto y ancho, mas los métodos necesarios para modificar y mostrar sus propiedades, calcular el perímetro y el área

// class Rectangulo {
//   constructor(alto = 0, ancho = 0) {
//     this.alto = alto;
//     this.ancho = ancho;
//   }
//   calcularValorRectangulo() {
//     if (this.alto === this.ancho || isNaN(this.alto, this.ancho)) {
//       console.warn("Por favor, introduzca un valor correcto.");
//     } else {
//       let valorPerimetro = (this.alto + this.ancho) * 2;
//       console.log(
//         `El valor del perímero de su rectángulo es: ${valorPerimetro}`
//       );
//       let valorArea = this.alto * this.ancho;
//       console.log(`El valor del área de su rectángulo es: ${valorArea}`);
//     }
//   }
//   informar() {
//     console.log(`El alto de su rectángulo es: ${this.alto}`);
//     console.log(`El ancho de su rectángulo es: ${this.ancho}`);
//   }
// }

// let rectangulo1 = new Rectangulo(30, 50);
// let rectangulo2 = new Rectangulo(
//   parseInt(prompt("Por favor introduzca el alto de su rectángulo: ")),
//   parseInt(prompt("Por favor introduzca el ancho del mismo: "))
// );

// 4- Escribe una clase Producto para crear objetos. Estos objetos, deben presentar las propiedades código, nombre y precio, además del método imprime datos, el cual escribe por pantalla los valores de sus propiedades.
// Posteriormente, cree tres instancias de este objeto y guárdalas en un array.
// Por último, utilice el método imprime datos para mostrar por pantalla los valores de los tres objetos instanciados.

// class Producto {
//   constructor(codigo, nombre, precio) {
//     this.codigo = codigo;
//     this.nombre = nombre;
//     this.precio = precio;
//   }
//   imprimirDatos() {
//     document.write("<strong> Datos de su producto: </strong><br><br>");
//     document.write(`Código: ${this.codigo} <br>`);
//     document.write(`Nombre: ${this.nombre} <br>`);
//     document.write(`Precio: ${this.precio}€ <br><br>`);
//   }
// }

// let producto1 = new Producto(309871, "Nueces malagueñas", 10.5);
// let producto2 = new Producto(709867, "Chirimoyas", 7.3);
// let producto3 = new Producto(598065, "Higos", 5.45);

// let productos = [producto1, producto2, producto3];

// producto1.imprimirDatos();
// producto2.imprimirDatos();
// producto3.imprimirDatos();

// 5- Crea una clase llamada Persona que siga las siguientes condiciones:
// Sus propiedades son: nombre, edad, DNI, sexo (H hombre, M mujer), peso y altura, año de nacimiento. Si quieres añadir alguna propiedad extra puedes hacerlo.
// Los métodos que se debe poder utilizar  son:
// mostrarGeneracion: este método debe mostrar un mensaje indicando a qué generación pertenece la persona creada y cual es el rasgo característico de esta generación.
// Para realizar este método tener en cuenta la siguiente tabla de generaciones:

// esMayorDeEdad: indica si es mayor de edad, devuelve un mensaje indicando que la persona es mayor de edad.
// mostrarDatos: devuelve toda la información del objeto.
// generaDNI(): genera un número aleatorio de 8 cifras.

class Persona {
  constructor(nombre, edad, dni, peso, altura, nacimiento, sexo) {
    this.nombre = nombre;
    this.edad = edad;
    this.dni = dni;
    this.peso = peso;
    this.altura = altura;
    this.nacimiento = nacimiento;
    this.sexo = sexo;
  }
  mostrarGeneracion() {
    switch (true) {
      case this.nacimiento >= 1930 && this.nacimiento <= 1948:
        document.write(
          "Su generación es: <b>Silent Generation</b> Los niños de la post-guerra <br>"
        );
        document.write(
          "El rasgo característico de su generación es: La auteridad 😑. <br><br>"
        );
        break;
      case this.nacimiento <= 1968:
        document.write("Su generación es: <b>Baby Boom</b><br>");
        document.write(
          "El rasgo característico de su generación es: La ambición 😊. <br><br>"
        );
        break;
      case this.nacimiento <= 1980:
        document.write("Su generación es: <b>Generación X</b><br>");
        document.write(
          "El rasgo característico de su generación es: Obsesión por el éxito 🤑. <br><br>"
        );
        break;
      case this.nacimiento <= 1993:
        document.write("Su generación es: <b>Generación Y </b>Millennials<br>");
        document.write(
          "El rasgo característico de su generación es: Frustación 😖. <br><br>"
        );
        break;
      default:
        this.nacimiento <= 2010;
        document.write(
          "Su generación es: <b>Generación Z </b>Irreverencia<br>"
        );
        document.write(
          "El rasgo característico de su generación es: Frustación 😖. <br><br>"
        );
        break;
    }
  }
  esMayorDeEdad() {
    if (this.edad >= 18) {
      document.write(`Su edad es ${this.edad}, es mayor de edad.`);
    } else {
      document.write(`Su edad es ${this.edad}, es menor de edad.`);
    }
  }
  mostrarDatos() {
    document.write(
      `Nombre: ${this.nombre} <br>`,
      `Edad: ${this.edad} <br>`,
      `DNI: ${this.dni} <br>`,
      `Peso: ${this.peso} <br>`,
      `Altura: ${this.altura}<br>`,
      `Año de nacimiento: ${this.nacimiento} <br>`,
      `Sexo: ${this.sexo} <br><br>`
    );
  }
  generarDni() {
    document.write("El número alternativo de su DNI es: ");
    document.write(Math.floor(Math.random() * 100000000));
  }
}

let persona1 = new Persona("Manolo", 31, 39807645, 97, 178, 1992, "Masculino");
