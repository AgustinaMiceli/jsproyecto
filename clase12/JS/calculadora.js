
console.log('Estamos en el archivo de la Calculadora ');

var numuno, numdos , suma , resta, multiplicar, dividir;

let resultado = document. getElementById('resultado');

function calcular(){
    numuno = document.getElementById('numuno').value;
    numdos = document.getElementById('numdos').value;


numuno = Number(numuno);
numdos = Number(numdos);


if(numuno == 0 && numdos== 0){
    alert("Por favor ingresa los números para las operaciones")
}else{
    suma= numuno + numdos;

}

console.log('La suma de los dos valores es:' + suma);

resultado.innerHTML = 'La suma de los dos valores es:' + suma; 

}

function resta() {
    numuno = document.getElementById('numuno').value;
    numdos = document.getElementById('numdos').value;
    numuno = Number(numuno);
    numdos = Number(numdos);
    resta = numuno - numdos;
    console.log(`La resta de los dos valores es: ${resta}`);
    resultado.innerHTML = (`La resta de los dos valores es: ${resta}`);
}

function multiplicar() {
    numuno = document.getElementById('numuno').value;
    numdos = document.getElementById('numdos').value;
    numuno = Number(numuno);
    numdos = Number(numdos);
    multiplicar = numuno * numdos;
    console.log(`La multiplicación de los dos valores es: ${multiplicar}`);
    resultado.innerHTML = `La multiplicación de los dos valores es: ${multiplicar}`
}

function dividir() {
    numuno = document.getElementById('numuno').value;
    numdos = document.getElementById('numdos').value;
    numuno = Number(numuno);
    numdos = Number(numdos);
    condicion()
    dividir = numuno / numdos;
    //console.log(`La división de los dos valores es: ${dividir}`);
    resultado.innerHTML = `La division de los dos valores es: ${dividir}`
}

function condicion() {
    if(numuno == 0 || numdos == 0){
        alert("No podés ingresar")
        location.href= ('../index.html');
    }else{
        dividir = numuno / numdos;
    }
}
