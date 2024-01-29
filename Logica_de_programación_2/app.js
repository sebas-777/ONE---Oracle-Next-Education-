let numeroSecreto = generarNumeroSecreto();

console.log('Numero secreto: ', numeroSecreto);
console.log('Numero aleatorio: ', Math.floor(Math.random()*10));

function asignarTextoElemento(elemento,texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;

}

function verificarIntento(){
    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);
    console.log('tipo de dato numero usuario:' ,typeof(numeroUsuario));
    console.log('tipo de dato numero secereto:' ,typeof(numeroSecreto));
    console.log(numeroUsuario);
    console.log('Numero secreto: ', numeroSecreto);
    console.log('Comparacion de numeros :', numeroSecreto == numeroUsuario);

} 

function generarNumeroSecreto() {
    return Math.floor(Math.random()*10)+1;
   
}

asignarTextoElemento('H1','Juego del Numero Secreto!');
asignarTextoElemento('p','Indica un numero del 1 al 10');