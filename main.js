let edad = parseInt(prompt("¿Cuántos años tenés"));

if (isNaN(edad)) {
    document.getElementById("resultado").textContent = "Por favor, ingresá un número válido";
} else {
    let precio;
} if (edad < 13) {
    precio = 500;
}else if (edad <= 64){
    precio = 1000
} else {
    precio = 700;
}

document.getElementById("resultado").textContent = "Tu entrada cuesta: $" + precio; 

