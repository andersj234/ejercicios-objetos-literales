let coche={
    color: 'rojo',
    marca: 'ford',
    modelo: 'focus',
    motor:{cilindros:4,
           capacidad:2.2}
}

document.getElementById("div").innerHTML =`<h1>${coche.motor.cilindros}</h1>`