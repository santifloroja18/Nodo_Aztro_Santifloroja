//Un agrónomo desea una forma rápida de encontrar cuantos litros de pesticida debe aplicar a un conjunto de terrenos de forma trapezoidal, si por cada metro cuadrado debe aplicar 1.5 litros de pesticida. Además le piden que determine cuantos metros de cerca eléctrica son necesarios para rodear todo el terreno.

function calcularAreaTrapecio(baseMenor, baseMayor, altura) {
    return ((baseMenor + baseMayor) / 2) * altura;
  }
  
  function calcularLadoTrapecio(baseMenor, baseMayor, altura) {
    return Math.sqrt(Math.pow((baseMayor - baseMenor) / 2, 2) + Math.pow(altura, 2));
  }
  
  function calcularPesticidaYCerca(baseMenor, baseMayor, altura) {
    const area = calcularAreaTrapecio(baseMenor, baseMayor, altura);
    const pesticidaLitros = area * 1.5;
    const lado = calcularLadoTrapecio(baseMenor, baseMayor, altura);
    const perimetro = baseMenor + baseMayor + 2 * lado;
    
    return {
      area: area,
      pesticidaLitros: pesticidaLitros,
      perimetro: perimetro
    };
  }
  
  // Ejemplo de uso
  const baseMenor = 10; 
  const baseMayor = 20; 
  const altura = 15;
  
  const resultados = calcularPesticidaYCerca(baseMenor, baseMayor, altura);
  
  console.log(`Área del terreno: ${resultados.area} m²`);
  console.log(`Cantidad de pesticida necesaria: ${resultados.pesticidaLitros} litros`);
  console.log(`Metros de cerca eléctrica necesarios: ${resultados.perimetro} metros`);
  