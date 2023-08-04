// 1. Cambiar el color de fondo de un elemento:
// - Crea un botón en tu HTML con un ID único.
// - Al hacer clic en el botón, cambia el color de fondo de un elemento (por
// ejemplo, un párrafo) a un color aleatorio.

let parr = document.querySelector("#texto_cambio");

const cambiarFondo = () => {
  if (parr.classList == "m m-2") {
    parr.classList = "bg bg-dark text text-white m m-2";
    parr.textContent = "Ahora mi fondo es negro.";
  } else {
    parr.classList = "m m-2";
    parr.textContent = "Al pulsar el botón azul, mi color de fondo cambiará.";
  }
};

// 2. Contador de clics:
// - Crea un botón en tu HTML con un ID único y un párrafo para mostrar el
// número de clics.
// - Al hacer clic en el botón, incrementa el contador y muestra el número de
// clics en el párrafo.

let contador = document.querySelector("#texto_contador");
let clics = 0;

const contarClics = () => {
  clics++;

  contador.textContent = `Su contador actual está en:  ${clics}`;
};

// 3. Cambiar el estilo de un elemento con el mouse:
// - Crea un párrafo en tu HTML con un ID único.
// - Al pasar el mouse sobre el párrafo, cambia el color de fondo y el color del
// texto del párrafo

let parrEstilos = document.querySelector("#texto-estilos");

const cambiarEstilos = () => {
  parrEstilos.classList = "bg bg-black text text-white m m-2";
};

const devolverEstilos = () => {
  parrEstilos.classList = "bg bg-white text text-dark m m-2";
};

// 4. Reloj digital:
// - Crea un párrafo en tu HTML con un ID único.
// - Utilizando JavaScript, actualiza el contenido del párrafo para mostrar la
// hora actualizada cada segundo.

let horaActual = document.querySelector("#textoHora");
const fecha = new Date();

const hora = fecha.getHours();
const minutos = fecha.getMinutes();
const segundos = fecha.getSeconds();

horaActual.textContent = `La hora actual es: ${hora} : ${minutos} : ${segundos}`;

// 5. Lista de tareas:
// - Crea un formulario con un campo de texto y un botón en tu HTML.
// - Al hacer clic en el botón, agrega el contenido del campo de texto como un
// nuevo elemento de lista <li> a una lista <ul> existente en la página.

// 6. Cambiar el tamaño de texto:
// - Crea un párrafo en tu HTML con un ID único y dos botones: "Aumentar" y
// "Disminuir".
// - Al hacer clic en "Aumentar", aumenta el tamaño del texto en el párrafo.
// - Al hacer clic en "Disminuir", disminuye el tamaño del texto en el párrafo.
