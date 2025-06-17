document.getElementById("calcularBtn").addEventListener("click", ()=> {
   let edad = parseInt(prompt("¿Cuántos años tenés")); 
   let precio; 

 if (edad < 13) {
    precio = 500;
} else if (edad <= 64){
    precio = 1000
} else {
    precio = 700;
}

document.getElementById("resultado").textContent = "Tu entrada cuesta: $" + precio; 

})