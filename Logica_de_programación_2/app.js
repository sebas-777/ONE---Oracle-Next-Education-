let numeroSecreto = 0;
let intentos = 0;

console.log('Numero secreto: ', numeroSecreto);



function asignarTextoElemento(elemento,texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;

}

function verificarIntento(){
    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);
   
    
    if(numeroSecreto === numeroUsuario){
        asignarTextoElemento('p',`Acertaste el numero en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        if (numeroUsuario > numeroSecreto) {
            asignarTextoElemento('p','El numero secreto es menor');
        }else{
            asignarTextoElemento('p','El numero secreto es mayor');
        }
        intentos++;
        limpiarCampos();
    }
    return;
} 

function limpiarCampos() {
    document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto() {
    return Math.floor(Math.random()*10)+1;
}

function condicionesIniciales() {
    asignarTextoElemento('H1','Juego del Numero Secreto!');
    asignarTextoElemento('p','Indica un numero del 1 al 10');
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}
function reiniciarJuego() {
    //limpiar caja
    limpiarCampos();
    //Indicar mensaje de intervalo de numeros 
    //Generar el numero aleatorio
    //Inicializar el numero intentos
    condicionesIniciales();
    //Deshabilitar el boton de nuevo juego 
    document.querySelector('#reiniciar').setAttribute('disabled','true');

}

condicionesIniciales();