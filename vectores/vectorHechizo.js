const leer = require("prompt-sync")();
const INGREDIENTES = ["Raiz de valeriana", "Ojo de escarabajo", "Pluma de hipogrifo", "Mandragora negra", "Sangre de dragon"];
const INGREDIENTE_POS_MAX = 2;
const INGREDIENTE_POS_MIN = 0;
function main() {
    const ingredientesFinales = [];

    let opcionIngrediente = 0;

    let numeroIngrediente = 0;

    console.log("Mostrando", INGREDIENTES.length, "Tareas");

    for (let i = 0; i < INGREDIENTES.length; i++) {
        numeroIngrediente = i + 1;
        console.log("Ingrediente N°", numeroIngrediente, INGREDIENTES[i]);

    }

    console.log("que ingrediente encontraste?");
    // console.log(INGREDIENTES);

    for (let i = 0; i < 3; i++) {
        console.log("Ingrese la opcion del Ingrediente");
        opcionIngrediente = Number(leer())-1;

        if (opcionIngrediente <= INGREDIENTE_POS_MAX && opcionIngrediente >= INGREDIENTE_POS_MIN) {
            console.log("ingrediente aceptado!");
            ingredientesFinales.push(INGREDIENTES[opcionIngrediente]);
        } else {
            console.log("Ingrediente NO aceptado, cuidado!");

        }
    }
    console.log(ingredientesFinales);


}
main();