let numero =parseInt(window.prompt('escoge un numero'))

document.getElementById("div").innerHTML =`<p>este es tu numero: ${numero}</p>`

let estilo ={
    color: 'red'
}
if(numero < 100){
    estilo.color = 'green'
}else if(numero >=100 && numero <200){
    estilo.color = 'yellow'
}
else{
    estilo.color = 'red'
}

document.getElementById("div").innerHTML =`<p>este es tu numero: ${numero}</p>`
document.getElementById("div").style.color = estilo.color