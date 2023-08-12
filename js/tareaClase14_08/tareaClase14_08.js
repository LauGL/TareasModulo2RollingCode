// 7. Lista de tareas con eliminación:
// - Mejora el ejercicio de "Lista de tareas" del nivel medio anterior.
// - Agrega un botón "Eliminar" junto a cada elemento de la lista.
// - Al hacer clic en el botón "Eliminar", elimina el elemento correspondiente de
// la lista.

class Alquiler {
  constructor(coche, nombre, edad) {
    this.coche = coche;
    this.nombre = nombre;
    if (edad >= 18 && !isNaN(edad)) {
      this.edad = edad;
    } else {
      alert(
        "Es obligatorio tener la mayoría de edad e introducir un valor correcto."
      );
    }
  }
}

const alquileres = JSON.parse(localStorage.getItem("alquileres")) || [];

let coche = document.querySelector("#input1");
let nombre = document.querySelector("#input2");
let edad = document.querySelector("#input3");

const guardarRegistros = (event) => {
  event.preventDefault();

  const alquiler = new Alquiler(coche.value, nombre.value, edad.value);

  if (alquiler.edad >= 18 && !isNaN(alquiler.edad)) {
    alquileres.push(alquiler);
  }
  localStorage.setItem("alquileres", JSON.stringify(alquileres));

  document.querySelector("#formAlquiler");
  coche.focus();
  cargarRegistro();
};

let tablaDatos = document.querySelector("tbody");

const cargarRegistro = () => {
  tablaDatos.innerHTML = "";
  coche.value = "";
  nombre.value = "";
  edad.value = "";

  alquileres.map((alquiler, index) => {
    let fila = document.createElement("tr");
    let celdas = `<td>${alquiler.coche}</td> <td>${alquiler.nombre}</td> <td>${alquiler.edad}</td><td>
    <button class="btn btn-danger btn-sm" onclick="borrarAlumno(${index})">X</button></td>`;
    fila.innerHTML = celdas;
    tablaDatos.append(fila);
  });
};

const borrarAlumno = (index) => {
  let validarEliminar = confirm(
    `¿Está seguro que ${alquileres[index].nombre} ha terminado su alquiler?`
  );
  if (validarEliminar) {
    alquileres.splice(index, 1);
    localStorage.setItem("alquileres", JSON.stringify(alquileres));
    alert("Alquiler finalizado.");
    cargarRegistro();
  }
};

// 9. Galería de imágenes:
// - Crea una galería de imágenes en tu HTML con miniaturas de imágenes.
// - Al hacer clic en una miniatura, muestra la imagen completa en un cuadro
// modal.
// - Permite al usuario navegar entre las imágenes utilizando botones "Anterior"
// y "Siguiente" en el cuadro modal

const myModal = new bootstrap.Modal(document.getElementById("modalImg"));
let currentIndex = 0; // Variable para rastrear la imagen actual

const imagenesCoche = [
  "images/fiat-panda-2020.jpg",
  "images/peugeot-408-62cde88556499.webp",
  "images/caddy.jpg",
  "images/marco_polo.jpg",
];

const verImagenes = (index) => {
  currentIndex = index;
  const modalImage = document.getElementById("modalImage");
  modalImage.src = imagenesCoche[currentIndex];
  myModal.show(); // Muestra el modal
};

const cambiarImagen = (direccion) => {
  currentIndex =
    (currentIndex + direccion + imagenesCoche.length) % imagenesCoche.length;
  const modalImage = document.getElementById("modalImage");
  modalImage.src = imagenesCoche[currentIndex];
};

document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowLeft") {
    cambiarImagen(-1); // Cambia a la imagen anterior
  } else if (event.key === "ArrowRight") {
    cambiarImagen(1); // Cambia a la siguiente imagen
  }
});
