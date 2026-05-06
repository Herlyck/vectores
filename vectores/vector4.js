const leer = require("prompt-sync")();


function main(params) {
    const VECTOR=["A","B","C"];
    VECTOR.splice(1,1);
    console.log(VECTOR);
}
main();