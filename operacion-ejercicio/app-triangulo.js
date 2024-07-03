// let num1 = prompt("Ingrese un número:");
// let num2 = prompt("Ingrese un número:");
// let suma = num1+num2;
// console.log(suma);


function sumar() {

    let num1 = parseFloat(document.getElementById('n1').value);
    let num2 = document.getElementById('n2').value;
    let suma = num1 + parseFloat(num2);

    document.getElementById('resultado1').innerHTML = suma;
    document.getElementById('resultado2')

}