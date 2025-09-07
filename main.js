document.getElementById("formulario").addEventListener("submit", (e) => {
  e.preventDefault();

  const edadInput = document.getElementById("edad").value;
  const resultado = document.getElementById("resultado");

  if (!edadInput || isNaN(edadInput) || edadInput < 0) {
    resultado.textContent = "Por favor, ingresá una edad válida.";
    resultado.style.color = "red";
    return;
  }

  const edad = parseInt(edadInput);
  let precio, categoria;

  if (edad < 13) {
    precio = 500;
    categoria = "Niño";
  } else if (edad <= 64) {
    precio = 1000;
    categoria = "Adulto";
  } else {
    precio = 700;
    categoria = "Senior";
  }

  resultado.textContent = `${categoria}: tu entrada cuesta $${precio}`;
  resultado.style.color = "#1e3a8a";
});
