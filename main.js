document.getElementById("formulario").addEventListener("submit", (e) => {
  e.preventDefault();

  const edadInput = document.getElementById("edad").value;
  const resultado = document.getElementById("resultado");

  if (!edadInput || isNaN(edadInput)) {
    resultado.textContent = "Por favor, ingresá una edad válida.";
    return;
  }

  const edad = parseInt(edadInput);
  let precio;

  if (edad < 13) {
    precio = 500;
  } else if (edad <= 64) {
    precio = 1000;
  } else {

   let edad = parseInt(prompt("¿Cuántos años tenés")); 
   let precio; 

 if (edad < 13) {
    precio = 500;
} else if (edad <= 64){
    precio = 1000
} else {
    precio = 700;
  }


  resultado.textContent = "Tu entrada cuesta: $ " + precio;
});
