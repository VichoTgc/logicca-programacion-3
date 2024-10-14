//esperar a que el DOM cargue completamente
document.addEventListener("DOMContentLoaded", function(){

    const botonCalcular = document.getElementById("calcularBtn");
    const inputField= document.getElementById("numberInput");

    if(!botonCalcular || !inputField){
        console.error("Elementos no encontrados en el DOM");
        return;
    }

    botonCalcular.addEventListener("click", calcularFactorial);
});

//Funcion para calcular factorial
function factorial(num) {
    if (num === 0|| num===1) {
        return 1;
    } let resultado = 1;

    for (let i=num; i>1; i--) {
        resultado *= i;
    }
    return resultado;
}

//calcular y mostrar el factorial
function calcularFactorial(){
    const input = document.getElementById("numberInput").value;
    const numero= parseInt(input);

    const resultado = document.getElementById("resultado");

    //verificar si es numero valido

    if (isNaN(numero)||numero <0){
        resultado.innerText = "Por favor, ingrese un numero positivo valido";
    }
    else{
        //Calcular y mostrar en el Dom
        const factorialResultado = factorial(numero);
        resultado.innerText = `El factorial de ${numero} es ${factorialResultado}`;
    }
}