
console.log('Estamos en el archivo de la Calculadora ');

let numeroUno= Number(prompt('Ingresa un número para realizar tu cálculo'))
let numeroDos= Number(prompt('Ingresa otro número para realizar tu cálculo'))

console.log('El primer número es:', numeroUno);
console.log('El segundo número es:', numeroDos);

function escribir (r)
console.log(r);

function sumar( a, b){
    let resultado= a + b;
    escribir(resultado)
    }


function resta( a, b){
    let resultado= a - b;

 
}

sumar(numeroUno, numeroDos);