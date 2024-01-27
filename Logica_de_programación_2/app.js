let numeroSecreto = generarNumeroSecreto();

console.log('Numero secreto: ', numeroSecreto);
console.log('Numero aleatorio: ', Math.floor(Math.random()*10));

function asignarTextoElemento(elemento,texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;

}

function intentoDeUsuario(){
    alert('Click desde el boton');
} 

function generarNumeroSecreto() {
    return Math.floor(Math.random()*10)+1;
   
}

asignarTextoElemento('H1','Juego del Numero Secreto!');
asignarTextoElemento('p','Indica un numero del 1 al 10');