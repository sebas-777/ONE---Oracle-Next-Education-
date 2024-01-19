alert('Bienvenida y bienvenida a nuestro sitio web');

//Variables
let numeroUsuario = prompt("Elige un numero entre 1 y 10");
let numeroSecreto = 6;

console.log(numeroUsuario);
/*
comparacion
*/
if(numeroUsuario == numeroSecreto){
    //Acertamos, fue verdadera la condicion
    alert(`Acertaste el numero : ${numeroUsuario}`)
} else{
    // la condicion es falsa 
    alert('Lo siento, no acertastes el numero ')
}

