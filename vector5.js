const leer = require("prompt-sync")();

function main(params) {
    let vector=[1,2,3];

    [vector[0],vector[2]]=[vector[2],vector[0]];
    console.log("vector: ",vector);
    
}
main();