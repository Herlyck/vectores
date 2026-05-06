const leer = require("prompt-sync")();


function main() {
    const TAREAS = ["Lavar ropa", "Ordenar cuarto", "Practicar programacion"];
    let numeroTarea = 0;

    console.log("Mostrando", TAREAS.length, "Tareas");

    for (let i = 0; i < TAREAS.length; i++) {
        numeroTarea = i + 1;
        console.log("Tarea N°", numeroTarea, TAREAS[i]);

    }
    console.log("###Fin de Tareas###");

}
main();