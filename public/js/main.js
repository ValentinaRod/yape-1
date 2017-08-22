$(document).ready(function () {



//funcion para el tiempo de pantalla 3
var intervalo;
function timer(){
  intervalo = setInterval(nuevoCodigo, 21000);
}

function nuevoCodigo(){
  alert(“Tu código ya no es válido, intenta pidiendo uno nuevo.“)
}
//fin pantalla3
  
});