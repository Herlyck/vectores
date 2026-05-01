const leer = require("prompt-sync")();

function main(params) {
    let vector=["A","B","C"];
    //eliminar segundo elemento
    vector.splice(1,1);
    console.log(vector);
    
}
main();