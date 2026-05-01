const leer = require("prompt-sync")();

function main(params) {
    let vector = [2,45,34];
    let resultado = 0;

    

    for (i = 0; i < vector.length; i++) {
        resultado = "[" + vector[i] + "]"; //vector[2]=34, con el for pasa por todos los numeros y te lo muestra
        console.log(resultado);
        
    }
}
main();