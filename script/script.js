// Arreglos

let fuentes = ["Arial", "Georgia", "Courier New", "Verdana"];

let fondos = ["black", "pink", "lightblue", "yellow"];

let coloresTexto = ["white", "red", "blue", "green"];

// Traemos elementos del HTML
let texto = document.getElementById("texto");
let boton = document.getElementById("btn");

// Evento click
boton.addEventListener("click", () => {

  // Indices aleatorios
  let indFuente = Math.floor(Math.random() * fuentes.length);
  let indFondo = Math.floor(Math.random() * fondos.length);
  let indColor = Math.floor(Math.random() * coloresTexto.length);

  //  Aplicamos estilos
  texto.style.fontFamily = fuentes[indFuente];
  document.body.style.backgroundColor = fondos[indFondo];
  texto.style.color = coloresTexto[indColor];

});