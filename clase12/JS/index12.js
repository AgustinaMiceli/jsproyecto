
console.log("Operador Módulo:");
//Operador matemático del módulo %

//let numUno = Number(prompt('Introduce un número para saber si es par o impar:'));

let numUno= 100;

if(numUno % 2 == 0 ){
    console.log(numUno);
    console.log("El número ingresado es PAR");
}else{
console.log("El número ingresado NO es PAR")
}

let resultado = numUno / 2; 

console.log('El resultado de la división es: ' , resultado);

// OPERADORES LÓGICOS


// FUNCIONES: Seccion de un codigo que se ejecuta cuando lo llamo
function miFuncion (){
console.log('Me llamaste para que haga algo');
}

miFuncion();

let numDos=100;
let numTres=200;

function sumar( a, b){
    return a + b
}


console.log('El resultado de la suma es:' , sumar(numDos, numTres));


// BUCLES: ES ALGO QUE SE REPITE SOLO

let frutas = [
    "Manzana",
    "Pera",
    "Frutilla",
    "Pera",
    "Mora",
    "Limón",
    "Kiwi"
    ];

    console.log(frutas[0]);
    console.log(frutas[1]);
    console.log(frutas[2]);
    console.log(frutas[3]);
    console.log(frutas[4]);
    console.log(frutas[5]);
    console.log(frutas[6]);


    // BUCLE FOR lo que dice es que va a recorrer desde el punto 0 hasta el array  y le va a ir sumando 1
    for (let index = 0; index < frutas.length ; index++) {
        console.log(' Las frutas son: ', frutas[0]);
    }

    console.log('============================== '); 

    for (let index = 0; index < frutas.length ; index++) {
        console.log(' Las frutas son: ', index, frutas[index]);
    } 