let estilos = [
  { color: "white", bg: "black", font: "Arial" },
  { color: "black", bg: "pink", font: "Georgia" },
  { color: "blue", bg: "yellow", font: "Verdana" }
];

let boton = document.getElementById("btn");

boton.addEventListener("click", () => {

  let i = Math.floor(Math.random() * estilos.length);

  document.body.style.color = estilos[i].color;
  document.body.style.backgroundColor = estilos[i].bg;
  document.body.style.fontFamily = estilos[i].font;

});
