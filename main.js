document.getElementById("formulario").addEventListener("submit", (e) => {
    e.preventDefault();
    let edad = parseInt(document.getElementById("edad").value);
    let precio; 

if (edad < 13) {
    precio = 500;
}else if (edad <= 64){
    precio = 1000
} else {
    precio = 700;
}

document.getElementById("resultado").textContent = "Tu entrada cuesta: $" + precio; 

})








