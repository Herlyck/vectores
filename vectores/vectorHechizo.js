const leer = require("prompt-sync")();
const INGREDIENTES = ["1-Raiz de valeriana", "2-Ojo de escarabajo", "3-Pluma de hipogrifo", "4-Mandragora negra", "5-Sangre de dragon"];
const INGREDIENTE_POS_MAX = 2;
const INGREDIENTE_POS_MIN = 0;
function main() {
    const ingredientesFinales = [];

    let opcionIngrediente = 0;

    console.log("que ingrediente encontraste?");
    console.log(INGREDIENTES);

    for (let i = 0; i < 3; i++) {
        console.log("Ingrese la opcion del Ingrediente");
        opcionIngrediente = Number(leer());
        
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