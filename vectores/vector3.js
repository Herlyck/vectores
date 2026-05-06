const leer = require("prompt-sync")();



function main(params) {
    const VECTOR=[1,true,"A",false,true,23,"Z"];
    VECTOR[0]=1000;
    VECTOR[3]=true;
    VECTOR[6]="ZZ";
    console.log("vector:",VECTOR);
    
    
}
main();