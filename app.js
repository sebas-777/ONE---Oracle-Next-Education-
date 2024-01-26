let hora = document.querySelector('h1');
hora.innerHTML = "Hora del Desafío";

function mensajeBoton() {
    alert('El botón fue clicado');
} 

function ciudadBrasil() {
    let ciudad = prompt('cual es el nombre de la ciudad de Brasil');
    alert(`Estuve en la ciudad ${ciudad} y me acorde de ti`);
} 

function alerta() {
    alert( "Yo amo JS");
} 

function suma() {
    let numero1 = parseInt(prompt('Ingrese el numero 1'));
    let numero2 = parseInt(prompt('Ingrese el numero 2')); 
    let resultado = numero1 + numero2;
    
    alert(`el resultado de la suma es ${resultado}`);

}