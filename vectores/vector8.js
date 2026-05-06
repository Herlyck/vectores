const leer = require("prompt-sync")();

function main(params) {
    const VECTOR = [2,45,34];
    let resultado = 0;

    

    for (i = 0; i < VECTOR.length; i++) {
        resultado = "[" + VECTOR[i] + "]"; //vector[2]=34, con el for pasa por todos los numeros y te lo muestra
        console.log(resultado);
        
    }
}
main();