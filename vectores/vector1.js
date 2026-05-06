const leer = require("prompt-sync")();

function main(params) {
    const vector = [1, 2, 3, 4, 5, 6, 7];
    console.log("primer elemento:", vector[0]);
    console.log("cuarto elemento:", vector[3]);
    console.log("ultimo elemento:", vector[6]);
}
main();