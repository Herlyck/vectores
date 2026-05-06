const leer = require("prompt-sync")();


function main() {
    // const tareas = ["Lavar ropa", "Ordenar cuarto", "Practicar programacion"];
    const TAREAS_2 =[];
    let tarea=0;
    let tareaTemporal="def";

    console.log("cuantas tareas desea agregar?");
    tarea = Number(leer());

    console.log("Agregando", tarea, "tareas");
    for (let i = 0; i < tarea; i++) {
        console.log("agregue tarea");
        tareaTemporal=leer();
        TAREAS_2.push(tareaTemporal);
    }
    console.log(TAREAS_2);
}
main();