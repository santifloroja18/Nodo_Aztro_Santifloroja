// Un gerente de una tienda debe liquidar a sus empleados según el numero de días trabajados en el mes y horas extras. Además debe descontar la salud (4%) y la pensión (4%), así como un deducible del 3% referente a alimentación. Valor por día trabajado: $43000, Valor Hora Extra Diurna $6915, Nocturna $9681 y festivos $11064.

function calcularIMC() {
    const peso = parseFloat(document.getElementById('peso').value);
    const altura = parseFloat(document.getElementById('altura').value);

    if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
        document.getElementById('resultado').innerText = "Por favor, ingrese valores válidos para el peso y la altura.";
        return;
    }

    // Calcular el IMC
    const imc = peso / (altura * altura);

    // Determinar el estado de salud
    let estado = '';
    if (imc < 18.5) {
        estado = 'Bajo peso';
    } else if (imc >= 18.5 && imc < 25) {
        estado = 'Normal';
    } else if (imc >= 25 && imc < 30) {
        estado = 'Sobrepeso';
    } else if (imc >= 30 && imc < 35) {
        estado = 'Obesidad grado I';
    } else if (imc >= 35 && imc < 40) {
        estado = 'Obesidad grado II';
    } else if (imc >= 40) {
        estado = 'Obesidad grado III';
    }

    // Mostrar el resultado
    document.getElementById('resultado').innerText = `IMC: ${imc.toFixed(2)} - Estado: ${estado}`;
}
