/**
 * Tema: Variables.
 */
console.log("\n********** Variables **********\n");
var numero1;
numero1 = 4;
var numero2;
numero2 = 2;
console.log("Numero 1: " + numero1 + " Numero 2: " + numero2);


/**
 * Tema: Cadenas
 */
console.log("\n********** Cadenas **********\n");
var frase1;
frase1 = "Ejemplo comillas dobles";
var frase2;
frase2 = 'Ejemplo comillas simples';
var frase3;
frase3 = `Ejemplo comillas ${frase1} invertidas`;

console.log(frase3);


/**
 * Tema: Condicionales.
 */
 console.log("\n********** Condicionales **********\n");
 console.log(numero1 > numero2);


console.log("\n********** Operador lógico AND **********\n");
console.log(true && false);


console.log("\n********** Operador lógico OR **********\n");
console.log(true || false);


console.log("\n********** if / else **********\n");
let number1 = 4;
let number2 = 2;
if(number1 > number2){
    console.log("El número 1 es mayor que numero 2");
}
else if(number1 == number2){
    console.log("Los numeros son iguales");
}
else {
    console.log("El numero 2 es mayor que numero 1");
}

/**
 * Tema: Switch
 */

console.log("\n********** Switch **********\n");
switch(prompt("Cómo está el clima?")){
    case "lluvioso": 
        console.log("No te vayas a mojar");
        break;
    case "soleado":
        console.log("Ponte bloqueador");
        break;
    case "nublado":
        console.log("Tapate bien");
        break;
    default:
        console.log("No se como está el clima");
        break;
}

console.log("Aquí salimos del switch");

/**
 * Tema: Ciclos condicionales.
 */
console.log("\n********** While **********\n");
let numberWhile = 0;
while(numberWhile <= 12){
    console.log(numberWhile);
    numberWhile += 2;
}

console.log("Aquí ya salió del while " + numberWhile);

/**
 * Tema: Ciclo condicional de una iteración minimo.
 */
console.log("\n********** Do While **********\n");
let numberDoWhile = 24;
do {
    numberDoWhile+=2;
    console.log(numberDoWhile);
} while (numberDoWhile < 20);
console.log("Aquí sale del Do While " + numberDoWhile);


/**
 * Tema: Ciclo For con iteracción controlada.
 */
console.log("\n********** For **********\n");
for(let i = 0; i <= 12; i++){
    console.log(i);
}
console.log("Aquí salimos del For");

/**
 * Tema: Arreglos.
 */

console.log("\n********** Arreglos **********\n");
let listaNumeros = [2,3,5,7,11,234];

console.log(listaNumeros[0]);

listaNumeros.push(16);
listaNumeros.push(939);

console.log(listaNumeros);
console.log(listaNumeros.length);

let listaPalabras = ["Explorer", "MissionComander", "LaunchX", "Innovacion"];
console.log(listaPalabras);
console.log(listaPalabras.length);

let palabra = "Explorer";
console.log(palabra[2]);
console.log(palabra.length);


/**
 * Tema: Objetos.
 */

 console.log("\n********** Objetos **********\n");

 let explorer = {
    nombre: "Nombre del Explorer",
    email: "email@innovacicion.mx",
    numReg: 12345,
    mission: "Frontend",
    proyectos: ["AbogaBot", "Taquería", "Pastelería", "Vacunación"],
    proPer: {
        escolar: "Tareas",
        profesional: "Trabajo",
        personal: "Negocio"
    }
 };

 console.log(explorer);
 console.log(explorer.email);
 console.log(explorer.proPer);