const leer = require("prompt-sync")();

function main() {
    const TAREAS = [];

    let tareaCargada = "def";
    let tareaCantidad = 0;
    let tareaMarcada = 0;
    


    console.log("cuantas tareas quiere cargar?");
    tareaCantidad = Number(leer());

    for (let i = 0; i < tareaCantidad; i++) {
        console.log("cargue una tarea");
        tareaCargada = leer();
        TAREAS.push(tareaCargada)
        console.log(TAREAS); 

    }
    console.log("que tarea desea marcar?");
    tareaMarcada = Number(leer()); 
    console.log("###Marcando tarea N°"+(tareaMarcada+1)+"###");
    TAREAS[tareaMarcada]=TAREAS[tareaMarcada] + "- MODIFICADO";   
    console.log(TAREAS);
    

}
main();


    //tareas.splice(tareaMarcada, 0,  "-Tarea Completada");
    // console.log(tareas);