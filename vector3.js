const leer = require("prompt-sync")();

function main(params) {
    let vector=[1,true,"A",false,true,23,"Z"];
    //1er 4to 7mo elemento=
    vector[0]=1000;
    vector[3]=true;
    vector[6]="ZZ";
    console.log("vector:",vector);
    
    
}
main();