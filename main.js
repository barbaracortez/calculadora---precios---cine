let edad = parseInt(prompt("¿cuantos años tenés"));

let precio;

if(edad < 13) {
    precio = 500;
} else if ( edad >= 13 && edad <=64 ){
    precio = 1000;
} else {
    precio = 700;
}

alert("tu entrada cuesta: $ " + precio);
