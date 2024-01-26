alert('Bienvenida y bienvenida a nuestro sitio web');
//Variables
let numeroSecreto = Math.floor(Math.random()*numeroMaximoPosible)+1;
let numeroUsuario =0;
let intentos = 1;
let maximoIntentos = 3;
let numeroMaximoPosible = 10;

while (numeroUsuario != numeroSecreto ) { 

    let numeroUsuario =parseInt(prompt(`Ingresa un numero entre 1 y ${numeroMaximoPosible} `));
        
    /*
    comparacion
    */
    if(numeroUsuario == numeroSecreto){
        //Acertamos, fue verdadera la condicion
        alert(`Acertaste el numero : ${numeroUsuario}. Lo hicistes en ${intentos} ${intentos == 1 ? "vez" : "veces"}`);
    } else{
        if (numeroUsuario > numeroSecreto){
        // numero usuario menor 
             alert('El numero secreto es menor ');
        }else{
            // numero usuario mayor 
            alert('El numero secreto es mayor ')
        }
          //Incrementamos el contador cuando no acierta 
        intentos++; 
        if(intentos > maximoIntentos){
            alert(`Llegastes al numero Maximo de ${maximosIntentos} intentos`);
            break;
        }      
    }

}


