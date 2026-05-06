const leer = require("prompt-sync")();

function main(params) {
    const VECTOR=[1,2,3];
    [VECTOR[0],VECTOR[2]]=[VECTOR[2],VECTOR[0]];
    console.log("vector: ",VECTOR);
    
}
main();