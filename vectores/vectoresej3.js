const leer = require("prompt-sync")();

function main(params) {
    const TAREAS = [];
    let tareaCargada = "def";
    let tareaCantidad = 0;
    let tareaEliminar = 0;

    console.log("cuantas tareas quiere cargar?");
    tareaCantidad = Number(leer());

    for (let i = 0; i < tareaCantidad; i++) {
        console.log("cargue una tarea");
        tareaCargada = leer();
        TAREAS.push(tareaCargada)
        console.log(TAREAS); //para ver como carga 1 x 1


    }
    console.log("que tarea desea eliminar?")
    tareaEliminar = Number(leer());
    TAREAS.splice(tareaEliminar, 1);
    console.log(TAREAS);
}
main();