document.getElementById("desplegablebtn").addEventListener("click", function() {
  var opciones = document.getElementById("opciones");
  if (opciones.style.display === "block") {
    opciones.style.display = "none";  
  } else {
    opciones.style.display = "block";
  }
});

document.getElementById("desplegablepantalon").addEventListener("click", function() {
  var opcionespantalon = document.getElementById("opcionespantalon");
  if (opcionespantalon.style.display === "block") {
    opcionespantalon.style.display = "none";  
  } else {
    opcionespantalon.style.display = "block";
  }
});

alert("Esta es una pagina en progreso si tienes alguna recomendacion, queja o felicitaciones dejame saberlo en nuestro buzon.")
