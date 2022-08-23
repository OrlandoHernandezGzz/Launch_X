const cuadrado = function(x){
    return x * x;
}

// let numero = prompt("Escribe el numero: ");
console.log(cuadrado(12));



const ruido = function(){
    console.log("Kataplum!");
}

ruido();


const exponencial = function(base, exponente) {
    let resultado = 1;
    for(let i = 0; i < exponente; i++){
        resultado *= base;
    }
    return resultado;
}

console.log(exponencial(2, 10));




console.log(sumar(2,2));
function sumar(x, y){
    return x + y;
}

/**
 * Arrow Function.
 */

const restar = (a, b) => {
    return a - b;
}
console.log(restar(4,8));


function saludar(quien) {
    console.log("Hola " + quien);
}
saludar("Explorer");
console.log("bye");