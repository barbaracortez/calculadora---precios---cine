document.getElementById("formulario").addEventListener("submit", (e) => {
  e.preventDefault();
  let edadInput = document.getElementById("edad").value;
  let resultado = document.getElementById("resultado");

  if (!edadInput || isNaN(edadInput)) {
    resultado.textContent = "Por favor, ingresá una edad válida.";
    return;
  }

  let edad = parseInt(edadInput);
  let precio;

  if (edad < 13) {
    precio = 500;
  } else if (edad <= 64) {
    precio = 1000;
  } else {
    precio = 700;
  }

  resultado.textContent = "Tu entrada cuesta: $ " + precio;
});
