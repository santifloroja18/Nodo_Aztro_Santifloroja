
function calcularRectangulo() {

    let base = parseFloat(document.getElementById('Base').value);
    let altura = parseFloat(document.getElementById('Altura').value);
    let area = base * altura;
    let perimetro = 2 * ( base * altura );

    document.getElementById('area').innerHTML = area;
    document.getElementById('perimetro').innerHTML = perimetro;

}

function calcularCirculo() {

    let Radio = parseFloat(document.getElementById('Radio').value);
    const pi = Math.PI;
    let area = (Radio * Radio) * pi;
    let circunferencia = (Radio * 2) * pi;

    document.getElementById('area').innerHTML = area;
    document.getElementById('circunferencia').innerHTML = circunferencia;

}