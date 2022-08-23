/**
 * Excepciones.
 */
 function promptDirection(question){
    let result = prompt(question);
    if(result.toLowerCase() == "left") return "L";
    if(result.toLowerCase() == "right") return "R";
    throw new Error("Invalid Direction: " + result);
}

function look() {
    if(promptDirection("Which way?") == "L"){
        return "a house";
    } else {
        return "two angry bears";
    }
}

try {
    console.log("Mira a ", look());
} catch (error) {
    console.log("Hubo un error: " + error);
}