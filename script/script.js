let selectColor = document.getElementById("selectColor");
let selectFont = document.getElementById("selectFont");
let selectBg = document.getElementById("selectBg");

let boton = document.getElementById("aplicar");

boton.addEventListener("click", () => {

  // value = lo que eligió el usuario
  let color = selectColor.value;
  let fuente = selectFont.value;
  let fondo = selectBg.value;

  document.body.style.backgroundColor = fondo;
  document.body.style.color = color;
  document.body.style.fontFamily = fuente;

  alert(
    "Color: " + color +
    " | Fuente: " + fuente +
    " | Fondo: " + fondo
  );

});
