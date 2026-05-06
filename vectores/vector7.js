const leer = require("prompt-sync")();


function main(params) {
    const VECTOR = [1];
    VECTOR.push(2, 3, 4);
    console.log(VECTOR);
    VECTOR.reverse();

    for (let i = 0; i < VECTOR.length; i++) {
        VECTOR[i] *= -1;
    }
    console.log(VECTOR);



}
main();